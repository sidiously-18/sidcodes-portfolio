import React from 'react';
import { motion } from 'framer-motion';
import GlassSurface from './GlassSurface';
import { Badge } from '@/components/ui/badge';

const SkillCategory = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <GlassSurface 
      hover={true}
      data-testid="skills-category-card"
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge 
            key={index} 
            variant="secondary"
            className="font-mono text-xs"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </GlassSurface>
  </motion.div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML & CSS', 'JavaScript', 'React', 'Next.js']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL', 'Appwrite']
    },
    {
      title: 'Agents I Use',
      skills: ['Claude Code', 'OpenClaw', 'Emergent', 'Generative AI', 'Prompt Engineering']
    },
    {
      title: 'Development Tools',
      skills: ['VS Code', 'Cursor', 'Codex', 'Claude Code']
    },
    {
      title: 'SEO',
      skills: ['Search Visibility', 'On-Page Optimization']
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-12">Skills & Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
