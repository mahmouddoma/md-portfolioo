import { portfolioData, ExperienceItem } from "../../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  const { experiences } = portfolioData;

  // Curated, crisp summary for each role so it stays light and elegant
  const getRoleSummary = (id: string, exp: ExperienceItem) => {
    switch (id) {
      case "niletronix":
        return "Architecting real-time traffic and parking dashboards with SignalR & MQTT. Built reusable RTL component libraries accelerating feature delivery by ~30%, with fine-grained Angular Signals state.";
      case "freelance":
        return "Shipped 9+ client-facing web applications across legal, e-commerce, and corporate SaaS. Delivered modular front-end architectures with robust REST API integrations.";
      case "izam":
        return "Customized enterprise ERP client-facing interfaces with HTML/CSS/JavaScript and executed data migration validation, ensuring zero critical post-deployment issues.";
      default:
        return exp.description[0];
    }
  };

  return (
    <section id="experience" className="experience-editorial-section">
      <div className="experience-editorial-container">
        {/* Simple, Confident Section Header */}
        <div className="experience-editorial-header">
          <span className="section-eyebrow">Experience</span>
          <h2 className="experience-editorial-title">Work Experience</h2>
          <p className="experience-editorial-subheading">
            Selected roles delivering real-time front-end architectures, high-availability dashboards, and production client applications.
          </p>
        </div>

        {/* Minimalist Editorial Rows Table */}
        <div className="experience-rows-table">
          {experiences.map((exp: ExperienceItem, idx: number) => {
            const isCurrent = idx === 0;

            return (
              <div key={exp.id} className="experience-row-item">
                {/* Period Column */}
                <div className="exp-col-period">
                  <span className="exp-period-text">{exp.duration}</span>
                  {isCurrent && <span className="exp-current-pill">Current</span>}
                </div>

                {/* Company & Role Column */}
                <div className="exp-col-company">
                  <h3 className="exp-company-heading">{exp.company}</h3>
                  <span className="exp-role-subtext">{exp.role}</span>
                  <span className="exp-location-subtext">{exp.location} · {exp.workType}</span>
                </div>

                {/* Contribution & Stack Column */}
                <div className="exp-col-details">
                  <p className="exp-summary-text">{getRoleSummary(exp.id, exp)}</p>
                  <div className="exp-inline-tags">
                    {exp.tags.slice(0, 5).map((tag: string) => (
                      <span key={tag} className="exp-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
