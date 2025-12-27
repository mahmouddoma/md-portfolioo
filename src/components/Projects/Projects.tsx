import "./Projects.css";
import { motion } from "framer-motion";
import {
  FaAngular,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaFire,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const iconComponents = {
  angular: FaAngular,
  css3: FaCss3Alt,
  react: FaReact,
  html5: FaHtml5,
  javascript: FaJs,
  typescript: FaJs,
  nodejs: FaNodeJs,
  mongodb: FaDatabase,
  firebase: FaFire,
  git: FaGitAlt,
  github: FaGithub,
};
interface ProjectsProps {
  selectedCategory: string;
}
type IconKey = keyof typeof iconComponents;
const categories = ["All", "Angular", "React", "JavaScript", "HTML/CSS"];

export const projects: Array<{
  id: number;
  title: string;
  description: string;
  category: string;
  icon: IconKey;
  image: string;
  link: string;
}> = [
  {
    id: 101, // New ID
    title: "Osos Al-Riadah",
    description:
      "A comprehensive real estate services platform built with Angular, featuring property listings, search, and dynamic content management.",
    category: "Angular",
    icon: "angular",
    image: "./Images/osos.png", 
    link: "https://osos-alriadah.com/",
  },
  {
    id: 102, // New ID
    title: "Ajyal Al-Quran School",
    description:
      "An educational platform for a Quran school, providing course information, registration, and student resources. Built with Angular.",
    category: "Angular",
    icon: "angular",
    image: "./Images/ajyal.png",
    link: "https://ajyal-alquran.com/",
  },
  {
    id: 103, // New ID
    title: "Zaytona Agriculture",
    description:
      "An agricultural solutions website showcasing products and services (fertilizers, consultancy) with a clean, responsive Angular UI.",
    category: "Angular",
    icon: "angular",
    image: "./Images/zaytona.png",
    link: "https://zaytona.info/",
  },
  {
    id: 1,
    title: "E-Commerce Using Angular",
    description:
      "A fully functional Angular-based e-commerce website with state management for seamless user experience.",
    category: "Angular",
    icon: "angular",
    image: "./Images/e-commerce.jpg",
    link: "https://mahmouddoma.github.io/E-Commerce-Angular-17/home",
  },
  {
    id: 10,
    title: "HTML Framework / Bootstrap",
    description:
      "A custom utility framework using HTML and Bootstrap, designed for responsive and reusable UI components.",
    category: "HTML/CSS",
    icon: "html5",
    image: "./Images/css.jpg",
    link: "https://mahmouddoma.github.io/landPage/",
  },
  {
    id: 4,
    title: "School Management System",
    description:
      "An Angular-powered system for managing students, teachers, attendance, and subscriptions, using local storage for data handling.",
    category: "Angular",
    icon: "angular",
    image: "./Images/schoolSystem.jpg",
    link: "https://mahmouddoma.github.io/School-Management-System/register",
  },
  {
    id: 5,
    title: "To-Do List App",
    description:
      "A simple yet effective task management app built with HTML, CSS, and JavaScript, allowing users to add, edit, and delete tasks easily.",
    category: "JavaScript",
    icon: "javascript",
    image: "./Images/todo.jpg",
    link: "https://mahmouddoma.github.io/Pomodoro-Timer/",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Angular, showcasing skills, projects, and experience, hosted on GitHub Pages.",
    category: "Angular",
    icon: "angular",
    image: "./Images/portfolio.me.jpg",
    link: "https://mahmouddoma.github.io/Portfolio0/",
  },
  {
    id: 7,
    title: "Landing Page",
    description:
      "A secure authentication system using Angular, providing user registration and login functionality.",
    category: "Angular",
    icon: "angular",
    image: "./Images/landingpage.jpg",
    link: "https://mahmouddoma.github.io/landing-page-project/",
  },
  {
    id: 8,
    title: "Login & Registration System",
    description:
      "A secure authentication system using Angular, providing user registration and login functionality.",
    category: "Angular",
    icon: "angular",
    image: "./Images/signupForm.jpg",
    link: "https://mahmouddoma.github.io/SignupAssignment/",
  },
  {
    id: 9,
    title: "React Portfolio Website",
    description:
      "A React-based portfolio website, offering a modern and interactive way to showcase projects and skills.",
    category: "React",
    icon: "react",
    image: "./Images/react.jpg",
    link: "https://mahmouddoma.github.io/md-portfolioo/",
  },
  {
    id: 11,
    title: "E-Commerce Using JS",
    description:
      "A simple yet effective JavaScript-powered e-commerce platform with dynamic product listings and cart functionality.",
    category: "JavaScript",
    icon: "javascript",
    image: "./Images/js.jpg",
    link: "https://mahmouddoma.github.io/e-commerce-sample/",
  },
  {
    id: 12,
    title:
      "A static e-commerce website built with HTML, CSS, and JavaScript, featuring an engaging UI and smooth interactions.",
    description:
      "A simple e-commerce website built with HTML, CSS, and JavaScript",
    category: "HTML/CSS",
    icon: "css3",
    image: "./Images/js.jpg",
    link: "https://mahmouddoma.github.io/e-commerce-sample/",
  },
];

// src/components/Projects.jsx

const Projects = ({ selectedCategory }: ProjectsProps) => {
  const [currentCategory, setCurrentCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      currentCategory === "All" || project.category === currentCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="projects-section">
      <div className="categories-container">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`category-button ${
              currentCategory === category ? "active" : "inactive"
            }`}
             onClick={() => setCurrentCategory(category)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      {/* rturn-to-home*/}
      <div className="rturn-to-home">
        <Link to="/">Return to Home</Link>{" "}
      </div>
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
              />{" "}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Preview
                </a>
                <span className="project-category">
                  {React.createElement(iconComponents[project.icon])}
                  {project.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
