import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language.startsWith('ar');

  const contactChannels = [
    {
      label: 'WhatsApp',
      value: 'Direct Chat',
      href: 'https://wa.me/201515323810',
      icon: <MessageCircle size={15} className="text-slate-900" />
    },
    {
      label: 'LinkedIn',
      value: 'Profile',
      href: 'https://www.linkedin.com/in/amr-hesham-10082a276/',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current text-slate-900" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63z" />
        </svg>
      )
    },
    {
      label: 'GitHub',
      value: 'Repositories',
      href: 'https://github.com/amrhesham-salem',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current text-slate-900" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      label: 'TikTok',
      value: 'Content',
      href: 'https://www.tiktok.com/@amrhesham_dev',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current text-slate-900" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      )
    }
  ];

  return (
    <footer id="contact" className="py-20 px-6 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 mb-2 tracking-tight">
            {isArabic ? 'تواصل معي' : 'Connect & Collaborate'}
          </h2>
          <p className="text-sm text-slate-500 font-light">
            {isArabic
              ? 'متاح للمناقشات البرمجية، الفرص الجديدة، أو مشاريع العمل الحر.'
              : 'Available for discussions, engineering roles, or freelance projects.'}
          </p>
        </div>

        {/* Contact Channel Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {contactChannels.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-sm"
            >
              {item.icon}
              <span className="text-xs font-mono text-slate-800">{item.label}</span>
              <ArrowUpRight size={12} className="text-slate-400 group-hover:text-slate-700 transition-colors" />
            </a>
          ))}
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 border-t border-slate-200/60 text-[11px] font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
          <span>Mansoura, Egypt</span>
          <span>© 2026 Amr Hesham</span>
        </div>

      </div>
    </footer>
  );
};