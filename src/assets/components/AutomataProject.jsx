import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./automataProject.css";

export default function AutomataProject() {
  // ✅ Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="automata-page">
      <div className="automata-container">
        <h1>Automata-Based Software Vulnerability Detection Tool</h1>

        <p className="subtitle">
          A Python-based framework using finite automata to identify insecure
          code patterns.
        </p>

        <section className="automata-section">
          <h2>Overview</h2>
          <p>
            Modern software systems are increasingly prone to vulnerabilities
            due to insecure coding practices. This project introduces a static
            analysis tool that leverages finite automata to recognize vulnerable
            code patterns by parsing program syntax before execution. By
            simulating automata transitions across tokenized code states, the
            tool identifies common vulnerability patterns and generates a visual
            representation of the detected issues using Graphviz.
          </p>
        </section>

        <section className="automata-section">
          <h2>Key Features</h2>
          <ul>
            <li>
              Detects SQL Injection and hardcoded password vulnerabilities.
            </li>
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
            <strong>Title:</strong> Automata-Based Software Vulnerability
            Detection for Source Code <br />
            <strong>Author:</strong> Abdullah <br />
            <strong>Institution:</strong> Quaid-e-Awam University of
            Engineering, Science and Technology, Nawabshah, Sindh, Pakistan
          </p>
        </section>

        <div className="automata-buttons">
          <a
            href="https://github.com/Abdullah22588/"
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
