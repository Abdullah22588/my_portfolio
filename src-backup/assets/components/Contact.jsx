// src/assets/components/Contact.jsx
import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! This form isn’t connected yet.");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <p>
              📧 <strong>Email:</strong> abdullah.malokhani@gmail.comh
              
            </p>
            <p>
              💼 <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/abdullah-khan-49111826b/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/abdullah-khan-49111826b/
              </a>
            </p>
            <p>
              💻 <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Abdullah22588"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Abdullah22588
              </a>
            </p>
            <p>
              📍 <strong>Location:</strong> Sindh, Pakistan
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
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
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
