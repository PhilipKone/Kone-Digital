import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';

interface ActivityItem {
  id: string;
  time: string;
  type: 'order' | 'momo' | 'visit' | 'share';
  title: string;
  detail: string;
  amount?: string;
  badge: string;
  badgeColor: string;
}

export const MerchantDashboard: React.FC = () => {
  const { currency, setCurrency, formatPrice } = useCurrency();

  // State
  const [selectedBusiness, setSelectedBusiness] = useState<string>('Ama Heritage Kente');
  const [language, setLanguage] = useState<'EN' | 'TWI' | 'GA' | 'EWE'>('EN');
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'activity'>('overview');
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isAddProductOpen, setIsAddProductOpen] = useState<boolean>(false);

  // Products State
  const [products, setProducts] = useState([
    { id: '1', title: 'Royal Kente Palazzo Set', price: 220, category: 'Apparel', status: 'In Stock' },
    { id: '2', title: 'Handcrafted Batik Duster Coat', price: 350, category: 'Luxury', status: 'In Stock' },
    { id: '3', title: 'Wide-Leg Cargo Trousers', price: 180, category: 'Casual', status: 'Low Stock' }
  ]);

  // Form State for New Product
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newCategory, setNewCategory] = useState('Apparel');

  // Activities
  const activities: ActivityItem[] = [
    {
      id: 'a1',
      time: '5m ago',
      type: 'order',
      title: 'Customer ordered via WhatsApp',
      detail: 'Kwame A. (Accra) • Royal Kente Palazzo Set',
      amount: formatPrice(220),
      badge: 'WhatsApp Order',
      badgeColor: '#25d366'
    },
    {
      id: 'a2',
      time: '24m ago',
      type: 'momo',
      title: 'MoMo Payment Prompt Initialized',
      detail: 'Sarah O. (Kumasi) • MTN Mobile Money',
      amount: formatPrice(350),
      badge: 'MTN MoMo',
      badgeColor: '#ffcc00'
    },
    {
      id: 'a3',
      time: '1h ago',
      type: 'visit',
      title: 'Catalog Viewed',
      detail: 'Visitor from Takoradi via Instagram Bio',
      badge: 'Traffic Lead',
      badgeColor: 'var(--cyan-glow)'
    },
    {
      id: 'a4',
      time: '3h ago',
      type: 'share',
      title: 'Digital Flyer Shared',
      detail: 'Shared to WhatsApp Group (Kejetia Traders Hub)',
      badge: 'Viral Share',
      badgeColor: 'var(--gold-accent)'
    }
  ];

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPrice.trim()) return;
    const item = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      price: parseFloat(newPrice) || 0,
      category: newCategory,
      status: 'In Stock'
    };
    setProducts([item, ...products]);
    setNewTitle('');
    setNewPrice('');
    setIsAddProductOpen(false);
  };

  // Translations
  const t = {
    EN: {
      planStatus: 'Starter Plan (Active)',
      visits: 'Total Page Visits',
      orders: 'WhatsApp Orders',
      sales: 'MoMo Sales Volume',
      addProduct: 'Add New Product',
      customize: 'Customize Theme',
      viewSite: 'View Live Site',
      share: 'Share on WhatsApp',
      recentActivity: 'Recent Customer Activity Stream',
      support: 'VIP WhatsApp Support'
    },
    TWI: {
      planStatus: 'Starter Plan (Ɛrekɔ so)',
      visits: 'Nnipa A Wɔaba Ha Nyinaa',
      orders: 'WhatsApp Nkratoɔ A Wɔayɛ',
      sales: 'MoMo Sika Nyinaa',
      addProduct: 'Fa Nneɛma Foforɔ Ka Ho',
      customize: 'Sesa Ahosuo',
      viewSite: 'Hwɛ Wo Wɛbsaet',
      share: 'Fa Kɔ WhatsApp So',
      recentActivity: 'Nnipa Nneyɛeɛ Nnansa Yi',
      support: 'WhatsApp Mmoa'
    },
    GA: {
      planStatus: 'Starter Plan (Etsɔɔ mli)',
      visits: 'Gbɔmɛi Ni Ba Biɛ',
      orders: 'WhatsApp Nibii Ni Ahɔɔ',
      sales: 'MoMo Shika',
      addProduct: 'Kɛ Nɔ Heeko Fata He',
      customize: 'Tsake Wɛbsaet Lɛ',
      viewSite: 'Kwɛ O Wɛbsaet Lɛ',
      share: 'Maje Yɛ WhatsApp Nɔ',
      recentActivity: 'Nii Ni Ya Nɔ Nyɛsɛɛ Nɛɛ',
      support: 'WhatsApp Yelikɛbuamɔ'
    },
    EWE: {
      planStatus: 'Starter Plan (Le Edzi)',
      visits: 'Amewo Katã Va',
      orders: 'WhatsApp Nuwɔwɔwo',
      sales: 'MoMo Ga Katã',
      addProduct: 'Tsɔ Nuto Yeye Kpe Ðe Eŋu',
      customize: 'Trɔ Wɛbsaet La',
      viewSite: 'Kpɔ Wò Wɛbsaet La',
      share: 'Ɖoe Ðe WhatsApp Dzi',
      recentActivity: 'Nusiwo Dzɔ Nyitsɔ Laa',
      support: 'WhatsApp Kpekpeɖeŋu'
    }
  }[language];

  return (
    <div className="merchant-dashboard" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem 5rem',
      color: 'var(--text-main)'
    }}>
      {/* 1. Header Bar */}
      <div className="neon-border" style={{
        background: 'var(--bg-surface)',
        borderRadius: '16px',
        padding: '1.2rem 1.8rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
      }}>
        {/* Business Selector & Plan Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.4rem' }}>🏪</span>
            <select
              value={selectedBusiness}
              onChange={(e) => setSelectedBusiness(e.target.value)}
              style={{
                background: '#10151C',
                border: '1px solid var(--cyan-glow)',
                color: '#fff',
                fontWeight: 800,
                fontSize: '1rem',
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="Ama Heritage Kente">Ama Heritage Kente</option>
              <option value="Sedemson Stone">Sedemson Stone</option>
              <option value="Emewear">Emewear Plus-Size</option>
            </select>
          </div>

          <span style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid #10b981',
            color: '#10b981',
            padding: '0.3rem 0.85rem',
            borderRadius: '20px',
            fontSize: '0.78rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
            {t.planStatus}
          </span>
        </div>

        {/* Controls: Language, Currency, Live Support */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          {/* Language Switcher */}
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '2px', border: '1px solid rgba(255,255,255,0.1)' }}>
            {(['EN', 'TWI', 'GA', 'EWE'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                style={{
                  background: language === lang ? 'var(--cyan-glow)' : 'transparent',
                  color: language === lang ? '#090B10' : 'var(--text-muted)',
                  border: 'none',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '6px',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Currency Toggle */}
          <button
            onClick={() => setCurrency(currency === 'GHS' ? 'USD' : 'GHS')}
            style={{
              background: 'rgba(255, 204, 0, 0.1)',
              border: '1px solid var(--gold-accent)',
              color: 'var(--gold-accent)',
              padding: '0.4rem 0.8rem',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.78rem',
              cursor: 'pointer'
            }}
          >
            {currency === 'GHS' ? '₵ GHS' : '$ USD'}
          </button>

          {/* VIP Support Button */}
          <a
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%20VIP%20Support%2C%20I%20need%20assistance%20with%20my%20merchant%20account."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25d366',
              color: '#000',
              textDecoration: 'none',
              padding: '0.45rem 1rem',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.8rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <span>💬</span> {t.support}
          </a>
        </div>
      </div>

      {/* 2. Analytics Overview Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          padding: '1.5rem',
          borderRadius: '16px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700 }}>{t.visits}</span>
            <span style={{ fontSize: '1.2rem' }}>📈</span>
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--cyan-glow)' }}>1,420</div>
          <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>↑ +18.4% this week</span>
        </div>

        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          padding: '1.5rem',
          borderRadius: '16px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700 }}>{t.orders}</span>
            <span style={{ fontSize: '1.2rem' }}>📲</span>
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#25d366' }}>48 Leads</div>
          <span style={{ fontSize: '0.75rem', color: '#25d366', fontWeight: 700 }}>Direct WhatsApp conversions</span>
        </div>

        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          padding: '1.5rem',
          borderRadius: '16px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700 }}>{t.sales}</span>
            <span style={{ fontSize: '1.2rem' }}>💰</span>
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--gold-accent)' }}>
            {formatPrice(7350)}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--gold-accent)', fontWeight: 700 }}>MTN & Telecel Cash</span>
        </div>
      </div>

      {/* 3. Quick Actions Grid */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>⚡</span> Quick Management Actions
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <button
            onClick={() => setIsAddProductOpen(true)}
            className="neon-border"
            style={{
              background: 'rgba(0, 255, 255, 0.08)',
              border: '1px solid var(--cyan-glow)',
              color: 'var(--cyan-glow)',
              padding: '1.1rem',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.25s'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>➕</span>
            {t.addProduct}
          </button>

          <button
            onClick={() => alert('Opening Theme Customizer: You can change your primary brand color, fonts, and store logo!')}
            className="neon-border"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'var(--text-main)',
              padding: '1.1rem',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>🎨</span>
            {t.customize}
          </button>

          <a
            href="http://localhost:3000/emewear/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-border"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'var(--text-main)',
              padding: '1.1rem',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>🌐</span>
            {t.viewSite}
          </a>

          <button
            onClick={() => setIsShareModalOpen(true)}
            className="neon-border"
            style={{
              background: 'rgba(37, 211, 102, 0.12)',
              border: '1px solid #25d366',
              color: '#25d366',
              padding: '1.1rem',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>📲</span>
            {t.share}
          </button>
        </div>
      </div>

      {/* 4. Tab Navigation: Products vs Activity */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem', marginBottom: '1.5rem' }}>
        <button
          onClick={() => setActiveTab('overview')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'overview' ? 'var(--cyan-glow)' : 'var(--text-muted)',
            fontWeight: 800,
            fontSize: '1rem',
            cursor: 'pointer',
            borderBottom: activeTab === 'overview' ? '2px solid var(--cyan-glow)' : 'none',
            paddingBottom: '0.5rem'
          }}
        >
          📋 {t.recentActivity}
        </button>

        <button
          onClick={() => setActiveTab('products')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'products' ? 'var(--cyan-glow)' : 'var(--text-muted)',
            fontWeight: 800,
            fontSize: '1rem',
            cursor: 'pointer',
            borderBottom: activeTab === 'products' ? '2px solid var(--cyan-glow)' : 'none',
            paddingBottom: '0.5rem'
          }}
        >
          👗 Product Catalog ({products.length})
        </button>
      </div>

      {/* Tab 1: Recent Activity Stream */}
      {activeTab === 'overview' && (
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {activities.map((act) => (
              <div
                key={act.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  flexWrap: 'wrap',
                  gap: '0.8rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: act.badgeColor,
                    boxShadow: `0 0 8px ${act.badgeColor}`
                  }} />
                  <div>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem' }}>{act.title}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{act.detail}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {act.amount && (
                    <span style={{ fontWeight: 900, color: 'var(--gold-accent)', fontSize: '1rem' }}>
                      {act.amount}
                    </span>
                  )}
                  <span style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: act.badgeColor,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 800
                  }}>
                    {act.badge}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Product Catalog Manager */}
      {activeTab === 'products' && (
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Manage Store Catalog</h4>
            <button
              onClick={() => setIsAddProductOpen(true)}
              style={{
                background: 'var(--cyan-glow)',
                color: '#090B10',
                border: 'none',
                padding: '0.4rem 1rem',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              + Add Item
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {products.map((p) => (
              <div
                key={p.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, color: '#fff' }}>{p.title}</div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{p.category}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span style={{ fontWeight: 900, color: 'var(--gold-accent)', fontSize: '1.1rem' }}>
                    {formatPrice(p.price)}
                  </span>
                  <span style={{ background: '#10b98133', color: '#10b981', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700 }}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal: Add New Product */}
      {isAddProductOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(9,11,16,0.85)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: '1rem'
        }}>
          <div className="neon-border" style={{
            background: 'var(--bg-surface)',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '450px',
            width: '100%'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.2rem' }}>Add Product to Website</h3>
            <form onSubmit={handleAddProduct}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>Product Title</label>
                <input
                  type="text"
                  placeholder="e.g. Ankara Wrap Dress"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '0.7rem', borderRadius: '8px' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>Price (GH₵)</label>
                <input
                  type="number"
                  placeholder="e.g. 195"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '0.7rem', borderRadius: '8px' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  style={{ width: '100%', background: '#10151C', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '0.7rem', borderRadius: '8px' }}
                >
                  <option value="Apparel">👗 Apparel</option>
                  <option value="Luxury">💎 Luxury</option>
                  <option value="Casual">✨ Casual</option>
                  <option value="Stone Cladding">🏛️ Stone Cladding</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setIsAddProductOpen(false)}
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="neon-btn neon-border"
                  style={{ background: 'var(--cyan-glow)', color: '#090B10', padding: '0.6rem 1.4rem', borderRadius: '6px', fontWeight: 800, cursor: 'pointer' }}
                >
                  Save & Publish ➔
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Share on WhatsApp */}
      {isShareModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(9,11,16,0.85)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: '1rem'
        }}>
          <div className="neon-border" style={{
            background: 'var(--bg-surface)',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '480px',
            width: '100%',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.8rem' }}>📲</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>Share Your Website on WhatsApp</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Broadcast your digital flyer and catalog link directly to your WhatsApp status or customer groups.
            </p>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out our new online catalog and order with Mobile Money here: http://localhost:3000/emewear/`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25d366',
                color: '#000',
                textDecoration: 'none',
                padding: '0.8rem 1.8rem',
                borderRadius: '50px',
                fontWeight: 800,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              <span>💬</span> Broadcast to WhatsApp
            </a>

            <div>
              <button
                onClick={() => setIsShareModalOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.85rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
