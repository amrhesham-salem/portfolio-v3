import { useState } from 'react';
import { useDirection } from './hooks/useDirection';
import { useSeo } from './hooks/useSeo';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CaseStudyModal } from './components/sections/CaseStudyModal';
import { MilestonesMarquee } from './components/sections/MilestonesMarquee';
import { Footer } from './components/layout/Footer';
import { projects } from './data/projects';

export default function App() {
  useDirection();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const activeProject = projects.find((p) => p.slug === selectedSlug) || null;
  useSeo(activeProject);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 relative selection:bg-sky-200/60 selection:text-sky-900">
      <Navbar />

      <main className="relative z-10 space-y-16">
        <Hero />
        <ProjectsSection onSelectCaseStudy={(slug) => setSelectedSlug(slug)} />
        <MilestonesMarquee />
      </main>

      <Footer />

      {/* Case Study Modal */}
      {selectedSlug && (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setSelectedSlug(null)}
        />
      )}
    </div>
  );
}
