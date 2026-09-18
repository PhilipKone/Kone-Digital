import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';

export const Pricing: React.FC = () => {
  const { currency, setCurrency, formatPrice } = useCurrency();
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(2); // Default to Professional

  const plans = [
    {
      id: 'lite',
      name: 'Lite Tier',
      badge: 'SME STARTER',
      priceGhs: 49,
      desc: 'Ideal for local merchants, Susu collectives, and boutique artisans.',
      features: [
        'Curated Digital Product Catalog',
        'Direct Mobile Money Payment Routing',
        'Instant WhatsApp Lead Notifications',
        'Cloudflare SSL & Managed Fast DNS'
      ],
      whatsappMsg: "Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20SME%20Lite%20Plan."
    },
    {
      id: 'starter',
      name: 'Starter Tier',
      badge: 'GROWTH',
      priceGhs: 499,
      desc: 'Perfect for small businesses needing a high-converting digital storefront.',
      features: [
        'Custom Single Page Web Architecture',
        'Automated WhatsApp Inquiry Routing',
        'Ultra-Fast Mobile Optimization',
        'Managed Weekly Backups & Security'
      ],
      whatsappMsg: "Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Starter%20Plan."
    },
    {
      id: 'professional',
      name: 'Professional Tier',
      badge: 'MOST POPULAR',
      priceGhs: 999,
      desc: 'For growing brands needing a complete multi-page corporate ecosystem.',
      popular: true,
      features: [
        'Up to 5 Tailored Application Pages',
        'Full Technical SEO & Schema Microdata',
        'Automated Lead Intake CRM Integration',
        '24/7 Priority Engineering SLA'
      ],
      whatsappMsg: "Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Professional%20Plan."
    },
    {
      id: 'enterprise',
      name: 'Enterprise Tier',
      badge: 'CUSTOM APPLICATION',
      priceGhs: 2499,
      desc: 'Advanced web applications, custom databases, and API engineering.',
      features: [
        'Full Custom Architecture & Tech Stack',
        'Backend & Payment Gateway Integration',
        'Advanced Analytics & Real-Time Dashboard',
        'Dedicated Senior Engineer Account Lead'
      ],
      whatsappMsg: "Hi%20Kone%20Digital%2C%20I'd%20like%20to%20discuss%20a%20Custom%20Enterprise%20Plan."
    }
  ];

  return (
    <section className="pricing-section" id="pricing" style={{ padding: '3.5rem 1rem', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box', overflowX: 'hidden' }}>
      <div className="pricing-header fade-in-up" style={{ textAlign: 'center', marginBottom: '3rem', width: '100%', boxSizing: 'border-box' }}>
        <span className="badge-pill" style={{ marginBottom: '1rem', whiteSpace: 'normal', lineHeight: 1.4 }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00F0FF', flexShrink: 0 }} />
          MANAGED TIERS & SLA
        </span>
        <h2 className="heading-luminance" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 850, marginTop: '0.8rem', letterSpacing: '-0.03em' }}>
          Transparent <span className="cyan-luminance">WaaS Pricing</span>
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '1.05rem', marginTop: '0.6rem', letterSpacing: '-0.01em', maxWidth: '640px', margin: '0.6rem auto 0', lineHeight: 1.6 }}>
          Predictable, high-ROI Website as a Service subscription tiers with zero hidden setup fees or surprise maintenance costs.
        </p>

        {/* Currency Switcher Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.8rem', marginTop: '1.8rem' }}>
          <span style={{ color: currency === 'GHS' ? '#00F0FF' : '#94A3B8', fontWeight: 750, fontSize: '0.85rem', letterSpacing: '0.04em' }}>GHS (₵)</span>
          <button 
            onClick={() => setCurrency(currency === 'GHS' ? 'USD' : 'GHS')}
            aria-label={`Switch pricing currency from ${currency} to ${currency === 'GHS' ? 'USD' : 'GHS'}`}
            title={`Switch pricing currency from ${currency} to ${currency === 'GHS' ? 'USD' : 'GHS'}`}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              width: '54px',
              height: '28px',
              borderRadius: '20px',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: '#00F0FF',
              transform: currency === 'USD' ? 'translateX(26px)' : 'translateX(0)',
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 2px 6px rgba(0, 240, 255, 0.4)'
            }} />
          </button>
          <span style={{ color: currency === 'USD' ? '#00F0FF' : '#94A3B8', fontWeight: 750, fontSize: '0.85rem', letterSpacing: '0.04em' }}>USD ($)</span>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="pricing-cards" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
        gap: '1.5rem', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {plans.map((plan, index) => {
          const isSelected = index === selectedPlanIndex;

          return (
            <div 
              key={plan.id}
              onClick={() => setSelectedPlanIndex(index)}
              className="price-card fade-in-up"
              style={{
                background: isSelected ? 'rgba(0, 240, 255, 0.04)' : 'rgba(13, 18, 29, 0.75)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderColor: isSelected ? 'rgba(0, 240, 255, 0.45)' : 'rgba(255, 255, 255, 0.08)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '20px',
                padding: '1.8rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: isSelected ? '0 15px 40px -10px rgba(0, 240, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.12)' : '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 800, 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '6px',
                    background: plan.popular ? 'rgba(250, 204, 21, 0.15)' : 'rgba(56, 189, 248, 0.12)',
                    color: plan.popular ? '#FACC15' : '#38BDF8',
                    letterSpacing: '0.04em'
                  }}>
                    {plan.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: isSelected ? '#00F0FF' : '#FFFFFF', fontWeight: 850, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
                  {plan.name}
                </h3>
                
                <div className="price" style={{ margin: '0.8rem 0 1rem' }}>
                  <span className="amount" style={{ fontSize: '2.1rem', fontWeight: 850, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
                    {formatPrice(plan.priceGhs)}
                  </span>
                  <span className="period" style={{ fontSize: '0.85rem', color: '#94A3B8', marginLeft: '0.2rem' }}>/month</span>
                </div>

                <p className="card-desc" style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '1.4rem' }}>
                  {plan.desc}
                </p>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.2rem', marginBottom: '1.6rem' }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94A3B8', marginBottom: '0.8rem' }}>
                    Included Features
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {plan.features.map((feat, idx) => (
                      <li key={idx} style={{ fontSize: '0.83rem', color: '#E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.4 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href={`https://wa.me/233551993820?text=${plan.whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={isSelected ? "btn-primary" : "btn-secondary"}
                style={{ 
                  textDecoration: 'none', 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.4rem',
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: '0.86rem',
                  borderRadius: '12px'
                }}
              >
                <span>Select Plan</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
