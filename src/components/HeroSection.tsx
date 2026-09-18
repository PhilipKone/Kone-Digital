import React, { useState } from 'react';

interface HeroSectionProps {
  onOpenWizard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWizard }) => {
  const [activeTab, setActiveTab] = useState<'stone' | 'fashion' | 'foundation'>('stone');

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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>
          {/* Demo Tabs */}
          <button 
            onClick={() => setActiveTab('stone')}
            className={activeTab === 'stone' ? 'btn-primary' : 'btn-secondary'}
            style={{
              padding: '0.35rem 0.95rem',
              borderRadius: '50px',
              fontSize: '0.8rem'
            }}
          >
            Stone Architecture
          </button>

          <button 
            onClick={() => setActiveTab('fashion')}
            className={activeTab === 'fashion' ? 'btn-primary' : 'btn-secondary'}
            style={{
              padding: '0.35rem 0.95rem',
              borderRadius: '50px',
              fontSize: '0.8rem'
            }}
          >
            Fashion Retail
          </button>

          <button 
            onClick={() => setActiveTab('foundation')}
            className={activeTab === 'foundation' ? 'btn-primary' : 'btn-secondary'}
            style={{
              padding: '0.35rem 0.95rem',
              borderRadius: '50px',
              fontSize: '0.8rem'
            }}
          >
            Social Impact NGO
          </button>
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
            <div style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(7, 30, 74, 0.78), rgba(0, 59, 153, 0.82)), url("/ansah-delali/cohort-group.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '2rem 1.2rem', textAlign: 'center' }}>
              <span className="badge-pill gold" style={{ marginBottom: '0.8rem', background: '#FA8C16', color: '#fff' }}>FEATURED SOCIAL IMPACT INITIATIVE</span>
              <h2 style={{ fontSize: 'clamp(1.3rem, 5vw, 2rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Ansah Delali Foundation</h2>
              <p style={{ maxWidth: '520px', fontSize: '0.9rem', opacity: 0.92, marginTop: '0.5rem' }}>Giving Back, Rising Together — Educational mentorship, SkillUp 1.0 outreach, and digital skills empowerment across Ghana.</p>
              <a href="/ansah-delali/index.html" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.2rem', color: '#FFFFFF', background: '#0052CC', border: '1px solid rgba(255,255,255,0.3)', padding: '0.45rem 1.1rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.84rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                <span>Explore Foundation Portal</span>
                <span>➔</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
