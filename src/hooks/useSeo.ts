import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Project } from '../types/project';

export const useSeo = (activeProject: Project | null = null) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith('ar');

  useEffect(() => {
    const baseTitle = t('seo.title');
    const baseDescription = t('seo.description');

    const title = activeProject
      ? `${activeProject.title} — Amr Hesham`
      : baseTitle;

    const description = activeProject
      ? isArabic
        ? activeProject.summary.ar
        : activeProject.summary.en
      : baseDescription;

    document.title = title;

    const updateMeta = (selector: string, content: string) => {
      const el = document.querySelector<HTMLMetaElement>(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    updateMeta('meta[name="title"]', title);
    updateMeta('meta[name="description"]', description);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);
  }, [activeProject, isArabic, t]);
};
