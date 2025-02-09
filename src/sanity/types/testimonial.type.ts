export interface Testimonial {
  name: string;
  role: string;
  content: string;
  date: string;
  avatar: string;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}
