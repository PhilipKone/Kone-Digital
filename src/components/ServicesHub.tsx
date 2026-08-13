import { servicesData } from './ServiceDetail';
import './ServicesHub.css';

export default function ServicesHub({ onSelectService }: { onSelectService: (slug: string) => void }) {
  const servicesList = Object.values(servicesData);

  return (
    <section className="services-hub-section" id="services">
      <div className="services-hero-header">
        <span className="services-badge">🚀 AGENCY SPECIALIZATIONS</span>
        <h2 className="services-title">Digital Engineering & Design Services</h2>
        <p className="services-subtitle">
          From custom SaaS applications and native mobile apps to corporate brand design and cloud DevOps infrastructure.
        </p>
      </div>

      <div className="services-hub-grid">
        {servicesList.map((service) => (
          <div key={service.id} className="service-hub-card">
            <div className="card-top-row">
              <span className="hub-card-icon">{service.icon}</span>
              <span className="hub-card-badge">{service.badge}</span>
            </div>

            <h3 className="hub-card-title">{service.title}</h3>
            <p className="hub-card-headline">{service.headline}</p>
            <p className="hub-card-summary">{service.summary.slice(0, 140)}...</p>

            <div className="hub-card-deliverables">
              <strong>Includes:</strong>
              <ul>
                {service.deliverables.slice(0, 2).map((item, idx) => (
                  <li key={idx}>✓ {item.title}</li>
                ))}
              </ul>
            </div>

            <a 
              href={`#services/${service.slug}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = `#services/${service.slug}`;
                onSelectService(service.slug);
              }}
              className="view-service-btn"
            >
              <span>Explore Dedicated Page & Specifications</span>
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
