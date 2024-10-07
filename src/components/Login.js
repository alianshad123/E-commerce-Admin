// src/components/Login.js
import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
import AuthService from "../network/AuthService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error message

    try {
      const response = await AuthService.login(username, password);
      console.log("Login Successful:", response.success);

      // Assuming the response contains a token or success indication
      if (response.success) {
        // Adjust this based on your response structure
        localStorage.setItem("auth", "true"); // Store authentication status
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError("Invalid credentials."); // Handle invalid login
      }
    } catch (err) {
      setError(err.message || "Login failed."); // Handle errors
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Admin Login</h2>
        <p className="login-subtitle">Please enter your login details</p>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
