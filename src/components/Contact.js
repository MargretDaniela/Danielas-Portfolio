// import React, { useState } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import {
//   FaWhatsapp,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     document.getElementById(
//       "contact-message"
//     ).innerText = `Message from ${name} sent!`;
//     setName("");
//     setMessage("");
//   };

//   return (
//     <Container className="min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
//       <h2 className="mb-4" style={{ color: "#8B4513" }}>
//         Let's Connect
//       </h2>
//       <Row className="w-100 justify-content-center">
//         <Col md={8}>
//           <Form
//             onSubmit={handleSubmit}
//             className="p-4 rounded shadow-sm"
//             style={{ backgroundColor: "#D2B48C" }}
//           >
//             <Form.Group className="mb-3">
//               <Form.Label style={{ color: "#8B4513" }}>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label style={{ color: "#8B4513" }}>Message</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Your message here..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Button type="submit" className="custom-button w-100 mt-2" style={{backgroundColor:"#8B4513", border:"#8B4513"}}>
//               Send Message
//             </Button>
//             <p
//               id="contact-message"
//               className="text-center mt-3"
//               style={{ color: "#8B4513" }}
//             ></p>
//           </Form>
//           <div className="text-center mt-4">
//             <h4 className="mb-3" style={{ color: "#8B4513" }}>
//               Find me on...
//             </h4>
//             <div className="d-flex justify-content-center gap-4 text-3xl">
//               {/* WhatsApp */}
//               <a
//                 href="https://wa.me/256767724297"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="icon-hover text-decoration-none"
//               >
//                 <FaWhatsapp size={28} color="#8B4513" />
//               </a>
//               {/* Twitter */}
//               <a
//                 href="https://x.com/home"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="icon-hover text-decoration-none"
//               >
//                 <FaTwitter size={28} color="#8B4513" />
//               </a>
//               {/* LinkedIn */}
//               <a
//                 href="https://linkedin.com/in/YourUsername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="icon-hover text-decoration-none"
//               >
//                 <FaLinkedin size={28} color="#8B4513" />
//               </a>
//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="icon-hover text-decoration-none"
//               >
//                 <FaInstagram size={28} color="#8B4513" />
//               </a>
//               {/* Email */}
//               <a
//                 href="danielamargret6@gmail.com"
//                 className="icon-hover text-decoration-none"
//               >
//                 <FaEnvelope size={28} color="#8B4513" />
//               </a>
//             </div>
//             <p className="mt-4" style={{ color: "#8B4513" }}>
//               Contact Number: +256 767724297
//             </p>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { colors, fonts } from "../theme";
import useReveal from "../hooks/useReveal";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/256767724297",
    Icon: FaWhatsapp,
  },
  { label: "Twitter", href: "https://x.com/home", Icon: FaTwitter },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/YourUsername",
    Icon: FaLinkedin,
  },
  { label: "Instagram", href: "https://www.instagram.com/", Icon: FaInstagram },
  {
    label: "Email",
    href: "mailto:danielamargret6@gmail.com",
    Icon: FaEnvelope,
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const [cardRef, cardVisible] = useReveal();
  const [socialRef, socialVisible] = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setName("");
    setMessage("");
  };

  return (
    <Container className="min-vh-100 d-flex flex-column align-items-center justify-content-center p-4 contact-wrap">
      <span className="contact-eyebrow">Get In Touch</span>
      <h2 className="contact-heading mb-4">Let's Connect</h2>

      <Row className="w-100 justify-content-center">
        <Col md={8}>
          <div
            ref={cardRef}
            className={`contact-reveal ${cardVisible ? "is-visible" : ""}`}
          >
            <Form onSubmit={handleSubmit} className="contact-card">
              <div className="contact-stamp">postcard</div>

              <Form.Group className="mb-3">
                <Form.Label className="contact-label">Name</Form.Label>
                <Form.Control
                  className="contact-input"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="contact-label">Message</Form.Label>
                <Form.Control
                  className="contact-input"
                  as="textarea"
                  rows={3}
                  placeholder="Your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" className="contact-submit w-100 mt-2">
                Send Message
              </Button>

              <p
                className={`contact-sent mt-3 ${sent ? "is-visible" : ""}`}
                role="status"
              >
                {sent ? "Message sent — thank you! I'll get back to you soon." : ""}
              </p>
            </Form>
          </div>

          <div
            ref={socialRef}
            className={`text-center mt-5 contact-reveal contact-reveal-delay ${
              socialVisible ? "is-visible" : ""
            }`}
          >
            <h4 className="contact-subheading mb-3">Find me on</h4>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-icon"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="contact-phone mt-4">
              <a href="tel:+256767724297">+256 767 724 297</a>
            </p>
          </div>
        </Col>
      </Row>

      <style>{`
        .contact-wrap { position: relative; }

        .contact-eyebrow {
          font-family: ${fonts.mono};
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${colors.coffee};
        }

        .contact-heading {
          font-family: ${fonts.display};
          font-weight: 700;
          color: ${colors.espresso};
        }

        .contact-subheading {
          font-family: ${fonts.display};
          color: ${colors.espresso};
        }

        .contact-card {
          position: relative;
          background: ${colors.oat};
          border: 1px solid ${colors.oatDeep};
          border-radius: 4px;
          padding: 2rem;
          box-shadow: 0 12px 30px rgba(58, 36, 21, 0.12);
        }

        .contact-stamp {
          position: absolute;
          top: -14px;
          right: 24px;
          background: ${colors.cream};
          border: 2px dashed ${colors.caramel};
          color: ${colors.caramel};
          font-family: ${fonts.mono};
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.3rem 0.7rem;
          transform: rotate(3deg);
        }

        .contact-label {
          font-family: ${fonts.body};
          color: ${colors.espresso};
          font-weight: 500;
        }

        .contact-input {
          background: ${colors.cream} !important;
          border: 1px solid ${colors.oatDeep} !important;
          font-family: ${fonts.body};
          color: ${colors.espresso} !important;
        }
        .contact-input:focus {
          border-color: ${colors.caramel} !important;
          box-shadow: 0 0 0 3px rgba(169, 113, 60, 0.2) !important;
        }

        .contact-submit {
          font-family: ${fonts.body};
          font-weight: 500;
          background-color: ${colors.coffee} !important;
          border-color: ${colors.coffee} !important;
          border-radius: 999px !important;
          padding: 0.6rem !important;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .contact-submit:hover {
          background-color: ${colors.coffeeDark} !important;
          border-color: ${colors.coffeeDark} !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(74, 44, 23, 0.25);
        }

        .contact-sent {
          text-align: center;
          font-family: ${fonts.body};
          color: ${colors.coffeeDark};
          min-height: 1.4em;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .contact-sent.is-visible { opacity: 1; transform: translateY(0); }

        .contact-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid ${colors.caramel};
          color: ${colors.coffee};
          transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
        }
        .contact-icon:hover {
          background-color: ${colors.coffee};
          color: ${colors.cream};
          transform: translateY(-3px);
        }

        .contact-phone a {
          font-family: ${fonts.mono};
          color: ${colors.espresso};
          text-decoration: none;
          border-bottom: 1px dashed ${colors.caramel};
        }
        .contact-phone a:hover { color: ${colors.coffee}; }

        .contact-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .contact-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .contact-reveal-delay { transition-delay: 0.15s; }
      `}</style>
    </Container>
  );
};

export default Contact;
