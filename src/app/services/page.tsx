import { NextPage } from 'next';
import { ServicesView } from '@/features/services/services.view';
import { getServices } from '@/sanity/api/services.sanity.api';
import { getTestimonials } from '@/sanity/api/testimonials.api';

const ServicesPage: NextPage = async () => {
  const services = await getServices();
  const testimonials = await getTestimonials();
  return <ServicesView services={services} testimonials={testimonials} />;
};

export default ServicesPage;
