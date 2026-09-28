import { useEffect, useRef, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { TrustMetrics } from './components/TrustMetrics';
import { OnboardingWizard } from './components/OnboardingWizard';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import ServicesHub from './components/ServicesHub';
import ServiceDetail from './components/ServiceDetail';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWizardOpen, setIsWizardOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [wizardPrefill, setWizardPrefill] = useState<{ phone?: string; businessName?: string }>({});

  const handleOpenWizardWithPrefill = (data?: { phone?: string; businessName?: string }) => {
    if (data) setWizardPrefill(data);
    setIsWizardOpen(true);
  };
  
  const [currentRoute, setCurrentRoute] = useState<'home' | 'services' | 'service-detail' | 'work' | 'pricing'>(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash.startsWith('#services/')) return 'service-detail';
    if (hash.startsWith('#services')) return 'services';
    if (hash.startsWith('#work')) return 'work';
    if (hash.startsWith('#pricing')) return 'pricing';
    return 'home';
  });

  const [activeServiceSlug, setActiveServiceSlug] = useState<string>(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash.startsWith('#services/')) return hash.replace('#services/', '');
    return 'web-development';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#services/')) {
        const slug = hash.replace('#services/', '');
        setActiveServiceSlug(slug);
        setCurrentRoute('service-detail');
      } else if (hash.startsWith('#services')) {
        setCurrentRoute('services');
      } else if (hash.startsWith('#work')) {
        setCurrentRoute('work');
      } else if (hash.startsWith('#pricing')) {
        setCurrentRoute('pricing');
      } else {
        setCurrentRoute('home');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Zero-lag instant visibility: ensure all elements are immediately rendered with zero scroll jank
    const root = containerRef.current || document;
    const elements = root.querySelectorAll('.fade-in-up');
    elements.forEach(el => el.classList.add('visible'));
  }, [currentRoute]);

  return (
    <div ref={containerRef} className="digital-app-root">
      <header className="hub-header">
        <div className="hub-header-inner">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
              <img src="/kone-digital-logo.svg" alt="Kone Digital Logo" className="logo-icon neon-logo" width="34" height="34" />
              <span className="logo-text" style={{ fontWeight: 850, letterSpacing: '-0.02em' }}>KONE <span className="neon-text">DIGITAL</span></span>
            </a>
          </div>

          {/* Desktop Navbar */}
          <nav className="hub-nav">
            <a href="#" className={currentRoute === 'home' ? 'active-nav' : ''}>Overview</a>
            <a href="#services" className={currentRoute === 'services' || currentRoute === 'service-detail' ? 'active-nav' : ''}>Services</a>
            <a href="#work" className={currentRoute === 'work' ? 'active-nav' : ''}>Work</a>
            <a href="#pricing" className={currentRoute === 'pricing' ? 'active-nav' : ''}>Pricing</a>
            <a 
              href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <button 
              onClick={() => handleOpenWizardWithPrefill()}
              className="btn-primary"
              style={{
                padding: '0.45rem 1.1rem',
                fontSize: '0.82rem',
                marginLeft: '0.4rem',
                borderRadius: '50px'
              }}
            >
              <span>Start Project</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </nav>

          {/* Mobile Header Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="mobile-header-controls">
            <button 
              className="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-drawer-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <img src="/kone-digital-logo.svg" alt="Kone Digital Logo" width="30" height="30" />
              <span style={{ fontWeight: 850, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>KONE <span className="neon-text">DIGITAL</span></span>
            </div>
            <button 
              className="mobile-drawer-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="mobile-drawer-links">
            <a 
              href="#" 
              className={`mobile-drawer-link ${currentRoute === 'home' ? 'active-nav' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Overview</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>01</span>
            </a>
            <a 
              href="#services" 
              className={`mobile-drawer-link ${currentRoute === 'services' || currentRoute === 'service-detail' ? 'active-nav' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Services</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>02</span>
            </a>
            <a 
              href="#work" 
              className={`mobile-drawer-link ${currentRoute === 'work' ? 'active-nav' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Work</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>03</span>
            </a>
            <a 
              href="#pricing" 
              className={`mobile-drawer-link ${currentRoute === 'pricing' ? 'active-nav' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Pricing</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>04</span>
            </a>
            <a 
              href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-drawer-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Contact via WhatsApp</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>➔</span>
            </a>
          </div>

          <div className="mobile-drawer-footer">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleOpenWizardWithPrefill();
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
            >
              <span>Start Fast-Track Project</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main id="main-content" style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', width: '100%', gap: '3rem' }}>
        {currentRoute === 'service-detail' ? (
          <ServiceDetail 
            slug={activeServiceSlug} 
            onBack={() => setCurrentRoute('services')}
          />
        ) : currentRoute === 'services' ? (
          <ServicesHub 
            onSelectService={(slug) => {
              setActiveServiceSlug(slug);
              setCurrentRoute('service-detail');
            }} 
          />
        ) : currentRoute === 'work' ? (
          <Portfolio />
        ) : currentRoute === 'pricing' ? (
          <Pricing />
        ) : (
          <>
            <HeroSection onOpenWizard={() => handleOpenWizardWithPrefill()} />
            <TrustMetrics />
            <ServicesHub 
              onSelectService={(slug) => {
                setActiveServiceSlug(slug);
                setCurrentRoute('service-detail');
              }} 
            />
            <Portfolio />
            <Pricing />
          </>
        )}
      </main>

      <OnboardingWizard 
        isOpen={isWizardOpen} 
        onClose={() => setIsWizardOpen(false)} 
        initialPhone={wizardPrefill.phone}
        initialBusinessName={wizardPrefill.businessName}
      />

      {/* Footer */}
      <footer className="hub-footer fade-in-up" style={{
        marginTop: '2rem',
        paddingTop: '2.5rem',
        paddingBottom: '3.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/kone-digital-logo.svg" alt="Kone Digital Logo" className="logo-icon neon-logo" width="36" height="36" />
          <span className="logo-text" style={{ fontSize: '1.2rem', fontWeight: 800 }}>KONE <span className="neon-text">DIGITAL</span></span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', maxWidth: '520px', margin: '0 auto', lineHeight: '1.6' }}>
          Ghana's premier digital studio for high-performance business websites, web apps, & automated WhatsApp lead engines.
        </p>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.88rem', fontWeight: 600 }}>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Overview</a>
          <a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Services</a>
          <a href="#work" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Work</a>
          <a href="#pricing" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Pricing</a>
        </div>

        {/* Social / Channel Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a 
            href="https://whatsapp.com/channel/0029Vb7wdZMJUM2fepkMfR0D" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              background: 'rgba(37, 211, 102, 0.12)', 
              border: '1px solid rgba(37, 211, 102, 0.35)', 
              color: '#25d366', 
              padding: '0.5rem 1.1rem', 
              borderRadius: '25px', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              boxShadow: '0 0 12px rgba(37, 211, 102, 0.15)',
              transition: 'all 0.2s ease'
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" style={{ flexShrink: 0 }}>
              <path fill="#25D366" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/>
              <path fill="#FFFFFF" d="M8.53 7.33c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28s-1.44-.71-1.66-.79-.38-.12-.54.12c-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06s-1.02-.38-1.94-1.2c-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.31-.74-1.79c-.2-.48-.4-.41-.55-.42l-.47-.01z"/>
            </svg>
            <span>WhatsApp Channel</span>
          </a>
          <a 
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch." 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              background: 'rgba(0, 255, 255, 0.08)', 
              border: '1px solid rgba(0, 255, 255, 0.25)', 
              color: 'var(--cyan-glow)', 
              padding: '0.5rem 1.1rem', 
              borderRadius: '25px', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              boxShadow: '0 0 12px rgba(0, 255, 255, 0.1)',
              transition: 'all 0.2s ease'
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Direct Line (+233 55 199 3820)</span>
          </a>
          <a 
            href="https://www.koneacademy.io" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid rgba(255, 255, 255, 0.15)', 
              color: 'var(--text-muted)', 
              padding: '0.5rem 1.1rem', 
              borderRadius: '25px', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.45rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span>🌐</span>
            <span>Kone Academy Ecosystem</span>
          </a>
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
          © {new Date().getFullYear()} Kone Digital. Powered by Kone Academy. All rights reserved.
        </div>
      </footer>
      
      <a 
        href="https://wa.me/233551993820" 
        className="whatsapp-fab" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.132 1.38 4.788 1.381 5.069 0 9.199-4.13 9.201-9.199.001-2.454-.952-4.761-2.686-6.494-1.734-1.734-4.041-2.688-6.498-2.689-5.074 0-9.207 4.129-9.208 9.199-.001 1.73.455 3.415 1.32 4.89l-.103.16-1.11 4.054 4.151-1.089.16.095zm10.125-6.702c-.281-.141-1.664-.822-1.921-.916-.257-.094-.443-.141-.63.141-.186.281-.723.916-.885 1.102-.162.186-.324.21-.605.069-.282-.141-1.189-.439-2.264-1.401-.836-.746-1.4-1.667-1.564-1.948-.164-.282-.017-.434.124-.573.127-.125.281-.328.422-.492.141-.164.188-.281.282-.469.094-.188.047-.352-.023-.492-.07-.141-.63-1.523-.863-2.086-.226-.552-.455-.477-.63-.486-.162-.008-.349-.01-.536-.01-.188 0-.492.07-.75.352-.257.282-.984.961-.984 2.343 0 1.382 1.008 2.718 1.148 2.906.141.188 1.984 3.029 4.806 4.242.671.289 1.194.462 1.602.592.674.214 1.287.184 1.77.112.539-.081 1.664-.68 1.898-1.336.234-.656.234-1.219.164-1.336-.07-.117-.257-.188-.539-.328z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
