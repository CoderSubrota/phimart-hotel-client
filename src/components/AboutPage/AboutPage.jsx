import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faUtensils, faSpa, faWifi, faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
     <Helmet>
      <title>About Page</title>
     </Helmet>

    <Container className="my-5">
      <h2 className="text-center mb-4">About Our Hotel</h2>
      <Row className="justify-content-center">
        {/* Hotel Introduction */}
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <h4>Welcome to Our Hotel</h4>
              <p>
                Our hotel is a luxurious retreat that combines comfort, elegance,
                and world-class amenities. Whether you're visiting for leisure or business,
                we aim to make your stay unforgettable. Enjoy the breathtaking views,
                exquisite dining, and unparalleled hospitality.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Features and Amenities */}
      <h3 className="text-center mb-4">Features & Amenities</h3>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faHotel} size="3x" className="mb-3 text-primary" />
              <h5>Luxurious Rooms</h5>
              <p>Elegant and spacious rooms designed for ultimate relaxation.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faUtensils} size="3x" className="mb-3 text-primary" />
              <h5>Exquisite Dining</h5>
              <p>Experience world-class cuisine at our fine dining restaurants.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faSpa} size="3x" className="mb-3 text-primary" />
              <h5>Spa & Wellness</h5>
              <p>Rejuvenate your mind and body with our relaxing spa treatments.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faWifi} size="3x" className="mb-3 text-primary" />
              <h5>Free Wi-Fi</h5>
              <p>Stay connected with our high-speed internet access throughout the hotel.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faSwimmer} size="3x" className="mb-3 text-primary" />
              <h5>Swimming Pool</h5>
              <p>Enjoy a refreshing dip in our temperature-controlled swimming pool.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default AboutPage;