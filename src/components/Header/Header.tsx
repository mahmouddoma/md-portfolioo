import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
  HiHome, 
  HiMail 
} from "react-icons/hi";
import { 
  MdWorkHistory 
} from "react-icons/md";
import { 
  FaLinkedin, 
  FaGithub, 
  FaFileAlt,
  FaLaptopCode
} from "react-icons/fa";
import "./Header.css";

const pages = [
  { id: 1, name: "Home", icon: <HiHome />, path: "/" },
  {
    id: 2,
    name: "Projects",
    icon: <FaLaptopCode />,
    path: "/projects",
  },
  {
    id: 3,
    name: "Resume",
    icon: <FaFileAlt />,
    path: "/resume",
  },
  {
    id: 4,
    name: "Experience",
    icon: <MdWorkHistory />,
    path: "/experience",
  },
  {
    id: 5,
    name: "Contact",
    icon: <HiMail />,
    path: "/contact",
  },
];

const socialIcons = [
  {
    id: 1,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mahmoud-doma-4520a222a/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/mahmouddoma",
  },
];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`slider-container ${isOpen ? "expanded" : "collapsed"}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.div className="slider">
        {pages.map((page) => (
          <motion.div
            key={page.id}
            className={`slider-item ${
              location.pathname === page.path ? "active" : ""
            }`}
            onClick={() => navigate(page.path)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="icon">{page.icon}</span>
            <span className="name">{page.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className={`slider-footer ${isOpen ? "expanded" : ""}`}>
        {socialIcons.map((social) => (
          <a 
            key={social.id} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="icon">{social.icon}</span>
          </a>
        ))}
      </div>

    </div>
  );
}

export default Header;
