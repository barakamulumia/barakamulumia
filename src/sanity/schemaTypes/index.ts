import { type SchemaTypeDefinition } from 'sanity';
import skills from './skills.sanity.schema';
import testimonial from './testimonials.sanity.schema';
import services from './services.sanity.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills, testimonial, services] as SchemaTypeDefinition[],
};
