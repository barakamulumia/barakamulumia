'use client';

import { Bot, Cpu, Network, Sparkles } from 'lucide-react';

import { AnimatedDots } from '@/components/shared/animated-dots';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const ServicesHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className='relative min-h-[80vh] flex items-center justify-center bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 overflow-hidden'
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

        <AnimatedDots />
      </div>

      <div className='container px-4 mx-auto relative z-10'>
        <motion.div
          variants={containerVariants}
          className='max-w-6xl mx-auto text-center'
        >
          <motion.h1
            variants={itemVariants}
            className='text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light-200 to-primary-light-100 dark:from-primary-dark-200 dark:to-primary-dark-100'
          >
            Intelligent Solutions for Modern Development
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-text-light-h2 dark:text-text-dark-h2'
          >
            Building the future of software with AI-powered development,
            automation, and optimization. I leverage modern frameworks and
            AI-driven insights to create high-performance, scalable, and
            efficient applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'
          >
            {[
              {
                icon: <Bot className='w-6 h-6' />,
                title: 'AI Integration',
                desc: 'Integrating AI tools for automation.',
              },
              {
                icon: <Cpu className='w-6 h-6' />,
                title: 'Full-Stack Engineering',
                desc: 'Seamless web and mobile applications using Next.js, React, and React Native.',
              },
              {
                icon: <Network className='w-6 h-6' />,
                title: 'Intelligent API Design',
                desc: 'Scalable and optimized APIs with NestJS, GraphQL, and AI-powered analytics.',
              },
              {
                icon: <Sparkles className='w-6 h-6' />,
                title: 'Smart Performance & Security',
                desc: 'AI-assisted performance tuning and security enhancements.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className='p-6 rounded-xl bg-backgrounds-light-e000/70 dark:bg-backgrounds-dark-e000/70 backdrop-blur-md border border-borders-light-e100/20 dark:border-borders-dark-e100/20 shadow-md'
              >
                <div className='mb-4 p-3 rounded-xl bg-primary-light-200/10 dark:bg-primary-dark-200/10 inline-block'>
                  {feature.icon}
                </div>
                <h3 className='text-lg font-semibold mb-2'>{feature.title}</h3>
                <p className='text-text-light-h3_captions dark:text-text-dark-h3_captions'>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='flex justify-center gap-4'
          >
            <Link href='/services#solutions'>
              <Button
                size='lg'
                className='bg-primary-light-200 hover:bg-primary-light-200/90 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-200/90 text-primary-light-100 dark:text-primary-dark-100'
              >
                Explore Solutions
              </Button>
            </Link>
            <Link href='/contact'>
              <Button
                size='lg'
                variant='outline'
                className='text-border-dark  dark:text-border-light border-primary-light-200/20 hover:border-primary-light-200/40 dark:border-primary-dark-200/20 dark:hover:border-primary-dark-200/40'
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
