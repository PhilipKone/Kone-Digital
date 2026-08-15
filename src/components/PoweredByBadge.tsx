import React from 'react';

interface PoweredByBadgeProps {
  onOpenWizard: () => void;
}

export const PoweredByBadge: React.FC<PoweredByBadgeProps> = ({ onOpenWizard }) => {
  return (
    <div
      className="powered-by-badge"
      onClick={onOpenWizard}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        background: 'rgba(9, 11, 16, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0, 255, 255, 0.3)',
        borderRadius: '50px',
        padding: '0.45rem 1.1rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.55rem',
        zIndex: 999,
        cursor: 'pointer',
        boxShadow: '0 8px 25px rgba(0,0,0,0.6), 0 0 12px rgba(0,255,255,0.15)',
        transition: 'all 0.3s ease'
      }}
      title="Powered by Kone Digital WaaS - Build your business website in 30s"
    >
      <span style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'var(--cyan-glow)',
        boxShadow: '0 0 8px var(--cyan-glow)'
      }} />
      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
        Powered by <strong style={{ color: '#fff' }}>Kone Digital</strong>
      </span>
      <span style={{
        background: 'rgba(0, 255, 255, 0.1)',
        color: 'var(--cyan-glow)',
        fontSize: '0.68rem',
        fontWeight: 700,
        padding: '0.15rem 0.5rem',
        borderRadius: '20px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        Build in 30s
      </span>
    </div>
  );
};
