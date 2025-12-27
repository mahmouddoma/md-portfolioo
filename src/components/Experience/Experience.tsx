import { motion } from "framer-motion";
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaTrophy,
  FaCalendarAlt 
} from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 0,
      role: "Front-End Angular Developer",
      company: "Niletronix | Spirit of Innovation",
      duration: "Oct 2024 - Present",
      description:
        "Developing smart, simple, and reliable web solutions using Angular. Contributing to innovative systems for modern workplaces with a focus on high-performance and user-friendly interfaces.",
      tags: ["Angular", "Smart Solutions", "Integration"],
      icon: <FaCode />
    },
    {
      id: 1,
      role: "Front-End Developer",
      company: "Freelance",
      duration: "Jan 2024 - Present",
      description:
        "Building responsive, user-friendly web applications using Angular 19, JavaScript, TypeScript, and modern UI frameworks. Delivering high-quality code and exceptional user experiences for various clients.",
      tags: ["Angular", "React", "TypeScript", "Tailwind"],
      icon: <FaCode />
    },
    {
      id: 2,
      role: "Software Implementer",
      company: "Izam Inc.",
      duration: "April 2024 - Oct 2024",
      description:
        "Implemented and optimized ERP software solutions. Collaborated with technical teams to ensure seamless integration and user adoption.",
      tags: ["ERP", "Technical Support", "Implementation"],
      icon: <FaBriefcase />
    },
    {
      id: 3,
      role: "Technical Support Specialist",
      company: "Amancom - Al Giza",
      duration: "Apr 2025 - Aug 2025",
      description:
        "Provided technical assistance and troubleshooting for hardware, software, and network-related issues. Supported clients by identifying problems, offering solutions, and ensuring minimal downtime. Installed, configured, and maintained computer systems and applications to meet user needs. Documented support cases and collaborated with the IT team to improve service efficiency.",
      tags: ["Technical Support", "Troubleshooting", "System Maintenance"],
      icon: <FaBriefcase />
    },
  ];

  const education = [
    {
      id: 1,
      institution: "Zagazig University",
      degree: "Bachelor of Arts, French Department",
      duration: "2020 - 2024",
      description: "Graduated with a focus on linguistics and cultural studies.",
    },
    {
      id: 2,
      institution: "Udacity",
      degree: "Cross Skilling Angular Nanodegree",
      duration: "August 2022",
      description:
        "Mastered Angular fundamentals, routing, state management, and building single-page applications.",
    },
  ];

  const skills = [
    { name: "Angular 19", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML5 / CSS3", level: 95 },
    { name: "React.js", level: 75 },
    { name: "SCSS / SASS", level: 85 },
    { name: "Bootstrap 5", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git / GitHub", level: 80 },
    { name: "REST APIs", level: 85 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="experience-section">
      <div className="experience-background"></div>
      
      <motion.div 
        className="content-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">Experience & <span className="highlight">Education</span></h2>
          <p className="section-description">
            My professional journey and academic background in tech.
          </p>
        </motion.div>

        {/* Timeline - Experience */}
        <div className="timeline-container">
          <h3 className="timeline-heading">
            <FaBriefcase className="heading-icon" /> Work Experience
          </h3>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content card-glass">
                  <div className="timeline-date">
                    <FaCalendarAlt /> {exp.duration}
                  </div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-tags">
                    {exp.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Education */}
        <div className="timeline-container education-container">
          <h3 className="timeline-heading">
            <FaGraduationCap className="heading-icon" /> Education
          </h3>
          
          <div className="timeline">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id} 
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="timeline-marker edu"></div>
                <div className="timeline-content card-glass">
                  <div className="timeline-date">
                    <FaCalendarAlt /> {edu.duration}
                  </div>
                  <h3 className="timeline-role">{edu.degree}</h3>
                  <h4 className="timeline-company">{edu.institution}</h4>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div className="skills-container" variants={itemVariants}>
          <h3 className="timeline-heading centered">
            <FaTrophy className="heading-icon" /> Technical Skills
          </h3>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-card card-glass"
                whileHover={{ scale: 1.05, translateY: -5 }}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Experience;
