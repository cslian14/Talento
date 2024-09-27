"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Drawer, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Button, Typography, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ChatPage = () => {
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
            { text: "Bookings", path: "./bookings" },
            { text: "Log Out", path: "/" },
          ].map(({ text, path }, index) => (
            <ListItem button key={index} onClick={() => handleNavigation(path)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className="flex-1">
        <AppBar position="static" className="bg-gray-900">
          <Toolbar className="flex justify-between">
            <div className="flex items-center">
              <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <h1 className="ml-4">TALENTO</h1>
            </div>
          </Toolbar>
        </AppBar>
        <div className="flex h-full">
          <div className="w-1/3 bg-gray-200 p-4">
            <div className="text-gray-500 text-center font-semibold">
              Chat List
            </div>
            <div className="flex items-center bg-gray-300 text-black font-bold p-4 rounded">
              <img
                src="/kris.jpg"
                height={50}
                width={50}
                alt="User Avatar"
                className="rounded-full mr-3"
              />
              <div className="text-left">
                <h3 className="font-bold">Kris Justin Oporto</h3>
                <p className="text-gray-400 font-semibold">Will send later sir for more details sir.</p>
                <p className="text-gray-400 text-right font-light">9:05 AM</p>
              </div>
            </div>
            <div className="flex items-center bg-white-300 text-black font-bold p-4 rounded mt-4">
              <img
                src="/ninz.jpg"
                height={50}
                width={50}
                alt="User Avatar"
                className="rounded-full mr-3"
              />
              <div className="text-left">
                <h3 className="font-bold">Nino Rey P. Garbo</h3>
                <p className="text-gray-400 font-semibold">Hello sir, good morning. How much is your rate?</p>
                <p className="text-gray-400 text-right font-light">9:01 AM</p>
              </div>
            </div>
            <div className="flex items-center bg-white-300 text-black font-bold p-4 rounded mt-4">
              <img
                src="/john.jpg"
                height={50}
                width={50}
                alt="User Avatar"
                className="rounded-full mr-3"
              />
              <div className="text-left">
                <h3 className="font-bold">John Clifford Tumulak</h3>
                <p className="text-gray-400 font-semibold">Maayong Hapon sir, Are you available tonight?.</p>
                <p className="text-gray-400 text-right font-light">8:55 AM</p>
              </div>
            </div>
          </div>
          <div className="w-2/3 p-4">
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto">
                <div className="mb-4">
                  <div className="flex items-start mb-4">
                    <img
                      src="/kris.jpg"
                      height={40}
                      width={40}
                      alt="User Avatar"
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="bg-gray-200 p-2 rounded">What are the exact details of the event, sir?</p>
                      <p className="text-gray-400 text-xs">9:00 AM</p>
                    </div>
                  </div>
                  <div className="flex justify-end mb-4">
                    <div className="text-right">
                      <p className="bg-blue-500 text-white p-2 rounded">Will send later, sir for more details sir.</p>
                      <p className="text-gray-400 text-xs">9:05 AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <TextField
                  variant="outlined"
                  placeholder="Start typing..."
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
