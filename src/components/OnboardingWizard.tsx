import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

interface OnboardingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhone?: string;
  initialBusinessName?: string;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ 
  isOpen, 
  onClose,
  initialPhone = '',
  initialBusinessName = ''
}) => {
  const [step, setStep] = useState<number>(1);

  // Step 1 State
  const [businessName, setBusinessName] = useState<string>(initialBusinessName);
  const [industry, setIndustry] = useState<string>('Fashion & Apparel');
  const [primaryColor, setPrimaryColor] = useState<string>('#f59e0b');

  // Step 2 State
  const [whatsappNumber, setWhatsappNumber] = useState<string>(initialPhone);
  const [momoNetwork, setMomoNetwork] = useState<string>('MTN MoMo');
  const [momoNumber, setMomoNumber] = useState<string>('');
  const [itemTitle, setItemTitle] = useState<string>('Signature Collection Item');
  const [itemPrice, setItemPrice] = useState<string>('150');

  // Step 3 Generation State
  const [generationProgress, setGenerationProgress] = useState<number>(0);
  const [generationStatus, setGenerationStatus] = useState<string>('Initializing WaaS template...');
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  // Colors list
  const colorOptions = [
    { name: 'Luxe Gold', hex: '#f59e0b' },
    { name: 'Cyan Glow', hex: '#00ffff' },
    { name: 'Emerald Green', hex: '#10b981' },
    { name: 'Velvet Burgundy', hex: '#9f1239' },
    { name: 'Royal Blue', hex: '#2563eb' }
  ];

  // Generation Progress Timer when reaching Step 3
  useEffect(() => {
    if (step === 3 && !isGenerated) {
      setGenerationProgress(0);
      setIsGenerated(false);

      const interval = setInterval(() => {
        setGenerationProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsGenerated(true);
            return 100;
          }
          const next = prev + 5;
          if (next < 30) setGenerationStatus('Configuring SSL domain & mobile layout...');
          else if (next < 65) setGenerationStatus(`Wiring ${momoNetwork} payment links...`);
          else if (next < 90) setGenerationStatus('Connecting automated WhatsApp lead engine...');
          else setGenerationStatus('🎉 Website Generated Successfully!');
          return next;
        });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [step, isGenerated, momoNetwork]);

  if (!isOpen) return null;

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      alert('Please enter your business name.');
      return;
    }
    setStep(2);
  };

  const saveFlyerSubmissionToFirestore = async () => {
    try {
      if (db) {
        await addDoc(collection(db, 'onboarding_submissions'), {
          businessName: businessName.trim(),
          industry,
          primaryColor,
          whatsappNumber: whatsappNumber.trim(),
          momoNetwork,
          momoNumber: momoNumber.trim() || whatsappNumber.trim(),
          itemTitle: itemTitle.trim(),
          itemPrice: parseFloat(itemPrice) || 0,
          status: 'pending_claim',
          createdAt: serverTimestamp(),
          url: typeof window !== 'undefined' ? window.location.href : '',
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
        });
        console.log('✅ Merchant flyer lead successfully saved to Firestore (onboarding_submissions).');
      }
    } catch (err) {
      console.warn('Firestore submission notice (running in offline/demo mode):', err);
    }
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappNumber.trim()) {
      alert('Please enter your WhatsApp phone number.');
      return;
    }
    saveFlyerSubmissionToFirestore();
    setStep(3);
  };

  const cleanPhone = encodeURIComponent(whatsappNumber.replace(/\D/g, ''));
  const cleanBusiness = encodeURIComponent(businessName.trim());
  const cleanTitle = encodeURIComponent(itemTitle.trim());
  const cleanPrice = encodeURIComponent(itemPrice.trim());

  const formattedWhatsappLink = `https://wa.me/233${cleanPhone}?text=Hi%20${cleanBusiness}%2C%20I'd%20like%20to%20order%20${cleanTitle}%20(GH%E2%82%B5${cleanPrice}).`;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(9, 11, 16, 0.88)',
      backdropFilter: 'blur(16px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="neon-border" style={{
        background: 'var(--bg-surface)',
        borderRadius: '24px',
        maxWidth: '680px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2.5rem 2rem',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.5rem',
            background: 'rgba(255,255,255,0.08)',
            border: 'none',
            color: 'var(--text-main)',
            fontSize: '1.2rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ✕
        </button>

        {/* Wizard Header Progress */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ 
            background: 'rgba(0, 255, 255, 0.1)', 
            border: '1px solid var(--cyan-glow)', 
            color: 'var(--cyan-glow)',
            padding: '0.35rem 1.2rem',
            borderRadius: '50px',
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase'
          }}>
            INSTANT DIGITAL FLYER BUILDER • STEP {step} OF 3
          </span>

          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1.2rem' }}>
            <div style={{ height: '6px', width: '30%', borderRadius: '4px', background: step >= 1 ? 'var(--cyan-glow)' : 'rgba(255,255,255,0.1)' }}></div>
            <div style={{ height: '6px', width: '30%', borderRadius: '4px', background: step >= 2 ? 'var(--cyan-glow)' : 'rgba(255,255,255,0.1)' }}></div>
            <div style={{ height: '6px', width: '30%', borderRadius: '4px', background: step >= 3 ? 'var(--cyan-glow)' : 'rgba(255,255,255,0.1)' }}></div>
          </div>
        </div>

        {/* STEP 1: Business Identity */}
        {step === 1 && (
          <form onSubmit={handleNextStep1}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Tell Us About Your <span className="neon-text">Business</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.8rem' }}>
              No technical or design skills needed. Fill in 3 simple details.
            </p>

            <div style={{ marginBottom: '1.4rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Business Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g. Ama's Kente Boutique, Accra Stone Crafts..."
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--text-main)',
                  padding: '0.85rem 1.2rem',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '1.4rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Industry Category
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                style={{
                  width: '100%',
                  background: '#10151C',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--text-main)',
                  padding: '0.85rem 1.2rem',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              >
                <option value="Fashion & Apparel">👗 Fashion & Apparel</option>
                <option value="Stone Cladding & Construction">🏛️ Stone Cladding & Construction</option>
                <option value="Food, Spices & Agriculture">🍱 Food, Spices & Agriculture</option>
                <option value="Beauty, Hair & Cosmetics">💄 Beauty, Hair & Cosmetics</option>
                <option value="Artisan Services & Susu">🛠️ Artisan Services & Susu</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.8rem' }}>
                Pick Primary Brand Color
              </label>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {colorOptions.map(c => (
                  <button
                    type="button"
                    key={c.hex}
                    onClick={() => setPrimaryColor(c.hex)}
                    style={{
                      background: c.hex,
                      border: primaryColor === c.hex ? '3px solid #ffffff' : '1px solid transparent',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      boxShadow: primaryColor === c.hex ? `0 0 15px ${c.hex}` : 'none',
                      transition: 'transform 0.2s'
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <button 
              type="submit"
              className="neon-btn neon-border"
              style={{
                width: '100%',
                padding: '0.95rem',
                fontSize: '1rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Continue to Step 2 ➔
            </button>
          </form>
        )}

        {/* STEP 2: WhatsApp & MoMo Lead Engine */}
        {step === 2 && (
          <form onSubmit={handleNextStep2}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Connect <span className="neon-text">WhatsApp & MoMo</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.8rem' }}>
              Where should customer orders and Mobile Money payments be routed?
            </p>

            <div style={{ marginBottom: '1.4rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                WhatsApp Business Phone Number <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g. 024 123 4567 or 054 000 1122"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--text-main)',
                  padding: '0.85rem 1.2rem',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', marginBottom: '1.4rem' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  MoMo Network
                </label>
                <select
                  value={momoNetwork}
                  onChange={(e) => setMomoNetwork(e.target.value)}
                  style={{
                    width: '100%',
                    background: '#10151C',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'var(--text-main)',
                    padding: '0.85rem 0.8rem',
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                >
                  <option value="MTN MoMo">MTN MoMo</option>
                  <option value="Telecel Cash">Telecel Cash</option>
                  <option value="AT Money">AT Money</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  MoMo Payment Phone Number
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 054 000 1122"
                  value={momoNumber}
                  onChange={(e) => setMomoNumber(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'var(--text-main)',
                    padding: '0.85rem 1.2rem',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Sample Item / Service Name
                </label>
                <input 
                  type="text" 
                  value={itemTitle}
                  onChange={(e) => setItemTitle(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'var(--text-main)',
                    padding: '0.85rem 1.2rem',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Price (GH₵)
                </label>
                <input 
                  type="number" 
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'var(--text-main)',
                    padding: '0.85rem 1.2rem',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                type="button"
                onClick={() => setStep(1)}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  color: 'var(--text-main)',
                  border: 'none',
                  padding: '0.95rem 1.5rem',
                  borderRadius: '100px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                ◀ Back
              </button>

              <button 
                type="submit"
                className="neon-btn neon-border"
                style={{
                  flexGrow: 1,
                  padding: '0.95rem',
                  fontSize: '1rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                Generate Website in 30 Seconds ⚡
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Instant Generation & Live Preview */}
        {step === 3 && (
          <div>
            {!isGenerated ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem', animation: 'spin 2s linear infinite' }}>⚡</div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.8rem' }}>
                  Generating <span className="neon-text">{businessName}</span>
                </h2>
                <p style={{ color: 'var(--cyan-glow)', fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                  {generationStatus}
                </p>

                <div style={{ background: 'rgba(255,255,255,0.08)', height: '12px', borderRadius: '10px', overflow: 'hidden', maxWidth: '450px', margin: '0 auto 1rem' }}>
                  <div style={{
                    width: `${generationProgress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--cyan-glow), var(--gold-accent))',
                    transition: 'width 0.2s ease'
                  }} />
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{generationProgress}% Completed</span>
              </div>
            ) : (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ background: '#10b981', color: '#000', padding: '0.3rem 1rem', borderRadius: '20px', fontWeight: 800, fontSize: '0.8rem' }}>
                    🎉 WEBSITE GENERATED SUCCESSFULLY!
                  </span>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginTop: '0.8rem', color: '#fff' }}>
                    {businessName}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Mobile-optimized starter website ready for instant WhatsApp lead routing.
                  </p>
                </div>

                {/* Simulated Generated Mobile Phone Mockup */}
                <div style={{
                  border: `2px solid ${primaryColor}`,
                  borderRadius: '20px',
                  background: '#0d1117',
                  padding: '1.5rem',
                  maxWidth: '380px',
                  margin: '0 auto 2rem',
                  boxShadow: `0 10px 30px ${primaryColor}33`,
                  textAlign: 'center'
                }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: primaryColor, textTransform: 'uppercase' }}>
                      {businessName}
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>
                      {industry}
                    </span>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '1rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{itemTitle}</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: primaryColor, margin: '0.4rem 0' }}>
                      GH₵ {itemPrice}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#ffcc00' }}>
                      ⚡ Pay via {momoNetwork} ({momoNumber || whatsappNumber})
                    </div>
                  </div>

                  <a
                    href={formattedWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#25d366',
                      color: '#000',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.75rem 1.4rem',
                      borderRadius: '50px',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      boxShadow: '0 4px 15px rgba(37,211,102,0.4)'
                    }}
                  >
                    <span>💬 Order via WhatsApp</span>
                  </a>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I%20just%20generated%20a%20starter%20website%20for%20"${encodeURIComponent(businessName)}"%20and%20I'd%20like%20to%20claim%20it.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn neon-border"
                    style={{ textDecoration: 'none', padding: '0.85rem 1.8rem', fontSize: '0.9rem', fontWeight: 800 }}
                  >
                    🚀 Claim My Website on Kone Digital
                  </a>

                  <button
                    onClick={() => setStep(1)}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      color: 'var(--text-main)',
                      border: 'none',
                      padding: '0.85rem 1.5rem',
                      borderRadius: '100px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    🔄 Create Another Flyer
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
