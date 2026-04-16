import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -50]);

  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <motion.div className="container hero-layout" style={{ opacity, y }}>
        
        {/* Left Side Elements */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="hero-left"
        >
          <div className="hero-greeting" style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem', fontWeight: 500 }}>
            Hello, I'm Hans
          </div>
          <h1>
            A passionate web developer building powerful digital experiences.
          </h1>
          <p className="hero-desc" style={{ marginBottom: '1rem', maxWidth: '500px' }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', alignItems: 'flex-end', width: '100%' }}>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <a href="#work" className="btn btn-solid">
                See My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Let's Talk <MessageSquare size={18} />
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', textAlign: 'right', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <div>
                <div className="hero-metric-val" style={{ fontWeight: 600, color: '#fff', marginBottom: '0.2rem', lineHeight: 1 }}>10+</div>
                <div className="hero-metric-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Projects Built</div>
              </div>
              <div>
                <div className="hero-metric-val" style={{ fontWeight: 600, color: '#fff', marginBottom: '0.2rem', lineHeight: 1 }}>100%</div>
                <div className="hero-metric-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Client Satisfaction</div>
              </div>
              <div>
                <div className="hero-metric-val" style={{ fontWeight: 600, color: '#fff', marginBottom: '0.2rem', lineHeight: 1 }}>24h</div>
                <div className="hero-metric-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Response Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
