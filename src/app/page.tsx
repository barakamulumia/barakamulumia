import { Metadata, NextPage } from 'next';

import { LandingView } from '@/features/landing/landing.view';
import { getSkills } from '@/sanity/api/skills.sanity.api';
import { getTestimonials } from '@/sanity/api/testimonials.api';

export const metadata: Metadata = {
  title: 'Home | Baraka Mulumia',
  description:
    'Building innovative digital solutions with modern technologies - a Full Stack Developer passionate about crafting modern, high-performance web applications, scalable backend APIs, and intuitive mobile applications ',
};

const LandingPage: NextPage = async () => {
  const skills = await getSkills();
  const testimonials = await getTestimonials();
  return <LandingView skills={skills} testimonials={testimonials} />;
};

export default LandingPage;
