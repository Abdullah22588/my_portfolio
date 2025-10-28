import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Load theme from localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const goHome = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("hero");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <header className="nav-header">
      <div className="nav-container">
        {/* Brand + Theme Toggle */}
        <div className="brand-wrapper">
          <span className="brand" onClick={goHome}>
            Abdullah
          </span>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav id="primary-navigation" className={`nav-links ${open ? "open" : ""}`}>
          <span onClick={goHome}>Home</span>
          <span onClick={() => scrollToSection("projects")}>Projects</span>
          <span onClick={() => scrollToSection("research")}>Research</span>
          <span onClick={() => scrollToSection("certs")}>Certifications</span>
          <span onClick={() => scrollToSection("contact")}>Contact</span>
        </nav>

        {/* Hamburger for mobile */}
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
      </div>
    </header>
  );
}
