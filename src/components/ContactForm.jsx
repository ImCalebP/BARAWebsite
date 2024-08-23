import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@barasoftware.com?subject=New contact form submission from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact-form">
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <div style={{ width: "100%", maxWidth: "500px", background: "#000", padding: "20px", borderRadius: "8px" }}>
          <Heading title="Contact Us" text="We'd love to hear from you. Please fill out the form below to get started ! We can meet and discuss your project better. " />
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" style={{ color: "#fff" }}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
                style={{
                  background: "#000",
                  color: "#fff",
                  border: "1px solid #555",
                  borderRadius: "4px",
                  padding: "10px",
                  width: "100%",
                  marginBottom: "15px"
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" style={{ color: "#fff" }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
                style={{
                  background: "#000",
                  color: "#fff",
                  border: "1px solid #555",
                  borderRadius: "4px",
                  padding: "10px",
                  width: "100%",
                  marginBottom: "15px"
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" style={{ color: "#fff" }}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control"
                rows="5"
                style={{
                  background: "#000",
                  color: "#fff",
                  border: "1px solid #555",
                  borderRadius: "4px",
                  padding: "10px",
                  width: "100%",
                  marginBottom: "15px"
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                background: "#555",
                color: "#fff",
                border: "1px solid #777",
                padding: "10px 15px",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
