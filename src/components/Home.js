// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import pic6 from "../images/pic6.jpeg";

// // Import your other pages
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";

// const Home = () => {
//   const CustomTypewriter = ({ text }) => {
//     const [typedText, setTypedText] = useState("");
//     const [isTyping, setIsTyping] = useState(true);

//     useEffect(() => {
//       let timeout;
//       if (isTyping) {
//         if (typedText.length < text.length) {
//           timeout = setTimeout(() => {
//             setTypedText(text.substring(0, typedText.length + 1));
//           }, 70);
//         } else {
//           setIsTyping(false);
//         }
//       }
//       return () => clearTimeout(timeout);
//     }, [typedText, isTyping, text]);

//     return (
//       <span className="h5 mt-3" style={{ color: "#8B4513" }}>
//         {typedText}
//         <span className="typewriter-cursor">|</span>
//       </span>
//     );
//   };

//   return (
//     <div id="home">
//       {/* Hero Section */}
//       <Container className="d-flex align-items-center justify-content-center min-vh-100 p-4">
//         <Row className="align-items-center">
//           {/* Text Section */}
//           <Col xs={12} md={6} className="text-left mb-4 mb-md-0">
//             <h1 className="display-4" style={{ color: "#8B4513" }}>
//               Hi, I'm <br />
//               <span style={{ fontWeight: "bold" }}>
//                 Nyaburu Margret Daniela
//               </span>
//             </h1>
//             <CustomTypewriter text="an aspiring full stack developer and a Data Analyst" />
//             <div className="mt-4 d-flex gap-3 flex-wrap">
//               <a href="#projects">
//                 <Button
//                   className="custom-button"
//                   style={{ backgroundColor: "brown", borderColor: "brown" }}
//                 >
//                   View My Work
//                 </Button>
//               </a>
//               <a href="#contact">
//                 <Button
//                   className="custom-button"
//                   style={{ backgroundColor: "brown", borderColor: "brown" }}
//                 >
//                   Let's Connect
//                 </Button>
//               </a>
//             </div>
//           </Col>

//           {/* Image Section - responsive on all screens */}
//           <Col xs={12} md={6} className="text-center">
//             <img
//               src={pic6}
//               alt="Nyaburu Margret Daniela"
//               className="img-fluid rounded-circle shadow home-img"
//               style={{height:"500px"}}
//             />
//           </Col>
//         </Row>
//       </Container>

//       {/* Other Sections */}
//       <section id="about" className="py-5">
//         <About />
//       </section>

//       <section id="skills" className="py-5">
//         <Skills />
//       </section>

//       <section id="projects" className="py-5">
//         <Projects />
//       </section>

//       <section id="contact" className="py-5">
//         <Contact />
//       </section>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import pic6 from "../images/pic6.jpeg";
import { colors, fonts } from "../theme";

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
      <span
        className="h5 mt-3 home-typewriter"
        style={{ color: colors.caramel, fontFamily: fonts.mono }}
      >
        {typedText}
        <span className="typewriter-cursor">|</span>
      </span>
    );
  };

  return (
    <div id="home" style={{ backgroundColor: colors.cream }}>
      {/* Hero Section */}
      <Container
        fluid
        className="d-flex align-items-center justify-content-center min-vh-100 p-4 home-hero"
      >
        <Row className="align-items-center" style={{ maxWidth: "1100px", width: "100%" }}>
          {/* Text Section */}
          <Col xs={12} md={6} className="text-left mb-4 mb-md-0 home-fade-in">
            <span className="home-eyebrow" style={{ fontFamily: fonts.mono, color: colors.coffee }}>
              Full Stack Developer · Kampala, Uganda
            </span>

            <h1
              className="display-4 home-heading"
              style={{ color: colors.espresso, fontFamily: fonts.display }}
            >
              Hi, I'm <br />
              <span className="home-name">
                Nyaburu Margret Daniela
                <svg
                  className="home-underline"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 14 C 60 4, 120 18, 180 8 S 260 4, 298 12"
                    stroke={colors.gold}
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <CustomTypewriter text="an aspiring full stack developer and a data analyst" />

            <p
              className="home-blurb mt-3"
              style={{ color: colors.espresso, fontFamily: fonts.body, maxWidth: "440px", opacity: 0.85 }}
            >
              Currently interning at Cybroid Technologies — building web and
              mobile applications with React, Flutter, and Django.
            </p>

            <div className="mt-4 d-flex gap-3 flex-wrap">
              <a href="#projects">
                <Button className="home-btn home-btn-solid">View My Work</Button>
              </a>
              <a href="#contact">
                <Button className="home-btn home-btn-outline">Let's Connect</Button>
              </a>
            </div>
          </Col>

          {/* Image Section */}
          <Col xs={12} md={6} className="text-center home-fade-in home-fade-in-delay">
            <div className="home-portrait-wrap">
              <svg className="home-ring" viewBox="0 0 520 520" aria-hidden="true">
                <circle
                  cx="260"
                  cy="260"
                  r="248"
                  fill="none"
                  stroke={colors.oatDeep}
                  strokeWidth="2"
                  strokeDasharray="6 10"
                />
              </svg>
              <img
                src={pic6}
                alt="Nyaburu Margret Daniela"
                className="img-fluid rounded-circle shadow home-img"
              />
              <div className="home-stamp" style={{ borderColor: colors.coffee }}>
                <span style={{ fontFamily: fonts.mono, color: colors.coffee }}>
                  open to&nbsp;work
                </span>
              </div>
            </div>
          </Col>
        </Row>

        <a href="#about" className="home-scroll-cue" aria-label="Scroll to about section">
          <span />
        </a>
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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');

        .home-hero { position: relative; overflow: hidden; }

        .home-eyebrow {
          display: inline-block;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .home-heading { line-height: 1.15; margin-bottom: 0; }

        .home-name { position: relative; display: inline-block; font-weight: 700; }

        .home-underline {
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 100%;
          height: 16px;
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw-underline 1.1s ease-out 0.5s forwards;
        }

        .home-blurb { line-height: 1.6; }

        .home-btn {
          font-family: ${fonts.body};
          border-radius: 999px !important;
          padding: 0.55rem 1.5rem !important;
          font-weight: 500;
          border-width: 2px !important;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .home-btn:hover { transform: translateY(-2px); }

        .home-btn-solid {
          background-color: ${colors.coffee} !important;
          border-color: ${colors.coffee} !important;
          color: ${colors.cream} !important;
        }
        .home-btn-solid:hover {
          background-color: ${colors.coffeeDark} !important;
          border-color: ${colors.coffeeDark} !important;
          box-shadow: 0 8px 20px rgba(74, 44, 23, 0.25);
        }

        .home-btn-outline {
          background-color: transparent !important;
          border-color: ${colors.coffee} !important;
          color: ${colors.coffee} !important;
        }
        .home-btn-outline:hover {
          background-color: ${colors.oat} !important;
          box-shadow: 0 8px 20px rgba(74, 44, 23, 0.12);
        }

        .home-portrait-wrap {
          position: relative;
          display: inline-block;
          width: min(420px, 80vw);
          height: min(420px, 80vw);
        }

        .home-ring {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          animation: spin-slow 40s linear infinite;
        }

        .home-img {
          position: absolute;
          top: 6%;
          left: 6%;
          width: 88%;
          height: 88%;
          object-fit: cover;
        }

        .home-stamp {
          position: absolute;
          bottom: -6px;
          right: -6px;
          width: 92px;
          height: 92px;
          border: 2px dashed;
          border-radius: 50%;
          background: ${colors.cream};
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 0.7rem;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          animation: spin-slow 30s linear infinite reverse;
          box-shadow: 0 4px 14px rgba(58, 36, 21, 0.15);
        }

        .home-fade-in {
          opacity: 0;
          transform: translateY(18px);
          animation: fade-in-up 0.8s ease-out 0.15s forwards;
        }
        .home-fade-in-delay { animation-delay: 0.35s; }

        .home-scroll-cue {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 40px;
          border: 2px solid ${colors.coffee};
          border-radius: 14px;
          opacity: 0.6;
        }
        .home-scroll-cue span {
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          border-radius: 2px;
          background: ${colors.coffee};
          animation: scroll-cue 1.6s ease-in-out infinite;
        }

        @keyframes draw-underline { to { stroke-dashoffset: 0; } }
        @keyframes fade-in-up { to { opacity: 1; transform: translateY(0); } }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes scroll-cue {
          0% { opacity: 0; top: 6px; }
          30% { opacity: 1; }
          100% { opacity: 0; top: 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-fade-in, .home-underline, .home-ring, .home-stamp, .home-scroll-cue span {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;