import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Skills = () => (
  <Container className="min-vh-80 d-flex flex-column align-items-center justify-content-center p-2">
    {/* Inline CSS */}
    <style>
      {`
        .skills-heading {
          position: relative;
          display: inline-block;
          color: #8B4513;
          font-weight: bold;
          cursor: pointer;
          padding-bottom: 5px;
          margin-bottom: 20px;
        }

        .skills-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 50%;
          background-color: #8B4513;
          transition: width 0.4s ease;
        }

        .skills-heading:hover::after {
          width: 100%;
        }

        .card-custom {
          border: none;
          background: #fffaf5;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 15px;
        }

        .card-custom:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .icon-hover {
          text-align: center;
        }

        .icon-hover .card-title {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .progress {
          background-color: #f0e6dd !important;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-bar {
          border-radius: 10px;
        }

        .skills-list li {
          background: #fffaf5;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
        }

        .skills-list li:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }
      `}
    </style>

    {/* Heading */}
    <h2 className="skills-heading">Skills</h2>

    <Row className="w-100">
      {/* Technical Skills */}
      <Col md={6} className="mb-4">
        <h4 className="text-center mb-3" style={{ color: "#8B4513" }}>
          Technical Skills
        </h4>
        <ul className="list-unstyled text-center d-flex flex-column gap-3 skills-list">
          <li className="d-flex align-items-center justify-content-between p-3">
            <span className="me-2 text-xl">⚛️</span>
            React
            <div className="progress w-50" style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%", backgroundColor: "#8B4513" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span className="text-sm">80%</span>
          </li>

          <li className="d-flex align-items-center justify-content-between p-3">
            <span className="me-2 text-xl">🎨</span>
            HTML & CSS
            <div className="progress w-50" style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "90%", backgroundColor: "#8B4513" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span className="text-sm">90%</span>
          </li>

          <li className="d-flex align-items-center justify-content-between p-3">
            <span className="me-2 text-xl">🐍</span>
            Python Flask
            <div className="progress w-50" style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%", backgroundColor: "#8B4513" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span className="text-sm">80%</span>
          </li>

          <li className="d-flex align-items-center justify-content-between p-3">
            <span className="me-2 text-xl">🗄️</span>
            Database Management
            <div className="progress w-50" style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%", backgroundColor: "#8B4513" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span className="text-sm">80%</span>
          </li>
          <li className="d-flex align-items-center justify-content-between p-3">
            <span className="me-2 text-xl">🌐</span>
            Next.js and Tailwind css
            <div className="progress w-50" style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%", backgroundColor: "#8B4513" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span className="text-sm">60%</span>
          </li>
        </ul>
      </Col>

      {/* Soft Skills */}
      <Col md={6}>
        <h4 className="text-center mb-3" style={{ color: "#8B4513" }}>
          Soft Skills
        </h4>
        <Row className="text-center">
          <Col xs={6} className="mb-3">
            <Card className="card-custom icon-hover h-100">
              <Card.Body>
                <Card.Title>🤝</Card.Title>
                <Card.Text>Hardworking</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} className="mb-3">
            <Card className="card-custom icon-hover h-100">
              <Card.Body>
                <Card.Title>🧠</Card.Title>
                <Card.Text>Problem-Solving</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} className="mb-3">
            <Card className="card-custom icon-hover h-100">
              <Card.Body>
                <Card.Title>🌱</Card.Title>
                <Card.Text>Adaptability</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} className="mb-3">
            <Card className="card-custom icon-hover h-100">
              <Card.Body>
                <Card.Title>👥</Card.Title>
                <Card.Text>Team Player</Card.Text>
              </Card.Body>
            </Card>
          </Col>
              <Col xs={6} className="mb-3">
          <Card className="card-custom icon-hover h-100">
            <Card.Body>
              <Card.Title>⏳</Card.Title>
              <Card.Text>Time Management</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} className="mb-3">
          <Card className="card-custom icon-hover h-100">
            <Card.Body>
              <Card.Title>⭐</Card.Title>
              <Card.Text>Leadership</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Skills;
