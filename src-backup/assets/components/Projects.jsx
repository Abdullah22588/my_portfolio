// src/assets/components/Projects.jsx
import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Automata-Based Vulnerability Detection Tool",
      description:
        "Developed a Python-based tool to detect SQL injection and hardcoded credentials using finite automata. Visualized vulnerabilities using Graphviz.",
      tools: ["Python", "AST", "Graphviz", "Automata"],
      link: "#",
    },
    {
      title: "Centralized University Management System",
      description:
        "Built a Windows Forms-based system for managing university operations such as student records, courses, and results.",
      tools: ["C#", "SQL", "Windows Forms"],
      link: "#",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Created a responsive portfolio website using React, HTML, CSS, and JavaScript to showcase projects and achievements.",
      tools: ["React", "HTML", "CSS", "JavaScript"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tools">
                {project.tools.map((tool, i) => (
                  <span key={i} className="tool-tag">{tool}</span>
                ))}
              </div>
              <a href={project.link} className="btn-view">
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );

}


