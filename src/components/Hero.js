import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import profileImg from "../assets/profile.jpg"; // ✅ Import your image

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
          <h1>Hi, I'm <span>Ritik Raj</span></h1>
          <ReactTyped
            strings={["Data Engineer", "Cloud Specialist", "Generative AI Enthusiast"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <div className="hero-buttons">
            <a href="/Ritik_cv.pdf" className="btn" target="_blank" rel="noreferrer">Download CV</a>
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
