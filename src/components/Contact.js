import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import "./Contact.css";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/ritiksingh28254@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <ScrollReveal>
        <h2>Get in Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to connect? Reach out via email, LinkedIn, WhatsApp, or send a message below.
        </p>
      </ScrollReveal>

      <div className="contact-options">
        <ScrollReveal delay={100}>
          <div className="contact-box card">
            <FaEnvelope className="contact-icon" />
            <h4>Email</h4>
            <p>ritiksingh28254@gmail.com</p>
            <a href="mailto:ritiksingh28254@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="contact-box card">
            <FaLinkedin className="contact-icon" />
            <h4>LinkedIn</h4>
            <p>Ritik Raj</p>
            <a href="https://www.linkedin.com/in/ritikraj62" target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="contact-box card">
            <FaWhatsapp className="contact-icon" />
            <h4>WhatsApp</h4>
            <p>+91 6205201148</p>
            <a href="https://wa.me/6205201148" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={150}>
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
          />
          <button type="submit" className="btn" disabled={status === "sending"}>
            <FaPaperPlane />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-status success">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-status error">
              Something went wrong. Please email me directly at ritiksingh28254@gmail.com.
            </p>
          )}
        </form>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
