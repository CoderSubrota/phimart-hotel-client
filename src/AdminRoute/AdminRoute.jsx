import React from "react";
import { Navigate } from "react-router-dom";

const getUserRole = () => {
  // Safely retrieve user data from local storage
  const userData = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if ( token && userData ) {
    try {
      const user = JSON.parse(userData);
      return user.role;
    } catch (error) {
      console.error("Failed to parse user data:", error);
    }
  }
  return null;
};

const AdminRoute = ({ element }) => {
  const role = getUserRole();
  return role === "admin" ? element : <Navigate to="/" replace />;
};

export default AdminRoute;