import { groq } from 'next-sanity';

export const SKILLS_QUERY = groq`*[_type == "skills"][0] {
  skillGroups[] {
    category,
    items
  }
}`;
