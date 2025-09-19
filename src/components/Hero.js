import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import profileImg from "../assets/profile2.jpeg"; // ✅ Import your image

const Hero = () => {
  return (
    <header id="hero" className="hero">
      <div className="hero-container">
        {/* Profile Picture Left */}
        <div className="hero-image">
          <img src={profileImg} alt="Ritik Raj" />
        </div>

        {/* Text Right */}
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
            {/* ✅ Download CV button */}
            <a
              href="/Ritik_cv.pdf"  // Make sure Ritik_cv.pdf is inside the public folder
              download="Ritik_Raj_CV.pdf"
              className="btn"
            >
              Download CV
            </a>

            {/* ✅ Contact button */}
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
