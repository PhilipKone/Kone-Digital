import React from 'react';
import momoIcon from '../assets/integrations/momo.png';
import telecelIcon from '../assets/integrations/telecel.png';
import atIcon from '../assets/integrations/at_money.png';
import whatsappIcon from '../assets/integrations/whatsapp.svg';

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
          <div className="integration-badge mtn" title="MTN Mobile Money (MoMo) API Integration">
            <img src={momoIcon} alt="MTN MoMo" style={{ borderRadius: '6px' }} />
            <span>MTN MoMo</span>
          </div>

          {/* Telecel Cash */}
          <div className="integration-badge telecel" title="Telecel Cash Automated Payment Gateway">
            <img src={telecelIcon} alt="Telecel Cash" style={{ borderRadius: '50%' }} />
            <span>Telecel Cash</span>
          </div>

          {/* AT Money */}
          <div className="integration-badge at" title="AT Money (AirtelTigo) Automated Gateway">
            <img src={atIcon} alt="AT Money" style={{ borderRadius: '50%' }} />
            <span>AT Money</span>
          </div>

          {/* WhatsApp Business */}
          <div className="integration-badge whatsapp" title="WhatsApp Business Automated Order & Lead Routing">
            <img src={whatsappIcon} alt="WhatsApp Business" />
            <span>WhatsApp Business</span>
          </div>
        </div>
      </div>
    </section>
  );
};
