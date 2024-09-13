import React from 'react';
import { Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const AnalyticsCard = ({ title, value, icon, percentage, increase }) => (
  <div className="bg-white shadow-md rounded-lg p-6 w-80">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <div className="flex items-center space-x-4">
      <div className="text-3xl font-bold">{value}</div>
      {icon}
    </div>
    <div className={`flex items-center mt-2 ${increase ? 'text-green-500' : 'text-red-500'}`}>
      {increase ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      <span className="ml-2">{percentage}%</span>
    </div>
  </div>
);
const Sidebar = () => (
    <div className="bg-gray-900 text-white w-64 h-screen p-6">
      <div className="flex items-center space-x-4">
        <img src="/logotalentos.png" alt="Talento Logo" className="h-12" />
        <h2 className="text-2xl font-bold">Talento</h2>
      </div>
      <div className="mt-6">
        <p>Welcome admin John!</p>
      </div>
      <nav className="mt-10">
        <ul className="space-y-4">
          <li><a href="/admin/dashboard" className="text-white">Dashboard</a></li>
          <li><a href="#" className="text-white">Reporting</a></li>
          <li><a href="#" className="text-white">Bookings</a></li>
          <li><a href="/admin/users" className="text-white">Users</a></li>
          <li><a href="/" className="text-white">Log Out</a></li>
        </ul>
      </nav>
    </div>
  );

const Dashboard = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard Analytics</h1>
      <div className="grid grid-cols-3 gap-6">
        <AnalyticsCard
          title="Total Users"
          value="1,254"
          percentage={4.5}
          increase={true}
          icon={<i className="fas fa-users text-blue-500 text-4xl"></i>}
        />
        <AnalyticsCard
          title="Income Generated"
          value="$12,345"
          percentage={2.1}
          increase={false}
          icon={<i className="fas fa-dollar-sign text-green-500 text-4xl"></i>}
        />
        <AnalyticsCard
          title="Bookings"
          value="512"
          percentage={1.2}
          increase={true}
          icon={<i className="fas fa-calendar-alt text-purple-500 text-4xl"></i>}
        />
      </div>
    </div>
  </div>
);

export default Dashboard;
