import { Code2, ExternalLink, Github, Sparkles } from 'lucide-react';

import { AnimatedDots } from '@/components/shared/animated-dots';
import { Button } from '@/components/ui/button';
import React from 'react';
import { motion } from 'framer-motion';
import { uuid } from '@/lib/helper-fn';

export const PortfolioHero = () => {
  return (
    <section className='relative min-h-[80vh] bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 overflow-hidden'>
      <AnimatedDots />
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

      <div className='container px-4 mx-auto relative z-10 h-full'>
        <div className='max-w-6xl mx-auto h-full flex flex-col justify-center'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-6'
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light-200/10 dark:bg-primary-dark-200/10 text-primary-light-200 dark:text-primary-dark-200'
              >
                <Code2 className='w-4 h-4' />
                <span className='text-sm font-medium'>Featured Projects</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-light-200 to-primary-light-100 dark:from-primary-dark-200 dark:to-primary-dark-100'
              >
                Crafting Digital Experiences
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='text-lg text-text-light-h2 dark:text-text-dark-h2'
              >
                Explore my collection of projects that showcase innovative
                solutions and creative problem-solving in web development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='flex flex-wrap gap-4'
              >
                <Button
                  size='lg'
                  className='gap-2 bg-primary-light-200 hover:bg-primary-light-200/90 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-200/90 text-primary-light-100 dark:text-primary-dark-100'
                >
                  View Projects
                  <ExternalLink className='w-4 h-4' />
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='gap-2 border-primary-light-200/20 hover:border-primary-light-200/40 dark:border-primary-dark-200/20 dark:hover:border-primary-dark-200/40'
                  onClick={() =>
                    window.open('https://github.com/barakamulumia')
                  }
                >
                  <Github className='w-4 h-4' />
                  GitHub
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Animated Elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='relative'
            >
              <div className='relative aspect-square'>
                {/* Floating project cards */}
                {[0, 72, 144, 216, 288].map((rotation, index) => (
                  <motion.div
                    key={uuid('project-card-')}
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    initial={{ rotate: rotation, scale: 0 }}
                    animate={{ rotate: rotation, scale: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <motion.div
                      className='relative'
                      animate={{
                        translateX: [140, 150, 140],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: index * 0.4,
                      }}
                    >
                      <div className='w-24 h-24 rounded-xl bg-backgrounds-light-e100 dark:bg-backgrounds-dark-e100 flex items-center justify-center shadow-lg overflow-hidden group'>
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]' />
                        <Sparkles className='w-8 h-8 text-primary-light-200 dark:text-primary-dark-200' />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Center element */}
                <motion.div
                  className='absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light-200 dark:bg-primary-dark-200 flex items-center justify-center'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Code2 className='w-12 h-12 text-white' />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
