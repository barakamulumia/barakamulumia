import { FC } from 'react';
import { motion } from 'framer-motion';
import { type ServicesOffered } from '@/sanity/types/service';
import Image from 'next/image';

interface ServiceCardProps {
  service: ServicesOffered;
}

export const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className='group relative overflow-hidden rounded-xl bg-backgrounds-light-e100 dark:bg-backgrounds-dark-e100 p-6 flex flex-col h-full'
    >
      <div className='relative w-full h-48 mb-6 rounded-lg overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />
        <Image
          src={service.imageUrl}
          alt={service.title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          fill
        />
      </div>

      <h3 className='text-xl font-semibold mb-4'>{service.title}</h3>

      <p className='text-sm text-text-light-h3_captions dark:text-text-dark-h3_captions mb-6'>
        {service.description}
      </p>

      <div className='mt-auto'>
        <div className='w-full h-[2px] bg-gradient-to-r from-primary-light-200 to-primary-light-100 dark:from-primary-dark-200 dark:to-primary-dark-100 opacity-0 group-hover:opacity-100 transition-opacity' />
      </div>
    </motion.div>
  );
};
