// import React from "react";
// import { Container, Row, Col, Button, Card, img} from "react-bootstrap";
// import HomePage from "../images/HomeImage.jpeg"
// import MyPortfolio from "../images/MyPortfolios.jpeg"
// import book from "../images/Book.jpeg"
// import AuthorsDb from "../images/Author.jpeg"
// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Asili Yamama Generation LTD Website",
//       description: "A website to Invest in Generations, Empower Futures.",
//       img: HomePage,
//       link: "http://asiliyama.org/",
//     },
//     {
//       id: 2,
//       title: "My Portfolio",
//       description: "A showcase of my journey as a developer — blending creativity, problem-solving, and technology into real-world projects.",
//       img: MyPortfolio,
//       link: "https://github.com/yourusername/ecommerce-app",
//     },
//     {
//       id: 3,
//       title: "Book Management System",
//       description: "Online system to manage book inventory, borrowing, and user records.",
//       img: book,
//       link: "https://github.com/MargretDaniela/BOOK-MGT-SYSTEM.git",
//     },
//     {
//       id: 4,
//       title: "Authors API.",
//       description: "Online API providing access to authors’ data, books, and profiles",
//       img: AuthorsDb,
//       link: "https://github.com/MargretDaniela/MY_API.git",
//     },
//   ];

//   return (
//     <Container className="min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
//       <h2 className="mb-4" style={{ color: "#8B4513" }}>My Projects</h2>
//       <Row className="g-4">
//         {projects.map((project) => (
//           <Col md={6} lg={4} key={project.id}>
//             <Card className="card-custom h-100 shadow-sm hover-card">
//               <Card.Img variant="top" src={project.img} alt={project.title} />
//               <Card.Body>
//                 <Card.Title style={{ color: "#8B4513" }}>{project.title}</Card.Title>
//                 <Card.Text style={{ color: "#8B4513" }}>
//                   {project.description}
//                 </Card.Text>
//                 <Button
//                   className="custom-button mt-2"
//                   style={{ backgroundColor: "brown", borderColor: "brown" }}
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Project
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Projects;

import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import HomePage from "../images/HomeImage.jpeg";
import MyPortfolio from "../images/MyPortfolios.jpeg";
import book from "../images/Book.jpeg";
import AuthorsDb from "../images/Author.jpeg";

const projects = [
  {
    id: 1,
    title: "Asili Yamama Generation Care",
    description:
      "Full-stack nonprofit website built end-to-end — UI layouts and backend features supporting donors, caregivers, and volunteers.",
    img: HomePage,
    tags: ["Full-Stack", "Nonprofit"],
    link: "http://asiliyama.org/",
  },
  {
    id: 2,
    title: "West Nile Foundation",
    description:
      "Developed and maintained the organization's website — improving UI/UX design, usability, and overall system performance.",
    img: null,
    tags: ["Web Dev", "UI/UX"],
    link: "https://wnetf.com/",
  },
  {
    id: 3,
    title: "Nutriblend Haven",
    description:
      "Collaborated with a team to build and launch the Nutriblend Haven platform — frontend components, structure, and responsiveness.",
    img: null,
    tags: ["Frontend", "Team Project"],
    link: "https://rasmuspharmaceuticals.com/",
  },
  {
    id: 4,
    title: "Book Management System",
    description:
      "CRUD-based system for managing book records — strengthened database handling, backend logic, and system structuring.",
    img: book,
    tags: ["Backend", "CRUD", "Database"],
    link: "https://github.com/MargretDaniela/BOOK-MGT-SYSTEM.git",
  },
  {
    id: 5,
    title: "Authors API",
    description: "REST API providing access to authors' data, books, and profiles.",
    img: AuthorsDb,
    tags: ["API", "Backend"],
    link: "https://github.com/MargretDaniela/MY_API.git",
  },
  {
    id: 6,
    title: "Personal Portfolio",
    description:
      "This portfolio — showcasing my projects, skills, and technical journey as a developer.",
    img: MyPortfolio,
    tags: ["React", "Design"],
    link: "https://github.com/MargretDaniela",
  },
];

const initials = (title) =>
  title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const Projects = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`projects-section${visible ? " in-view" : ""}`}>
      <style>
        {`
          .projects-section {
            --color-bg: #F6EEE2;
            --color-surface: #FFFBF6;
            --color-espresso: #3E2A1E;
            --color-coffee: #8B4513;
            --color-coffee-dark: #6B3410;
            --color-tan: #D9B48C;
            --color-gold: #B08D57;
            --color-border: #E7D9C4;

            background: var(--color-surface);
            padding: 6rem 0;
          }

          .projects-heading-wrap {
            text-align: center;
            margin-bottom: 3.5rem;
          }

          .projects-label {
            font-family: "Courier New", monospace;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-size: 0.75rem;
            color: var(--color-gold);
            display: block;
            margin-bottom: 0.5rem;
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }

          .projects-heading {
            position: relative;
            display: inline-block;
            color: var(--color-espresso);
            font-family: Georgia, 'Times New Roman', serif;
            font-weight: 700;
            font-size: 2.4rem;
            padding-bottom: 10px;
            opacity: 0;
            transform: translateY(16px);
            transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
          }

          .projects-heading::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            height: 3px;
            width: 60px;
            background-color: var(--color-coffee);
            transform: translateX(-50%);
            transition: width 0.4s ease;
          }

          .projects-section.in-view .projects-label,
          .projects-section.in-view .projects-heading {
            opacity: 1;
            transform: translateY(0);
          }

          .projects-section.in-view .projects-heading::after {
            width: 100px;
          }

          .project-card {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            height: 100%;
            display: flex;
            flex-direction: column;
            box-shadow: 0 4px 14px rgba(62, 42, 30, 0.07);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            opacity: 0;
            transform: translateY(28px);
          }

          .projects-section.in-view .project-card {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.6s ease var(--delay, 0s),
                        transform 0.6s ease var(--delay, 0s),
                        box-shadow 0.4s ease;
          }

          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 32px rgba(62, 42, 30, 0.16);
          }

          .project-media {
            position: relative;
            width: 100%;
            height: 190px;
            overflow: hidden;
            background: linear-gradient(135deg, var(--color-coffee), var(--color-gold));
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .project-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
          }

          .project-card:hover .project-media img {
            transform: scale(1.08);
          }

          .project-media-fallback {
            color: #fff;
            font-family: Georgia, serif;
            font-weight: 700;
            font-size: 2rem;
            letter-spacing: 2px;
            opacity: 0.9;
          }

          .project-body {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            flex: 1;
          }

          .project-title {
            color: var(--color-espresso);
            font-family: Georgia, serif;
            font-weight: 700;
            font-size: 1.15rem;
            margin-bottom: 0.6rem;
          }

          .project-description {
            color: #5A4636;
            font-size: 0.92rem;
            line-height: 1.5;
            margin-bottom: 1rem;
            flex: 1;
          }

          .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin-bottom: 1.1rem;
          }

          .project-tag {
            font-size: 0.72rem;
            font-family: "Courier New", monospace;
            background: var(--color-surface);
            color: var(--color-coffee-dark);
            border: 1px solid var(--color-border);
            border-radius: 999px;
            padding: 0.25rem 0.65rem;
          }

          .project-link {
            align-self: flex-start;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background: var(--color-coffee);
            color: #fff;
            text-decoration: none;
            font-size: 0.88rem;
            font-weight: 600;
            padding: 0.55rem 1.2rem;
            border-radius: 999px;
            transition: background 0.3s ease, transform 0.3s ease, gap 0.3s ease;
          }

          .project-link:hover {
            background: var(--color-coffee-dark);
            color: #fff;
            gap: 0.65rem;
            transform: translateX(2px);
          }

          @media (max-width: 767px) {
            .projects-section { padding: 4rem 0; }
            .projects-heading { font-size: 1.9rem; }
            .project-media { height: 160px; }
          }

          @media (prefers-reduced-motion: reduce) {
            .projects-label,
            .projects-heading,
            .projects-heading::after,
            .project-card,
            .project-media img,
            .project-link {
              transition: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}
      </style>

      <Container>
        <div className="projects-heading-wrap">
          <span className="projects-label">// selected work</span>
          <h2 className="projects-heading">My Projects</h2>
        </div>

        <Row className="g-4">
          {projects.map((project, i) => (
            <Col md={6} lg={4} key={project.id}>
              <div className="project-card" style={{ "--delay": `${i * 0.08}s` }}>
                <div className="project-media">
                  {project.img ? (
                    <img src={project.img} alt={project.title} />
                  ) : (
                    <span className="project-media-fallback">{initials(project.title)}</span>
                  )}
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <Badge as="span" className="project-tag" key={tag} bg="">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;