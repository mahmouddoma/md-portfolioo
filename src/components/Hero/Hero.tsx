import "./Hero.css";
import { motion } from "framer-motion";
import Blob from "./Blob";
import { useNavigate } from "react-router-dom";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiGithub,
} from "react-icons/si";
import { span } from "framer-motion/client";

interface HeroProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
const categories = [
  { name: "All", icon: null },
  { name: "Angular", icon: <FaAngular className="icon text-red-600" /> },
  { name: "React", icon: <FaReact className="icon text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="icon text-yellow-500" />,
  },
  { name: "TypeScript", icon: <SiTypescript className="icon text-blue-500" /> },
  { name: "HTML", icon: <FaHtml5 className="icon text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="icon text-blue-600" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="icon text-cyan-500" />,
  },
  { name: "Bootstrap", icon: <SiBootstrap className="icon text-purple-600" /> },
  { name: "jQuery", icon: <SiJquery className="icon text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="icon text-orange-500" /> },
  {
    name: "GitHub",
    icon: <SiGithub className="icon text-gray-900 dark:text-white" />,
  },
];

function Hero({ selectedCategory, setSelectedCategory }: HeroProps) {
  const navigate = useNavigate();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    navigate("/projects");
  };

  const containerVariants = {
    hidden: { y: 50 },
    visible: {
      y: 0,
      transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } },
  };

  const subtextVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.6, duration: 0.5 },
    },
  };

  return (
    <motion.section
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Animations */}
      <div className="hero-background">
        {/* Particles removed - now global */
          /* <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Particles />
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <Blob />
        </motion.div>
      </div>

      {/* Hero Content Wrapper */}
      <div className="hero-content">
        {/* Left Side - Text Content */}
        <div className="hero-text-section">
          <motion.div className="hero-badge" variants={subtextVariants}>
            <span className="badge-icon">💻</span>
            <span className="badge-text">Available for Freelance</span>
          </motion.div>

          <motion.h1 className="hero-heading" variants={headingVariants}>
            Hi, I'm <span className="highlight">Mahmoud Doma</span>
          </motion.h1>
          
          <motion.h2 className="hero-role" variants={subtextVariants}>
            Front-End Developer & UI/UX Enthusiast
          </motion.h2>

          <motion.p className="hero-subtext" variants={subtextVariants}>
            Transforming ideas into <strong>beautiful, responsive</strong> web
            experiences with <strong>Angular & React</strong>. Specialized in
            crafting intuitive user interfaces that users love.
          </motion.p>

          <motion.div className="hero-stats" variants={subtextVariants}>
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </motion.div>

          {/* Quick Contact Icons */}
          <motion.div className="quick-contact" variants={subtextVariants}>
            <a 
              href="mailto:devdoma2002@gmail.com" 
              title="devdoma2002@gmail.com"
              aria-label="Email"
            >
              📧
            </a>
            <a 
              href="tel:+201093490526" 
              title="+20 109 349 0526"
              aria-label="Phone"
            >
              📞
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-doma-4520a222a/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              💼
            </a>
            <span title="Cairo, Egypt">📍 Cairo, Egypt</span>
          </motion.div>

          {/* CTA Button */}
          <motion.div className="cta-buttons" variants={containerVariants}>
            <motion.a
              href="mailto:devdoma2002@gmail.com"
              className="hero-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together 🚀
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side - Visual Element */}
        <motion.div 
          className="hero-visual"
          variants={imageVariants}
        >
          <div className="code-window">
            <div className="window-header">
              <div className="window-buttons">
                <span className="btn red"></span>
                <span className="btn yellow"></span>
                <span className="btn green"></span>
              </div>
              <span className="window-title">app.tsx</span>
            </div>
            <div className="code-content">
              <pre>
                <code>
{`/**
 * @Developer Mahmoud Doma
 * @Role Front-End Developer & UI/UX Enthusiast
 * @Location Cairo, Egypt
 */

const profile = {
  experience: "1+ years",
  
  skills: {
    core: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    frameworks: ["Angular 19", "React.js"],
    styling: ["SCSS", "Bootstrap", "Tailwind CSS"],
    tools: ["Git", "VS Code", "Figma"]
  },
  
  expertise: [
    "Building responsive web applications",
    "API integration & async handling",
    "Modern UI/UX customization",
    "Real-time applications",
    "Git version control"
  ],
  
  background: [
    "Technical Support Specialist",
    "Software Implementation (ERP)",
    "Front-End Development"
  ],
  
  passion: "Continuous learning & creating exceptional UX",
  
  status: "Available for Freelance 💻"
};

// 2 years intensive experience in:
// HTML • CSS • JavaScript • TypeScript
// Angular • SCSS • Bootstrap • React.js

export default profile;`}
                </code>
              </pre>
            </div>
          </div>
          
          {/* Tech Stack Icons */}
          <div className="tech-stack">
            <FaReact className="tech-icon react" />
            <FaAngular className="tech-icon angular" />
            <SiTypescript className="tech-icon typescript" />
            <FaHtml5 className="tech-icon html" />
            <FaCss3Alt className="tech-icon css" />
          </div>
        </motion.div>
      </div>

      {/* Tech Filter Buttons - Below Content */}
      <motion.div className="hero-buttons" variants={containerVariants}>
        {categories.map(({ name, icon }) => (
          <motion.button
            key={name}
            onClick={() => handleCategorySelect(name)}
            className={`hero-button ${
              selectedCategory === name ? "active" : "inactive"
            }`}
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {icon || name}
          </motion.button>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Hero;
