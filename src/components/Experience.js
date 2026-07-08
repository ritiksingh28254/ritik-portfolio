import React from "react";
import ScrollReveal from "./ScrollReveal";
import "./Experience.css";

const experiences = [
  {
    role: "Data Engineer",
    company: "Virtusa",
    duration: "Jan 2024 – Present",
    description:
      "Working on data migration projects, Airflow DAGs, and ETL pipelines for enterprise clients.",
  },
  {
    role: "Cloud Engineer Intern",
    company: "Virtusa",
    duration: "Jan 2023 – Apr 2023",
    description:
      "Assisted in cloud infrastructure setup, AWS services deployment, and automation scripts.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <ScrollReveal>
        <h2>Experience</h2>
        <p className="section-subtitle">My professional journey in data and cloud engineering.</p>
      </ScrollReveal>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <ScrollReveal key={index} delay={index * 150}>
            <div className="experience-box card">
              <span className="experience-badge">{exp.duration}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
