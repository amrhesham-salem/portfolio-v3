import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/site';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith('ar');

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? 'en' : 'ar');
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center p-4">
      <nav
        aria-label="Primary Navigation"
        className="w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm"
      >
        {/* Brand */}
        <a
          href="#top"
          className="font-mono text-sm tracking-widest text-slate-900 font-semibold hover:text-sky-600 transition-colors"
        >
          {SITE_CONFIG.brandDisplay}
        </a>

        {/* Links (Projects / Milestones / Contact) */}
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider text-slate-500">
          <a href="#projects" className="hover:text-slate-900 transition-colors">
            {t('nav.projects')}
          </a>
          <a href="#milestones" className="hover:text-slate-900 transition-colors">
            {t('nav.milestones')}
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            {t('nav.contact')}
          </a>
        </div>

        {/* Language Switcher */}
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={isArabic ? 'Switch language to English' : 'تغيير اللغة إلى العربية'}
          className="flex items-center gap-2 px-3 py-1 text-xs font-mono rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-all cursor-pointer"
        >
          <Globe size={13} className="text-sky-500" aria-hidden="true" />
          <span>{isArabic ? 'English' : 'عربي'}</span>
        </button>
      </nav>
    </header>
  );
};
