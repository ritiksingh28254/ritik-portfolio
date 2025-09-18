import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Data Migration (Azure to AWS)",
    duration: "Client: Air Liquide | Oct 2024 – Present",
    description: [
      "Orchestrated full-scale data migration workflows from Azure Blob Storage to AWS S3 using Apache Airflow.",
      "Developed DBT models to transform and validate migrated datasets, and integrated automated tests and monitoring."
    ]
  },
  {
    title: "Product Description Generator with AWS Integration",
    duration: "Aug 2024 – Sep 2024",
    description: [
      "Built a serverless application that generates product descriptions using OpenAI’s API.",
      "Implemented AWS Lambda, API Gateway and DynamoDB for a scalable backend and persisted generated outputs for review."
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <h3>{project.title}</h3>
            <h4>{project.duration}</h4>
            <ul>
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
