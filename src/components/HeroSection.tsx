import React, { useState } from 'react';

interface HeroSectionProps {
  onOpenWizard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWizard }) => {
  const [activeTab, setActiveTab] = useState<'stone' | 'fashion' | 'foundation' | 'momo'>('stone');

  return (
    <section className="hub-hero" style={{ padding: '3rem 1rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem' }}>
        <span className="badge-pill gold" style={{ marginBottom: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-accent)' }} />
          48-HOUR MANAGED LAUNCH SLA
        </span>

        <h1 className="heading-luminance" style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', fontWeight: 900, lineHeight: 1.12, marginBottom: '1.2rem', letterSpacing: '-0.035em' }}>
          Putting Ghana's Best<br />
          <span className="gold-luminance">Businesses Online.</span>
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.12rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '720px', margin: '0 auto 2.5rem', letterSpacing: '-0.01em' }}>
          Traditional marketing ends at the flyer. We engineer high-performance Website as a Service (WaaS) platforms with automated <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>MoMo payments</strong> and direct <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>WhatsApp lead routing</strong>.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={onOpenWizard}
            className="btn-primary"
          >
            <span>Start Fast-Track Project</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <a 
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20request%20a%20consultation%20for%20my%20business%20website." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
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
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              background: 'rgba(255,255,255,0.04)', 
              border: '1px solid rgba(255,255,255,0.08)', 
              padding: '0.25rem 0.75rem', 
              borderRadius: '20px', 
              fontSize: '0.75rem', 
              color: '#94A3B8' 
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
              <span>kone-showcase.io</span>
            </div>
          </div>

          {/* Demo Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              onClick={() => setActiveTab('stone')}
              className={activeTab === 'stone' ? 'btn-primary' : 'btn-secondary'}
              style={{
                padding: '0.35rem 0.9rem',
                borderRadius: '50px',
                fontSize: '0.78rem'
              }}
            >
              Stone Architecture
            </button>

            <button 
              onClick={() => setActiveTab('fashion')}
              className={activeTab === 'fashion' ? 'btn-primary' : 'btn-secondary'}
              style={{
                padding: '0.35rem 0.9rem',
                borderRadius: '50px',
                fontSize: '0.78rem'
              }}
            >
              Fashion Retail
            </button>

            <button 
              onClick={() => setActiveTab('foundation')}
              className={activeTab === 'foundation' ? 'btn-primary' : 'btn-secondary'}
              style={{
                padding: '0.35rem 0.9rem',
                borderRadius: '50px',
                fontSize: '0.78rem'
              }}
            >
              Social Impact NGO
            </button>

            <button 
              onClick={() => setActiveTab('momo')}
              className={activeTab === 'momo' ? 'btn-primary' : 'btn-secondary'}
              style={{
                padding: '0.35rem 0.9rem',
                borderRadius: '50px',
                fontSize: '0.78rem'
              }}
            >
              Payment Engine
            </button>
          </div>
        </div>

        {/* Demo Content Mockup Display */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', minHeight: '340px', height: 'auto', position: 'relative', background: '#0d1117' }}>
          {activeTab === 'stone' && (
            <div style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/sedemson_stone_hero.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '2rem 1.2rem', textAlign: 'center' }}>
              <span className="badge-pill gold" style={{ marginBottom: '0.8rem' }}>FEATURED B2B CLIENT</span>
              <h2 style={{ fontSize: 'clamp(1.3rem, 5vw, 2rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Sedemson Stone Craftsmanship</h2>
              <p style={{ maxWidth: '500px', fontSize: '0.9rem', opacity: 0.85, marginTop: '0.5rem' }}>Natural Stone Cladding & Architectural Finishes across Ghana.</p>
              <a href="#work" style={{ marginTop: '1.2rem', color: '#F8FAFC', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.35rem 0.9rem', borderRadius: '50px', fontWeight: 650, fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Explore Client Showcase</span>
                <span>➔</span>
              </a>
            </div>
          )}

          {activeTab === 'fashion' && (
            <div style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/emewear/emewear_hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'top', color: '#fff', padding: '2rem 1.2rem', textAlign: 'center' }}>
              <span className="badge-pill gold" style={{ marginBottom: '0.8rem' }}>E-COMMERCE SHOWCASE</span>
              <h2 style={{ fontSize: 'clamp(1.3rem, 5vw, 2rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Emewear Plus-Size Ankara</h2>
              <p style={{ maxWidth: '500px', fontSize: '0.9rem', opacity: 0.85, marginTop: '0.5rem' }}>Handcrafted Ankara wide-leg cargo trousers & royal batik palazzo sets.</p>
              <a href="/emewear/index.html" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.2rem', color: '#F8FAFC', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.35rem 0.9rem', borderRadius: '50px', fontWeight: 650, fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Explore Client Showcase</span>
                <span>➔</span>
              </a>
            </div>
          )}

          {activeTab === 'foundation' && (
            <div style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("/ansah-delali/ADF110.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '2rem 1.2rem', textAlign: 'center' }}>
              <span className="badge-pill gold" style={{ marginBottom: '0.8rem' }}>FEATURED NON-PROFIT INITIATIVE</span>
              <h2 style={{ fontSize: 'clamp(1.3rem, 5vw, 2rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Ansah Delali Foundation</h2>
              <p style={{ maxWidth: '520px', fontSize: '0.9rem', opacity: 0.88, marginTop: '0.5rem' }}>Giving Back, Rising Together — Educational mentorship, SkillUp 1.0 outreach, and digital empowerment across Ghana.</p>
              <a href="/ansah-delali/index.html" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.2rem', color: '#F8FAFC', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.35rem 0.9rem', borderRadius: '50px', fontWeight: 650, fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Explore Foundation Portal</span>
                <span>➔</span>
              </a>
            </div>
          )}

          {activeTab === 'momo' && (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'radial-gradient(circle, #121826 0%, #07090E 100%)', color: '#fff', padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#10b981' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 800 }}>Automated WhatsApp Order Engine</h2>
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
