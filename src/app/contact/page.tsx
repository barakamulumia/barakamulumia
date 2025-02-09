import { ContactView } from '@/features/contact/contact.view';
import { Metadata } from 'next';
import { PageLoadingSkeleton } from '@/components/shared/page-loading-skeleton';
import { Suspense } from 'react';
import { getTestimonials } from '@/sanity/api/testimonials.api';

export const metadata: Metadata = {
  title: 'Contact | Baraka Mulumia',
  description:
    "Get in touch with me to discuss your project or to explore how I can help you achieve your digital goals. Let's collaborate and create something extraordinary together!",
};

export const revalidate = 300;

async function getData() {
  const testimonials = await getTestimonials();
  return { testimonials };
}

// Loading component
function DataLoading() {
  return <PageLoadingSkeleton />;
}

export default async function ContactPage() {
  const { testimonials } = await getData();
  return (
    <Suspense fallback={<DataLoading />}>
      <ContactView testimonials={testimonials} />
    </Suspense>
  );
}
