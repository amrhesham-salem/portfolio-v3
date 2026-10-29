import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/site';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-28 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        {/* Status Line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
            {t('hero.location')}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />
          <span className="text-xs tracking-wide text-slate-500 font-mono">
            {t('hero.status')}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.15] mb-6">
          {t('hero.title')}
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
          {t('hero.description')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-sm"
          >
            <span>{t('hero.viewWork')}</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>

          <a
            href={SITE_CONFIG.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            download={SITE_CONFIG.cvDownloadName}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-800 text-sm font-medium border border-slate-200 hover:bg-slate-50 transition-all"
          >
            <FileText size={15} className="text-sky-500" aria-hidden="true" />
            <span>{t('hero.downloadCv')}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
