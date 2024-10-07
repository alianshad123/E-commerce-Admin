// src/components/Customers.js
import React from 'react';
import Sidebar from '../subcomponents/Sidebar';

const Customers = () => {
  return (
    <div>
        <Sidebar />
        <div className="content" style={{ marginLeft: '250px', padding: '20px' }}>
      <h1>Customers</h1>
      {/* List customers with details */}
    </div>
    </div>
  );
};

export default Customers;
