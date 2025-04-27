import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const EditHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    price: "",
    name: "",
    address: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/hotels/${id}/`);
        setFormData(res.data);
      } catch (err) {
        setError(err.response?.data?.detail || "Failed to fetch hotel details");
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/hotels/${id}/`, formData);
      alert("Hotel updated successfully!");
      navigate("/hotels");
    } catch (error) {
      console.error("Error updating hotel:", error);
      alert("Failed to update hotel.");
    }
  };

  if (loading) return <p className="text-center">Loading hotel details...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Edit Hotel</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default EditHotel;