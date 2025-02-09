import { useCallback, useState } from 'react';

import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

// Define TypeScript types for the skills data structure
interface Skill {
  category: string;
  items: string[];
}

interface SkillsData {
  skillGroups: Skill[];
}

// GROQ query to fetch all skills
const skillsQuery = groq`*[_type == "skills"][0] {
  skillGroups[] {
    category,
    items
  }
}`;

export function useSkills() {
  const [skills, setSkills] = useState<SkillsData | null>(null);
  const [loading, setLoading] = useState(true);

  const getSkills = useCallback(async () => {
    try {
      const data = await client.fetch(skillsQuery);
      console.log({ data });
      setSkills(data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getSkills, skills, loading };
}
