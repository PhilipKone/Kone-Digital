

export const Portfolio = () => {
  return (
    <section className="portfolio-section" id="work">
      <div className="portfolio-header fade-in-up">
        <h2>Our <span className="neon-text">Portfolio</span></h2>
        <p>Premium WaaS implementations driving real business growth.</p>
      </div>
      
      <div className="carousel-container">
        <div className="carousel-track" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', width: '100%' }}>
          {/* Sedemson Stone Card */}
          <div className="portfolio-card neon-border fade-in-up" style={{ transitionDelay: '0.1s' }}>
            <div className="card-image-placeholder" style={{ padding: 0 }}>
              <img src="/sedemson-stone/assets/exterior_stone_cladding_hero_1777414375118.png" alt="Sedemson Stone Exterior Cladding" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div className="card-content">
              <h3>Sedemson Stone</h3>
              <p className="tagline">Premium Natural Stone Finishes</p>
              <div className="tags">
                <span className="tag">WaaS</span>
                <span className="tag">B2B</span>
              </div>
              <span className="view-link" style={{ color: '#8b949e', cursor: 'not-allowed', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                Launching Soon 🚀
              </span>
            </div>
          </div>

          {/* Curvy Plus Store Card */}
          <div className="portfolio-card neon-border fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="card-image-placeholder" style={{ padding: 0 }}>
              <img src="/curvy-plus-store/curvy_plus_store_hero.png" alt="Curvy Plus Store - Ghana Made Fashion for Ghanaian Girls" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div className="card-content">
              <h3>Curvy Plus Store</h3>
              <p className="tagline">Ghana-Made Plus-Size Ankara & Fashion</p>
              <div className="tags">
                <span className="tag">Fashion WaaS</span>
                <span className="tag">WhatsApp E-Commerce</span>
              </div>
              <a 
                href="https://wa.me/233540497919?text=Hi%20Curvy%20Plus%20Store%2C%20I'd%20like%20to%20order%20the%20Ghana-made%20Ankara%20wide-leg%20cargo%20trousers%20(GH%E2%82%B5190)."
                target="_blank"
                rel="noopener noreferrer"
                className="view-link" 
                style={{ color: 'var(--cyan-glow, #00ffff)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 800 }}
              >
                <span>Order via WhatsApp (+233 54 049 7919)</span>
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
