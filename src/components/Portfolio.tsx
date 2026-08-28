import React, { useState } from 'react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const projects = [
    {
      id: 'sedemson',
      title: 'Sedemson Stone',
      category: 'b2b',
      categoryLabel: 'Natural Stone & B2B',
      tagline: 'Premium Natural Stone Finishes & Architectural Cladding',
      image: '/sedemson_stone_hero.png',
      tags: ['WaaS', 'B2B', 'Cladding'],
      status: 'Launching Soon'
    },
    {
      id: 'emewear',
      title: 'Emewear',
      category: 'fashion',
      categoryLabel: 'Fashion & E-Commerce',
      tagline: 'Ghana-Made Plus-Size Ankara & Luxury Heritage Fashion',
      image: '/emewear/emewear_hero.jpg',
      tags: ['Fashion WaaS', 'E-Commerce', '3D Runway'],
      status: 'Launching Soon'
    }
  ];

  const filteredProjects = React.useMemo(() => {
    const cleanSearch = searchQuery.replace(/[^\w\s-]/gi, '').toLowerCase().trim();
    if (!cleanSearch && activeCategory === 'all') return projects;
    return projects.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = !cleanSearch || 
                            p.title.toLowerCase().includes(cleanSearch) || 
                            p.tagline.toLowerCase().includes(cleanSearch);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section className="portfolio-section" id="work" style={{ padding: '4rem 1rem' }}>
      <div className="portfolio-header fade-in-up" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="badge-pill" style={{ marginBottom: '1rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F8FAFC' }} />
          CLIENT CASE STUDIES
        </span>
        <h2 className="heading-luminance" style={{ fontSize: 'clamp(1.7rem, 5vw, 2.4rem)', fontWeight: 850, marginTop: '0.8rem' }}>
          Our <span className="cyan-luminance">Portfolio Showcase</span>
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '1.05rem', marginTop: '0.5rem', letterSpacing: '-0.01em' }}>
          Real-world WaaS implementations engineered for client growth.
        </p>

        {/* Filter Tabs & Search Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          marginTop: '2rem',
          maxWidth: '850px',
          margin: '2rem auto 0'
        }}>
          <button 
            onClick={() => setActiveCategory('all')}
            className={activeCategory === 'all' ? 'btn-primary' : 'btn-secondary'}
            style={{
              padding: '0.45rem 1.2rem',
              borderRadius: '50px',
              fontSize: '0.85rem'
            }}
          >
            All Projects ({projects.length})
          </button>

          <button 
            onClick={() => setActiveCategory('b2b')}
            className={activeCategory === 'b2b' ? 'btn-primary' : 'btn-secondary'}
            style={{
              padding: '0.45rem 1.2rem',
              borderRadius: '50px',
              fontSize: '0.85rem'
            }}
          >
            Natural Stone & B2B (1)
          </button>

          <button 
            onClick={() => setActiveCategory('fashion')}
            className={activeCategory === 'fashion' ? 'btn-primary' : 'btn-secondary'}
            style={{
              padding: '0.45rem 1.2rem',
              borderRadius: '50px',
              fontSize: '0.85rem'
            }}
          >
            Fashion & E-Commerce (1)
          </button>

          {/* Search Box */}
          <input 
            type="text" 
            placeholder="🔍 Search portfolio..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'var(--text-main)',
              padding: '0.5rem 1.2rem',
              borderRadius: '30px',
              fontSize: '0.85rem',
              outline: 'none',
              width: 'min(100%, 220px)'
            }}
          />
        </div>
      </div>
      
      <div className="carousel-container" style={{ padding: '0 0.5rem' }}>
        <div className="carousel-track" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id} 
              className="portfolio-card neon-border fade-in-up" 
              style={{ width: '100%', maxWidth: '380px', borderRadius: '16px', overflow: 'hidden', background: 'var(--bg-surface)' }}
            >
              <div className="card-image-placeholder" style={{ padding: 0, height: '220px', overflow: 'hidden' }}>
                <img 
                  src={proj.id === 'sedemson-stone' ? '/sedemson_stone_hero.png' : '/emewear/emewear_hero.jpg'} 
                  alt={proj.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }} 
                />
              </div>
              <div className="card-content" style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 800 }}>{proj.title}</h3>
                  <span className="badge-pill cyan" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>
                    {proj.categoryLabel}
                  </span>
                </div>
                
                <p className="tagline" style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.2rem', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
                  {proj.tagline}
                </p>
                
                <div className="tags" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="tag" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#CBD5E1', padding: '0.25rem 0.6rem', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>
                
                <span className="view-link" style={{ color: '#94A3B8', cursor: 'default', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, fontSize: '0.85rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-accent)' }} />
                  {proj.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
