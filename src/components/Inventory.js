// src/components/Inventory.js
import React from 'react';
import Sidebar from '../subcomponents/Sidebar';

const Inventory = () => {
  return (
    <div>
         <Sidebar />
         <div className="content" style={{ marginLeft: '250px', padding: '20px' }}>
      <h1>Inventory Reports</h1>
      {/* Display inventory report */}
    </div>
    </div>
  );
};

export default Inventory;
