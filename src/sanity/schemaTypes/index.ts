import { type SchemaTypeDefinition } from 'sanity';
import skills from './skills.sanity.schema';
import testimonial from './testimonials.sanity.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills, testimonial] as SchemaTypeDefinition[],
};
