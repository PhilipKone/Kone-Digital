const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'generated_logos');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper to wrap content in SVG tag
const wrapSvg = (content, width = 200, height = 200, defs = '') => `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${defs ? `<defs>${defs}</defs>` : ''}
  ${content}
</svg>
`.trim();

const GOLD_DEFS = `
  <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#D4AF37" />
    <stop offset="50%" stop-color="#F1C40F" />
    <stop offset="100%" stop-color="#9A7B0C" />
  </linearGradient>
`;

const ICON_PATH = `
  <path d="M 55 10 Q 85 10 85 45 Q 85 80 45 100 Q 65 80 65 45 Q 65 10 55 10 Z" fill="url(#gold-gradient)" />
  <path d="M 45 130 Q 15 130 15 95 Q 15 60 55 40 Q 35 60 35 95 Q 35 130 45 130 Z" fill="url(#gold-gradient)" />
`;

// S-Icon variant without gradient (for solid colors)
const getIconPathSolid = (color) => `
  <path d="M 55 10 Q 85 10 85 45 Q 85 80 45 100 Q 65 80 65 45 Q 65 10 55 10 Z" fill="${color}" />
  <path d="M 45 130 Q 15 130 15 95 Q 15 60 55 40 Q 35 60 35 95 Q 35 130 45 130 Z" fill="${color}" />
`;

const generateLogo = (filename, options) => {
  const { 
    layout = 'icon-only', // icon-only, stacked, horizontal
    theme = 'gold',       // gold, dark, light
    width = 400,
    height = 400
  } = options;

  let content = '';
  let defs = '';
  const textColor = theme === 'light' ? '#FFFFFF' : '#000000';
  const iconColor = theme === 'gold' ? 'url(#gold-gradient)' : (theme === 'light' ? '#FFFFFF' : '#000000');

  if (theme === 'gold') {
    defs = GOLD_DEFS;
  }

  const iconScale = layout === 'icon-only' ? 2 : 1;
  const iconTranslate = layout === 'icon-only' ? 'translate(100, 60)' : 
                       layout === 'stacked' ? 'translate(150, 40)' : 'translate(20, 5)';

  const iconGroup = `
    <g transform="${iconTranslate} scale(${iconScale})">
      ${theme === 'gold' ? ICON_PATH : getIconPathSolid(iconColor)}
    </g>
  `;

  if (layout === 'icon-only') {
    content = iconGroup;
  } else if (layout === 'stacked') {
    content = `
      ${iconGroup}
      <text x="200" y="240" font-family="Inter, sans-serif" font-weight="900" font-size="48" fill="${textColor}" text-anchor="middle">SEDEMSON</text>
      <text x="200" y="275" font-family="Inter, sans-serif" font-weight="400" font-size="14" fill="${textColor}" text-anchor="middle" letter-spacing="4">STONE CRAFTSMANSHIP</text>
    `;
  } else if (layout === 'horizontal') {
    content = `
      ${iconGroup}
      <g transform="translate(140, 65)">
        <text x="0" y="0" font-family="Inter, sans-serif" font-weight="900" font-size="42" fill="${textColor}">SEDEMSON</text>
        <text x="0" y="25" font-family="Inter, sans-serif" font-weight="400" font-size="12" fill="${textColor}" letter-spacing="3">STONE CRAFTSMANSHIP</text>
      </g>
    `;
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, filename), wrapSvg(content, width, height, defs));
  console.log(`Generated: ${filename}`);
};

// Generate variants
generateLogo('sedemson_icon_gold.svg', { layout: 'icon-only', theme: 'gold', width: 400, height: 400 });
generateLogo('sedemson_logo_stacked_gold.svg', { layout: 'stacked', theme: 'gold', width: 400, height: 400 });
generateLogo('sedemson_logo_horizontal_gold.svg', { layout: 'horizontal', theme: 'gold', width: 500, height: 150 });

generateLogo('sedemson_logo_stacked_dark.svg', { layout: 'stacked', theme: 'dark', width: 400, height: 400 });
generateLogo('sedemson_logo_horizontal_dark.svg', { layout: 'horizontal', theme: 'dark', width: 500, height: 150 });

generateLogo('sedemson_logo_stacked_light.svg', { layout: 'stacked', theme: 'light', width: 400, height: 400 });
generateLogo('sedemson_logo_horizontal_light.svg', { layout: 'horizontal', theme: 'light', width: 500, height: 150 });

console.log('Sedemson logos generated successfully.');
