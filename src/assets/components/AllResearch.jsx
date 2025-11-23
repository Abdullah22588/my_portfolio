// src/assets/components/AllResearch.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Research from "./Research";
import "./allResearch.css";

export default function AllResearch() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="all-research-page">
            <Research showAll={true} />

            <div className="view-all-container fade-in" style={{ paddingBottom: "50px", textAlign: "center" }}>
                <Link to="/" className="btn-view-all">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}
