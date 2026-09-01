import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useDirection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isArabic = i18n.language.startsWith('ar');
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
};