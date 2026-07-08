import React from "react";
import ScrollReveal from "./ScrollReveal";
import "./Projects.css";

const projects = [
  {
    title: "Data Migration (Azure to AWS)",
    duration: "Client: Air Liquide · Oct 2024 – Present",
    tags: ["Airflow", "DBT", "AWS S3", "Azure Blob"],
    description: [
      "Orchestrated full-scale data migration workflows from Azure Blob Storage to AWS S3 using Apache Airflow.",
      "Developed DBT models to transform and validate migrated datasets, with automated tests and monitoring.",
    ],
  },
  {
    title: "Product Description Generator",
    duration: "Aug 2024 – Sep 2024",
    tags: ["AWS Lambda", "OpenAI", "DynamoDB", "API Gateway"],
    description: [
      "Built a serverless application that generates product descriptions using OpenAI's API.",
      "Implemented AWS Lambda, API Gateway, and DynamoDB for a scalable backend with persisted outputs.",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <ScrollReveal>
        <h2>Projects</h2>
        <p className="section-subtitle">Selected work showcasing data engineering and cloud expertise.</p>
      </ScrollReveal>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 150}>
            <div className="project-box card">
              <h3>{project.title}</h3>
              <h4>{project.duration}</h4>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <ul>
                {project.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
