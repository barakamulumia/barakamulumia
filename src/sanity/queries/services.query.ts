import { groq } from 'next-sanity';

export const servicesQuery = groq`*[_type == "services"] {
  _id,
  title,
  description,
  "imageUrl": image.asset->url
}`;
