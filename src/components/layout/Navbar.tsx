import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith('ar');

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? 'en' : 'ar');
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center p-4">
      <nav className="w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-full bg-[#141715]/80 backdrop-blur-md border border-white/10 shadow-lg">
        {/* Brand */}
        <a href="#" className="font-mono text-sm tracking-widest text-[#ECEFE6] font-semibold hover:text-[#84A98C] transition-colors">
          AMR Hesham
        </a>

        {/* Links (Projects / Milestones / Contact) */}
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider text-[#8F9B94]">
          <a href="#projects" className="hover:text-[#ECEFE6] transition-colors">
            {t('nav.projects')}
          </a>
          <a href="#milestones" className="hover:text-[#ECEFE6] transition-colors">
            {t('nav.milestones')}
          </a>
          <a href="#contact" className="hover:text-[#ECEFE6] transition-colors">
            {t('nav.contact')}
          </a>
        </div>

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1 text-xs font-mono rounded-full bg-white/4 hover:bg-white/8 text-[#ECEFE6] border border-white/10 transition-all cursor-pointer"
        >
          <Globe size={13} className="text-[#84A98C]" />
          <span>{isArabic ? 'English' : 'عربي'}</span>
        </button>
      </nav>
    </header>
  );
};