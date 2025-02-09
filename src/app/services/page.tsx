import { Metadata } from 'next';
import { PageLoadingSkeleton } from '@/components/shared/page-loading-skeleton';
import { ServicesView } from '@/features/services/services.view';
import { Suspense } from 'react';
import { getServices } from '@/sanity/api/services.sanity.api';
import { getTestimonials } from '@/sanity/api/testimonials.api';

export const metadata: Metadata = {
  title: 'Services | Baraka Mulumia',
  description:
    "Explore the range of services I offer to help you achieve your digital goals. I'm driven by a passion for innovation and a commitment to delivering high-quality, impactful solutions. Whether you need a powerful backend, a responsive web app, or a stunning mobile experience, I'm here to help bring your vision to life. Let's create something extraordinary together!",
};

export const revalidate = 300;

async function getData() {
  const [services, testimonials] = await Promise.all([
    getServices(),
    getTestimonials(),
  ]);

  return { services, testimonials };
}

// Loading component
function DataLoading() {
  return <PageLoadingSkeleton />;
}

export default async function ServicesPage() {
  const { services, testimonials } = await getData();
  return (
    <Suspense fallback={<DataLoading />}>
      <ServicesView services={services} testimonials={testimonials} />
    </Suspense>
  );
}
