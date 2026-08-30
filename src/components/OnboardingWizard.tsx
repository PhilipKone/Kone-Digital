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
  const [industry, setIndustry] = useState<string>('Custom Web & SaaS Application');
  const [primaryColor, setPrimaryColor] = useState<string>('#00F0FF');

  // Step 2 State
  const [whatsappNumber, setWhatsappNumber] = useState<string>(initialPhone);
  const [selectedPlan, setSelectedPlan] = useState<string>('Professional WaaS (GH₵ 999/mo)');
  const [projectRequirement, setProjectRequirement] = useState<string>('High-speed platform with MoMo checkout and automated WhatsApp lead engine');

  // Step 3 Generation State
  const [generationProgress, setGenerationProgress] = useState<number>(0);
  const [generationStatus, setGenerationStatus] = useState<string>('Analyzing architectural requirements...');
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  // Brand Accent Colors
  const colorOptions = [
    { name: 'Cyan Glow', hex: '#00F0FF' },
    { name: 'Luxe Gold', hex: '#E5C07B' },
    { name: 'Emerald Green', hex: '#10B981' },
    { name: 'Royal Blue', hex: '#3B82F6' },
    { name: 'Velvet Rose', hex: '#F43F5E' }
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
          if (next < 30) setGenerationStatus('Synthesizing technical scope & deliverable roadmap...');
          else if (next < 65) setGenerationStatus(`Mapping ${selectedPlan.split('(')[0].trim()} SLA stack...`);
          else if (next < 90) setGenerationStatus('Connecting direct WhatsApp consultation gateway...');
          else setGenerationStatus('Proposal Blueprint Generated Successfully');
          return next;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [step, isGenerated, selectedPlan]);

  if (!isOpen) return null;

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      alert('Please enter your business or project name.');
      return;
    }
    setStep(2);
  };

  const saveSubmissionToFirestore = async () => {
    try {
      if (db) {
        await addDoc(collection(db, 'onboarding_submissions'), {
          businessName: businessName.trim(),
          serviceArea: industry,
          primaryColor,
          whatsappNumber: whatsappNumber.trim(),
          selectedPlan,
          projectRequirement: projectRequirement.trim(),
          status: 'pending_consultation',
          createdAt: serverTimestamp(),
          url: typeof window !== 'undefined' ? window.location.href : '',
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
        });
        console.log('✅ Lead project brief successfully saved to Firestore.');
      }
    } catch (err) {
      console.warn('Firestore submission notice (demo mode):', err);
    }
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappNumber.trim()) {
      alert('Please enter your WhatsApp contact number.');
      return;
    }
    saveSubmissionToFirestore();
    setStep(3);
  };

  const cleanBusiness = encodeURIComponent(businessName.trim());
  const cleanIndustry = encodeURIComponent(industry.trim());
  const cleanPlan = encodeURIComponent(selectedPlan.trim());
  const cleanReq = encodeURIComponent(projectRequirement.trim());

  const directConsultationWhatsappUrl = `https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20start%20a%20project%20for%20"${cleanBusiness}".%0A%0A•%20Service%3A%20${cleanIndustry}%0A•%20Preferred%20Tier%3A%20${cleanPlan}%0A•%20Requirement%3A%20${cleanReq}%0A•%20My%20Phone%3A%20${encodeURIComponent(whatsappNumber.trim())}`;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(9, 11, 16, 0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: 'rgba(13, 18, 29, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        maxWidth: '640px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: 'clamp(1.6rem, 4vw, 2.5rem) clamp(1.2rem, 3vw, 2rem)',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        boxSizing: 'border-box'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
            fontSize: '1rem',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
        >
          ✕
        </button>

        {/* Wizard Header Progress */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', paddingRight: '2rem', paddingLeft: '2rem' }}>
          <span style={{ 
            background: 'rgba(0, 240, 255, 0.08)', 
            border: '1px solid rgba(0, 240, 255, 0.25)', 
            color: '#00F0FF',
            padding: '0.35rem 1rem',
            borderRadius: '50px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'inline-block',
            lineHeight: 1.4
          }}>
            PROJECT BRIEF • STEP {step} OF 3
          </span>

          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1.2rem' }}>
            <div style={{ height: '5px', width: '30%', borderRadius: '4px', background: step >= 1 ? '#00F0FF' : 'rgba(255, 255, 255, 0.1)', transition: 'all 0.3s ease' }}></div>
            <div style={{ height: '5px', width: '30%', borderRadius: '4px', background: step >= 2 ? '#00F0FF' : 'rgba(255, 255, 255, 0.1)', transition: 'all 0.3s ease' }}></div>
            <div style={{ height: '5px', width: '30%', borderRadius: '4px', background: step >= 3 ? '#00F0FF' : 'rgba(255, 255, 255, 0.1)', transition: 'all 0.3s ease' }}></div>
          </div>
        </div>

        {/* STEP 1: Project Identity */}
        {step === 1 && (
          <form onSubmit={handleNextStep1}>
            <h2 className="heading-luminance" style={{ fontSize: '1.6rem', fontWeight: 850, marginBottom: '0.4rem', letterSpacing: '-0.02em', textAlign: 'center' }}>
              Tell Us About Your <span className="cyan-luminance">Project</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.8rem', textAlign: 'center' }}>
              Fast-track your development roadmap with high-performance Ghanaian engineering.
            </p>

            <div style={{ marginBottom: '1.4rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Business or Organization Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g. Sedemson Group, Ama's Luxury, Apex Logistics..."
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
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '1.4rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Primary Specialization Needed
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
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <option value="Custom Web & SaaS Application">Custom Web & SaaS Application</option>
                <option value="iOS & Android Mobile App Development">iOS & Android Mobile App Development</option>
                <option value="Brand Identity & UI/UX Design System">Brand Identity & UI/UX Design System</option>
                <option value="Cloud Infrastructure & DevOps Automation">Cloud Infrastructure & DevOps Automation</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.8rem' }}>
                Brand Accent Palette
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
                      width: '40px',
                      height: '40px',
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
              className="btn-primary"
              style={{
                width: '100%',
                padding: '0.85rem',
                fontSize: '0.95rem'
              }}
            >
              <span>Continue to Project Scope</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        )}

        {/* STEP 2: Project Scope & Budget */}
        {step === 2 && (
          <form onSubmit={handleNextStep2}>
            <h2 className="heading-luminance" style={{ fontSize: '1.6rem', fontWeight: 850, marginBottom: '0.4rem', letterSpacing: '-0.02em', textAlign: 'center' }}>
              Project Scope & <span className="cyan-luminance">Routing</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.8rem', textAlign: 'center' }}>
              Define your preferred service tier and primary feature requirements.
            </p>

            <div style={{ marginBottom: '1.4rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                WhatsApp Direct Contact Number <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g. 024 123 4567 or 055 000 1122"
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
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '1.4rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Preferred Subscription / Service Tier
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                style={{
                  width: '100%',
                  background: '#10151C',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--text-main)',
                  padding: '0.85rem 1.2rem',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <option value="Lite Tier (GH₵ 49/mo)">Lite Tier (GH₵ 49/mo - Micro Catalog & Lead Link)</option>
                <option value="Starter Tier (GH₵ 499/mo)">Starter Tier (GH₵ 499/mo - High-Converting WaaS)</option>
                <option value="Professional Tier (GH₵ 999/mo)">Professional Tier (GH₵ 999/mo - Corporate Multi-Page)</option>
                <option value="Enterprise Custom (GH₵ 2,499/mo)">Enterprise Custom (GH₵ 2,499/mo - Custom SaaS & APIs)</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Key Technical Objective / Deliverable
              </label>
              <input 
                type="text" 
                value={projectRequirement}
                onChange={(e) => setProjectRequirement(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--text-main)',
                  padding: '0.85rem 1.2rem',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary"
                style={{
                  padding: '0.85rem 1.4rem',
                  fontSize: '0.92rem'
                }}
              >
                <span>← Back</span>
              </button>

              <button 
                type="submit"
                className="btn-primary"
                style={{
                  flexGrow: 1,
                  padding: '0.85rem 1.6rem',
                  fontSize: '0.95rem'
                }}
              >
                <span>Generate Fast-Track Proposal</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Proposal Blueprint Preview & WhatsApp Action */}
        {step === 3 && (
          <div>
            {!isGenerated ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '44px', height: '44px', margin: '0 auto 1.5rem', borderRadius: '50%', border: '3px solid rgba(0,240,255,0.2)', borderTopColor: '#00F0FF', animation: 'spin 1s linear infinite' }} />
                <h2 className="heading-luminance" style={{ fontSize: '1.6rem', fontWeight: 850, marginBottom: '0.6rem' }}>
                  Synthesizing Blueprint for <span className="cyan-luminance">{businessName}</span>
                </h2>
                <p style={{ color: '#00F0FF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                  {generationStatus}
                </p>

                <div style={{ background: 'rgba(255,255,255,0.08)', height: '8px', borderRadius: '10px', overflow: 'hidden', maxWidth: '420px', margin: '0 auto 1rem' }}>
                  <div style={{
                    width: `${generationProgress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #00F0FF, #E5C07B)',
                    transition: 'width 0.2s ease'
                  }} />
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{generationProgress}% Prepared</span>
              </div>
            ) : (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10B981', color: '#10B981', padding: '0.35rem 1.2rem', borderRadius: '20px', fontWeight: 750, fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                    PROPOSAL BLUEPRINT READY
                  </span>
                  <h2 className="heading-luminance" style={{ fontSize: '1.6rem', fontWeight: 850, marginTop: '0.8rem' }}>
                    {businessName}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    48-Hour SLA managed launch architecture prepared for your review.
                  </p>
                </div>

                {/* Scope Proposal Card */}
                <div style={{
                  border: `1px solid ${primaryColor}55`,
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '1.4rem',
                  maxWidth: '480px',
                  margin: '0 auto 1.8rem',
                  boxShadow: `0 10px 30px ${primaryColor}22`,
                  textAlign: 'left'
                }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.8rem', marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#FFFFFF' }}>
                        {businessName}
                      </div>
                      <span style={{ fontSize: '0.76rem', color: primaryColor, fontWeight: 700 }}>
                        {industry}
                      </span>
                    </div>
                    <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.2rem 0.6rem', borderRadius: '8px', fontSize: '0.75rem', color: '#E5C07B', fontWeight: 750 }}>
                      {selectedPlan.split('(')[0].trim()}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6 }}>
                    <div style={{ marginBottom: '0.4rem' }}>
                      <strong style={{ color: '#FFFFFF' }}>Primary Deliverable:</strong> {projectRequirement}
                    </div>
                    <div>
                      <strong style={{ color: '#FFFFFF' }}>Contact WhatsApp:</strong> {whatsappNumber}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={directConsultationWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: 'none', padding: '0.85rem 1.8rem', fontSize: '0.92rem' }}
                  >
                    <span>Submit & Open WhatsApp Brief</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>

                  <button
                    onClick={() => setStep(1)}
                    className="btn-secondary"
                    style={{
                      padding: '0.85rem 1.4rem',
                      fontSize: '0.92rem'
                    }}
                  >
                    Modify Details
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
