'use client';

import { Footer } from '@/components/shared/footer';
import { Navbar } from '@/components/shared/navigation-bar';
import { ServicesHeroSection } from './services-hero-section';
import { ServicesSection } from './services-section';
import { motion } from 'framer-motion';
import { type ServicesOffered } from '@/sanity/types/service';
import { FC } from 'react';
import { Testimonial } from '@/sanity/types/testimonial.type';
import { TestimonialsSection } from '@/components/shared/testimonials-section';
import { MarketingSection } from '@/components/shared/marketing.section';

interface ServicesSectionProps {
  services: ServicesOffered[];
  testimonials: Testimonial[];
}

export const ServicesView: FC<ServicesSectionProps> = ({
  services,
  testimonials,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen w-full bg-background dark:bg-zinc-900'
    >
      <Navbar />
      <main className='pt-20'>
        <ServicesHeroSection />
        <ServicesSection services={services} />
        <TestimonialsSection testimonials={testimonials} />
        <MarketingSection />
      </main>
      <Footer />
    </motion.div>
  );
};
