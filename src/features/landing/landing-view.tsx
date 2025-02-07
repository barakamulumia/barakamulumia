'use client';

import { AboutSection } from '../about/about.section';
import { Footer } from '@/components/shared/footer';
import { HeroBanner } from './hero-banner';
import { MarketingSection } from '@/components/shared/marketing.section';
import { Navbar } from '@/components/shared/navigation-bar';
import React from 'react';
import { TestimonialsSection } from '@/components/shared/testimonials-section';
import { motion } from 'framer-motion';

export const LandingView = () => {
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

        <AboutSection />
        <TestimonialsSection />

        <MarketingSection />
      </main>
      <Footer />
    </motion.div>
  );
};
