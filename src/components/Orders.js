// src/components/Orders.js
import React from 'react';
import Sidebar from '../subcomponents/Sidebar';

const Orders = () => {
  return (
    <div>
      <Sidebar />
      <div className="content" style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>Orders</h1>
        <p>List of orders placed by customers will be shown here.</p>
      </div>
    </div>
  );
};

export default Orders;
