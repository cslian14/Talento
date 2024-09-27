"use client";
import React, { useState } from "react";
import { Drawer, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Button, Typography, Rating, Tabs, Tab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const PortfolioPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const router = useRouter();

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    router.push(path);
    toggleDrawer(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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
            <Typography variant="h6" className="text-center ml-96 flex-auto font-serif">
              PORTFOLIO
              <Button color="primary" className="ml-96 border-4 border-gray-600 float-end">
                      Edit Portfolio
                    </Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="mt-8">
          <div className="bg-white p-6 rounded shadow-md">
            <div className="relative">
              <img
                src="/kris.jpg"
                alt="Performance"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute -bottom-10 left-6 flex items-center">
                <img
                  src="/kris.jpg"
                  alt="Kris Justin Oporto"
                  className="rounded-full border-4 border-gray-400 h-40 w-40 mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">Kris Justin Oporto</h2>
                  <p>Classical Singer</p>
                  <p>
                    <span className="material-icons text-gray-500"></span> Guizo, Mandaue
                  </p>
                  <Rating name="read-only" value={4} readOnly />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <Tabs value={tabValue} onChange={handleTabChange} centered>
              <Tab label="Overview" />
              <Tab label="Reviews" />
              <Tab label="Photos & Videos" />
            </Tabs>
            <div className="mt-4 text-center text-gray-600">
              {tabValue === 0 && (
                <div>
                  <Typography variant="h6" className="mb-4">
                    Overview
                  </Typography>
                  <p className="text-black font-serif">I am Kris Justin Oporto, 29 years old from Guizo, Mandaue City unahan parkmall. I am a good singer and I've been in many 
                    contests like Tawag ng Tanghalan sa Showtime, Gilas Pilipinas, Talentadong Pinoy, The Voice, Family Feud.
                  </p>
                  <Button variant="contained" color="primary" className="mr-2 mt-4 mb-10">
                      Edit Overview
                    </Button>
                </div>
              )}
              {tabValue === 1 && (
                <div>
                  <Typography variant="h6" className="mb-4">
                    Reviews
                  </Typography>
                  <p>Coming Soon</p>
                </div>
              )}
              {tabValue === 2 && (
                <div>
                  <Typography variant="h6" className="mb-4">
                    Photos & Videos
                  </Typography>
                  <Button variant="outlined" color="primary" className="mb-10">
                      Add Photo/Video
                    </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
