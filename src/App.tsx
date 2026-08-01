import { useEffect, useRef, useState } from 'react';
import { CurrencyToggle } from './components/CurrencyToggle/CurrencyToggle';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'work' | 'pricing'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#work') setActiveTab('work');
      else if (hash === '#pricing') setActiveTab('pricing');
      else setActiveTab('home');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const isReactSnap = navigator.userAgent === 'ReactSnap';

    if (isReactSnap) {
      // Immediately make all fade-in-up elements visible during prerendering
      const elements = containerRef.current?.querySelectorAll('.fade-in-up') || [];
      elements.forEach(el => {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const observeElements = () => {
      const elements = containerRef.current?.querySelectorAll('.fade-in-up:not(.observed)') || [];
      elements.forEach(el => {
        observer.observe(el);
        el.classList.add('observed');
      });
    };

    observeElements();

    // Watch for lazy-loaded components entering the DOM
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    if (containerRef.current) {
      mutationObserver.observe(containerRef.current, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="hub-container" ref={containerRef}>
      <header className="hub-header">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/kone-digital-logo.svg" alt="Kone Digital Logo" className="logo-icon neon-logo" width="40" height="40" />
          <span className="logo-text">KONE <span className="neon-text">DIGITAL</span></span>
        </div>
        <nav className="hub-nav">
          <a href="#work">Our Work</a>
          <a href="#pricing">Pricing</a>
          <a 
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <CurrencyToggle />
        </nav>
      </header>

      {/* Main Content Area */}
      <main id="main-content" style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', width: '100%', gap: '3rem' }}>
        <section className="hub-hero">
          <h1 className="gold-text">Putting Ghana's Best<br/>Businesses Online.</h1>
          <p>Traditional marketing ends at the flyer. We build dedicated, high-performance 'Digital Flyers' that drive customers straight to your WhatsApp. Zero maintenance, maximum growth.</p>
          <a 
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20request%20a%20consultation%20for%20my%20business%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn neon-border flex-center"
            style={{ textDecoration: 'none', display: 'inline-flex' }}
          >
            Request a Consultation
          </a>
        </section>

        <Portfolio />
        <Pricing />
      </main>
      
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

      {/* Mobile Floating Bottom Bar (Instagram Neon Style) */}
      <nav className="digital-mobile-bottom-nav">
        <a 
          href="#main-content" 
          className={`mobile-tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
          title="Home"
        >
          <div className="mobile-icon-pill">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
        </a>
        <a 
          href="#work" 
          className={`mobile-tab ${activeTab === 'work' ? 'active' : ''}`}
          onClick={() => setActiveTab('work')}
          title="Our Work"
        >
          <div className="mobile-icon-pill">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
        </a>
        <a 
          href="#pricing" 
          className={`mobile-tab ${activeTab === 'pricing' ? 'active' : ''}`}
          onClick={() => setActiveTab('pricing')}
          title="Pricing"
        >
          <div className="mobile-icon-pill">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
          </div>
        </a>
        <a 
          href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services."
          target="_blank" 
          rel="noopener noreferrer"
          className="mobile-tab"
          title="Contact"
        >
          <div className="mobile-icon-pill">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
        </a>
      </nav>
    </div>
  );
}

export default App;
