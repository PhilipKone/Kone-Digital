import './ServiceDetail.css';

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  headline: string;
  badge: string;
  summary: string;
  icon: string;
  coverGradient: string;
  architectureFile: string;
  architectureMetrics: { label: string; value: string }[];
  deliverables: { title: string; spec: string; iconType: string }[];
  techStack: { name: string; color: string }[];
  caseStudyHighlight: {
    client: string;
    project: string;
    result: string;
    link?: string;
  };
  faq: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  'web-development': {
    id: 'web-development',
    slug: 'web-development',
    title: 'Custom Web & SaaS Application Engineering',
    headline: 'High-Performance Web Applications & Custom SaaS Platforms',
    badge: 'CORE ENGINEERING',
    summary: 'We build production-grade, high-speed web applications using React, Next.js, TypeScript, and modern cloud architectures. Optimized for sub-second page loads, SEO dominance, and maximum conversion rates.',
    icon: 'code',
    coverGradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)',
    architectureFile: 'web-architecture.config.ts',
    architectureMetrics: [
      { label: 'Uptime SLA', value: '99.98%' },
      { label: 'Edge Latency', value: '< 60ms' },
      { label: 'SEO & Speed', value: '100 / 100' },
      { label: '4G Mobile LCP', value: 'Sub-1.2s' }
    ],
    deliverables: [
      { title: 'Single-Page & Multi-Page Web Apps', spec: 'Vite / Next.js SSR & static pre-rendering with React 18+', iconType: 'layout' },
      { title: 'API Integration & Cloud Backends', spec: 'RESTful / GraphQL APIs, Node.js microservices, and Firebase real-time sync', iconType: 'cloud' },
      { title: 'SEO & Microdata Architecture', spec: 'Schema.org JSON-LD microdata, OpenGraph cards, and Google Search Console indexing', iconType: 'seo' },
      { title: 'Responsive Ultra-Fast UI', spec: 'Mobile-first design system, glassmorphism UI, sub-second LCP performance', iconType: 'speed' }
    ],
    techStack: [
      { name: 'React 18', color: '#00F0FF' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Next.js', color: '#FFFFFF' },
      { name: 'Node.js', color: '#4ADE80' },
      { name: 'Firebase', color: '#F59E0B' },
      { name: 'Vite', color: '#C084FC' },
      { name: 'Tailwind / Vanilla CSS', color: '#38BDF8' }
    ],
    caseStudyHighlight: {
      client: 'Kone Farms & Agritech',
      project: 'IoT Soil Telemetry & Agritech Research Hub',
      result: '+85.7% annual yield increase & 100% GSC sitemap indexing across 11 subdomains.',
      link: 'https://farms.koneacademy.io'
    },
    faq: [
      { q: 'How long does a custom web development project take?', a: 'Standard business websites are delivered in 5–10 business days. Complex SaaS platforms take 3–5 weeks.' },
      { q: 'Is hosting and domain setup included?', a: 'Yes! We configure global CDN deployment (Vercel, Firebase, GitHub Pages), SSL certificates, and custom subdomains.' }
    ]
  },
  'mobile-apps': {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    title: 'iOS & Android Mobile App Development',
    headline: 'Native Performance Cross-Platform Mobile Applications',
    badge: 'MOBILE SYSTEMS',
    summary: 'From concept to App Store and Google Play publication. We engineer cross-platform mobile apps using React Native and Flutter, delivering native 60fps animations, push notifications, and offline-first database sync.',
    icon: 'smartphone',
    coverGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)',
    architectureFile: 'native-mobile.spec.ts',
    architectureMetrics: [
      { label: 'Render Performance', value: '60 FPS' },
      { label: 'Database Architecture', value: 'Offline-First' },
      { label: 'Platforms Supported', value: 'iOS & Android' },
      { label: 'Push Reliability', value: '99.9%' }
    ],
    deliverables: [
      { title: 'Cross-Platform iOS & Android Apps', spec: 'Single codebase compiled to native iOS Swift & Android Kotlin binaries', iconType: 'smartphone' },
      { title: 'Offline-First Database Sync', spec: 'Local SQLite / Realm storage with automatic cloud reconciliation', iconType: 'cloud' },
      { title: 'Push Notifications & Deep Linking', spec: 'Firebase Cloud Messaging (FCM) & Apple APNs integration', iconType: 'bell' },
      { title: 'Store Deployment & Compliance', spec: 'Complete Apple App Store & Google Play Store submission & approval management', iconType: 'store' }
    ],
    techStack: [
      { name: 'React Native', color: '#00F0FF' },
      { name: 'Flutter', color: '#02569B' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Firebase FCM', color: '#F59E0B' },
      { name: 'App Store Connect', color: '#A855F7' },
      { name: 'Google Play Console', color: '#10B981' }
    ],
    caseStudyHighlight: {
      client: 'Kone Kids Academy',
      project: 'Interactive Mobile Learning Companion',
      result: '4.9★ rating with offline course access for students across West Africa.',
      link: 'https://kids.koneacademy.io'
    },
    faq: [
      { q: 'Do you publish our app directly to the App Store & Google Play?', a: 'Yes, we handle all store listing assets, compliance requirements, privacy manifests, and final submission.' },
      { q: 'Can the app work offline without internet?', a: 'Yes, we build local caching mechanisms that allow full app functionality offline.' }
    ]
  },
  'brand-design': {
    id: 'brand-design',
    slug: 'brand-design',
    title: 'Brand Identity & UI/UX Design Systems',
    headline: 'World-Class Logo Systems, Brand Manuals & Figma UI/UX Prototypes',
    badge: 'DESIGN STUDIO',
    summary: 'We craft iconic corporate brand identity systems that command trust and market authority. Includes logo vectors, color tokens, typography scales, interactive Figma UI/UX wireframes, and complete brand manuals.',
    icon: 'palette',
    coverGradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)',
    architectureFile: 'brand-design-system.tokens.ts',
    architectureMetrics: [
      { label: 'Scalability Standard', value: 'Vector 4K' },
      { label: 'Component Library', value: 'Figma High-Fi' },
      { label: 'Color Contrast', value: 'WCAG AAA' },
      { label: 'Brand Asset Package', value: 'Full Manual' }
    ],
    deliverables: [
      { title: 'Vector Logo Systems', spec: 'Scalable SVG, EPS, PNG, and PDF asset packages with dark/light variants', iconType: 'palette' },
      { title: 'Interactive Figma UI/UX Prototypes', spec: 'High-fidelity component design systems, wireframes, and interactive user flows', iconType: 'layout' },
      { title: 'Brand Identity Guidelines', spec: 'PDF brand book detailing typography, color palettes, spacing rules, and usage', iconType: 'book' },
      { title: 'Social & Corporate Marketing Assets', spec: 'Banners, OpenGraph social previews, business cards, and flyer graphics', iconType: 'speed' }
    ],
    techStack: [
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Adobe Illustrator', color: '#FF9A00' },
      { name: 'Photoshop', color: '#31A8FF' },
      { name: 'SVG Vector Systems', color: '#FACC15' },
      { name: 'Design Tokens', color: '#C084FC' }
    ],
    caseStudyHighlight: {
      client: 'Kone Consult',
      project: 'Corporate Tech Brand & Design System',
      result: 'Unified multi-subdomain corporate visual language for enterprise client acquisition.',
      link: 'https://consult.koneacademy.io'
    },
    faq: [
      { q: 'What files do I receive upon project completion?', a: 'You receive all original Figma source files, vector SVG/EPS logos, exportable PNGs, and a PDF Brand Guideline manual.' },
      { q: 'Can you redesign our existing company logo?', a: 'Absolutely. We specialize in modernizing legacy brand identities for digital-first platforms.' }
    ]
  },
  'cloud-devops': {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps Automation',
    headline: 'Scalable Cloud Systems, Automated CI/CD & Security Audits',
    badge: 'CLOUD ARCHITECTURE',
    summary: 'Architecting resilient, self-healing cloud infrastructure on AWS, Firebase, and Cloudflare. We build automated GitHub Actions CI/CD pipelines, SSL/TLS encryption, and real-time uptime monitoring.',
    icon: 'server',
    coverGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)',
    architectureFile: 'cloud-infrastructure.infra.ts',
    architectureMetrics: [
      { label: 'Deploy Downtime', value: 'Zero Downtime' },
      { label: 'Cluster Architecture', value: 'Self-Healing' },
      { label: 'Security Standard', value: 'Snyk 0-Issue' },
      { label: 'Encryption Protocol', value: 'TLS 1.3 / SSL' }
    ],
    deliverables: [
      { title: 'Automated CI/CD Deployment Pipelines', spec: 'GitHub Actions workflows for automated build, lint, test, and zero-downtime deployment', iconType: 'speed' },
      { title: 'Cloud Infrastructure Setup', spec: 'Firebase Firestore, AWS S3/CloudFront, Cloudflare DNS, and serverless edge functions', iconType: 'cloud' },
      { title: 'Security & Penetration Audits', spec: 'Snyk SAST security scanning, DOM-XSS prevention, and SSL/TLS configuration', iconType: 'shield' },
      { title: 'Uptime & Performance Telemetry', spec: 'Real-time error tracking, automated sitemap submission, and Google Search Console APIs', iconType: 'server' }
    ],
    techStack: [
      { name: 'AWS Cloud', color: '#FF9900' },
      { name: 'Firebase', color: '#F59E0B' },
      { name: 'Cloudflare', color: '#F38020' },
      { name: 'GitHub Actions', color: '#2088FF' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Snyk Security', color: '#A855F7' },
      { name: 'Node.js', color: '#4ADE80' }
    ],
    caseStudyHighlight: {
      client: 'Kone Code IDE Ecosystem',
      project: 'Cloud Compiler & Data Relay Infrastructure',
      result: '99.98% uptime serving thousands of automated compiler executions daily.',
      link: 'https://code.koneacademy.io'
    },
    faq: [
      { q: 'Can you migrate our legacy server to modern cloud hosting?', a: 'Yes, we perform zero-downtime migrations to Firebase, Vercel, or AWS with SSL configuration.' },
      { q: 'How do you ensure our customer data is secure?', a: 'We implement hardware-level security rules, CORS isolation, HTTPS encryption, and Snyk SAST vulnerability scans.' }
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
    default:
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
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
          <span className="crumb-current">{service.title.split(' ')[0]}</span>
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

      {/* Hero 2-Column Banner */}
      <header className="service-hero-banner" style={{ background: service.coverGradient }}>
        <div className="service-hero-grid">
          {/* Left Column: Headlines & CTAs */}
          <div className="service-hero-content">
            <div className="service-badge-wrapper">
              <span className="service-badge">{service.badge}</span>
              <span className="service-live-dot">● Production Grade</span>
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

          {/* Right Column: Architectural Terminal Preview Card */}
          <div className="service-hero-visual-card">
            <div className="terminal-top-bar">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">{service.architectureFile}</span>
            </div>
            
            <div className="terminal-body">
              <div className="terminal-metrics-grid">
                {service.architectureMetrics.map((metric, idx) => (
                  <div key={idx} className="terminal-metric-item">
                    <span className="metric-val">{metric.value}</span>
                    <span className="metric-lbl">{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="terminal-code-snippet">
                <div className="code-line"><span className="code-kw">export const</span> spec = &#123;</div>
                <div className="code-line indent"><span className="code-prop">standard:</span> <span className="code-str">'enterprise-waas'</span>,</div>
                <div className="code-line indent"><span className="code-prop">security:</span> <span className="code-str">'snyk-hardened'</span>,</div>
                <div className="code-line indent"><span className="code-prop">payments:</span> [<span className="code-str">'MTN MoMo'</span>, <span className="code-str">'Telecel'</span>],</div>
                <div className="code-line indent"><span className="code-prop">indexing:</span> <span className="code-bool">true</span></div>
                <div className="code-line">&#125;;</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Deliverables Grid */}
      <section className="service-deliverables-section fade-in-up">
        <h2 className="section-title">Key Technical Deliverables & Features</h2>
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

      {/* Tech Stack Section */}
      <section className="service-tech-section fade-in-up">
        <h2 className="section-title">Engineering Tech Stack</h2>
        <div className="tech-pills-row">
          {service.techStack.map((tech) => (
            <span key={tech.name} className="service-tech-pill">
              <span className="tech-dot" style={{ backgroundColor: tech.color }}></span>
              <span>{tech.name}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Case Study Highlight Box */}
      <section className="service-case-section fade-in-up">
        <div className="case-highlight-card">
          <div className="case-meta-header">
            <span className="case-label">FEATURED CASE STUDY</span>
            <span className="case-client">{service.caseStudyHighlight.client}</span>
          </div>
          <h3 className="case-title">{service.caseStudyHighlight.project}</h3>
          <p className="case-result">🎯 {service.caseStudyHighlight.result}</p>
          {service.caseStudyHighlight.link && (
            <a 
              href={service.caseStudyHighlight.link} 
              target="_blank" 
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
      </section>

      {/* FAQ Section */}
      <section className="service-faq-section fade-in-up">
        <h2 className="section-title">❓ Frequently Asked Questions</h2>
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
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>Comprehensive engineering & design capabilities for growing ventures.</p>
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
