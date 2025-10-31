// src/assets/components/Contact.jsx
import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out — form not connected yet!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Let’s Get in Touch</h2>
        <p className="contact-intro">
          Have a project, research idea, or collaboration in mind? I’d love to hear from you!
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:abdullah.malokhani@gmail.com" className="highlight">
                abdullah.malokhani@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/abdullah-khan-49111826b/"
                target="_blank"
                rel="noreferrer"
                className="highlight"
              >
                linkedin.com/in/abdullah-khan-49111826b/
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://www.github.com/Abdullah22588"
                target="_blank"
                rel="noreferrer"
                className="highlight"
              >
                github.com/Abdullah22588
              </a>
            </p>
            <p>
              <strong>Location:</strong> Sindh, Pakistan
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
