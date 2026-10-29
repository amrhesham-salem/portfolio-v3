import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { milestones } from '../../data/milestones';

export const MilestonesMarquee: React.FC = () => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language.startsWith('ar');

  // Duplicate items to ensure seamless infinite scroll
  const duplicatedMilestones = [...milestones, ...milestones, ...milestones, ...milestones];

  return (
    <section
      id="milestones"
      aria-labelledby="milestones-heading"
      className="py-16 overflow-hidden relative border-t border-slate-200/60"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h2
          id="milestones-heading"
          className="text-sm font-mono uppercase tracking-widest text-slate-800 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" aria-hidden="true" />
          {t('milestones.sectionTitle')}
        </h2>
      </div>

      {/* Light-mode side-fade gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#F1F5F9] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#F1F5F9] to-transparent z-10" />

      {/* Scrolling strip */}
      <div className="flex w-full overflow-hidden">
        <div className={isArabic ? 'animate-marquee-rtl' : 'animate-marquee-ltr'}>
          <div className="flex gap-5 shrink-0 px-2.5">
            {duplicatedMilestones.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className="relative w-70 h-47.5 md:w-85 md:h-55 rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 group cursor-pointer bg-white shrink-0 transition-colors shadow-sm"
              >
                {/* Milestone image */}
                <img
                  src={item.image}
                  alt={isArabic ? item.title.ar : item.title.en}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-105 group-hover:opacity-50"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Category tag */}
                <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-mono bg-white/90 text-slate-500 border border-slate-200/80 backdrop-blur-sm">
                  {item.tag}
                </div>

                {/* Hover overlay — light glass with dark text */}
                <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 p-4 text-center">
                  <p className="text-slate-800 text-xs md:text-sm font-medium tracking-wide">
                    {isArabic ? item.title.ar : item.title.en}
                  </p>

                  <a
                    href={item.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-slate-800 bg-white/70 hover:bg-white border border-slate-200 rounded-full transition-colors"
                  >
                    <span>{t('milestones.viewPost')}</span>
                    <ExternalLink size={12} className="text-sky-500" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
