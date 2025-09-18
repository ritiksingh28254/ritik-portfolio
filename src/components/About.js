import React from "react";
import "./About.css";

const services = [
  { title: "Data Engineering", desc: "Building ETL pipelines & data workflows." },
  { title: "Cloud", desc: "AWS & Cloud services deployment." },
  { title: "Generative AI", desc: "AI-driven content & insights." },
];

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-text">
        <p>
          I’m a passionate <strong>Data Engineer</strong> with expertise in Cloud 
          platforms (AWS, GCP) and Generative AI. I love building scalable data 
          pipelines, AI-driven applications, and impactful solutions that 
          combine innovation with efficiency.
        </p>
      </div>

      <h2>Services</h2>
      <div className="services-container">
        {services.map((service, idx) => (
          <div className="service-box" key={idx}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
