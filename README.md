# Amr Hesham — Frontend Engineer Portfolio

Personal portfolio of **Amr Hesham** (`عمرو هشام`), a Frontend Engineer based in Mansoura, Egypt, specializing in **React.js**, **TypeScript**, **Tailwind CSS**, and clean UI architecture.

## ✨ Architecture & Features

- **Clean Modular Architecture**:
  - `src/constants/`: Centralized site configuration, metadata, and social media channels (`site.ts`).
  - `src/data/`: Decoupled domain datasets (`projects.ts`, `milestones.ts`).
  - `src/types/`: Strict TypeScript domain interfaces (`project.ts`).
  - `src/hooks/`: Custom hooks for RTL/LTR directionality (`useDirection.ts`) and dynamic SEO head synchronization (`useSeo.ts`).
  - `src/components/`: Organized into `common/` (reusable cards & SVG icons), `layout/` (`Navbar`, `Footer`), and `sections/` (`Hero`, `ProjectsSection`, `MilestonesMarquee`, `CaseStudyModal`).
  - `src/i18n/`: Bilingual English & Arabic (`en` / `ar`) localization.
- **SEO & Social Readiness**:
  - Full Open Graph (`og:*`) and Twitter Card metadata.
  - Rich `Schema.org` JSON-LD Structured Data (`Person`, `WebSite`, `ProfilePage`) linking official accounts across GitHub, LinkedIn, Instagram, TikTok, and Facebook via `sameAs`.
  - Pre-configured `robots.txt`, `sitemap.xml`, `site.webmanifest`, and custom `favicon.svg`.

## 🔗 Official Profiles

- **GitHub**: [github.com/amrhesham-salem](https://github.com/amrhesham-salem)
- **LinkedIn**: [linkedin.com/in/amr-hesham-10082a276](https://www.linkedin.com/in/amr-hesham-10082a276)
- **Instagram**: [instagram.com/amrhesham_dev](https://www.instagram.com/amrhesham_dev)
- **TikTok**: [tiktok.com/@amrhesham_dev](https://www.tiktok.com/@amrhesham_dev)
- **Facebook**: [facebook.com/amr.hesham.234617](https://www.facebook.com/amr.hesham.234617/)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
