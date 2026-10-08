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
  heroUrl?: string;
  heroBadge?: string;
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
    headline: 'Full-stack web applications, client portals, and SaaS platforms engineered for scale and speed.',
    badge: 'CORE ENGINEERING',
    summary: 'We engineer production web applications using React, Next.js, TypeScript, and modern cloud architectures. Designed for high conversion, sub-second page loads, and native Ghanaian mobile payment integrations.',
    icon: 'code',
    heroImage: '/assets/services/sedemson-live-browser.jpg',
    heroUrl: 'digital.koneacademy.io/sedemson-stone/',
    heroBadge: 'Verified Live Client · Sedemson Stone',
    coverGradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)',
    scopeHighlights: [
      { label: 'Turnaround SLA', detail: '5–10 business days for custom apps · 48h for rapid hubs' },
      { label: 'Payment Rails', detail: 'Automated MTN MoMo, Telecel Cash & AT Money' },
      { label: 'Architecture', detail: 'React 18, Next.js SSR & static prerendering' },
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
        a: 'Rapid business landing pages launch in 24–48 hours. Custom multi-page business websites and SaaS platforms are delivered in 5–10 business days.' 
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
    headline: 'Native-performance cross-platform mobile apps for App Store and Google Play.',
    badge: 'MOBILE ENGINEERING',
    summary: 'From concept to App Store and Google Play publication. We engineer cross-platform mobile apps using React Native and Flutter, delivering native 60fps animations, push notifications, and offline-first database sync.',
    icon: 'smartphone',
    heroImage: '/assets/services/mobile-apps-live.jpg',
    heroUrl: 'kids.koneacademy.io',
    heroBadge: 'Verified Live App · Kone Kids Companion',
    coverGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)',
    scopeHighlights: [
      { label: 'Target Platforms', detail: 'Apple iOS (App Store) & Android (Google Play)' },
      { label: 'Architecture', detail: 'Offline-first database sync & React Native / Flutter' },
      { label: 'Push & Messaging', detail: 'Firebase Cloud Messaging (FCM) & Apple APNs notifications' },
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
      image: '/assets/services/mobile-apps-live.jpg',
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
    headline: 'Structured corporate identities, scalable vector systems, and interactive Figma prototypes.',
    badge: 'DESIGN STUDIO',
    summary: 'We craft iconic corporate brand identity systems that command trust and market authority. Includes logo vectors, color tokens, typography scales, interactive Figma UI/UX wireframes, and complete brand manuals.',
    icon: 'palette',
    heroImage: '/assets/services/brand-design-live.jpg',
    heroUrl: 'consult.koneacademy.io',
    heroBadge: 'Verified Live Platform · Kone Consult',
    coverGradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)',
    scopeHighlights: [
      { label: 'Deliverables', detail: 'Scalable SVG / EPS vectors & full PDF Brand Guidelines' },
      { label: 'UI/UX Prototypes', detail: 'Interactive component systems in Figma' },
      { label: 'Standards', detail: 'WCAG 2.1 AA color contrast & responsive design tokens' },
      { label: 'Turnaround SLA', detail: '3–5 business days initial concepts · 7–10 days complete package' }
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
      image: '/assets/services/brand-design-live.jpg',
      link: 'https://consult.koneacademy.io'
    },
    faq: [
      { 
        q: 'What is the turnaround time for a complete brand identity?', 
        a: 'Initial brand concepts and logo marks are delivered in 3–5 business days. Complete vector packages, design systems, and PDF brand manuals are finalized in 7–10 business days.' 
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
    headline: 'Automated CI/CD pipelines, secure cloud hosting, and zero-downtime deployments.',
    badge: 'CLOUD ARCHITECTURE',
    summary: 'Architecting resilient cloud infrastructure on AWS, Firebase, and Cloudflare. We build automated GitHub Actions CI/CD pipelines, SSL/TLS encryption, and real-time uptime monitoring.',
    icon: 'server',
    heroImage: '/assets/services/cloud-devops-live.jpg',
    heroUrl: 'code.koneacademy.io',
    heroBadge: 'Verified Live Infrastructure · Kone Code IDE',
    coverGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)',
    scopeHighlights: [
      { label: 'Cloud Platforms', detail: 'AWS, Firebase, Cloudflare DNS & Docker containers' },
      { label: 'CI/CD Automation', detail: 'GitHub Actions with automated testing & zero-downtime deploys' },
      { label: 'Security Standard', detail: 'Snyk SAST vulnerability scans & TLS 1.3 / SSL encryption' },
      { label: 'Turnaround SLA', detail: '24–48h setup, configuration & zero-downtime migrations' }
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
      image: '/assets/services/cloud-devops-live.jpg',
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

const renderTechLogo = (techName: string) => {
  const norm = techName.toLowerCase();
  if (norm.includes('react native') || norm.includes('react 18') || norm === 'react') {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="16" height="16" aria-hidden="true" focusable="false">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  if (norm.includes('typescript')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <path d="M11.7 8.5H5.8V10.3H7.8V17.5H9.7V10.3H11.7V8.5Z" fill="#FFFFFF"/>
        <path d="M18.8 11.2C18.4 10.6 17.7 10.2 16.8 10.2C15.8 10.2 15.1 10.5 14.6 11C14.1 11.5 13.9 12.1 13.9 12.8C13.9 13.5 14.2 14.1 14.7 14.5C15.2 14.9 16 15.3 17.1 15.6C18.1 16 18.8 16.4 19.3 16.9C19.7 17.4 20 18.1 20 18.9C20 19.9 19.6 20.7 18.8 21.3C18 21.8 16.9 22.1 15.5 22.1C14.3 22.1 13.2 21.8 12.3 21.2L13 19.6C13.8 20.1 14.6 20.4 15.6 20.4C16.3 20.4 17 20.2 17.4 19.8C17.9 19.4 18.1 18.9 18.1 18.3C18.1 17.7 17.9 17.2 17.5 16.8C17.1 16.4 16.3 16.1 15.3 15.7C14.2 15.3 13.4 14.8 12.9 14.2C12.4 13.6 12.1 12.8 12.1 11.9C12.1 10.9 12.5 10 13.3 9.4C14.1 8.8 15.2 8.5 16.6 8.5C17.7 8.5 18.6 8.7 19.4 9.1L18.8 11.2Z" fill="#FFFFFF"/>
      </svg>
    );
  }
  if (norm.includes('next.js')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <path d="M14.95 16.65L8.4 8H7v8h1.4v-6.28l6.12 7.72c.16.2.39.31.64.31h.75a.93.93 0 0 0 .93-.93V8h-1.89v8.65z" fill="#FFFFFF"/>
      </svg>
    );
  }
  if (norm.includes('node.js') || norm === 'node') {
    return (
      <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true" focusable="false">
        <path fill="url(#node-grad-a)" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"/>
        <path fill="url(#node-grad-b)" d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"/>
        <path fill="url(#node-grad-c)" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"/>
        <defs>
          <linearGradient id="node-grad-a" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3F873F"/>
            <stop offset=".33" stopColor="#3F8B3D"/>
            <stop offset=".637" stopColor="#3E9638"/>
            <stop offset=".934" stopColor="#3DA92E"/>
            <stop offset="1" stopColor="#3DAE2B"/>
          </linearGradient>
          <linearGradient id="node-grad-b" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
            <stop offset=".138" stopColor="#3F873F"/>
            <stop offset=".402" stopColor="#52A044"/>
            <stop offset=".713" stopColor="#64B749"/>
            <stop offset=".908" stopColor="#6ABF4B"/>
          </linearGradient>
          <linearGradient id="node-grad-c" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
            <stop offset=".092" stopColor="#6ABF4B"/>
            <stop offset=".287" stopColor="#64B749"/>
            <stop offset=".598" stopColor="#52A044"/>
            <stop offset=".862" stopColor="#3F873F"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (norm.includes('firebase')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <path d="M4.6 17.5L7.3 1.1c.1-.4.5-.5.8-.2l3.4 6.3-6.9 10.3z" fill="#FFA000"/>
        <path d="M13.7 9.8L11.5 5.7c-.2-.4-.8-.4-.9 0L4.6 17.5l9.1-7.7z" fill="#F57C00"/>
        <path d="M12.9 21.8l7.6-4.3L16.2 3.6c-.2-.4-.8-.4-.9 0L4.6 17.5l7.3 4.1c.6.3 1.4.3 2 0z" fill="#FFCA28"/>
        <path d="M12.9 21.8c-.3.2-.7.2-1 0L4.6 17.5l-.2.2c-.3.3-.4.8-.1 1.1l7 7c.4.4 1 .4 1.4 0l7.6-7.6-7.6 3.6z" fill="#FFA000" opacity="0.3"/>
      </svg>
    );
  }
  if (norm.includes('vite')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <path d="M21.7 3.5L12.5 19.8c-.2.4-.8.4-1 0L2.3 3.5c-.3-.5.2-1.1.7-.9l9 3.5 9-3.5c.5-.2 1 .4.7.9z" fill="url(#vite-tech-grad)"/>
        <path d="M16.5 1.5L8.2 12.2l4.1.2-2.5 6.9 7.7-10.7-3.9-.3 2.9-6.8z" fill="#FFD814"/>
        <defs>
          <linearGradient id="vite-tech-grad" x1="2" y1="2" x2="22" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF"/>
            <stop offset="1" stopColor="#BD34FE"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (norm.includes('tailwind')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#38BDF8" aria-hidden="true" focusable="false">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
      </svg>
    );
  }
  if (norm.includes('flutter')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <path d="M14.3 2L4 12.3l3.2 3.2L20.7 2h-6.4z" fill="#42A5F5"/>
        <path d="M14.3 12.3L8.8 17.8 12 21l8.7-8.7h-6.4z" fill="#0D47A1"/>
        <path d="M11.2 15.4l2.4 2.4-2.4 2.4-2.4-2.4 2.4-2.4z" fill="#01579B"/>
        <path d="M20.7 21h-6.4l-3.1-3.2 3.1-3.2 6.4 6.4z" fill="#29B6F6"/>
      </svg>
    );
  }
  if (norm.includes('app store') || norm.includes('apple')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#FFFFFF" aria-hidden="true" focusable="false">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.05-.03.07-.42 1.44-1.38 2.82M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.01-.49 2.63-1.24z"/>
      </svg>
    );
  }
  if (norm.includes('google play')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <path d="M3.6 2.4C3.2 2.8 3 3.4 3 4.2v15.6c0 .8.2 1.4.6 1.8l9.4-9.8L3.6 2.4z" fill="#00E676"/>
        <path d="M16.4 8.2l-3.4 3.6 3.4 3.6 3.9-2.2c1.1-.6 1.1-1.7 0-2.3l-3.9-2.7z" fill="#FFD600"/>
        <path d="M3.6 21.6c.4.4 1.1.5 1.8.1l11-6.3-3.4-3.6-9.4 9.8z" fill="#FF3D00"/>
        <path d="M3.6 2.4L13 11.8l3.4-3.6L5.4 1.9C4.7 1.5 4 1.6 3.6 2.4z" fill="#00B0FF"/>
      </svg>
    );
  }
  if (norm.includes('figma')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E"/>
        <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262"/>
        <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF"/>
        <path d="M12 7h4a2.5 2.5 0 1 1 0 5h-4V7z" fill="#1ABCFE"/>
        <path d="M8 12h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#0ACF83"/>
        <path d="M8 17h4v2.5A2.5 2.5 0 0 1 8 22a2.5 2.5 0 0 1 0-5z" fill="#0ACF83"/>
      </svg>
    );
  }
  if (norm.includes('illustrator')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <rect width="24" height="24" rx="5" fill="#330000"/>
        <path d="M6 17.5l3.5-10.5h1.8L15 17.5h-1.8l-.8-2.6H8.3l-.8 2.6H6zm2.8-4.2h3.1l-1.5-4.8h-.1l-1.5 4.8zm8.6-4.9c-.6 0-1.1.4-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm-.8 9.1V10.8h1.7v6.7h-1.7z" fill="#FF9A00"/>
      </svg>
    );
  }
  if (norm.includes('photoshop')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <rect width="24" height="24" rx="5" fill="#001E36"/>
        <path d="M6.5 17.5V6.8h4.6c1.6 0 2.8.4 3.6 1.2.8.8 1.2 1.9 1.2 3.2s-.4 2.4-1.2 3.2c-.8.8-2 1.2-3.6 1.2H8.3v1.9H6.5zm1.8-3.5h2.8c1 0 1.8-.2 2.3-.7.5-.5.8-1.2.8-2.1s-.3-1.6-.8-2.1c-.5-.5-1.3-.7-2.3-.7H8.3v5.6zm10.9-1.3c-.6-.4-1.3-.7-2.1-.9-.8-.2-1.3-.5-1.6-.8-.3-.3-.4-.7-.4-1.2 0-.6.3-1 .8-1.4.5-.4 1.2-.6 2.1-.6.7 0 1.4.1 2 .4v1.6c-.6-.3-1.2-.4-1.8-.4-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.1.5.3.7.2.2.6.4 1.2.6.9.3 1.6.6 2 .9.5.4.7.9.7 1.5 0 .7-.3 1.3-.8 1.7-.5.4-1.3.6-2.3.6-.8 0-1.7-.2-2.4-.5v-1.7c.8.4 1.6.6 2.3.6.6 0 1.1-.1 1.4-.3.3-.2.5-.5.5-.9 0-.3-.1-.6-.3-.7-.2-.2-.6-.4-1.1-.6z" fill="#31A8FF"/>
      </svg>
    );
  }
  if (norm.includes('aws')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#FF9900" aria-hidden="true" focusable="false">
        <path d="M18.8 17.4c-2.4 1.8-5.8 2.7-8.8 2.7-4.2 0-8-1.6-10.9-4.2-.2-.2-.2-.5 0-.7.4-.4.8-.8 1.2-1.2.2-.2.5-.2.7 0 2.4 2 5.4 3.2 8.7 3.2 2.5 0 5.3-.8 7.3-2.3.3-.2.6 0 .8.2.3.4.6.8.9 1.3.2.3.1.7-.1.9z"/>
        <path d="M20.2 14.8c-.3-.4-1.9-.2-2.9-.1-.3 0-.4-.3-.2-.5.8-1.2 2.1-1.7 2.9-1.5.8.2 1.1 1.6.4 2.8-.5.9-1.2 1.6-1.5 1.7-.2.1-.4 0-.4-.2l.1-.9.6-1.3z"/>
        <path d="M12.7 6.3c-.3 0-.5.2-.5.5v7.4c0 .3.2.5.5.5h1.2c.3 0 .5-.2.5-.5V6.8c0-.3-.2-.5-.5-.5h-1.2z"/>
      </svg>
    );
  }
  if (norm.includes('cloudflare')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#F38020" aria-hidden="true" focusable="false">
        <path d="M18.6 10.3c-.4-3.1-3.1-5.5-6.3-5.5-2.7 0-5 1.7-5.9 4.1C6 9 5.5 9 5 9.1 2.8 9.5 1.1 11.4 1 13.7c-.1 2.6 1.9 4.8 4.5 4.9h12.8c2.6 0 4.7-2.1 4.7-4.7 0-2.3-1.7-4.2-3.9-4.5-.2.3-.3.6-.5.9z"/>
      </svg>
    );
  }
  if (norm.includes('github')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    );
  }
  if (norm.includes('docker')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#2496ED" aria-hidden="true" focusable="false">
        <path d="M13.9 8.2h2.2v2.1h-2.2V8.2zm-2.7 0h2.2v2.1h-2.2V8.2zm-2.7 0h2.2v2.1H8.5V8.2zm-2.7 0H8v2.1H5.8V8.2zm5.4-2.6h2.2v2.1h-2.2V5.6zm-2.7 0h2.2v2.1H8.5V5.6zm-2.7 0H8v2.1H5.8V5.6zm8.1 0h2.2v2.1h-2.2V5.6zm2.7 2.6h2.2v2.1h-2.2V8.2zm8 3.2c-.4-.3-1.4-.4-2.1-.2-.4-.8-1.1-1.3-1.9-1.4-.2 0-.4 0-.6.1-.1-1.5-1-2.4-2.2-2.4h-.3V13H1.2c-.1.5-.2 1.1-.2 1.7 0 4.2 3.6 7.7 8.3 7.7 5.7 0 9.8-3.6 10.9-8.7.9-.1 1.8-.7 2.3-1.5.3-.4.3-.7.1-1.1z"/>
      </svg>
    );
  }
  if (norm.includes('snyk')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm-1 14.5l-3.5-3.5 1.41-1.41L11 13.67l5.09-5.09 1.41 1.41L11 16.5z" fill="#7C3AED"/>
      </svg>
    );
  }
  if (norm.includes('svg') || norm.includes('token') || norm.includes('design')) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
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

          {/* Right Column: High-Fidelity Visual Showcase */}
          <div className="service-hero-visual-card">
            <div className="visual-frame">
              <img 
                src={service.heroImage} 
                alt={`${service.title} Live Production Showcase`} 
                className="service-hero-img"
                loading="eager"
              />
              <div className="visual-overlay-badge">
                <span className="visual-badge-dot">●</span>
                <span>{service.heroBadge || 'Verified Client Deployment'}</span>
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

      {/* Tech Stack Gliding Marquee */}
      <section className="service-tech-section fade-in-up">
        <div className="tech-header-row">
          <h2 className="section-title">Engineering Tech Stack</h2>
          <span className="tech-sub-hint">Production Toolchain &amp; Frameworks</span>
        </div>
        <div 
          className="tech-marquee-wrapper"
          aria-label="Engineering Tech Stack Marquee"
        >
          {/* Track 1 */}
          <div className="tech-marquee-track">
            {[...service.techStack, ...service.techStack].map((techName, idx) => (
              <span key={`tech-t1-${techName}-${idx}`} className="service-tech-pill">
                <span className="tech-pill-icon">{renderTechLogo(techName)}</span>
                <span className="tech-pill-name">{techName}</span>
              </span>
            ))}
          </div>

          {/* Track 2 (Seamless Mirror for Infinite 60fps Loop) */}
          <div className="tech-marquee-track" aria-hidden="true">
            {[...service.techStack, ...service.techStack].map((techName, idx) => (
              <span key={`tech-t2-${techName}-${idx}`} className="service-tech-pill">
                <span className="tech-pill-icon">{renderTechLogo(techName)}</span>
                <span className="tech-pill-name">{techName}</span>
              </span>
            ))}
          </div>
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
