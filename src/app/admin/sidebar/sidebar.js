import React from 'react';

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
        <li><a href="/authentication/login" className="text-white">Log Out</a></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
