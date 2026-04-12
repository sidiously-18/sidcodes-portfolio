import React from 'react';
import { motion } from 'framer-motion';
import GlassSurface from './GlassSurface';
import { Button } from '@/components/ui/button';
import { Code, Layers, Zap, CheckCircle } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <GlassSurface 
      hover={true}
      data-testid="service-card"
    >
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </GlassSurface>
  </motion.div>
);

const AboutSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Websites',
      description: 'Design and develop custom websites tailored to your brand'
    },
    {
      icon: Layers,
      title: 'Website Modernization',
      description: 'Modernize outdated websites without losing your identity'
    },
    {
      icon: Zap,
      title: 'Performance First',
      description: 'Build fast, mobile-friendly, and easy-to-manage sites'
    }
  ];

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-12">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassSurface className="h-full" hover={true}>
              <div className="space-y-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-sm sm:text-base leading-relaxed">
                    I'm <strong>Siddhant</strong>, a web designer and developer passionate about helping 
                    established businesses build a stronger digital presence.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    I specialize in designing clean, professional websites for businesses that already 
                    have a strong foundation — and are ready to take that reputation online.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    My approach is simple: I take the time to understand your business, your values, 
                    and your customers — then translate that into a website that truly represents who you are.
                  </p>
                </div>
              </div>
            </GlassSurface>
          </motion.div>

          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassSurface className="h-full" hover={true}>
              <h3 className="text-lg font-semibold mb-6">What I Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    Design and develop custom websites tailored to your brand
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    Modernize outdated websites without losing your identity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    Build fast, mobile-friendly, and easy-to-manage sites
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    Deliver a seamless experience from first click to final conversion
                  </span>
                </li>
              </ul>
            </GlassSurface>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassSurface className="inline-block" hover={true}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Let's Work Together</h3>
              <p className="text-sm text-muted-foreground max-w-[65ch]">
                If you're a business owner who's ready to show the world what you've built, 
                I'd love to help you get there.
              </p>
              <Button 
                size="lg" 
                className="rounded-xl"
                onClick={scrollToContact}
                data-testid="about-contact-cta-button"
              >
                Get in Touch →
              </Button>
            </div>
          </GlassSurface>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
