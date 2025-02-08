import { ExternalLink, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
}

const rowOne: PortfolioItem[] = [
  {
    title: 'AI-Powered Analytics',
    description:
      'Real-time data analysis platform with machine learning capabilities',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    tags: ['React', 'Python', 'TensorFlow'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Modern e-commerce solution with real-time inventory management',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    demoLink: '#',
    githubLink: '#',
  },
];

const rowTwo: PortfolioItem[] = [
  {
    title: 'Social Media Dashboard',
    description:
      'Comprehensive analytics dashboard for social media management',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    tags: ['Vue.js', 'D3.js', 'Firebase'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Blockchain Explorer',
    description: 'Real-time blockchain transaction viewer and analysis tool',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    tags: ['Web3.js', 'React', 'Node.js'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management platform with real-time updates',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    tags: ['React', 'Node.js', 'Socket.io'],
    demoLink: '#',
    githubLink: '#',
  },
];

const rowThree: PortfolioItem[] = [
  {
    title: 'AI Chat Application',
    description: 'Intelligent chatbot platform powered by machine learning',
    image:
      'https://images.unsplash.com/photo-1531746790731-6bf607ccff6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    tags: ['Python', 'TensorFlow', 'React'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'Automated portfolio website generator for developers',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    tags: ['Next.js', 'Tailwind', 'Framer'],
    demoLink: '#',
    githubLink: '#',
  },
];

export const PortfolioSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <section
      id='portfolio'
      className='relative py-20 bg-backgrounds-light-e100 dark:bg-backgrounds-dark-e100 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-32 before:bg-gradient-to-b before:from-backgrounds-light-e000 before:to-transparent dark:before:from-backgrounds-dark-e000 dark:before:to-transparent before:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-gradient-to-t after:from-backgrounds-light-e000 after:to-transparent dark:after:from-backgrounds-dark-e000 dark:after:to-transparent after:pointer-events-none'
    >
      <div className='container px-4 mx-auto'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='max-w-6xl mx-auto'
        >
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Portfolio</h2>
            <div className='w-20 h-1 bg-primary-light-200 dark:bg-primary-dark-200 mx-auto' />
          </motion.div>

          <div className='space-y-6'>
            {/* Row 1 - 2 columns */}
            <motion.div
              variants={containerVariants}
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
            >
              {rowOne.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className='group relative overflow-hidden rounded-xl'
                >
                  {/* Glass background */}
                  <div className='absolute inset-0 bg-backgrounds-light-e000/70 dark:bg-backgrounds-dark-e000/70 backdrop-blur-md z-0' />

                  <div className='relative z-10 p-6'>
                    <div className='aspect-video mb-6 overflow-hidden rounded-lg'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className='object-cover transform group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>

                    <h3 className='text-2xl font-semibold mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-text-light-h3_captions dark:text-text-dark-h3_captions mb-4'>
                      {item.description}
                    </p>

                    <div className='flex flex-wrap gap-2 mb-6'>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className='px-3 py-1 text-sm rounded-full bg-primary-light-200/10 dark:bg-primary-dark-200/10'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className='flex gap-4'>
                      {item.demoLink && (
                        <Button
                          variant='default'
                          className='gap-2 bg-primary-light-200 hover:bg-primary-light-200/90 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-200/90'
                          onClick={() => window.open(item.demoLink)}
                        >
                          <ExternalLink className='w-4 h-4' />
                          Live Demo
                        </Button>
                      )}
                      {item.githubLink && (
                        <Button
                          variant='outline'
                          className='gap-2'
                          onClick={() => window.open(item.githubLink)}
                        >
                          <Github className='w-4 h-4' />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Row 2 - 3 columns */}
            <motion.div
              variants={containerVariants}
              className='grid grid-cols-1 md:grid-cols-3 gap-6'
            >
              {rowTwo.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className='group relative overflow-hidden rounded-xl'
                >
                  <div className='absolute inset-0 bg-backgrounds-light-e000/70 dark:bg-backgrounds-dark-e000/70 backdrop-blur-md z-0' />
                  <div className='relative z-10 p-6'>
                    <div className='aspect-video mb-6 overflow-hidden rounded-lg'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className='object-cover transform group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <h3 className='text-2xl font-semibold mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-text-light-h3_captions dark:text-text-dark-h3_captions mb-4'>
                      {item.description}
                    </p>
                    <div className='flex flex-wrap gap-2 mb-6'>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className='px-3 py-1 text-sm rounded-full bg-primary-light-200/10 dark:bg-primary-dark-200/10'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className='flex gap-4'>
                      {item.demoLink && (
                        <Button
                          variant='default'
                          className='gap-2 bg-primary-light-200 hover:bg-primary-light-200/90 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-200/90'
                          onClick={() => window.open(item.demoLink)}
                        >
                          <ExternalLink className='w-4 h-4' />
                          Live Demo
                        </Button>
                      )}
                      {item.githubLink && (
                        <Button
                          variant='outline'
                          className='gap-2'
                          onClick={() => window.open(item.githubLink)}
                        >
                          <Github className='w-4 h-4' />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Row 3 - 2 columns */}
            <motion.div
              variants={containerVariants}
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
            >
              {rowThree.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className='group relative overflow-hidden rounded-xl'
                >
                  <div className='absolute inset-0 bg-backgrounds-light-e000/70 dark:bg-backgrounds-dark-e000/70 backdrop-blur-md z-0' />
                  <div className='relative z-10 p-6'>
                    <div className='aspect-video mb-6 overflow-hidden rounded-lg'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className='object-cover transform group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <h3 className='text-2xl font-semibold mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-text-light-h3_captions dark:text-text-dark-h3_captions mb-4'>
                      {item.description}
                    </p>
                    <div className='flex flex-wrap gap-2 mb-6'>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className='px-3 py-1 text-sm rounded-full bg-primary-light-200/10 dark:bg-primary-dark-200/10'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className='flex gap-4'>
                      {item.demoLink && (
                        <Button
                          variant='default'
                          className='gap-2 bg-primary-light-200 hover:bg-primary-light-200/90 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-200/90'
                          onClick={() => window.open(item.demoLink)}
                        >
                          <ExternalLink className='w-4 h-4' />
                          Live Demo
                        </Button>
                      )}
                      {item.githubLink && (
                        <Button
                          variant='outline'
                          className='gap-2'
                          onClick={() => window.open(item.githubLink)}
                        >
                          <Github className='w-4 h-4' />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
