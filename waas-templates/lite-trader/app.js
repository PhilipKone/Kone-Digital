// Kofi's Premium Furniture - WaaS App Engine (Ghana)
// Author: Antigravity AI

// 1. SME Catalog Data (Tailored for high-performance and local products)
const PRODUCTS = [
  {
    id: 'prod-01',
    name: 'Royal Mahogany Center Table',
    desc: 'Premium center table carved from seasoned local Mahogany with elegant Adinkra detailing.',
    price: 1200,
    icon: '🪵',
    category: 'Tables'
  },
  {
    id: 'prod-02',
    name: 'Traditional Ashanti Stool',
    desc: 'Sacred hand-carved seat from high-grade Sese wood, polished to a gorgeous natural sheen.',
    price: 250,
    icon: '👑',
    category: 'Chairs'
  },
  {
    id: 'prod-03',
    name: 'Executive Odum Office Desk',
    desc: 'Solid heavy-duty desk made of seasoned Odum wood with built-in side cabinets.',
    price: 1800,
    icon: '💼',
    category: 'Desks'
  },
  {
    id: 'prod-04',
    name: 'Modern Teak Dining Set (6-Seater)',
    desc: 'Exquisite 6-seater dining set made of local Teak wood. Waterproof and rot-resistant finish.',
    price: 4500,
    icon: '🍽️',
    category: 'Dining'
  }
];

// 2. Shopping Cart State
let cart = {};

// 3. Domestic WhatsApp Ordering details
const MERCHANT_PHONE = "233551993820"; // Kone Digital representative number for demo
const GRA_LEVY_RATE = 0.05; // 5% flat local levy placeholder

// 4. DOM Elements
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

// 5. Initialize App
function init() {
  loadProducts();
  setupEventListeners();
  updateCartUI();
}

// 6. Dynamically Load Products into Grid (High-Performance SVG/CSS Graphics instead of heavy photos)
function loadProducts() {
  productsGrid.innerHTML = PRODUCTS.map(product => `
    <div class="product-card fade-in">
      <div class="product-graphic">
        <span class="graphic-emoji">${product.icon}</span>
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

// 7. Cart Core Logic
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

// 8. Update UI Calculations
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

  // Render items
  cartItemsContainer.innerHTML = items.map(item => `
    <div class="cart-item">
      <div class="item-meta">
        <span class="item-icon">${item.icon}</span>
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

// 9. Highly-Converting WhatsApp Link Generator
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

// 10. Event Listeners setup
function setupEventListeners() {
  cartToggleBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  whatsappCheckoutBtn.addEventListener('click', handleCheckout);
}

// Start the app on mount
init();
