// src/components/LogoutButton.js
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear user data
    navigate("/login"); // Navigate to login page
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
