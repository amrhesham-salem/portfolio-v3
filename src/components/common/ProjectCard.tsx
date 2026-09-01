import { useTranslation } from 'react-i18next';
import { ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  onSelectCaseStudy: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectCaseStudy }) => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language.startsWith('ar');

  return (
    <div className="group relative rounded-2xl bg-[#141715]/60 border border-white/10 hover:border-[#52796F]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* رأس الكارت والصورة */}
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-[#0C0E0D]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              // صورة افتراضية رايقة لو الصورة لسه مش موجودة في المسار
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#141715] via-transparent to-transparent" />
        </div>

        {/* محتوى الكارت */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-semibold text-[#ECEFE6] tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-[#8F9B94] px-2 py-0.5 rounded bg-white/4 border border-white/5">
              {project.year}
            </span>
          </div>

          <p className="text-sm text-[#8F9B94] leading-relaxed mb-5">
            {isArabic ? project.summary.ar : project.summary.en}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#1B1F1C] text-[#84A98C] border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* أزرار الإجراءات في الأسفل */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 mt-auto">
        {/* زرار الـ Case Study */}
        <button
          onClick={() => onSelectCaseStudy(project.slug)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#ECEFE6] hover:text-[#84A98C] transition-colors cursor-pointer"
        >
          <span>{t('projects.readCaseStudy')}</span>
          {isArabic ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        </button>

        {/* روابط سريعة (Live & GitHub) */}
        <div className="flex items-center gap-3">
            {project.githubUrl && (
            <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8F9B94] hover:text-[#ECEFE6] transition-colors p-1"
                title="GitHub Repository"
            >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            </a>
            )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8F9B94] hover:text-[#84A98C] transition-colors p-1"
              title="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};