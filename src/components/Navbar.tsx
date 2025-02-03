// Documentation on react-bootstrap: https://react-bootstrap.netlify.app/
// Documentation on react-router components: https://v5.reactrouter.com/web/guides/primary-components

import { useState, useEffect } from "react"; // Add this line
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useTheme } from "../hooks/useTheme"; // Import the custom hook

import pokerCards from "../assets/images/poker-cards.png";

import "../assets/styles/navbar.css";

export default function MyNavbar() {
  const { darkMode, toggleDarkMode } = useTheme(); // Use the hook
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <Navbar expand="md" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={pokerCards} className="navbar-logo" alt="logo" /> Bloody App
        </Navbar.Brand>{" "}
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            <NavDropdown title="More" menuVariant="light" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/more1">First item</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/more2">Second item</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/more3">Separated item</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Dark Mode Toggle */}
          <Form className="d-flex align-items-center">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleDarkMode} // Use function from hook
                checked={darkMode}
              />
              <span className="slider round"></span>
            </label>
          </Form>

          {/* Language Dropdown */}
          <NavDropdown title={language.toUpperCase()} id="language-dropdown" className="ms-3">
            <NavDropdown.Item onClick={() => setLanguage("en")}>English</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setLanguage("de")}>Deutsch</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setLanguage("es")}>Español</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
