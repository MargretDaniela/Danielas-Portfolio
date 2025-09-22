import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById(
      "contact-message"
    ).innerText = `Message from ${name} sent!`;
    setName("");
    setMessage("");
  };

  return (
    <Container className="min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
      <h2 className="mb-4" style={{ color: "#8B4513" }}>
        Let's Connect
      </h2>
      <Row className="w-100 justify-content-center">
        <Col md={8}>
          <Form
            onSubmit={handleSubmit}
            className="p-4 rounded shadow-sm"
            style={{ backgroundColor: "#D2B48C" }}
          >
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#8B4513" }}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#8B4513" }}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" className="custom-button w-100 mt-2" style={{backgroundColor:"#8B4513", border:"#8B4513"}}>
              Send Message
            </Button>
            <p
              id="contact-message"
              className="text-center mt-3"
              style={{ color: "#8B4513" }}
            ></p>
          </Form>
          <div className="text-center mt-4">
            <h4 className="mb-3" style={{ color: "#8B4513" }}>
              Find me on...
            </h4>
            <div className="d-flex justify-content-center gap-4 text-3xl">
              {/* WhatsApp */}
              <a
                href="https://wa.me/256767724297"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-hover text-decoration-none"
              >
                <FaWhatsapp size={28} color="#8B4513" />
              </a>
              {/* Twitter */}
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-hover text-decoration-none"
              >
                <FaTwitter size={28} color="#8B4513" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/YourUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-hover text-decoration-none"
              >
                <FaLinkedin size={28} color="#8B4513" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-hover text-decoration-none"
              >
                <FaInstagram size={28} color="#8B4513" />
              </a>
              {/* Email */}
              <a
                href="danielamargret6@gmail.com"
                className="icon-hover text-decoration-none"
              >
                <FaEnvelope size={28} color="#8B4513" />
              </a>
            </div>
            <p className="mt-4" style={{ color: "#8B4513" }}>
              Contact Number: +256 767724297
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
