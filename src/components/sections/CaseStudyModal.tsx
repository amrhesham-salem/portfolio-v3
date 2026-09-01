import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../types/project';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { i18n, t } = useTranslation();
  if (!project) return null;

  const isArabic = i18n.language.startsWith('ar');

  return (
    <div className="fixed inset-0 z-50 bg-[#0C0E0D]/95 backdrop-blur-xl overflow-y-auto p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* زرار الرجوع */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/4 text-[#ECEFE6] hover:bg-white/8 border border-white/10 text-xs font-mono mb-8 transition-all cursor-pointer"
        >
          {isArabic ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
          <span>{t('projects.back')}</span>
        </button>

        {/* عنوان وتفاصيل المشروع */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h1 className="text-3xl md:text-5xl font-semibold text-[#ECEFE6] tracking-tight">
              {project.title}
            </h1>
            <span className="text-xs font-mono text-[#84A98C] px-3 py-1 rounded-full bg-[#84A98C]/10 border border-[#84A98C]/20">
              {project.year}
            </span>
          </div>

          <p className="text-lg text-[#8F9B94] leading-relaxed max-w-2xl">
            {isArabic ? project.tagline.ar : project.tagline.en}
          </p>
        </div>

        {/* روابط المشروع وسرعة الوصول */}
        <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ECEFE6] text-[#0C0E0D] text-xs font-medium hover:bg-white transition-all"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/4 text-[#ECEFE6] text-xs font-medium border border-white/10 hover:bg-white/8 transition-all"
            >
                <svg className="w-4 h-4 fill-current text-[#84A98C]" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>{t('projects.sourceCode')}</span>
            </a>
            )}
        </div>

        {/* Metrics Grid */}
        {project.caseStudy.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-12">
            {project.caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#141715] border border-white/5">
                <span className="text-xs font-mono text-[#8F9B94] block mb-1">
                  {isArabic ? metric.label.ar : metric.label.en}
                </span>
                <span className="text-lg font-semibold text-[#ECEFE6]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* تفاصيل دراسة الحالة (Problem / Solution / Architecture) */}
        <div className="space-y-10 text-[#8F9B94] leading-relaxed">
          {/* 1. Problem */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#ECEFE6]">
              01 // The Problem & Context
            </h3>
            <p className="text-base bg-[#141715]/40 p-5 rounded-xl border border-white/5">
              {isArabic ? project.caseStudy.problem.ar : project.caseStudy.problem.en}
            </p>
          </section>

          {/* 2. Solution */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#ECEFE6]">
              02 // The Engineering Solution
            </h3>
            <p className="text-base bg-[#141715]/40 p-5 rounded-xl border border-white/5">
              {isArabic ? project.caseStudy.solution.ar : project.caseStudy.solution.en}
            </p>
          </section>

          {/* 3. Architecture */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#ECEFE6]">
              03 // Architectural Decisions
            </h3>
            <p className="text-base bg-[#141715]/40 p-5 rounded-xl border border-white/5">
              {isArabic ? project.caseStudy.architecture.ar : project.caseStudy.architecture.en}
            </p>
          </section>

          {/* 4. Challenges */}
          {project.caseStudy.keyChallenges.length > 0 && (
            <section className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-[#ECEFE6]">
                04 // Key Challenges Solved
              </h3>
              <div className="space-y-3">
                {project.caseStudy.keyChallenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-[#141715]/40 border border-white/5">
                    <CheckCircle2 size={16} className="text-[#84A98C] shrink-0 mt-1" />
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