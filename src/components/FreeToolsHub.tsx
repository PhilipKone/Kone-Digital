import React, { useState } from 'react';

interface FreeToolsHubProps {
  onOpenWizard: (prefillData?: { phone?: string; businessName?: string }) => void;
}

export const FreeToolsHub: React.FC<FreeToolsHubProps> = ({ onOpenWizard }) => {
  const [activeTool, setActiveTool] = useState<'whatsapp' | 'invoice' | 'speed'>('whatsapp');

  // WhatsApp Tool State
  const [waPhone, setWaPhone] = useState<string>('0241234567');
  const [waMessage, setWaMessage] = useState<string>("Hi! I'd like to place an order from your website catalog.");
  const [waCopied, setWaCopied] = useState<boolean>(false);

  // Invoice Tool State
  const [invBusiness, setInvBusiness] = useState<string>('Accra Modern Boutique');
  const [invClient, setInvClient] = useState<string>('Kwame Mensah');
  const [invItem, setInvItem] = useState<string>('Handmade Kente Blazer');
  const [invAmount, setInvAmount] = useState<string>('450');
  const [invMomo, setInvMomo] = useState<string>('MTN MoMo: 0540001122');

  // Speed Audit Tool State
  const [auditUrl, setAuditUrl] = useState<string>('myoldwebsite.com');
  const [isAuditing, setIsAuditing] = useState<boolean>(false);
  const [auditResult, setAuditResult] = useState<boolean>(false);

  // Computed WhatsApp link
  const cleanPhone = waPhone.replace(/\D/g, '');
  const generatedWaLink = `https://wa.me/233${cleanPhone}?text=${encodeURIComponent(waMessage)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generatedWaLink);
    setWaCopied(true);
    setTimeout(() => setWaCopied(false), 2000);
  };

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuditing(true);
    setAuditResult(false);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditResult(true);
    }, 1800);
  };

  return (
    <section className="free-tools-section" id="tools" style={{ padding: '4rem 1rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{
          background: 'rgba(0, 255, 255, 0.08)',
          border: '1px solid var(--border-cyan)',
          color: 'var(--cyan-glow)',
          padding: '0.35rem 1.2rem',
          borderRadius: '50px',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          display: 'inline-block',
          marginBottom: '1rem'
        }}>
          FREE UTILITY TOOLS
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900 }}>
          Digital Commerce Tools for <span className="neon-text">African Merchants</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
          Free standalone utilities to streamline your WhatsApp customer communications and Mobile Money payment records.
        </p>

        {/* Tool Selector Tabs */}
        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <button
            onClick={() => setActiveTool('whatsapp')}
            style={{
              background: activeTool === 'whatsapp' ? 'rgba(255, 255, 255, 0.12)' : 'var(--bg-surface)',
              color: activeTool === 'whatsapp' ? '#fff' : 'var(--text-muted)',
              border: '1px solid ' + (activeTool === 'whatsapp' ? 'rgba(255, 255, 255, 0.25)' : 'var(--border-subtle)'),
              padding: '0.6rem 1.4rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            WhatsApp Link Maker
          </button>

          <button
            onClick={() => setActiveTool('invoice')}
            style={{
              background: activeTool === 'invoice' ? 'rgba(255, 255, 255, 0.12)' : 'var(--bg-surface)',
              color: activeTool === 'invoice' ? '#fff' : 'var(--text-muted)',
              border: '1px solid ' + (activeTool === 'invoice' ? 'rgba(255, 255, 255, 0.25)' : 'var(--border-subtle)'),
              padding: '0.6rem 1.4rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            MoMo Invoice Generator
          </button>

          <button
            onClick={() => setActiveTool('speed')}
            style={{
              background: activeTool === 'speed' ? 'rgba(255, 255, 255, 0.12)' : 'var(--bg-surface)',
              color: activeTool === 'speed' ? '#fff' : 'var(--text-muted)',
              border: '1px solid ' + (activeTool === 'speed' ? 'rgba(255, 255, 255, 0.25)' : 'var(--border-subtle)'),
              padding: '0.6rem 1.4rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Mobile Speed Auditor
          </button>
        </div>
      </div>

      {/* Tool Container Stage */}
      <div className="neon-border" style={{
        background: 'var(--bg-surface)',
        borderRadius: '20px',
        padding: 'clamp(1.4rem, 3vw, 2.5rem) clamp(1rem, 2.5vw, 2rem)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        minHeight: '400px'
      }}>
        {/* TOOL 1: WhatsApp Link & QR Generator */}
        {activeTool === 'whatsapp' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 800, marginBottom: '0.5rem' }}>
                WhatsApp Order Link Maker
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Generate instant click-to-chat links with custom greetings for your Instagram bio, TikTok, or posters.
              </p>

              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="wa-phone-input" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  WhatsApp Phone Number (Ghana)
                </label>
                <input
                  id="wa-phone-input"
                  aria-label="WhatsApp Phone Number"
                  type="text"
                  value={waPhone}
                  onChange={(e) => setWaPhone(e.target.value)}
                  placeholder="e.g. 0241234567"
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#fff',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="wa-message-textarea" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Pre-filled Greeting / Order Message
                </label>
                <textarea
                  id="wa-message-textarea"
                  aria-label="Pre-filled Greeting or Order Message"
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  rows={3}
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#fff',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleCopyLink}
                  style={{
                    background: waCopied ? '#10b981' : '#25d366',
                    color: '#07090E',
                    border: 'none',
                    padding: '0.65rem 1.4rem',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  {waCopied ? 'Link Copied to Clipboard' : 'Copy WhatsApp Link'}
                </button>
                <button
                  onClick={() => {
                    const clean = waPhone.replace(/\D/g, '');
                    window.open(`https://wa.me/233${clean}?text=${encodeURIComponent(waMessage)}`, '_blank', 'noopener,noreferrer');
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'var(--text-main)',
                    padding: '0.65rem 1.4rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  Test Link ➔
                </button>
              </div>
            </div>

            {/* Preview Box & PLG Upsell Hook */}
            <div style={{
              background: 'rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '1.5rem 1.2rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '1px', marginBottom: '0.8rem' }}>
                YOUR GENERATED WHATSAPP URL
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                padding: '0.8rem',
                borderRadius: '8px',
                wordBreak: 'break-all',
                fontFamily: 'monospace',
                fontSize: '0.82rem',
                color: '#25d366',
                marginBottom: '1.5rem'
              }}>
                {generatedWaLink}
              </div>

              {/* High-Converting PLG Hook */}
              <div style={{
                background: 'rgba(0, 255, 255, 0.05)',
                border: '1px solid rgba(0, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '1.2rem',
                marginTop: '1rem'
              }}>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
                  Need a Full Website Instead of Just a Link?
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                  Turn this WhatsApp number into a high-converting digital storefront with automated MoMo checkout in 30 seconds.
                </p>
                <button
                  onClick={() => onOpenWizard({ phone: waPhone })}
                  className="neon-btn"
                  style={{
                    padding: '0.65rem 1.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    background: 'var(--cyan-glow)',
                    color: '#07090E',
                    width: '100%'
                  }}
                >
                  Generate Storefront ➔
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 2: Ghana MoMo Invoice Generator */}
        {activeTool === 'invoice' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 800, marginBottom: '0.5rem' }}>
                MoMo Business Invoice Generator
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Generate clean, shareable digital receipts for clients with embedded Mobile Money payment prompts.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.8rem', marginBottom: '1rem' }}>
                <div>
                  <label htmlFor="inv-biz-input" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-main)' }}>Your Business</label>
                  <input
                    id="inv-biz-input"
                    aria-label="Your Business Name"
                    type="text"
                    value={invBusiness}
                    onChange={(e) => setInvBusiness(e.target.value)}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem', borderRadius: '6px', fontSize: '0.88rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="inv-client-input" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-main)' }}>Customer Name</label>
                  <input
                    id="inv-client-input"
                    aria-label="Customer Name"
                    type="text"
                    value={invClient}
                    onChange={(e) => setInvClient(e.target.value)}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem', borderRadius: '6px', fontSize: '0.88rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.8rem', marginBottom: '1rem' }}>
                <div>
                  <label htmlFor="inv-item-input" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-main)' }}>Item / Service</label>
                  <input
                    id="inv-item-input"
                    aria-label="Item or Service"
                    type="text"
                    value={invItem}
                    onChange={(e) => setInvItem(e.target.value)}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem', borderRadius: '6px', fontSize: '0.88rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="inv-amount-input" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-main)' }}>Amount (GH₵)</label>
                  <input
                    id="inv-amount-input"
                    aria-label="Amount in Ghana Cedis"
                    type="number"
                    value={invAmount}
                    onChange={(e) => setInvAmount(e.target.value)}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem', borderRadius: '6px', fontSize: '0.88rem' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="inv-momo-input" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-main)' }}>MoMo Payment Prompt</label>
                <input
                  id="inv-momo-input"
                  aria-label="Mobile Money Payment Instructions"
                  type="text"
                  value={invMomo}
                  onChange={(e) => setInvMomo(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem', borderRadius: '6px', fontSize: '0.88rem' }}
                />
              </div>

              <button
                onClick={() => window.print()}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Print / Save as PDF
              </button>
            </div>

            {/* Clean Invoice Card */}
            <div style={{
              background: '#ffffff',
              color: '#111827',
              borderRadius: '12px',
              padding: '1.8rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #e5e7eb', paddingBottom: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#111827' }}>{invBusiness}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>OFFICIAL INVOICE / RECEIPT</span>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.78rem', color: '#6b7280' }}>
                    DATE: {new Date().toLocaleDateString()}
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', marginBottom: '1.2rem' }}>
                  <strong>Billed To:</strong> {invClient}
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
                  <thead>
                    <tr style={{ background: '#f3f4f6', textAlign: 'left' }}>
                      <th style={{ padding: '0.4rem 0.6rem' }}>Description</th>
                      <th style={{ padding: '0.4rem 0.6rem', textAlign: 'right' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '0.6rem' }}>{invItem}</td>
                      <td style={{ padding: '0.6rem', textAlign: 'right', fontWeight: 700 }}>GH₵ {invAmount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ background: '#fef3c7', padding: '0.8rem', borderRadius: '8px', border: '1px dashed #d97706', fontSize: '0.82rem', textAlign: 'center' }}>
                <span style={{ fontWeight: 800, color: '#92400e' }}>Payment Instructions:</span>
                <div style={{ color: '#78350f', marginTop: '0.2rem' }}>{invMomo}</div>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 3: Speed & Mobile Readiness Auditor */}
        {activeTool === 'speed' && (
          <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 800, marginBottom: '0.5rem' }}>
              African Mobile Speed Auditor
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '2rem' }}>
              Test your existing website’s load speed across MTN & Telecel 3G/4G networks in Ghana.
            </p>

            <form onSubmit={handleRunAudit} style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <input
                id="speed-audit-url"
                aria-label="Website domain or URL to audit"
                type="text"
                value={auditUrl}
                onChange={(e) => setAuditUrl(e.target.value)}
                placeholder="e.g. yourbusiness.com"
                style={{
                  flexGrow: 1,
                  minWidth: '240px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#fff',
                  padding: '0.75rem 1.2rem',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
                required
              />
              <button
                type="submit"
                className="neon-btn"
                style={{
                  padding: '0.75rem 1.8rem',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  background: 'var(--cyan-glow)',
                  color: '#07090E'
                }}
                disabled={isAuditing}
              >
                {isAuditing ? 'Testing Speed...' : 'Audit Speed ➔'}
              </button>
            </form>

            {/* Audit Results Card */}
            {auditResult && (
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.5px' }}>SPEED BOTTLENECK DETECTED</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Host: {auditUrl}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: 'rgba(239,68,68,0.1)', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ef4444' }}>Heavy</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Legacy CMS Plugin Overhead</div>
                  </div>
                  <div style={{ background: 'rgba(255,204,0,0.1)', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffcc00' }}>3G / 4G</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mobile Network Latency</div>
                  </div>
                  <div style={{ background: 'rgba(16,185,129,0.1)', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#10b981' }}>Sub-1s</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Kone Digital Target TTFB</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    onClick={() => onOpenWizard({ businessName: auditUrl.replace(/\..+/, '') })}
                    className="neon-btn"
                    style={{
                      padding: '0.85rem 2rem',
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      background: 'var(--cyan-glow)',
                      color: '#07090E',
                      cursor: 'pointer'
                    }}
                  >
                    Migrate to Managed WaaS ➔
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
