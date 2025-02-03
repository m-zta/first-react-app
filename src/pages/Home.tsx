import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import profilePic from "../assets/images/clown.jpg";

export default function Home() {
  return (
    <Container className="home-container">
      <Row className="align-items-center text-center text-md-start">
        {/* Left Column: Profile Image
        md={6} means that the column will take up 6/12 = 50% 
        of the width on medium screens */}
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
            <Link to="/about" className="btn btn-primary">
              {/* Button would've worked fine, but vscode was showing an error at
              the as=Link prop, so I chose to use the Link component instead */}
              Learn More
            </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
