import React from "react";
import "./About.css";

const services = [
  { title: "Data Engineering", desc: "Designing and optimizing scalable ETL pipelines & data workflows." },
  { title: "Cloud Solutions", desc: "Deploying and managing applications on AWS & GCP for high availability." },
  { title: "Generative AI", desc: "Building AI-powered tools that generate insights, content, and automation." },
];

const About = () => {
  return (
    <section id="about" className="about">
      <h2>ABOUT ME</h2>

      <div className="about-text">
        <p>
          I’m a <strong>Data Engineer</strong> with hands-on expertise in{" "}
          <strong>Cloud Platforms (AWS, GCP)</strong> and{" "}
          <strong>Generative AI</strong>.  
          My focus is on building <em>scalable data pipelines</em>, 
          <em>cloud-native applications</em>, and <em>AI-driven solutions</em> 
          that deliver measurable impact.  
        </p>
        <p className="highlight-text">
  I’m a <span className="role">Data Engineer</span> with expertise in 
  <span className="cloud"> Cloud Platforms (AWS, GCP)</span> and 
  <span className="ai"> Generative AI</span>.
</p>

        <p>
          Beyond engineering, I enjoy solving complex data challenges, 
          optimizing performance, and creating solutions that blend 
          <strong>innovation with efficiency</strong>.
        </p>
      </div>

      <h2>SERVICES</h2>
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
