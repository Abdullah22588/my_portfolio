// src/assets/components/Projects.jsx
import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Automata-Based Vulnerability Detection Tool",
      description:
        "Developed a Python-based tool to detect SQL injection and hardcoded credentials using finite automata. Visualized vulnerabilities using Graphviz, demonstrating advanced code analysis techniques.",
      tools: ["Python", "AST", "Graphviz", "Automata"],
      link: "/automata-project",
      isInternal: true,
    },
    {
      title: "Centralized University Management System",
      description:
        "Built a robust Windows Forms-based system for managing university operations such as student records, courses, and results using C# and a SQL backend for data integrity.",
      tools: ["C#", "SQL", "Windows Forms"],
      link: "/cums-project",
      isInternal: true,
    },
    {
      title: "Personal Portfolio Website (This Site)",
      description:
        "Created a responsive, cross-browser compatible portfolio website using React with custom CSS for a modern aesthetic, showcasing web development proficiency.",
      tools: ["React", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/Abdullah22588/my_portfolio",
      isInternal: false,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      {/* Background Blobs */}
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>

      <div className="projects-container">
        <h2 className="fade-in">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card fade-in"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="card-footer">
                <div className="tools">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>

                {project.isInternal ? (
                  <Link to={project.link} className="btn-view">
                    View Details →
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    className="btn-view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code/Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
