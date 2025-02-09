import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ScrollIndicator from '@/components/shared/scroll-indicator';
import { motion } from 'framer-motion';

interface HeroBannerProps {
  name?: string;
  role?: string;
  tagline?: string;
}

export const HeroBanner = ({
  name = 'Baraka Mulumia',
  role = 'Full Stack Developer',
  tagline = 'Building digital experiences that make a difference',
}: HeroBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='relative min-h-[90vh] flex items-center justify-center bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 overflow-hidden'
    >
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

      <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12'>
        {/* Text Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className='flex-1 text-center lg:text-left max-w-2xl'
        >
          <motion.h1
            className='text-4xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light-200 to-primary-light-100 dark:from-primary-dark-200 dark:to-primary-dark-100'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {name}
          </motion.h1>
          <motion.h2
            className='text-2xl sm:text-3xl font-medium mb-6 text-text-light-h2 dark:text-text-dark-h2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {role}
          </motion.h2>
          <motion.p
            className='text-lg sm:text-xl mb-8 text-text-light-subtext dark:text-text-dark-subtext'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {tagline}
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link href='/services'>
              <Button
                size='lg'
                className='min-w-[200px] bg-primary-light-200 hover:bg-primary-light-200/90 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-200/90 text-primary-light-100 dark:text-primary-dark-100 relative overflow-hidden group'
              >
                <span className='relative z-10'>View My Services</span>
                <motion.div
                  className='absolute inset-0 bg-white/10'
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </Link>
            <Link href='/contact'>
              <Button
                size='lg'
                variant='outline'
                className='min-w-[200px] relative overflow-hidden group border-primary-light-200/20 hover:border-primary-light-200/40 dark:border-primary-dark-200/20 dark:hover:border-primary-dark-200/40'
              >
                <span className='relative z-10'>Contact Me</span>
                <motion.div
                  className='absolute inset-0 bg-primary-light-100/10 dark:bg-primary-dark-100/10'
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='flex-1 max-w-md'
        >
          <div className='relative'>
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-primary-light-200 to-primary-light-100 dark:from-primary-dark-200 dark:to-primary-dark-100 rounded-2xl blur-2xl opacity-30 dark:opacity-40'
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <motion.div
              className='relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary-light-200 to-primary-light-100 dark:from-primary-dark-200 dark:to-primary-dark-100 p-1'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src='/images/baraka-hero-image.jpg'
                alt='Baraka Mulumia'
                width={400}
                height={400}
                className='w-full h-auto rounded-xl'
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator className='z-20' />

      {/* Background gradient effect */}
      <div className='absolute inset-0 bg-gradient-to-b from-backgrounds-light-e000/0 via-backgrounds-light-e000/50 to-backgrounds-light-e000 dark:from-backgrounds-dark-e000/0 dark:via-backgrounds-dark-e000/50 dark:to-backgrounds-dark-e000 pointer-events-none' />
    </motion.div>
  );
};
