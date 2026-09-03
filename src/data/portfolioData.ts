export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  workType: string;
  duration: string;
  period: string;
  description: string[];
  tags: string[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Enterprise" | "Client / Freelance" | "Open Source / Showcase";
  badge: string;
  description: string;
  details?: string;
  techStack: string[];
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  duration: string;
  type: "Degree" | "Nanodegree" | "Certification";
  description?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Mahmoud Doma",
    title: "Mid Front-End Developer",
    specialty: "Angular Specialist & UI Architect",
    tagline:
      "Crafting enterprise-grade real-time dashboards, offline-capable systems, and high-performance web applications with Angular & modern TypeScript.",
    status: {
      available: true,
      text: "Available for Select Opportunities",
      subtext: "Open to Remote & Relocation",
    },
    location: "Cairo, Egypt",
    email: "devdoma2002@gmail.com",
    phone: "+20 109 349 0526",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mahmouddoma",
      github: "https://github.com/mahmouddoma",
      portfolio: "https://mahmouddoma.github.io/md-portfolioo",
    },
    stats: [
      { number: "2+", label: "Years Hands-on Experience" },
      { number: "9+", label: "Shipped Client Platforms" },
      { number: "5+", label: "Enterprise Real-Time Systems" },
      { number: "100%", label: "Arabic RTL & Performance Ready" },
    ],
    summary:
      "Mid Front-End Developer with 2+ years of hands-on experience delivering enterprise-grade Angular applications across real-time monitoring, dashboard, and workflow management systems. Proficient in Angular 19/20/21, TypeScript, RxJS, NgRx, Signals, REST APIs, SignalR, MQTT, and unit testing with Jasmine/Karma, with a proven track record of building offline-capable, RTL-ready, and performance-optimized interfaces.",
    resumePath: `${import.meta.env.BASE_URL}Mahmoud_Doma_CV.pdf`,
    resumeDocxPath: `${import.meta.env.BASE_URL}Mahmoud_Doma_Resume.docx`,
  },

  experiences: [
    {
      id: "niletronix",
      role: "Mid Front-End Developer (Angular)",
      company: "NileTronix",
      location: "Cairo, Egypt",
      workType: "On-site",
      duration: "Aug 2025 – Present",
      period: "Current Role",
      description: [
        "Architected and maintained enterprise Angular applications for real-time traffic, parking, and booking systems, integrating SignalR and MQTT to deliver sub-second live data updates across production dashboards.",
        "Engineered reusable, RTL-ready UI component libraries using Angular, TypeScript, RxJS, Bootstrap 5, and PrimeNG, reducing cross-project duplication and accelerating feature delivery by ~30%.",
        "Optimized rendering performance with Angular Signals and refined REST API payload validation and error-handling pipelines, eliminating critical UI edge cases.",
      ],
      tags: [
        "Angular 20/21",
        "TypeScript",
        "SignalR",
        "MQTT",
        "Angular Signals",
        "PrimeNG",
        "RxJS",
        "Arabic RTL",
      ],
      featured: true,
    },
    {
      id: "freelance",
      role: "Freelance Front-End Developer",
      company: "Self-Employed",
      location: "Remote",
      workType: "Global Clients",
      duration: "2023 – Present",
      period: "Ongoing",
      description: [
        "Delivered 9+ client-facing Angular and JavaScript web applications — including a legal services marketplace, a software studio portfolio, a luxury e-commerce brand site, and B2B corporate platforms.",
        "Integrated REST APIs and built modular, reusable component systems, enabling clients to scale their products with clean architecture.",
        "Designed and deployed responsive layouts with Bootstrap and custom design systems for diverse industries, achieving cross-device compatibility across mobile, tablet, and desktop viewports.",
      ],
      tags: [
        "Angular 19/20",
        "React.js",
        "TypeScript",
        "Bootstrap 5",
        "REST APIs",
        "Tailwind CSS",
        "Custom UI Systems",
      ],
      featured: true,
    },
    {
      id: "izam",
      role: "Software Implementer",
      company: "Izam, Inc.",
      location: "Smart Village, Al Jizah, Egypt",
      workType: "Full-time",
      duration: "Apr 2024 – Oct 2024",
      period: "6 Months",
      description: [
        "Supported full-cycle ERP implementation by customizing client-facing interfaces using HTML, CSS, and JavaScript, aligning system behavior with business workflows.",
        "Executed functional testing, data migration validation, and go-live preparation tasks, contributing to zero critical post-deployment issues during handover.",
        "Conducted end-user training sessions and authored process documentation, boosting client adoption rates and minimizing post-launch support tickets.",
      ],
      tags: [
        "ERP Systems",
        "UI Customization",
        "Functional Testing",
        "Data Migration",
        "Technical Training",
      ],
      featured: false,
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "traffic-management",
      title: "Traffic Management System",
      category: "Enterprise",
      badge: "Enterprise Platform · NileTronix",
      description:
        "Real-time traffic monitoring platform with SignalR and MQTT for live data streams. Implemented offline map rendering and routing via IndexedDB and Web Workers, ensuring operational continuity without network connectivity.",
      techStack: [
        "Angular 20",
        "SignalR",
        "MQTT",
        "IndexedDB",
        "Web Workers",
        "Leaflet",
      ],
      image: "./Images/traffic-management-real.png",
      featured: true,
    },
    {
      id: "npark-dashboard",
      title: "NPark – Smart Parking Dashboard",
      category: "Enterprise",
      badge: "Enterprise Dashboard · NileTronix",
      description:
        "Enterprise parking management system covering live occupancy tracking, ticketing, memberships, revenue analytics, and push notifications with full Arabic RTL support and sub-second update cycles.",
      techStack: [
        "Angular 20",
        "RxJS",
        "NgRx",
        "PrimeNG",
        "REST APIs",
        "Arabic RTL",
      ],
      image: "./Images/npark-dashboard-real.png",
      featured: true,
    },
    {
      id: "q-system",
      title: "Q-SYSTEM – Smart Queue & Interactive Kiosk",
      category: "Enterprise",
      badge: "Enterprise Kiosk · NileTronix",
      description:
        "Standalone touchscreen kiosk UI for automated customer check-in and queue management using Angular Signals. Features runtime white-label branding, bilingual (AR/EN) localization, national ID lookup, and direct 80mm thermal receipt printing.",
      techStack: [
        "Angular 21+",
        "Angular Signals",
        "RxJS",
        "SCSS",
        "REST APIs",
        "i18n",
        "POS Thermal Printing",
      ],
      image: "./Images/qsystem-admin.png",
      featured: true,
    },
    {
      id: "qbooking",
      title: "QBooking – Appointment Booking System",
      category: "Enterprise",
      badge: "Enterprise SaaS · NileTronix",
      description:
        "Modular multi-step booking workflow with clinic/doctor filtering, dynamic appointment slots, and registration forms built with Angular 19/20 standalone components.",
      techStack: ["Angular 20", "TypeScript", "REST APIs", "Bootstrap 5"],
      image: "./Images/qbooking-real.png",
      featured: true,
    },
    {
      id: "customer-feedback",
      title: "Customer Feedback & Survey Platform",
      category: "Enterprise",
      badge: "Enterprise Survey · NileTronix",
      description:
        "Multi-branch, multi-department Angular 21 platform for customer satisfaction tracking. Dynamic question-builder with conditional rating scales, anonymous QR-code surveys, and role-based real-time CSAT dashboards.",
      techStack: [
        "Angular 21",
        "TypeScript",
        "RxJS",
        "Reactive Forms",
        "REST APIs",
        "QR Engine",
        "Multi-Tenant",
      ],
      image: "./Images/customer-feedback-real.png",
      featured: true,
    },
    {
      id: "avokatoo",
      title: "Avokatoo – Legal Services Marketplace",
      category: "Client / Freelance",
      badge: "Client Production · Freelance",
      description:
        "Legal services marketplace connecting clients with vetted, licensed lawyers across Egypt. Built with a feature-driven, standalone-only, signals-first Angular architecture and custom UI tokens.",
      techStack: ["Angular 20", "Bootstrap 5", "Signals", "TypeScript"],
      liveUrl: "https://avokatoo.com",
      image: "./Images/avokatoo-full.png",
      featured: true,
    },
    {
      id: "devora",
      title: "DEVORA – Software Engineering Studio",
      category: "Client / Freelance",
      badge: "Client Production · Freelance (KSA)",
      description:
        "Corporate portfolio site for a software engineering studio in Jeddah specializing in enterprise AI and scalable SaaS platforms, with a control-room-inspired aesthetic.",
      techStack: ["Angular", "TypeScript", "Custom UI System", "SCSS"],
      liveUrl: "https://devora-sa.com",
      image: "./Images/devora-full.png",
      featured: true,
    },
    {
      id: "karim-dawod",
      title: "Karim Dawod Group – Luxury Collectibles",
      category: "Client / Freelance",
      badge: "Client Production · Freelance",
      description:
        "Brand and e-commerce presence for a Cairo-based house of rare collectibles and limited editions, crafted with a refined editorial visual identity.",
      techStack: ["Angular", "TypeScript", "Bootstrap 5"],
      liveUrl: "https://karimdawodgroup.com",
      image: "./Images/karimdawod-full.png",
      featured: true,
    },
    {
      id: "elmostafa",
      title: "El Mostafa – Fruit Import & Distribution",
      category: "Client / Freelance",
      badge: "Client Production · Freelance",
      description:
        "Corporate platform for a premier fruit importer highlighting sourcing, cold-chain logistics, and B2B supply services with conversion-focused UX.",
      techStack: ["Angular 20", "Bootstrap 5", "TypeScript"],
      liveUrl: "https://elmostafafruits.com",
      image: "./Images/elmostafa-full.png",
      featured: true,
    },
    {
      id: "osos-alriadah",
      title: "Osos Al-Riadah – Real Estate Platform",
      category: "Client / Freelance",
      badge: "Client Production · Freelance",
      description:
        "A comprehensive real estate services platform built with Angular, featuring property listings, advanced search, and dynamic content management.",
      techStack: ["Angular", "TypeScript", "Bootstrap 5", "REST APIs"],
      image: "./Images/schoolSystem.jpg",
      featured: true,
    },
    {
      id: "ajyal-alquran",
      title: "Ajyal Al-Quran School",
      category: "Client / Freelance",
      badge: "Client Production · Live",
      description:
        "An educational platform for a Quran school, providing course information, registration, and student resources with a clean, responsive Angular UI.",
      techStack: ["Angular", "TypeScript", "Bootstrap 5", "Arabic RTL"],
      liveUrl: "https://ajyal-alquran.com/",
      image: "./Images/ajyal-full.png",
      featured: true,
    },
    {
      id: "zaytona",
      title: "Zaytona Agriculture Solutions",
      category: "Client / Freelance",
      badge: "Client Production · Live",
      description:
        "An agricultural solutions website showcasing products and consultancy services with a modern, high-performance responsive interface.",
      techStack: ["Angular", "TypeScript", "SCSS", "Responsive Design"],
      liveUrl: "https://zaytona.info/",
      image: "./Images/zaytona-full.png",
      featured: true,
    },
    {
      id: "angular-ecommerce",
      title: "Full-Featured Angular E-Commerce",
      category: "Open Source / Showcase",
      badge: "Showcase Project",
      description:
        "A complete Angular e-commerce application with client state management, catalog filtering, cart persistence, and responsive UI components.",
      techStack: ["Angular 17+", "TypeScript", "RxJS", "Bootstrap 5"],
      liveUrl: "https://mahmouddoma.github.io/E-Commerce-Angular-17/home",
      image: "./Images/e-commerce.jpg",
      featured: false,
    },
  ] as ProjectItem[],

  skills: [
    {
      title: "Core Languages & Foundations",
      description:
        "Solid, standards-based foundation for robust client applications.",
      skills: [
        { name: "TypeScript", highlight: true },
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "HTML5 Semantic", highlight: false },
        { name: "CSS3 / Modern CSS", highlight: false },
        { name: "SCSS / SASS", highlight: true },
      ],
    },
    {
      title: "Frameworks & State Systems",
      description:
        "Modern single-page application architectures and reactive states.",
      skills: [
        { name: "Angular 19 / 20 / 21", highlight: true },
        { name: "Angular Signals", highlight: true },
        { name: "RxJS Observables", highlight: true },
        { name: "NgRx Store", highlight: true },
        { name: "React.js", highlight: false },
      ],
    },
    {
      title: "Real-Time & Offline Engineering",
      description:
        "Sub-second live streaming and continuous offline operations.",
      skills: [
        { name: "SignalR", highlight: true },
        { name: "MQTT Protocol", highlight: true },
        { name: "IndexedDB Storage", highlight: true },
        { name: "Web Workers", highlight: true },
        { name: "REST APIs & Interceptors", highlight: true },
        { name: "Leaflet & GeoJSON Maps", highlight: false },
      ],
    },
    {
      title: "UI Design Systems & RTL Support",
      description: "Bespoke, accessible, responsive component libraries.",
      skills: [
        { name: "Arabic RTL Localization", highlight: true },
        { name: "Bootstrap 5", highlight: false },
        { name: "PrimeNG Components", highlight: true },
        { name: "Tailwind CSS", highlight: false },
        { name: "Component-Based Architecture", highlight: true },
        { name: "Responsive & Kiosk Viewports", highlight: true },
      ],
    },
    {
      title: "Testing, Tools & Workflow",
      description:
        "Spec-driven testing, clean branching, and developer tooling.",
      skills: [
        { name: "Jasmine & Karma Unit Testing", highlight: true },
        { name: "Git & GitHub Workflows", highlight: true },
        { name: "Chrome DevTools Profiling", highlight: false },
        { name: "VS Code & Linters", highlight: false },
        { name: "POS Thermal Printing Integration", highlight: true },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      id: "zagazig",
      title: "Bachelor of Arts — French Language & Literature",
      institution: "Faculty of Arts, Zagazig University",
      duration: "Graduated 2024",
      type: "Degree",
      description:
        "Academic training in linguistics, structural analysis, and professional translation.",
    },
    {
      id: "mcit",
      title: "Angular Development Cross-Skilling Nanodegree",
      institution: "MCIT Egypt & Udacity",
      duration: "Certified",
      type: "Nanodegree",
      description:
        "Comprehensive intensive track covering Angular architecture, RxJS, services, routing, and enterprise SPAs.",
    },
    {
      id: "sololearn",
      title: "JavaScript Certified Specialist",
      institution: "SoloLearn",
      duration: "Certified",
      type: "Certification",
      description:
        "Core algorithms, ES6+ features, asynchronous programming, and DOM manipulation.",
    },
  ] as EducationItem[],

  engineeringPrinciples: [
    {
      title: "Real-Time Sub-Second Synchronization",
      desc: "Delivering live data streams with SignalR and MQTT without UI lag or memory leaks.",
    },
    {
      title: "Signals-First Performance",
      desc: "Fine-grained reactive updates with Angular Signals, bypassing unnecessary change detection cycles.",
    },
    {
      title: "Offline-First Resilience",
      desc: "Architecting IndexedDB persistence and Web Workers to keep enterprise kiosks and maps fully operational offline.",
    },
    {
      title: "Bilingual RTL & Touch Precision",
      desc: "Pixel-perfect bidirectional layouts (Arabic RTL / English LTR) engineered for both enterprise desktop and touch kiosks.",
    },
  ],

  engineeringPillars: [
    {
      title: "Real-Time Sub-Second Latency",
      description:
        "Delivering live data streams with SignalR and MQTT without UI lag or memory leaks across high-throughput enterprise systems.",
    },
    {
      title: "Angular Signals & State",
      description:
        "Fine-grained reactive updates with Angular 19/20/21 Signals, eliminating zone overhead and boosting runtime performance.",
    },
    {
      title: "Offline-First & Web Workers",
      description:
        "Architecting IndexedDB local persistence and background Web Workers to keep kiosks and monitoring dashboards resilient offline.",
    },
    {
      title: "Enterprise RTL Design Systems",
      description:
        "Pixel-perfect bidirectional layouts (Arabic RTL / English LTR) engineered for mission-critical enterprise applications.",
    },
  ],
};
