import { LocaleCode } from '../../core/i18n/locales';

interface ProjectCopy {
  readonly name: string;
  readonly discipline: string;
  readonly summary: string;
  readonly contribution: string;
  readonly scope: string;
  readonly sections?: readonly { readonly title: string; readonly text: string }[];
}

export interface ProjectEvidence {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: Readonly<Record<LocaleCode, string>>;
  readonly caption: Readonly<Record<LocaleCode, string>>;
}

export interface Project {
  readonly id: string;
  readonly kind: 'freelance' | 'enterprise';
  readonly featured: boolean;
  readonly technologies: readonly string[];
  readonly url?: string;
  readonly evidence: ProjectEvidence;
  readonly copy: Readonly<Record<LocaleCode, ProjectCopy>>;
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'devora',
    kind: 'freelance',
    featured: true,
    technologies: ['Angular', 'TypeScript'],
    url: 'https://devora-sa.com',
    evidence: {
      src: 'images/projects/devora/interface.webp',
      width: 1440,
      height: 580,
      alt: {
        en: 'DEVORA website header and software studio introduction with its custom visual identity.',
        ar: 'واجهة موقع DEVORA ومقدمة الاستوديو بهويته البصرية المخصصة.',
      },
      caption: {
        en: 'Homepage excerpt · Captured from the public website, November 2026.',
        ar: 'جزء من الصفحة الرئيسية · لقطة من الموقع العام، نوفمبر ٢٠٢٦.',
      },
    },
    copy: {
      en: {
        name: 'DEVORA',
        discipline: 'Software engineering studio',
        summary:
          'A distinctive studio website, from its custom visual language to a responsive Angular experience.',
        contribution: 'Design & frontend implementation',
        scope: 'Studio website · Custom visual system · Responsive frontend',
        sections: [
          {
            title: 'A studio with its own language',
            text: 'DEVORA is a software engineering studio website with a custom operating-system and control-room-inspired visual system. The site gives that visual direction a responsive Angular implementation.',
          },
          {
            title: 'From design to the browser',
            text: 'I participated in both the design and frontend implementation as freelance work. This project brings together visual decisions and their execution in a working website.',
          },
          {
            title: 'One identity, different screens',
            text: 'The scope includes responsive Angular implementation of the custom visual system. The public website provides the live reference for the project; no unverified performance or business results are claimed.',
          },
        ],
      },
      ar: {
        name: 'DEVORA',
        discipline: 'استوديو لهندسة البرمجيات',
        summary: 'موقع استوديو بشخصية بصرية مخصصة، من لغة التصميم إلى تجربة متجاوبة بـ Angular.',
        contribution: 'المشاركة في التصميم وتنفيذ الواجهة',
        scope: 'موقع استوديو · نظام بصري مخصص · واجهة متجاوبة',
        sections: [
          {
            title: 'استوديو بلغته الخاصة',
            text: 'موقع DEVORA لاستوديو هندسة برمجيات، بنظام بصري مخصص مستوحى من أنظمة التشغيل وغرف التحكم. تتحول هذه الهوية إلى تجربة ويب متجاوبة باستخدام Angular.',
          },
          {
            title: 'من التصميم إلى المتصفح',
            text: 'شاركت في التصميم وتنفيذ الواجهة الأمامية ضمن عمل مستقل. يجمع المشروع بين القرارات البصرية وتنفيذها في موقع يعمل فعليًا.',
          },
          {
            title: 'هوية واحدة، وشاشات مختلفة',
            text: 'يشمل نطاق العمل تنفيذ النظام البصري المخصص بصورة متجاوبة باستخدام Angular. الموقع العام هو المرجع الحي للمشروع، دون ادعاء نتائج تجارية أو أرقام أداء غير موثقة.',
          },
        ],
      },
    },
  },
  {
    id: 'customer-survey',
    kind: 'enterprise',
    featured: true,
    technologies: ['Angular 21', 'TypeScript', 'RxJS', 'Reactive Forms', 'REST APIs'],
    evidence: {
      src: 'images/projects/customer-survey/interface.webp',
      width: 1440,
      height: 960,
      alt: {
        en: 'Actual local Customer Feedback Survey sign-in page with NileTronix branding and empty account fields.',
        ar: 'شاشة الدخول الفعلية للنسخة المحلية من منصة تقييم العملاء، بهوية NileTronix وحقول دخول فارغة.',
      },
      caption: {
        en: 'Local application capture · Sign-in screen. Authenticated dashboards are not shown.',
        ar: 'لقطة من التطبيق المحلي · شاشة الدخول. لا تعرض لوحات التحكم التي تتطلب تسجيل الدخول.',
      },
    },
    copy: {
      en: {
        name: 'Customer Survey',
        discipline: 'Customer feedback & enterprise surveys',
        summary:
          'From assisted evaluations to role-based CSAT dashboards: an enterprise feedback platform built around real operational flows.',
        contribution: 'Frontend development at NileTronix',
        scope: 'Multi-branch flows · Question builder · Evaluation dashboards',
        sections: [
          {
            title: 'Feedback across an organization',
            text: 'An Angular 21 customer feedback and survey platform supporting multiple branches and departments, operator-assisted evaluations and survey access through QR links.',
          },
          {
            title: 'Different tasks, connected workflows',
            text: 'The product includes a dynamic question builder and role-based CSAT dashboards. Survey setup, collecting evaluations and reviewing feedback serve different operational needs within the platform.',
          },
          {
            title: 'My part in the product',
            text: 'I worked on frontend development as part of my role at NileTronix. The scope shown here describes the platform; it does not imply sole design ownership or independent ownership of the product.',
          },
        ],
      },
      ar: {
        name: 'منصة تقييم العملاء',
        discipline: 'تقييم العملاء والاستبيانات المؤسسية',
        summary:
          'من التقييم بمساعدة الموظف إلى لوحات CSAT حسب الصلاحيات: منصة ملاحظات تراعي مسارات العمل الفعلية.',
        contribution: 'تطوير الواجهة الأمامية ضمن NileTronix',
        scope: 'فروع وأقسام متعددة · منشئ أسئلة · لوحات تقييم',
        sections: [
          {
            title: 'صوت العميل عبر المؤسسة',
            text: 'منصة تقييم واستبيانات مبنية بـ Angular 21، تدعم فروعًا وأقسامًا متعددة، وتقييمات بمساعدة الموظف، وروابط استبيانات عبر QR.',
          },
          {
            title: 'مهام مختلفة، ومسارات مترابطة',
            text: 'يتضمن المنتج منشئ أسئلة ديناميكيًا ولوحات CSAT حسب الأدوار والصلاحيات. إعداد الاستبيان وجمع التقييمات ومراجعة الملاحظات تلبي احتياجات تشغيلية مختلفة داخل المنصة.',
          },
          {
            title: 'دوري في المنتج',
            text: 'عملت على تطوير الواجهات الأمامية ضمن دوري في NileTronix. النطاق المعروض يصف المنصة، ولا يعني ملكية مستقلة للمنتج أو انفرادي بتصميمه.',
          },
        ],
      },
    },
  },
  {
    id: 'traffic',
    kind: 'enterprise',
    featured: false,
    evidence: {
      src: 'images/projects/traffic/interface.webp',
      width: 1440,
      height: 960,
      alt: {
        en: 'Actual Traffic Control application login interface with traffic signal identity and empty account fields.',
        ar: 'واجهة الدخول الفعلية لتطبيق التحكم المروري، بهوية إشارة المرور وحقول حساب فارغة.',
      },
      caption: {
        en: 'Local application capture · Traffic Control sign-in, without credentials or operational records.',
        ar: 'لقطة من التطبيق المحلي · الدخول إلى التحكم المروري، دون بيانات دخول أو سجلات تشغيلية.',
      },
    },
    technologies: [
      'Angular',
      'RxJS',
      'NgRx',
      'SignalR',
      'MQTT',
      'Leaflet',
      'GeoJSON',
      'IndexedDB',
      'Web Workers',
    ],
    copy: {
      en: {
        name: 'Traffic Management System',
        discipline: 'Real-time & offline',
        summary:
          'Real-time traffic monitoring and offline map rendering/routing for closed-network environments.',
        contribution: 'Frontend engineering at NileTronix',
        scope: 'Traffic monitoring · Offline maps',
      },
      ar: {
        name: 'نظام إدارة المرور',
        discipline: 'بيانات لحظية وعمل دون اتصال',
        summary: 'متابعة حركة المرور لحظيًا، وعرض الخرائط والمسارات دون اتصال داخل شبكات مغلقة.',
        contribution: 'هندسة الواجهات ضمن NileTronix',
        scope: 'متابعة المرور · خرائط دون اتصال',
      },
    },
  },
  {
    id: 'npark',
    kind: 'enterprise',
    featured: false,
    evidence: {
      src: 'images/projects/npark/interface.webp',
      width: 1440,
      height: 719,
      alt: {
        en: 'Actual NPark configuration interface showing gate counts, capacity and the setup summary.',
        ar: 'شاشة إعدادات NPark الفعلية، تعرض عدد البوابات والسعة وملخص الإعداد.',
      },
      caption: {
        en: 'Actual configuration screen · Extracted from the NPark user manual, page 12. NileTronix project.',
        ar: 'شاشة إعدادات فعلية · مستخرجة من دليل استخدام NPark، صفحة ١٢. مشروع ضمن NileTronix.',
      },
    },
    technologies: ['Angular 20', 'Signals', 'RxJS', 'NgRx', 'PrimeNG', 'Chart.js', 'REST APIs'],
    copy: {
      en: {
        name: 'NPark',
        discipline: 'Smart parking',
        summary:
          'Live occupancy and revenue dashboards, gate and ticket flows, memberships and analytics, with Arabic RTL.',
        contribution: 'Frontend development at NileTronix',
        scope: 'Parking operations · Analytics',
      },
      ar: {
        name: 'NPark',
        discipline: 'إدارة المواقف الذكية',
        summary:
          'لوحات لحظية للإشغال والإيرادات، ومسارات البوابات والتذاكر والاشتراكات والتحليلات، مع دعم العربية.',
        contribution: 'تطوير الواجهات ضمن NileTronix',
        scope: 'تشغيل المواقف · التحليلات',
      },
    },
  },
  {
    id: 'q-system',
    kind: 'enterprise',
    featured: false,
    evidence: {
      src: 'images/projects/q-system/interface.webp',
      width: 1440,
      height: 960,
      alt: {
        en: 'Actual Q-SYSTEM queue display with the application’s built-in sample clinics and tickets.',
        ar: 'شاشة النداء الفعلية في Q-SYSTEM، بعيادات وتذاكر نموذجية مدمجة في التطبيق.',
      },
      caption: {
        en: 'Local application capture · Built-in display sample data, not live patient records.',
        ar: 'لقطة من التطبيق المحلي · بيانات عرض نموذجية مدمجة في المشروع، وليست سجلات مرضى فعلية.',
      },
    },
    technologies: ['Angular 21+', 'TypeScript', 'Signals', 'RxJS', 'REST APIs', 'SCSS'],
    copy: {
      en: {
        name: 'Q-SYSTEM',
        discipline: 'Queues & interactive kiosks',
        summary:
          'Multi-branch queue and kiosk flows, bilingual tickets, SLA-oriented workflows and thermal/POS printing.',
        contribution: 'Frontend development at NileTronix',
        scope: 'Queues · Kiosks · Printing',
      },
      ar: {
        name: 'Q-SYSTEM',
        discipline: 'الطوابير والأكشاك التفاعلية',
        summary:
          'إدارة الطوابير والأكشاك عبر فروع متعددة، وتذاكر ثنائية اللغة، ومسارات تراعي مستويات الخدمة والطباعة الحرارية.',
        contribution: 'تطوير الواجهات ضمن NileTronix',
        scope: 'الطوابير · الأكشاك · الطباعة',
      },
    },
  },
  {
    id: 'qbooking',
    kind: 'enterprise',
    featured: false,
    evidence: {
      src: 'images/projects/qbooking/interface.webp',
      width: 1440,
      height: 240,
      alt: {
        en: 'Actual QBooking branch, specialization and operator filters from the local booking interface.',
        ar: 'فلاتر الفرع والتخصص والموظف الفعلية من واجهة QBooking المحلية.',
      },
      caption: {
        en: 'Local application excerpt · Booking filters in the application’s unavailable-API fallback, without patient data.',
        ar: 'جزء من التطبيق المحلي · فلاتر الحجز في حالة عدم توفر API، دون بيانات مرضى.',
      },
    },
    technologies: ['Angular 20', 'TypeScript', 'Standalone Components', 'REST APIs', 'Bootstrap 5'],
    copy: {
      en: {
        name: 'QBooking',
        discipline: 'Appointment booking',
        summary:
          'Multi-step booking with clinic and doctor filtering, time slots, roles and REST API integration.',
        contribution: 'Frontend development at NileTronix',
        scope: 'Appointments · Multi-step flows',
      },
      ar: {
        name: 'QBooking',
        discipline: 'حجز المواعيد',
        summary:
          'حجز متعدد الخطوات مع تصفية العيادات والأطباء، والمواعيد المتاحة، والأدوار والتكامل مع REST APIs.',
        contribution: 'تطوير الواجهات ضمن NileTronix',
        scope: 'المواعيد · مسارات متعددة الخطوات',
      },
    },
  },
  {
    id: 'crm',
    kind: 'enterprise',
    featured: false,
    evidence: {
      src: 'images/projects/crm/interface.webp',
      width: 1440,
      height: 600,
      alt: {
        en: 'Actual local NileTronix CRM sales portal with team-management and visit-reporting entry points.',
        ar: 'بوابة المبيعات الفعلية في نسخة NileTronix CRM المحلية، بمداخل إدارة الفريق وتقارير الزيارات.',
      },
      caption: {
        en: 'Local application capture · Sales portal excerpt. No customer records are displayed.',
        ar: 'لقطة من التطبيق المحلي · جزء من بوابة المبيعات، دون عرض سجلات عملاء.',
      },
    },
    technologies: ['Angular 21', 'TypeScript', 'Signals', 'Reactive Forms', 'REST APIs'],
    copy: {
      en: {
        name: 'CRM',
        discipline: 'Enterprise workflows',
        summary: 'Role-aware enterprise workflows with reusable forms and Signals.',
        contribution: 'Frontend development at NileTronix',
        scope: 'Workflows · Forms · Roles',
      },
      ar: {
        name: 'CRM',
        discipline: 'مسارات العمل المؤسسية',
        summary:
          'مسارات عمل تراعي الأدوار والصلاحيات، باستخدام نماذج قابلة لإعادة الاستخدام وSignals.',
        contribution: 'تطوير الواجهات ضمن NileTronix',
        scope: 'مسارات العمل · النماذج · الأدوار',
      },
    },
  },
  {
    id: 'avokatoo',
    kind: 'freelance',
    featured: false,
    technologies: ['Angular 20', 'TypeScript', 'Signals', 'Bootstrap 5'],
    url: 'https://avokatoo.com',
    evidence: {
      src: 'images/projects/avokatoo/interface.webp',
      width: 1440,
      height: 680,
      alt: {
        en: 'Avokatoo lawyer search interface with specialty, governorate and city filters in Arabic.',
        ar: 'واجهة البحث عن محامٍ في Avokatoo، بفلاتر التخصص والمحافظة والمدينة بالعربية.',
      },
      caption: {
        en: 'Lawyer search · Captured from the public website, November 2026. Personal profiles are outside the frame.',
        ar: 'البحث عن محامٍ · لقطة من الموقع العام، نوفمبر ٢٠٢٦، دون عرض بيانات الملفات الشخصية.',
      },
    },
    copy: {
      en: {
        name: 'Avokatoo',
        discipline: 'Legal services marketplace',
        summary:
          'A legal services marketplace using Angular 20 standalone architecture and a custom responsive design system.',
        contribution: 'Product owner & developer',
        scope: 'Marketplace · Responsive product',
      },
      ar: {
        name: 'Avokatoo',
        discipline: 'منصة للخدمات القانونية',
        summary: 'منصة للخدمات القانونية بمعمارية Angular 20 المستقلة ونظام تصميم مخصص ومتجاوب.',
        contribution: 'مالك المنتج والمطوّر',
        scope: 'منصة خدمات · منتج متجاوب',
      },
    },
  },
  {
    id: 'karim-dawod',
    kind: 'freelance',
    featured: false,
    url: 'https://karimdawodgroup.com',
    evidence: {
      src: 'images/projects/karim-dawod/interface.webp',
      width: 1440,
      height: 900,
      alt: {
        en: 'Karim Dawod Group homepage with its brand presentation, navigation and product exploration link.',
        ar: 'الصفحة الرئيسية لمجموعة كريم داود، بعرض الهوية والتنقل ورابط استكشاف المنتجات.',
      },
      caption: {
        en: 'Brand homepage · Captured from the public website, November 2026.',
        ar: 'الصفحة الرئيسية للعلامة · لقطة من الموقع العام، نوفمبر ٢٠٢٦.',
      },
    },
    technologies: ['Angular', 'TypeScript', 'Bootstrap 5'],
    copy: {
      en: {
        name: 'Karim Dawod Group',
        discipline: 'Luxury collectibles',
        summary: 'Brand and ecommerce presentation for a luxury collectibles platform.',
        contribution: 'Freelance frontend development',
        scope: 'Brand · Ecommerce presentation',
      },
      ar: {
        name: 'Karim Dawod Group',
        discipline: 'المقتنيات الفاخرة',
        summary: 'تقديم الهوية وعرض التجارة الإلكترونية لمنصة مقتنيات فاخرة.',
        contribution: 'تطوير واجهات ضمن عمل مستقل',
        scope: 'هوية · عرض التجارة الإلكترونية',
      },
    },
  },
  {
    id: 'el-mostafa',
    kind: 'freelance',
    featured: false,
    evidence: {
      src: 'images/projects/el-mostafa/interface.webp',
      width: 1440,
      height: 900,
      alt: {
        en: 'El Mostafa fruit import website homepage with its identity, navigation and product call to action.',
        ar: 'الصفحة الرئيسية لموقع المصطفى لاستيراد الفاكهة، بهويته والتنقل ورابط استكشاف المنتجات.',
      },
      caption: {
        en: 'Homepage capture · November 2026. The live link is omitted while its HTTPS certificate is invalid.',
        ar: 'لقطة من الصفحة الرئيسية · نوفمبر ٢٠٢٦. رابط الزيارة غير مضاف حاليًا بسبب مشكلة شهادة HTTPS.',
      },
    },
    technologies: ['Angular 20', 'TypeScript', 'Bootstrap 5'],
    copy: {
      en: {
        name: 'El Mostafa',
        discipline: 'Fruit import & distribution',
        summary: 'A responsive B2B corporate website for a fruit import and distribution business.',
        contribution: 'Freelance frontend development',
        scope: 'B2B · Corporate website',
      },
      ar: {
        name: 'المصطفى',
        discipline: 'استيراد وتوزيع الفاكهة',
        summary: 'موقع شركة متجاوب للتعاملات بين الشركات في مجال استيراد وتوزيع الفاكهة.',
        contribution: 'تطوير واجهات ضمن عمل مستقل',
        scope: 'تعاملات بين الشركات · موقع شركة',
      },
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
export const SUPPORTING_PROJECTS = PROJECTS.filter((project) => !project.featured);
