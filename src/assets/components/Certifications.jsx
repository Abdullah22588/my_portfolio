import React, { useState } from "react";
import "./certifications.css";
import mlsa from "../images/certs/mlsa.jpg";
import aspire from "../images/certs/aspire.jpg";
import nftp from "../images/certs/nftp.jpg";
import meta from "../images/certs/meta.jpg";
import python from "../images/certs/python.jpg";
import google from "../images/certs/googleessentials.jpg";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certs = [
    {
      title: "Microsoft Learn Student Ambassador (MLSA)",
      description:
        "Engaged in global tech community initiatives, organized events, and promoted Microsoft technologies to empower student learning.",
      issuer: "Microsoft Learn Student Program",
      year: "Ongoing",
      image: mlsa,
      verifyLink:
        "https://mvp.microsoft.com/en-US/studentambassadors/profile/cce452b6-52a6-48fd-bd5e-0ca27a0664b8",
    },
    {
      title: "Aspires Leadership Program Alumni",
      description:
        "Completed a selective leadership development program and mentored peers in innovation and personal growth.",
      issuer: "Aspire Institute",
      year: "2025",
      image: aspire,
      verifyLink:
        "https://www.aspireleaders.org/program/aspire-leaders-program/",
    },
    {
      title: "National Freelance Training Program (NFTP)",
      description:
        "Trained in professional freelancing skills and project delivery under the Punjab Information Technology Board (PITB) at Quaid-e-Awam University.",
      issuer: "Punjab IT Board (PITB)",
      year: "2024",
      image: nftp,
      verifyLink: "https://nftp.pitb.gov.pk/",
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      description:
        "Completed a 9-course specialization covering HTML, CSS, JavaScript, React, UX/UI Design, and Coding Interview Preparation.",
      issuer: "Meta (Coursera)",
      year: "2025",
      image: meta,
      verifyLink: "https://coursera.org/verify/professional-cert/I67CNA39XMA2",
    },
    {
      title: "Learn to Program: The Fundamentals (Python)",
      description:
        "Gained foundational programming knowledge and Python skills through structured exercises and projects.",
      issuer: "University of Toronto (Coursera)",
      year: "2023",
      image: python,
      verifyLink: "https://coursera.org/verify/Z2P2SURZSUDX",
    },
    {
      title: "Google AI Essentials",
      description:
        "Learned the fundamentals of AI, including machine learning, neural networks, and ethical AI practices.",
      issuer: "Google",
      year: "2025",
      image: google,
      verifyLink: "https://coursera.org/verify/specialization/3J3PM9E5GE7K",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2>Certifications & Programs</h2>
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <div className="cert-card" key={index}>
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-image"
                onClick={() => setSelectedImage(cert.image)}
              />
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <div className="cert-footer">
                <span className="issuer">{cert.issuer}</span>
                <span className="year">{cert.year}</span>
              </div>
              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-btn"
              >
                Verify
              </a>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Certificate Preview" />
              <button
                className="close-btn"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
