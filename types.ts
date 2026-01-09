export type ProjectCategory = 'academic' | 'personal' | 'challenge';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
  description: string;
  topics: string[];
}
export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  category: ProjectCategory;
}

export interface NavItem {
  label: string;
  href: string;
}