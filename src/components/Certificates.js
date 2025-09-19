import React from "react";
import "./Certificates.css";

// Example with 4 certificates
const certificates = [
  { 
    title: "AWS Developer Associate", 
    org: "Amazon Web Services", 
    year: "2024", 
    img: process.env.PUBLIC_URL + "/certificates/aws.png", 
    file: process.env.PUBLIC_URL + "/certificates/awspdf.pdf" 
  },
  { 
    title: "Google Cloud Platform", 
    org: "Google Cloud", 
    year: "2023", 
    img: process.env.PUBLIC_URL + "/certificates/gcp.jpg", 
    file: process.env.PUBLIC_URL + "/certificates/gcppdf.pdf" 
  },
  { 
    title: "Generative AI ", 
    org: "Google Cloud Skills Boost", 
    year: "2025", 
    img: process.env.PUBLIC_URL + "/certificates/genai.jpg", 
    file: process.env.PUBLIC_URL + "/certificates/genaipdf.pdf" 
  },
  { 
    title: "Apache Airflow", 
    org: "Microsoft", 
    year: "2025", 
    img: process.env.PUBLIC_URL + "/certificates/airflow.jpg", 
    file: process.env.PUBLIC_URL + "/certificates/airflowpdf.pdf" 
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates">
      <h2>CERTIFICATES</h2>
      <div className="certificates-container">
        {certificates.map((cert, idx) => (
          <div className="certificate-box" key={idx}>
            <img src={cert.img} alt={cert.title} className="certificate-img" />
            <h3>{cert.title}</h3>
            <p>{cert.org}</p>
            <span className="year">{cert.year}</span>
            <a 
              href={cert.file} 
              download 
              className="btn-download"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
