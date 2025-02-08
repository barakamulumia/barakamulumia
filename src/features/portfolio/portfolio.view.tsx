'use client';

import { Footer } from '@/components/shared/footer';
import { MarketingSection } from '@/components/shared/marketing.section';
import { Navbar } from '@/components/shared/navigation-bar';
import { PortfolioHero } from './portfolio-hero';
import { PortfolioSection } from './portfolio-section';
import React from 'react';
import { motion } from 'framer-motion';

export const PortfolioView = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen w-full bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000'
    >
      <Navbar />
      <main className='pt-20'>
        <PortfolioHero />
        <PortfolioSection />
        <MarketingSection />
      </main>
      <Footer />
    </motion.div>
  );
};
