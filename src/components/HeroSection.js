import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import GlassSurface from './GlassSurface';
import Spline from '@splinetool/react-spline';


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
          <div className="lg:col-span-6 space-y-8 relative z-20">
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

          {/* Right: Spline 3D Model */}
          <div className="lg:col-span-6 h-[400px] lg:h-[600px] hidden md:block relative z-10">
            <div className="absolute inset-[-20%]">
              <div className="w-full h-full scale-[1.25] translate-y-[15%]">
                <Spline scene="https://prod.spline.design/uRllOoFxsndrPqdU/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
