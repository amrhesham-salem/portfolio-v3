import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '../../constants/site';
import { SocialPlatformIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="py-20 px-6 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 mb-2 tracking-tight">
            {t('footer.title')}
          </h2>
          <p className="text-sm text-slate-500 font-light">
            {t('footer.subtitle')}
          </p>
        </div>

        {/* Contact Channel Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={`${SITE_CONFIG.name} on ${item.label}`}
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-sm"
            >
              <SocialPlatformIcon platform={item.id} />
              <span className="text-xs font-mono text-slate-800">{item.label}</span>
              <ArrowUpRight
                size={12}
                className="text-slate-400 group-hover:text-slate-700 transition-colors"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 border-t border-slate-200/60 text-[11px] font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
          <span>{SITE_CONFIG.location}</span>
          <span>
            © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.name}
          </span>
        </div>
      </div>
    </footer>
  );
};
