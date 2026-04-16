import React from 'react';
import BackgroundScroll from './components/BackgroundScroll';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <BackgroundScroll />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
