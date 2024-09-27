"use client";
import React, { useState } from 'react';
import { Drawer, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Button, Typography, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

const AdminSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    router.push(path);
    toggleDrawer(false);
  };

  const bookingsData = {
    upcoming: [
      {
        name: "John Tumulak",
        location: "Paknaan, Mandaue City",
        eventType: "Wedding Event",
        date: "July 20, 2024 @ 5:00pm - 9:00pm",
        avatar: "/john.jpg"
      },
      {
        name: "Kris Oporto",
        location: "Guizo, Mandaue City",
        eventType: "Birthday Event",
        date: "August 10, 2024 @ 7:00pm - 11:00pm",
        avatar: "/kris.jpg"
      }
    ],
    inProgress: [
      {
        name: "Rey Garbo",
        location: "Tayud, Liloan",
        eventType: "Wedding Event",
        date: "July 9, 2024 @ 3:00pm - 7:00pm",
        avatar: "/ninz.jpg"
      }
    ],
    done: [
      {
        name: "James Garthcliff Albejos",
        location: "Opao, Mandaue City",
        eventType: "Birthday Party",
        date: "July 14, 2024 @ 5:00pm - 10:00pm",
        avatar: "/gar.jpg"
      }
    ]
  };

  return (
    <div className="flex h-screen">
      <Drawer
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{ width: 240, flexShrink: 0, "& .MuiDrawer-paper": { width: 240 } }}
        variant="temporary"
      >
        <List className="h-full bg-gray-900 text-white">
          <ListItem>
            <Typography variant="h6" className="text-center w-full">
              <img src="/logotalentos.png" alt="Talento Logo" className="h-8 mr-3" />TALENTO
            </Typography>
          </ListItem>
          {[
            { text: "Dashboard", path: "./dashboard" },
            { text: "Reporting", path: "./reporting" },
            { text: "Boookings", path: "/admin/bookings" },
            { text: "Users", path: "./users" },
            { text: "Log Out", path: "/" },
          ].map(({ text, path }, index) => (
            <ListItem button key={index} onClick={() => handleNavigation(path)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className="flex-1 p-6">
        <AppBar position="static" className="bg-gray-900">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <h1 className="ml-4">TALENTO</h1>
            <h1 className="ml-auto">BOOKINGS</h1>
          </Toolbar>
        </AppBar>

        <div className="mt-8">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <h2 className="font-semibold">Upcoming Bookings</h2>
              {bookingsData.upcoming.map((booking, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-4 rounded shadow-md mb-5">
                  <div className="flex items-center">
                    <img src={booking.avatar} alt="User Avatar" height={60} width={60} className="rounded-full mr-4" />
                    <div>
                      <h2 className="font-semibold">{booking.name}</h2>
                      <p>{booking.location}</p>
                      <p>{booking.eventType}</p>
                      <p>{booking.date}</p>
                    </div>
                  </div>
                  <div>
                  <Button variant="contained" color="secondary">View</Button>
                  </div>
                </div>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <h2 className="font-semibold">In Progress Bookings</h2>
              {bookingsData.inProgress.map((booking, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-4 rounded shadow-md mb-5">
                  <div className="flex items-center">
                    <img src={booking.avatar} alt="User Avatar" height={60} width={60} className="rounded-full mr-4" />
                    <div>
                      <h2 className="font-semibold">{booking.name}</h2>
                      <p>{booking.location}</p>
                      <p>{booking.eventType}</p>
                      <p>{booking.date}</p>
                    </div>
                  </div>
                  <Button variant="contained" color="secondary">View</Button>
                </div>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <h2 className="font-semibold">Completed Bookings</h2>
              {bookingsData.done.map((booking, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-4 rounded shadow-md mb-5">
                  <div className="flex items-center">
                    <img src={booking.avatar} alt="User Avatar" height={60} width={60} className="rounded-full mr-4" />
                    <div>
                      <h2 className="font-semibold">{booking.name}</h2>
                      <p>{booking.location}</p>
                      <p>{booking.eventType}</p>
                      <p>{booking.date}</p>
                    </div>
                  </div>
                  <Button variant="contained" color="secondary">View</Button>
                </div>
              ))}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
