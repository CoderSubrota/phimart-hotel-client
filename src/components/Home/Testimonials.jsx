import React from "react";
import { Container, Carousel } from "react-bootstrap";

const Testimonials = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">What Our Guests Say</h2>
    <Carousel indicators={false}>
      <Carousel.Item>
        <blockquote className="blockquote text-center">
          <p className="mb-3">"Amazing experience! Booked within minutes."</p>
          <footer className="blockquote-footer">Rafiq from Dhaka</footer>
        </blockquote>
      </Carousel.Item>
      <Carousel.Item>
        <blockquote className="blockquote text-center">
          <p className="mb-3">"Very smooth process and great support."</p>
          <footer className="blockquote-footer">Tania from Chittagong</footer>
        </blockquote>
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default Testimonials;
