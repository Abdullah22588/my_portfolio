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
      link: "/automata-project",
      isInternal: true,
    },
    {
      title: "Centralized University Management System",
      description:
        "Built a Windows Forms-based system for managing university operations such as student records, courses, and results.",
      tools: ["C#", "SQL", "Windows Forms"],
      link: "/cums-project",
      isInternal: true,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Created a responsive portfolio website using React, HTML, CSS, and JavaScript to showcase projects and achievements.",
      tools: ["React", "HTML", "CSS", "JavaScript"],
      link: "#",
      isInternal: false,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className="projects-container">
        <h2 className="fade-in">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card fade-in" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tools">
                {project.tools.map((tool, i) => (
                  <span key={i} className="tool-tag">{tool}</span>
                ))}
              </div>

              {project.isInternal ? (
                <Link to={project.link} className="btn-view">
                  View Details →
                </Link>
              ) : (
                <a href={project.link} className="btn-view" target="_blank" rel="noreferrer">
                  View Details
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
