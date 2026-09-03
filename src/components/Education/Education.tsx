import { portfolioData, EducationItem } from "../../data/portfolioData";
import MagneticButton from "../ui/MagneticButton";
import "./Education.css";

// Clean bespoke hairline SVG icons
function IconDownload() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );
}

function IconExternal() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

function IconDocument() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

export default function Education() {
  const { education, personalInfo } = portfolioData;

  return (
    <section id="education" className="education-editorial-section">
      <div className="education-editorial-container">
        {/* Section Header */}
        <div className="education-editorial-header">
          <span className="section-eyebrow">Credentials</span>
          <h2 className="education-editorial-title">
            Education & Certification
          </h2>
          <p className="education-editorial-subheading">
            Academic degrees and intensive engineering nanodegrees validating
            front-end architecture and language discipline.
          </p>
        </div>

        {/* Minimalist Editorial Rows */}
        <div className="education-rows-table">
          {education.map((item: EducationItem) => (
            <div key={item.id} className="education-row-item">
              {/* Type & Duration Column */}
              <div className="edu-col-meta">
                <span className="edu-type-pill">{item.type}</span>
                <span className="edu-duration-text">{item.duration}</span>
              </div>

              {/* Title & Institution Column */}
              <div className="edu-col-title">
                <h3 className="edu-degree-title">{item.title}</h3>
                <span className="edu-institution-text">{item.institution}</span>
              </div>

              {/* Description Column */}
              <div className="edu-col-desc">
                {item.description && (
                  <p className="edu-desc-text">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sleek Minimalist Resume Ribbon (Zero Bulk) */}
        <div className="resume-editorial-ribbon">
          <div className="ribbon-left-meta">
            <span className="ribbon-icon">
              <IconDocument />
            </span>
            <div className="ribbon-text-block">
              <h4 className="ribbon-heading">Official Curriculum Vitae</h4>
              <p className="ribbon-subtext">
                Complete career documentation with verified enterprise
                responsibilities and technical timelines.
              </p>
            </div>
          </div>

          <div className="ribbon-actions">
            <MagneticButton
              href={personalInfo.resumePath}
              download="Mahmoud_Doma_FrontEnd_CV.pdf"
              className="ribbon-btn-primary"
            >
              <IconDownload />
              <span>Download PDF</span>
            </MagneticButton>

            <MagneticButton
              href={personalInfo.resumeDocxPath}
              download="Mahmoud_Doma_Resume.docx"
              className="ribbon-btn-secondary"
            >
              <IconDownload />
              <span>Download Word (.docx)</span>
            </MagneticButton>

            <MagneticButton
              href={`${personalInfo.resumePath}?view=true`}
              target="_blank"
              rel="noopener noreferrer"
              className="ribbon-btn-ghost"
            >
              <IconExternal />
              <span>Open</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
