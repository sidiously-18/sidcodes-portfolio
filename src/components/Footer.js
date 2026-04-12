import React from 'react';
import GlassSurface from './GlassSurface';
import { Button } from '@/components/ui/button';
import { FaGithub, FaXTwitter, FaInstagram, FaHeart, FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassSurface variant="nav">
          <div className="flex flex-col gap-6">
            {/* Top row: Branding and Social */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold mb-1">Siddhant Paithanpagare</p>
                <p className="text-sm text-muted-foreground">
                  Your Business Has a Story. I Give It a Stage.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  data-testid="footer-social-github-link"
                >
                  <a href="https://github.com/sidiously-18" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  data-testid="footer-social-x-link"
                >
                  <a href="https://x.com/SiddhantPa2671" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  data-testid="footer-social-instagram-link"
                >
                  <a href="https://www.instagram.com/sidiously_18" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Bottom row: Email and Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FaEnvelope className="h-4 w-4" />
                <a 
                  href="mailto:paithanpagaresiddhant@gmail.com" 
                  className="hover:text-foreground transition-colors"
                >
                  paithanpagaresiddhant@gmail.com
                </a>
              </div>
              
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                made with <FaHeart className="h-3 w-3 text-red-400" /> and caffine
              </p>
            </div>
          </div>
        </GlassSurface>
      </div>
    </footer>
  );
};

export default Footer;
