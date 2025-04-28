import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id } = useParams(); // Hotel ID from URL params

  // Initialize review form state
  const [formData, setFormData] = useState({
    rating: "",
    comment: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const userKey = localStorage.getItem("user");
  const userInfo = userKey ? JSON.parse(userKey) : null;
  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
     const token = localStorage.getItem("token") ;
     console.log(token, formData) ;
      await axios.post(
        `https://hotel-server-r5s5.onrender.com/api/hotels/${id}/reviews/`,
        formData ,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      alert("Review submitted successfully!");
      setFormData({ rating: "", comment: "" }); // Reset form fields
    } catch (error) {
      if (error.response) {
        alert(
          error.response.data.error || "Failed to submit review. Please try again."
        );
      } else {
        alert("Failed to submit review. Please check your network and try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="my-5 w-50 shadow p-4 rounded">
      <h2 className="text-center mb-4">Submit a Review</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Rating (1-5)</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
            placeholder="Enter rating (1-5)"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            required
            placeholder="Write your comment here..."
          />
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          className="w-100"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    </Container>
  );
};

export default Review;