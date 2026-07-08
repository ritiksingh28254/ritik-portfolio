import React from "react";
import { FaDatabase, FaCloud, FaRobot } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import "./About.css";

const services = [
  {
    icon: <FaDatabase />,
    title: "Data Engineering",
    desc: "Designing and optimizing scalable ETL pipelines & data workflows.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    desc: "Deploying and managing applications on AWS & GCP for high availability.",
  },
  {
    icon: <FaRobot />,
    title: "Generative AI",
    desc: "Building AI-powered tools that generate insights, content, and automation.",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <ScrollReveal>
        <h2>About Me</h2>
        <p className="section-subtitle">
          Turning complex data into actionable insights through cloud-native engineering.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="about-text">
          <p className="highlight-text">
            I'm a <span className="role">Data Engineer</span> with expertise in
            <span className="cloud"> Cloud Platforms (AWS, GCP)</span> and
            <span className="ai"> Generative AI</span>.
          </p>
          <p>
            My focus is on building <em>scalable data pipelines</em>,
            <em> cloud-native applications</em>, and <em>AI-driven solutions</em> that
            deliver measurable impact. Beyond engineering, I enjoy solving complex data
            challenges, optimizing performance, and creating solutions that blend
            <strong> innovation with efficiency</strong>.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="services-heading">Services</h2>
      </ScrollReveal>

      <div className="services-container">
        {services.map((service, idx) => (
          <ScrollReveal key={idx} delay={idx * 120}>
            <div className="service-box card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default About;
