import { ContactView } from '@/features/contact/contact.view';
import { NextPage } from 'next';
import { getTestimonials } from '@/sanity/api/testimonials.api';

const ContactPage: NextPage = async () => {
  const testimonials = await getTestimonials();
  return <ContactView testimonials={testimonials} />;
};

export default ContactPage;
