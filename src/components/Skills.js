// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const Skills = () => (
//   <Container className="min-vh-80 d-flex flex-column align-items-center justify-content-center p-2">
//     {/* Inline CSS */}
//     <style>
//       {`
//         .skills-heading {
//           position: relative;
//           display: inline-block;
//           color: #8B4513;
//           font-weight: bold;
//           cursor: pointer;
//           padding-bottom: 5px;
//           margin-bottom: 20px;
//         }

//         .skills-heading::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           height: 3px;
//           width: 50%;
//           background-color: #8B4513;
//           transition: width 0.4s ease;
//         }

//         .skills-heading:hover::after {
//           width: 100%;
//         }

//         .card-custom {
//           border: none;
//           background: #fffaf5;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           border-radius: 15px;
//         }

//         .card-custom:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 8px 20px rgba(0,0,0,0.15);
//         }

//         .icon-hover {
//           text-align: center;
//         }

//         .icon-hover .card-title {
//           font-size: 2rem;
//           margin-bottom: 10px;
//         }

//         .progress {
//           background-color: #f0e6dd !important;
//           border-radius: 10px;
//           overflow: hidden;
//         }

//         .progress-bar {
//           border-radius: 10px;
//         }

//         .skills-list li {
//           background: #fffaf5;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.08);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           border-radius: 12px;
//         }

//         .skills-list li:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 6px 16px rgba(0,0,0,0.12);
//         }
//       `}
//     </style>

//     {/* Heading */}
//     <h2 className="skills-heading">Skills</h2>

//     <Row className="w-100">
//       {/* Technical Skills */}
//       <Col md={6} className="mb-4">
//         <h4 className="text-center mb-3" style={{ color: "#8B4513" }}>
//           Technical Skills
//         </h4>
//         <ul className="list-unstyled text-center d-flex flex-column gap-3 skills-list">
//           <li className="d-flex align-items-center justify-content-between p-3">
//             <span className="me-2 text-xl">⚛️</span>
//             React
//             <div className="progress w-50" style={{ height: "10px" }}>
//               <div
//                 className="progress-bar"
//                 role="progressbar"
//                 style={{ width: "80%", backgroundColor: "#8B4513" }}
//                 aria-valuenow="80"
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <span className="text-sm">80%</span>
//           </li>

//           <li className="d-flex align-items-center justify-content-between p-3">
//             <span className="me-2 text-xl">🎨</span>
//             HTML & CSS
//             <div className="progress w-50" style={{ height: "10px" }}>
//               <div
//                 className="progress-bar"
//                 role="progressbar"
//                 style={{ width: "90%", backgroundColor: "#8B4513" }}
//                 aria-valuenow="90"
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <span className="text-sm">90%</span>
//           </li>

//           <li className="d-flex align-items-center justify-content-between p-3">
//             <span className="me-2 text-xl">🐍</span>
//             Python Flask
//             <div className="progress w-50" style={{ height: "10px" }}>
//               <div
//                 className="progress-bar"
//                 role="progressbar"
//                 style={{ width: "80%", backgroundColor: "#8B4513" }}
//                 aria-valuenow="80"
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <span className="text-sm">80%</span>
//           </li>

//           <li className="d-flex align-items-center justify-content-between p-3">
//             <span className="me-2 text-xl">🗄️</span>
//             Database Management
//             <div className="progress w-50" style={{ height: "10px" }}>
//               <div
//                 className="progress-bar"
//                 role="progressbar"
//                 style={{ width: "80%", backgroundColor: "#8B4513" }}
//                 aria-valuenow="80"
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <span className="text-sm">80%</span>
//           </li>
//           <li className="d-flex align-items-center justify-content-between p-3">
//             <span className="me-2 text-xl">🌐</span>
//             Next.js and Tailwind css
//             <div className="progress w-50" style={{ height: "10px" }}>
//               <div
//                 className="progress-bar"
//                 role="progressbar"
//                 style={{ width: "60%", backgroundColor: "#8B4513" }}
//                 aria-valuenow="60"
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <span className="text-sm">60%</span>
//           </li>
//         </ul>
//       </Col>

//       {/* Soft Skills */}
//       <Col md={6}>
//         <h4 className="text-center mb-3" style={{ color: "#8B4513" }}>
//           Soft Skills
//         </h4>
//         <Row className="text-center">
//           <Col xs={6} className="mb-3">
//             <Card className="card-custom icon-hover h-100">
//               <Card.Body>
//                 <Card.Title>🤝</Card.Title>
//                 <Card.Text>Hardworking</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={6} className="mb-3">
//             <Card className="card-custom icon-hover h-100">
//               <Card.Body>
//                 <Card.Title>🧠</Card.Title>
//                 <Card.Text>Problem-Solving</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={6} className="mb-3">
//             <Card className="card-custom icon-hover h-100">
//               <Card.Body>
//                 <Card.Title>🌱</Card.Title>
//                 <Card.Text>Adaptability</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={6} className="mb-3">
//             <Card className="card-custom icon-hover h-100">
//               <Card.Body>
//                 <Card.Title>👥</Card.Title>
//                 <Card.Text>Team Player</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//               <Col xs={6} className="mb-3">
//           <Card className="card-custom icon-hover h-100">
//             <Card.Body>
//               <Card.Title>⏳</Card.Title>
//               <Card.Text>Time Management</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={6} className="mb-3">
//           <Card className="card-custom icon-hover h-100">
//             <Card.Body>
//               <Card.Title>⭐</Card.Title>
//               <Card.Text>Leadership</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         </Row>
//       </Col>
//     </Row>
//   </Container>
// );

// export default Skills;

import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Python", "Flask", "Django", "Laravel", "REST APIs"],
  },
  {
    title: "Mobile",
    icon: "📱",
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "SQL", "XAMPP"],
  },
  {
    title: "Tools & Design",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Figma", "Adobe Illustrator", "Canva"],
  },
];

const softSkills = [
  { icon: "🤝", label: "Hardworking" },
  { icon: "🧠", label: "Problem-Solving" },
  { icon: "🌱", label: "Adaptability" },
  { icon: "👥", label: "Team Player" },
  { icon: "⏳", label: "Time Management" },
  { icon: "⭐", label: "Leadership" },
];

const Skills = () => {
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
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="skills-section">
      <style>
        {`
          .skills-section {
            --color-bg: #F6EEE2;
            --color-surface: #FFFBF6;
            --color-espresso: #3E2A1E;
            --color-coffee: #8B4513;
            --color-coffee-dark: #6B3410;
            --color-tan: #D9B48C;
            --color-gold: #B08D57;
            --color-border: #E7D9C4;

            background: var(--color-bg);
            padding: 6rem 0;
          }

          .skills-heading-wrap {
            text-align: center;
            margin-bottom: 3.5rem;
          }

          .skills-label {
            font-family: "Courier New", monospace;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-size: 0.75rem;
            color: var(--color-gold);
            display: inline-block;
            margin-bottom: 0.5rem;
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }

          .skills-heading {
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

          .skills-heading::after {
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

          .skills-section.in-view .skills-label,
          .skills-section.in-view .skills-heading {
            opacity: 1;
            transform: translateY(0);
          }

          .skills-section.in-view .skills-heading::after {
            width: 100px;
          }

          .skill-card {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 1.75rem 1.5rem;
            height: 100%;
            box-shadow: 0 4px 14px rgba(62, 42, 30, 0.06);
            transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
            opacity: 0;
            transform: translateY(24px);
          }

          .skills-section.in-view .skill-card {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.6s ease var(--delay, 0s),
                        transform 0.6s ease var(--delay, 0s),
                        box-shadow 0.35s ease, border-color 0.35s ease;
          }

          .skill-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 28px rgba(62, 42, 30, 0.14);
            border-color: var(--color-tan);
          }

          .skill-card-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.1rem;
          }

          .skill-card-icon {
            font-size: 1.4rem;
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-bg);
            border-radius: 10px;
          }

          .skill-card-title {
            color: var(--color-espresso);
            font-family: Georgia, 'Times New Roman', serif;
            font-weight: 700;
            font-size: 1.15rem;
            margin: 0;
          }

          .skill-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .skill-pill {
            font-size: 0.82rem;
            font-family: "Courier New", monospace;
            color: var(--color-coffee-dark);
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 999px;
            padding: 0.35rem 0.85rem;
            transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
          }

          .skill-pill:hover {
            background: var(--color-coffee);
            color: #fff;
            transform: translateY(-2px);
          }

          .soft-skills-wrap {
            margin-top: 3.5rem;
            text-align: center;
          }

          .soft-skills-title {
            color: var(--color-espresso);
            font-family: Georgia, serif;
            font-weight: 700;
            font-size: 1.3rem;
            margin-bottom: 1.75rem;
          }

          .soft-skill-chip {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 1.1rem 0.75rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            opacity: 0;
            transform: translateY(20px);
          }

          .skills-section.in-view .soft-skill-chip {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.55s ease var(--delay, 0s),
                        transform 0.55s ease var(--delay, 0s),
                        box-shadow 0.3s ease, border-color 0.3s ease;
          }

          .soft-skill-chip:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 22px rgba(62, 42, 30, 0.12);
            border-color: var(--color-tan);
          }

          .soft-skill-icon {
            font-size: 1.6rem;
          }

          .soft-skill-label {
            font-size: 0.85rem;
            color: var(--color-espresso);
            font-weight: 500;
          }

          @media (max-width: 767px) {
            .skills-section { padding: 4rem 0; }
            .skills-heading { font-size: 1.9rem; }
            .skill-card { padding: 1.4rem 1.1rem; }
          }

          @media (prefers-reduced-motion: reduce) {
            .skills-label,
            .skills-heading,
            .skills-heading::after,
            .skill-card,
            .soft-skill-chip {
              transition: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}
      </style>

      <Container className={visible ? "in-view" : ""}>
        {/* wrapper trick so CSS above targets .skills-section.in-view; sync class on section too */}
      </Container>

      {/* Sync the in-view class on the section itself */}
      <ScopedInView visible={visible}>
        <Container>
          <div className="skills-heading-wrap">
            <span className="skills-label">// what i work with</span>
            <h2 className="skills-heading">Skills</h2>
          </div>

          <Row className="g-4">
            {skillGroups.map((group, i) => (
              <Col md={6} lg={4} key={group.title}>
                <div className="skill-card" style={{ "--delay": `${i * 0.08}s` }}>
                  <div className="skill-card-header">
                    <span className="skill-card-icon">{group.icon}</span>
                    <h4 className="skill-card-title">{group.title}</h4>
                  </div>
                  <div className="skill-pills">
                    {group.skills.map((skill) => (
                      <span className="skill-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <div className="soft-skills-wrap">
            <h4 className="soft-skills-title">How I Work</h4>
            <Row className="g-3">
              {softSkills.map((skill, i) => (
                <Col xs={4} md={2} key={skill.label}>
                  <div className="soft-skill-chip" style={{ "--delay": `${0.4 + i * 0.06}s` }}>
                    <span className="soft-skill-icon">{skill.icon}</span>
                    <span className="soft-skill-label">{skill.label}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </ScopedInView>
    </section>
  );
};

// Small helper so the outer <section> gets the "in-view" class without
// re-rendering structure — keeps this file self-contained (no new files added).
const ScopedInView = ({ visible, children }) => {
  const ref = useRef(null);
  useEffect(() => {
    const section = ref.current?.closest(".skills-section");
    if (section) {
      section.classList.toggle("in-view", visible);
    }
  }, [visible]);
  return <div ref={ref}>{children}</div>;
};

export default Skills;
