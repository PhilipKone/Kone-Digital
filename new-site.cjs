const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q, def = '') => new Promise(res => rl.question(def ? `${q} [${def}]: ` : `${q}: `, a => res(a.trim() || def)));

(async () => {
  const typeRaw = (await ask('Template type (catalog / org)', 'catalog')).toLowerCase();
  const tplFile = typeRaw.startsWith('org') ? 'organization.html' : 'catalog.html';
  const name = await ask('Client Business / Org Name');
  if (!name) throw new Error('Business name is required.');

  const defaultSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const slug = await ask('URL Slug (digital.codkon.com/<slug>)', defaultSlug);
  const tagline = await ask('Hero Headline / Tagline', 'Quality & Excellence in Accra');
  const description = await ask('Short SEO Description', `${name} — official digital showcase powered by Kone Digital.`);
  const waNumber = (await ask('WhatsApp Number (with 233)', '233551993820')).replace(/\D/g, '');
  const accent = await ask('Accent Hex Color', tplFile === 'catalog.html' ? '#F59E0B' : '#0284C7');

  let html = fs.readFileSync(path.join(__dirname, 'templates', tplFile), 'utf8')
    .replace(/\{\{BUSINESS_NAME\}\}/g, name)
    .replace(/\{\{BUSINESS_NAME_ENC\}\}/g, encodeURIComponent(name))
    .replace(/\{\{SLUG\}\}/g, slug)
    .replace(/\{\{TAGLINE\}\}/g, tagline)
    .replace(/\{\{DESCRIPTION\}\}/g, description)
    .replace(/\{\{WA_NUMBER\}\}/g, waNumber)
    .replace(/\{\{DISPLAY_PHONE\}\}/g, '+' + waNumber)
    .replace(/\{\{ACCENT\}\}/g, accent)
    .replace(/\{\{YEAR\}\}/g, String(new Date().getFullYear()));

  const outDir = path.join(__dirname, 'public', slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

  console.log(`\nCREATED: public/${slug}/index.html (${tplFile})`);
  console.log(`LIVE URL AFTER PUSH: https://digital.codkon.com/${slug}/`);
  rl.close();
})();
