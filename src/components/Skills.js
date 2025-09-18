import React from "react";
import "./Skills.css";

const frontendSkills = [
  "Apache Airflow",
  "Aws Lambda",
  "Aws Athena",
  "Aws Glue",
  "Python",
  "DBT",
];

const backendSkills = [
  "Team Management",
  "HTML",
  "CSS",
  "Javascript",
  "Figma",
  "Canva",
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>What Skills I Have</h2>
      <div className="skills-box-container">
        {/* Frontend Box */}
        <div className="skills-box">
          <h3>ETL Skills(Data Engineer)</h3>
          <ul>
            {frontendSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Backend Box */}
        <div className="skills-box">
          <h3>Soft Skills</h3>
          <ul>
            {backendSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
