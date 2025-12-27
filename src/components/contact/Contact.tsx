import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaPaperPlane, 
  FaCheckCircle, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub 
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("https://formspree.io/f/mgvobvrz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "devdoma2002@gmail.com",
      link: "mailto:devdoma2002@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Cairo, Egypt",
      link: "#"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Mahmoud Doma",
      link: "https://www.linkedin.com/in/mahmoud-doma-4520a222a/"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "mahmouddoma",
      link: "https://github.com/mahmouddoma"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="contact-section">
      <div className="contact-background"></div>
      
      <motion.div 
        className="contact-content-wrapper"
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h2 className="section-title">Get in <span className="highlight">Touch</span></h2>
          {/* <p className="section-subtitle">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p> */}
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <motion.div className="contact-info-container" variants={itemVariants}>
            {contactInfo.map((item, index) => (
              <motion.a 
                href={item.link} 
                key={index}
                target={item.link !== "#" ? "_blank" : "_self"}
                rel="noreferrer"
                className="contact-card"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="card-icon">{item.icon}</div>
                <div className="card-details">
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div className="form-container" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="form-title">Send a Message</h3>
              
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder=" "
                />
                <label htmlFor="name">Your Name</label>
              </div>

              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder=" "
                />
                <label htmlFor="email">Your Email</label>
              </div>

              <div className="input-wrapper">
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder=" "
                  rows={4}
                />
                <label htmlFor="message">Your Message</label>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? (
                  <div className="spinner"></div> // You might need to style this or import a spinner
                ) : success ? (
                  <>Sent Successfully <FaCheckCircle /></>
                ) : (
                  <>Send Message <FaPaperPlane /></>
                )}
              </motion.button>

              {success && (
                <motion.p 
                  className="success-text"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  Thanks! I'll get back to you soon.
                </motion.p>
              )}
              {error && <p className="error-text">Error: {error}</p>}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
