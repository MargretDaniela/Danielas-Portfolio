import React from "react";
import { Container, Row, Col, Button, Card, img} from "react-bootstrap";
import HomePage from "../images/HomeImage.jpeg"
import MyPortfolio from "../images/MyPortfolios.jpeg"
import book from "../images/Book.jpeg"
import AuthorsDb from "../images/Author.jpeg"
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Asili Yamama Generation LTD Website",
      description: "A website to Invest in Generations, Empower Futures.",
      img: HomePage,
      link: "http://asiliyama.org/",
    },
    {
      id: 2,
      title: "My Portfolio",
      description: "A showcase of my journey as a developer — blending creativity, problem-solving, and technology into real-world projects.",
      img: MyPortfolio,
      link: "https://github.com/yourusername/ecommerce-app",
    },
    {
      id: 3,
      title: "Book Management System",
      description: "Online system to manage book inventory, borrowing, and user records.",
      img: book,
      link: "https://github.com/MargretDaniela/BOOK-MGT-SYSTEM.git",
    },
    {
      id: 4,
      title: "Authors API.",
      description: "Online API providing access to authors’ data, books, and profiles",
      img: AuthorsDb,
      link: "https://github.com/MargretDaniela/MY_API.git",
    },
  ];

  return (
    <Container className="min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
      <h2 className="mb-4" style={{ color: "#8B4513" }}>My Projects</h2>
      <Row className="g-4">
        {projects.map((project) => (
          <Col md={6} lg={4} key={project.id}>
            <Card className="card-custom h-100 shadow-sm hover-card">
              <Card.Img variant="top" src={project.img} alt={project.title} />
              <Card.Body>
                <Card.Title style={{ color: "#8B4513" }}>{project.title}</Card.Title>
                <Card.Text style={{ color: "#8B4513" }}>
                  {project.description}
                </Card.Text>
                <Button
                  className="custom-button mt-2"
                  style={{ backgroundColor: "brown", borderColor: "brown" }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
