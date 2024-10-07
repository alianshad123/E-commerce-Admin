import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Dashboard.css'; // Custom CSS for styling
import Sidebar from '../subcomponents/Sidebar';

const Dashboard = ({ onLogout }) => {
  const weeklySalesData = [
    { day: 'Mon', sales: 400 },
    { day: 'Tue', sales: 300 },
    { day: 'Wed', sales: 500 },
    { day: 'Thu', sales: 200 },
    { day: 'Fri', sales: 700 },
    { day: 'Sat', sales: 600 },
    { day: 'Sun', sales: 400 },
  ];

  const totalSales = 15000;
  const todaysSales = 1200;
  const totalProfit = 6000;
  const totalExpense = 9000;

  return (
    <div>

    <Sidebar />
    <div className="dashboard-container">
        
      <h1 className="dashboard-title">Sales Dashboard</h1>

      <button onClick={onLogout} className="logout-button">Logout</button>
      
      {/* Metrics Cards */}
      <div className="metrics-cards">
        <div className="card">
          <h2>Total Sales</h2>
          <p>${totalSales.toLocaleString()}</p>
        </div>
        <div className="card">
          <h2>Today's Sale</h2>
          <p>${todaysSales.toLocaleString()}</p>
        </div>
        <div className="card">
          <h2>Total Profit</h2>
          <p>${totalProfit.toLocaleString()}</p>
        </div>
        <div className="card">
          <h2>Total Expense</h2>
          <p>${totalExpense.toLocaleString()}</p>
        </div>
      </div>

      {/* Weekly Sales Chart */}
      <div className="chart-container">
        <h2>Weekly Sales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklySalesData}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
