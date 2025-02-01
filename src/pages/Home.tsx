import { Container, Row, Col, Image, Button } from "react-bootstrap";
import profilePic from "../assets/images/clown.jpg"; // Replace with actual image path

export default function Home() {
  return (
    <Container className="mt-5 home-container">
      <Row className="align-items-center text-center text-md-start">
        {/* Left Column: Profile Image */}
        <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
          <Image
            src={profilePic}
            alt="Clown"
            roundedCircle
            fluid
            width="400"
            height="400"
          />
        </Col>

        {/* Right Column: Text */}
        <Col md={6}>
          <Container>
            <h1 className="mb-4">Hi. I'm Clown.</h1>
            <p className="mb-5">
              Welcome to my world. I am a lead software engineer and founder of
              Google. I'm passionate about building amazing things with
              technology.
            </p>
            <Button variant="primary">Learn More</Button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
