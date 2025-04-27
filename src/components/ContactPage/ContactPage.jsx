import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row className="justify-content-center">
        {/* Contact Information */}
        <Col md={4} className="mb-4">
          <div className="text-center">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-primary mb-2" />
            <p>Email: contact@example.com</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faPhone} size="2x" className="text-primary mb-2" />
            <p>Phone: +123456789</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="text-primary mb-2" />
            <p>Address: 123 Main Street, City, Country</p>
          </div>
        </Col>

        {/* Contact Form */}
        <Col md={6}>
          <Form action="https://formsubmit.co/itsectorcommunication@gmail.com" method="POST">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} placeholder="Enter your message" required />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;