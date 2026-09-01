import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';


interface MilestoneItem {
  id: number;
  title: {
    en: string;
    ar: string;
  };
  image: string;
  postUrl: string;
  tag: string;
}

const milestones: MilestoneItem[] = [
  {
    id: 1,
    title: {
      en: 'Meeting Eng. Osama Elzero',
      ar: 'لقاء البشمهندس أسامة الزيرو'
    },
    image: '/milestones/osama-elzero.jpeg',
    postUrl: 'https://www.linkedin.com/posts/amr-hesham-10082a276_frontend-softwareengineering-webdeveloper-activity-7454564860354293760-4XD8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENl5hABP7uVb53sO_P-kmco93NuvJuUnEY',
    tag: 'Community'
  },
  {
    id: 2,
    title: {
      en: 'Attending MEGA Fair 2026 Event',
      ar: 'المشاركة في حدث MEGA Fair 2026'
    },
    image: '/milestones/mega-fair.jpeg',
    postUrl: 'https://www.linkedin.com/posts/amr-hesham-10082a276_megfair-megaabrteam-softwareengineering-activity-7450480167585763329-98JO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENl5hABP7uVb53sO_P-kmco93NuvJuUnEY',
    tag: 'Event'
  },
  {
    id: 3,
    title: {
      en: 'Frontend Technical Support | Technical Gates',
      ar: 'الدعم التقني للواجهات | ورشة Technical Gates'
    },
    image: '/milestones/cis-technical-gates.jpeg',
    postUrl: 'https://www.linkedin.com/posts/amr-hesham-10082a276_frontend-technicalsupport-cisteammu-activity-7450090640849301504-kcMk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENl5hABP7uVb53sO_P-kmco93NuvJuUnEY',
    tag: 'Workshops'
  },
  {
    id: 4,
    title: {
      en: 'Top Member of Support Circle Award',
      ar: 'تكريم Top Member بدائرة الدعم الفني'
    },
    image: '/milestones/cis-top-member.jpeg',
    postUrl: 'https://www.linkedin.com/posts/amr-hesham-10082a276_frontend-support-cis-activity-7437210684595159040-Wasm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENl5hABP7uVb53sO_P-kmco93NuvJuUnEY',
    tag: 'Recognition'
  }
];

export const MilestonesMarquee: React.FC = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language.startsWith('ar');

  // Duplicate items to ensure seamless infinite scroll
  const duplicatedMilestones = [...milestones, ...milestones, ...milestones, ...milestones];

  return (
    <section id="milestones" className="py-16 overflow-hidden relative border-t border-slate-200/60">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h3 className="text-sm font-mono uppercase tracking-widest text-slate-800 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          {isArabic ? 'محطات ولحظات حية' : 'Milestones & Community'}
        </h3>
      </div>

      {/* Light-mode side-fade gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#F1F5F9] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#F1F5F9] to-transparent z-10" />

      {/* Scrolling strip */}
      <div className="flex w-full overflow-hidden">
        <div className={isArabic ? 'animate-marquee-rtl' : 'animate-marquee-ltr'}>
          <div className="flex gap-5 shrink-0 px-2.5">
            {duplicatedMilestones.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="relative w-70 h-47.5 md:w-85 md:h-55 rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 group cursor-pointer bg-white shrink-0 transition-colors shadow-sm"
              >
                {/* Milestone image */}
                <img
                    src={item.image}
                    alt={item.title.en}
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
                        <span>{isArabic ? 'عرض المنشور' : 'View Post'}</span>
                        <ExternalLink size={12} className="text-sky-500" />
                    </a>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};