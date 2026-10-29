import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  onSelectCaseStudy: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectCaseStudy }) => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language.startsWith('ar');

  return (
    <article className="group relative rounded-2xl bg-white border border-slate-200 hover:border-sky-300/60 hover:shadow-md shadow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* Card Header & Image */}
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={`${project.title} — Amr Hesham`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-sky-700 px-2 py-0.5 rounded bg-sky-100 border border-sky-200 shrink-0">
              {project.year}
            </span>
          </div>

          <p className="text-sm text-slate-500 leading-relaxed mb-5">
            {isArabic ? project.summary.ar : project.summary.en}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-sky-100 text-sky-800 border border-sky-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 mt-auto">
        {/* Case Study Button */}
        <button
          type="button"
          onClick={() => onSelectCaseStudy(project.slug)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
        >
          <span>{t('projects.readCaseStudy')}</span>
          {isArabic ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        </button>

        {/* Quick Links (Live & GitHub) */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-700 transition-colors p-1"
              title="GitHub Repository"
              aria-label={`${project.title} GitHub Repository`}
            >
              <GitHubIcon className="w-4 h-4 fill-current" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-600 transition-colors p-1"
              title="Live Demo"
              aria-label={`${project.title} Live Demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
