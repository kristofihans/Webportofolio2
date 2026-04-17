import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ArrowDown } from 'lucide-react';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hideContentOnInit = !isScrolled;

  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      
      {/* Scroll Indicator */}
      <div 
        style={{
          position: 'fixed',
          bottom: '5vh',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: hideContentOnInit ? 1 : 0,
          pointerEvents: 'none',
          transition: 'opacity 0.5s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 50
        }}
      >
        <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={20} color="rgba(255,255,255,0.7)" />
        </motion.div>
      </div>

      <div 
        className="container hero-layout"
        style={{
          opacity: hideContentOnInit ? 0 : 1,
          transform: hideContentOnInit ? 'translateY(20px)' : 'translateY(0)',
          pointerEvents: hideContentOnInit ? 'none' : 'auto',
          transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
      >
        
        {/* Left Side Elements */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="hero-left"
        >
          <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', marginBottom: '1rem', fontWeight: 500 }}>
            Hello, I'm Hans
          </div>
          <h1>
            A passionate web developer building powerful digital experiences.
          </h1>
          <p style={{ fontSize: '1.05rem', marginBottom: '1rem', maxWidth: '500px' }}>
            — clean code, bold design, real results.
          </p>
        </motion.div>

        {/* Right Side Elements (Buttons & Metrics) */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="hero-right"
        >
          <div className="hero-metrics-container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', width: '100%' }}>
            
            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#work" className="btn btn-solid">
                See My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Let's Talk <MessageSquare size={18} />
              </a>
            </div>

            <div className="hero-metrics-row" style={{ display: 'flex', flexDirection: 'row', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem', lineHeight: 1 }}>10+</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Projects Built</div>
              </div>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem', lineHeight: 1 }}>100%</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Client Satisfaction</div>
              </div>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem', lineHeight: 1 }}>24h</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Response Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
