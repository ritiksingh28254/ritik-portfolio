import React, { useState } from "react";
import {FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <p>Contact me via Email, Messenger or WhatsApp</p>

      <div className="contact-options">
        <div className="contact-box">
          <FaEnvelope className="contact-icon" />
          <h4>Email</h4>
          <p>ritiksingh28254@gmail.com</p>
          <a href="mailto:ritiksingh28254@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </div>

        <div className="contact-box">
          <FaLinkedin className="contact-icon" />
          <h4>linkedin</h4>
          <p>Ritik Raj</p>
          <a href="www.linkedin.com/in/ritikraj62" target="_blank" rel="noreferrer">Send a message</a>
        </div>

        <div className="contact-box">
          <FaWhatsapp className="contact-icon" />
          <h4>WhatsApp</h4>
          <p>+91 6205201148</p>
          <a href="https://wa.me/6205201148" target="_blank" rel="noreferrer">Send a message</a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
