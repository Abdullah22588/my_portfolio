// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Projects from "./assets/components/Projects";
import Research from "./assets/components/Research";
import Contact from "./assets/components/Contact";
import AutomataProject from "./assets/components/AutomataProject";
import CUMSProject from "./assets/components/CUMSProject"; // ✅ import CUMS project page
import Certifications from "./assets/components/Certifications";
import AllProjects from "./assets/components/AllProjects"; // ✅ Import AllProjects
import AllCertifications from "./assets/components/AllCertifications"; // ✅ Import AllCertifications
import Footer from "./assets/components/Footer";


import "./App.css";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Research />
                <Certifications />
                <Contact />
              </>
            }
          />

          {/* Project detail pages */}
          <Route path="/automata-project" element={<AutomataProject />} />
          <Route path="/cums-project" element={<CUMSProject />} /> {/* ✅ CUMS route */}
          <Route path="/all-projects" element={<AllProjects />} /> {/* ✅ All Projects route */}
          <Route path="/all-certifications" element={<AllCertifications />} /> {/* ✅ All Certifications route */}
        </Routes>
      </main>

      {/* ✅ Footer displayed on all pages */}
      <Footer />
    </div>
  );
}
