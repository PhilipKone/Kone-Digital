

export const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header fade-in-up">
        <h2>Transparent <span className="neon-text">Pricing</span></h2>
        <p>Simple, predictable Website as a Service plans for Accra businesses.</p>
      </div>

      <div className="pricing-cards">
        
        {/* Starter Plan */}
        <div className="price-card neon-border fade-in-up" style={{ transitionDelay: '0.1s' }}>
          <div className="card-top">
            <h3>Starter</h3>
            <div className="price">
              <span className="currency">GHS</span>
              <span className="amount">499</span>
              <span className="period">/mo</span>
            </div>
            <p className="card-desc">Perfect for small businesses needing a digital flyer.</p>
          </div>
          <ul className="features">
            <li>✓ Custom Single Page Website</li>
            <li>✓ WhatsApp Integration</li>
            <li>✓ Mobile Optimized</li>
            <li>✓ Monthly Maintenance</li>
          </ul>
          <button className="neon-btn">Get Started</button>
        </div>

        {/* Professional Plan (Highlighted) */}
        <div className="price-card neon-border highlight fade-in-up" style={{ transitionDelay: '0.2s' }}>
          <div className="badge">MOST POPULAR</div>
          <div className="card-top">
            <h3 className="neon-text">Professional</h3>
            <div className="price">
              <span className="currency">GHS</span>
              <span className="amount">999</span>
              <span className="period">/mo</span>
            </div>
            <p className="card-desc">For growing businesses needing a full corporate hub.</p>
          </div>
          <ul className="features">
            <li>✓ Up to 5 Pages</li>
            <li>✓ SEO Optimization</li>
            <li>✓ Custom Form Integrations</li>
            <li>✓ Priority Support</li>
          </ul>
          <button className="neon-btn neon-border active">Get Started</button>
        </div>

        {/* Enterprise Plan */}
        <div className="price-card neon-border fade-in-up" style={{ transitionDelay: '0.3s' }}>
          <div className="card-top">
            <h3>Enterprise</h3>
            <div className="price">
              <span className="amount" style={{ fontSize: '1.8rem'}}>Custom</span>
            </div>
            <p className="card-desc">Advanced web apps and custom data solutions.</p>
          </div>
          <ul className="features">
            <li>✓ Full Custom Architecture</li>
            <li>✓ Backend Integrations</li>
            <li>✓ Advanced Analytics</li>
            <li>✓ Dedicated Account Manager</li>
          </ul>
          <button className="neon-btn">Contact Us</button>
        </div>

      </div>
    </section>
  );
};
