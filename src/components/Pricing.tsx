

import { useCurrency } from '../context/CurrencyContext';

export const Pricing = () => {
  const { formatPrice } = useCurrency();

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header fade-in-up">
        <h2>Transparent <span className="neon-text">Pricing</span></h2>
        <p>Simple, predictable Website as a Service plans for businesses across Ghana.</p>
      </div>

      <div className="pricing-cards">
        
        {/* Lite Plan */}
        <div className="price-card neon-border fade-in-up" style={{ transitionDelay: '0.05s' }}>
          <div className="card-top">
            <h3>Lite</h3>
            <div className="price">
              <span className="amount">{formatPrice(49)}</span>
              <span className="period">/mo</span>
            </div>
            <p className="card-desc">Ideal for market traders, Susu groups, and local artisans.</p>
          </div>
          <ul className="features">
            <li>✓ Niche SME Website Catalog</li>
            <li>✓ Automated MoMo Payments</li>
            <li>✓ Direct WhatsApp Ordering</li>
            <li>✓ Standard Hosting & Support</li>
          </ul>
          <a 
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20SME%20Lite%20Plan%20(GHS%2049%2Fmo)."
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn flex-center"
            style={{ textDecoration: 'none', display: 'flex' }}
          >
            Get Started
          </a>
        </div>

        {/* Starter Plan */}
        <div className="price-card neon-border fade-in-up" style={{ transitionDelay: '0.1s' }}>
          <div className="card-top">
            <h3>Starter</h3>
            <div className="price">
              <span className="amount">{formatPrice(499)}</span>
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
          <a 
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Starter%20Plan%20(GHS%20499%2Fmo)."
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn flex-center"
            style={{ textDecoration: 'none', display: 'flex' }}
          >
            Get Started
          </a>
        </div>

        {/* Professional Plan (Highlighted) */}
        <div className="price-card neon-border highlight fade-in-up" style={{ transitionDelay: '0.2s' }}>
          <div className="badge">MOST POPULAR</div>
          <div className="card-top">
            <h3 className="neon-text">Professional</h3>
            <div className="price">
              <span className="amount">{formatPrice(999)}</span>
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
          <a 
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Professional%20Plan%20(GHS%20999%2Fmo)."
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn neon-border active flex-center"
            style={{ textDecoration: 'none', display: 'flex' }}
          >
            Get Started
          </a>
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
          <a 
            href="https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20discuss%20a%20Custom%20Enterprise%20Plan%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn flex-center"
            style={{ textDecoration: 'none', display: 'flex' }}
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
};
