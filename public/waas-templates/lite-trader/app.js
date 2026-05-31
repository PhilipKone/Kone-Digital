// Kofi's Premium Furniture - WaaS App Engine (Ghana)
// Author: Antigravity AI

// 1. Custom Premium SVG Line Art Vectors for Furniture
const FURNITURE_SVGS = {
  'prod-01': `
    <svg viewBox="0 0 100 100" class="furniture-svg" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M15,45 L85,45 M20,45 L20,72 M80,45 L80,72 M35,45 L35,60 M65,45 L65,60" />
      <rect x="12" y="38" width="76" height="7" rx="2.5" fill="#D4AF37" />
    </svg>
  `,
  'prod-02': `
    <svg viewBox="0 0 100 100" class="furniture-svg" stroke="#D4AF37" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Curved top seat -->
      <path d="M15,35 Q50,47 85,35 L80,42 Q50,54 20,42 Z" fill="#D4AF37" stroke="none" />
      <!-- Central curved pillar support -->
      <path d="M40,42 Q40,65 30,73 L70,73 Q60,65 60,42" stroke-width="2.5" />
      <circle cx="50" cy="58" r="6" stroke-width="2.5" />
      <!-- Bottom solid flat base -->
      <rect x="22" y="73" width="56" height="6" rx="1.5" fill="#D4AF37" stroke="none" />
    </svg>
  `,
  'prod-03': `
    <svg viewBox="0 0 100 100" class="furniture-svg" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Desk Top -->
      <rect x="15" y="32" width="70" height="6" rx="1.5" fill="#D4AF37" stroke="none" />
      <!-- Left Drawer Stack -->
      <rect x="18" y="38" width="20" height="34" rx="2" />
      <line x1="22" y1="46" x2="34" y2="46" stroke-width="2" />
      <line x1="22" y1="56" x2="34" y2="56" stroke-width="2" />
      <!-- Right Leg -->
      <line x1="78" y1="38" x2="78" y2="72" stroke-width="3.5" />
      <!-- Modesty Panel -->
      <path d="M38,38 L74,38 L74,58 L38,58 Z" fill="rgba(214,175,55,0.08)" stroke-width="1.5" stroke-dasharray="3 3" />
    </svg>
  `,
  'prod-04': `
    <svg viewBox="0 0 100 100" class="furniture-svg" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Main Table -->
      <rect x="30" y="42" width="40" height="5" rx="1" fill="#D4AF37" stroke="none" />
      <line x1="35" y1="47" x2="35" y2="72" />
      <line x1="65" y1="47" x2="65" y2="72" />
      <!-- Left Chair -->
      <path d="M15,48 L22,48 L22,72 M15,48 L15,72 M15,57 L22,57" stroke-width="2" />
      <line x1="15" y1="35" x2="15" y2="48" stroke-width="2" />
      <line x1="15" y1="35" x2="20" y2="35" stroke-width="1.5" />
      <!-- Right Chair -->
      <path d="M85,48 L78,48 L78,72 M85,48 L85,72 M85,57 L78,57" stroke-width="2" />
      <line x1="85" y1="35" x2="85" y2="48" stroke-width="2" />
      <line x1="85" y1="35" x2="80" y2="35" stroke-width="1.5" />
    </svg>
  `
};

// 2. SME Catalog Data
const PRODUCTS = [
  {
    id: 'prod-01',
    name: 'Royal Mahogany Center Table',
    desc: 'Premium center table carved from seasoned local Mahogany with elegant Adinkra detailing.',
    price: 1200,
    category: 'Tables'
  },
  {
    id: 'prod-02',
    name: 'Traditional Ashanti Stool',
    desc: 'Sacred hand-carved seat from high-grade Sese wood, polished to a gorgeous natural sheen.',
    price: 250,
    category: 'Chairs'
  },
  {
    id: 'prod-03',
    name: 'Executive Odum Office Desk',
    desc: 'Solid heavy-duty desk made of seasoned Odum wood with built-in side cabinets.',
    price: 1800,
    category: 'Desks'
  },
  {
    id: 'prod-04',
    name: 'Modern Teak Dining Set (6-Seater)',
    desc: 'Exquisite 6-seater dining set made of local Teak wood. Waterproof and rot-resistant finish.',
    price: 4500,
    category: 'Dining'
  }
];

// 3. Shopping Cart State
let cart = {};

// 4. Domestic WhatsApp Ordering details
const MERCHANT_PHONE = "233551993820"; // Kone Digital representative number for demo
const GRA_LEVY_RATE = 0.05; // 5% flat local levy placeholder

// 5. DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartDrawer = document.getElementById('cart-drawer');
const cartToggleBtn = document.getElementById('cart-toggle');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const emptyState = document.getElementById('empty-state');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTax = document.getElementById('cart-tax');
const cartTotal = document.getElementById('cart-total');
const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout');

// 6. Initialize App
function init() {
  loadProducts();
  setupEventListeners();
  updateCartUI();
}

// 7. Dynamically Load Products into Grid
function loadProducts() {
  productsGrid.innerHTML = PRODUCTS.map(product => `
    <div class="product-card fade-in">
      <div class="product-graphic">
        <div class="graphic-svg-container">
          ${FURNITURE_SVGS[product.id]}
        </div>
        <span class="product-tag">${product.category}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-action-row">
          <span class="product-price">GHS ${product.price.toLocaleString()}</span>
          <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">Add to Order</button>
        </div>
      </div>
    </div>
  `).join('');
}

// 8. Cart Core Logic
window.addToCart = function(productId) {
  if (cart[productId]) {
    cart[productId].qty += 1;
  } else {
    const product = PRODUCTS.find(p => p.id === productId);
    cart[productId] = { ...product, qty: 1 };
  }
  updateCartUI();
  openCart();
};

window.removeFromCart = function(productId) {
  delete cart[productId];
  updateCartUI();
};

window.updateQty = function(productId, delta) {
  if (cart[productId]) {
    cart[productId].qty += delta;
    if (cart[productId].qty <= 0) {
      delete cart[productId];
    }
    updateCartUI();
  }
};

function openCart() {
  cartDrawer.classList.add('open');
}

function closeCart() {
  cartDrawer.classList.remove('open');
}

// 9. Update UI Calculations
function updateCartUI() {
  const items = Object.values(cart);
  
  if (items.length === 0) {
    emptyState.style.display = 'flex';
    cartItemsContainer.innerHTML = '';
    cartCount.innerText = '0';
    cartSubtotal.innerText = 'GHS 0.00';
    cartTax.innerText = 'GHS 0.00';
    cartTotal.innerText = 'GHS 0.00';
    return;
  }

  emptyState.style.display = 'none';
  cartCount.innerText = items.reduce((acc, item) => acc + item.qty, 0);

  // Render items with smaller custom SVG vectors
  cartItemsContainer.innerHTML = items.map(item => `
    <div class="cart-item">
      <div class="item-meta">
        <div class="cart-item-svg-container">
          ${FURNITURE_SVGS[item.id]}
        </div>
        <div class="item-info">
          <h4>${item.name}</h4>
          <p>GHS ${item.price.toLocaleString()} each</p>
        </div>
      </div>
      <div class="item-actions">
        <div class="qty-selector">
          <button onclick="updateQty('${item.id}', -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="updateQty('${item.id}', 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart('${item.id}')">&times;</button>
      </div>
    </div>
  `).join('');

  // Computations
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * GRA_LEVY_RATE;
  const total = subtotal + tax;

  cartSubtotal.innerText = `GHS ${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  cartTax.innerText = `GHS ${tax.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  cartTotal.innerText = `GHS ${total.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
}

// 10. Highly-Converting WhatsApp Link Generator
function handleCheckout() {
  const items = Object.values(cart);
  if (items.length === 0) return;

  // Build the message draft dynamically
  let message = `*NEW ORDER FOR KOFI'S PREMIUM FURNITURE* 🪚\n`;
  message += `-----------------------------------------\n\n`;
  message += `Hello Kofi! I'd like to place an order from your digital storefront:\n\n`;

  items.forEach(item => {
    message += `🔹 *${item.qty}x ${item.name}*\n`;
    message += `   Price: GHS ${(item.price * item.qty).toLocaleString()} (GHS ${item.price.toLocaleString()} each)\n\n`;
  });

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * GRA_LEVY_RATE;
  const total = subtotal + tax;

  message += `-----------------------------------------\n`;
  message += `💰 *Subtotal:* GHS ${subtotal.toLocaleString()}\n`;
  message += `⚡ *Local Levy (VAT/GRA):* GHS ${tax.toLocaleString()}\n`;
  message += `🔥 *Total Est:* GHS ${total.toLocaleString()}\n\n`;
  message += `📱 *Preferred Payment:* Mobile Money (MoMo)\n\n`;
  message += `✍️ *My Details:*\n`;
  message += `• Name: [Enter Your Name]\n`;
  message += `• Delivery Address: [Enter Location/Town]\n`;
  message += `• Delivery Region: [e.g., Greater Accra, Ashanti]\n\n`;
  message += `Please confirm availability and share your MoMo payment details. Thank you!`;

  // Encode URL properly and open in a new tab
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${MERCHANT_PHONE}?text=${encodedText}`;
  
  window.open(whatsappUrl, '_blank');
}

// 11. Event Listeners setup
function setupEventListeners() {
  cartToggleBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  whatsappCheckoutBtn.addEventListener('click', handleCheckout);
}

// Start the app on mount
init();
