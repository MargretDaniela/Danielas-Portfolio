// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Contact from "./components/Contact"; 
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div style={{ marginTop: "70px" }}>
//         <Routes>
//           <Route path="/" element={<Home /> } />
//           <Route path="" element={<Navbar/>} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills/> } />
//           <Route path="/projects" element={<Projects/> }/>
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

function AppShell() {
  const { colors: palette, mode, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: palette.cream,
        minHeight: "100vh",
        transition: "background-color 0.3s ease",
      }}
    >
      <Navbar />

      {/* Temporary floating toggle — will move into the redesigned Navbar
          once we get to that component, so it sits next to your other nav controls. */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: `1px solid ${palette.oatDeep}`,
          background: palette.oat,
          color: palette.espresso,
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {mode === "dark" ? "☀️" : "🌙"}
      </button>

      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </Router>
  );
}

export default App;