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
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '1.5rem 1rem 5rem',
      color: 'var(--text-main)'
    }}>
      {/* 1. Ultra-Clean Glass Header Bar */}
      <div className="neon-border" style={{
        background: 'rgba(13, 18, 29, 0.85)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '1.2rem 1.8rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.2rem',
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.6)'
      }}>
        {/* Business Selector & Plan Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.3rem' }}>🏪</span>
            <select
              value={selectedBusiness}
              onChange={(e) => setSelectedBusiness(e.target.value)}
              style={{
                background: '#090D15',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.95rem',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
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
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#10b981',
            padding: '0.35rem 0.9rem',
            borderRadius: '50px',
            fontSize: '0.78rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            letterSpacing: '0.5px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }}></span>
            {t.planStatus}
          </span>
        </div>

        {/* Controls: Language, Currency, Live Support */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Segmented Language Switcher */}
          <div style={{
            display: 'flex',
            background: '#090D15',
            borderRadius: '10px',
            padding: '3px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {(['EN', 'TWI', 'GA', 'EWE'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                style={{
                  background: language === lang ? 'var(--cyan-glow)' : 'transparent',
                  color: language === lang ? '#07090E' : 'var(--text-muted)',
                  border: 'none',
                  padding: '0.35rem 0.7rem',
                  borderRadius: '7px',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
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
              background: 'rgba(229, 192, 123, 0.1)',
              border: '1px solid rgba(229, 192, 123, 0.3)',
              color: 'var(--gold-accent)',
              padding: '0.45rem 0.9rem',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.78rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
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
              color: '#07090E',
              textDecoration: 'none',
              padding: '0.5rem 1.1rem',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.82rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.25)',
              transition: 'transform 0.2s'
            }}
          >
            <span>💬</span> {t.support}
          </a>
        </div>
      </div>

      {/* 2. Elevated Analytics KPI Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2.5rem'
      }}>
        {/* Card 1: Visits */}
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          padding: '1.8rem',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--cyan-glow), transparent)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{t.visits}</span>
            <span style={{ fontSize: '1.2rem', opacity: 0.8 }}>📈</span>
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px' }}>1,420</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.4rem' }}>
            <span style={{ color: '#10b981', fontWeight: 800, fontSize: '0.8rem' }}>↑ +18.4%</span>
            <span style={{ color: 'var(--text-subtle)', fontSize: '0.78rem' }}>vs last week</span>
          </div>
        </div>

        {/* Card 2: WhatsApp Orders */}
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          padding: '1.8rem',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #25d366, transparent)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{t.orders}</span>
            <span style={{ fontSize: '1.2rem', opacity: 0.8 }}>📲</span>
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#25d366', letterSpacing: '-0.5px' }}>48 Leads</div>
          <div style={{ color: 'var(--text-subtle)', fontSize: '0.78rem', marginTop: '0.4rem' }}>
            Direct WhatsApp message triggers
          </div>
        </div>

        {/* Card 3: MoMo Volume */}
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          padding: '1.8rem',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold-accent), transparent)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{t.sales}</span>
            <span style={{ fontSize: '1.2rem', opacity: 0.8 }}>💰</span>
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--gold-accent)', letterSpacing: '-0.5px' }}>
            {formatPrice(7350)}
          </div>
          <div style={{ color: 'var(--text-subtle)', fontSize: '0.78rem', marginTop: '0.4rem' }}>
            MTN MoMo & Telecel Cash settlements
          </div>
        </div>
      </div>

      {/* 3. Quick Actions Grid */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', letterSpacing: '0.5px' }}>
          <span>⚡</span> QUICK MANAGEMENT ACTIONS
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.2rem'
        }}>
          <button
            onClick={() => setIsAddProductOpen(true)}
            className="neon-border"
            style={{
              background: 'rgba(0, 240, 255, 0.05)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              color: 'var(--cyan-glow)',
              padding: '1.4rem 1.2rem',
              borderRadius: '16px',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <span style={{ fontSize: '1.8rem' }}>➕</span>
            {t.addProduct}
          </button>

          <button
            onClick={() => alert('Opening Theme Customizer: Modify brand colors, fonts, and store banners!')}
            className="neon-border"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-main)',
              padding: '1.4rem 1.2rem',
              borderRadius: '16px',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <span style={{ fontSize: '1.8rem' }}>🎨</span>
            {t.customize}
          </button>

          <a
            href="http://localhost:3000/emewear/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-border"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-main)',
              padding: '1.4rem 1.2rem',
              borderRadius: '16px',
              fontWeight: 800,
              fontSize: '0.92rem',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <span style={{ fontSize: '1.8rem' }}>🌐</span>
            {t.viewSite}
          </a>

          <button
            onClick={() => setIsShareModalOpen(true)}
            className="neon-border"
            style={{
              background: 'rgba(37, 211, 102, 0.08)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              color: '#25d366',
              padding: '1.4rem 1.2rem',
              borderRadius: '16px',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <span style={{ fontSize: '1.8rem' }}>📲</span>
            {t.share}
          </button>
        </div>
      </div>

      {/* 4. Tab Navigation: Overview Activity vs Product Catalog */}
      <div style={{ display: 'flex', gap: '1.2rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
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
            paddingBottom: '0.5rem',
            transition: 'color 0.2s'
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
            paddingBottom: '0.5rem',
            transition: 'color 0.2s'
          }}
        >
          👗 Product Catalog ({products.length})
        </button>
      </div>

      {/* Tab 1: Live Activity Stream */}
      {activeTab === 'overview' && (
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          borderRadius: '20px',
          padding: '1.8rem',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {activities.map((act) => (
              <div
                key={act.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.2rem',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  transition: 'background 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: act.badgeColor,
                    boxShadow: `0 0 10px ${act.badgeColor}`
                  }} />
                  <div>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem' }}>{act.title}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.2rem' }}>{act.detail}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  {act.amount && (
                    <span style={{ fontWeight: 900, color: 'var(--gold-accent)', fontSize: '1.05rem' }}>
                      {act.amount}
                    </span>
                  )}
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: act.badgeColor,
                    padding: '0.3rem 0.8rem',
                    borderRadius: '50px',
                    fontSize: '0.74rem',
                    fontWeight: 800
                  }}>
                    {act.badge}
                  </span>
                  <span style={{ color: 'var(--text-subtle)', fontSize: '0.78rem' }}>{act.time}</span>
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
          borderRadius: '20px',
          padding: '1.8rem',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Manage Store Catalog</h4>
            <button
              onClick={() => setIsAddProductOpen(true)}
              style={{
                background: 'var(--cyan-glow)',
                color: '#07090E',
                border: 'none',
                padding: '0.5rem 1.2rem',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.85rem',
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
                  padding: '1.2rem',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, color: '#fff' }}>{p.title}</div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{p.category}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span style={{ fontWeight: 900, color: 'var(--gold-accent)', fontSize: '1.15rem' }}>
                    {formatPrice(p.price)}
                  </span>
                  <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.74rem', fontWeight: 700 }}>
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
          background: 'rgba(7, 9, 14, 0.88)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: '1rem'
        }}>
          <div className="neon-border" style={{
            background: 'var(--bg-surface)',
            borderRadius: '24px',
            padding: '2.2rem',
            maxWidth: '480px',
            width: '100%',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '1.2rem' }}>Add Product to Catalog</h3>
            <form onSubmit={handleAddProduct}>
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>Product Title</label>
                <input
                  type="text"
                  placeholder="e.g. Ankara Wrap Dress"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 1rem', borderRadius: '10px', outline: 'none' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>Price (GH₵)</label>
                <input
                  type="number"
                  placeholder="e.g. 195"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 1rem', borderRadius: '10px', outline: 'none' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.8rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  style={{ width: '100%', background: '#090D15', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 1rem', borderRadius: '10px', outline: 'none' }}
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
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', padding: '0.7rem 1.4rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="neon-btn"
                  style={{ background: 'var(--cyan-glow)', color: '#07090E', padding: '0.7rem 1.6rem', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}
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
          background: 'rgba(7, 9, 14, 0.88)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: '1rem'
        }}>
          <div className="neon-border" style={{
            background: 'var(--bg-surface)',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            maxWidth: '480px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.8rem' }}>📲</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Share Your Website on WhatsApp</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.8rem', lineHeight: 1.6 }}>
              Broadcast your digital flyer and catalog link directly to your WhatsApp status, broadcast lists, or customer groups.
            </p>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out our new online catalog and order with Mobile Money here: http://localhost:3000/emewear/`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25d366',
                color: '#07090E',
                textDecoration: 'none',
                padding: '0.85rem 2rem',
                borderRadius: '50px',
                fontWeight: 800,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.35)',
                marginBottom: '1.2rem'
              }}
            >
              <span>💬</span> Broadcast to WhatsApp
            </a>

            <div>
              <button
                onClick={() => setIsShareModalOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}
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
