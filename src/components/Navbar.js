// import React, { useState } from "react";
// import { Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom"; // ✅ import Link
// import pic3 from "../images/pic3.jpeg";

// const Navbar = () => {
//   const [activePage, setActivePage] = useState("home");

//   const downloadCV = () => {
//     const cvText = `This is a dummy CV for Nyaburu Margret Daniela.

// Skills:
// - Full Stack Development
// - Data Analysis
// - React, HTML, CSS
// - Python, Flask
// - MySQL`;
//     const blob = new Blob([cvText], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "Nyaburu_Margret_Daniela_CV.txt";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         zIndex: 1000,
//         backgroundColor: "#fdf5e6",
//         boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//         width: "100%",
//       }}
//     >
//       <div className="d-flex align-items-center justify-content-between px-4 py-2">
//         {/* Left side image/logo */}
//         <div>
//           <img
//             src={pic3}
//             alt="Logo"
//             style={{
//               height: "50px",
//               width: "50px",
//               borderRadius: "50%", 
//               objectFit: "cover",
//             }}
//           />
//         </div>

//         {/* Right side Nav Items */}
//         <Nav className="custom-navbar" activeKey={activePage} style={{ gap: "15px" }}>
//           <Nav.Item>
//             <Nav.Link as={Link} to="/" onClick={() => setActivePage("home")} style={{ color: "brown" }}>
//               Home
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link as={Link} to="/about" onClick={() => setActivePage("about")} style={{ color: "brown" }}>
//               About
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link as={Link} to="/skills" onClick={() => setActivePage("skills")} style={{ color: "brown" }}>
//               Skills
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link as={Link} to="/projects" onClick={() => setActivePage("projects")} style={{ color: "brown" }}>
//               Projects
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link as={Link} to="/contact" onClick={() => setActivePage("contact")} style={{ color: "brown" }}>
//               Contact
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Button
//               className="custom-button ms-3"
//               onClick={downloadCV}
//               style={{ backgroundColor: "brown", borderColor: "brown" }}
//             >
//               Download CV
//             </Button>
//           </Nav.Item>
//         </Nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import pic3 from "../images/pic3.jpeg";
import { colors, fonts } from "../theme";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add a subtle shadow/background shift once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu automatically whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const downloadCV = () => {
    // NOTE: this is still the placeholder text-file download from the
    // original component. Swap this out once you tell me where the real
    // CV asset (PDF) lives in the project — see my message below.
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

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        .dp-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(247, 240, 228, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
          transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .dp-navbar--scrolled {
          background: ${colors.cream};
          box-shadow: 0 8px 24px rgba(58, 36, 21, 0.08);
          border-bottom-color: ${colors.oatDeep};
        }
        .dp-navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 32px;
          position: relative;
        }
        .dp-navbar__logo {
          display: inline-flex;
          text-decoration: none;
        }
        .dp-navbar__logo img {
          height: 46px;
          width: 46px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid ${colors.coffee};
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .dp-navbar__logo:hover img {
          transform: scale(1.08) rotate(-4deg);
          box-shadow: 0 6px 18px rgba(107, 66, 38, 0.35);
        }
        .dp-navbar__links--desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .dp-navlink {
          position: relative;
          font-family: ${fonts.body};
          font-size: 15px;
          font-weight: 500;
          color: ${colors.espresso};
          text-decoration: none;
          padding: 6px 2px;
          transition: color 0.25s ease;
        }
        .dp-navlink::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: ${colors.gold};
          transition: width 0.3s ease;
        }
        .dp-navlink:hover,
        .dp-navlink.is-active {
          color: ${colors.coffee};
        }
        .dp-navlink:hover::after,
        .dp-navlink.is-active::after {
          width: 100%;
        }
        .dp-cv-btn {
          font-family: ${fonts.body};
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: ${colors.cream};
          background: ${colors.coffee};
          border: none;
          border-radius: 999px;
          padding: 10px 22px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .dp-cv-btn:hover {
          background: ${colors.coffeeDark};
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(78, 47, 25, 0.35);
        }
        .dp-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .dp-hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: ${colors.espresso};
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .dp-hamburger.is-open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .dp-hamburger.is-open span:nth-child(2) {
          opacity: 0;
        }
        .dp-hamburger.is-open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .dp-mobile-menu {
          display: none;
        }
        .dp-overlay {
          position: fixed;
          inset: 0;
          background: rgba(58, 36, 21, 0.35);
          z-index: 900;
        }
        @media (max-width: 991px) {
          .dp-navbar__links--desktop {
            display: none;
          }
          .dp-hamburger {
            display: flex;
          }
          .dp-mobile-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: ${colors.cream};
            overflow: hidden;
            max-height: 0;
            padding: 0 28px;
            box-shadow: 0 12px 24px rgba(58, 36, 21, 0.12);
            transition: max-height 0.45s ease, padding 0.45s ease;
          }
          .dp-mobile-menu.is-open {
            max-height: 480px;
            padding: 10px 28px 26px;
          }
          .dp-mobile-link {
            font-family: ${fonts.body};
            font-size: 17px;
            font-weight: 600;
            color: ${colors.espresso};
            text-decoration: none;
            padding: 13px 0;
            border-bottom: 1px solid ${colors.oatDeep};
            opacity: 0;
            transform: translateY(-8px);
            transition: opacity 0.35s ease, transform 0.35s ease, color 0.25s ease;
          }
          .dp-mobile-menu.is-open .dp-mobile-link {
            opacity: 1;
            transform: translateY(0);
          }
          .dp-mobile-link.is-active,
          .dp-mobile-link:hover {
            color: ${colors.coffee};
          }
          .dp-cv-btn--mobile {
            margin-top: 16px;
            width: 100%;
            opacity: 0;
            transform: translateY(-8px);
            transition: opacity 0.35s ease, transform 0.35s ease, background 0.25s ease;
          }
          .dp-mobile-menu.is-open .dp-cv-btn--mobile {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .dp-navbar,
          .dp-navbar__logo img,
          .dp-navlink,
          .dp-navlink::after,
          .dp-cv-btn,
          .dp-hamburger span,
          .dp-mobile-menu,
          .dp-mobile-link,
          .dp-cv-btn--mobile {
            transition: none !important;
          }
        }
      `}</style>

      <header className={`dp-navbar ${scrolled ? "dp-navbar--scrolled" : ""}`}>
        <div className="dp-navbar__inner">
          <Link to="/" className="dp-navbar__logo" aria-label="Go to home">
            <img src={pic3} alt="Daniela's logo" />
          </Link>

          <nav className="dp-navbar__links--desktop" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`dp-navlink ${isActive(link.to) ? "is-active" : ""}`}
                aria-current={isActive(link.to) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <button className="dp-cv-btn" onClick={downloadCV}>
              Download CV
            </button>
          </nav>

          <button
            className={`dp-hamburger ${menuOpen ? "is-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`dp-mobile-menu ${menuOpen ? "is-open" : ""}`}>
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className={`dp-mobile-link ${isActive(link.to) ? "is-active" : ""}`}
                style={{ transitionDelay: menuOpen ? `${i * 0.05}s` : "0s" }}
                aria-current={isActive(link.to) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="dp-cv-btn dp-cv-btn--mobile"
              style={{ transitionDelay: menuOpen ? `${NAV_LINKS.length * 0.05}s` : "0s" }}
              onClick={downloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <div className="dp-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;