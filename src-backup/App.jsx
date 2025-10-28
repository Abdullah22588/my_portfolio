// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Projects from "./assets/components/Projects";
import AutomataProject from "./assets/components/AutomataProject";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/automata-project" element={<AutomataProject />} />
        </Routes>
      </main>
    </Router>
  );
}
