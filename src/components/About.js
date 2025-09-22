import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic5 from "../images/pic5.jpeg";

const About = () => (
  <Container className="min-vh-80 d-flex align-items-center justify-content-center p-2">
    {/* Inline CSS inside component */}
    <style>
      {`
        .about-heading {
          position: relative;
          display: inline-block;
          color: #8B4513;
          font-weight: bold;
          cursor: pointer;
          padding-bottom: 5px;
        }

        .about-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 50%; /* Half underline */
          background-color: #8B4513;
          transition: width 0.4s ease;
        }

        .about-heading:hover::after {
          width: 100%; /* Expand underline on hover */
        }

        .about-img {
          transition: transform 0.3s ease;
        }

        .about-img:hover {
          transform: scale(1.05); /* Subtle zoom on hover */
        }
      `}
    </style>

    <Row className="align-items-center">
      {/* Text Section */}
      <Col xs={12} md={6} className="text-left mb-4 mb-md-0">
        <h2 className="about-heading">About Me</h2>
        <p className="mt-2" style={{ color: "#8B4513", fontSize: "25px" }}>
          I am Nyaburu Margret Daniela, a passionate and dedicated aspiring Full
          Stack Developer and Data Analyst. I have a strong foundation in both
          front-end and back-end technologies, with a keen interest in creating
          seamless and efficient user experiences. My analytical skills allow me
          to not only build robust applications but also to derive valuable
          insights from data. I am a lifelong learner, constantly expanding my
          knowledge to stay at the forefront of the ever-evolving tech
          landscape.
        </p>
      </Col>

      {/* Image Section */}
      <Col xs={12} md={6} className="text-center">
        <img
          src={pic5}
          alt="Nyaburu Margret Daniela"
          className="img-fluid rounded-circle shadow about-img"
          style={{ height: "500px" }}
        />
      </Col>
    </Row>
  </Container>
);

export default About;
