import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import joker from "../assets/images/joker.jpg";

import "../assets/styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <Container>
        <Row className="justify-content-md-center first-row">
          <Col xs lg="2" className="first-col">
            1 of 3
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}
