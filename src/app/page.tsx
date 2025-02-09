import { LandingView } from '@/features/landing/landing.view';
import { NextPage } from 'next';
import { getSkills } from '@/sanity/api/skills.sanity.api';
import { getTestimonials } from '@/sanity/api/testimonials.api';

const LandingPage: NextPage = async () => {
  const skills = await getSkills();
  const testimonials = await getTestimonials();
  return <LandingView skills={skills} testimonials={testimonials} />;
};

export default LandingPage;
