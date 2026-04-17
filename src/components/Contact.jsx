import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, Languages, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="glass-card glass-card-solid" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '60px 40px' }}>
            <h2 style={{ marginBottom: '1rem' }}>Let's Work Together</h2>
            <p style={{ marginBottom: '3rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '500px', display: 'inline-block' }}>
              Ready to launch your next project? Have a question? Message me directly on WhatsApp — I respond fast.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <Globe size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>Location</div>
                  <div style={{ fontWeight: 500 }}>Available Worldwide</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>Response Time</div>
                  <div style={{ fontWeight: 500 }}>Within 24 hours</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <Languages size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>Languages</div>
                  <div style={{ fontWeight: 500 }}>EN / DE</div>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/40775139223" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-solid"
              style={{ width: '100%', maxWidth: '300px', fontSize: '1.1rem', padding: '16px' }}
            >
              <MessageCircle size={20} /> Whatsapp me
            </a>
          </div>
        </motion.div>
      </div>

      <footer style={{ position: 'absolute', bottom: '2rem', width: '100%', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} Hans. All rights reserved.
      </footer>
    </section>
  );
}
