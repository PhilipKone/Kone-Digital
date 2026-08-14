import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { db } from '../firebase/config';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy, limit } from 'firebase/firestore';

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

// Enterprise-grade Minimalist SVG Icons (1.5px stroke, Linear/Stripe style)
const Icons = {
  Store: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85 }}>
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
    </svg>
  ),
  TrendUp: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  Message: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  CreditCard: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  ),
  Plus: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Sliders: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="21" y2="21" />
      <line x1="4" x2="20" y1="14" y2="14" />
      <line x1="4" x2="20" y1="7" y2="7" />
      <circle cx="8" cy="7" r="2" />
      <circle cx="16" cy="14" r="2" />
      <circle cx="10" cy="21" r="2" />
    </svg>
  ),
  ExternalLink: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  ),
  Share: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  ),
  Inbox: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  ),
  Headphones: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
};

export const MerchantDashboard: React.FC = () => {
  const { currency, setCurrency, formatPrice } = useCurrency();

  // State
  const [selectedBusiness, setSelectedBusiness] = useState<string>('My New Business');
  const [availableBusinesses, setAvailableBusinesses] = useState<string[]>([
    'My New Business',
    'Ama Heritage Kente',
    'Sedemson Stone',
    'Emewear'
  ]);
  const [language, setLanguage] = useState<'EN' | 'TWI' | 'GA' | 'EWE'>('EN');
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'activity'>('overview');
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isAddProductOpen, setIsAddProductOpen] = useState<boolean>(false);
  const [isSampleMode, setIsSampleMode] = useState<boolean>(false);

  // Firestore Synced Products State
  const [products, setProducts] = useState<Array<{ id: string; title: string; price: number; category: string; status: string }>>([]);
  const [firebaseActivities, setFirebaseActivities] = useState<ActivityItem[]>([]);
  const [isFirestoreConnected, setIsFirestoreConnected] = useState<boolean>(false);

  // Form State for New Product
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newCategory, setNewCategory] = useState('General');

  // Real-time Firestore Sync Listeners
  useEffect(() => {
    if (!db || !db.type) return;

    try {
      // 1. Sync Registered Businesses
      const unsubBusinesses = onSnapshot(collection(db, 'onboarding_submissions'), (snapshot) => {
        setIsFirestoreConnected(true);
        const fetchedNames: string[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.businessName && !fetchedNames.includes(data.businessName)) {
            fetchedNames.push(data.businessName);
          }
        });
        if (fetchedNames.length > 0) {
          setAvailableBusinesses((prev) => Array.from(new Set([...fetchedNames, ...prev])));
        }
      }, (err) => {
        console.log('Firestore Business Sync notice:', err.message);
      });

      // 2. Sync Products from Firestore
      const unsubProducts = onSnapshot(collection(db, 'merchant_products'), (snapshot) => {
        const fetchedProducts: Array<{ id: string; title: string; price: number; category: string; status: string }> = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          fetchedProducts.push({
            id: doc.id,
            title: data.title || 'Untitled',
            price: Number(data.price) || 0,
            category: data.category || 'General',
            status: data.status || 'In Stock'
          });
        });
        setProducts(fetchedProducts);
      }, (err) => {
        console.log('Firestore Product Sync notice:', err.message);
      });

      // 3. Sync Activity Log from Firestore
      const actQuery = query(collection(db, 'merchant_activity'), orderBy('createdAt', 'desc'), limit(20));
      const unsubActivity = onSnapshot(actQuery, (snapshot) => {
        const fetchedActs: ActivityItem[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          fetchedActs.push({
            id: doc.id,
            time: data.time || 'Just now',
            type: data.type || 'order',
            title: data.title || 'Customer Action',
            detail: data.detail || '',
            amount: data.amount,
            badge: data.badge || 'Activity',
            badgeColor: data.badgeColor || 'var(--cyan-glow)'
          });
        });
        setFirebaseActivities(fetchedActs);
      }, (err) => {
        console.log('Firestore Activity Sync notice:', err.message);
      });

      return () => {
        unsubBusinesses();
        unsubProducts();
        unsubActivity();
      };
    } catch (err) {
      console.log('Firestore init notice:', err);
    }
  }, []);

  // Activities (Sample demo vs Real live Firestore state)
  const sampleActivities: ActivityItem[] = [
    {
      id: 'a1',
      time: 'Demo Sample',
      type: 'order',
      title: 'Customer ordered via WhatsApp',
      detail: 'Kwame A. (Accra) • Sample Product',
      amount: formatPrice(150),
      badge: 'WhatsApp',
      badgeColor: '#10b981'
    }
  ];

  const activities = isSampleMode ? sampleActivities : firebaseActivities;

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPrice.trim()) return;
    
    const parsedPrice = parseFloat(newPrice) || 0;
    const item = {
      title: newTitle.trim(),
      price: parsedPrice,
      category: newCategory,
      status: 'In Stock',
      businessName: selectedBusiness,
      createdAt: serverTimestamp ? serverTimestamp() : new Date().toISOString()
    };

    try {
      if (db && db.type) {
        await addDoc(collection(db, 'merchant_products'), item);
      } else {
        setProducts((prev) => [{ ...item, id: Date.now().toString() }, ...prev]);
      }
    } catch (err) {
      setProducts((prev) => [{ ...item, id: Date.now().toString() }, ...prev]);
    }

    setNewTitle('');
    setNewPrice('');
    setIsAddProductOpen(false);
  };

  // Translations
  const t = {
    EN: {
      planStatus: 'Active Plan',
      visits: 'Page Visits',
      orders: 'WhatsApp Inquiries',
      sales: 'Settled Sales Volume',
      addProduct: 'Add Product',
      customize: 'Customize Theme',
      viewSite: 'View Live Site',
      share: 'Share Store',
      recentActivity: 'Customer Activity',
      catalog: 'Product Catalog',
      support: 'Priority Support',
      emptyActivity: 'No customer events recorded yet',
      emptyActivitySub: 'Share your store link on WhatsApp or social channels to start tracking live visitor orders and MoMo transactions.'
    },
    TWI: {
      planStatus: 'Account Foforɔ',
      visits: 'Nnipa A Wɔaba',
      orders: 'WhatsApp Nkratoɔ',
      sales: 'MoMo Sika',
      addProduct: 'Fa Nneɛma Ka Ho',
      customize: 'Sesa Ahosuo',
      viewSite: 'Hwɛ Wɛbsaet',
      share: 'Fa Kɔ WhatsApp',
      recentActivity: 'Nneyɛeɛ Foforɔ',
      catalog: 'Nneɛma Ahodoɔ',
      support: 'Mmoa',
      emptyActivity: 'Obiara nnyɛɛ hwee da',
      emptyActivitySub: 'Fa wo wɛbsaet link no kɔ WhatsApp so na nnipa ntumi ntɔ nneɛma.'
    },
    GA: {
      planStatus: 'Account Hee',
      visits: 'Gbɔmɛi Ni Ba Biɛ',
      orders: 'WhatsApp Nibii',
      sales: 'MoMo Shika',
      addProduct: 'Kɛ Nɔ Heeko Fata He',
      customize: 'Tsake Wɛbsaet',
      viewSite: 'Kwɛ Wɛbsaet',
      share: 'Maje Yɛ WhatsApp',
      recentActivity: 'Nii Ni Ya Nɔ',
      catalog: 'Nibii Lɛ',
      support: 'Yelikɛbuamɔ',
      emptyActivity: 'Mɔko mɔko bako lolo',
      emptyActivitySub: 'Maje o wɛbsaet link lɛ yɛ WhatsApp nɔ koni gbɔmɛi ahé nibii.'
    },
    EWE: {
      planStatus: 'Account Yeye',
      visits: 'Amewo Katã Va',
      orders: 'WhatsApp Nuwɔwɔwo',
      sales: 'MoMo Ga Katã',
      addProduct: 'Tsɔ Nuto Kpe Ðe Eŋu',
      customize: 'Trɔ Wɛbsaet',
      viewSite: 'Kpɔ Wò Wɛbsaet',
      share: 'Ɖoe Ðe WhatsApp',
      recentActivity: 'Nusiwo Dzɔ',
      catalog: 'Nuwo Katã',
      support: 'Kpekpeɖeŋu',
      emptyActivity: 'Ame aɖeke me wɔ nane haɖe o',
      emptyActivitySub: 'Ɖo wò wɛbsaet kadodo ɖe WhatsApp dzi be amewo nate ŋu aƒle nuwo.'
    }
  }[language];

  return (
    <div className="merchant-dashboard" style={{
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '1.5rem 1rem 5rem',
      color: 'var(--text-main)'
    }}>
      {/* 1. Ultra-Clean Enterprise Header Bar */}
      <div className="neon-border" style={{
        background: 'rgba(13, 18, 29, 0.85)',
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        padding: '1rem 1.4rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.6)'
      }}>
        {/* Business Selector & Plan Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', flexGrow: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
            <Icons.Store />
            <select
              value={selectedBusiness}
              onChange={(e) => setSelectedBusiness(e.target.value)}
              style={{
                background: '#090D15',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.92rem',
                padding: '0.5rem 0.8rem',
                borderRadius: '8px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {availableBusinesses.map((bName) => (
                <option key={bName} value={bName}>{bName}</option>
              ))}
            </select>
          </div>

          <span style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            color: '#10b981',
            padding: '0.3rem 0.75rem',
            borderRadius: '50px',
            fontSize: '0.75rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            whiteSpace: 'nowrap'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
            {t.planStatus}
          </span>

          <span style={{
            background: isFirestoreConnected ? 'rgba(0, 240, 255, 0.1)' : 'rgba(229, 192, 123, 0.1)',
            border: isFirestoreConnected ? '1px solid rgba(0, 240, 255, 0.25)' : '1px solid rgba(229, 192, 123, 0.25)',
            color: isFirestoreConnected ? 'var(--cyan-glow)' : 'var(--gold-accent)',
            padding: '0.3rem 0.75rem',
            borderRadius: '50px',
            fontSize: '0.75rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            whiteSpace: 'nowrap'
          }}>
            <span style={{ 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              background: isFirestoreConnected ? 'var(--cyan-glow)' : 'var(--gold-accent)',
              boxShadow: isFirestoreConnected ? '0 0 8px var(--cyan-glow)' : 'none'
            }}></span>
            {isFirestoreConnected ? 'Live Synced' : 'Demo Offline'}
          </span>
        </div>

        {/* Controls: Language, Currency, Support */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          {/* Segmented Language Switcher */}
          <div style={{
            display: 'flex',
            background: '#090D15',
            borderRadius: '8px',
            padding: '2px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {(['EN', 'TWI', 'GA', 'EWE'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                style={{
                  background: language === lang ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: language === lang ? '#fff' : 'var(--text-muted)',
                  border: 'none',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
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
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--text-main)',
              padding: '0.4rem 0.75rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.78rem',
              cursor: 'pointer'
            }}
          >
            {currency === 'GHS' ? 'GHS (₵)' : 'USD ($)'}
          </button>

          {/* Clean Support Link */}
          <a
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%20Support%2C%20I%20need%20assistance%20with%20my%20merchant%20account."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#fff',
              textDecoration: 'none',
              padding: '0.45rem 0.9rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.78rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}
          >
            <Icons.Headphones />
            <span>{t.support}</span>
          </a>
        </div>
      </div>

      {/* 2. Elevated Metric Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.2rem',
        marginBottom: '2rem'
      }}>
        {/* Card 1: Visits */}
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          padding: '1.6rem',
          borderRadius: '16px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t.visits}</span>
            <Icons.TrendUp />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
            {isSampleMode ? '1,420' : '0'}
          </div>
          <div style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', marginTop: '0.3rem' }}>
            {isSampleMode ? '+18.4% this week' : 'Awaiting first visitors'}
          </div>
        </div>

        {/* Card 2: Inquiries */}
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          padding: '1.6rem',
          borderRadius: '16px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t.orders}</span>
            <Icons.Message />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
            {isSampleMode ? '48' : '0'}
          </div>
          <div style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', marginTop: '0.3rem' }}>
            {isSampleMode ? 'Direct WhatsApp leads' : 'No inquiries recorded'}
          </div>
        </div>

        {/* Card 3: Sales Volume */}
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          padding: '1.6rem',
          borderRadius: '16px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t.sales}</span>
            <Icons.CreditCard />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
            {isSampleMode ? formatPrice(7350) : formatPrice(0)}
          </div>
          <div style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', marginTop: '0.3rem' }}>
            {isSampleMode ? 'MTN & Telecel Cash settlements' : 'No settlements processed'}
          </div>
        </div>
      </div>

      {/* 3. Quick Actions Grid */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          Quick Actions
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem'
        }}>
          <button
            onClick={() => setIsAddProductOpen(true)}
            className="neon-border"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-main)',
              padding: '1.2rem',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            <Icons.Plus />
            {t.addProduct}
          </button>

          <button
            onClick={() => alert('Theme Customizer: Adjust brand colors, logo, and store header typography.')}
            className="neon-border"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-main)',
              padding: '1.2rem',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            <Icons.Sliders />
            {t.customize}
          </button>

          <a
            href="http://localhost:3000/emewear/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-border"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-main)',
              padding: '1.2rem',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.88rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            <Icons.ExternalLink />
            {t.viewSite}
          </a>

          <button
            onClick={() => setIsShareModalOpen(true)}
            className="neon-border"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-main)',
              padding: '1.2rem',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            <Icons.Share />
            {t.share}
          </button>
        </div>
      </div>

      {/* 4. Tab Navigation: Customer Activity vs Product Catalog */}
      <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.8rem', marginBottom: '1.5rem' }}>
        <button
          onClick={() => setActiveTab('overview')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'overview' ? 'var(--cyan-glow)' : 'var(--text-muted)',
            fontWeight: 700,
            fontSize: '0.92rem',
            cursor: 'pointer',
            borderBottom: activeTab === 'overview' ? '2px solid var(--cyan-glow)' : 'none',
            paddingBottom: '0.4rem',
            transition: 'color 0.15s'
          }}
        >
          {t.recentActivity}
        </button>

        <button
          onClick={() => setActiveTab('products')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'products' ? 'var(--cyan-glow)' : 'var(--text-muted)',
            fontWeight: 700,
            fontSize: '0.92rem',
            cursor: 'pointer',
            borderBottom: activeTab === 'products' ? '2px solid var(--cyan-glow)' : 'none',
            paddingBottom: '0.4rem',
            transition: 'color 0.15s'
          }}
        >
          {t.catalog} ({products.length})
        </button>
      </div>

      {/* Tab 1: Clean Customer Activity Stream */}
      {activeTab === 'overview' && (
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          borderRadius: '16px',
          padding: '1.6rem',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)'
        }}>
          {activities.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Icons.Inbox />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>{t.emptyActivity}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', maxWidth: '460px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                {t.emptyActivitySub}
              </p>
              <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setIsShareModalOpen(true)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '0.55rem 1.2rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Icons.Share />
                  <span>Share Store Link</span>
                </button>
                <button
                  onClick={() => setIsSampleMode(!isSampleMode)}
                  style={{
                    background: 'none',
                    color: 'var(--text-muted)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '0.55rem 1.2rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  {isSampleMode ? 'Reset to Zero-State' : 'Toggle Sample View'}
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {activities.map((act) => (
                <div
                  key={act.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.2rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: act.badgeColor
                    }} />
                    <div>
                      <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{act.title}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.15rem' }}>{act.detail}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {act.amount && (
                      <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                        {act.amount}
                      </span>
                    )}
                    <span style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: 'var(--text-muted)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      fontWeight: 600
                    }}>
                      {act.badge}
                    </span>
                    <span style={{ color: 'var(--text-subtle)', fontSize: '0.75rem' }}>{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Product Catalog */}
      {activeTab === 'products' && (
        <div className="neon-border" style={{
          background: 'var(--bg-surface)',
          borderRadius: '16px',
          padding: '1.6rem',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Store Inventory</h4>
            <button
              onClick={() => setIsAddProductOpen(true)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '0.45rem 1rem',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Icons.Plus />
              <span>Add Item</span>
            </button>
          </div>

          {products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              No products added yet. Click <strong>Add Item</strong> to populate your store catalog.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {products.map((p) => (
                <div
                  key={p.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.2rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{p.title}</div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.category}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>
                      {formatPrice(p.price)}
                    </span>
                    <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600 }}>
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
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
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '460px',
            width: '100%',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.2rem' }}>Add Product</h3>
            <form onSubmit={handleAddProduct}>
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>Product Title</label>
                <input
                  type="text"
                  placeholder="e.g. Ankara Wrap Dress"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '8px', outline: 'none', fontSize: '0.88rem' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>Price (GH₵)</label>
                <input
                  type="number"
                  placeholder="e.g. 195"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '8px', outline: 'none', fontSize: '0.88rem' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.6rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  style={{ width: '100%', background: '#090D15', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '8px', outline: 'none', fontSize: '0.88rem' }}
                >
                  <option value="Apparel">Apparel</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Casual">Casual</option>
                  <option value="Services">Services</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setIsAddProductOpen(false)}
                  style={{ background: 'none', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ background: '#fff', color: '#07090E', border: 'none', padding: '0.6rem 1.4rem', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', fontSize: '0.82rem' }}
                >
                  Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Share Link */}
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
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '460px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Share Store Link</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.6rem', lineHeight: 1.6 }}>
              Copy or broadcast your direct store URL to WhatsApp status, customer lists, or social bios.
            </p>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out our new store catalog here: http://localhost:3000/emewear/`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#10b981',
                color: '#07090E',
                textDecoration: 'none',
                padding: '0.75rem 1.6rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.88rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              <Icons.Share />
              <span>Broadcast to WhatsApp</span>
            </a>

            <div>
              <button
                onClick={() => setIsShareModalOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600 }}
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
