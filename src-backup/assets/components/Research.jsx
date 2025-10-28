// src/assets/components/Research.jsx
import React from "react";
import "./research.css";

export default function Research() {
  const papers = [
    {
      title: "Automata-Based Software Vulnerability Detection Using Static Code Analysis",
      abstract:
        "This research introduces a novel static code analysis method for identifying vulnerabilities like SQL injection and hardcoded credentials using deterministic finite automata (DFA) on Python abstract syntax trees (AST).",
      keywords: ["Automata", "Static Analysis", "Python AST", "Cybersecurity"],
      link: "#",
    },
    {
      title: "AI-Powered Pattern Recognition in Source Code for Threat Detection",
      abstract:
        "A study focusing on the integration of machine learning models with symbolic analysis to identify logical flaws and insecure design patterns in large-scale source code repositories.",
      keywords: ["AI", "Pattern Recognition", "Threat Detection", "Security"],
      link: "#",
    },
  ];

  return (
    <section id="research" className="research-section">
      <div className="research-container">
        <h2>Research Publications</h2>
        <div className="research-grid">
          {papers.map((paper, index) => (
            <div className="research-card" key={index}>
              <h3>{paper.title}</h3>
              <p className="abstract">{paper.abstract}</p>
              <div className="keywords">
                {paper.keywords.map((key, i) => (
                  <span key={i} className="keyword-tag">
                    {key}
                  </span>
                ))}
              </div>
              <a href={paper.link} className="btn-view">
                View Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
