import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hiddenOnInit = !isScrolled;

  return (
    <nav style={{
      position: 'fixed',
      top: '30px',
      left: '50%',
      transform: hiddenOnInit ? 'translate(-50%, -20px)' : 'translate(-50%, 0)',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRadius: '100px',
      padding: '12px 32px',
      display: 'flex',
      gap: '32px',
      zIndex: 100,
      width: 'max-content',
      opacity: hiddenOnInit ? 0 : 1,
      pointerEvents: hiddenOnInit ? 'none' : 'auto',
      transition: 'opacity 0.6s ease, transform 0.6s ease'
    }}>
      <a href="#hero" className="nav-link">Home</a>
      <a href="#services" className="nav-link">Services</a>
      <a href="#work" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  );
}
