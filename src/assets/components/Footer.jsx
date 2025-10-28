// src/assets/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>© {new Date().getFullYear()} Abdullah | Computer Science | Microsoft Learn Student Ambassador</h3>
        <p>Building technology that empowers and inspires future innovators</p>

        <div className="footer-icons">
          <a href="https://github.com/Abdullah22588" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/abdullah-khan-49111826b/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:abdullah.malokhani@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
