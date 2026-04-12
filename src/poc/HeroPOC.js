import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './HeroPOC.css';

const HeroPOC = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Floating images from Unsplash
  const floatingImages = [
    'https://images.unsplash.com/photo-1762951566493-a275fc9f9f48?w=400',
    'https://images.unsplash.com/photo-1772037441269-947195bb80f0?w=400',
    'https://images.unsplash.com/photo-1764204295508-37d89e699266?w=400',
    'https://images.unsplash.com/photo-1765830287239-43f592de98a8?w=400',
    'https://images.unsplash.com/photo-1658053283477-b985256569bc?w=400',
    'https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=400',
    'https://images.unsplash.com/photo-1760536928911-40831dacdbc3?w=400',
    'https://images.unsplash.com/photo-1487523117656-d5d117ad47c5?w=400',
    'https://images.unsplash.com/photo-1771942202908-6ce86ef73701?w=400',
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400',
    'https://images.unsplash.com/photo-1763568258266-3794097e5837?w=400',
    'https://images.unsplash.com/photo-1643951391300-8c303644b40f?w=400'
  ];

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="hero-poc" ref={containerRef} data-theme={theme}>
      {/* Floating Images Background */}
      <div className="floating-container">
        {floatingImages.map((img, index) => {
          const angle = (index / floatingImages.length) * Math.PI * 2;
          const radius = 300 + (index % 3) * 100;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={index}
              className="floating-card"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: x + mousePosition.x * 50,
                y: y + mousePosition.y * 50,
                rotateX: mousePosition.y * 10,
                rotateY: mousePosition.x * 10,
                rotateZ: Math.sin(Date.now() / 1000 + index) * 5
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                type: 'spring',
                stiffness: 50,
                damping: 20
              }}
              style={{
                left: '50%',
                top: '50%'
              }}
            >
              <img src={img} alt={`floating-${index}`} loading="lazy" />
            </motion.div>
          );
        })}
      </div>

      {/* Center Content with Glass Morphism */}
      <div className="hero-content">
        <motion.div
          className="glass-panel"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Siddhant Paithanpagare
          </motion.h1>
          <motion.p
            className="profession"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Software developer
          </motion.p>
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Your Business Has a Story. We Give It a Stage.
          </motion.p>
        </motion.div>
      </div>

      {/* Theme Toggle */}
      <div className="theme-toggle" onClick={toggleTheme}>
        <div className="toggle-icon">
          {theme === 'dark' ? '☀️' : '🌙'}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </div>
  );
};

export default HeroPOC;
