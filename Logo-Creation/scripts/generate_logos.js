const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'generated_logos');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Helper to wrap content in SVG tag
const wrapSvg = (content, size = 200, defs = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${defs ? `<defs>${defs}</defs>` : ''}
  ${content}
</svg>
`.trim();

// --- Colors (Tailwind mappings approximate) ---
const COLORS = {
  black: '#000000',
  blue: '#2563EB',   // blue-600
  purple: '#9333EA', // purple-600
  green: '#16A34A',  // green-600
  orange: '#EA580C', // orange-600
  white: '#FFFFFF',
};

// --- Water Droplet Logo ---
const generateWaterDroplet = (filename, variant, colorName) => {
  const color = COLORS[colorName] || COLORS.black;
  const isVariant = variant !== 'none';

  let content = '';

  // Container
  if (variant === 'circle') {
    content += `<circle cx="100" cy="100" r="95" fill="${color}" />`;
  } else if (variant === 'rounded-square') {
    content += `<rect x="5" y="5" width="190" height="190" rx="40" fill="${color}" />`;
  }

  // Paths
  const strokeColor = isVariant ? 'white' : color;
  const fillColor = isVariant ? 'white' : color;
  const highlightFill = isVariant ? 'rgba(0,0,0,0.15)' : 'white';

  // Left bracket
  content += `<path d="M 60 55 Q 45 100 60 145" stroke="${strokeColor}" stroke-width="16" stroke-linecap="round" fill="none" />`;

  // Right bracket
  content += `<path d="M 140 55 Q 155 100 140 145" stroke="${strokeColor}" stroke-width="16" stroke-linecap="round" fill="none" />`;

  // Droplet
  content += `<path d="M 100 55 C 100 55 128 82 128 108 C 128 125 115 138 100 142 C 85 138 72 125 72 108 C 72 82 100 55 100 55 Z" fill="${fillColor}" />`;

  // Highlight
  content += `<path d="M 102 132 Q 115 130 120 120 Q 116 128 108 132 Q 105 133 102 132 Z" fill="${highlightFill}" />`;

  fs.writeFileSync(path.join(OUTPUT_DIR, filename), wrapSvg(content));
  console.log(`Generated: ${filename}`);
};

// --- C-Shape Logo ---
const generateCShape = (filename, gradientName) => {
  const gradients = {
    blue: { start: "#7B9FB8", end: "#2C4A5E" },
    purple: { start: "#B18FD8", end: "#5A3A7C" },
    green: { start: "#8FD8A8", end: "#3A7C52" },
    orange: { start: "#F5A962", end: "#C55A11" },
    black: { start: "#6B7280", end: "#111827" }
  };

  const colors = gradients[gradientName] || gradients.blue;
  const gradientId = `c-gradient-${gradientName}`;
  const shadowId = `shadow-${gradientName}`;

  const defs = `
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${colors.start}" />
      <stop offset="100%" stop-color="${colors.end}" />
    </linearGradient>
    <filter id="${shadowId}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
      <feOffset dx="2" dy="4" result="offsetblur" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  `;

  let content = `
    <g filter="url(#${shadowId})">
      <path d="M 150 40 A 60 60 0 0 0 40 100 A 60 60 0 0 0 150 160" stroke="url(#${gradientId})" stroke-width="40" stroke-linecap="round" fill="none" />
    </g>
    <path d="M 145 45 A 55 55 0 0 0 50 95" stroke="rgba(255,255,255,0.25)" stroke-width="6" fill="none" stroke-linecap="round" />
  `;

  fs.writeFileSync(path.join(OUTPUT_DIR, filename), wrapSvg(content, 200, defs));
  console.log(`Generated: ${filename}`);
};

// --- Cone Tag Logo ---
const generateConeTag = (filename, variant, colorName) => {
  const color = COLORS[colorName] || COLORS.black;
  const isVariant = variant !== 'none';

  let content = '';

  // Container
  if (variant === 'circle') {
    content += `<circle cx="100" cy="100" r="95" fill="${color}" />`;
  } else if (variant === 'rounded-square') {
    content += `<rect x="5" y="5" width="190" height="190" rx="40" fill="${color}" />`;
  }

  const strokeColor = isVariant ? 'white' : color;
  const fillColor = isVariant ? 'white' : color;
  const highlightFill = isVariant ? 'rgba(0,0,0,0.15)' : 'white';

  // Left angle bracket
  content += `<path d="M 70 75 L 45 100 M 70 125 L 45 100" stroke="${strokeColor}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;

  // Right angle bracket
  content += `<path d="M 130 75 L 155 100 M 130 125 L 155 100" stroke="${strokeColor}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;

  // Cone
  content += `<path d="M 100 55 C 100 55 120 75 120 95 C 120 108 111 118 100 122 C 89 118 80 108 80 95 C 80 75 100 55 100 55 Z" fill="${fillColor}" />`;

  // Highlight
  content += `<path d="M 102 110 Q 112 108 115 100 Q 112 106 105 110 Q 103 111 102 110 Z" fill="${highlightFill}" />`;

  fs.writeFileSync(path.join(OUTPUT_DIR, filename), wrapSvg(content));
  console.log(`Generated: ${filename}`);
};

// --- Execution ---

// Water Droplet
generateWaterDroplet('water_droplet_none.svg', 'none', 'black');
generateWaterDroplet('water_droplet_circle_black.svg', 'circle', 'black');
generateWaterDroplet('water_droplet_rounded_square_blue.svg', 'rounded-square', 'blue');
generateWaterDroplet('water_droplet_rounded_square_purple.svg', 'rounded-square', 'purple');
generateWaterDroplet('water_droplet_rounded_square_green.svg', 'rounded-square', 'green');
generateWaterDroplet('water_droplet_rounded_square_orange.svg', 'rounded-square', 'orange');

// C-Shape
generateCShape('c_shape_blue.svg', 'blue');
generateCShape('c_shape_purple.svg', 'purple');
generateCShape('c_shape_green.svg', 'green');
generateCShape('c_shape_orange.svg', 'orange');
generateCShape('c_shape_black.svg', 'black');

// Cone Tag
generateConeTag('cone_tag_none.svg', 'none', 'black');
generateConeTag('cone_tag_circle_black.svg', 'circle', 'black');
generateConeTag('cone_tag_circle_blue.svg', 'circle', 'blue');
generateConeTag('cone_tag_circle_purple.svg', 'circle', 'purple');
generateConeTag('cone_tag_circle_green.svg', 'circle', 'green');
generateConeTag('cone_tag_circle_orange.svg', 'circle', 'orange');

console.log('All logos generated.');
