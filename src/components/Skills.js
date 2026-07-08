import React from "react";
import ScrollReveal from "./ScrollReveal";
import "./Skills.css";

const etlSkills = [
  { skill: "Apache Airflow", desc: "Built and maintained 30+ production DAGs" },
  { skill: "AWS Lambda", desc: "Serverless ETL pipelines" },
  { skill: "AWS Athena", desc: "Analytical queries on S3 data lakes" },
  { skill: "AWS Glue", desc: "ETL workflow design and orchestration" },
  { skill: "Python", desc: "Automation scripts and data processing" },
  { skill: "DBT", desc: "Data transformations and model management" },
];

const softSkills = [
  { skill: "Team Leadership", desc: "Led a team of 5 engineers" },
  { skill: "HTML / CSS", desc: "Responsive web layouts" },
  { skill: "JavaScript", desc: "Interactive UI development" },
  { skill: "Figma", desc: "UI/UX design mockups" },
  { skill: "Problem Solving", desc: "Complex data challenge resolution" },
  { skill: "Communication", desc: "Cross-functional stakeholder collaboration" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <ScrollReveal>
        <h2>Skills</h2>
        <p className="section-subtitle">Technical expertise and professional strengths.</p>
      </ScrollReveal>

      <div className="skills-box-container">
        <ScrollReveal delay={100}>
          <div className="skills-box card">
            <h3>ETL & Cloud</h3>
            <ul>
              {etlSkills.map((item, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-name">{item.skill}</span>
                  <span className="skill-desc">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="skills-box card">
            <h3>Soft Skills & Tools</h3>
            <ul>
              {softSkills.map((item, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-name">{item.skill}</span>
                  <span className="skill-desc">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
