'use client';

import React, { FC } from 'react';

import { AboutSection } from '../about/about.section';
import { Footer } from '@/components/shared/footer';
import { HeroBanner } from './hero-banner';
import { MarketingSection } from '@/components/shared/marketing.section';
import { Navbar } from '@/components/shared/navigation-bar';
import { SkillsData } from '@/sanity/types/skills.type';
import { Testimonial } from '@/sanity/types/testimonial.type';
import { TestimonialsSection } from '@/components/shared/testimonials-section';
import { motion } from 'framer-motion';

interface LandingViewProps {
  skills: SkillsData;
  testimonials: Testimonial[];
}

export const LandingView: FC<LandingViewProps> = ({ skills, testimonials }) => {
  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen w-full bg-background dark:bg-zinc-900'
    >
      <Navbar onNavigate={handleNavigation} />

      <main className='pt-20'>
        <HeroBanner
          name='Baraka Mulumia'
          role='Full Stack Developer'
          tagline='Building innovative digital solutions with modern technologies'
        />

        <AboutSection skills={skills} />
        <TestimonialsSection testimonials={testimonials} />

        <MarketingSection />
      </main>
      <Footer />
    </motion.div>
  );
};
