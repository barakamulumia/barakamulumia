'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTestimonials } from '@/hooks/use-testimonials';
import { uuid } from '@/lib/helper-fn';

export const TestimonialsSection = () => {
  const { getTestimonials, testimonials } = useTestimonials();

  useEffect(() => {
    getTestimonials();
  }, [getTestimonials]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className='relative py-20 bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Gradient orbs */}
        <motion.div
          className='absolute top-1/4 -left-32 w-96 h-96 bg-primary-light-100/20 rounded-full blur-3xl dark:bg-primary-dark-100/10'
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className='absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-light-300/20 rounded-full blur-3xl dark:bg-primary-dark-300/10'
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Grid pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]' />
      </div>
      <div className='container px-4 mx-auto'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='max-w-6xl mx-auto'
        >
          <motion.div variants={cardVariants} className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>
              Building Trust, Delivering Results
            </h2>
            <div className='w-20 h-1 bg-primary-light-200 dark:bg-primary-dark-200 mx-auto' />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 relative'
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={uuid('testimonial-')}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className='p-6 rounded-xl bg-backgrounds-light-e000/70 dark:bg-backgrounds-dark-e000/70 backdrop-blur-md shadow-sm relative border border-borders-light-e100/20 dark:border-borders-dark-e100/20'
              >
                <div className='flex items-start gap-4'>
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar as unknown as string}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className='flex-1'>
                    <h3 className='font-semibold text-lg'>
                      {testimonial.name}
                    </h3>
                    <p className='text-sm text-text-light-h3_captions dark:text-text-dark-h3_captions'>
                      {testimonial.role}
                    </p>
                    <p className='mt-4 text-text-light-h2 dark:text-text-dark-h2'>
                      {testimonial.content}
                    </p>
                    <p className='mt-4 text-sm text-text-light-subtext dark:text-text-dark-subtext'>
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
