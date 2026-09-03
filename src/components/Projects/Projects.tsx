import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaExternalLinkAlt, FaFolder, FaLayerGroup } from "react-icons/fa";
import { TbShieldLock } from "react-icons/tb";
import { portfolioData, ProjectItem } from "../../data/portfolioData";
import ProjectThumbnail from "./ProjectThumbnail";
import MagneticButton from "../ui/MagneticButton";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All",
  "Enterprise",
  "Client / Freelance",
  "Open Source / Showcase",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const showcaseRef = useRef<HTMLDivElement>(null);

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = document.querySelectorAll(".project-showcase-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, showcaseRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section id="projects" className="projects-showcase-section">
      <div className="showcase-container">
        {/* Section Header */}
        <div className="showcase-header">
          <span className="section-eyebrow">Selected Works</span>
          <h2 className="showcase-title">
            Featured Projects &{" "}
            <span className="text-accent">Production Systems</span>
          </h2>
          <p className="showcase-subheading">
            Deep-dive case studies of mission-critical real-time platforms,
            client applications, and custom component systems. Hover over any
            interface to preview the full live site.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="showcase-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "All" && <FaLayerGroup className="pill-icon" />}
              {cat !== "All" && <FaFolder className="pill-icon" />}
              <span>{cat}</span>
              <span className="filter-count">
                {cat === "All"
                  ? portfolioData.projects.length
                  : portfolioData.projects.filter((p) => p.category === cat)
                      .length}
              </span>
            </button>
          ))}
        </div>

        {/* Immersive Projects Showcase (Alternating Large Layout) */}
        <div className="showcase-list" ref={showcaseRef}>
          {filteredProjects.map((project: ProjectItem, index: number) => {
            const isReversed = index % 2 !== 0;
            const projectNum = String(index + 1).padStart(2, "0");

            return (
              <article
                key={project.id}
                className={`project-showcase-item ${isReversed ? "reversed" : ""}`}
                data-cursor="project"
              >
                {/* Visual / Mockup Viewport */}
                <div className="showcase-visual-col">
                  <div className="showcase-mockup-frame">
                    {project.image && (
                      <ProjectThumbnail
                        image={project.image}
                        title={project.title}
                        badge={project.badge}
                        liveUrl={project.liveUrl}
                      />
                    )}
                  </div>
                </div>

                {/* Narrative / Context Column */}
                <div className="showcase-narrative-col">
                  <div className="narrative-top-meta">
                    <span className="showcase-index">/{projectNum}</span>
                    <span className="showcase-badge">{project.badge}</span>
                  </div>

                  <h3 className="showcase-item-title">{project.title}</h3>

                  <p className="showcase-item-description">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="showcase-tech-chips">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="showcase-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="showcase-actions">
                    {project.liveUrl ? (
                      <MagneticButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="showcase-live-btn"
                      >
                        <span>Visit Live Platform</span>
                        <FaExternalLinkAlt className="action-icon" />
                      </MagneticButton>
                    ) : (
                      <div className="showcase-internal-badge">
                        <span className="internal-status-pulse" />
                        <TbShieldLock className="internal-badge-icon" />
                        <span className="internal-badge-text">
                          Enterprise Internal System
                        </span>
                        <span className="internal-badge-pill">Private</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
