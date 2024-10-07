import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Products.css'; // Custom styling for the product list

const Products = () => {

  const navigate = useNavigate();
  // Initial state with sample dress items
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Floral Dress',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Red Evening Gown',
      price: 89.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Casual Summer Dress',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const handleProductClick = (id) => {
    
    localStorage.setItem('auth','false');
   navigate('/login') // Redirect to login page
  };


  return (
    <div className="products-container">
      <h1>Dress Collection</h1>
      
      {/* Add Product Button */}
      <Link to="/add-product" className="add-product-button">
        + Add Product
      </Link>

      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-card"
          onClick={() => handleProductClick(product.id)} >
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
