import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projects from "./pages/Projects"; 
import Home from "./pages/Home"; 
import AboutMe from "./pages/AboutMe";

import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "black",
        padding: "10px 20px",
        color: "white"
      }}>
        <h3 style={{ margin: 0 }}>Sonali Sakhare</h3>

        <div>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/projects" style={linkStyle}>Projects</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </div>

        <div style={{ width: "60px" }}></div>
      </nav>

      {/* Page Content */}
      <div style={{ padding: "20px", textAlign: "center", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer style={{
        background: "gray",
        textAlign: "center",
        padding: "10px"
      }}>
        <p>© 2026 Sonali Portfolio</p>
      </footer>

    </BrowserRouter>
  )
}

const linkStyle = {
  color: "white",
  margin: "10px",
  textDecoration: "none"
};

export default App;