import { SKILLS_QUERY } from '../queries/skills.query';
import { SkillsData } from '../types/skills.type';
import { client } from '@/sanity/lib/client';

export const getSkills = async (): Promise<SkillsData> => {
  try {
    const skills = (await client.fetch(SKILLS_QUERY)) as SkillsData;
    return skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return { skillGroups: [] };
  }
};
