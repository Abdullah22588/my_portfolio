import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  // Load theme
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

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
    <motion.header
      className={`nav-header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Brand + Theme */}
        <div className="brand-wrapper">
          <span className="brand" onClick={goHome}>
            Abdullah
          </span>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={`nav-links ${open ? "open" : ""}`}
        >
          {["home", "projects", "research", "certifications", "contact"].map((id) => (
            <span
              key={id}
              onClick={() => scrollToSection(id)}
              className={active === id ? "active-link" : ""}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className={`hamburger ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </motion.header>
  );
}
