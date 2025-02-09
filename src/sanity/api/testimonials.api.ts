import { TESTIMONIALS_QUERY } from '../queries/testimonials.query';
import { Testimonial } from '../types/testimonial.type';
import { client } from '@/sanity/lib/client';

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const testimonials = (await client.fetch(
      TESTIMONIALS_QUERY,
    )) as Testimonial[];
    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};
