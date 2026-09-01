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

  // مضاعفة العناصر لضمان استمرارية الحركة بدون فراغات
  const duplicatedMilestones = [...milestones, ...milestones, ...milestones, ...milestones];

  return (
    <section id="milestones" className="py-16 overflow-hidden relative border-t border-white/4">
      {/* الهيدر */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h3 className="text-sm font-mono uppercase tracking-widest text-[#E1E6E1] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7A9A80]" />
          {isArabic ? 'محطات ولحظات حية' : 'Milestones & Community'}
        </h3>
      </div>

      {/* Gradients لتلاشي الأطراف */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#0E110F] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#0E110F] to-transparent z-10" />

      {/* شريط الصور المتحرك بالـ CSS */}
      <div className="flex w-full overflow-hidden">
        <div className={isArabic ? 'animate-marquee-rtl' : 'animate-marquee-ltr'}>
          <div className="flex gap-5 shrink-0 px-2.5">
            {duplicatedMilestones.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="relative w-70 h-47.5 md:w-85 md:h-55 rounded-xl overflow-hidden border border-white/6 hover:border-white/20 group cursor-pointer bg-[#151A16] shrink-0 transition-colors"
              >
                {/* صورة الإنجاز */}
                <img
                    src={item.image}
                    alt={item.title.en}
                    className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-40"
                    onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                    }}
                    />

                    {/* شارة التصنيف */}
                    <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-mono bg-[#0E110F]/80 text-[#8B998D] border border-white/5 backdrop-blur-sm">
                    {item.tag}
                    </div>

                    {/* تفاصيل الكارت والنصوص تظهر بوضوح عند الـ Hover */}
                    <div className="absolute inset-0 bg-[#0E110F]/70 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 p-4 text-center">
                    <p className="text-[#E1E6E1] text-xs md:text-sm font-medium tracking-wide">
                        {isArabic ? item.title.ar : item.title.en}
                    </p>

                    <a
                        href={item.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-[#E1E6E1] bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 rounded-full transition-colors"
                    >
                        <span>{isArabic ? 'عرض المنشور' : 'View Post'}</span>
                        <ExternalLink size={12} className="text-[#7A9A80]" />
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