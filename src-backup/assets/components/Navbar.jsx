// src/components/Navbar.jsx
import React, { useState } from "react";
import "./navbar.css"; // local CSS for navbar

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="brand">
          <a href="#home">Abdullah</a>
        </div>

        <button
          className="nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className={`hamburger ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${open ? "open" : ""}`}
          onClick={() => setOpen(false)}
        >
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#certs">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
