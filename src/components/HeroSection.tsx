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
          background: 'rgba(229, 192, 123, 0.1)', 
          border: '1px solid rgba(229, 192, 123, 0.25)', 
          color: 'var(--gold-accent)',
          padding: '0.35rem 1.2rem',
          borderRadius: '50px',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          display: 'inline-block',
          marginBottom: '1.5rem'
        }}>
          48-HOUR MANAGED LAUNCH SLA
        </span>

        <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.2rem' }}>
          Putting Ghana's Best<br />
          <span className="gold-text">Businesses Online.</span>
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
          Traditional marketing ends at the flyer. We engineer high-performance Website as a Service (WaaS) platforms with automated <strong style={{ color: '#ffcc00' }}>MoMo payments</strong> and direct <strong style={{ color: '#10b981' }}>WhatsApp lead routing</strong>.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={onOpenWizard}
            className="neon-btn"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              padding: '0.85rem 2rem',
              fontSize: '0.92rem',
              cursor: 'pointer',
              background: 'var(--cyan-glow)',
              color: '#07090E',
              fontWeight: 800
            }}
          >
            <span>Generate Starter Website ➔</span>
          </button>

          <a 
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20request%20a%20consultation%20for%20my%20business%20website." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neon-btn"
            style={{ 
              textDecoration: 'none', 
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'var(--text-main)',
              padding: '0.85rem 2rem',
              fontSize: '0.92rem'
            }}
          >
            <span>Request Consultation</span>
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
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginLeft: '0.5rem', fontWeight: 700, letterSpacing: '0.5px' }}>INTERACTIVE PLATFORM PREVIEW</span>
          </div>

          {/* Demo Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => setActiveTab('stone')}
              style={{
                background: activeTab === 'stone' ? 'rgba(255,255,255,0.12)' : 'transparent',
                color: activeTab === 'stone' ? '#fff' : 'var(--text-muted)',
                border: '1px solid ' + (activeTab === 'stone' ? 'rgba(255,255,255,0.2)' : 'transparent'),
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Stone Architecture
            </button>

            <button 
              onClick={() => setActiveTab('fashion')}
              style={{
                background: activeTab === 'fashion' ? 'rgba(255,255,255,0.12)' : 'transparent',
                color: activeTab === 'fashion' ? '#fff' : 'var(--text-muted)',
                border: '1px solid ' + (activeTab === 'fashion' ? 'rgba(255,255,255,0.2)' : 'transparent'),
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Fashion Retail
            </button>

            <button 
              onClick={() => setActiveTab('momo')}
              style={{
                background: activeTab === 'momo' ? 'rgba(255,255,255,0.12)' : 'transparent',
                color: activeTab === 'momo' ? '#fff' : 'var(--text-muted)',
                border: '1px solid ' + (activeTab === 'momo' ? 'rgba(255,255,255,0.2)' : 'transparent'),
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Payment Engine
            </button>
          </div>
        </div>

        {/* Demo Content Mockup Display */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '360px', position: 'relative', background: '#0d1117' }}>
          {activeTab === 'stone' && (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/sedemson_stone_hero.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '2rem', textAlign: 'center' }}>
              <span style={{ background: 'rgba(241, 196, 15, 0.2)', border: '1px solid #f1c40f', color: '#f1c40f', padding: '0.25rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.75rem', marginBottom: '0.8rem' }}>B2B CASE STUDY</span>
              <h3 style={{ fontSize: '2rem', fontFamily: 'serif', fontWeight: 900 }}>Sedemson Stone Craftsmanship</h3>
              <p style={{ maxWidth: '500px', fontSize: '0.92rem', opacity: 0.85, marginTop: '0.5rem' }}>Natural Stone Cladding & Architectural Finishes across Ghana.</p>
              <span style={{ marginTop: '1.2rem', color: 'var(--cyan-glow)', fontWeight: 700, fontSize: '0.85rem' }}>Launching Soon</span>
            </div>
          )}

          {activeTab === 'fashion' && (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/emewear/emewear_hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'top', color: '#fff', padding: '2rem', textAlign: 'center' }}>
              <span style={{ background: 'rgba(229, 184, 130, 0.2)', border: '1px solid #e5b882', color: '#e5b882', padding: '0.25rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.75rem', marginBottom: '0.8rem' }}>E-COMMERCE CASE STUDY</span>
              <h3 style={{ fontSize: '2rem', fontFamily: 'serif', fontWeight: 900 }}>Emewear Plus-Size Ankara</h3>
              <p style={{ maxWidth: '500px', fontSize: '0.92rem', opacity: 0.85, marginTop: '0.5rem' }}>Handcrafted Ankara wide-leg cargo trousers & royal batik palazzo sets.</p>
              <span style={{ marginTop: '1.2rem', color: '#e5b882', fontWeight: 700, fontSize: '0.85rem' }}>Launching Soon</span>
            </div>
          )}

          {activeTab === 'momo' && (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'radial-gradient(circle, #121826 0%, #07090E 100%)', color: '#fff', padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#10b981' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 800 }}>Automated WhatsApp Order Engine</h3>
              <p style={{ maxWidth: '520px', color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
                When customers select products on your storefront, orders automatically compile into structured WhatsApp messages with instant Mobile Money payment prompts.
              </p>
              <div style={{ marginTop: '1.2rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>
                  Direct WhatsApp Routing
                </span>
                <span style={{ background: 'rgba(255, 204, 0, 0.1)', border: '1px solid rgba(255, 204, 0, 0.3)', color: '#ffcc00', padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>
                  MTN & Telecel Settlement
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
