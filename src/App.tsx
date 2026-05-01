import React, { useEffect, useRef } from 'react';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = containerRef.current?.querySelectorAll('.fade-in-up') || [];
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="hub-container" ref={containerRef}>
      <header className="hub-header fade-in-up">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/kone-digital-logo.svg" alt="Kone Digital Logo" className="logo-icon neon-logo" style={{ height: '2.5rem', width: 'auto' }} />
          <span className="logo-text">KONE <span className="neon-text">DIGITAL</span></span>
        </div>
        <nav className="hub-nav">
          <a href="#work">Our Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hub-hero fade-in-up">
        <h1 className="gold-text">Putting Accra's Best<br/>Businesses Online.</h1>
        <p>Traditional marketing ends at the flyer. We build dedicated, high-performance 'Digital Flyers' that drive customers straight to your WhatsApp. Zero maintenance, maximum growth.</p>
        <button className="neon-btn neon-border">Request a Consultation</button>
      </section>

      <Portfolio />
      
      <Pricing />

    </div>
  );
}

export default App;
