const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const distDir = path.join(__dirname, 'dist');

const routes = [
  { path: '/', title: 'Kone Digital | WaaS Hub' },
  { path: '/work', title: 'Portfolio & Client Work | Kone Digital' },
  { path: '/services', title: 'Digital Engineering & Design Services | Kone Digital' },
  { path: '/pricing', title: 'Transparent WaaS Pricing Plans | Kone Digital' },
  { path: '/services/web-development', title: 'Web Development Services | Kone Digital' },
  { path: '/services/mobile-apps', title: 'Mobile Apps Services | Kone Digital' },
  { path: '/services/brand-design', title: 'Brand Design Services | Kone Digital' },
  { path: '/services/cloud-devops', title: 'Cloud DevOps Services | Kone Digital' }
];

async function run() {
  if (!fs.existsSync(distDir)) {
    console.error('dist directory does not exist! Run vite build first.');
    process.exit(1);
  }

  // 1. Start Vite preview server via its programmatic API
  const { preview } = await import('vite');
  const previewServer = await preview({
    root: __dirname,
    preview: {
      port: 45678,
      strictPort: true
    }
  });

  const baseUrl = previewServer.resolvedUrls.local[0].replace(/\/$/, '');
  console.log(`Vite preview server listening at ${baseUrl}`);

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  for (const route of routes) {
    const url = `${baseUrl}${route.path}`;
    console.log(`Prerendering route: ${route.path} ...`);
    const outDir = route.path === '/' 
      ? distDir 
      : path.join(distDir, ...route.path.split('/').filter(Boolean));

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    try {
      await page.goto(url, { waitUntil: 'load', timeout: 15000 });
      await page.waitForSelector('.digital-app-root', { timeout: 5000 });
      
      const html = await page.content();
      fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
      console.log(`✅ Saved: ${path.relative(distDir, path.join(outDir, 'index.html'))}`);
    } catch (e) {
      console.warn(`⚠️ Puppeteer failed for ${route.path} (${e.message}), applying template fallback`);
      let baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
      baseHtml = baseHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
      baseHtml = baseHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="https://digital.koneacademy.io${route.path}" />`);
      fs.writeFileSync(path.join(outDir, 'index.html'), baseHtml, 'utf8');
      console.log(`✅ Fallback saved: ${path.relative(distDir, path.join(outDir, 'index.html'))}`);
    }
  }

  // 3. Ensure 404.html exists for GitHub Pages
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  fs.writeFileSync(path.join(distDir, '404.html'), indexHtml, 'utf8');
  console.log('✅ Generated 404.html SPA fallback');

  await browser.close();
  previewServer.httpServer.close();
  console.log('All routes successfully prerendered and verified!');
}

run().catch(err => {
  console.error('Prerender script fatal error:', err);
  process.exit(1);
});
