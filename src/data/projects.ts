import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    slug: 'jogo-platform',
    title: 'JOGO Platform',
    year: '2026',
    featured: true,
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Hackathon MVP'],
    image: '/projects/jogo.png',
    liveUrl: 'https://jogo-frontend-ghcq.vercel.app/welcome',
    githubUrl: 'https://github.com/amrhesham-salem/jogo-frontend.git',
    tagline: {
      en: 'Interactive sports platform MVP built under high pressure during RedDev Hackathon.',
      ar: 'نموذج أولي لمنصة رياضية تفاعلية تم تطويره تحت ضغط زمني خلال هاكاثون RedDev.'
    },
    summary: {
      en: 'Engineered responsive frontend interfaces and integrated real-time video analytics endpoints in a collaborative team sprint.',
      ar: 'تطوير واجهات تفاعلية سريعة وربط نقاط الـ API الخاصة بالتحليلات الرياضية بالتعاون مع فريق عمل متكامل.'
    },
    caseStudy: {
      problem: {
        en: 'The hackathon demanded a complete functional MVP within a strict time limit, requiring rapid UI assembly without compromising state synchronization or performance.',
        ar: 'تطلب الهاكاثون تقديم منتج أولي قابل للاختبار في وقت قياسي جداً، مع الحفاظ على تزامن البيانات وثبات الأداء.'
      },
      solution: {
        en: 'Structured modular component hierarchies, isolated data-fetching hooks, and implemented clean UI contracts with backend REST endpoints.',
        ar: 'بناء هيكل مكونات مجزأ ومعزول، واستخدام Custom Hooks لإدارة جلب البيانات والتكامل السلس مع الـ REST APIs.'
      },
      architecture: {
        en: 'Component-driven layout with TypeScript type definitions, Vite build setup, and Tailwind CSS for scalable styling.',
        ar: 'تصميم يعتمد على الـ Components المستقلة، وعقود TypeScript الصارمة للـ API responses، وتنسيق مرن بـ Tailwind CSS.'
      },
      keyChallenges: [
        {
          en: 'Handling fast iterations and last-minute schema changes during judge demos.',
          ar: 'التعامل مع التعديلات السريعة وتغييرات الـ Endpoints قبل العرض المباشر على لجنة التحكيم.'
        },
        {
          en: 'Ensuring fluid responsiveness across handheld and widescreen presentation monitors.',
          ar: 'ضمان التوافق التام والتجاوب على الشاشات الكبيرة الخاصة بالعرض وشاشات الموبايل.'
        }
      ],
      metrics: [
        { label: { en: 'Team Sprint', ar: 'مدة التطوير' }, value: 'Hackathon MVP' },
        { label: { en: 'Architecture', ar: 'المعمارية' }, value: 'TypeScript + REST' }
      ]
    }
  },
  {
    slug: 'react-store',
    title: 'React Store E-Commerce',
    year: '2026',
    featured: true,
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Context API', 'React Router'],
    image: '/projects/store.png',
    liveUrl: 'https://react-store-neon.vercel.app/',
    githubUrl: 'https://github.com/amrhesham-salem/react-store.git',
    tagline: {
      en: 'Production-ready modern e-commerce storefront with client-side state persistence.',
      ar: 'متجر إلكتروني متكامل وعصري مع إدارة شاملة للـ Cart والتصفية.'
    },
    summary: {
      en: 'A fully responsive commerce experience featuring multi-attribute product filtering, dynamic cart drawer, and robust routing.',
      ar: 'تطبيق متجر يتيح البحث، التصفية متعددة المعايير، وإدارة سلة المشتريات باستخدام Context API.'
    },
    caseStudy: {
      problem: {
        en: 'Managing multiple interconnected state branches (cart quantities, active filters, search queries) without performance degradation or prop-drilling.',
        ar: 'إدارة حالات متفرعة ومتشابكة (الكميات، الفلاتر المتزامنة، نتائج البحث) دون إرهاق الـ DOM أو التمرير اليدوي للـ Props.'
      },
      solution: {
        en: 'Designed an isolated Cart & Filter Context architecture with local storage synchronization and memoized state computations.',
        ar: 'فصل منطق الـ Cart والـ Filter في Context Providers مخصصة مع حفظ البيانات تلقائياً وتجنب الـ Re-renders الزائدة.'
      },
      architecture: {
        en: 'Strict TypeScript interfaces for domain entities, custom hooks (`useCart`, `useProducts`), and React Router v6 layouts.',
        ar: 'معمارية تعتمد على Types محددة للمنتجات، وهوكس مخصصة، ومسارات تنقل منظمة بـ React Router.'
      },
      keyChallenges: [
        {
          en: 'Optimizing filter chains to execute with zero UI lag on real-time keystrokes.',
          ar: 'تحسين عمليات التصفية والبحث لتعمل فورياً أثناء الكتابة بدون أي تأخير في الواجهة.'
        }
      ],
      metrics: [
        { label: { en: 'Type Coverage', ar: 'تغطية الأنواع' }, value: '100% Strict TS' },
        { label: { en: 'State Sync', ar: 'تزامن السلة' }, value: 'Local Persistence' }
      ]
    }
  },
  {
    slug: 'maro-dash',
    title: 'Maro Dash',
    year: '2026',
    featured: true,
    tags: ['JavaScript', 'Tailwind CSS', 'Analytics UI', 'Active Users'],
    image: '/projects/marodash.png',
    liveUrl: 'https://dashboard-maro.vercel.app/',
    githubUrl: 'https://github.com/amrhesham-salem/Dashboard_Maro.git',
    tagline: {
      en: 'Student activity tracking and analytics dashboard with proven real-world adoption.',
      ar: 'لوحة تحكم تفاعلية لتنظيم ومتابعة مهام الطلاب خدمت أكثر من 340 مستخدم نشط.'
    },
    summary: {
      en: 'Built an intuitive dashboard tailored for student workflows, generating 3.4K+ interactions with high retention.',
      ar: 'تصميم وبناء نظام إدارة مبسط وسريع لتنظيم المهام حقق تفاعلاً واسعاً واستخداماً حقيقياً.'
    },
    caseStudy: {
      problem: {
        en: 'Students required a frictionless, straightforward utility to log and visualize ongoing activity statuses without confusing UX bloat.',
        ar: 'حاجة الطلاب لأداة سريعة وخفيفة لمتابعة المهام دون تعقيدات بصرية أو بطء في التصفح.'
      },
      solution: {
        en: 'Created an uncluttered, high-contrast dashboard with instant task logging and responsive layout execution.',
        ar: 'بناء واجهة مريحة وسريعة باستخدام Tailwind CSS تمكن المستخدم من إدارة ومتابعة الأنشطة بضغطة زر.'
      },
      architecture: {
        en: 'Lightweight JavaScript architecture prioritized for quick loads and direct DOM manipulation.',
        ar: 'معمارية جافاسكريبت خفيفة تركز على سرعة التحميل وتجربة استخدام مباشرة.'
      },
      keyChallenges: [
        {
          en: 'Structuring clear visual feedback states for task progression and activity history.',
          ar: 'تصميم مؤشرات بصرية واضحة لحالة كل مهمة وسجل النشاطات السابقة.'
        }
      ],
      metrics: [
        { label: { en: 'Active Users', ar: 'المستخدمين' }, value: '+340 Users' },
        { label: { en: 'Engagements', ar: 'التفاعلات' }, value: '+3.4K Actions' }
      ]
    }
  }
];
