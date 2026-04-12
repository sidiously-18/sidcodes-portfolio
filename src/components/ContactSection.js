import React from 'react';
import { motion } from 'framer-motion';
import GlassSurface from './GlassSurface';
import { Button } from '@/components/ui/button';
import { FaEnvelope, FaGithub, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-12 text-center">Get in Touch</h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassSurface className="text-center space-y-8">
            <p className="text-lg">
              Ready to bring your business online with a stunning website?
            </p>
            <p className="text-sm text-muted-foreground">
              Let's discuss how I can help you build a stronger digital presence.
            </p>
            
            {/* Email */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="rounded-xl w-full sm:w-auto"
                asChild
                data-testid="contact-email-button"
              >
                <a href="mailto:paithanpagaresiddhant@gmail.com" className="inline-flex items-center gap-2">
                  <FaEnvelope className="h-5 w-5" />
                  paithanpagaresiddhant@gmail.com
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">Or connect with me on:</p>
              <div className="flex justify-center items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  asChild
                  data-testid="contact-email-icon"
                >
                  <a href="mailto:paithanpagaresiddhant@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  asChild
                  data-testid="contact-github-link"
                >
                  <a href="https://github.com/sidiously-18" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  asChild
                  data-testid="contact-linkedin-link"
                >
                  <a href="https://www.linkedin.com/in/siddhantpaithanpagare" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  asChild
                  data-testid="contact-x-link"
                >
                  <a href="https://x.com/SiddhantPa2671" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  asChild
                  data-testid="contact-instagram-link"
                >
                  <a href="https://www.instagram.com/sidiously_18" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </GlassSurface>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
