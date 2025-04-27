import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faInfoCircle, faQuestionCircle, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5>
              <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
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
                  <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faFileAlt} className="me-2" />
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
                  {/* <FontAwesomeIcon icon={faFacebook} className="me-2" /> */}
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
                  {/* <FontAwesomeIcon icon={faInstagram} className="me-2" /> */}
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@phimart.com"
                  className="text-white text-decoration-none"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  support@phimart.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
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