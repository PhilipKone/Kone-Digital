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
        <span className="badge-pill" style={{ 
          background: 'rgba(0, 255, 255, 0.1)', 
          border: '1px solid var(--cyan-glow)', 
          color: 'var(--cyan-glow)',
          padding: '0.35rem 1rem',
          borderRadius: '50px',
          fontSize: '0.72rem',
          fontWeight: 750,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          display: 'inline-block',
          maxWidth: '90%'
        }}>
          ENTERPRISE ARCHITECTURE • ZERO MAINTENANCE
        </span>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginTop: '0.8rem', fontWeight: 800 }}>
          Engineered for <span className="neon-text">Real Business Growth</span>
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

      {/* Integration Partner Logos */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '2rem', 
        flexWrap: 'wrap', 
        marginTop: '3rem',
        opacity: 0.9 
      }}>
        <div style={{ color: 'var(--text-subtle)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
          INTEGRATIONS:
        </div>
        <span style={{ color: '#ffcc00', fontWeight: 700, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffcc00' }} />
          MTN Mobile Money
        </span>
        <span style={{ color: '#e60000', fontWeight: 700, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e60000' }} />
          Telecel Cash
        </span>
        <span style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }} />
          AT Money
        </span>
        <span style={{ color: '#10b981', fontWeight: 700, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
          WhatsApp Business
        </span>
      </div>
    </section>
  );
};
