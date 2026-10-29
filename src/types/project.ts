export interface LocalizedText {
  en: string;
  ar: string;
}

export interface ProjectMetric {
  label: LocalizedText;
  value: string;
}

export interface ProjectCaseStudy {
  problem: LocalizedText;
  solution: LocalizedText;
  architecture: LocalizedText;
  keyChallenges: LocalizedText[];
  metrics?: ProjectMetric[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: LocalizedText;
  summary: LocalizedText;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  caseStudy: ProjectCaseStudy;
}

export interface MilestoneItem {
  id: number;
  title: LocalizedText;
  image: string;
  postUrl: string;
  tag: string;
}

export type SocialPlatform = 'whatsapp' | 'linkedin' | 'github' | 'instagram' | 'tiktok' | 'facebook';

export interface SocialLinkItem {
  id: SocialPlatform;
  label: string;
  value: string;
  href: string;
}
