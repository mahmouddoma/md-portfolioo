import { useState, FormEvent } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

      if (!response.ok) {
        throw new Error("Unable to submit message. Please try again or reach out directly.");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-heading">Let's Discuss New Opportunities & Systems</h2>
          <p className="section-subheading">
            Whether you have an enterprise project requirement, an engineering role, or a freelance inquiry, my inbox is always open.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <h3 className="contact-subheading">Direct Contact Channels</h3>

            <div className="contact-cards-stack">
              <a href={`mailto:${personalInfo.email}`} className="contact-channel-card solid-card">
                <div className="channel-icon-box">
                  <FaEnvelope />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Email Address</span>
                  <span className="channel-value">{personalInfo.email}</span>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`} className="contact-channel-card solid-card">
                <div className="channel-icon-box">
                  <FaPhoneAlt />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Direct Phone</span>
                  <span className="channel-value">{personalInfo.phone}</span>
                </div>
              </a>

              <div className="contact-channel-card solid-card static">
                <div className="channel-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Base Location</span>
                  <span className="channel-value">{personalInfo.location} (Open to Relocation & Remote)</span>
                </div>
              </div>

              <div className="social-channels-card solid-card">
                <span className="channel-label">Professional Profiles</span>
                <div className="social-btn-row">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn-item"
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn-item"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Solid Form */}
          <div className="contact-form-col">
            <div className="contact-form-card solid-card">
              <h3 className="form-card-title">Send a Direct Message</h3>

              {success ? (
                <div className="form-success-banner">
                  <FaCheckCircle className="success-icon" />
                  <h4>Message Sent Successfully</h4>
                  <p>Thank you for reaching out. I will review your message and reply promptly.</p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-solid-secondary btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="solid-contact-form">
                  <div className="form-group-row">
                    <div className="form-field">
                      <label htmlFor="name" className="field-label">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="field-label">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject" className="field-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Front-End Project Inquiry / Role"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="field-label">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project, timeline, or inquiry..."
                      className="form-input form-textarea"
                    />
                  </div>

                  {error && (
                    <div className="form-error-banner">
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-solid-accent form-submit-btn"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="spinner-icon" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <FaPaperPlane />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
