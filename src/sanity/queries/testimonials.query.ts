import { groq } from 'next-sanity';

export const TESTIMONIALS_QUERY = groq`*[_type == "testimonial"] {
  name,
  role,
  content,
  date,
  "avatar": avatar.asset->url
}`;
