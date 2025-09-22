import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import pic6 from "../images/pic6.jpeg";

// Import your other pages
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const CustomTypewriter = ({ text }) => {
    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
      let timeout;
      if (isTyping) {
        if (typedText.length < text.length) {
          timeout = setTimeout(() => {
            setTypedText(text.substring(0, typedText.length + 1));
          }, 70);
        } else {
          setIsTyping(false);
        }
      }
      return () => clearTimeout(timeout);
    }, [typedText, isTyping, text]);

    return (
      <span className="h5 mt-3" style={{ color: "#8B4513" }}>
        {typedText}
        <span className="typewriter-cursor">|</span>
      </span>
    );
  };

  return (
    <div id="home">
      {/* Hero Section */}
      <Container className="d-flex align-items-center justify-content-center min-vh-100 p-4">
        <Row className="align-items-center">
          {/* Text Section */}
          <Col xs={12} md={6} className="text-left mb-4 mb-md-0">
            <h1 className="display-4" style={{ color: "#8B4513" }}>
              Hi, I'm <br />
              <span style={{ fontWeight: "bold" }}>
                Nyaburu Margret Daniela
              </span>
            </h1>
            <CustomTypewriter text="an aspiring full stack developer and a Data Analyst" />
            <div className="mt-4 d-flex gap-3 flex-wrap">
              <a href="#projects">
                <Button
                  className="custom-button"
                  style={{ backgroundColor: "brown", borderColor: "brown" }}
                >
                  View My Work
                </Button>
              </a>
              <a href="#contact">
                <Button
                  className="custom-button"
                  style={{ backgroundColor: "brown", borderColor: "brown" }}
                >
                  Let's Connect
                </Button>
              </a>
            </div>
          </Col>

          {/* Image Section - responsive on all screens */}
          <Col xs={12} md={6} className="text-center">
            <img
              src={pic6}
              alt="Nyaburu Margret Daniela"
              className="img-fluid rounded-circle shadow home-img"
              style={{height:"500px"}}
            />
          </Col>
        </Row>
      </Container>

      {/* Other Sections */}
      <section id="about" className="py-5">
        <About />
      </section>

      <section id="skills" className="py-5">
        <Skills />
      </section>

      <section id="projects" className="py-5">
        <Projects />
      </section>

      <section id="contact" className="py-5">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
