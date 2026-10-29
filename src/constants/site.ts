import type { SocialLinkItem } from '../types/project';

export const SITE_CONFIG = {
  name: 'Amr Hesham',
  nameAr: 'عمرو هشام',
  brandDisplay: 'AMR Hesham',
  role: 'Frontend Engineer',
  location: 'Mansoura, Egypt',
  email: 'amr.hesham.salem@gmail.com',
  phone: '+201515323810',
  cvPath: '/Amr_Hesham_Frontend Developer.pdf',
  cvDownloadName: 'Amr_Hesham_Frontend Developer.pdf',
  url: 'https://amrhesham.vercel.app',
  copyrightYear: 2026,
} as const;

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: 'Direct Chat',
    href: 'https://wa.me/201515323810',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Profile',
    href: 'https://www.linkedin.com/in/amr-hesham-10082a276',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'Repositories',
    href: 'https://github.com/amrhesham-salem',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: 'Profile',
    href: 'https://www.instagram.com/amrhesham_dev',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    value: 'Content',
    href: 'https://www.tiktok.com/@amrhesham_dev',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    value: 'Profile',
    href: 'https://www.facebook.com/amr.hesham.234617/',
  },
];
