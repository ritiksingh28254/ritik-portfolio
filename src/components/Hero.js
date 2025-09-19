import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import profileImg from "../assets/profile2.jpeg"; 
import codingImg from "../assets/cloud1.png"; // ✅ Add a right-side image

const Hero = () => {
  return (
    <header id="hero" className="hero">
      <div className="hero-container">
        {/* Profile Picture Left */}
        <div className="hero-image">
          <img src={profileImg} alt="Ritik Raj" />
        </div>

        {/* Text Middle */}
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Ritik Raj</span>
          </h1>
          <ReactTyped
            strings={[
              "Data Engineer",
              "Cloud Specialist",
              "Generative AI Enthusiast",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <div className="hero-buttons">
            <a href={process.env.PUBLIC_URL + "/Ritik_cv.pdf"} className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hero-extra">
          <img src={codingImg} alt="Coding Illustration" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
