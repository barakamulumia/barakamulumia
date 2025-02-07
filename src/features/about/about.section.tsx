import { Download, Github, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'CI/CD'],
  },
];

export const AboutSection = () => {
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
    },
  };

  return (
    <section
      id='about'
      className='relative py-20 bg-backgrounds-light-e100 dark:bg-backgrounds-dark-e100 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-32 before:bg-gradient-to-b before:from-backgrounds-light-e000 before:to-transparent dark:before:from-backgrounds-dark-e000 dark:before:to-transparent before:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-gradient-to-t after:from-backgrounds-light-e000 after:to-transparent dark:after:from-backgrounds-dark-e000 dark:after:to-transparent after:pointer-events-none'
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Gradient orbs */}
        <motion.div
          className='absolute top-1/4 -left-32 w-96 h-96 bg-primary-light-100/10 rounded-full blur-3xl dark:bg-primary-dark-100/5'
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
          className='absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-light-300/10 rounded-full blur-3xl dark:bg-primary-dark-300/5'
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
          className='max-w-6xl mx-auto relative z-10'
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>About Me</h2>
            <div className='w-20 h-1 bg-primary-light-200 dark:bg-primary-dark-200 mx-auto' />
          </motion.div>

          {/* Main Content */}
          <div className='grid md:grid-cols-2 gap-12 items-start'>
            {/* Left Column - About Text */}
            <motion.div variants={itemVariants} className='space-y-6'>
              <p className='text-lg leading-relaxed'>
                {
                  "I'm a passionate Full Stack Developer with over 5 years of experience in building modern web applications. I specialize in creating scalable solutions that solve real-world problems."
                }
              </p>
              <p className='text-lg leading-relaxed'>
                My approach combines technical expertise with creative
                problem-solving, ensuring that every project I work on is both
                functional and user-friendly.
              </p>
              <div className='flex gap-4 pt-4'>
                <Button
                  variant='outline'
                  className='gap-2'
                  onClick={() =>
                    window.open('https://github.com/barakamulumia')
                  }
                >
                  <Github className='w-4 h-4' />
                  GitHub
                </Button>
                <Button
                  variant='outline'
                  className='gap-2'
                  onClick={() =>
                    window.open('https://linkedin.com/in/barakamulumia')
                  }
                >
                  <Linkedin className='w-4 h-4' />
                  LinkedIn
                </Button>
                <Button
                  variant='outline'
                  className='gap-2'
                  onClick={() => (window.location.href = '/blog')}
                >
                  <Mail className='w-4 h-4' />
                  View My Blog
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={containerVariants} className='grid gap-6'>
              {skills.map((skillGroup) => (
                <motion.div
                  key={skillGroup.category}
                  variants={itemVariants}
                  className='p-6 rounded-lg bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 shadow-sm'
                >
                  <h3 className='text-xl font-semibold mb-4'>
                    {skillGroup.category}
                  </h3>
                  <div className='grid grid-cols-2 gap-3'>
                    {skillGroup.items.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className='p-3 text-sm rounded-md bg-backgrounds-light-e100 dark:bg-backgrounds-dark-e100'
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className='mt-12 text-center'>
            <Button
              className='gap-2 bg-primary-light-200 hover:bg-primary-light-200/90 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-200/90 text-primary-light-100 dark:text-primary-dark-100'
              onClick={() => window.open('/path-to-resume.pdf')}
            >
              <Download className='w-4 h-4' />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
