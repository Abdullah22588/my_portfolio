import React from "react";
import { Link } from "react-router-dom";
import "./research.css";
import researchData from "../../data/researchData";

export default function Research({ showAll = false }) {
  const displayedPapers = showAll ? researchData : researchData.slice(0, 3);

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
          {displayedPapers.map((paper, index) => (
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

        {!showAll && (
          <div className="view-all-container fade-in">
            <Link to="/all-research" className="btn-view-all">
              View All Research →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
