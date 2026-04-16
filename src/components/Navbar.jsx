import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRadius: '100px',
      padding: '12px 32px',
      display: 'flex',
      gap: '32px',
      zIndex: 100,
      width: 'max-content'
    }}>
      <a href="#hero" className="nav-link">Home</a>
      <a href="#services" className="nav-link">Services</a>
      <a href="#work" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  );
}
