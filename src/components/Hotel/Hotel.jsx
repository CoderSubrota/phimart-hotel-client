import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faInfoCircle, faStar, faComments, faEdit, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for user authentication token
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`https://hotel-server-r5s5.onrender.com/api/hotels/${id}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch hotel details");
        }
        const data = await response.json();
        setHotel(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading hotel details...</p>;
  }

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  if (!hotel) {
    return <p className="text-center">No hotel found.</p>;
  }

  // Prepare images for the gallery
  const images = hotel.images.map((image) => ({
    original: image.image,
    thumbnail: image.image,
    description: `Image ${image.id}`,
  }));

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">{hotel.name}</h2>
      <Row>
        {/* Hotel Details */}
        <Col md={6}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title className="fw-bold">
                <FontAwesomeIcon icon={faInfoCircle} className="me-2 text-primary" />
                {hotel.name}
              </Card.Title>
              <Card.Text>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-danger" />
                <strong>Address:</strong> {hotel.address}
                <br />
                <FontAwesomeIcon icon={faComments} className="me-2 text-info" />
                <strong>Description:</strong> {hotel.description}
                <div className="d-flex justify-content-around my-3">
                  {/* Conditionally render buttons if userToken exists */}
                  {userToken && (
                    <>
                      <NavLink to={`review/${hotel.id}`}>
                        <Button variant="info" className="me-2">
                          <FontAwesomeIcon icon={faEdit} className="me-1" />
                          Add Review
                        </Button>
                      </NavLink>
                      <NavLink to={`payment/${hotel.id}`}>
                        <Button variant="success" className="me-2">
                          <FontAwesomeIcon icon={faDollarSign} className="me-1" />
                          Buy Now
                        </Button>
                      </NavLink>
                      <NavLink to={`hotel-image/${hotel.id}`}>
                        <Button variant="secondary" className="mx-2">
                          <FontAwesomeIcon icon={faEdit} className="me-1" />
                          Upload Hotel Image
                        </Button>
                      </NavLink>
                    </>
                  )}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Image Gallery and Reviews */}
        <Col md={6}>
          <h5 className="fw-bold">
            <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
            Image Gallery:
          </h5>
          <ImageGallery items={images} />
          <h5 className="fw-bold mt-4">
            <FontAwesomeIcon icon={faComments} className="me-2 text-primary" />
            Reviews:
          </h5>
          {hotel.reviews.length > 0 ? (
            hotel.reviews.map((review) => (
              <div key={review.id} className="mb-3">
                <strong>{review.user}</strong> (Rating: {review.rating}):
                <span> {review.comment}</span>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HotelDetails;