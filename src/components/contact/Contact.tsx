import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
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
      }, 3000);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="floating-bg"></div>
      <motion.div
        className="contact-container"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h2
          className="section-title"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Get in Touch
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <motion.div className="input-group">
            <input
              type="text"
              id="name"
              required
              className="form-input"
              placeholder=" "
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <label htmlFor="name" className="form-label">
              Name
            </label>
          </motion.div>

          <motion.div className="input-group">
            <input
              type="email"
              id="email"
              required
              className="form-input"
              placeholder=" "
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </motion.div>

          <motion.div className="input-group">
            <textarea
              id="message"
              required
              className="form-input textarea"
              placeholder=" "
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <label htmlFor="message" className="form-label">
              Message
            </label>
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : success ? (
              <FaCheckCircle className="icon" />
            ) : (
              <>
                Send Message <FaPaperPlane className="icon" />
              </>
            )}
          </motion.button>
        </motion.form>

        {success && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Message sent successfully!
          </motion.div>
        )}

        {error && <p className="error-message">{error}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;
