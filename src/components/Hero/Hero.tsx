import "./Hero.css";
import { motion } from "framer-motion";
import Particles from "./Particles";
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
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Particles />
        </motion.div>

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
        {/* Image Section */}
        <motion.img
          src="./Images/upscalemedia-transformed.jpeg"
          loading="lazy"
          alt="Mahmoud Doma"
          className="hero-image"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
        />
        {/* Contact Information */}

        {/* Text Section */}
        <div className="hero-text">
          <motion.h1 className="hero-heading" variants={headingVariants}>
            Hello, I'm Mahmoud Doma 👋
          </motion.h1>
          <motion.p className="hero-contact" variants={subtextVariants}>
            📍 Address 1: Al Sharqiya, Egypt
          </motion.p>{" "}
          <motion.p className="hero-contact" variants={subtextVariants}>
            📍 Address 2: Jiza, Egypt
          </motion.p>
          <motion.p className="hero-contact" variants={subtextVariants}>
            📞 Phone: +20 1093430526
          </motion.p>
          <motion.p className="hero-subtext" variants={subtextVariants}>
            A passionate <strong>Front-End Developer</strong> with expertise in
            <strong> Angular & React</strong>, crafting high-performance,
            scalable, and user-friendly web applications.
          </motion.p>
          <motion.p className="hero-description" variants={subtextVariants}>
            I specialize in **building modern UI/UX experiences**, converting
            design mockups into **interactive, responsive web interfaces**, and
            integrating **APIs** to create seamless applications. 🚀
          </motion.p>
          {/* Buttons */}
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
          {/* Call to Action */}
          <motion.div className="cta-buttons" variants={containerVariants}>
            <motion.a
              href="https://mahmouddoma.github.io/Portfolio0/"
              className="hero-button primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View My Portfolio 💼
            </motion.a>

            <motion.a
              href="mailto:devdoma2002@gmail.com"
              className="hero-button secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact Me 📩
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
