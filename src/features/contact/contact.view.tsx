'use client';

import { ContactSection } from './contact-section';
import { Footer } from '@/components/shared/footer';
import { Navbar } from '@/components/shared/navigation-bar';
import { Testimonial } from '@/sanity/types/testimonial.type';
import { TestimonialsSection } from '@/components/shared/testimonials-section';
import { motion } from 'framer-motion';

interface ContactViewProps {
  testimonials: Testimonial[];
}

export const ContactView = ({ testimonials }: ContactViewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen w-full bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000'
    >
      <Navbar onNavigate={() => {}} />
      <main className='pt-20'>
        <ContactSection />
        <TestimonialsSection testimonials={testimonials} />
      </main>
      <Footer />
    </motion.div>
  );
};
