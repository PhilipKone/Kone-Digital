import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';

export const Pricing: React.FC = () => {
  const { currency, setCurrency, formatPrice } = useCurrency();
  const [sliderIndex, setSliderIndex] = useState(2); // Default to Professional

  const plans = [
    {
      id: 'lite',
      name: 'Lite',
      priceGhs: 49,
      desc: 'Ideal for market traders, Susu groups, and local artisans.',
      features: [
        '✓ Niche SME Website Catalog',
        '✓ Automated MoMo Payments',
        '✓ Direct WhatsApp Lead Routing',
        '✓ Standard Hosting & SSL Security'
      ],
      whatsappMsg: "Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20SME%20Lite%20Plan."
    },
    {
      id: 'starter',
      name: 'Starter',
      priceGhs: 499,
      desc: 'Perfect for small businesses needing a high-converting digital flyer.',
      features: [
        '✓ Custom Single Page Website',
        '✓ Automated WhatsApp Integration',
        '✓ Ultra-Fast Mobile Optimization',
        '✓ Monthly Maintenance & Backups'
      ],
      whatsappMsg: "Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Starter%20Plan."
    },
    {
      id: 'professional',
      name: 'Professional',
      priceGhs: 999,
      desc: 'For growing brands needing a full multi-page corporate hub.',
      popular: true,
      features: [
        '✓ Up to 5 Custom Pages',
        '✓ Full Technical SEO & Sitemaps',
        '✓ Custom Form & Lead Integrations',
        '✓ 24/7 Priority Support Guarantee'
      ],
      whatsappMsg: "Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Professional%20Plan."
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      priceGhs: 2499,
      desc: 'Advanced web applications, custom databases, and API engineering.',
      features: [
        '✓ Full Custom Architecture & Stack',
        '✓ Backend & Payment Gateway Integration',
        '✓ Advanced Analytics & Custom CRM',
        '✓ Dedicated Senior Engineer Account Manager'
      ],
      whatsappMsg: "Hi%20Kone%20Digital%2C%20I'd%20like%20to%20discuss%20a%20Custom%20Enterprise%20Plan."
    }
  ];

  const currentPlan = plans[sliderIndex];

  return (
    <section className="pricing-section" id="pricing" style={{ padding: '4rem 1rem' }}>
      <div className="pricing-header fade-in-up" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2>Transparent <span className="neon-text">WaaS Pricing</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
          Simple, predictable Website as a Service plans tailored for African enterprises.
        </p>

        {/* Currency Switcher Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
          <span style={{ color: currency === 'GHS' ? 'var(--cyan-glow)' : 'var(--text-muted)', fontWeight: 700, fontSize: '0.9rem' }}>GHS (₵)</span>
          <button 
            onClick={() => setCurrency(currency === 'GHS' ? 'USD' : 'GHS')}
            style={{
              background: 'rgba(0, 255, 255, 0.15)',
              border: '1px solid var(--cyan-glow)',
              width: '60px',
              height: '30px',
              borderRadius: '20px',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '3px'
            }}
          >
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'var(--cyan-glow)',
              transform: currency === 'USD' ? 'translateX(30px)' : 'translateX(0)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }} />
          </button>
          <span style={{ color: currency === 'USD' ? 'var(--cyan-glow)' : 'var(--text-muted)', fontWeight: 700, fontSize: '0.9rem' }}>USD ($)</span>
        </div>
      </div>

      {/* Interactive Package Slider Control */}
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', padding: '1.5rem', background: 'var(--bg-surface)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 700 }}>
          <span>SLIDE TO COMPARE PACKAGES:</span>
          <span style={{ color: 'var(--cyan-glow)' }}>{currentPlan.name} Plan Selected</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="3" 
          step="1" 
          value={sliderIndex}
          onChange={(e) => setSliderIndex(parseInt(e.target.value))}
          style={{
            width: '100%',
            height: '8px',
            borderRadius: '5px',
            background: 'var(--bg-surface-light)',
            outline: 'none',
            cursor: 'pointer',
            accentColor: 'var(--cyan-glow)'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.6rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          <span>Lite</span>
          <span>Starter</span>
          <span>Professional</span>
          <span>Enterprise</span>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="pricing-cards" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        {plans.map((plan, index) => {
          const isSelected = index === sliderIndex;

          return (
            <div 
              key={plan.id}
              onClick={() => setSliderIndex(index)}
              className={`price-card neon-border ${isSelected ? 'highlight active' : ''}`}
              style={{
                background: isSelected ? 'rgba(0, 255, 255, 0.04)' : 'var(--bg-surface)',
                borderColor: isSelected ? 'var(--cyan-glow)' : 'rgba(255, 255, 255, 0.08)',
                transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.35s ease',
                cursor: 'pointer',
                width: '270px',
                position: 'relative'
              }}
            >
              {plan.popular && (
                <div className="badge" style={{ background: 'var(--gold-accent)', color: '#090B10' }}>
                  MOST POPULAR
                </div>
              )}

              <div className="card-top" style={{ textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: isSelected ? 'var(--cyan-glow)' : 'var(--text-main)' }}>
                  {plan.name}
                </h3>
                <div className="price" style={{ margin: '1rem 0' }}>
                  <span className="amount" style={{ fontSize: '2.2rem', fontWeight: 800 }}>
                    {formatPrice(plan.priceGhs)}
                  </span>
                  <span className="period" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/mo</span>
                </div>
                <p className="card-desc" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {plan.desc}
                </p>
              </div>

              <ul className="features" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', flexGrow: 1 }}>
                {plan.features.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '0.86rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {feat}
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/233551993820?text=${plan.whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn neon-border flex-center"
                style={{ 
                  textDecoration: 'none', 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: isSelected ? 'var(--cyan-glow)' : 'transparent',
                  color: isSelected ? '#090B10' : 'var(--cyan-glow)',
                  padding: '0.75rem 1.2rem',
                  fontSize: '0.85rem',
                  fontWeight: 800
                }}
              >
                Get Started via WhatsApp
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
