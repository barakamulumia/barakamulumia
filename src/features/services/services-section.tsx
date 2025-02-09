import { AnimatedDots } from '@/components/shared/animated-dots';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { type ServicesOffered } from '@/sanity/types/service';
import { ServiceCard } from './service-card';
import { getColumnSpan } from '@/lib/helper-fn';

interface ServicesSectionProps {
  services: ServicesOffered[];
}

export const ServicesSection: FC<ServicesSectionProps> = ({ services }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className='relative py-20 bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 overflow-hidden'
      id='solutions'
    >
      <AnimatedDots />
      <div className='container px-4 mx-auto'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='max-w-6xl mx-auto'
        >
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-sm font-semibold mb-4 text-primary-light-200 dark:text-primary-dark-200'>
              CUTTING-EDGE SERVICES
            </h2>
            <h1 className='text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-light-200 to-primary-light-100 dark:from-primary-dark-200 dark:to-primary-dark-100'>
              Bringing intelligence, scalability, and innovation to modern
              software development.
            </h1>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className='grid grid-cols-5 gap-8'
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={getColumnSpan(index)}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
