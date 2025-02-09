'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { uuid } from '@/lib/helper-fn';

interface Dot {
  x: number;
  y: number;
  delay: number;
}

export const AnimatedDots = () => {
  // Create a grid of dots
  const dots: Dot[] = [];
  const gridSize = { x: 40, y: 20 };
  const spacing = 30;

  for (let i = 0; i < gridSize.x; i++) {
    for (let j = 0; j < gridSize.y; j++) {
      dots.push({
        x: i * spacing,
        y: j * spacing,
        delay: (i + j) * 0.02, // Stagger the animation
      });
    }
  }

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      <div className='relative w-full h-full'>
        {dots.map((dot) => (
          <motion.div
            key={uuid('dot-')}
            className='absolute w-1 h-1 bg-primary-light-200/10 dark:bg-primary-dark-200/10 rounded-full'
            style={{
              left: dot.x,
              top: dot.y,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};
