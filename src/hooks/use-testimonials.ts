import { useCallback, useState } from 'react';

import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

// Define TypeScript types for the testimonials data structure
interface Testimonial {
  name: string;
  role: string;
  content: string;
  date: string;
  avatar: {
    asset: {
      url: string;
    };
  };
}

// GROQ query to fetch all testimonials
const testimonialsQuery = groq`*[_type == "testimonial"] {
  name,
  role,
  content,
  date,
  "avatar": avatar.asset->url
}`;

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const getTestimonials = useCallback(async () => {
    try {
      const data = await client.fetch(testimonialsQuery);
      setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getTestimonials, testimonials, loading };
}
