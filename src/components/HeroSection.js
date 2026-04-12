import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import GlassSurface from './GlassSurface';

const FloatingImage = ({ img, index, totalImages, smoothMouseX, smoothMouseY }) => {
  const angle = (index / totalImages) * Math.PI * 2;
  const radius = 200 + (index % 3) * 80;
  const baseX = Math.cos(angle) * radius;
  const baseY = Math.sin(angle) * radius;
  
  // Create smooth transforms that combine base position with mouse offset
  const x = useTransform(smoothMouseX, (latest) => baseX + latest * 30);
  const y = useTransform(smoothMouseY, (latest) => baseY + latest * 30);
  
  return (
    <motion.div
      className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.8, delay: index * 0.05 },
        scale: { duration: 0.8, delay: index * 0.05 },
      }}
      style={{
        left: '50%',
        top: '50%',
        x,
        y,
        willChange: 'transform'
      }}
    >
      <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
    </motion.div>
  );
};

const FloatingCosmosHero = () => {
  const containerRef = useRef(null);
  
  // Use Framer Motion's useMotionValue for ultra-smooth animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Apply spring physics for smooth interpolation - similar to CustomCursor
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

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
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Normalize mouse position to -1 to 1 range
        const normalizedX = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const normalizedY = (e.clientY - rect.top - rect.height / 2) / rect.height;
        
        // Update motion values directly (no React state, no re-renders)
        mouseX.set(normalizedX);
        mouseY.set(normalizedY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative h-full" data-testid="hero-floating-cosmos">
      {floatingImages.map((img, index) => (
        <FloatingImage
          key={index}
          img={img}
          index={index}
          totalImages={floatingImages.length}
          smoothMouseX={smoothMouseX}
          smoothMouseY={smoothMouseY}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden starfield noise-overlay">
      {/* Ambient gradient background - Silver tones */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(900px circle at 20% 10%, rgba(200,200,200,0.15), transparent 55%), radial-gradient(700px circle at 80% 20%, rgba(150,150,150,0.12), transparent 60%), radial-gradient(800px circle at 60% 90%, rgba(180,180,180,0.10), transparent 55%)'
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <GlassSurface className="space-y-6">
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight silver-gradient pb-2"
                  data-testid="hero-headline"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{
                    display: 'inline-block',
                    overflow: 'visible'
                  }}
                >
                  Siddhant Paithanpagare
                </motion.h1>
                
                <motion.p 
                  className="text-base md:text-lg font-medium text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Software developer
                </motion.p>
                
                <motion.p 
                  className="text-xl sm:text-2xl font-semibold tracking-tight"
                  data-testid="hero-tagline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Your Business Has a Story. I Give It a Stage.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <Button 
                    size="lg" 
                    className="rounded-xl"
                    onClick={scrollToContact}
                    data-testid="hero-primary-cta-button"
                  >
                    Get in Touch
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="rounded-xl"
                    onClick={scrollToSkills}
                  >
                    View Skills
                  </Button>
                </motion.div>
              </GlassSurface>
            </motion.div>
          </div>

          {/* Right: Floating Cosmos */}
          <div className="lg:col-span-6 h-[400px] lg:h-[600px] hidden md:block">
            <FloatingCosmosHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
