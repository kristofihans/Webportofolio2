import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const scrollRef = useRef(null);

  const projects = [
    {
      url: 'https://orca-app-p3izu.ondigitalocean.app/',
      title: 'Digital Ocean App'
    },
    {
      url: 'https://kristofihans.github.io/oanagalarhitect/#/',
      title: 'Oana Galarhitect'
    },
    {
      url: 'https://kristofihans.github.io/FunIce/',
      title: 'Fun Ice'
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 style={{ marginBottom: '4rem', textAlign: 'center' }}>Selected Projects</h2>
          
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            
            <button 
              onClick={() => scroll('left')} 
              className="btn btn-outline" 
              style={{ 
                position: 'absolute', 
                left: '10px', 
                zIndex: 20, 
                padding: '16px', 
                borderRadius: '50%',
                background: 'rgba(5, 5, 5, 0.8)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <ChevronLeft size={32} />
            </button>

            <div 
              ref={scrollRef}
              className="hide-scrollbar"
              style={{ 
                display: 'flex', 
                width: '100%',
                overflowX: 'auto', 
                scrollSnapType: 'x mandatory',
                paddingBottom: '2rem',
                scrollBehavior: 'smooth'
              }}
            >
              {projects.map((proj, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    flex: '0 0 100%', 
                    scrollSnapAlign: 'start',
                    padding: '0 1rem'
                  }}
                >
                  <div 
                    className="glass-card" 
                    style={{ 
                      maxWidth: '1000px',
                      margin: '0 auto',
                      padding: '24px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '1.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 500 }}>{proj.title}</h3>
                      <a 
                        href={proj.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline"
                        style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                      >
                        Visit Site <ExternalLink size={16} />
                      </a>
                    </div>
                    
                    <div className="project-iframe-container" style={{ 
                      position: 'relative', 
                      width: '100%', 
                      background: 'var(--bg-color)', 
                      borderRadius: '12px', 
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                      <iframe 
                        src={proj.url} 
                        title={proj.title}
                        scrolling="no"
                        style={{ 
                          position: 'absolute', 
                          top: 0, 
                          left: 0, 
                          width: '100%', 
                          height: '100%', 
                          border: 'none',
                          background: '#fff',
                          pointerEvents: 'none'
                        }}
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scroll('right')} 
              className="btn btn-outline" 
              style={{ 
                position: 'absolute', 
                right: '10px', 
                zIndex: 20, 
                padding: '16px', 
                borderRadius: '50%',
                background: 'rgba(5, 5, 5, 0.8)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <ChevronRight size={32} />
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
