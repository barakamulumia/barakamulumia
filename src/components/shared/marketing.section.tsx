'use client';

import { Bot, Code, Sparkles, Zap } from 'lucide-react';

import React from 'react';
import { motion } from 'framer-motion';
import { uuid } from '@/lib/helper-fn';

interface MarketingCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const marketingCards: MarketingCard[] = [
  {
    title: 'High-Performance Web & Backend Systems',
    description:
      'Create blazing-fast, SEO-friendly SaaS and web applications with Next.js and React, backed by scalable, secure APIs using Node.js, NestJS, and MongoDB. Leverage SSR, SSG, GraphQL, and real-time data for dynamic, high-performance experience.',
    icon: <Sparkles className='w-8 h-8' />,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Build end-to-end solutions with modern frameworks like React, Next.js, Node.js, and NestJS. Seamlessly integrate polished front-ends with robust backends for a cohesive digital experience.',
    icon: <Code className='w-8 h-8' />,
    gradient: 'from-green-500/20 to-blue-500/20',
  },
  {
    title: 'Cross-Platform Mobile Apps',
    description:
      'Deliver native-like iOS and Android applications using React Native. Optimize development speed and maintainability with a shared codebase.',
    icon: <Zap className='w-8 h-8' />,
    gradient: 'from-yellow-500/20 to-red-500/20',
  },
  {
    title: 'AI-Powered Development',
    description:
      'Leverage cutting-edge AI to accelerate your development process and create smarter, more efficient applications.',
    icon: <Bot className='w-8 h-8' />,
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
];

export const MarketingSection = () => {
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
    <section className='relative py-20 bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-32 before:bg-gradient-to-b before:from-backgrounds-light-e100 before:to-transparent dark:before:from-backgrounds-dark-e100 dark:before:to-transparent before:pointer-events-none'>
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

      <div className='container px-4 mx-auto relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='max-w-6xl mx-auto'
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>
              Building Future-Ready Software Solutions
            </h2>
            <p className='text-lg text-text-light-h3_captions dark:text-text-dark-h3_captions max-w-2xl mx-auto'>
              Crafting scalable, efficient, and user-centric applications
              tailored to your needs.
            </p>
          </motion.div>

          {/* Marketing Cards Grid */}
          <motion.div
            variants={containerVariants}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            {marketingCards.map((card) => (
              <motion.div
                key={uuid('marketing-card-')}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className='relative group'
              >
                <div
                  className='absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'
                  style={{
                    background: `linear-gradient(to right, ${
                      card.gradient.split(' ')[1]
                    }, ${card.gradient.split(' ')[3]})`,
                  }}
                />
                <div className='relative p-8 rounded-2xl bg-backgrounds-light-e000/70 dark:bg-backgrounds-dark-e000/70 backdrop-blur-md border border-borders-light-e100/20 dark:border-borders-dark-e100/20 overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-r opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${card.gradient}' />
                  <div className='relative z-10'>
                    <div className='mb-4 p-3 rounded-xl bg-backgrounds-light-e100/50 dark:bg-backgrounds-dark-e100/50 inline-block'>
                      {card.icon}
                    </div>
                    <h3 className='text-2xl font-semibold mb-3'>
                      {card.title}
                    </h3>
                    <p className='text-text-light-h3_captions dark:text-text-dark-h3_captions'>
                      {card.description}
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
