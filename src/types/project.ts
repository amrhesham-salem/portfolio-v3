export interface CaseStudySection {
  title: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
}

export interface Project {
  slug: string;
  title: string;
  tagline: {
    en: string;
    ar: string;
  };
  summary: {
    en: string;
    ar: string;
  };
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  caseStudy: {
    problem: {
      en: string;
      ar: string;
    };
    solution: {
      en: string;
      ar: string;
    };
    architecture: {
      en: string;
      ar: string;
    };
    keyChallenges: {
      en: string;
      ar: string;
    }[];
    metrics?: {
      label: { en: string; ar: string };
      value: string;
    }[];
  };
}