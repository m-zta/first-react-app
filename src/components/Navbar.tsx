// Documentation on react-bootstrap: https://react-bootstrap.netlify.app/
// Documentation on react-router components: https://v5.reactrouter.com/web/guides/primary-components

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"; // to create the navbar
import { Link } from "react-router-dom"; // to create links in the navbar to different pages of the app
import { Form, FormControl, Button } from "react-bootstrap"; // to create a search bar in the navbar

import pokerCards from "../assets/images/poker-cards.png"; // to import the logo image

import "../assets/styles/navbar.css";

export default function MyNavbar() {
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
            <NavDropdown title="More" id="basic-nav-dropdown">
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
          <Form className="d-flex">
            {/* d-flex makes the form flex */}
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Go</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
