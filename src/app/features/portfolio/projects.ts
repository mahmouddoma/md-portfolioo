import { LocaleCode } from '../../core/i18n/locales';

export interface ProjectCopy {
  readonly name: string;
  readonly discipline: string;
  readonly summary: string;
  readonly contribution: string;
  readonly scope: string;
  readonly context?: string;
  readonly challenges?: string;
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
    id: 'traffic',
    kind: 'enterprise',
    featured: true,
    evidence: {
      src: 'images/projects/traffic/interface.webp',
      width: 1440,
      height: 960,
      alt: {
        en: 'Traffic Control application sign-in interface with traffic signal identity and empty account fields.',
        ar: 'واجهة الدخول لتطبيق التحكم المروري، بهوية إشارة المرور وحقول حساب فارغة.',
      },
      caption: {
        en: 'Application capture · Traffic Control sign-in screen. NileTronix enterprise project.',
        ar: 'لقطة من التطبيق · شاشة الدخول للتحكم المروري. مشروع مؤسسي ضمن NileTronix.',
      },
    },
    technologies: [
      'Angular',
      'TypeScript',
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
        discipline: 'Real-time & offline monitoring',
        summary:
          'Real-time traffic monitoring and offline map rendering/routing built for closed-network control rooms.',
        contribution: 'Frontend engineering at NileTronix',
        scope: 'Live monitoring · Offline geospatial routing · SignalR & MQTT integration',
        context:
          'Mission-critical traffic operations in closed-network environments where cloud connectivity cannot be assumed and real-time responsiveness is non-negotiable.',
        challenges:
          'Managing high-frequency live telemetry streams without UI jank, and executing graph routing entirely client-side using Web Workers and IndexedDB cache.',
        sections: [
          {
            title: 'Overview & system context',
            text: 'An enterprise traffic monitoring and control system deployed in network-isolated operational environments. The platform tracks intersection status, controller health, and traffic flow across physical road networks.',
          },
          {
            title: 'The engineering challenge',
            text: 'Control room operators require sub-second awareness of signal state changes across multiple intersections while running on restricted local networks. The interface needed to ingest high-frequency telemetry without degrading UI responsiveness or leaking memory over extended shifts.',
          },
          {
            title: 'My responsibilities',
            text: 'As frontend engineer at NileTronix, I was responsible for the Angular client architecture, real-time message stream handling, interactive geospatial mapping layers, and client-side offline route calculation.',
          },
          {
            title: 'Technical implementation & architecture',
            text: 'Built with Angular, RxJS, and NgRx for reactive state management. Integrated SignalR and MQTT protocols to pipe operational events directly into reactive stores. Designed an offline mapping pipeline with Leaflet and GeoJSON, offloading pathfinding algorithms to Web Workers with IndexedDB spatial caching to keep the main thread fluid.',
          },
          {
            title: 'Verified outcomes & architectural lessons',
            text: 'Achieved uninterrupted operational awareness even during network disconnects. Decoupling computational routing into Web Workers ensured 60fps map interactions during live data bursts.',
          },
        ],
      },
      ar: {
        name: 'نظام إدارة المرور',
        discipline: 'متابعة لحظية وعمل دون اتصال',
        summary:
          'متابعة حركة المرور لحظيًا، وعرض الخرائط والمسارات دون اتصال لغرف التحكم ذات الشبكات المغلقة.',
        contribution: 'هندسة الواجهات ضمن NileTronix',
        scope: 'متابعة حية · مسارات جغرافية دون اتصال · تكامل SignalR وMQTT',
        context:
          'بيئات تشغيلية حرجة لإدارة المرور داخل شبكات مغلقة لا تتوفر فيها خدمات السحاب وتتطلب استجابة فورية للأحداث.',
        challenges:
          'معالجة تدفقات البيانات اللحظية عالية التردد دون التأثير على سلاسة الواجهة، وتنفيذ حساب المسارات بالكامل داخل المتصفح عبر Web Workers وIndexedDB.',
        sections: [
          {
            title: 'نظرة عامة وسياق النظام',
            text: 'نظام مؤسسي للتحكم والمتابعة المرورية في بيئات تشغيلية معزولة شبكيًا. يتابع النظام حالات التقاطعات وإشارات المرور وكفاءة وحدات التحكم عبر شبكة الطرق الفعلية.',
          },
          {
            title: 'التحدي الهندسي',
            text: 'يحتاج مشغلو غرف العمليات إلى استجابة فورية وتحديثات لحظية لحالات الإشارات والتقاطعات. وكان التحدي استيعاب التحديثات الكثيفة دون استهلاك الذاكرة أو بطء الواجهة أثناء فترات العمل الطويلة.',
          },
          {
            title: 'مسؤولياتي في المشروع',
            text: 'توليت هندسة الواجهة الأمامية بـ Angular ضمن NileTronix، وتكامل بروتوكولات البيانات اللحظية، وتطوير طبقات الخرائط التفاعلية وحساب المسارات محليًا في المتصفح.',
          },
          {
            title: 'التنفيذ المعماري والتقني',
            text: 'اعتمدت بنية Angular التفاعلية مع RxJS وNgRx لإدارة الحالة، واستقبال رسائل SignalR وMQTT وتوجيهها للمخازن التفاعلية. ونُفذت الخرائط عبر Leaflet وGeoJSON مع نقل خوارزميات المسارات إلى Web Workers وحفظ البيانات المكانية في IndexedDB.',
          },
          {
            title: 'النتائج والدروس المعمارية',
            text: 'استقرار تام لعمليات المتابعة حتى عند انقطاع الاتصال الخارجي، مع الحفاظ على استجابة الخرائط وسلاستها الكاملة بمعدل 60 إطارًا في الثانية أثناء تدفقات البيانات المكثفة.',
          },
        ],
      },
    },
  },
  {
    id: 'devora',
    kind: 'freelance',
    featured: true,
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Responsive Architecture'],
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
          'A distinctive studio website, from its custom visual language to a high-precision responsive Angular experience.',
        contribution: 'Design & frontend implementation',
        scope: 'Studio website · Custom visual system · Responsive frontend execution',
        context:
          'A modern software studio needing a web presence that communicates technical rigor through an original, control-room-inspired aesthetic.',
        challenges:
          'Translating bespoke editorial layouts and delicate typography into a responsive Angular component architecture without losing craft.',
        sections: [
          {
            title: 'A studio with its own language',
            text: 'DEVORA is a software engineering studio website featuring a custom operating-system and control-room-inspired aesthetic. The site translates this distinctive visual direction into a responsive Angular web experience.',
          },
          {
            title: 'From design to the browser',
            text: 'I participated in both the design conception and frontend implementation as freelance work. The project unites bespoke UI decisions with solid engineering implementation in a functioning production website.',
          },
          {
            title: 'Responsive precision across viewports',
            text: 'The architecture employs modular Angular components, fluid typography, and clean CSS layout techniques to ensure the visual impact scales seamlessly from mobile viewports to ultrawide displays.',
          },
        ],
      },
      ar: {
        name: 'DEVORA',
        discipline: 'استوديو لهندسة البرمجيات',
        summary: 'موقع استوديو بشخصية بصرية مخصصة، من لغة التصميم إلى تجربة متجاوبة بـ Angular.',
        contribution: 'المشاركة في التصميم وتنفيذ الواجهة',
        scope: 'موقع استوديو · نظام بصري مخصص · واجهة متجاوبة',
        context:
          'استوديو برمجي بحاجة إلى حضور رقمي يبرز الاحترافية الهندسية من خلال هوية بصرية مستوحاة من غرف التحكم.',
        challenges:
          'تحويل تصميم بصري دقيق وتخطيطات غير تقليدية إلى مكونات Angular متجاوبة دون التضحية بالدقة والأداء.',
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
            title: 'دقة التجاوب عبر الشاشات',
            text: 'بُني الموقع بمكونات Angular منظمة واستجابة دقيقة تضمن الحفاظ على جمالية التفاصيل من الشاشات الصغيرة وحتى الشاشات العريضة.',
          },
        ],
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
        en: 'NPark configuration interface showing gate counts, capacity and setup summary.',
        ar: 'شاشة إعدادات NPark الفعلية، تعرض عدد البوابات والسعة وملخص الإعداد.',
      },
      caption: {
        en: 'Configuration screen · Extracted from the NPark user manual, page 12. NileTronix enterprise project.',
        ar: 'شاشة إعدادات فعلية · مستخرجة من دليل استخدام NPark، صفحة ١٢. مشروع ضمن NileTronix.',
      },
    },
    technologies: ['Angular 20', 'Signals', 'RxJS', 'NgRx', 'PrimeNG', 'Chart.js', 'REST APIs'],
    copy: {
      en: {
        name: 'NPark — Smart Parking Dashboard',
        discipline: 'Real-time parking operations & analytics',
        summary:
          'Live occupancy monitoring, gate and ticket automation, membership workflows, and revenue analytics with native Arabic RTL.',
        contribution: 'Frontend development at NileTronix',
        scope: 'Parking operations · Live occupancy dashboards · Ticket flows · Arabic RTL',
        context:
          'Commercial parking facilities requiring real-time gate supervision, occupancy tracking, rate calculations, and cashier workflows.',
        challenges:
          'Building reactive, role-based dashboards that dynamically reflect parking lot states and gate movements with zero interface delay.',
      },
      ar: {
        name: 'NPark — لوحة إدارة المواقف الذكية',
        discipline: 'تشغيل المواقف اللحظي والتحليلات',
        summary:
          'متابعة إشغال المواقف لحظيًا، وأتمتة البوابات والتذاكر والاشتراكات، ولوحات الإيرادات مع دعم كامل للاتجاه العربي RTL.',
        contribution: 'تطوير الواجهات ضمن NileTronix',
        scope: 'تشغيل المواقف · لوحات إشغال حية · مسارات التذاكر · دعم RTL',
        context:
          'منشآت مواقف تجارية تتطلب إشرافًا مباشرًا على البوابات، وحساب معدلات الإشغال، وإدارة الرسوم وكاشير التذاكر.',
        challenges:
          'بناء لوحات معلومات تفاعلية تعتمد الصلاحيات وتعكس حركة البوابات وإشغال المواقف فورًا دون تأخير.',
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
        en: 'Q-SYSTEM queue display with clinics and ticket call states.',
        ar: 'شاشة النداء في Q-SYSTEM، بعيادات وتذاكر نموذجية مدمجة في التطبيق.',
      },
      caption: {
        en: 'Local application capture · Queue call display. NileTronix enterprise project.',
        ar: 'لقطة من التطبيق · شاشة عرض الطوابير والنداء. مشروع مؤسسي ضمن NileTronix.',
      },
    },
    technologies: [
      'Angular 21+',
      'TypeScript',
      'Signals',
      'RxJS',
      'REST APIs',
      'Thermal/POS Printing',
      'SCSS',
    ],
    copy: {
      en: {
        name: 'Q-SYSTEM — Smart Queue & Interactive Kiosk',
        discipline: 'Queue management & self-service kiosks',
        summary:
          'Multi-branch queue orchestration, bilingual ticket dispensing, SLA-oriented teller workflows, and POS thermal printer integration.',
        contribution: 'Frontend development at NileTronix',
        scope:
          'Self-service kiosk UI · Multi-branch queues · Bilingual tickets · POS hardware integration',
        context:
          'Healthcare and high-throughput service centers where customer flow, service benchmarks, and ticket printing must run reliably all day.',
        challenges:
          'Coordinating kiosk touch UI, auditory/visual calling displays, teller workstations, and direct browser hardware printing.',
      },
      ar: {
        name: 'Q-SYSTEM — نظام الطوابير والأكشاك التفاعلية',
        discipline: 'إدارة الطوابير وأكشاك الخدمة الذاتية',
        summary:
          'تنظيم الطوابير متعددة الفروع، وإصدار تذاكر ثنائية اللغة، ومسارات موظفي الخدمة حسب مستويات SLA، والربط مع الطابعات الحرارية.',
        contribution: 'تطوير الواجهات ضمن NileTronix',
        scope: 'واجهات الأكشاك التفاعلية · فروع متعددة · تذاكر ثنائية اللغة · تكامل طابعات POS',
        context:
          'مراكز الرعاية الصحية والخدمات ذات الكثافة العالية حيث يلزم إدارة تدفق المراجعين والطباعة الفورية بكفاءة تامة.',
        challenges:
          'مزامنة شاشات اللمس للأكشاك، وشاشات النداء الصوتية/المرئية، وواجهات الموظفين، والطباعة الحرارية المباشرة.',
      },
    },
  },
  {
    id: 'customer-survey',
    kind: 'enterprise',
    featured: false,
    technologies: ['Angular 21', 'TypeScript', 'RxJS', 'Reactive Forms', 'REST APIs'],
    evidence: {
      src: 'images/projects/customer-survey/interface.webp',
      width: 1440,
      height: 960,
      alt: {
        en: 'Customer Feedback Survey sign-in page with NileTronix branding and empty account fields.',
        ar: 'شاشة الدخول لمنصة تقييم العملاء، بهوية NileTronix وحقول حساب فارغة.',
      },
      caption: {
        en: 'Local application capture · Sign-in screen. NileTronix enterprise project.',
        ar: 'لقطة من التطبيق المحلي · شاشة الدخول. مشروع مؤسسي ضمن NileTronix.',
      },
    },
    copy: {
      en: {
        name: 'Customer Feedback & Survey Platform',
        discipline: 'Enterprise feedback & CSAT analytics',
        summary:
          'Role-based evaluation dashboards, dynamic question builders, multi-branch feedback capture, and QR-initiated surveys.',
        contribution: 'Frontend development at NileTronix',
        scope: 'Multi-branch feedback · Dynamic question builder · Role-based CSAT analytics',
        context:
          'Enterprise organizations tracking customer satisfaction across physical branches, departments, and service counters.',
        challenges:
          'Engineering a dynamic form builder that renders versatile question types while aggregating analytics into role-gated dashboards.',
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
            text: 'I worked on frontend development as part of my role at NileTronix. The scope shown describes the platform; it does not imply sole design ownership or independent ownership of the product.',
          },
        ],
      },
      ar: {
        name: 'منصة تقييم العملاء والاستبيانات المؤسسية',
        discipline: 'تقييم العملاء وتحليلات CSAT',
        summary:
          'لوحات تقييم حسب الصلاحيات، ومنشئ أسئلة ديناميكي، وجمع الملاحظات عبر الفروع المتعددة وروابط QR.',
        contribution: 'تطوير الواجهة الأمامية ضمن NileTronix',
        scope: 'فروع وأقسام متعددة · منشئ أسئلة ديناميكي · تحليلات CSAT',
        context:
          'مؤسسات ترغب في قياس رضا العملاء عبر الفروع والأقسام ومكاتب تقديم الخدمة في الوقت الفعلي.',
        challenges:
          'بناء محرك نماذج ديناميكي يدعم شتى أنواع الأسئلة ويجمّع البيانات التشغيلية في لوحات تحكم تراعي الصلاحيات.',
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
    id: 'qbooking',
    kind: 'enterprise',
    featured: false,
    evidence: {
      src: 'images/projects/qbooking/interface.webp',
      width: 1440,
      height: 240,
      alt: {
        en: 'QBooking branch, specialization and operator filters from the booking interface.',
        ar: 'فلاتر الفرع والتخصص والموظف من واجهة QBooking.',
      },
      caption: {
        en: 'Application excerpt · Booking filters and service specialization. NileTronix enterprise project.',
        ar: 'جزء من التطبيق · فلاتر الحجز وتحديد التخصصات. مشروع مؤسسي ضمن NileTronix.',
      },
    },
    technologies: ['Angular 20', 'TypeScript', 'Standalone Components', 'REST APIs', 'Bootstrap 5'],
    copy: {
      en: {
        name: 'QBooking',
        discipline: 'Enterprise appointment scheduling',
        summary:
          'Multi-step scheduling flows with dynamic clinic and practitioner filtering, capacity-aware time slots, and role-based access.',
        contribution: 'Frontend development at NileTronix',
        scope:
          'Appointment scheduling · Multi-step booking wizards · Capacity & practitioner filters',
        context:
          'Healthcare centers and multi-department institutions managing tight appointment calendars across specialist teams.',
        challenges:
          'Managing step-by-step state across branch selection, specialty routing, and real-time available slot resolution.',
      },
      ar: {
        name: 'QBooking',
        discipline: 'حجز المواعيد والجدولة المؤسسية',
        summary:
          'مسارات حجز متعددة المراحل مع تصفية العيادات والأطباء، وحساب السعات والمواعيد المتاحة، والتحكم بالأدوار.',
        contribution: 'تطوير الواجهات ضمن NileTronix',
        scope: 'حجز المواعيد · معالجات حجز متعددة الخطوات · تصفية العيادات والممارسين',
        context: 'مراكز طبية ومؤسسية تتطلب جدولة دقيقة للمواعيد عبر تخصصات وأطباء متعددين.',
        challenges:
          'إدارة حالة الحجز عبر خطوات متسلسلة تبدأ بتحديد الفرع والتخصص وحتى حجز الموعد الفعلي دون تعارض.',
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
        en: 'NileTronix CRM sales portal with team-management and visit-reporting entry points.',
        ar: 'بوابة المبيعات في NileTronix CRM، بمداخل إدارة الفريق وتقارير الزيارات.',
      },
      caption: {
        en: 'Application capture · Sales portal excerpt. NileTronix enterprise project.',
        ar: 'لقطة من التطبيق · جزء من بوابة المبيعات. مشروع مؤسسي ضمن NileTronix.',
      },
    },
    technologies: ['Angular 21', 'TypeScript', 'Signals', 'Reactive Forms', 'REST APIs'],
    copy: {
      en: {
        name: 'CRM Enterprise Workflow Dashboard',
        discipline: 'Enterprise sales & operations',
        summary:
          'Role-aware operational workflows, field visit reporting, team hierarchy management, and reusable Angular form engines.',
        contribution: 'Frontend development at NileTronix',
        scope:
          'Enterprise sales workflows · Field visit reports · Reactive forms · Role management',
        context:
          'Enterprise sales and service organizations tracking field operations, pipeline milestones, and representative visits.',
        challenges:
          'Structuring extensible, nested form groups with complex cross-field validation rules and immediate signal-based feedback.',
      },
      ar: {
        name: 'لوحة التحكم وإدارة مسارات العمل CRM',
        discipline: 'إدارة العمليات والمبيعات المؤسسية',
        summary:
          'مسارات عمل تراعي الصلاحيات، وتقارير الزيارات الميدانية، وإدارة الهيكل الوظيفي باستخدام محركات نماذج تفاعلية بـ Signals.',
        contribution: 'تطوير الواجهات ضمن NileTronix',
        scope: 'مسارات المبيعات المؤسسية · تقارير الزيارات · نماذج تفاعلية · إدارة الصلاحيات',
        context:
          'إدارات مبيعات وخدمات مؤسسية تتابع الأنشطة الميدانية ومراحل الصفقات وتقارير المندوبين.',
        challenges:
          'بناء مجموعات نماذج متداخلة وقابلة لإعادة الاستخدام مع قواعد تحقق معقدة وملاحظات فورية باستخدام Signals.',
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
        en: 'Lawyer search · Captured from the public website, November 2026.',
        ar: 'البحث عن محامٍ · لقطة من الموقع العام، نوفمبر ٢٠٢٦.',
      },
    },
    copy: {
      en: {
        name: 'Avokatoo',
        discipline: 'Legal services marketplace',
        summary:
          'A legal services marketplace built with Angular 20 standalone architecture, faceted search filters, and responsive design.',
        contribution: 'Product owner & developer',
        scope: 'Marketplace · Faceted search · Standalone architecture',
        context:
          'Connecting clients with qualified legal counsel across Egypt with multi-parameter filtering by jurisdiction, location, and specialization.',
      },
      ar: {
        name: 'Avokatoo',
        discipline: 'منصة للخدمات القانونية',
        summary:
          'منصة للخدمات القانونية بمعمارية Angular 20 المستقلة، وفلاتر بحث متعددة الأبعاد، وتصميم متجاوب.',
        contribution: 'مالك المنتج والمطوّر',
        scope: 'منصة خدمات · بحث متقدم · معمارية مستقلة',
        context:
          'ربط المراجعين بالمحامين المؤهلين عبر محافظات مصر مع تصفية دقيقة حسب التخصص والمدينة.',
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
        en: 'Karim Dawod Group homepage with brand presentation and product exploration link.',
        ar: 'الصفحة الرئيسية لمجموعة كريم داود، بعرض الهوية والتنقل ورابط استكشاف المنتجات.',
      },
      caption: {
        en: 'Brand homepage · Captured from the public website, November 2026.',
        ar: 'الصفحة الرئيسية للعلامة · لقطة من الموقع العام، نوفمبر ٢٠٢٦.',
      },
    },
    technologies: ['Angular', 'TypeScript', 'Bootstrap 5', 'SCSS'],
    copy: {
      en: {
        name: 'Karim Dawod Group',
        discipline: 'Luxury collectibles presentation',
        summary:
          'Brand and digital showcase platform engineered for an exclusive luxury collectibles catalog.',
        contribution: 'Freelance frontend development',
        scope: 'Brand identity · Product showcase · Responsive execution',
        context:
          'An upscale collector house requiring an elegant catalog presentation tailored to high-value international clientele.',
      },
      ar: {
        name: 'Karim Dawod Group',
        discipline: 'المقتنيات الفاخرة',
        summary: 'منصة عرض رقمية وتقديم للهوية لكتالوج مقتنيات فاخرة وحصرية.',
        contribution: 'تطوير واجهات ضمن عمل مستقل',
        scope: 'هوية تجارية · عرض منتجات فاخرة · تنفيذ متجاوب',
        context:
          'دار مقتنيات فاخرة تحتاج لعرض كتالوج منتجاتها الراقية بأسلوب بصري يليق بعملائها الدوليين.',
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
        en: 'El Mostafa fruit import website homepage with identity, navigation and product showcase.',
        ar: 'الصفحة الرئيسية لموقع المصطفى لاستيراد الفاكهة، بهويته والتنقل وعرض المنتجات.',
      },
      caption: {
        en: 'Homepage capture · November 2026. Live link omitted while HTTPS certificate is being refreshed.',
        ar: 'لقطة من الصفحة الرئيسية · نوفمبر ٢٠٢٦. رابط الزيارة غير مضاف مؤقتًا حتى تحديث شهادة HTTPS.',
      },
    },
    technologies: ['Angular 20', 'TypeScript', 'Bootstrap 5'],
    copy: {
      en: {
        name: 'El Mostafa',
        discipline: 'B2B agricultural import & distribution',
        summary:
          'Corporate digital presence for an international fruit import and regional distribution enterprise.',
        contribution: 'Freelance frontend development',
        scope: 'B2B portal · Product catalog · Multi-device responsiveness',
        context:
          'An agricultural trade and logistics company establishing a modern online footprint for regional distribution partners.',
      },
      ar: {
        name: 'المصطفى',
        discipline: 'استيراد وتوزيع الفواكه B2B',
        summary:
          'واجهة رقمية مؤسسية لشركة تعمل في الاستيراد الدولي وتوزيع الفواكه في الأسواق الإقليمية.',
        contribution: 'تطوير واجهات ضمن عمل مستقل',
        scope: 'بوابة B2B · كتالوج منتجات · توافق كامل مع مختلف الأجهزة',
        context: 'شركة استيراد وتوزيع زراعي تؤسس حضورها الرقمي لشركاء التوزيع الإقليميين.',
      },
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
export const CASE_STUDY_PROJECTS = PROJECTS.filter((project) => !!project.copy.en.sections);
export const SELECTED_ENGINEERING_PROJECTS = [
  PROJECTS.find((p) => p.id === 'traffic')!,
  PROJECTS.find((p) => p.id === 'npark')!,
  PROJECTS.find((p) => p.id === 'q-system')!,
];
export const MORE_ENTERPRISE_PROJECTS = [
  PROJECTS.find((p) => p.id === 'customer-survey')!,
  PROJECTS.find((p) => p.id === 'qbooking')!,
  PROJECTS.find((p) => p.id === 'crm')!,
];
export const INDEPENDENT_PROJECTS = [
  PROJECTS.find((p) => p.id === 'devora')!,
  PROJECTS.find((p) => p.id === 'avokatoo')!,
  PROJECTS.find((p) => p.id === 'karim-dawod')!,
  PROJECTS.find((p) => p.id === 'el-mostafa')!,
];
export const SUPPORTING_PROJECTS = PROJECTS.filter((project) => !project.featured);
