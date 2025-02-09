import { defineArrayMember, defineField, defineType } from 'sanity';

interface SkillGroup {
  category: string;
  items: string[];
}

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skillGroups',
      title: 'Skill Groups',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'items',
              title: 'Skills',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      skillGroups: 'skillGroups',
    },
    prepare({ skillGroups = [] }: { skillGroups: SkillGroup[] }) {
      const allCategories = skillGroups
        .map((group: SkillGroup) => group.category)
        .join(', ');
      const totalSkills = skillGroups.reduce(
        (acc: number, group: SkillGroup) => acc + (group.items?.length || 0),
        0,
      );

      return {
        title: allCategories || 'Untitled',
        subtitle: `${totalSkills} skills total`,
      };
    },
  },
});
