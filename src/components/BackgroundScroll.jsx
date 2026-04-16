import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const frameCount = 120;

export default function BackgroundScroll() {
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const imagesRef = useRef([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const promises = [];
      for (let i = 1; i <= frameCount; i++) {
        const promise = new Promise((resolve) => {
          const img = new Image();
          const frameIndex = i.toString().padStart(3, '0');
          img.src = `${import.meta.env.BASE_URL}frames/ezgif-frame-${frameIndex}.jpg`;
          img.onload = () => {
            imagesRef.current[i - 1] = img;
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load frame ${frameIndex}`);
            resolve(); // Resolve anyway to proceed
          };
        });
        promises.push(promise);
      }
      
      await Promise.all(promises);
      setLoaded(true);
      requestAnimationFrame(() => renderFrame(0));
    };
    loadImages();
  }, []);

  const renderFrame = (index) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Match window visual resolution
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const img = imagesRef.current[index];
    
    // Scale image to cover entire canvas (object-fit: cover equivalent)
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth, drawHeight;
    let offsetX = 0, offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }
    
    // Apply darkening overlay to allow white text readability
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Setting global alpha to blend image over black bg, or applying filter
    ctx.filter = 'brightness(0.35)'; // Darken image
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.filter = 'none';
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded) return;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(latest * frameCount)
    );
    renderFrame(frameIndex);
  });

  useEffect(() => {
    const onResize = () => {
      if (!loaded) return;
      const latest = scrollYProgress.get();
      const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
      renderFrame(frameIndex);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [loaded, scrollYProgress]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#050505', zIndex: -1 }} />
    </div>
  );
}
