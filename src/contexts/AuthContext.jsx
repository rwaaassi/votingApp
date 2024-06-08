import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const API_BASE_URL = "https://666481a8932baf9032ab49a5.mockapi.io/users"; 

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [votes, setVotes] = useState(
    () =>
      JSON.parse(localStorage.getItem("votes")) || {
        Book1: 0,
        Book2: 0,
        Book3: 0,
      }
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password");
      setLoading(false);
      return null;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const vote = (choice) => {
    const updatedVotes = { ...votes, [choice]: votes[choice] + 1 };
    setVotes(updatedVotes);
    localStorage.setItem("votes", JSON.stringify(updatedVotes));
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, votes, vote }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
