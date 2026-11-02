import { LocaleCode } from '../../core/i18n/locales';
import { ProfileResourceId } from './profile';

export interface Experience {
  readonly role: string;
  readonly company: string;
  readonly dates: string;
  readonly description: string;
}

export interface PortfolioContent {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly skip: string;
  readonly navigation: string;
  readonly home: string;
  readonly work: string;
  readonly about: string;
  readonly contact: string;
  readonly menu: string;
  readonly close: string;
  readonly language: string;
  readonly hero: readonly [string, string];
  readonly intro: string;
  readonly explore: string;
  readonly selected: string;
  readonly selectedIntro: string;
  readonly selectedEngineeringTitle: string;
  readonly selectedEngineeringIntro: string;
  readonly moreEnterpriseTitle: string;
  readonly moreEnterpriseIntro: string;
  readonly contextLabel: string;
  readonly challengesLabel: string;
  readonly allWork: string;
  readonly readCase: string;
  readonly visit: string;
  readonly freelance: string;
  readonly enterprise: string;
  readonly contribution: string;
  readonly scope: string;
  readonly technology: string;
  readonly practiceTitle: string;
  readonly practiceText: string;
  readonly practice: readonly { readonly title: string; readonly text: string }[];
  readonly aboutLink: string;
  readonly workTitle: string;
  readonly workIntro: string;
  readonly supporting: string;
  readonly supportingIntro: string;
  readonly independentTitle: string;
  readonly independentIntro: string;
  readonly openCapture: string;
  readonly viewCapture: string;
  readonly aboutTitle: string;
  readonly aboutIntro: readonly string[];
  readonly experienceTitle: string;
  readonly experience: readonly Experience[];
  readonly educationTitle: string;
  readonly education: string;
  readonly resources: Readonly<Record<ProfileResourceId, string>>;
  readonly expertiseTitle: string;
  readonly expertise: readonly { readonly title: string; readonly text: string }[];
  readonly learningTitle: string;
  readonly certifications: readonly string[];
  readonly languagesTitle: string;
  readonly languages: readonly { readonly name: string; readonly level: string }[];
  readonly headerSubtitle: string;
  readonly navContact: string;
  readonly footerEyebrow: string;
  readonly footerAvailability: string;
  readonly contactTitle: string;
  readonly contactText: string;
  readonly contactCtaLabel: string;
  readonly emailLabel: string;
  readonly availability: string;
  readonly footerSignatureRole: string;
  readonly copyright: string;
  readonly footerNote: string;
  readonly backToWork: string;
  readonly otherCase: string;
  readonly employerNote: string;
  readonly notFoundTitle: string;
  readonly notFoundText: string;
  readonly meta: Readonly<
    Record<
      'home' | 'work' | 'about' | 'notFound',
      { readonly title: string; readonly description: string }
    >
  >;
}

export const PORTFOLIO_CONTENT = {
  en: {
    name: 'Mahmoud Doma',
    role: 'Frontend Engineer · Angular',
    location: 'Cairo, Egypt',
    skip: 'Skip to content',
    navigation: 'Main navigation',
    home: 'Home',
    work: 'Work',
    about: 'About',
    contact: 'Let’s talk',
    menu: 'Menu',
    close: 'Close',
    language: 'Read in Arabic',
    hero: ['Considered interfaces.', 'Complex systems.'],
    intro:
      'I’m Mahmoud, an Angular Frontend Engineer with 2+ years of professional experience building enterprise web applications, real-time monitoring systems, and complex business workflows. Focused on responsive, accessible interfaces built with architectural precision.',
    explore: 'Explore my work',
    selected: 'Featured engineering & craft.',
    selectedIntro: 'Engineering depth and interface craft through two representative systems.',
    selectedEngineeringTitle: 'Selected Engineering Work',
    selectedEngineeringIntro:
      'Core Angular systems built for real-time operations, mission-critical monitoring, and high-throughput enterprise workflows.',
    moreEnterpriseTitle: 'More Enterprise Systems',
    moreEnterpriseIntro:
      'Operational dashboards, appointment scheduling wizards, and survey platforms developed at NileTronix.',
    contextLabel: 'System context',
    challengesLabel: 'Key engineering challenges',
    allWork: 'View all work',
    readCase: 'Read case study',
    visit: 'Visit website',
    freelance: 'Freelance',
    enterprise: 'NileTronix · Enterprise',
    contribution: 'My contribution',
    scope: 'Product scope',
    technology: 'Built with',
    practiceTitle: 'The interface is only part of the work.',
    practiceText:
      'A resilient frontend must master the operational demands beneath the surface: live streaming events, role-gated access, offline continuity, and bilingual parity.',
    practice: [
      {
        title: 'Enterprise Angular Architecture',
        text: 'Modular Angular architecture, reactive state management with Signals, RxJS, and NgRx, clean component boundaries, and maintainable enterprise workflows.',
      },
      {
        title: 'Real-Time & Offline Systems',
        text: 'Real-time operational updates using SignalR and MQTT, interactive geospatial map rendering with Leaflet, and client-side offline routing using Web Workers and IndexedDB.',
      },
      {
        title: 'RTL, Localization & Accessibility',
        text: 'Bilingual enterprise interfaces with native Arabic RTL, accessible interface patterns, semantic HTML, keyboard-friendly interactions, and responsive behavior across viewports.',
      },
    ],
    aboutLink: 'More about my approach',
    workTitle: 'A closer look at the work.',
    workIntro:
      'Enterprise Angular applications and selected independent projects. Different operating contexts, shared technical rigor and interface craft.',
    supporting: 'Enterprise systems',
    supportingIntro:
      'Operational products developed at NileTronix, shown through authentic local application captures and user manual documentation.',
    independentTitle: 'Independent & Freelance Work',
    independentIntro:
      'Selected client collaborations, studio websites, and product implementations demonstrating interface craft and frontend execution.',
    openCapture: 'Open full-size capture',
    viewCapture: 'View interface capture',
    aboutTitle: 'Thoughtful on the surface. Thorough underneath.',
    aboutIntro: [
      'I’m Mahmoud Doma, a Mid-Level Frontend Engineer based in Cairo with 2+ years of professional experience specializing in Angular enterprise applications.',
      'I work where user experience connects with complex software architecture: streaming telemetry into reactive stores, coordinating offline graph routing, and ensuring bilingual interfaces feel natural in both Arabic and English.',
      'My background covers enterprise dashboards, real-time control room monitors, interactive kiosks, and independent client products. I bring architectural discipline and interface care to engineering teams.',
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        role: 'Mid Front-End Developer · Angular',
        company: 'NileTronix',
        dates: 'August 2025 — Present',
        description:
          'Develop and maintain Angular 19–21 enterprise applications for traffic control, parking automation, booking, queue systems, and customer feedback. Integrate SignalR/MQTT live feeds, implement client-side offline routing pipelines, and design reusable component systems supporting native Arabic RTL and i18n.',
      },
      {
        role: 'Freelance Front-End Developer',
        company: 'Independent',
        dates: '2023 — Present',
        description:
          'Delivered 9+ client-facing Angular and JavaScript applications across legal marketplaces, corporate portals, and software studio websites. Managed responsive design systems and browser performance across viewports.',
      },
      {
        role: 'Software Implementer',
        company: 'Izam, Inc.',
        dates: 'April — October 2024',
        description:
          'ERP interface customization, functional validation, migration verification, user training, and documentation.',
      },
    ],
    educationTitle: 'Education',
    education:
      'Bachelor of Arts in French Language & Literature, Zagazig University, 2024. Focused professionally on frontend engineering and web technologies.',
    resources: { resume: 'Download CV (PDF, English)', linkedin: 'LinkedIn', github: 'GitHub' },
    expertiseTitle: 'Technical Skills & Technologies',
    expertise: [
      {
        title: 'Angular & Application Architecture',
        text: 'Angular 19–21, TypeScript, RxJS, NgRx, Signals. Standalone architecture, reactive forms, guards, HTTP interceptors, OnPush change detection, and route lazy loading.',
      },
      {
        title: 'Real-Time, Maps & Offline Systems',
        text: 'SignalR and MQTT live telemetry. Offline persistence with IndexedDB and Web Workers; Leaflet, GeoJSON, geojson-path-finder, and Chart.js for data visualization and maps.',
      },
      {
        title: 'UI Engineering & Quality',
        text: 'PrimeNG, Bootstrap 5, SCSS, accessible semantic HTML, native Arabic RTL, Vitest, Jasmine, Karma, Git, and Chrome DevTools.',
      },
    ],
    learningTitle: 'Certifications',
    certifications: [
      'Angular Development Cross-Skilling Nanodegree — MCIT Egypt',
      'JavaScript Certification — SoloLearn',
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Arabic', level: 'Native' },
      { name: 'English', level: 'Professional working proficiency' },
    ],
    headerSubtitle: 'ANGULAR FRONTEND ENGINEER',
    navContact: 'Let’s talk ↗',
    footerEyebrow: 'CONTACT',
    footerAvailability: 'OPEN TO OPPORTUNITIES',
    contactTitle: 'Great work starts with a conversation.',
    contactText:
      'Angular engineering roles, complex products, and thoughtful frontend experiences.',
    contactCtaLabel: 'START A CONVERSATION',
    emailLabel: 'Email Mahmoud',
    availability: 'Based in Cairo · Open to remote work and relocation',
    footerSignatureRole: 'Angular Frontend Engineer',
    copyright: '© 2026 Mahmoud Doma',
    footerNote: 'Designed and built with care, in English and Arabic.',
    backToWork: 'Back to work',
    otherCase: 'Explore the other featured project',
    employerNote:
      'Developed as part of my work at NileTronix. The product belongs to its enterprise context; no public demo or confidential source access is implied.',
    notFoundTitle: 'This page isn’t here.',
    notFoundText: 'The address may have changed. Explore the selected work or return home.',
    meta: {
      home: {
        title: 'Mahmoud Doma — Angular Frontend Engineer',
        description:
          'Cairo-based Angular Frontend Engineer with 2+ years of professional experience building enterprise web applications, real-time monitoring systems, and complex business workflows.',
      },
      work: {
        title: 'Work & Systems — Mahmoud Doma',
        description:
          'Selected enterprise Angular systems, real-time traffic monitoring, parking dashboards, queue orchestration, and independent web applications.',
      },
      about: {
        title: 'About & Experience — Mahmoud Doma',
        description:
          'Meet Mahmoud Doma, an Angular Frontend Engineer based in Cairo. Experience at NileTronix, independent engineering projects, and technical skills.',
      },
      notFound: {
        title: 'Page Not Found — Mahmoud Doma',
        description:
          'This page could not be found. Return to Mahmoud Doma’s portfolio and selected work.',
      },
    },
  },
  ar: {
    name: 'محمود دومة',
    role: 'مهندس واجهات أمامية · Angular',
    location: 'القاهرة، مصر',
    skip: 'انتقل إلى المحتوى',
    navigation: 'التنقل الرئيسي',
    home: 'الرئيسية',
    work: 'الأعمال',
    about: 'عنّي',
    contact: 'نتكلم؟',
    menu: 'القائمة',
    close: 'إغلاق',
    language: 'Read in English',
    hero: ['واجهات مدروسة.', 'أنظمة بتفاصيلها.'],
    intro:
      'أنا محمود، مهندس واجهات أمامية متخصص في Angular بخبرة مهنية تتجاوز سنتين في تطوير تطبيقات الويب المؤسسية، وأنظمة المتابعة اللحظية، ومسارات الأعمال المعقدة. أركز على بناء واجهات متجاوبة وسهلة الوصول بهندسة معمارية دقيقة.',
    explore: 'استكشف أعمالي',
    selected: 'أعمال هندسية مميزة وحرفة واجهات.',
    selectedIntro: 'عمق هندسي ودقة في بناء الواجهات عبر نظامين يمثلان جانبين من خبرتي.',
    selectedEngineeringTitle: 'أعمال هندسية مختارة',
    selectedEngineeringIntro:
      'أنظمة Angular رئيسية طُوّرت للعمليات اللحظية، والمتابعة في البيئات الحرجة، ومسارات العمل المؤسسية عالية الكثافة.',
    moreEnterpriseTitle: 'مزيد من الأنظمة المؤسسية',
    moreEnterpriseIntro:
      'معاينات للوحات تحكم تشغيلية تراعي الصلاحيات، ومسارات حجز وجدولة، ومنصات استبيانات طُوّرت ضمن NileTronix.',
    contextLabel: 'سياق النظام',
    challengesLabel: 'التحديات الهندسية',
    allWork: 'كل الأعمال',
    readCase: 'اقرأ عن المشروع',
    visit: 'زيارة الموقع',
    freelance: 'عمل مستقل',
    enterprise: 'NileTronix · أنظمة مؤسسية',
    contribution: 'مساهمتي',
    scope: 'نطاق المنتج',
    technology: 'التقنيات',
    practiceTitle: 'الواجهة جزء من الحكاية.',
    practiceText:
      'وراء الواجهة الفعالة متطلبات تشغيلية حقيقية: تدفقات بيانات حية، وصلاحيات مختلفة، واستمرارية العمل دون اتصال، وتكافؤ كامل في اتجاهَي القراءة.',
    practice: [
      {
        title: 'معمارية Angular المؤسسية',
        text: 'بنية Angular معيارية ومنظمة، وإدارة الحالة التفاعلية بـ Signals وRxJS وNgRx، ومسارات عمل مؤسسية واضحة وقابلة للصيانة.',
      },
      {
        title: 'أنظمة البيانات اللحظية والعمل دون اتصال',
        text: 'استقبال البيانات التشغيلية اللحظية عبر SignalR وMQTT، وعرض الخرائط الجغرافية التفاعلية بـ Leaflet، وحساب المسارات دون اتصال بالاعتماد على Web Workers وIndexedDB.',
      },
      {
        title: 'دعم العربية والاتجاه RTL وإمكانية الوصول',
        text: 'واجهات مؤسسية ثنائية اللغة تدعم الاتجاه العربي RTL أصالةً، بأنماط واجهات تراعي إمكانية الوصول وHTML دلالي، وتجارب استخدام تراعي الصلاحيات وتتجاوب بسلاسة.',
      },
    ],
    aboutLink: 'أكثر عن طريقتي في العمل',
    workTitle: 'نظرة أقرب على الشغل.',
    workIntro:
      'تطبيقات Angular مؤسسية ومشاريع مستقلة مختارة. سياقات تشغيلية متنوعة، وانضباط تقني وحرفة واحدة في بناء الواجهات.',
    supporting: 'أنظمة مؤسسية',
    supportingIntro:
      'منتجات تشغيلية عملت عليها ضمن NileTronix، بلقطات فعلية من التطبيقات المحلية ودليل NPark. يوضح وصف كل صورة حالتها الواقعية.',
    independentTitle: 'الأعمال المستقلة والتعاقدية',
    independentIntro:
      'مشاريع مع عملاء واستوديوهات برمجية تبرز حرفة التصميم ودقة التنفيذ التقني للواجهات الأمامية.',
    openCapture: 'افتح اللقطة بالحجم الكامل',
    viewCapture: 'شاهد لقطة الواجهة',
    aboutTitle: 'اهتمام بما تراه. ودقّة فيما وراءه.',
    aboutIntro: [
      'أنا محمود دومة، مهندس واجهات أمامية متخصص في Angular بمستوى متوسط مقيم في القاهرة، ولديّ أكثر من سنتين من الخبرة المهنية في الأنظمة المؤسسية.',
      'أعمل في المساحة التي تلتقي فيها تجربة المستخدم بالبنية البرمجية المتطورة: استقبال البيانات الحية في مخازن تفاعلية، وحساب المسارات المكانية دون اتصال، وضمان طبيعية التجربة بالعربية والإنجليزية.',
      'تشمل خبرتي لوحات التحكم المؤسسية، وأنظمة مراقبة غرف العمليات اللحظية، والأكشاك التفاعلية، ومشاريع العملاء المستقلة. أقدّم هذا الانضباط المعماري لفرق الهندسة والمنتج.',
    ],
    experienceTitle: 'الخبرة المهنية',
    experience: [
      {
        role: 'مطوّر واجهات أمامية · Angular',
        company: 'NileTronix',
        dates: 'أغسطس ٢٠٢٥ — حتى الآن',
        description:
          'تطوير وصيانة تطبيقات Angular 19–21 المؤسسية لأنظمة المرور والمواقف والحجز والطوابير وتقييم العملاء. تكاملات SignalR وMQTT، ومسارات خرائط تعمل دون اتصال، ومكونات قابلة لإعادة الاستخدام تدعم العربية وتعدد اللغات.',
      },
      {
        role: 'مطوّر واجهات أمامية مستقل',
        company: 'عمل مستقل',
        dates: '٢٠٢٣ — حتى الآن',
        description:
          'نفّذت ٩ تطبيقات أو أكثر للعملاء باستخدام Angular وJavaScript، في الخدمات القانونية وبوابات الشركات واستوديوهات البرمجيات. تولّيت أنظمة التصميم المتجاوبة وأداء المتصفح عبر مختلف الشاشات.',
      },
      {
        role: 'أخصائي تنفيذ أنظمة',
        company: 'Izam, Inc.',
        dates: 'أبريل — أكتوبر ٢٠٢٤',
        description:
          'تخصيص واجهات ERP، والاختبارات الوظيفية، والتحقق من ترحيل البيانات، وتدريب المستخدمين وإعداد التوثيق.',
      },
    ],
    educationTitle: 'التعليم',
    education:
      'ليسانس آداب في اللغة الفرنسية وآدابها، جامعة الزقازيق، ٢٠٢٤. تركيزي المهني الأساسي هو هندسة الواجهات الأمامية وتقنيات الويب الحديثة.',
    resources: {
      resume: 'تحميل السيرة الذاتية (PDF، بالإنجليزية)',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    expertiseTitle: 'المهارات والتقنيات',
    expertise: [
      {
        title: 'Angular ومعمارية التطبيقات',
        text: 'Angular 19–21 وTypeScript وRxJS وNgRx وSignals. مكونات مستقلة، ونماذج تفاعلية، وحماية المسارات، واعتراض طلبات HTTP، وOnPush والتحميل التدريجي للمسارات.',
      },
      {
        title: 'البيانات اللحظية والخرائط والعمل دون اتصال',
        text: 'تحديثات SignalR وMQTT اللحظية. التخزين المحلي بـ IndexedDB وWeb Workers، مع Leaflet وGeoJSON وgeojson-path-finder وChart.js للخرائط والرسوم البيانية.',
      },
      {
        title: 'هندسة الواجهات وجودة البرمجيات',
        text: 'PrimeNG وBootstrap 5 وSCSS وواجهات HTML دلالية متجاوبة، مع دعم العربية والاتجاه RTL. وأستخدم Vitest وJasmine وKarma وGit وChrome DevTools للاختبار وتتبع الأداء.',
      },
    ],
    learningTitle: 'الشهادات والاعتمادات',
    certifications: [
      'برنامج Angular Development Cross-Skilling Nanodegree — وزارة الاتصالات وتكنولوجيا المعلومات المصرية (MCIT)',
      'شهادة JavaScript — SoloLearn',
    ],
    languagesTitle: 'اللغات',
    languages: [
      { name: 'العربية', level: 'اللغة الأم' },
      { name: 'الإنجليزية', level: 'إجادة مهنية للعمل' },
    ],
    headerSubtitle: 'مهندس واجهات أمامية · Angular',
    navContact: 'تواصل معي ↗',
    footerEyebrow: 'تواصل',
    footerAvailability: 'متاح لفرص العمل',
    contactTitle: 'كل مشروع مميز يبدأ بحوار.',
    contactText:
      'فرص العمل في هندسة واجهات Angular، والمنتجات الرقمية المعقدة، وتجارب الاستخدام المصممة بعناية.',
    contactCtaLabel: 'ابدأ محادثة',
    emailLabel: 'راسل محمود',
    availability: 'مقيم في القاهرة · منفتح على العمل عن بُعد والانتقال',
    footerSignatureRole: 'مهندس واجهات أمامية · Angular',
    copyright: '© 2026 محمود دومة',
    footerNote: 'تصميم وتنفيذ باهتمام، بالعربية والإنجليزية.',
    backToWork: 'العودة إلى الأعمال',
    otherCase: 'استكشف المشروع المميز الآخر',
    employerNote:
      'تم تطويره ضمن عملي في NileTronix. المنتج تابع لسياق العمل المؤسسي، ولا يعني عرضه هنا إتاحة تجربة عامة أو وصول إلى الكود.',
    notFoundTitle: 'الصفحة دي مش موجودة.',
    notFoundText: 'قد يكون العنوان تغيّر. استكشف الأعمال أو ارجع إلى الصفحة الرئيسية.',
    meta: {
      home: {
        title: 'محمود دومة — مهندس واجهات أمامية · Angular',
        description:
          'مهندس واجهات أمامية متخصص في Angular من القاهرة، بخبرة تتجاوز سنتين في تطوير تطبيقات الويب المؤسسية وأنظمة المتابعة اللحظية ومسارات العمل المعقدة.',
      },
      work: {
        title: 'الأعمال والأنظمة — محمود دومة',
        description:
          'معمارية Angular المؤسسية، ومتابعة المرور اللحظية، ولوحات المواقف وإدارة الطوابير، وتطبيقات ويب مستقلة.',
      },
      about: {
        title: 'عنّي والخبرة المهنية — محمود دومة',
        description:
          'تعرّف على محمود دومة، مهندس واجهات Angular من القاهرة. خبرتي في NileTronix والعمل المستقل والمهارات التقنية.',
      },
      notFound: {
        title: 'الصفحة غير موجودة — محمود دومة',
        description: 'تعذّر العثور على هذه الصفحة. ارجع إلى موقع محمود دومة وأعماله المختارة.',
      },
    },
  },
} as const satisfies Record<LocaleCode, PortfolioContent>;
