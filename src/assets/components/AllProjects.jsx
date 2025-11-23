// src/pages/AllProjects.jsx
import React from "react";
import Projects from "../assets/components/Projects";

export default function AllProjects() {
  return (
    <div className="all-projects-page">
      <Projects showAll={true} />
    </div>
  );
}
