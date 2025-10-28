// src/assets/components/Hero.jsx
import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I’m <span>Abdullah</span></h1>
        <h2>Software Developer | Researcher | MLSA</h2>
        <p>
          I’m passionate about building innovative solutions that merge creativity with technology. 
          My projects span from software vulnerability detection tools to full-stack web applications.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
