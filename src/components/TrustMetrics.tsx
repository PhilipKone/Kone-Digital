import React from 'react';
import momoIcon from '../assets/integrations/momo.png';
import telecelIcon from '../assets/integrations/telecel.png';
import atIcon from '../assets/integrations/at_money.png';
import whatsappIcon from '../assets/integrations/whatsapp_business.png';

interface GatewayItem {
  id: string;
  name: string;
  icon: string;
  className: string;
  title: string;
  imgStyle: React.CSSProperties;
}

const GATEWAYS: GatewayItem[] = [
  {
    id: 'mtn',
    name: 'MTN MoMo',
    icon: momoIcon,
    className: 'mtn',
    title: 'MTN Mobile Money (MoMo) API Integration',
    imgStyle: { borderRadius: '6px' }
  },
  {
    id: 'telecel',
    name: 'Telecel Cash',
    icon: telecelIcon,
    className: 'telecel',
    title: 'Telecel Cash Automated Payment Gateway',
    imgStyle: { borderRadius: '50%' }
  },
  {
    id: 'at',
    name: 'AT Money',
    icon: atIcon,
    className: 'at',
    title: 'AT Money (AirtelTigo) Automated Gateway',
    imgStyle: { borderRadius: '50%' }
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    icon: whatsappIcon,
    className: 'whatsapp',
    title: 'WhatsApp Business Automated Order & Lead Routing',
    imgStyle: { borderRadius: '6px' }
  }

];

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

      {/* Integration Partner Logos with Authentic Brand Marks - Continuous Apple / Stripe Glide */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        gap: '1.2rem', 
        marginTop: '3.5rem',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden'
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

        {/* Apple & Stripe Standard Horizontal Gliding Marquee */}
        <div 
          className="gateway-marquee-wrapper" 
          aria-label="Supported Payment and Lead Gateways marquee"
        >
          {/* Track 1 */}
          <div className="gateway-marquee-track">
            {[...GATEWAYS, ...GATEWAYS].map((gw, idx) => (
              <div 
                key={`gw-t1-${gw.id}-${idx}`} 
                className={`integration-badge ${gw.className}`} 
                title={gw.title}
              >
                <img src={gw.icon} alt={gw.name} style={gw.imgStyle} />
                <span>{gw.name}</span>
              </div>
            ))}
          </div>

          {/* Track 2 (Seamless Mirror for Infinite Loop) */}
          <div className="gateway-marquee-track" aria-hidden="true">
            {[...GATEWAYS, ...GATEWAYS].map((gw, idx) => (
              <div 
                key={`gw-t2-${gw.id}-${idx}`} 
                className={`integration-badge ${gw.className}`} 
                title={gw.title}
              >
                <img src={gw.icon} alt={gw.name} style={gw.imgStyle} />
                <span>{gw.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
