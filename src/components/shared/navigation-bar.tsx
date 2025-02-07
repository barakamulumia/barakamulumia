'use client';

import React, { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '../ui/button';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onNavigate?: (section: string) => void;
  isScrolled?: boolean;
}

export const Navbar = ({
  onNavigate = () => {},
  isScrolled = false,
}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(isScrolled);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent,
    item: { name: string; href: string },
  ) => {
    if (item.href.startsWith('/#')) {
      e.preventDefault();
      setIsOpen(false);
      if (pathname === '/') {
        onNavigate(item.name.toLowerCase());
      } else {
        window.location.href = item.href;
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 transition-all duration-300 ${
        scrolled ? 'shadow-lg bg-opacity-95 backdrop-blur-sm' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='container mx-auto px-4'>
        <div className='h-20 flex items-center justify-between'>
          <Link
            href='/'
            className='text-2xl font-bold text-primary-light-200 dark:text-primary-dark-200 cursor-pointer'
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Baraka Mulumia
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:block'>
            <ul className='flex space-x-8'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href.replace(/^\/#/, '/')}
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary-light-200 dark:hover:text-primary-dark-200 ${
                      scrolled
                        ? 'text-text-light-h1_body dark:text-text-dark-h1_body'
                        : 'text-text-light-h1_body dark:text-text-dark-h1_body'
                    }`}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex items-center gap-4'>
            <ThemeToggle />
            <Button
              variant='default'
              className='hidden md:inline-flex bg-primary-light-200 hover:bg-primary-light-200/90 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-200/90 text-primary-light-100 dark:text-primary-dark-100'
              onClick={() => onNavigate('contact')}
            >
              Get in Touch
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className='md:hidden'>
                <Button variant='ghost' size='icon' className='md:hidden'>
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='w-[300px] sm:w-[400px] bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 border-borders-light-e100 dark:border-borders-dark-e100'
              >
                <SheetHeader>
                  <SheetTitle className='text-left text-primary-light-200 dark:text-primary-dark-200'>
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <nav className='mt-8'>
                  <ul className='space-y-4'>
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href.replace(/^\/#/, '/')}
                          className='block px-4 py-2 text-lg font-medium transition-colors hover:text-primary-light-200 dark:hover:text-primary-dark-200 text-text-light-h1_body dark:text-text-dark-h1_body'
                          onClick={(e) => handleNavClick(e, item)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li className='pt-4'>
                      <Button
                        className='w-full bg-primary-light-200 hover:bg-primary-light-200/90 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-200/90 text-primary-light-100 dark:text-primary-dark-100'
                        onClick={() => {
                          setIsOpen(false);
                          onNavigate('contact');
                        }}
                      >
                        Get in Touch
                      </Button>
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
