import { useState } from 'react';
import { useDirection } from './hooks/useDirection';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CaseStudyModal } from './components/sections/CaseStudyModal';
import { projects } from './data/projects';
import { MilestonesMarquee } from './components/sections/MilestonesMarquee';
import { Footer } from './components/layout/Footer';


export default function App() {
  useDirection();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const activeProject = projects.find((p) => p.slug === selectedSlug) || null;

  return (
    <div className="min-h-screen bg-[#0E110F] text-[#E1E6E1] relative selection:bg-[#7A9A80]/30 selection:text-white pb-24">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

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