import React from "react";
import ScrollReveal from "./ScrollReveal";
import "./Certificates.css";

const certificates = [
  {
    title: "AWS Developer Associate",
    org: "Amazon Web Services",
    year: "2024",
    img: process.env.PUBLIC_URL + "/certificates/aws.png",
    file: process.env.PUBLIC_URL + "/certificates/awspdf.pdf",
  },
  {
    title: "Google Cloud Platform",
    org: "Google Cloud",
    year: "2023",
    img: process.env.PUBLIC_URL + "/certificates/gcp.jpg",
    file: process.env.PUBLIC_URL + "/certificates/gcppdf.pdf",
  },
  {
    title: "Generative AI",
    org: "Google Cloud Skills Boost",
    year: "2025",
    img: process.env.PUBLIC_URL + "/certificates/genai.jpg",
    file: process.env.PUBLIC_URL + "/certificates/genaipdf.pdf",
  },
  {
    title: "Apache Airflow",
    org: "Astronomer",
    year: "2025",
    img: process.env.PUBLIC_URL + "/certificates/airflow.jpg",
    file: process.env.PUBLIC_URL + "/certificates/airflowpdf.pdf",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates">
      <ScrollReveal>
        <h2>Certificates</h2>
        <p className="section-subtitle">Industry certifications validating my cloud and data expertise.</p>
      </ScrollReveal>

      <div className="certificates-container">
        {certificates.map((cert, idx) => (
          <ScrollReveal key={idx} delay={idx * 100}>
            <div className="certificate-box card">
              <img src={cert.img} alt={cert.title} className="certificate-img" />
              <h3>{cert.title}</h3>
              <p className="org">{cert.org}</p>
              <span className="year">{cert.year}</span>
              <a href={cert.file} download className="btn-download">
                Download
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
