// Documentation on react-bootstrap: https://react-bootstrap.netlify.app/
// Documentation on react-router components: https://v5.reactrouter.com/web/guides/primary-components

import { useState } from "react"; // for managing dark mode
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"; // to create the navbar
import { Link } from "react-router-dom"; // to create links in the navbar to different pages of the app
import { Form } from "react-bootstrap"; // to create a search bar in the navbar

import pokerCards from "../assets/images/poker-cards.png"; // to import the logo image

import "../assets/styles/navbar.css";

export default function MyNavbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    console.log(`Language changed to ${lang}`); // Replace with actual language change logic
  };

  return (
    <Navbar expand="md" bg="primary" data-bs-theme="dark">
      {/* data-bs-theme is the new way. variant is deprecated */}
      <Container>
        {/* Container is not required, but adds padding */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={pokerCards}
            className="d-inline-block align-top"
            alt="logo"
          />{" "}
          Bloody App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* toggle button shown on small screens */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* collapsible content */}
          <Nav className="me-auto">
            {/* me-auto pushes the content to the right.*/}
            <Nav.Link as={Link} to="/">
              {/* as={Link} is required to make the Nav.Link a link */}
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            <NavDropdown
              title="More"
              menuVariant="dark"
              id="basic-nav-dropdown"
            >
              {/* NavDropdown is a dropdown menu */}
              <NavDropdown.Item as={Link} to="/more1">
                First item
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/more2">
                Second item
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* Divider is a horizontal line */}
              <NavDropdown.Item as={Link} to="/more3">
                separated element
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex align-items-center">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleDarkMode}
                checked={darkMode}
              />
              <span className="slider round"></span>
            </label>
          </Form>

          <NavDropdown
            title={language.toLowerCase()}
            id="language-dropdown"
            className="ms-3"
          >
            <NavDropdown.Item onClick={() => changeLanguage("en")}>
              English
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage("de")}>
              Deutsch
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage("es")}>
              Español
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
