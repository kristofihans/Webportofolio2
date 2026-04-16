import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container hero-layout">
        
        {/* Left Side Elements */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="hero-left"
        >
          <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 500 }}>
            Hello, I'm Hans
          </div>
          <h1>
            A passionate web developer building powerful digital experiences.
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '1rem', maxWidth: '500px' }}>
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
