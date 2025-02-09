import { LandingView } from '@/features/landing/landing.view';
import { Metadata } from 'next';
import { PageLoadingSkeleton } from '@/components/shared/page-loading-skeleton';
import { Suspense } from 'react';
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

// Loading component
function DataLoading() {
  return <PageLoadingSkeleton />;
}

export default async function LandingPage() {
  const { skills, testimonials } = await getData();
  return (
    <Suspense fallback={<DataLoading />}>
      <LandingView skills={skills} testimonials={testimonials} />
    </Suspense>
  );
}
