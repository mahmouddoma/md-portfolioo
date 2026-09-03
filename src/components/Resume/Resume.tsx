import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEye, FaFilePdf } from "react-icons/fa";
import "./Resume.css";

export default function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}Mahmoud_Doma_CV.pdf`;

  const [isLoading, setIsLoading] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="resume-section">
      <div className="resume-background"></div>

      <motion.div
        className="resume-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="resume-header" variants={itemVariants}>
          <div className="icon-wrapper">
            <FaFilePdf className="pdf-icon" />
          </div>
          <h1 className="resume-heading">
            My <span className="highlight">Resume</span>
          </h1>
          <p className="resume-subtitle">
            View my professional journey, skills, and qualifications.
          </p>
        </motion.div>

        <motion.div className="resume-actions" variants={itemVariants}>
          <motion.a
            href={resumeUrl}
            download="Mahmoud_Doma_CV.pdf"
            className="action-button download"
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download PDF
          </motion.a>

          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button view"
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEye /> Open in New Tab
          </motion.a>
        </motion.div>

        {/* PDF Viewer Container */}
        <motion.div className="pdf-container-wrapper" variants={itemVariants}>
          <div className="pdf-viewer-frame">
            {isLoading && (
              <div className="loading-overlay">
                <div className="spinner"></div>
                <p>Loading Resume...</p>
              </div>
            )}
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume Preview"
              className="pdf-iframe"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
