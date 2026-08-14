const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const http = require('http');

const ARTIFACTS_DIR = 'C:/Users/DELL/.gemini/antigravity/brain/c2f832d8-af85-4c82-b693-91fd17ec797a';
const DIST_DIR = path.join(__dirname, 'dist');

if (!fs.existsSync(ARTIFACTS_DIR)) {
  fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });
}

// Simple static file server for dist
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0].split('#')[0];
  if (reqPath === '/' || !path.extname(reqPath)) {
    reqPath = '/index.html';
  }
  const filePath = path.join(DIST_DIR, reqPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(DIST_DIR, 'index.html'), (err2, indexData) => {
        if (err2) {
          res.writeHead(404);
          res.end('Not found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(indexData);
        }
      });
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(4173, '127.0.0.1', async () => {
  console.log('Static server listening on http://127.0.0.1:4173');
  try {
    console.log('Launching Puppeteer...');
    const browser = await puppeteer.launch({ 
      headless: 'new', 
      args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });

    // 1. Hero Section & Live Demo Preview
    console.log('Capturing Hero Section...');
    await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, '01_hero_live_demo_preview.png') });

    // 2. Fashion Retail Tab
    console.log('Capturing Fashion Retail Tab...');
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const text = await page.evaluate(el => el.textContent, btn);
      if (text && text.includes('Fashion Retail')) {
        await btn.click();
        break;
      }
    }
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, '02_hero_fashion_retail_tab.png') });

    // 3. Merchant Dashboard (#dashboard)
    console.log('Capturing Merchant Dashboard...');
    await page.goto('http://127.0.0.1:4173/#dashboard', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, '03_merchant_dashboard_sync_badge.png') });

    // 4. Services Hub (#services)
    console.log('Capturing Services Hub...');
    await page.goto('http://127.0.0.1:4173/#services', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, '04_services_hub.png') });

    // 5. Portfolio Showcase (#work)
    console.log('Capturing Portfolio Showcase...');
    await page.goto('http://127.0.0.1:4173/#work', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, '05_portfolio_showcase.png') });

    // 6. Pricing Section (#pricing)
    console.log('Capturing Pricing Section...');
    await page.goto('http://127.0.0.1:4173/#pricing', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, '06_pricing_section.png') });

    await browser.close();
    console.log('All screenshots captured successfully!');
  } catch (e) {
    console.error('Error during screenshot capture:', e);
  } finally {
    server.close();
    process.exit(0);
  }
});
