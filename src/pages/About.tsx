import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import joker from "../assets/images/joker.jpg";

export default function About() {
  return (
    <div className="container">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
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
