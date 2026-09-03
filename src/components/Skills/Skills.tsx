import "./Skills.css";

interface SkillItem {
  name: string;
  detail: string;
}

interface DomainColumn {
  index: string;
  title: string;
  statement: string;
  skills: SkillItem[];
}

const domains: DomainColumn[] = [
  {
    index: "01",
    title: "Core & Reactivity",
    statement:
      "Fine-grained reactive state engines, strict type safety, and modern standalone architectures.",
    skills: [
      { name: "Angular 19/20/21+", detail: "Standalone · Control Flow · Vite" },
      { name: "TypeScript", detail: "Strict Generics · Architectural Types" },
      { name: "Angular Signals", detail: "Fine-Grained Reactivity · Computed" },
      { name: "RxJS Streams", detail: "Declarative Operators · Event Piping" },
      { name: "NgRx Store", detail: "Global Predictable State Architecture" },
    ],
  },
  {
    index: "02",
    title: "Real-Time & Offline",
    statement:
      "Sub-second bidirectional socket streams, telemetry ingestion, and offline operational resilience.",
    skills: [
      { name: "SignalR", detail: "Live WebSockets · Push Data Feeds" },
      { name: "MQTT Protocol", detail: "IoT & Parking Sensor Telemetry" },
      { name: "IndexedDB", detail: "Offline Data Persistence & Caching" },
      { name: "Web Workers", detail: "Offloaded Background Heavy Compute" },
      { name: "Leaflet Maps", detail: "Geospatial Fleet & Traffic Monitoring" },
    ],
  },
  {
    index: "03",
    title: "UI Systems & RTL",
    statement:
      "Pixel-perfect bidirectional layouts, fluid tokens, and enterprise touch interface standards.",
    skills: [
      {
        name: "Arabic RTL Engineering",
        detail: "Bidirectional Layouts · Zero Shift",
      },
      {
        name: "Design Tokens & SCSS",
        detail: "Custom Theming · Fluid Spacing",
      },
      {
        name: "PrimeNG & Bootstrap 5",
        detail: "Enterprise Component Integration",
      },
      {
        name: "Kiosk & Touch POS",
        detail: "Thermal Printer APIs · Touch Flows",
      },
      { name: "Responsive Layouts", detail: "Cross-Device Desktop & Mobile" },
    ],
  },
  {
    index: "04",
    title: "Architecture & QA",
    statement:
      "Contract-driven service layers, automated test specifications, and scalable clean codebases.",
    skills: [
      { name: "REST APIs & Swagger", detail: "Contract-Driven Integration" },
      { name: "Jasmine & Karma", detail: "Isolated Unit Tests & Specs" },
      {
        name: "Git CI/CD Workflows",
        detail: "Branching Strategies & Deployment",
      },
      {
        name: "Clean Architecture & SOLID",
        detail: "Modular Enterprise Maintainability",
      },
      {
        name: "Performance Profiling",
        detail: "Change Detection & Bundle Tuning",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-editorial-section">
      <div className="skills-editorial-container">
        {/* Confident, Clean Header */}
        <div className="skills-editorial-header">
          <span className="section-eyebrow">Capabilities</span>
          <h2 className="skills-editorial-title">Technical Expertise</h2>
          <p className="skills-editorial-subheading">
            Architectural proficiencies, real-time protocols, and engineering
            disciplines refined across production systems.
          </p>
        </div>

        {/* 4 Open Editorial Domain Columns */}
        <div className="skills-domains-grid">
          {domains.map((col) => (
            <div key={col.index} className="domain-column">
              {/* Domain Header */}
              <div className="domain-header">
                <span className="domain-index">/{col.index}</span>
                <h3 className="domain-title">{col.title}</h3>
                <p className="domain-statement">{col.statement}</p>
              </div>

              {/* Skills List */}
              <ul className="domain-skills-list">
                {col.skills.map((skill) => (
                  <li key={skill.name} className="domain-skill-item">
                    <span className="skill-name-text">{skill.name}</span>
                    <span className="skill-detail-text">{skill.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
