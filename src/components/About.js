// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import pic5 from "../images/pic5.jpeg";

// const About = () => (
//   <Container className="min-vh-80 d-flex align-items-center justify-content-center p-2">
//     {/* Inline CSS inside component */}
//     <style>
//       {`
//         .about-heading {
//           position: relative;
//           display: inline-block;
//           color: #8B4513;
//           font-weight: bold;
//           cursor: pointer;
//           padding-bottom: 5px;
//         }

//         .about-heading::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           height: 3px;
//           width: 50%; /* Half underline */
//           background-color: #8B4513;
//           transition: width 0.4s ease;
//         }

//         .about-heading:hover::after {
//           width: 100%; /* Expand underline on hover */
//         }

//         .about-img {
//           transition: transform 0.3s ease;
//         }

//         .about-img:hover {
//           transform: scale(1.05); /* Subtle zoom on hover */
//         }
//       `}
//     </style>

//     <Row className="align-items-center">
//       {/* Text Section */}
//       <Col xs={12} md={6} className="text-left mb-4 mb-md-0">
//         <h2 className="about-heading">About Me</h2>
//         <p className="mt-2" style={{ color: "#8B4513", fontSize: "25px" }}>
//           I am Nyaburu Margret Daniela, a passionate and dedicated aspiring Full
//           Stack Developer and Data Analyst. I have a strong foundation in both
//           front-end and back-end technologies, with a keen interest in creating
//           seamless and efficient user experiences. My analytical skills allow me
//           to not only build robust applications but also to derive valuable
//           insights from data. I am a lifelong learner, constantly expanding my
//           knowledge to stay at the forefront of the ever-evolving tech
//           landscape.
//         </p>
//       </Col>

//       {/* Image Section */}
//       <Col xs={12} md={6} className="text-center">
//         <img
//           src={pic5}
//           alt="Nyaburu Margret Daniela"
//           className="img-fluid rounded-circle shadow about-img"
//           style={{ height: "500px" }}
//         />
//       </Col>
//     </Row>
//   </Container>
// );

// export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic5 from "../images/pic5.jpeg";
import { colors, fonts } from "../theme";
import useReveal from "../hooks/useReveal";

const foundations = [
  "Operating Systems",
  "Data Structures",
  "Data Communications",
  "Networking",
  "Research Methods",
  "Data Science",
];

const About = () => {
  const [textRef, textVisible] = useReveal();
  const [imgRef, imgVisible] = useReveal();

  return (
    <Container className="min-vh-80 d-flex align-items-center justify-content-center p-2 about-wrap">
      <Row className="align-items-center">
        {/* Text Section */}
        <Col
          xs={12}
          md={6}
          className={`text-left mb-4 mb-md-0 about-reveal ${textVisible ? "is-visible" : ""}`}
          ref={textRef}
        >
          <span className="about-eyebrow">About</span>
          <h2 className="about-heading">About Me</h2>

          <div className="about-card">
            <p className="about-copy">
              I'm Nyaburu Margret Daniela, a full stack developer and aspiring
              data analyst with a Computer Science diploma from the Women's
              Institute of Technology and Innovation, Kampala. I build
              across the stack — React and Next.js on the front end, Django
              and Flask on the back — and I'm currently interning at{" "}
              <strong style={{ color: colors.coffeeDark }}>
                Cybroid Technologies
              </strong>
              , growing through real client work.
            </p>
            <p className="about-copy">
              My analytical side comes from a solid grounding in core CS —
              I don't just build applications, I like understanding why they
              work the way they do, and what the data behind them is saying.
            </p>
          </div>

          <div className="about-chips">
            {foundations.map((item) => (
              <span key={item} className="about-chip">
                {item}
              </span>
            ))}
          </div>
        </Col>

        {/* Image Section */}
        <Col
          xs={12}
          md={6}
          className={`text-center about-reveal about-reveal-delay ${imgVisible ? "is-visible" : ""}`}
          ref={imgRef}
        >
          <div className="about-portrait-wrap">
            <img
              src={pic5}
              alt="Nyaburu Margret Daniela"
              className="img-fluid rounded-circle shadow about-img"
            />
            <div className="about-tag">
              Diploma in Computer Science
              <span>2025 – 2026</span>
            </div>
          </div>
        </Col>
      </Row>

      <style>{`
        .about-wrap { position: relative; }

        .about-eyebrow {
          display: inline-block;
          font-family: ${fonts.mono};
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${colors.coffee};
          margin-bottom: 0.4rem;
        }

        .about-heading {
          position: relative;
          display: inline-block;
          color: ${colors.espresso};
          font-family: ${fonts.display};
          font-weight: 700;
          cursor: default;
          padding-bottom: 8px;
          margin-bottom: 1rem;
        }
        .about-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 50%;
          background-color: ${colors.gold};
          transition: width 0.4s ease;
        }
        .about-heading:hover::after { width: 100%; }

        .about-card {
          background: ${colors.oat};
          border: 1px solid ${colors.oatDeep};
          border-radius: 4px;
          padding: 1.5rem 1.75rem;
          position: relative;
        }
        .about-card::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 28px;
          width: 46px;
          height: 18px;
          background: rgba(201, 160, 99, 0.35);
          border: 1px solid rgba(201, 160, 99, 0.5);
          transform: rotate(-3deg);
        }

        .about-copy {
          font-family: ${fonts.body};
          color: ${colors.espresso};
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 0.9rem;
        }
        .about-copy:last-child { margin-bottom: 0; }

        .about-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.25rem;
        }
        .about-chip {
          font-family: ${fonts.mono};
          font-size: 0.75rem;
          color: ${colors.coffeeDark};
          background: transparent;
          border: 1px solid ${colors.caramel};
          border-radius: 999px;
          padding: 0.3rem 0.8rem;
        }

        .about-portrait-wrap {
          position: relative;
          display: inline-block;
        }

        .about-img {
          height: 420px;
          width: 420px;
          max-width: 80vw;
          max-height: 80vw;
          object-fit: cover;
          border: 6px solid ${colors.cream};
          outline: 1px solid ${colors.oatDeep};
          transition: transform 0.4s ease;
        }
        .about-img:hover { transform: scale(1.04) rotate(-1deg); }

        .about-tag {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%) rotate(-2deg);
          background: ${colors.cream};
          border: 1px solid ${colors.oatDeep};
          box-shadow: 0 6px 16px rgba(58, 36, 21, 0.15);
          padding: 0.5rem 1rem;
          font-family: ${fonts.mono};
          font-size: 0.7rem;
          text-align: center;
          color: ${colors.espresso};
          white-space: nowrap;
        }
        .about-tag span {
          display: block;
          color: ${colors.caramel};
          margin-top: 2px;
        }

        .about-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .about-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .about-reveal-delay { transition-delay: 0.15s; }
      `}</style>
    </Container>
  );
};

export default About;