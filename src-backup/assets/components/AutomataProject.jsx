// src/assets/components/AutomataProject.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./automataProject.css";

export default function AutomataProject() {
  return (
    <div className="automata-page">
      <div className="automata-container">
        <h1>Automata-Based Software Vulnerability Detection Tool</h1>

        <p className="subtitle">
          A Python-based framework using finite automata to identify insecure code patterns.
        </p>

        <section className="automata-section">
          <h2>Overview</h2>
          <p>
            This research project presents a lightweight and interpretable static analysis framework for detecting
            vulnerabilities such as SQL Injection and hardcoded credentials in Python code. By leveraging finite
            automata, the system models code behavior to identify suspicious sequences without executing the code.
          </p>
        </section>

        <section className="automata-section">
          <h2>Key Features</h2>
          <ul>
            <li>Detects SQL Injection and hardcoded password vulnerabilities.</li>
            <li>Implements automata-driven static code analysis.</li>
            <li>Visualizes state transitions using Graphviz diagrams.</li>
            <li>Ensures safe, non-executing vulnerability detection.</li>
          </ul>
        </section>

        <section className="automata-section">
          <h2>Tools & Technologies</h2>
          <p>Python, Graphviz, AST, Tokenization, Regex</p>
        </section>

        <section className="automata-section">
          <h2>Research Publication</h2>
          <p>
            <strong>Title:</strong> Automata-Based Software Vulnerability Detection for Source Code <br />
            <strong>Author:</strong> Abdullah <br />
            <strong>Institution:</strong> Quaid-e-Awam University of Engineering, Science and Technology, Nawabshah, Sindh, Pakistan
          </p>
        </section>

        <div className="automata-buttons">
          <a
            href="https://github.com/yourusername/automata-vuln-detector"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            View on GitHub
          </a>
          <Link to="/" className="btn secondary">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
