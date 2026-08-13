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
  deliverables: { title: string; spec: string }[];
  techStack: string[];
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
    badge: '💻 CORE ENGINEERING',
    summary: 'We build production-grade, high-speed web applications using React, Next.js, TypeScript, and modern cloud architectures. Optimized for sub-second page loads, SEO dominance, and maximum conversion rates.',
    icon: '⚡',
    coverGradient: 'linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(9, 13, 22, 0.8) 100%)',
    deliverables: [
      { title: 'Single-Page & Multi-Page Web Apps', spec: 'Vite / Next.js SSR & static pre-rendering with React 18+' },
      { title: 'API Integration & Cloud Backends', spec: 'RESTful / GraphQL APIs, Node.js microservices, and Firebase real-time sync' },
      { title: 'SEO & Microdata Architecture', spec: 'Schema.org JSON-LD microdata, OpenGraph cards, and Google Search Console indexing' },
      { title: 'Responsive Ultra-Fast UI', spec: 'Mobile-first design system, glassmorphism UI, sub-second LCP performance' }
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Firebase', 'Vite', 'TailwindCSS / Vanilla CSS'],
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
    badge: '📱 MOBILE SYSTEMS',
    summary: 'From concept to App Store and Google Play publication. We engineer cross-platform mobile apps using React Native and Flutter, delivering native 60fps animations, push notifications, and offline-first database sync.',
    icon: '📲',
    coverGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(9, 13, 22, 0.8) 100%)',
    deliverables: [
      { title: 'Cross-Platform iOS & Android Apps', spec: 'Single codebase compiled to native iOS Swift & Android Kotlin binaries' },
      { title: 'Offline-First Database Sync', spec: 'Local SQLite / Realm storage with automatic cloud reconciliation' },
      { title: 'Push Notifications & Deep Linking', spec: 'Firebase Cloud Messaging (FCM) & Apple APNs integration' },
      { title: 'Store Deployment & Compliance', spec: 'Complete Apple App Store & Google Play Store submission & approval management' }
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Firebase FCM', 'App Store Connect', 'Google Play Console'],
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
    badge: '🎨 DESIGN STUDIO',
    summary: 'We craft iconic corporate brand identity systems that command trust and market authority. Includes logo vectors, color tokens, typography scales, interactive Figma UI/UX wireframes, and complete brand manuals.',
    icon: '✨',
    coverGradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(9, 13, 22, 0.8) 100%)',
    deliverables: [
      { title: 'Vector Logo Systems', spec: 'Scalable SVG, EPS, PNG, and PDF asset packages with dark/light variants' },
      { title: 'Interactive Figma UI/UX Prototypes', spec: 'High-fidelity component design systems, wireframes, and interactive user flows' },
      { title: 'Brand Identity Guidelines', spec: 'PDF brand book detailing typography, color palettes, spacing rules, and usage' },
      { title: 'Social & Corporate Marketing Assets', spec: 'Banners, OpenGraph social previews, business cards, and flyer graphics' }
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Photoshop', 'SVG Vector Systems', 'Design Tokens'],
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
    badge: '☁️ CLOUD ARCHITECTURE',
    summary: 'Architecting resilient, self-healing cloud infrastructure on AWS, Firebase, and Cloudflare. We build automated GitHub Actions CI/CD pipelines, SSL/TLS encryption, and real-time uptime monitoring.',
    icon: '🛡️',
    coverGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(9, 13, 22, 0.8) 100%)',
    deliverables: [
      { title: 'Automated CI/CD Deployment Pipelines', spec: 'GitHub Actions workflows for automated build, lint, test, and zero-downtime deployment' },
      { title: 'Cloud Infrastructure Setup', spec: 'Firebase Firestore, AWS S3/CloudFront, Cloudflare DNS, and serverless edge functions' },
      { title: 'Security & Penetration Audits', spec: 'Snyk SAST security scanning, DOM-XSS prevention, and SSL/TLS configuration' },
      { title: 'Uptime & Performance Telemetry', spec: 'Real-time error tracking, automated sitemap submission, and Google Search Console APIs' }
    ],
    techStack: ['AWS', 'Firebase', 'Cloudflare', 'GitHub Actions', 'Docker', 'Snyk', 'Node.js'],
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

export default function ServiceDetail({ slug, onBack }: { slug: string; onBack?: () => void }) {
  const service = servicesData[slug] || servicesData['web-development'];

  return (
    <div className="service-detail-container" itemScope itemType="https://schema.org/Service">
      {/* Top Breadcrumb Nav */}
      <div className="service-nav-bar">
        <a 
          href="#services" 
          onClick={(e) => { e.preventDefault(); window.location.hash = '#services'; if (onBack) onBack(); }}
          className="service-back-btn"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Services Directory
        </a>
      </div>

      {/* Hero Banner */}
      <header className="service-hero-banner" style={{ background: service.coverGradient }}>
        <span className="service-badge">{service.badge}</span>
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
            <span>💬 Book a Technical Consultation</span>
          </a>
          <a href="#pricing" className="service-secondary-btn">
            <span>🏷️ View Pricing Estimates</span>
          </a>
        </div>
      </header>

      {/* Main Deliverables Grid */}
      <section className="service-deliverables-section">
        <h2 className="section-title">📦 Key Technical Deliverables & Features</h2>
        <div className="deliverables-grid">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="deliverable-card">
              <span className="del-num">0{idx + 1}</span>
              <h3 className="del-title">{item.title}</h3>
              <p className="del-spec">{item.spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Pills */}
      <section className="service-tech-section">
        <h2 className="section-title">🛠️ Engineering Tech Stack</h2>
        <div className="tech-pills-row">
          {service.techStack.map((tech) => (
            <span key={tech} className="service-tech-pill">{tech}</span>
          ))}
        </div>
      </section>

      {/* Case Study Highlight Box */}
      <section className="service-case-section">
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
      <section className="service-faq-section">
        <h2 className="section-title">❓ Frequently Asked Questions</h2>
        <div className="faq-grid">
          {service.faq.map((item, idx) => (
            <div key={idx} className="faq-card">
              <h3 className="faq-q">Q: {item.q}</h3>
              <p className="faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
