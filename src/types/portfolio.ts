export enum PageId {
  Home = 'home',
  About = 'about',
  Education = 'education',
  Experience = 'experience',
  Skills = 'skills',
  Projects = 'projects',
  Extracurricular = 'extracurricular',
  Contact = 'contact',
  CV = 'cv',
}

export interface PageRouteMeta {
  id: PageId;
  path: string;
  label: string;
  shortLabel: string;
  title: string;
  summary: string;
}

export interface PersonalProfile {
  fullName: string;
  targetRole: string;
  headlineTitle: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  languages: string;
  linkedinUrl: string;
  linkedinLabel: string;
  introLead: string;
  coreAccountingHighlights: string[];
  metrics: { value: string; label: string }[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  subject: string;
  institution: string;
  year: string;
  status: string;
}

export interface TrainingEntry {
  id: string;
  course: string;
  institute: string;
  year: string;
  duration: string;
  status: string;
  learningAreas: string[];
  description: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  employmentType: 'Full-Time' | 'Additional Experience';
  period: string;
  summary: string;
  responsibilities: string[];
  toolsAndAreas: string[];
}

export interface SkillItem {
  name: string;
  source: string;
  context: string;
}

export interface SkillDomain {
  id: 'core-accounting' | 'tally-excel' | 'purchase-office' | 'other-tools';
  title: string;
  subtitle: string;
  isSecondary?: boolean;
  items: SkillItem[];
}

export type ProjectClassification =
  | 'Training Practice'
  | 'Applied Skills Showcase'
  | 'Work Experience';

export interface ProjectEntry {
  id: string;
  title: string;
  classification: ProjectClassification;
  contextLabel: string;
  role: string;
  summary: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  tools: string[];
  sampleImage?: string;
  sampleImageAlt?: string;
  samplePlaceholderNote: string;
  featured: boolean;
}

export interface ExtracurricularEntry {
  id: string;
  organization: string;
  membership: string;
  responsibility: string;
  activitiesSummary: string;
  category: string;
  description: string;
  highlights: string[];
}
