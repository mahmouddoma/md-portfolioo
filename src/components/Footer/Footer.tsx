import { FaArrowUp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container-custom">
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <span className="footer-badge">MD</span>
            <div className="footer-brand-info">
              <h3 className="footer-brand-name">{personalInfo.name}</h3>
              <p className="footer-brand-role">{personalInfo.title} • {personalInfo.specialty}</p>
            </div>
          </div>

          <div className="footer-social-row">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-icon-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <span>Back to top</span>
            <FaArrowUp />
          </button>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & Developed with Precision.
          </p>
          <div className="footer-tech-stack-indicator">
            <span>React 19</span> • <span>TypeScript</span> • <span>GSAP</span> • <span>Angular Specialist</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
