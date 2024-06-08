import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const API_BASE_URL = "https://666481a8932baf9032ab49a5.mockapi.io/users"; // Replace with your actual API base URL

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      // Redirect based on user role or other criteria
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password");
    }
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
