import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const PopularHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get("https://hotel-server-r5s5.onrender.com/api/hotels/");
        setHotels(res.data);
      } catch (err) {
        setError(err.response?.data?.detail || "Failed to fetch hotels");
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      try {
        await axios.delete(`https://hotel-server-r5s5.onrender.com/api/hotels/${id}/`);
        setHotels(hotels.filter((hotel) => hotel.id !== id));
        alert("Hotel deleted successfully!");
      } catch (error) {
        console.error("Error deleting hotel:", error);
        alert("Failed to delete hotel.");
      }
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Popular Hotels</h2>

      {loading && <p className="text-center">Loading hotels...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      <Row>
        {hotels.map((hotel) => (
          <Col id="hotels" md={4} key={hotel.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={
                  hotel.images?.[0]?.image ||
                  "https://via.placeholder.com/300x200"
                }
                style={{ height: "285px", objectFit: "cover" }}
              />
              <Card.Body >
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>
                  {hotel.reviews?.length > 0 ? (
                    <>
                      <strong>Review:</strong> {hotel.reviews[0].comment}{" "}
                      (Rating: {hotel.reviews[0].rating})
                    </>
                  ) : (
                    "No reviews available."
                  )}
                </Card.Text>
                {userToken && (
                  <>
                    <Button
                      onClick={() => navigate(`/hotel/${hotel.id}`)}
                      variant="info"
                        className="me-2 my-2"
                    >
                      <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
                      Show Details
                    </Button>
                    <Button
                      className="mx-2 my-2"
                      onClick={() => navigate(`hotels/add-hotel/`)}
                      variant="success"
                    >
                      <FontAwesomeIcon icon={faPlus} className="me-1" />
                      Add Hotel
                    </Button>
                    <Button
                      variant="warning"
                      className="me-2 my-2"
                      onClick={() => navigate(`/edit-hotel/${hotel.id}`)}
                    >
                      <FontAwesomeIcon icon={faEdit} className="me-1" />
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="mx-2 my-2"
                      onClick={() => handleDelete(hotel.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="me-1" />
                      Delete
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularHotels;