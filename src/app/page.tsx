import { Metadata, NextPage } from 'next';

import { LandingView } from '@/features/landing/landing.view';
import { getSkills } from '@/sanity/api/skills.sanity.api';
import { getTestimonials } from '@/sanity/api/testimonials.api';

export const metadata: Metadata = {
  title: 'Home | Baraka Mulumia',
  description:
    'Building innovative digital solutions with modern technologies - a Full Stack Developer passionate about crafting modern, high-performance web applications, scalable backend APIs, and intuitive mobile applications ',
};

export const revalidate = 300;

async function getData() {
  const [skills, testimonials] = await Promise.all([
    getSkills(),
    getTestimonials(),
  ]);

  return { skills, testimonials };
}

const LandingPage: NextPage = async () => {
  const { skills, testimonials } = await getData();
  return <LandingView skills={skills} testimonials={testimonials} />;
};

export default LandingPage;

export async function generateStaticParams() {
  const s = [1];
  return s.map((s) => ({
    s,
  }));
}
