import React, { useState } from 'react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'all' | 'b2b' | 'ecommerce' | 'nonprofit';
  categoryLabel: string;
  tagline: string;
  image: string;
  tags: string[];
  metric: string;
  status: string;
  link?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'sedemson',
    title: 'Sedemson Stone',
    category: 'b2b',
    categoryLabel: 'B2B & Architectural Finishing',
    tagline: 'Premium Natural Stone Cladding & Architectural Finishes across Ghana.',
    image: '/sedemson_stone_hero.webp',
    tags: ['WaaS Architecture', 'Catalog Engine', 'Direct WhatsApp RFQs'],
    metric: '+340% Inbound WhatsApp RFQs',
    status: 'Live Production',
    link: '/sedemson-stone/index.html'
  },
  {
    id: 'emewear',
    title: 'Emewear Luxury',
    category: 'ecommerce',
    categoryLabel: 'Fashion & E-Commerce',
    tagline: 'Ghana-Made Luxury Ankara, Plus-Size Heritage Fashion & Global Delivery.',
    image: '/emewear/emewear_hero.webp',
    tags: ['Fashion WaaS', 'MoMo Automated Checkout', 'Automated Dispatch'],
    metric: 'Zero-Friction MoMo Checkout',
    status: 'Live Production',
    link: '/emewear/index.html'
  },
  {
    id: 'ansah-delali',
    title: 'Ansah Delali Foundation',
    category: 'nonprofit',
    categoryLabel: 'Non-Profit & Social Impact',
    tagline: 'Empowering Ghanaian tertiary students and underserved youth through mentorship, education & digital skills.',
    image: '/ansah-delali/cohort-group.webp',
    tags: ['Education WaaS', 'SkillUp 1.0 Outreach', 'Student Mentorship Network'],
    metric: 'SkillUp 1.0 Community Impact',
    status: 'Live Production',
    link: '/ansah-delali/index.html'
  },
  {
    id: 'susans-pastries',
    title: "Susan's Pastries",
    category: 'ecommerce',
    categoryLabel: 'Food & Beverage',
    tagline: "Artisanal Ghanaian pastries, custom celebration cakes & fresh fruit juices — order via WhatsApp.",
    image: '/susans-pastries/hero-banner.webp',
    tags: ['Food WaaS', 'WhatsApp Ordering', 'Menu Showcase'],
    metric: 'Direct WhatsApp Orders',
    status: 'Live Production',
    link: '/susans-pastries/index.html'
  },
  {
    id: 'paf',
    title: 'Potentials Aid Foundation',
    category: 'nonprofit',
    categoryLabel: 'Neuro-Clinical & EdTech PWA',
    tagline: 'Neuro-Clinical SLD screening, multidisciplinary specialist referrals & 10 inclusive skills academies across Ghana.',
    image: '/paf/hero-banner.jpg',
    tags: ['Installable Mobile PWA', 'SLD Clinical Screening', 'Specialist Network'],
    metric: '5-Condition SLD Screening App',
    status: 'Live Production',
    link: '/paf/index.html'
  }
];

const PROJECT_IMAGES: Record<string, string> = {
  'sedemson': '/sedemson_stone_hero.webp',
  'emewear': '/emewear/emewear_hero.webp',
  'ansah-delali': '/ansah-delali/cohort-group.webp',
  'susans-pastries': '/susans-pastries/hero-banner.webp',
  'paf': '/paf/hero-banner.jpg'
};

const getSafeProjectLink = (link?: string, title: string = ''): string => {
  if (link && link.startsWith('/')) {
    return link;
  }
  return `https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20learn%20more%20about%20the%20${encodeURIComponent(title)}%20case%20study.`;
};

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = React.useMemo(() => {
    const cleanSearch = searchQuery.replace(/[^\w\s-]/gi, '').toLowerCase().trim();
    return PROJECTS.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = !cleanSearch || 
                            p.title.toLowerCase().includes(cleanSearch) || 
                            p.tagline.toLowerCase().includes(cleanSearch) ||
                            p.categoryLabel.toLowerCase().includes(cleanSearch) ||
                            p.tags.some(t => t.toLowerCase().includes(cleanSearch));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section className="portfolio-section" id="work" style={{ padding: '3.5rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="portfolio-header fade-in-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="heading-luminance" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 850, letterSpacing: '-0.03em' }}>
          Featured <span className="cyan-luminance">Client Work</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.6rem', letterSpacing: '-0.01em', maxWidth: '640px', margin: '0.6rem auto 0', lineHeight: 1.6 }}>
          Real-world platforms and Website-as-a-Service solutions engineered for revenue growth and operational excellence.
        </p>
        {/* Unified Dropdown Filter & Search Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '2.1rem',
          }}
        >
          {/* Industry Category Dropdown */}
          <div style={{ position: 'relative', width: 'min(100%, 245px)' }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: 'absolute',
                left: '0.9rem',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>

            <select
              aria-label="Filter case studies by industry"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                width: '100%',
                background: activeCategory !== 'all' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                border: activeCategory !== 'all' ? '1px solid rgba(56, 189, 248, 0.45)' : '1px solid rgba(255, 255, 255, 0.14)',
                color: '#FFFFFF',
                padding: '0.55rem 2.3rem 0.55rem 2.25rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <option value="all" style={{ backgroundColor: '#0B0F19', color: '#FFFFFF' }}>
                All Case Studies ({PROJECTS.length})
              </option>
              <option value="b2b" style={{ backgroundColor: '#0B0F19', color: '#FFFFFF' }}>
                B2B &amp; Architectural ({PROJECTS.filter((p) => p.category === 'b2b').length})
              </option>
              <option value="ecommerce" style={{ backgroundColor: '#0B0F19', color: '#FFFFFF' }}>
                Fashion &amp; Retail ({PROJECTS.filter((p) => p.category === 'ecommerce').length})
              </option>
              <option value="nonprofit" style={{ backgroundColor: '#0B0F19', color: '#FFFFFF' }}>
                Social Impact / NGO ({PROJECTS.filter((p) => p.category === 'nonprofit').length})
              </option>
            </select>

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: 'absolute',
                right: '0.9rem',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: 'min(100%, 260px)' }}>
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: searchQuery ? '1px solid rgba(56, 189, 248, 0.45)' : '1px solid rgba(255, 255, 255, 0.14)',
                color: '#FFFFFF',
                padding: '0.55rem 2.1rem 0.55rem 2.25rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                outline: 'none',
                width: '100%',
                transition: 'border-color 0.2s ease',
              }}
            />
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '0.7rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  fontSize: '0.75rem',
                  lineHeight: 1,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {(activeCategory !== 'all' || searchQuery.trim() !== '') && (
          <div
            style={{
              marginTop: '0.85rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
            }}
          >
            <span>
              Showing <strong style={{ color: '#FFFFFF' }}>{filteredProjects.length}</strong> of {PROJECTS.length} case studies
            </span>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#38BDF8',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'underline',
              }}
            >
              Reset filters
            </button>
          </div>
        )}
</div>
      
      <div className="portfolio-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', 
        gap: '2rem', 
        width: '100%' 
      }}>
        {filteredProjects.map((proj, idx) => (
          <div 
            key={proj.id} 
            className={`portfolio-card neon-border fade-in-up stagger-${(idx % 4) + 1}`} 
            style={{ 
              borderRadius: '20px', 
              overflow: 'hidden', 
              background: 'rgba(13, 18, 29, 0.94)',
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
                  src={PROJECT_IMAGES[proj.id] || ''} 
                  alt={proj.title} 
                  loading="lazy"
                  decoding="async"
                  width="380"
                  height="220"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }} 
                />
              </div>

              <div className="card-content" style={{ padding: '1.6rem' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 750, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--cyan-glow)', marginBottom: '0.35rem' }}>
                  {proj.categoryLabel}
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 850, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{proj.title}</h3>
                
                <p className="tagline" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.2rem', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
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
              <span className="view-link" style={{ color: 'var(--text-muted)', cursor: 'default', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '0.82rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80' }} />
                {proj.status}
              </span>

              <a 
                href={getSafeProjectLink(proj.link, proj.title)}
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

