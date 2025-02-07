import { AnimatedDots } from './animated-dots';
import { Button } from '../ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  const footerLinks = [
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Roadmap', href: '/roadmap' },
        { name: 'Changelog', href: '/changelog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'Security', href: '/security' },
        { name: 'Community', href: '/community' },
        { name: 'Contributors', href: '/contributors' },
        { name: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Use', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'DPA', href: '/dpa' },
        { name: 'Status Page', href: '/status' },
      ],
    },
  ];

  return (
    <footer className='relative bg-backgrounds-dark-e000 py-20 overflow-hidden'>
      <AnimatedDots />
      <div className='container px-4 mx-auto'>
        <div className='max-w-6xl mx-auto'>
          {/* Top Section with CTA */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light-200 to-primary-light-100 dark:from-primary-dark-200 dark:to-primary-dark-100'>
              {
                "You're five minutes away from your first Novu-powered notification"
              }
            </h2>
            <p className='text-text-light-h3_captions dark:text-text-dark-h3_captions mb-8'>
              Create a free account, send your first notification, all before
              your coffee gets cold... no credit card required.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-primary-light-200 hover:bg-primary-light-200/90 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-200/90 text-primary-light-100 dark:text-primary-dark-100'
                asChild
              >
                <Link href='/contact'>GET STARTED</Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-primary-light-200/20 hover:border-primary-light-200/40 dark:border-primary-dark-200/20 dark:hover:border-primary-dark-200/40'
                asChild
              >
                <Link href='/contact'>CONTACT US</Link>
              </Button>
            </div>
          </div>

          {/* Links Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
            <div>
              <Link
                href='/'
                className='text-2xl font-bold text-primary-light-200 dark:text-primary-dark-200'
              >
                Baraka Mulumia
              </Link>
            </div>
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className='font-semibold mb-4'>{section.title}</h3>
                <ul className='space-y-2'>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className='text-text-light-h3_captions dark:text-text-dark-h3_captions hover:text-primary-light-200 dark:hover:text-primary-dark-200'
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className='flex flex-col md:flex-row justify-between items-center pt-8 border-t border-borders-light-e100 dark:border-borders-dark-e100'>
            <p className='text-sm text-text-light-h3_captions dark:text-text-dark-h3_captions mb-4 md:mb-0'>
              © 2024 Baraka Mulumia. All rights reserved.
            </p>
            <div className='flex items-center gap-4'>
              <Link
                href='https://github.com/barakamulumia'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  variant='ghost'
                  size='icon'
                  className='hover:text-primary-light-200 dark:hover:text-primary-dark-200'
                >
                  <Github className='w-5 h-5' />
                </Button>
              </Link>
              <div className='text-sm text-text-light-h3_captions dark:text-text-dark-h3_captions'>
                Design made by Pixel Point
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
