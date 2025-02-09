import { Metadata, NextPage } from 'next';

import { ContactView } from '@/features/contact/contact.view';
import { getTestimonials } from '@/sanity/api/testimonials.api';

export const metadata: Metadata = {
  title: 'Contact | Baraka Mulumia',
  description:
    "Get in touch with me to discuss your project or to explore how I can help you achieve your digital goals. Let's collaborate and create something extraordinary together!",
};

const ContactPage: NextPage = async () => {
  const testimonials = await getTestimonials();
  return <ContactView testimonials={testimonials} />;
};

export default ContactPage;
