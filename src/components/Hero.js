import React from "react";
import { ReactTyped } from "react-typed";
import { FaDownload, FaComments } from "react-icons/fa";
import "./Hero.css";
import profileImg from "../assets/profile2.jpeg";
import codingImg from "../assets/cloud1.png";

const Hero = () => {
  return (
    <header id="hero" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-container">
        <div className="hero-image">
          <div className="hero-image-ring">
            <img src={profileImg} alt="Ritik Raj" />
          </div>
        </div>

        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1>
            <span>Ritik Raj</span>
          </h1>
          <div className="hero-typed">
            <ReactTyped
              strings={[
                "Data Engineer",
                "Cloud Specialist",
                "Generative AI Enthusiast",
              ]}
              typeSpeed={45}
              backSpeed={40}
              loop
            />
          </div>
          <p className="hero-desc">
            I build scalable data pipelines, cloud-native solutions, and AI-powered
            applications that drive real business impact.
          </p>
          <div className="hero-buttons">
            <a href={process.env.PUBLIC_URL + "/Ritik_cv.pdf"} className="btn" download>
              <FaDownload /> Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              <FaComments /> Let's Talk
            </a>
          </div>
        </div>

        <div className="hero-extra">
          <img src={codingImg} alt="Cloud and data engineering illustration" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
