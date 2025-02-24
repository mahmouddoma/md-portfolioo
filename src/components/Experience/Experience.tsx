import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { useInView } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Izam Inc.",
      role: "Software Implementer",
      duration: "April 2024 - Oct 2024",
      description:
        "Developed and optimized web interfaces using HTML, CSS, JavaScript, and jQuery...",
    },
    {
      id: 2,
      company: "Freelance",
      role: "Front-End Developer",
      duration: "January 2024 - Present",
      description:
        "Front-End Developer with 1 year of experience creating responsive web applications...",
    },
  ];

  const education = [
    {
      id: 1,
      institution: "Zagazig University",
      degree: "Bachelor of Arts , French Department",
      duration: "2020 - 2024",
      description: "Graduated with a Bachelor's degree in French Language...",
    },
    {
      id: 2,
      institution: "Udacity",
      degree: "Cross Skilling Angular Nanodegree",
      duration: "August 2022",
      description:
        "Completed the Angular Nanodegree program, gaining expertise in Angular development...",
    },
  ];

  const skills = [
    "Angular",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Responsive Design",
    "SQL Server",
  ];

  const achievements = [
    "Completed Udacity Cross Skilling Angular Nanodegree (August 2022)",
    "Developed multiple full-stack projects using Angular",
  ];

  return (
    <div className="experience-container">
      <motion.h1
        className="experience-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Experience
      </motion.h1>

      {/* Experience Section */}
      <div className="timeline">
        {experiences.map((exp, index) => {
          return (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <h3 className="company">{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <p className="duration">{exp.duration}</p>
                <p className="description">{exp.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Education Section */}
      <div className="education-section">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <h3 className="institution">{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="duration">{edu.duration}</p>
                <p className="description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              className="achievement"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {achievement}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
