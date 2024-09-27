"use client";
import React, { useState } from 'react';
import { Drawer, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation'; 

const App = () => {
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
        <List className="h-full bg-gray-900 text-white">
          <ListItem>
            <Typography variant="h6" className="text-center w-full">
              <img src="/logotalentos.png" alt="Talento Logo" className="h-8 mr-3" />TALENTO
            </Typography>
          </ListItem>
          {[
            { text: "Dashboard", path: "./dashboard" },
            { text: "Portfolio", path: "./portfolio" },
            { text: "Messages", path: "./messages" },
            { text: "Booking", path: "./bookings" },
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
            <h1 className="ml-96">BOOKINGS</h1>
          </Toolbar>
        </AppBar>

        <div className="mt-8">
          <div className="flex justify-between items-center bg-white p-4 rounded shadow-md">
            <div className="flex items-center">
              <img
                src="/john.jpg"
                alt="User Avatar"
                height={60}
                width={60}
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="font-semibold">John Tumulak</h2>
                <p>Paknaan, Mandaue City</p>
                <p>Wedding Event</p>
                <p>July 20, 2024 @ 5:00pm - 9:00pm</p>
              </div>
            </div>
            <div>
              <Button variant="contained" color="success" className="mr-2">Accept</Button>
              <Button variant="contained" color="error">Decline</Button>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white p-4 rounded shadow-md mb-5">
            <div className="flex items-center">
              <img
                src="/kris.jpg"
                alt="User Avatar"
                height={60}
                width={60}
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="font-semibold">Kris Oporto</h2>
                <p>Guizo, Mandaue City</p>
                <p>Birthday Event</p>
                <p>August 10, 2024 @ 7:00pm - 11:00pm</p>
              </div>
            </div>
            <div>
              <Button variant="contained" color="success" className="mr-2">Accept</Button>
              <Button variant="contained" color="error">Decline</Button>
            </div>
          </div>
        
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h2 className="font-semibold">Upcoming Bookings</h2>
              <div className="bg-white p-4 rounded shadow-md">
                <h3 className="font-semibold">July 2024</h3>
                <div className="flex justify-center my-4">
                  <div className="grid grid-cols-7 gap-2">
                    {[...Array(31)].map((_, i) => (
                      <div
                        key={i}
                        className={`p-2 rounded ${
                          [9, 14, 18].includes(i + 1) ? 'bg-red-500' : 'bg-green-500'
                        } text-white`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-semibold">Schedule July 9, 2024</h2>
              <div className="bg-white p-4 rounded shadow-md flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/ninz.jpg"
                    height={60}
                    width={60}
                    alt="User Avatar"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h2 className="font-semibold">Rey Garbo</h2>
                    <p>Tayud, Liloan</p>
                    <p>Wedding Event</p>
                    <p>July 9, 2024 @ 3:00pm - 7:00pm</p>
                  </div>
                </div>
                <Button variant="contained" color="primary">
                  Mark as Done
                </Button>
              </div>
              <h2 className="font-semibold mt-6">Schedule July 14, 2024</h2>
              <div className="bg-white p-4 rounded shadow-md flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/gar.jpg"
                    height={60}
                    width={60}
                    alt="User Avatar"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h2 className="font-semibold">James Garthcliff Albejos</h2>
                    <p>Opao, Mandaue City</p>
                    <p>Birthday Party</p>
                    <p>July 14, 2024 @ 5:00pm - 10:00pm</p>
                  </div>
                </div>
                <Button variant="contained" color="primary">
                  Mark as Done
                </Button>
              </div>
              <h2 className="font-semibold">Schedule July 18, 2024</h2>
              <div className="bg-white p-4 rounded shadow-md flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/ayji.png"
                    height={60}
                    width={60}
                    alt="User Avatar"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h2 className="font-semibold">Ian Jeoffrey Casul</h2>
                    <p>Pilipog, Cordova</p>
                    <p>Christening</p>
                    <p>July 9, 2024 @ 10:00am - 3:00pm</p>
                  </div>
                </div>
                <Button variant="contained" color="primary">
                  Mark as Done
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
