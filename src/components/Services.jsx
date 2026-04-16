import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, LayoutTemplate } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code2 size={24} />,
      title: 'Website Design & Development',
      description: 'Custom-built websites tailored to your brand. From sleek landing pages to full multi-page business sites — responsive, fast, and built to convert.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Website Maintenance',
      description: "Keep your site fresh and secure. Monthly content updates, plugin management, backups, and uptime monitoring — I've got you covered."
    },
    {
      icon: <LayoutTemplate size={24} />,
      title: 'Landing Pages',
      description: 'High-converting single-page experiences for campaigns, product launches, or lead generation. Optimized for mobile and designed to impress.'
    }
  ];

  return (
    <section id="services" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 style={{ marginBottom: '4rem', textAlign: 'center' }}>Services</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((svc, idx) => (
              <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  {svc.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.5rem' }}>{svc.title}</h3>
                <p style={{ fontSize: '0.95rem' }}>{svc.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
