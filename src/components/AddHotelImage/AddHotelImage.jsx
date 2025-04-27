import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const HotelImageUpload = () => {
  const { id } = useParams(); // Hotel ID from the route
  const [hotelName, setHotelName] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // Fetch hotel name using the hotel ID
    const fetchHotel = async () => {
      try {
        const res = await axios.get(`https://phimart-hotel-server.onrender.com/api/hotels/${id}/`);
        setHotelName(res.data.name);
      } catch (err) {
        console.error("Failed to fetch hotel details", err);
      }
    };
    fetchHotel();
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);

    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("hotel", id);
    formData.append("image", image);

    try {
      console.log(formData) ;
      await axios.post(`https://phimart-hotel-server.onrender.com/api/hotels/${id}/images/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Image uploaded successfully!");
      setImage(null);
    } catch (err) {
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
    <Helmet>
      <title> Add Hotel Image </title>
    </Helmet>

    <Container className="w-50 mx-auto  shadow p-4 rounded" style={{margin:"10% 0px"}}>
      <h3 className="mb-4">Upload Image for: <strong>{hotelName}</strong></h3>
      <Form onSubmit={handleUpload}>
        <Form.Group className="mb-3">
          <Form.Label>Choose Hotel Image</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} required />
        </Form.Group>
        <Button type="submit" variant="primary" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Image"}
        </Button>
      </Form>
    </Container>
    </>
  );
};

export default HotelImageUpload;
