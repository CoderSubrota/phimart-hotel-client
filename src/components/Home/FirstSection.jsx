import React from "react";
import { Container, Button } from "react-bootstrap";
import '../css/HeroSection.css';

const HeroSection = () => (
  <div className="hero-section" style={{backgroundImage:"url('images/Hero.jpeg')"}}>
    <div className="overlay" />
    <Container className="text-center">
      <h1 className="display-4 fw-bold">Book Your Dream Stay</h1>
      <p className="lead text-info fw-bold">Discover top-rated hotels with the best prices</p>
     <a href="#hotels">
     <Button variant="primary" size="lg" >Explore Hotels</Button>
     </a>
    </Container>
  </div>
);

export default HeroSection;