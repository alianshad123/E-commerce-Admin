import React, { useState } from 'react';
import './AddProduct.css'; // Import CSS
import AuthService from '../network/AuthService';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    code: '',
    quantity: '',
    image: '', // Image in Base64 format
    discountPercentage: '',
    originalPrice: '',
    rating: '',
    size: [], // Array to handle multiple size selection
  });

  // Handle input change for both text and file input
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
  
    if (type === 'checkbox') {
      // Handle multiple size selection
      let updatedSizes = [...product.size];
      if (checked) {
        updatedSizes.push(value); // Add the selected size
      } else {
        updatedSizes = updatedSizes.filter((size) => size !== value); // Remove unselected size
      }
      setProduct({ ...product, [name]: updatedSizes });
    } else if (type === 'file') {
      const file = files[0];

      if (!file) {
        console.error('No file selected');
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        setProduct({ ...product, image: reader.result }); // Store Base64 image in product.image
      };

      reader.onerror = (error) => {
        console.error('Error reading file: ', error);
      };

      reader.readAsDataURL(file); // Convert file to Base64 string
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  // Clear form fields after submission
  const clearFields = () => {
    setProduct({
      title: '',
      description: '',
      price: '',
      code: '',
      quantity: '',
      image: '',
      discountPercentage: '',
      originalPrice: '',
      rating: '',
      size: [],
    });
  };

  // Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit Base64 image string as imageUrl in backend
      console.log("product", JSON.stringify(product));
      //const payload = { ...product, imageUrl: product.image }; // Send Base64 image as imageUrl
      const response = await AuthService.addProducts(product);
      console.log(response);
      alert('Product added successfully!');
      clearFields(); // Clear form after submission
    } catch (error) {
      console.error('Failed to add product', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Product Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={product.title}
          placeholder="Product Title"
          required
        />

        <label htmlFor="description">Product Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={product.description}
          placeholder="Product Description"
          required
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={handleChange}
          value={product.price}
          placeholder="Price"
          required
        />

        <label htmlFor="originalPrice">Original Price</label>
        <input
          type="number"
          id="originalPrice"
          name="originalPrice"
          onChange={handleChange}
          value={product.originalPrice}
          placeholder="Original Price"
          required
        />

        <label htmlFor="discountPercentage">Discount Percentage</label>
        <input
          type="number"
          id="discountPercentage"
          name="discountPercentage"
          onChange={handleChange}
          value={product.discountPercentage}
          placeholder="Discount Percentage"
        />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          step="0.1"
          id="rating"
          name="rating"
          onChange={handleChange}
          value={product.rating}
          placeholder="Rating"
          required
        />

        <label htmlFor="code">Product Code</label>
        <input
          type="text"
          id="code"
          name="code"
          onChange={handleChange}
          value={product.code}
          placeholder="Product Code"
          required
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          onChange={handleChange}
          value={product.quantity}
          placeholder="Quantity"
          required
        />

        {/* Image Upload */}
        <div style={{ marginTop: '16px' }}>
          <label htmlFor="image" style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', display: 'block' }}>
            Product Image
          </label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
          {product.image && (
            <div style={{ marginTop: '16px' }}>
              <img src={product.image} alt="Product Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            </div>
          )}
        </div>

        {/* Size Selection */}
        <label htmlFor="size" className="size-label">Size</label>
        <div id="size" name="size" className="size-checkbox-group">
          <label className="size-checkbox-label">
            <input
              type="checkbox"
              name="size"
              value="S"
              onChange={handleChange}
              checked={product.size.includes("S")}
            />
            Small
          </label>
          <label className="size-checkbox-label">
            <input
              type="checkbox"
              name="size"
              value="M"
              onChange={handleChange}
              checked={product.size.includes("M")}
            />
            Medium
          </label>
          <label className="size-checkbox-label">
            <input
              type="checkbox"
              name="size"
              value="L"
              onChange={handleChange}
              checked={product.size.includes("L")}
            />
            Large
          </label>
          <label className="size-checkbox-label">
            <input
              type="checkbox"
              name="size"
              value="XL"
              onChange={handleChange}
              checked={product.size.includes("XL")}
            />
            Extra Large
          </label>
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
