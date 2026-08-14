import React, { useState } from 'react';

interface HeroSectionProps {
  onOpenWizard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWizard }) => {
  const [activeTab, setActiveTab] = useState<'stone' | 'fashion' | 'momo'>('stone');

  return (
    <section className="hub-hero" style={{ padding: '3rem 1rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem' }}>
        <span style={{ 
          background: 'rgba(229, 192, 123, 0.15)', 
          border: '1px solid var(--gold-accent)', 
          color: 'var(--gold-accent)',
          padding: '0.4rem 1.4rem',
          borderRadius: '50px',
          fontSize: '0.82rem',
          fontWeight: 800,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          display: 'inline-block',
          marginBottom: '1.5rem'
        }}>
          ⚡ 48-HOUR WEBSITE LAUNCH GUARANTEE
        </span>

        <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.2rem' }}>
          Putting Ghana's Best<br />
          <span className="gold-text">Businesses Online.</span>
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.18rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
          Traditional marketing ends at the flyer. We build high-performance Website as a Service (WaaS) digital hubs with automated <strong style={{ color: '#ffcc00' }}>MoMo payments</strong> and direct <strong style={{ color: '#25d366' }}>WhatsApp lead routing</strong>.
        </p>

        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={onOpenWizard}
            className="neon-btn neon-border"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              padding: '0.9rem 2.2rem',
              fontSize: '0.95rem',
              cursor: 'pointer',
              background: 'var(--cyan-glow)',
              color: '#090B10',
              fontWeight: 800
            }}
          >
            <span>🚀 Build My Digital Flyer in 30s</span>
          </button>

          <a 
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20request%20a%20consultation%20for%20my%20business%20website." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neon-btn"
            style={{ 
              textDecoration: 'none', 
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'var(--text-main)',
              padding: '0.9rem 2.2rem',
              fontSize: '0.95rem'
            }}
          >
            <span>💬 Request WhatsApp Consultation</span>
          </a>
        </div>
      </div>

      {/* Interactive Live Demo Preview Stage */}
      <div className="hero-demo-stage neon-border" style={{ 
        background: 'var(--bg-surface)', 
        borderRadius: '20px', 
        padding: '1.5rem', 
        maxWidth: '960px', 
        margin: '0 auto',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginLeft: '0.5rem', fontWeight: 600 }}>LIVE DEMO INTERACTIVE PREVIEW</span>
          </div>

          {/* Demo Tabs */}
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button 
              onClick={() => setActiveTab('stone')}
              style={{
                background: activeTab === 'stone' ? 'var(--cyan-glow)' : 'rgba(255,255,255,0.05)',
                color: activeTab === 'stone' ? '#090B10' : 'var(--text-main)',
                border: 'none',
                padding: '0.4rem 1rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              🏛️ Stone B2B
            </button>

            <button 
              onClick={() => setActiveTab('fashion')}
              style={{
                background: activeTab === 'fashion' ? 'var(--cyan-glow)' : 'rgba(255,255,255,0.05)',
                color: activeTab === 'fashion' ? '#090B10' : 'var(--text-main)',
                border: 'none',
                padding: '0.4rem 1rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              👗 Fashion Store
            </button>

            <button 
              onClick={() => setActiveTab('momo')}
              style={{
                background: activeTab === 'momo' ? 'var(--cyan-glow)' : 'rgba(255,255,255,0.05)',
                color: activeTab === 'momo' ? '#090B10' : 'var(--text-main)',
                border: 'none',
                padding: '0.4rem 1rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              📲 MoMo + WhatsApp Engine
            </button>
          </div>
        </div>

        {/* Demo Content Mockup Display */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '360px', position: 'relative', background: '#0d1117' }}>
          {activeTab === 'stone' && (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/sedemson_stone_hero.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '2rem', textAlignment: 'center' }}>
              <span style={{ background: '#f1c40f', color: '#1a1a1a', padding: '0.3rem 1rem', borderRadius: '20px', fontWeight: 800, fontSize: '0.75rem', marginBottom: '0.8rem' }}>REGISTERED B2B BRAND</span>
              <h3 style={{ fontSize: '2rem', fontFamily: 'serif', fontWeight: 900 }}>Sedemson Stone Craftsmanship</h3>
              <p style={{ maxWidth: '500px', fontSize: '0.95rem', opacity: 0.9, marginTop: '0.5rem' }}>Premium Natural Stone Cladding & Architectural Finishes across Ghana.</p>
              <span style={{ marginTop: '1.2rem', color: '#00ffff', fontWeight: 700, fontSize: '0.88rem' }}>Launching Soon 🚀</span>
            </div>
          )}

          {activeTab === 'fashion' && (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/emewear/emewear_hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'top', color: '#fff', padding: '2rem', textAlignment: 'center' }}>
              <span style={{ background: '#e5b882', color: '#120508', padding: '0.3rem 1rem', borderRadius: '20px', fontWeight: 800, fontSize: '0.75rem', marginBottom: '0.8rem' }}>GHANA HERITAGE FASHION</span>
              <h3 style={{ fontSize: '2rem', fontFamily: 'serif', fontWeight: 900 }}>Emewear Plus-Size Ankara</h3>
              <p style={{ maxWidth: '500px', fontSize: '0.95rem', opacity: 0.9, marginTop: '0.5rem' }}>Handcrafted Ankara wide-leg cargo trousers & royal batik palazzo sets.</p>
              <span style={{ marginTop: '1.2rem', color: '#e5b882', fontWeight: 700, fontSize: '0.88rem' }}>Launching Soon 🚀</span>
            </div>
          )}

          {activeTab === 'momo' && (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'radial-gradient(circle, #1a2333 0%, #0d1117 100%)', color: '#fff', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📲⚡</div>
              <h3 style={{ fontSize: '1.8rem', color: '#10b981', fontWeight: 800 }}>Automated WhatsApp Lead Engine</h3>
              <p style={{ maxWidth: '540px', color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
                When customers click your website's products or services, orders automatically compile into a structured WhatsApp message with instant MTN MoMo payment prompts!
              </p>
              <div style={{ marginTop: '1.2rem', display: 'flex', gap: '0.8rem' }}>
                <span style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid #25d366', color: '#25d366', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                  ✓ Direct Order Routing
                </span>
                <span style={{ background: 'rgba(255,204,0,0.15)', border: '1px solid #ffcc00', color: '#ffcc00', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                  ✓ Automated MoMo Collection
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
