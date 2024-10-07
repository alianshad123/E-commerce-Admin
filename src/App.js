import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import Inventory from "./components/Inventory";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import React, { useState, useEffect } from "react";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setIsAuthenticated(auth === 'true'); // Check if auth is 'true'
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth"); // Remove the auth token
    setIsAuthenticated(false); // Update state to reflect logged out status
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard onLogout={handleLogout} />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-product"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Customers />
            </PrivateRoute>
          }
        />
        <Route
          path="/inventory"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Inventory />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
