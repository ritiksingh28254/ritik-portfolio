import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/ritikraj62" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ritiksingh28254" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="mailto:ritiksingh28254@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/6205201148" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
      <p>© {year} Ritik Raj. All rights reserved.</p>
      <p className="footer-tagline">Built with React · Hosted on GitHub Pages</p>
    </footer>
  );
};

export default Footer;
