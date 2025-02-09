import { Metadata, NextPage } from 'next';

import { ServicesView } from '@/features/services/services.view';
import { getServices } from '@/sanity/api/services.sanity.api';
import { getTestimonials } from '@/sanity/api/testimonials.api';

export const metadata: Metadata = {
  title: 'Services | Baraka Mulumia',
  description:
    "Explore the range of services I offer to help you achieve your digital goals. I'm driven by a passion for innovation and a commitment to delivering high-quality, impactful solutions. Whether you need a powerful backend, a responsive web app, or a stunning mobile experience, I'm here to help bring your vision to life. Let's create something extraordinary together!",
};

const ServicesPage: NextPage = async () => {
  const services = await getServices();
  const testimonials = await getTestimonials();
  return <ServicesView services={services} testimonials={testimonials} />;
};

export default ServicesPage;
