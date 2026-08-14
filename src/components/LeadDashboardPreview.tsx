import React from 'react';

export const LeadDashboardPreview: React.FC = () => {
  const sampleLeads = [
    {
      id: 1,
      time: '10:42 AM',
      name: 'Kwame A.',
      location: 'Accra, Greater Accra',
      action: 'Ordered: Kente Palazzo Pant',
      amount: 'GH₵ 220',
      status: 'WhatsApp Dispatched'
    },
    {
      id: 2,
      time: '09:15 AM',
      name: 'Sarah O.',
      location: 'Kumasi, Ashanti Region',
      action: 'MoMo Payment Prompt',
      amount: 'GH₵ 450',
      status: 'Paid via MTN MoMo'
    },
    {
      id: 3,
      time: 'Yesterday',
      name: 'David Mensah',
      location: 'Takoradi, Western Region',
      action: 'Requested Stone Cladding Quote',
      amount: 'GH₵ 1,800',
      status: 'Follow Up Sent'
    }
  ];

  return (
    <section className="crm-preview-section" id="crm" style={{ padding: '4rem 1rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid #10b981',
          color: '#10b981',
          padding: '0.35rem 1.2rem',
          borderRadius: '50px',
          fontSize: '0.78rem',
          fontWeight: 800,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          display: 'inline-block',
          marginBottom: '1rem'
        }}>
          📲 DAILY RETENTION ENGINE • WHATSAPP LEAD CRM
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900 }}>
          Every Order & Lead <span style={{ color: '#10b981' }}>Tracked in Real-Time</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
          Never lose a customer order. Our unified merchant dashboard logs every customer interaction with automated daily morning WhatsApp digests.
        </p>
      </div>

      {/* CRM Dashboard Frame Mockup */}
      <div className="neon-border" style={{
        background: '#0d1117',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
      }}>
        {/* Top KPI Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.2rem' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700 }}>TODAY'S WHATSAPP LEADS</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#10b981', marginTop: '0.3rem' }}>14 Leads</div>
            <span style={{ fontSize: '0.72rem', color: '#10b981' }}>↑ +35% vs yesterday</span>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.2rem' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700 }}>MOMO REVENUE PIPELINE</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--gold-accent)', marginTop: '0.3rem' }}>GH₵ 4,850</div>
            <span style={{ fontSize: '0.72rem', color: 'var(--gold-accent)' }}>⚡ Instant settlement</span>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.2rem' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700 }}>MORNING DIGEST STATUS</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--cyan-glow)', marginTop: '0.3rem' }}>Active 🌅</div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Delivered daily at 8:00 AM</span>
          </div>
        </div>

        {/* Live Leads Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                <th style={{ padding: '0.75rem 1rem' }}>TIME</th>
                <th style={{ padding: '0.75rem 1rem' }}>CUSTOMER & LOCATION</th>
                <th style={{ padding: '0.75rem 1rem' }}>ITEM / ACTION</th>
                <th style={{ padding: '0.75rem 1rem' }}>VALUE</th>
                <th style={{ padding: '0.75rem 1rem' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {sampleLeads.map((lead) => (
                <tr key={lead.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{lead.time}</td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#fff' }}>
                    {lead.name}
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>{lead.location}</div>
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--text-main)' }}>{lead.action}</td>
                  <td style={{ padding: '1rem', fontWeight: 800, color: 'var(--gold-accent)' }}>{lead.amount}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      background: lead.status.includes('Paid') ? 'rgba(16,185,129,0.15)' : 'rgba(0,255,255,0.15)',
                      color: lead.status.includes('Paid') ? '#10b981' : 'var(--cyan-glow)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
