import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("hero");

  const handleScroll = () => {
    const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
    const scrollPos = window.scrollY + 200; // offset
    for (let id of sections) {
      const section = document.getElementById(id);
      if (
        section &&
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        setActive(id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">Ritik <span>Raj</span></h2>
      <ul>
        <li className={active === "hero" ? "active" : ""}><a href="#hero">Home</a></li>
        <li className={active === "about" ? "active" : ""}><a href="#about">About</a></li>
        <li className={active === "experience" ? "active" : ""}><a href="#experience">Experience</a></li>
        <li className={active === "projects" ? "active" : ""}><a href="#projects">Projects</a></li>
        <li className={active === "skills" ? "active" : ""}><a href="#skills">Skills</a></li>
        <li className={active === "contact" ? "active" : ""}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
