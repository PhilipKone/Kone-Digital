import React from 'react';

export const TrustMetrics: React.FC = () => {
  const capabilities = [
    {
      metric: '48h',
      title: 'Rapid Launch Turnaround',
      description: 'Your bespoke business hub deployed with zero technical overhead.',
      color: 'var(--cyan-glow)'
    },
    {
      metric: 'Direct',
      title: 'MoMo & WhatsApp Routing',
      description: 'Automated order collection straight to your MTN, Telecel, or AT phone.',
      color: 'var(--gold-accent)'
    },
    {
      metric: '100%',
      title: 'Fully Managed WaaS',
      description: 'Zero maintenance headaches. We handle hosting, SSL, updates & security.',
      color: '#10b981'
    },
    {
      metric: '99.9%',
      title: 'Guaranteed Uptime & Speed',
      description: 'Ultra-lightweight code optimized for African 3G/4G networks.',
      color: 'var(--cyan-glow)'
    }
  ];

  return (
    <section className="trust-metrics-section" style={{ padding: '3rem 0', margin: '2rem 0' }}>
      <div className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="badge-pill cyan">
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cyan-glow)' }} />
          ENTERPRISE ARCHITECTURE • ZERO MAINTENANCE
        </span>
        <h2 className="heading-luminance" style={{ fontSize: 'clamp(1.7rem, 5vw, 2.4rem)', marginTop: '0.9rem', fontWeight: 850 }}>
          Engineered for <span className="cyan-luminance">Real Business Growth</span>
        </h2>
      </div>

      <div className="metrics-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', 
        gap: '1.2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {capabilities.map((cap, idx) => (
          <div key={idx} className="metric-card neon-border" style={{ 
            background: 'var(--bg-surface)', 
            padding: '2rem 1.5rem', 
            borderRadius: '16px', 
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '2.6rem', fontWeight: 900, color: cap.color }}>
              {cap.metric}
            </div>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: 700, marginTop: '0.6rem', marginBottom: '0.3rem' }}>
              {cap.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>
              {cap.description}
            </p>
          </div>
        ))}
      </div>

      {/* Integration Partner Logos with Authentic Brand Marks */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        gap: '1.2rem', 
        marginTop: '3.5rem',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          color: 'var(--text-subtle)', 
          fontSize: '0.74rem', 
          fontWeight: 800, 
          textTransform: 'uppercase', 
          letterSpacing: '0.08em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem'
        }}>
          <span style={{ width: '28px', height: '1px', background: 'rgba(255, 255, 255, 0.12)' }} />
          SUPPORTED PAYMENT & LEAD GATEWAYS
          <span style={{ width: '28px', height: '1px', background: 'rgba(255, 255, 255, 0.12)' }} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.85rem',
          flexWrap: 'wrap',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {/* MTN MoMo */}
          <div className="integration-badge mtn" title="MTN Mobile Money API Integration">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MTN MoMo">
              <circle cx="14" cy="14" r="14" fill="#FFCC00" />
              <ellipse cx="14" cy="14" rx="10.5" ry="7.5" fill="#002B49" />
              <text x="14" y="17" fill="#FFCC00" fontFamily="'Baloo 2', 'Nunito', sans-serif" fontWeight="900" fontSize="7.5" textAnchor="middle" letterSpacing="-0.2px">MoMo</text>
            </svg>
            <span>MTN MoMo</span>
          </div>

          {/* Telecel Cash */}
          <div className="integration-badge telecel" title="Telecel Cash Automated Payment Gateway">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Telecel Cash">
              <circle cx="14" cy="14" r="14" fill="#E60000" />
              <path d="M14 7a7 7 0 1 0 7 7h-3.2a3.8 3.8 0 1 1-3.8-3.8V7z" fill="#FFFFFF" />
              <circle cx="14" cy="14" r="2.2" fill="#FFFFFF" />
            </svg>
            <span>Telecel Cash</span>
          </div>

          {/* AT Money */}
          <div className="integration-badge at" title="AT Money (AirtelTigo) Automated Gateway">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AT Money">
              <circle cx="14" cy="14" r="14" fill="#0056B3" />
              <text x="12" y="18.5" fill="#FFFFFF" fontFamily="'Baloo 2', 'Nunito', sans-serif" fontWeight="900" fontSize="13" textAnchor="middle" letterSpacing="-0.5px">at</text>
              <circle cx="19.5" cy="11" r="2" fill="#E30613" />
            </svg>
            <span>AT Money</span>
          </div>

          {/* WhatsApp Business */}
          <div className="integration-badge whatsapp" title="WhatsApp Business Automated Order & Lead Routing">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WhatsApp Business">
              <circle cx="14" cy="14" r="14" fill="#25D366" />
              <path fill="#FFFFFF" d="M14 6C9.6 6 6 9.6 6 14c0 1.5.4 3 1.2 4.2L6 22l3.9-1.2C11.1 21.6 12.5 22 14 22c4.4 0 8-3.6 8-8s-3.6-8-8-8zm4.6 11.2c-.2.5-.9 1-1.3 1-.4 0-.8 0-2.3-.6-1.9-.8-3.2-2.8-3.3-2.9-.1-.1-.8-1.1-.8-2.1s.5-1.5.7-1.7c.2-.2.4-.2.5-.2.1 0 .3 0 .4 0 .1 0 .3 0 .4.4.2.4.6 1.4.6 1.5 0 .1.1.2 0 .4-.1.1-.1.2-.2.3-.1.1-.2.3-.3.4-.1.1-.2.2-.1.4.1.2.5.9 1.1 1.4.8.7 1.4.9 1.6 1 .2.1.3.1.5 0 .1-.1.5-.6.7-.8.1-.2.3-.2.5-.1.2.1 1.2.6 1.4.7.2.1.3.2.4.2 0 .2 0 .6-.2 1.1z"/>
            </svg>
            <span>WhatsApp Business</span>
          </div>
        </div>
      </div>
    </section>
  );
};
