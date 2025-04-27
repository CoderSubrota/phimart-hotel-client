import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent, faCalendarDay, faHotel } from "@fortawesome/free-solid-svg-icons";

const DealsSection = () => (
  <Container className="my-5 bg-light py-4 rounded">
    <h2 className="text-center mb-4">🔥 Hot Deals</h2>
    <p className="text-center text-muted">Grab these exclusive deals before they’re gone!</p>
    <Row>
      {/* Deal 1 */}
      <Col md={6}>
        <Card className="shadow-lg mb-4 border-0">
          <Card.Img
            src="/images/deal1.jpeg"
            style={{ height: "325px", borderRadius: "15px 15px 0 0" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold">
              <FontAwesomeIcon icon={faPercent} className="me-2 text-success" />
              50% Off - Cox's Bazar Hotels
            </Card.Title>
            <Card.Text>
              Experience luxury at half the price. This limited-time offer is valid for selected hotels in Cox's Bazar.
            </Card.Text>
            <Button variant="primary" className="w-100">
              <FontAwesomeIcon icon={faHotel} className="me-2" />
              View Deal
            </Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Deal 2 */}
      <Col md={6}>
        <Card className="shadow-lg mb-4 border-0">
          <Card.Img
            src="/images/deal2.jpeg"
            style={{ height: "325px", borderRadius: "15px 15px 0 0" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold">
              <FontAwesomeIcon icon={faCalendarDay} className="me-2 text-warning" />
              Weekend Discounts - 30% Off
            </Card.Title>
            <Card.Text>
              Enjoy a relaxing weekend with 30% discounts at selected luxury hotels. Book your escape now!
            </Card.Text>
            <Button variant="success" className="w-100">
              <FontAwesomeIcon icon={faHotel} className="me-2" />
              View Deal
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="text-center mt-4">
      <Col>
        <Button variant="outline-primary" className="px-4 py-2">
          More Deals
        </Button>
      </Col>
    </Row>
  </Container>
);

export default DealsSection;