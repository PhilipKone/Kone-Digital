const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PORT = 4321;
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(fs.readFileSync(path.join(__dirname, 'studio', 'index.html')));
  }

  if (req.method === 'GET' && req.url.startsWith('/preview/')) {
    const rel = req.url.replace('/preview/', '').split('?')[0];
    const target = path.join(__dirname, 'public', rel.endsWith('/') || !path.extname(rel) ? path.join(rel, 'index.html') : rel);
    if (fs.existsSync(target)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(fs.readFileSync(target));
    }
    res.writeHead(404); return res.end('Preview not found');
  }

  if (req.method === 'GET' && req.url === '/api/sites') {
    const pubDir = path.join(__dirname, 'public');
    const sites = fs.readdirSync(pubDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && fs.existsSync(path.join(pubDir, d.name, 'index.html')))
      .map(d => {
        const html = fs.readFileSync(path.join(pubDir, d.name, 'index.html'), 'utf8');
        const m = html.match(/<title>(.*?)<\/title>/i);
        return { slug: d.name, title: m ? m[1] : d.name, liveUrl: `https://digital.codkon.com/${d.name}/` };
      });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(sites));
  }

  if (req.method === 'POST' && req.url === '/api/generate') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        const d = JSON.parse(body);
        const slug = String(d.slug || '').toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-|-$/g, '');
        if (!slug) throw new Error('Invalid slug');
        const tplFile = d.type === 'org' ? 'organization.html' : 'catalog.html';
        let html = fs.readFileSync(path.join(__dirname, 'templates', tplFile), 'utf8')
          .replace(/\{\{BUSINESS_NAME\}\}/g, esc(d.name))
          .replace(/\{\{BUSINESS_NAME_ENC\}\}/g, encodeURIComponent(d.name))
          .replace(/\{\{SLUG\}\}/g, slug)
          .replace(/\{\{TAGLINE\}\}/g, esc(d.tagline))
          .replace(/\{\{DESCRIPTION\}\}/g, esc(d.desc))
          .replace(/\{\{WA_NUMBER\}\}/g, esc(d.wa))
          .replace(/\{\{DISPLAY_PHONE\}\}/g, esc(d.phone))
          .replace(/\{\{ACCENT\}\}/g, esc(d.accent || '#F59E0B'))
          .replace(/\{\{YEAR\}\}/g, String(new Date().getFullYear()));

        if (d.type !== 'org' && Array.isArray(d.items) && d.items.length) {
          const cards = d.items.map((it, i) => {
            const msg = encodeURIComponent(`Hello ${d.name}, I want to order ${it.name} (${it.price}).`);
            return `<article class="item"><div class="thumb">Item 0${i + 1} (4:5 Photo)</div><div class="ib"><div><h3>${esc(it.name)}</h3><p style="color:var(--muted);font-size:.84rem">${esc(it.desc)}</p></div><div class="pr"><span class="price">${esc(it.price)}</span><a class="ol" href="https://wa.me/${esc(d.wa)}?text=${msg}" target="_blank">Order &rarr;</a></div></div></article>`;
          }).join('\n    ');
          html = html.replace(/<section id="catalog" class="grid">[\s\S]*?<\/section>/, `<section id="catalog" class="grid">\n    ${cards}\n  </section>`);
        }

        const outDir = path.join(__dirname, 'public', slug);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

        let published = false;
        if (d.publish) {
          execSync(`git add public/${slug} && git commit -m "feat(client): deploy ${slug}"`, { cwd: __dirname });
          try { execSync('git push', { cwd: __dirname }); }
          catch { execSync('git -c "http.curloptResolve=github.com:443:140.82.121.4" push', { cwd: __dirname }); }
          published = true;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, slug, published, liveUrl: `https://digital.codkon.com/${slug}/` }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }
  res.writeHead(404); res.end('Not found');
});

server.listen(PORT, () => console.log(`Kone Digital Studio running at http://localhost:${PORT}`));
