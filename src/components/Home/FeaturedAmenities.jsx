import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faSwimmer, faSpa } from "@fortawesome/free-solid-svg-icons";

const FeaturedAmenities = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Featured Amenities</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faUtensils} size="3x" className="mb-3 text-primary" />
              <h5>Exquisite Dining</h5>
              <p>Enjoy gourmet meals prepared by world-class chefs.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faSwimmer} size="3x" className="mb-3 text-primary" />
              <h5>Swimming Pool</h5>
              <p>Relax and refresh in our temperature-controlled pool.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faSpa} size="3x" className="mb-3 text-primary" />
              <h5>Spa & Wellness</h5>
              <p>Rejuvenate your mind and body with our spa treatments.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedAmenities;