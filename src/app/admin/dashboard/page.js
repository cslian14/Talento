"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { Drawer, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    router.push(path); 
    toggleDrawer(false); 
  };

  return (
    <div className="flex h-screen">
      <Drawer
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{ width: 240, flexShrink: 0, "& .MuiDrawer-paper": { width: 240 } }}
        variant="temporary"
      >
        <List className="h-full bg-gray-800 text-white">
          <ListItem>
            <Typography variant="h6" className="text-center w-full">
              <img src="/logotalentos.png" alt="Talento Logo" className="h-8 mr-3" />TALENTO
            </Typography>
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/admin/dashboard")}>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/admin/reporting")}>
            <ListItemText primary="Reportings" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/admin/bookings")}>
            <ListItemText primary="Bookings" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/admin/users")}>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/")}>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>

      <div className="flex-1">
        <AppBar position="static" className="bg-gray-900">
          <Toolbar className="flex justify-between">
            <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <h1 className="ml-4">ADMIN DASHBOARD</h1>
          </Toolbar>
        </AppBar>

        <div className="flex-1 p-10 bg-gray-400">
          <h1 className="text-3xl font-bold mb-6">Dashboard Analytics</h1>
          <div className="grid grid-cols-3 gap-6 ">
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
    </div>
  );
};

export default Dashboard;
