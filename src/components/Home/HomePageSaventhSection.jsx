import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const NewsletterSection = () => (
  <div className="bg-primary text-white py-5 mb-5 w-75 mx-auto rounded">
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <h4>Subscribe to Our Newsletter</h4>
          <p>Get the latest hotel deals and travel tips delivered to your inbox.</p>
        </Col>
        <Col md={6}>
          <Form className="d-flex">
            <Form.Control type="email" placeholder="Enter your email" className="me-2" />
            <Button variant="light">Subscribe</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
);

export default NewsletterSection;
