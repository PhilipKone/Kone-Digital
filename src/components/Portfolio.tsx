import React, { useState } from 'react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'all' | 'b2b' | 'ecommerce';
  categoryLabel: string;
  tagline: string;
  image: string;
  tags: string[];
  metric: string;
  status: string;
  link?: string;
}

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const projects: ProjectItem[] = [
    {
      id: 'sedemson',
      title: 'Sedemson Stone',
      category: 'b2b',
      categoryLabel: 'B2B & Architectural Finishing',
      tagline: 'Premium Natural Stone Cladding & Architectural Finishes across Ghana.',
      image: '/sedemson_stone_hero.png',
      tags: ['WaaS Architecture', 'Catalog Engine', 'Direct WhatsApp RFQs'],
      metric: '+340% Inbound WhatsApp RFQs',
      status: 'Live Production'
    },
    {
      id: 'emewear',
      title: 'Emewear Luxury',
      category: 'ecommerce',
      categoryLabel: 'Fashion & E-Commerce',
      tagline: 'Ghana-Made Luxury Ankara, Plus-Size Heritage Fashion & Global Delivery.',
      image: '/emewear/emewear_hero.jpg',
      tags: ['Fashion WaaS', 'MoMo Automated Checkout', 'Automated Dispatch'],
      metric: 'Zero-Friction MoMo Checkout',
      status: 'Live Production'
    }
  ];

  const filteredProjects = React.useMemo(() => {
    const cleanSearch = searchQuery.replace(/[^\w\s-]/gi, '').toLowerCase().trim();
    return projects.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = !cleanSearch || 
                            p.title.toLowerCase().includes(cleanSearch) || 
                            p.tagline.toLowerCase().includes(cleanSearch) ||
                            p.categoryLabel.toLowerCase().includes(cleanSearch) ||
                            p.tags.some(t => t.toLowerCase().includes(cleanSearch));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory, projects]);

  return (
    <section className="portfolio-section" id="work" style={{ padding: '3.5rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="portfolio-header fade-in-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="badge-pill" style={{ marginBottom: '1rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00F0FF' }} />
          PRODUCTION CASE STUDIES
        </span>
        <h2 className="heading-luminance" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 850, marginTop: '0.8rem', letterSpacing: '-0.03em' }}>
          Featured <span className="cyan-luminance">Client Work</span>
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '1.05rem', marginTop: '0.6rem', letterSpacing: '-0.01em', maxWidth: '640px', margin: '0.6rem auto 0', lineHeight: 1.6 }}>
          Real-world platforms and Website-as-a-Service solutions engineered for revenue growth and operational excellence.
        </p>

        {/* Filter Tabs & Search Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '0.8rem', 
          flexWrap: 'wrap', 
          marginTop: '2.2rem'
        }}>
          <button 
            onClick={() => setActiveCategory('all')}
            className={activeCategory === 'all' ? 'btn-primary' : 'btn-secondary'}
            style={{
              padding: '0.45rem 1.15rem',
              borderRadius: '50px',
              fontSize: '0.84rem'
            }}
          >
            All Case Studies
          </button>

          <button 
            onClick={() => setActiveCategory('b2b')}
            className={activeCategory === 'b2b' ? 'btn-primary' : 'btn-secondary'}
            style={{
              padding: '0.45rem 1.15rem',
              borderRadius: '50px',
              fontSize: '0.84rem'
            }}
          >
            B2B & Architectural
          </button>

          <button 
            onClick={() => setActiveCategory('ecommerce')}
            className={activeCategory === 'ecommerce' ? 'btn-primary' : 'btn-secondary'}
            style={{
              padding: '0.45rem 1.15rem',
              borderRadius: '50px',
              fontSize: '0.84rem'
            }}
          >
            Fashion & Retail
          </button>

          {/* Search Box */}
          <div style={{ position: 'relative', width: 'min(100%, 240px)' }}>
            <input 
              type="text" 
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                padding: '0.48rem 1.1rem 0.48rem 2.2rem',
                borderRadius: '30px',
                fontSize: '0.85rem',
                outline: 'none',
                width: '100%',
                transition: 'border-color 0.2s ease'
              }}
            />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="portfolio-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', 
        gap: '2rem', 
        width: '100%' 
      }}>
        {filteredProjects.map((proj) => (
          <div 
            key={proj.id} 
            className="portfolio-card neon-border fade-in-up" 
            style={{ 
              borderRadius: '20px', 
              overflow: 'hidden', 
              background: 'rgba(13, 18, 29, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)'
            }}
          >
            <div>
              <div className="card-image-placeholder" style={{ padding: 0, height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }} 
                />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <span className="badge-pill cyan" style={{ fontSize: '0.72rem', padding: '0.25rem 0.65rem', backdropFilter: 'blur(8px)' }}>
                    {proj.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="card-content" style={{ padding: '1.6rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 850, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{proj.title}</h3>
                
                <p className="tagline" style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.2rem', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
                  {proj.tagline}
                </p>

                {/* Impact Metric Capsule */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(0, 240, 255, 0.06)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                  padding: '0.5rem 0.85rem',
                  borderRadius: '10px',
                  marginBottom: '1.3rem'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                  <span style={{ fontSize: '0.82rem', fontWeight: 750, color: '#38BDF8' }}>
                    {proj.metric}
                  </span>
                </div>
                
                <div className="tags" style={{ display: 'flex', gap: '0.45rem', marginBottom: '1.4rem', flexWrap: 'wrap' }}>
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="tag" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#CBD5E1', padding: '0.25rem 0.6rem', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: '0 1.6rem 1.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem' }}>
              <span className="view-link" style={{ color: '#94A3B8', cursor: 'default', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '0.82rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80' }} />
                {proj.status}
              </span>

              <a 
                href={proj.link || `https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20learn%20more%20about%20the%20${encodeURIComponent(proj.title)}%20case%20study.`}
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: '#F8FAFC',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Explore</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
