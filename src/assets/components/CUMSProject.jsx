import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./cumsproject.css";

export default function CUMSProject() {
  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="project-detail-section">
      <div className="project-detail-container">
        <h2>Centralized University Management System</h2>

        <p className="project-overview">
          A Windows Forms-based system developed to manage all university operations efficiently, including student records, courses, faculty assignments, and results.
        </p>

        <h3>Features:</h3>
        <ul>
          <li>Student management: Add, update, and remove student records</li>
          <li>Course management: Assign courses and track course schedules</li>
          <li>Result management: Calculate and generate student results automatically</li>
          <li>Faculty management: Maintain faculty details and course assignments</li>
          <li>User-friendly Windows Forms interface for smooth navigation</li>
        </ul>

        <h3>Tools & Technologies:</h3>
        <div className="tools">
          <span className="tool-tag">C#</span>
          <span className="tool-tag">SQL</span>
          <span className="tool-tag">Windows Forms</span>
        </div>

        <h3>Project Overview:</h3>
        <p>
          This system was designed to replace manual record-keeping and automate university operations. It allows administrators to efficiently manage student and course information, generate reports, and maintain accurate records.
        </p>

        <div className="project-buttons">
          <Link
            to="/"
            className="btn-view"
            onClick={scrollToProjects} // Scrolls to Projects section
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
