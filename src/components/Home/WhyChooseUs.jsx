import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";

const WhyChooseUs = () => (
  <Container className="my-5 text-center">
    <h2 className="mb-4">Why Choose Phimart?</h2>
    <Row>
      <Col md={4}>
        <CheckCircleFill className="text-primary mb-2" size={30} />
        <h5>Verified Listings</h5>
        <p>All hotels are verified for comfort and safety.</p>
      </Col>
      <Col md={4}>
        <CheckCircleFill className="text-primary mb-2" size={30} />
        <h5>Easy Booking</h5>
        <p>Book your stay in just a few clicks.</p>
      </Col>
      <Col md={4}>
        <CheckCircleFill className="text-primary mb-2" size={30} />
        <h5>24/7 Support</h5>
        <p>Our team is here whenever you need help.</p>
      </Col>
    </Row>
  </Container>
);

export default WhyChooseUs;
