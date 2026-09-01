import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { ProjectCard } from '../common/ProjectCard';

interface ProjectsSectionProps {
  onSelectCaseStudy: (slug: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectCaseStudy }) => {
  const { t } = useTranslation();
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      {/* عنوان القسم */}
      <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#ECEFE6] tracking-tight">
          {t('projects.sectionTitle')}
        </h2>
        <span className="text-xs font-mono text-[#8F9B94]">
          {featuredProjects.length} Selected Works
        </span>
      </div>

      {/* Grid المشاريع */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onSelectCaseStudy={onSelectCaseStudy}
          />
        ))}
      </div>
    </section>
  );
};