import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HotelAddHotelButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("add-hotel/")} variant="success">
      Add Hotel
    </Button>
  );
};

export default HotelAddHotelButton;