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
        background: 'rgba(13, 18, 29, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '50px',
        padding: '0.45rem 1.1rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.55rem',
        zIndex: 999,
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      title="Powered by Kone Digital WaaS - Build your business website in 30s"
    >
      <span style={{
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        background: '#10B981',
        boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)'
      }} />
      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
        Powered by <strong style={{ color: '#F8FAFC' }}>Kone Digital</strong>
      </span>
      <span style={{
        background: 'rgba(255, 255, 255, 0.08)',
        color: '#F8FAFC',
        border: '1px solid rgba(255, 255, 255, 0.12)',
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
