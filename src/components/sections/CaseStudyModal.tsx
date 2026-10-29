import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from '../common/SocialIcons';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language.startsWith('ar');

  // Lock body scroll and handle Escape key while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl overflow-y-auto p-6 md:p-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 text-xs font-mono mb-8 transition-all cursor-pointer"
        >
          {isArabic ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
          <span>{t('projects.back')}</span>
        </button>

        {/* Project title & details */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h2
              id="case-study-title"
              className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight"
            >
              {project.title}
            </h2>
            <span className="text-xs font-mono text-sky-700 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
              {project.year}
            </span>
          </div>

          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
            {isArabic ? project.tagline.ar : project.tagline.en}
          </p>
        </div>

        {/* Quick access links */}
        <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-slate-200">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all"
            >
              <span>{t('projects.liveDemo')}</span>
              <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-700 text-xs font-medium border border-slate-200 hover:bg-slate-50 transition-all"
            >
              <GitHubIcon className="w-4 h-4 fill-current text-slate-500" />
              <span>{t('projects.sourceCode')}</span>
            </a>
          )}
        </div>

        {/* Metrics Grid */}
        {project.caseStudy.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-12">
            {project.caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  {isArabic ? metric.label.ar : metric.label.en}
                </span>
                <span className="text-lg font-semibold text-slate-900">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Case Study sections */}
        <div className="space-y-10 text-slate-600 leading-relaxed">
          {/* 1. Problem */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-800">
              01 // The Problem & Context
            </h3>
            <p className="text-base bg-slate-50/80 p-5 rounded-xl border border-slate-200/60">
              {isArabic ? project.caseStudy.problem.ar : project.caseStudy.problem.en}
            </p>
          </section>

          {/* 2. Solution */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-800">
              02 // The Engineering Solution
            </h3>
            <p className="text-base bg-slate-50/80 p-5 rounded-xl border border-slate-200/60">
              {isArabic ? project.caseStudy.solution.ar : project.caseStudy.solution.en}
            </p>
          </section>

          {/* 3. Architecture */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-800">
              03 // Architectural Decisions
            </h3>
            <p className="text-base bg-slate-50/80 p-5 rounded-xl border border-slate-200/60">
              {isArabic ? project.caseStudy.architecture.ar : project.caseStudy.architecture.en}
            </p>
          </section>

          {/* 4. Challenges */}
          {project.caseStudy.keyChallenges.length > 0 && (
            <section className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-slate-800">
                04 // Key Challenges Solved
              </h3>
              <div className="space-y-3">
                {project.caseStudy.keyChallenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-1" />
                    <span className="text-sm">
                      {isArabic ? challenge.ar : challenge.en}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
