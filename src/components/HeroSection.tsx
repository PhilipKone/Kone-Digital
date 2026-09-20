import React, { useState, useEffect, useCallback } from 'react';

interface HeroSectionProps {
  onOpenWizard: () => void;
}

type TabType = 'stone' | 'fashion' | 'foundation';

interface TabItem {
  id: TabType;
  label: string;
}

const TABS: TabItem[] = [
  { id: 'stone', label: 'Stone Architecture' },
  { id: 'fashion', label: 'Fashion Retail' },
  { id: 'foundation', label: 'Social Impact NGO' },
];

const AUTO_CYCLE_INTERVAL = 5000;

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWizard }) => {
  const [activeTab, setActiveTab] = useState<TabType>('stone');
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const goToNextTab = useCallback(() => {
    setActiveTab((prev) => {
      const idx = TABS.findIndex((t) => t.id === prev);
      return TABS[(idx + 1) % TABS.length].id;
    });
    setProgressKey((k) => k + 1);
  }, []);

  const goToPrevTab = useCallback(() => {
    setActiveTab((prev) => {
      const idx = TABS.findIndex((t) => t.id === prev);
      return TABS[(idx - 1 + TABS.length) % TABS.length].id;
    });
    setProgressKey((k) => k + 1);
  }, []);

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      goToNextTab();
    }, AUTO_CYCLE_INTERVAL);

    return () => clearTimeout(timer);
  }, [isPaused, activeTab, goToNextTab]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    setIsPaused(false);
    setProgressKey((k) => k + 1);
  };

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

      {/* Interactive Live Demo Preview Stage with 5s Auto-Cycle & Pause-on-Hover */}
      <div 
        className="hero-demo-stage neon-border" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={() => setIsPaused(true)}
        onBlur={() => {
          setIsPaused(false);
          setProgressKey((k) => k + 1);
        }}
        aria-label="Interactive Client Showcase Carousel"
        role="region"
        style={{ 
          background: 'var(--bg-surface)', 
          borderRadius: '20px', 
          padding: '1.5rem', 
          maxWidth: '960px', 
          margin: '0 auto',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.2rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>
          {/* Demo Tabs */}
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={isActive ? 'btn-primary' : 'btn-secondary'}
                style={{
                  padding: '0.38rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.82rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                }}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>{tab.label}</span>
                {isActive && (
                  <span
                    key={`progress-${tab.id}-${progressKey}`}
                    className="hero-tab-progress-bar"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: '3px',
                      background: '#07090E',
                      borderRadius: '2px',
                      animation: `tabProgressBar ${AUTO_CYCLE_INTERVAL}ms linear forwards`,
                      animationPlayState: isPaused ? 'paused' : 'running',
                      zIndex: 1,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Demo Content Mockup Display with Smooth Cross-Fade */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', minHeight: '340px', height: 'auto', position: 'relative', background: '#0d1117' }}>
          {/* Arrow navigation buttons */}
          <button
            onClick={goToPrevTab}
            aria-label="Previous client showcase"
            className="showcase-nav-btn prev"
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(7, 9, 14, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={goToNextTab}
            aria-label="Next client showcase"
            className="showcase-nav-btn next"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(7, 9, 14, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {activeTab === 'stone' && (
            <div 
              key="slide-stone"
              className="hero-slide-enter"
              style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/sedemson_stone_hero.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '2rem 2.8rem', textAlign: 'center' }}
            >
              <span className="badge-pill gold" style={{ marginBottom: '0.8rem' }}>FEATURED B2B CLIENT</span>
              <h2 style={{ fontSize: 'clamp(1.25rem, 4.5vw, 2rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Sedemson Stone Craftsmanship</h2>
              <p style={{ maxWidth: '500px', fontSize: '0.88rem', opacity: 0.85, marginTop: '0.5rem' }}>Natural Stone Cladding & Architectural Finishes across Ghana.</p>
              <a href="/sedemson-stone/index.html" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.2rem', color: '#F8FAFC', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.35rem 0.9rem', borderRadius: '50px', fontWeight: 650, fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Explore Client Showcase</span>
                <span>➔</span>
              </a>
            </div>
          )}

          {activeTab === 'fashion' && (
            <div 
              key="slide-fashion"
              className="hero-slide-enter"
              style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/emewear/emewear_hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'top', color: '#fff', padding: '2rem 2.8rem', textAlign: 'center' }}
            >
              <span className="badge-pill gold" style={{ marginBottom: '0.8rem' }}>E-COMMERCE SHOWCASE</span>
              <h2 style={{ fontSize: 'clamp(1.25rem, 4.5vw, 2rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Emewear Plus-Size Ankara</h2>
              <p style={{ maxWidth: '500px', fontSize: '0.88rem', opacity: 0.85, marginTop: '0.5rem' }}>Handcrafted Ankara wide-leg cargo trousers & royal batik palazzo sets.</p>
              <a href="/emewear/index.html" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.2rem', color: '#F8FAFC', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.35rem 0.9rem', borderRadius: '50px', fontWeight: 650, fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Explore Client Showcase</span>
                <span>➔</span>
              </a>
            </div>
          )}

          {activeTab === 'foundation' && (
            <div 
              key="slide-foundation"
              className="hero-slide-enter"
              style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(7, 30, 74, 0.78), rgba(0, 59, 153, 0.82)), url("/ansah-delali/cohort-group.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '2rem 2.8rem', textAlign: 'center' }}
            >
              <span className="badge-pill gold" style={{ marginBottom: '0.8rem', background: '#FA8C16', color: '#fff' }}>FEATURED SOCIAL IMPACT INITIATIVE</span>
              <h2 style={{ fontSize: 'clamp(1.25rem, 4.5vw, 2rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Ansah Delali Foundation</h2>
              <p style={{ maxWidth: '520px', fontSize: '0.88rem', opacity: 0.92, marginTop: '0.5rem' }}>Giving Back, Rising Together — Educational mentorship, SkillUp 1.0 outreach, and digital skills empowerment across Ghana.</p>
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
