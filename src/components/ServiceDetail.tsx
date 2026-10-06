import './ServiceDetail.css';

export interface ServiceData {
  id: string;
  slug: string;
  shortName: string;
  title: string;
  headline: string;
  badge: string;
  summary: string;
  icon: string;
  heroImage: string;
  coverGradient: string;
  scopeHighlights: { label: string; detail: string }[];
  deliverables: { title: string; spec: string; iconType: string }[];
  techStack: string[];
  caseStudyHighlight: {
    client: string;
    project: string;
    result: string;
    image: string;
    link?: string;
  };
  clientShowcases?: {
    title: string;
    category: string;
    image: string;
    link: string;
    metric: string;
  }[];
  faq: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  'web-development': {
    id: 'web-development',
    slug: 'web-development',
    shortName: 'Web Development',
    title: 'Custom Web & SaaS Application Engineering',
    headline: 'High-Performance Web Applications, Portals & SaaS Platforms',
    badge: 'CORE ENGINEERING',
    summary: 'We build production-grade, ultra-fast web applications using React, Next.js, TypeScript, and modern cloud architectures. Engineered for instant page loads, high conversion, and seamless Ghanaian mobile payments.',
    icon: 'code',
    heroImage: '/assets/services/web-dev-showcase.jpg',
    coverGradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)',
    scopeHighlights: [
      { label: 'Turnaround SLA', detail: '24–48h for Rapid Hubs · 5–10 days for Custom Apps' },
      { label: 'Payment Rails', detail: 'Automated MTN MoMo, Telecel Cash & AT Money' },
      { label: 'Architecture', detail: 'Modern React 18, Next.js SSR & static pre-rendering' },
      { label: 'Code Quality', detail: 'Snyk-audited zero-vulnerability & Schema.org SEO' }
    ],
    deliverables: [
      { title: 'Single-Page & Multi-Page Web Apps', spec: 'Vite & Next.js static prerendering with React 18+ for instant page response', iconType: 'layout' },
      { title: 'API Integration & Cloud Backends', spec: 'RESTful / GraphQL APIs, Node.js microservices, and Firebase real-time data sync', iconType: 'cloud' },
      { title: 'SEO & Microdata Architecture', spec: 'Schema.org JSON-LD microdata, OpenGraph social cards, and Google Search Console indexing', iconType: 'seo' },
      { title: 'Responsive Ultra-Fast UI', spec: 'Mobile-first design system, clean interactions, and sub-second loading speeds', iconType: 'speed' }
    ],
    techStack: ['React 18', 'TypeScript', 'Next.js', 'Node.js', 'Firebase', 'Vite', 'Tailwind CSS'],
    caseStudyHighlight: {
      client: 'Sedemson Stone Ghana',
      project: 'B2B Natural Stone Architectural Finishing Hub',
      result: '+340% inbound wholesale WhatsApp RFQs with sub-second performance across Accra.',
      image: '/sedemson_stone_hero.webp',
      link: '/sedemson-stone/index.html'
    },
    clientShowcases: [
      {
        title: 'Sedemson Stone',
        category: 'B2B & Architectural Finishing',
        image: '/sedemson_stone_hero.webp',
        link: '/sedemson-stone/index.html',
        metric: '+340% WhatsApp RFQs'
      },
      {
        title: "Susan's Pastries",
        category: 'Artisanal Bakery & E-Commerce',
        image: '/susans-pastries/hero-banner.webp',
        link: '/susans-pastries/index.html',
        metric: 'Direct WhatsApp Orders'
      },
      {
        title: 'Emewear Luxury',
        category: 'Fashion & Heritage Apparel',
        image: '/emewear/emewear_hero.webp',
        link: '/emewear/index.html',
        metric: 'Automated MoMo Checkout'
      }
    ],
    faq: [
      { 
        q: 'How long does a custom web development project take?', 
        a: 'Rapid business landing pages and WaaS storefronts launch in 24–48 hours. Custom multi-page business websites are delivered in 5–10 business days, and complex SaaS platforms take 2–4 weeks.' 
      },
      { 
        q: 'Is hosting, domain, and SSL setup included?', 
        a: 'Yes. We configure complete cloud hosting (Vercel, Firebase, GitHub Pages), custom domain DNS, SSL certificates, and Google Search Console indexing.' 
      },
      { 
        q: 'Do you integrate Mobile Money (MTN MoMo, Telecel, AT)?', 
        a: 'Yes. We natively integrate automated Ghanaian mobile payment routing so customers can pay directly into your account.' 
      }
    ]
  },
  'mobile-apps': {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    shortName: 'Mobile Apps',
    title: 'iOS & Android Mobile App Development',
    headline: 'Native Performance Cross-Platform Mobile Applications',
    badge: 'MOBILE SYSTEMS',
    summary: 'From concept to App Store and Google Play publication. We engineer cross-platform mobile apps using React Native and Flutter, delivering native 60fps animations, push notifications, and offline-first database sync.',
    icon: 'smartphone',
    heroImage: '/assets/services/mobile-apps-showcase.jpg',
    coverGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)',
    scopeHighlights: [
      { label: 'Target Platforms', detail: 'Native iOS (App Store) & Android (Google Play)' },
      { label: 'Architecture', detail: 'Offline-first database sync & React Native / Flutter' },
      { label: 'Push & Messaging', detail: 'Automated Firebase FCM & Apple APNs notifications' },
      { label: 'Turnaround SLA', detail: '2–4 weeks MVP to Store submission' }
    ],
    deliverables: [
      { title: 'Cross-Platform iOS & Android Apps', spec: 'Single codebase compiled to native iOS Swift & Android Kotlin binaries', iconType: 'smartphone' },
      { title: 'Offline-First Database Sync', spec: 'Local SQLite / Realm storage with automatic cloud reconciliation', iconType: 'cloud' },
      { title: 'Push Notifications & Deep Linking', spec: 'Firebase Cloud Messaging (FCM) & Apple APNs integration', iconType: 'bell' },
      { title: 'Store Deployment & Compliance', spec: 'Complete Apple App Store & Google Play Store submission & approval management', iconType: 'store' }
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Firebase FCM', 'App Store Connect', 'Google Play Console'],
    caseStudyHighlight: {
      client: 'Kone Kids Academy',
      project: 'Interactive Mobile Learning Companion',
      result: '4.9★ rating with offline course access for students across West Africa.',
      image: '/assets/services/mobile-apps-showcase.jpg',
      link: 'https://kids.koneacademy.io'
    },
    faq: [
      { 
        q: 'How long does mobile app development take?', 
        a: 'Rapid MVP mobile applications launch in 2–4 weeks. Complete multi-platform production builds with store approvals take 4–6 weeks.' 
      },
      { 
        q: 'Do you publish our app directly to the App Store & Google Play?', 
        a: 'Yes. We manage all store assets, compliance guidelines, privacy manifests, and final submission to both Apple and Google.' 
      },
      { 
        q: 'Can the app work offline without internet?', 
        a: 'Yes. We build local caching mechanisms that allow core app functionality offline with automatic cloud sync when connected.' 
      }
    ]
  },
  'brand-design': {
    id: 'brand-design',
    slug: 'brand-design',
    shortName: 'Brand & UI/UX',
    title: 'Brand Identity & UI/UX Design Systems',
    headline: 'World-Class Logo Systems, Brand Manuals & Figma UI/UX Prototypes',
    badge: 'DESIGN STUDIO',
    summary: 'We craft iconic corporate brand identity systems that command trust and market authority. Includes logo vectors, color tokens, typography scales, interactive Figma UI/UX wireframes, and complete brand manuals.',
    icon: 'palette',
    heroImage: '/assets/services/brand-design-showcase.jpg',
    coverGradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)',
    scopeHighlights: [
      { label: 'Deliverables', detail: 'Scalable SVG / EPS vectors & full PDF Brand Guidelines' },
      { label: 'UI/UX Prototypes', detail: 'Interactive high-fidelity Figma component systems' },
      { label: 'Accessibility', detail: 'WCAG AAA color contrast & responsive design tokens' },
      { label: 'Turnaround SLA', detail: '48–72h Initial Concepts · 5–7 days Complete Package' }
    ],
    deliverables: [
      { title: 'Vector Logo Systems', spec: 'Scalable SVG, EPS, PNG, and PDF asset packages with dark/light variants', iconType: 'palette' },
      { title: 'Interactive Figma UI/UX Prototypes', spec: 'High-fidelity component design systems, wireframes, and interactive user flows', iconType: 'layout' },
      { title: 'Brand Identity Guidelines', spec: 'PDF brand book detailing typography, color palettes, spacing rules, and usage', iconType: 'book' },
      { title: 'Social & Corporate Marketing Assets', spec: 'Banners, OpenGraph social previews, business cards, and flyer graphics', iconType: 'speed' }
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Photoshop', 'SVG Vector Systems', 'Design Tokens'],
    caseStudyHighlight: {
      client: 'Kone Consult',
      project: 'Corporate Tech Brand & Design System',
      result: 'Unified multi-subdomain corporate visual language for enterprise client acquisition.',
      image: '/assets/services/brand-design-showcase.jpg',
      link: 'https://consult.koneacademy.io'
    },
    faq: [
      { 
        q: 'What is the turnaround time for a complete brand identity?', 
        a: 'Initial brand concepts and logo marks are delivered in 48–72 hours. Complete vector packages, design systems, and PDF brand manuals are finalized in 5–7 business days.' 
      },
      { 
        q: 'What files and assets do I receive upon completion?', 
        a: 'You receive all original Figma source files, vector SVG/EPS assets, high-res PNG/PDF exports, and a comprehensive brand guideline manual.' 
      },
      { 
        q: 'Can you redesign our existing company logo?', 
        a: 'Absolutely. We specialize in modernizing legacy brand identities for digital-first platforms.' 
      }
    ]
  },
  'cloud-devops': {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    shortName: 'Cloud & DevOps',
    title: 'Cloud Infrastructure & DevOps Automation',
    headline: 'Scalable Cloud Systems, Automated CI/CD & Security Audits',
    badge: 'CLOUD ARCHITECTURE',
    summary: 'Architecting resilient, self-healing cloud infrastructure on AWS, Firebase, and Cloudflare. We build automated GitHub Actions CI/CD pipelines, SSL/TLS encryption, and real-time uptime monitoring.',
    icon: 'server',
    heroImage: '/assets/services/cloud-devops-showcase.jpg',
    coverGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)',
    scopeHighlights: [
      { label: 'Cloud Platforms', detail: 'AWS, Firebase, Cloudflare DNS & Docker containers' },
      { label: 'CI/CD Automation', detail: 'GitHub Actions with automated testing & zero-downtime deploys' },
      { label: 'Security Standard', detail: 'Snyk SAST vulnerability scans & TLS 1.3 / SSL encryption' },
      { label: 'Turnaround SLA', detail: '24–48h Setup, configuration & zero-downtime migrations' }
    ],
    deliverables: [
      { title: 'Automated CI/CD Deployment Pipelines', spec: 'GitHub Actions workflows for automated build, lint, test, and zero-downtime deployment', iconType: 'speed' },
      { title: 'Cloud Infrastructure Setup', spec: 'Firebase Firestore, AWS S3/CloudFront, Cloudflare DNS, and serverless edge functions', iconType: 'cloud' },
      { title: 'Security & Penetration Audits', spec: 'Snyk SAST security scanning, DOM-XSS prevention, and SSL/TLS configuration', iconType: 'shield' },
      { title: 'Uptime & Performance Telemetry', spec: 'Real-time error tracking, automated sitemap submission, and Google Search Console APIs', iconType: 'server' }
    ],
    techStack: ['AWS Cloud', 'Firebase', 'Cloudflare', 'GitHub Actions', 'Docker', 'Snyk Security', 'Node.js'],
    caseStudyHighlight: {
      client: 'Kone Code IDE Ecosystem',
      project: 'Cloud Compiler & Data Relay Infrastructure',
      result: '99.98% uptime serving thousands of automated compiler executions daily.',
      image: '/assets/services/cloud-devops-showcase.jpg',
      link: 'https://code.koneacademy.io'
    },
    faq: [
      { 
        q: 'How quickly can cloud infrastructure or CI/CD pipelines be set up?', 
        a: 'Standard CI/CD automation, cloud hosting migration, and DNS setups are completed within 24–48 hours with zero downtime.' 
      },
      { 
        q: 'How do you ensure our production code and customer data are secure?', 
        a: 'We perform automated Snyk SAST security scans, enforce HTTPS/TLS 1.3 encryption, and implement strict environment isolation.' 
      }
    ]
  }
};

const renderIcon = (type: string) => {
  switch (type) {
    case 'layout':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      );
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      );
    case 'seo':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <path d="M11 8v6"></path>
          <path d="M8 11h6"></path>
        </svg>
      );
    case 'speed':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      );
    case 'smartphone':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      );
    case 'bell':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      );
    case 'store':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      );
    case 'palette':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5"></circle>
          <circle cx="17.5" cy="10.5" r=".5"></circle>
          <circle cx="8.5" cy="7.5" r=".5"></circle>
          <circle cx="6.5" cy="12.5" r=".5"></circle>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path>
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      );
    case 'server':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
  }
};

export default function ServiceDetail({ 
  slug, 
  onBack,
  onSelectService 
}: { 
  slug: string; 
  onBack?: () => void;
  onSelectService?: (newSlug: string) => void;
}) {
  const service = servicesData[slug] || servicesData['web-development'];
  const allServices = Object.values(servicesData);
  const otherServices = allServices.filter(s => s.slug !== service.slug);

  return (
    <div className="service-detail-container" itemScope itemType="https://schema.org/Service">
      {/* Top Breadcrumb Nav Bar */}
      <nav className="service-nav-bar" aria-label="Breadcrumb">
        <div className="service-breadcrumbs">
          <a href="/" className="crumb-link">Home</a>
          <span className="crumb-separator">/</span>
          <a 
            href="/services" 
            onClick={(e) => { e.preventDefault(); if (onBack) onBack(); }}
            className="crumb-link"
          >
            Services
          </a>
          <span className="crumb-separator">/</span>
          <span className="crumb-current">{service.shortName}</span>
        </div>

        <a 
          href="/services" 
          onClick={(e) => { e.preventDefault(); if (onBack) onBack(); }}
          className="service-back-btn"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>All Services</span>
        </a>
      </nav>

      {/* Hero Banner with Product Visual Showcase */}
      <header className="service-hero-banner" style={{ background: service.coverGradient }}>
        <div className="service-hero-grid">
          {/* Left Column: Headlines & Actions */}
          <div className="service-hero-content">
            <div className="service-badge-wrapper">
              <span className="service-badge">{service.badge}</span>
              <span className="service-live-dot">Production Grade</span>
            </div>
            <h1 className="service-main-title" itemProp="name">{service.title}</h1>
            <p className="service-headline" itemProp="description">{service.headline}</p>
            <p className="service-summary">{service.summary}</p>

            <div className="service-hero-cta">
              <a 
                href={`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="service-primary-btn"
              >
                <span>Book a Technical Consultation</span>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="/pricing" className="service-secondary-btn">
                <span>View Pricing Estimates</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Visual Mockup */}
          <div className="service-hero-visual-card">
            <div className="visual-browser-bar">
              <div className="browser-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="browser-url">digital.koneacademy.io/{service.slug}</span>
            </div>
            <div className="visual-frame">
              <img 
                src={service.heroImage} 
                alt={`${service.title} Interface Visual`} 
                className="service-hero-img"
                loading="eager"
              />
              <div className="visual-overlay-badge">
                <span className="badge-pulse">●</span>
                <span>Active Production Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Engineering Standards Horizontal Strip */}
      <section className="service-standards-strip fade-in-up">
        {service.scopeHighlights.map((highlight, idx) => (
          <div key={idx} className="standard-chip">
            <span className="standard-chip-label">{highlight.label}</span>
            <span className="standard-chip-detail">{highlight.detail}</span>
          </div>
        ))}
      </section>

      {/* Main Deliverables Grid */}
      <section className="service-deliverables-section fade-in-up">
        <h2 className="section-title">Key Technical Deliverables &amp; Features</h2>
        <div className="deliverables-grid">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className={`deliverable-card fade-in-up stagger-${(idx % 4) + 1}`}>
              <div className="deliverable-card-header">
                <div className="deliverable-icon-wrapper">
                  {renderIcon(item.iconType)}
                </div>
                <span className="del-num">0{idx + 1}</span>
              </div>
              <h3 className="del-title">{item.title}</h3>
              <p className="del-spec">{item.spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Client Deployments Showcase (If available for service) */}
      {service.clientShowcases && service.clientShowcases.length > 0 && (
        <section className="service-deployments-section fade-in-up">
          <div className="section-header-row">
            <div>
              <h2 className="section-title" style={{ marginBottom: '0.3rem' }}>Live Client Deployments</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>Verified production websites engineered by Kone Digital in active commercial operation.</p>
            </div>
            <a href="/work" className="section-view-all-link">
              <span>View All Work</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className="client-showcases-grid">
            {service.clientShowcases.map((client, idx) => (
              <a 
                key={idx}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="client-showcase-card"
              >
                <div className="client-card-image-wrapper">
                  <img src={client.image} alt={client.title} className="client-card-img" loading="lazy" />
                  <span className="client-card-badge">{client.metric}</span>
                </div>
                <div className="client-card-info">
                  <span className="client-card-category">{client.category}</span>
                  <h3 className="client-card-title">{client.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      <section className="service-tech-section fade-in-up">
        <h2 className="section-title">Engineering Tech Stack</h2>
        <div className="tech-pills-row">
          {service.techStack.map((techName) => (
            <span key={techName} className="service-tech-pill">
              {techName}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Case Study Visual Box */}
      <section className="service-case-section fade-in-up">
        <div className="case-highlight-card">
          <div className="case-card-grid">
            <div className="case-image-col">
              <img 
                src={service.caseStudyHighlight.image} 
                alt={service.caseStudyHighlight.project} 
                className="case-study-img"
                loading="lazy" 
              />
            </div>
            <div className="case-content-col">
              <div className="case-meta-header">
                <span className="case-label">FEATURED CASE STUDY</span>
                <span className="case-client">{service.caseStudyHighlight.client}</span>
              </div>
              <h3 className="case-title">{service.caseStudyHighlight.project}</h3>
              <p className="case-result">{service.caseStudyHighlight.result}</p>
              {service.caseStudyHighlight.link && (
                <a 
                  href={service.caseStudyHighlight.link} 
                  target={service.caseStudyHighlight.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="case-link"
                >
                  <span>Explore Live Platform</span>
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-faq-section fade-in-up">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {service.faq.map((item, idx) => (
            <div key={idx} className={`faq-card fade-in-up stagger-${(idx % 4) + 1}`}>
              <div className="faq-q-row">
                <span className="faq-badge">Q</span>
                <h3 className="faq-q">{item.q}</h3>
              </div>
              <p className="faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Other Services Strip */}
      <section className="other-services-section fade-in-up">
        <div className="other-services-header">
          <h2 className="section-title" style={{ marginBottom: '0.4rem' }}>Explore Other Services</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>Comprehensive engineering &amp; design capabilities for growing ventures.</p>
        </div>
        <div className="other-services-grid">
          {otherServices.map((other) => (
            <a 
              key={other.slug}
              href={`/services/${other.slug}`}
              onClick={(e) => {
                e.preventDefault();
                if (onSelectService) {
                  onSelectService(other.slug);
                } else {
                  window.history.pushState({}, '', `/services/${other.slug}`);
                  window.location.reload();
                }
              }}
              className="other-service-card neon-border"
            >
              <div className="other-card-top">
                <span className="other-card-badge">{other.badge}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" className="other-card-arrow">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              <h3 className="other-card-title">{other.title}</h3>
              <p className="other-card-headline">{other.headline}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
