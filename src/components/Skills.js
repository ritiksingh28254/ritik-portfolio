import React from "react";
import "./Skills.css";

const frontendSkills = [
    { skill: "Apache Airflow", desc: "I worked on more than 30+ DAGs" },
    { skill: "AWS Lambda", desc: "Built serverless ETL pipelines" },
    { skill: "AWS Athena", desc: "Performed analytical queries" },
    { skill: "AWS Glue", desc: "Designed ETL workflows" },
    { skill: "Python", desc: "Developed automation scripts" },
    { skill: "DBT", desc: "Managed transformations and models" },
  ];
  
  const backendSkills = [
    { skill: "Team Management", desc: "Led a team of 5 engineers" },
    { skill: "HTML", desc: "Built responsive layouts" },
    { skill: "CSS", desc: "Styled web components" },
    { skill: "Javascript", desc: "Created interactive UI" },
    { skill: "Figma", desc: "Designed UI/UX mockups" },
    { skill: "Canva", desc: "Created visual content" },
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="skills">
        <h2>WHAT SKILLS I HAVE</h2>
        <div className="skills-box-container">
          {/* ETL Skills */}
          <div className="skills-box">
            <h3>ETL Skills (Data Engineer)</h3>
            <ul>
              {frontendSkills.map((item, index) => (
                <li key={index} className="skill-item">
                  <span className="dot">•</span>
                  <span className="skill-name">{item.skill}</span>
                  <div className="skill-desc">{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Soft Skills */}
          <div className="skills-box">
            <h3>Soft Skills</h3>
            <ul>
              {backendSkills.map((item, index) => (
                <li key={index} className="skill-item">
                  <span className="dot">•</span>
                  <span className="skill-name">{item.skill}</span>
                  <div className="skill-desc">{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  