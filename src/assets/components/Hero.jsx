// src/assets/components/Hero.jsx
import React from "react";
import "./hero.css";
import profileImg from "../images/1760274157199.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      
      {/* Animated Background Blobs */}
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>
      
      <div className="hero-container">
        {/* 1. Hero Text Content */}
        <div className="hero-text">
          <h1 className="fade-in">
            Hi, I’m <span>Abdullah</span>
          </h1>
          <h2 className="slide-up">
            Software Developer | Aspire Leaders Alumnus | Researcher | MLSA
          </h2>
          <p className="fade-in-delay">
            Passionate software developer, researcher, and aspiring tech innovator.
            Hands-on experience in **web development, AI, and secure coding.**
            Committed to building scalable and impactful software solutions.
          </p>
          <div className="hero-buttons fade-in-delay-2">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* 2. Hero Image with Glassmorphism Card */}
        <div className="hero-image">
          <div className="profile-card">
            <img src={profileImg} alt="Abdullah portrait" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}