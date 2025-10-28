import React from "react";
import "./research.css";

export default function Research() {
  const papers = [
    {
      title: "Automata-Based Software Vulnerability Detection for Source Code",
      abstract:
        "A lightweight static analysis method identifying SQL injection and hardcoded credentials using deterministic finite automata over Python AST tokens.",
      keywords: ["Automata", "Static Analysis", "Python AST", "Cybersecurity"],
      link: "#",
    }
  ];

  return (
    <section id="research" className="research-section">
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className="research-container">
        <h2 className="fade-in">Research Publications</h2>
        <div className="research-grid">
          {papers.map((paper, index) => (
            <div className="research-card fade-in" key={index}>
              <h3>{paper.title}</h3>
              <p className="abstract">{paper.abstract}</p>
              <div className="keywords">
                {paper.keywords.map((key, i) => (
                  <span key={i} className="keyword-tag">{key}</span>
                ))}
              </div>
              <a href={paper.link} className="btn-view" target="_blank" rel="noreferrer">
                View Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
