import { Container, Row, Col, Image, Button } from "react-bootstrap";
import profilePic from "../assets/images/clown.jpg"; // Replace with actual image path

export default function Home() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        {/* Left Column: Profile Image */}
        <Col md={6} className="text-center text-md-start">
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
          <h1>Hello, I'm Clown</h1>
          <p>
            Welcome to my portfolio. I am a lead software engineer and founder of Google.
            I'm passionate about building amazing things with technology.
          </p>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
}
