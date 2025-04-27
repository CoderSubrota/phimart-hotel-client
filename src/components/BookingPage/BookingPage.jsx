import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const hotels = [
  {
    id: 1,
    name: "Luxury Hotel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFoo8y4kLV98oUwTZTAQCzqmlJUqOR0NLFg&s",
    price: "$200/night",
    description: "Experience ultimate comfort and elegance.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    id: 2,
    name: "Beach Resort",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0cXLc93xQPcS527g2S-iHTKzJGsmuezoZycjOCzN7VDSEskSptoJjbj13pxwT-9oU_k&usqp=CAU",
    price: "$150/night",
    description: "Relax by the ocean and enjoy beautiful sunsets.",
    rating: "⭐⭐⭐⭐"
  },
  {
    id: 3,
    name: "Mountain Retreat",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe91lmkQ2L86B_0m3dPKjzK3lt13pD_BHxwg&s",
    price: "$120/night",
    description: "Reconnect with nature in serene surroundings.",
    rating: "⭐⭐⭐⭐"
  },

];

const BookingPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" title='This all data are dummy'>Your Booking Hotels</h2>
      <Row>
        {hotels.map(hotel => (
          <Col md={4} key={hotel.id} className="mb-4">
            <Card>
              <Card.Img style={{height:"288px"}} variant="top" src={hotel.image} alt={hotel.name} />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>{hotel.description}</Card.Text>
                <Card.Text><strong>Price:</strong> {hotel.price}</Card.Text>
                <Card.Text><strong>Ratings:</strong> {hotel.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookingPage;