import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Data Engineer",
    company: "Virtusa",
    duration: "Jan 2024 – Present",
    description: "Working on data migration projects, Airflow DAGs, and ETL pipelines."
  },
  {
    role: " Cloud Engineer Intern ",
    company: "Virtusa",
    duration: "Jan 2023 - Apr 2023",
    description: "Managed campaigns, analyzed data, and optimized marketing performance."
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-box" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
