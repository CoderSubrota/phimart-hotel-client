import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5>
              <i className="fas fa-info-circle me-2"></i>
              Phimart Hotels
            </h5>
            <p>
              Your trusted partner for easy hotel bookings, exclusive deals, and seamless travel experiences.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  <i className="fas fa-info-circle me-2"></i>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  <i className="fas fa-envelope me-2"></i>
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white text-decoration-none">
                  <i className="fas fa-question-circle me-2"></i>
                  FAQ
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white text-decoration-none">
                  <i className="fas fa-file-alt me-2"></i>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </Col>

          {/* Connect With Us Section */}
          <Col md={4} className="mb-3">
            <h5>Connect With Us</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fab fa-facebook me-2"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fab fa-instagram me-2"></i>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@phimart.com"
                  className="text-white text-decoration-none"
                >
                  <i className="fas fa-envelope me-2"></i>
                  support@phimart.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone me-2"></i>
                +880 123 456 789
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="pt-3 border-top border-secondary mt-3">
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Phimart Hotels. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;