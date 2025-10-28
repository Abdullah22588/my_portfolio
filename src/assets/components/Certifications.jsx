import React, { useState } from "react";
import "./certifications.css";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certs = [
    {
      title: "Microsoft Learn Student Ambassador (MLSA)",
      description:
        "Engaged in global tech community initiatives, organized events, and promoted Microsoft technologies to empower student learning.",
      issuer: "Microsoft Learn Student Program",
      year: "Ongoing",
      image: "/src/assets/images/certs/mlsa.jpg",
    },
    {
      title: "Aspires Leadership Program Alumni",
      description:
        "Completed a selective leadership development program and mentored peers in innovation and personal growth.",
      issuer: "Aspire Institute",
      year: "2025",
      image: "/src/assets/images/certs/aspire.jpg",
    },
    {
      title: "National Freelance Training Program (NFTP)",
      description:
        "Trained in professional freelancing skills and project delivery under the Punjab Information Technology Board (PITB) at Quaid-e-Awam University.",
      issuer: "Punjab IT Board (PITB)",
      year: "2024",
      image: "/src/assets/images/certs/nftp.jpg",
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      description:
        "Completed a 9-course specialization covering HTML, CSS, JavaScript, React, UX/UI Design, and Coding Interview Preparation.",
      issuer: "Meta (Coursera)",
      year: "2025",
      image: "/src/assets/images/certs/meta.jpg",
    },
    {
      title: "Learn to Program: The Fundamentals (Python)",
      description:
        "Gained foundational programming knowledge and Python skills through structured exercises and projects.",
      issuer: "University of Toronto (Coursera)",
      year: "2023",
      image: "/src/assets/images/certs/python.jpg",
    },
    {
      title: "Google AI Essentials",
      description:
        "Learned the fundamentals of AI, including machine learning, neural networks, and ethical AI practices. Gained hands-on experience building and deploying basic AI models",
      issuer: "Google",
      year: "2025",
      image: "/src/assets/images/certs/googleessentials.jpg",
    },
  ];

  return (
    <section id="certs" className="certifications-section">
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className="certifications-container">
        <h2>Certifications & Programs</h2>
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <div className="cert-card fade-in" key={index}>
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
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Certificate Preview" />
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
