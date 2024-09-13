import React from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserCard = ({ name, email, role }) => (
  <div className="bg-white shadow-md rounded-lg p-4 w-72">
    <h2 className="text-xl font-bold">{name}</h2>
    <p className="text-gray-600">{email}</p>
    <p className="text-gray-600">Role: {role}</p>
    <div className="flex justify-between mt-4">
      <Button variant="contained" color="primary" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
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

const UserManagement = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">MANAGE USER ACCOUNTS</h1>
      <div className="flex space-x-6">
        <UserCard name="Ninz Garbo" email="Nino@gmail.com" role="customer" />
        <UserCard name="John" email="John@gmail.com" role="admin" />
      </div>
    </div>
  </div>
);

export default UserManagement;

