import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-28 relative">
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
          <span className="w-1 h-1 rounded-full bg-slate-300" />
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
            <ArrowDown size={15} />
          </a>

          <a
            href="/Amr-Hesham-Frontend-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Amr-Hesham-Frontend-CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-800 text-sm font-medium border border-slate-200 hover:bg-slate-50 transition-all"
          >
            <FileText size={15} className="text-sky-500" />
            <span>{t('hero.downloadCv')}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};