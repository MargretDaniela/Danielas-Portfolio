import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ import Link
import pic3 from "../images/pic3.jpeg";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");

  const downloadCV = () => {
    const cvText = `This is a dummy CV for Nyaburu Margret Daniela.

Skills:
- Full Stack Development
- Data Analysis
- React, HTML, CSS
- Python, Flask
- MySQL`;
    const blob = new Blob([cvText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Nyaburu_Margret_Daniela_CV.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#fdf5e6",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        width: "100%",
      }}
    >
      <div className="d-flex align-items-center justify-content-between px-4 py-2">
        {/* Left side image/logo */}
        <div>
          <img
            src={pic3}
            alt="Logo"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%", 
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right side Nav Items */}
        <Nav className="custom-navbar" activeKey={activePage} style={{ gap: "15px" }}>
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => setActivePage("home")} style={{ color: "brown" }}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" onClick={() => setActivePage("about")} style={{ color: "brown" }}>
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/skills" onClick={() => setActivePage("skills")} style={{ color: "brown" }}>
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/projects" onClick={() => setActivePage("projects")} style={{ color: "brown" }}>
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" onClick={() => setActivePage("contact")} style={{ color: "brown" }}>
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button
              className="custom-button ms-3"
              onClick={downloadCV}
              style={{ backgroundColor: "brown", borderColor: "brown" }}
            >
              Download CV
            </Button>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default Navbar;
