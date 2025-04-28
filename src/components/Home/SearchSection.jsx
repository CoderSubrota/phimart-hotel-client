import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

const HotelSearch = () => {
  const [query, setQuery] = useState(""); // State for search query
  const [hotels, setHotels] = useState([]); // State for hotel list
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Fetch hotels by query
      const response = await axios.get(
        `https://hotel-server-r5s5.onrender.com/api/hotels/?name=${query}`
      );
      setHotels(response.data); // Update state with fetched hotels
    } catch (err) {
      setError("Failed to fetch hotels. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Search Hotels</h2>

      {/* Search Form */}
      <Form onSubmit={handleSearch} className="d-flex mb-4">
        <Form.Control
          type="text"
          placeholder="Enter hotel name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <Button type="submit" variant="primary" className="ms-2">
          Search
        </Button>
      </Form>

      {/* Results Section */}
      {loading && <h5 className="text-center">Searching...</h5>}
      {error && <h5 className="text-center text-danger">{error}</h5>}

      {hotels.length > 0 && (
        <ListGroup>
          {hotels.map((hotel, index) => (
            <ListGroup.Item key={index}>
              <strong>{hotel.name}</strong>
              <p>{hotel.description}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {hotels.length === 0 && !loading && !error && (
        <h5 className="text-center text-muted">No hotels found.</h5>
      )}
    </Container>
  );
};

export default HotelSearch;