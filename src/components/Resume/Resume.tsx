import { useState } from "react";
import { motion } from "framer-motion";
import "./Resume.css";

export default function Resume() {
  const resumeUrl = "./Mahmoud-Doma CV.pdf";

  const [isLoading, setIsLoading] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="resume-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="resume-heading">My Resume</h1>

      {/* PDF Viewer */}
      <div className="pdf-viewer">
        {isLoading && <div className="loading-spinner">Loading...</div>}
        <iframe
          src={resumeUrl}
          title="Resume"
          width="100%"
          height="600px"
          style={{ border: "none" }}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Download Button */}
      <motion.a
        href={resumeUrl}
        download="Mahmoud_Doma_Resume.pdf"
        className="download-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Download Resume
      </motion.a>
    </motion.div>
  );
}
