import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaFileDownload, FaBars, FaTimes } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import "./Navbar.css";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "experience", "projects", "skills", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`site-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand */}
        <a href="#hero" className="navbar-brand" onClick={() => handleNavClick("#hero")}>
          <span className="brand-badge">MD</span>
          <span className="brand-text">
            Mahmoud Doma
            <span className="brand-role">Front-End Developer</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionKey = link.href.replace("#", "");
              const isActive = activeSection === sectionKey;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                    {isActive && <span className="active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="navbar-actions">
          <div className="social-links-desktop">
            <a
              href={portfolioData.personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={portfolioData.personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>

          <a
            href={portfolioData.personalInfo.resumePath}
            download="Mahmoud_Doma_FrontEnd_CV.pdf"
            className="btn-resume-nav"
            title="Download CV"
          >
            <FaFileDownload />
            <span>Resume</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-menu-socials">
            <a
              href={portfolioData.personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={portfolioData.personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
