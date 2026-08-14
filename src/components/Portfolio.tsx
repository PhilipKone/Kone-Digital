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
      status: 'Launching Soon 🚀'
    },
    {
      id: 'emewear',
      title: 'Emewear',
      category: 'fashion',
      categoryLabel: 'Fashion & E-Commerce',
      tagline: 'Ghana-Made Plus-Size Ankara & Luxury Heritage Fashion',
      image: '/emewear/emewear_hero.jpg',
      tags: ['Fashion WaaS', 'E-Commerce', '3D Runway'],
      status: 'Launching Soon 🚀'
    }
  ];

  const filteredProjects = projects.filter(p => {
    const cleanSearch = searchQuery.replace(/[^\w\s-]/gi, '').toLowerCase();
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(cleanSearch) || 
                          p.tagline.toLowerCase().includes(cleanSearch);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="portfolio-section" id="work" style={{ padding: '4rem 1rem' }}>
      <div className="portfolio-header fade-in-up" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2>Our <span className="neon-text">Portfolio Showcase</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
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
            className="neon-border"
            style={{
              background: activeCategory === 'all' ? 'var(--cyan-glow)' : 'var(--bg-surface)',
              color: activeCategory === 'all' ? '#090B10' : 'var(--text-main)',
              border: '1px solid var(--cyan-glow)',
              padding: '0.5rem 1.4rem',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            All Projects ({projects.length})
          </button>

          <button 
            onClick={() => setActiveCategory('b2b')}
            className="neon-border"
            style={{
              background: activeCategory === 'b2b' ? 'var(--cyan-glow)' : 'var(--bg-surface)',
              color: activeCategory === 'b2b' ? '#090B10' : 'var(--text-main)',
              border: '1px solid var(--cyan-glow)',
              padding: '0.5rem 1.4rem',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            Natural Stone & B2B (1)
          </button>

          <button 
            onClick={() => setActiveCategory('fashion')}
            className="neon-border"
            style={{
              background: activeCategory === 'fashion' ? 'var(--cyan-glow)' : 'var(--bg-surface)',
              color: activeCategory === 'fashion' ? '#090B10' : 'var(--text-main)',
              border: '1px solid var(--cyan-glow)',
              padding: '0.5rem 1.4rem',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
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
              width: '200px'
            }}
          />
        </div>
      </div>
      
      <div className="carousel-container">
        <div className="carousel-track" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: '2.5rem', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id} 
              className="portfolio-card neon-border fade-in-up" 
              style={{ width: '380px', borderRadius: '16px', overflow: 'hidden', background: 'var(--bg-surface)' }}
            >
              <div className="card-image-placeholder" style={{ padding: 0, height: '220px', overflow: 'hidden' }}>
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }} 
                />
              </div>
              <div className="card-content" style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>{proj.title}</h3>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(0, 255, 255, 0.1)', color: 'var(--cyan-glow)', padding: '0.2rem 0.6rem', borderRadius: '6px', fontWeight: 700 }}>
                    {proj.categoryLabel}
                  </span>
                </div>
                
                <p className="tagline" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.2rem', lineHeight: 1.5 }}>
                  {proj.tagline}
                </p>
                
                <div className="tags" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="tag" style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.78rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
                
                <span className="view-link" style={{ color: '#8b949e', cursor: 'not-allowed', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontWeight: 700 }}>
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
