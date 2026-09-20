import { servicesData } from './ServiceDetail';
import './ServicesHub.css';

const serviceIcons: Record<string, JSX.Element> = {
  'web-development': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  'mobile-apps': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  ),
  'brand-design': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
      <path d="M2 2l7.586 7.586"></path>
      <circle cx="11" cy="11" r="2"></circle>
    </svg>
  ),
  'cloud-devops': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  )
};

export default function ServicesHub({ onSelectService }: { onSelectService: (slug: string) => void }) {
  const servicesList = Object.values(servicesData);

  return (
    <section className="services-hub-section" id="services">
      <div className="services-hero-header fade-in-up">
        <span className="services-badge">AGENCY SPECIALIZATIONS</span>
        <h2 className="services-title">Digital Engineering & Design Services</h2>
        <p className="services-subtitle">
          From custom SaaS applications and native mobile apps to corporate brand design and cloud DevOps infrastructure.
        </p>
      </div>

      <div className="services-hub-grid">
        {servicesList.map((service, idx) => (
          <div key={service.id} className={`service-hub-card fade-in-up stagger-${(idx % 4) + 1}`}>
            <div className="card-top-row">
              <div className="hub-card-icon-wrapper">
                {serviceIcons[service.id]}
              </div>
              <span className="hub-card-badge">{service.badge}</span>
            </div>

            <h3 className="hub-card-title">{service.title}</h3>
            <p className="hub-card-headline">{service.headline}</p>
            <p className="hub-card-summary">{service.summary}</p>

            <div className="hub-card-deliverables">
              <span className="deliverables-heading">Core Deliverables</span>
              <ul>
                {service.deliverables.slice(0, 3).map((item, idx) => (
                  <li key={idx}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={`#services/${service.slug}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = `#services/${service.slug}`;
                window.scrollTo({ top: 0, behavior: 'instant' });
                onSelectService(service.slug);
              }}
              className="view-service-btn"
            >
              <span>Explore Specifications</span>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
