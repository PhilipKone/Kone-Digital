

export const Portfolio = () => {
  return (
    <section className="portfolio-section" id="work">
      <div className="portfolio-header fade-in-up">
        <h2>Our <span className="neon-text">Portfolio</span></h2>
        <p>Premium WaaS implementations driving real business growth.</p>
      </div>
      
      <div className="carousel-container">
        <div className="carousel-track" style={{ justifyContent: 'center', width: '100%' }}>
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
              <a href="/sedemson-stone/" target="_blank" rel="noreferrer" className="view-link neon-text">View Live Site &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
