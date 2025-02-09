'use client';

import { Button } from '@/components/ui/button';
import { CiLinkedin } from 'react-icons/ci';
import { FC } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { SkillsData } from '@/sanity/types/skills.type';
import { VscGithub } from 'react-icons/vsc';
import { kebabCase } from 'lodash';
import { motion } from 'framer-motion';
import { uuid } from '@/lib/helper-fn';

interface AboutSectionProps {
  skills: SkillsData;
}

export const AboutSection: FC<AboutSectionProps> = ({ skills }) => {
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
      <div className='container px-2  md:px-4 mx-auto'>
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
              <div className='prose dark:prose-invert max-w-none px-4'>
                <p className='text-lg leading-relaxed'>
                  {`Hi there! I'm Baraka Mulumia, a Full Stack Developer
                  passionate about crafting modern, high-performance web
                  applications, scalable backend APIs, and intuitive mobile
                  applications. I thrive on turning complex challenges into
                  seamless, end-to-end solutions that drive results and deliver
                  exceptional user experiences.
                `}
                </p>

                <h3 className='text-xl font-semibold mt-6 mb-4'>
                  What sets me apart?
                </h3>
                <ul className='space-y-4 list-none pl-0'>
                  <li className='flex items-start gap-3'>
                    <span className='text-primary-light-200 dark:text-primary-dark-200 font-semibold'>
                      ✨
                    </span>
                    <div>
                      <span className='font-semibold'>
                        Versatile Expertise:
                      </span>{' '}
                      From designing robust backend systems to building sleek
                      front-end interfaces and cross-platform mobile apps, I
                      bring a full spectrum of skills to the table.
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-primary-light-200 dark:text-primary-dark-200 font-semibold'>
                      🚀
                    </span>
                    <div>
                      <span className='font-semibold'>
                        Problem Solver at Heart:
                      </span>{' '}
                      I specialize in creating tailored solutions that address
                      real-world problems, ensuring your business stands out in
                      a competitive digital landscape.
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-primary-light-200 dark:text-primary-dark-200 font-semibold'>
                      💡
                    </span>
                    <div>
                      <span className='font-semibold'>
                        User-Centric Approach:
                      </span>{' '}
                      Every project I work on is designed with the end-user in
                      mind, ensuring intuitive, engaging, and frictionless
                      experiences across web and mobile platforms.
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-primary-light-200 dark:text-primary-dark-200 font-semibold'>
                      🔧
                    </span>
                    <div>
                      <span className='font-semibold'>
                        Scalable & Future-Proof:
                      </span>{' '}
                      {` Whether it's a RESTful API, a dynamic web app, or a
                      feature-rich mobile application, I build solutions that
                      grow with your business.`}
                    </div>
                  </li>
                </ul>

                <p className='text-lg leading-relaxed mt-6'>
                  {` I'm driven by a passion for innovation and a commitment to
                  delivering high-quality, impactful solutions. Whether you need
                  a powerful backend, a responsive web app, or a stunning mobile
                  experience, I'm here to help bring your vision to life. Let's
                  create something extraordinary together!`}
                </p>
              </div>

              <div className='flex gap-1 md:gap-4 pt-4'>
                <Link
                  href='https://github.com/Baraka-Mulumia'
                  passHref
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button variant='outline' className='gap-2'>
                    <VscGithub className='w-4 h-4' />
                    GitHub
                  </Button>
                </Link>
                <Link
                  href='https://www.linkedin.com/in/baraka-mulumia/'
                  target='_blank'
                  rel='noopener noreferrer'
                  passHref
                >
                  <Button variant='outline' className='gap-2'>
                    <CiLinkedin className='w-4 h-4' />
                    LinkedIn
                  </Button>
                </Link>
                <Link href='/contact'>
                  <Button variant='outline' className='gap-2'>
                    <Mail className='w-4 h-4' />
                    Contact Me
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={containerVariants} className='grid gap-6'>
              {skills?.skillGroups?.map((skillGroup) => (
                <motion.div
                  key={kebabCase(skillGroup.category)}
                  variants={itemVariants}
                  className='p-4 md:p-6 rounded-lg bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 shadow-sm'
                >
                  <h3 className='text-xl font-semibold mb-4'>
                    {skillGroup.category}
                  </h3>
                  <div className='grid grid-cols-2 gap-3'>
                    {skillGroup.items.map((skill) => (
                      <motion.div
                        key={uuid('skill-')}
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
        </motion.div>
      </div>
    </section>
  );
};
