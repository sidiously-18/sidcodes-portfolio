import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import GlassSurface from './GlassSurface';
import ThemeToggle from './ThemeToggle';
import { FaGithub, FaXTwitter, FaInstagram, FaBars, FaXmark } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="sticky top-3 z-50 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" data-testid="top-navigation">
        <GlassSurface variant="nav" className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('home')}
              data-testid="nav-home-link"
              className={activeSection === 'home' ? 'bg-foreground/5' : ''}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('about')}
              data-testid="nav-about-link"
              className={activeSection === 'about' ? 'bg-foreground/5' : ''}
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('skills')}
              data-testid="nav-skills-link"
              className={activeSection === 'skills' ? 'bg-foreground/5' : ''}
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('contact')}
              data-testid="nav-contact-link"
              className={activeSection === 'contact' ? 'bg-foreground/5' : ''}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <FaXmark className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="social-github-link"
              >
                <a href="https://github.com/sidiously-18" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="social-x-link"
              >
                <a href="https://x.com/SiddhantPa2671" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="social-instagram-link"
              >
                <a href="https://www.instagram.com/sidiously_18" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </GlassSurface>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 h-full w-64 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <GlassSurface className="h-full flex flex-col gap-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FaXmark className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    className="justify-start"
                    onClick={() => scrollToSection('home')}
                    data-testid="mobile-nav-home-link"
                  >
                    Home
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start"
                    onClick={() => scrollToSection('about')}
                    data-testid="mobile-nav-about-link"
                  >
                    About
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start"
                    onClick={() => scrollToSection('skills')}
                    data-testid="mobile-nav-skills-link"
                  >
                    Skills
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start"
                    onClick={() => scrollToSection('contact')}
                    data-testid="mobile-nav-contact-link"
                  >
                    Contact
                  </Button>
                </div>

                <div className="mt-auto pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Connect</p>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                    >
                      <a href="https://github.com/sidiously-18" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                    >
                      <a href="https://x.com/SiddhantPa2671" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                    >
                      <a href="https://www.instagram.com/sidiously_18" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </GlassSurface>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionNav;
