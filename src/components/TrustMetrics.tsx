import React, { useState, useEffect } from 'react';

export const TrustMetrics: React.FC = () => {
  const [websitesCount, setWebsitesCount] = useState(0);
  const [momoProcessed, setMomoProcessed] = useState(0);
  const [leadsGenerated, setLeadsGenerated] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      setWebsitesCount(Math.floor(progress * 50));
      setMomoProcessed(Math.floor(progress * 1200000));
      setLeadsGenerated(Math.floor(progress * 25000));

      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="trust-metrics-section" style={{ padding: '3rem 0', margin: '2rem 0' }}>
      <div className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="badge-pill" style={{ 
          background: 'rgba(0, 255, 255, 0.1)', 
          border: '1px solid var(--cyan-glow)', 
          color: 'var(--cyan-glow)',
          padding: '0.4rem 1.2rem',
          borderRadius: '50px',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '1.5px',
          textTransform: 'uppercase'
        }}>
          TRUSTED ACROSS GHANA & WEST AFRICA
        </span>
        <h2 style={{ fontSize: '2.2rem', marginTop: '1rem', fontWeight: 800 }}>
          Engineered for <span className="neon-text">Real Business Growth</span>
        </h2>
      </div>

      <div className="metrics-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div className="metric-card neon-border" style={{ 
          background: 'var(--bg-surface)', 
          padding: '2rem 1.5rem', 
          borderRadius: '16px', 
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--cyan-glow)' }}>
            {websitesCount}+
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 600, marginTop: '0.4rem' }}>
            High-Performance Websites Built
          </p>
        </div>

        <div className="metric-card neon-border" style={{ 
          background: 'var(--bg-surface)', 
          padding: '2rem 1.5rem', 
          borderRadius: '16px', 
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--gold-accent)' }}>
            GH₵ {(momoProcessed / 1000000).toFixed(1)}M+
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 600, marginTop: '0.4rem' }}>
            MoMo Payments Processed
          </p>
        </div>

        <div className="metric-card neon-border" style={{ 
          background: 'var(--bg-surface)', 
          padding: '2rem 1.5rem', 
          borderRadius: '16px', 
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#10b981' }}>
            {(leadsGenerated).toLocaleString()}+
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 600, marginTop: '0.4rem' }}>
            WhatsApp Leads Generated
          </p>
        </div>

        <div className="metric-card neon-border" style={{ 
          background: 'var(--bg-surface)', 
          padding: '2rem 1.5rem', 
          borderRadius: '16px', 
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--cyan-glow)' }}>
            99.9%
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 600, marginTop: '0.4rem' }}>
            Guaranteed Uptime & Instant Load
          </p>
        </div>
      </div>

      {/* Integration Partner Logos */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '2.5rem', 
        flexWrap: 'wrap', 
        marginTop: '3rem',
        opacity: 0.85 
      }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
          INTEGRATION PARTNERS:
        </div>
        <span style={{ color: '#ffcc00', fontWeight: 800, fontSize: '0.95rem' }}>⚡ MTN Mobile Money</span>
        <span style={{ color: '#e60000', fontWeight: 800, fontSize: '0.95rem' }}>📱 Telecel Cash</span>
        <span style={{ color: '#0055ff', fontWeight: 800, fontSize: '0.95rem' }}>🔴 AT Money</span>
        <span style={{ color: '#25d366', fontWeight: 800, fontSize: '0.95rem' }}>💬 WhatsApp Business API</span>
      </div>
    </section>
  );
};
