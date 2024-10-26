"use client";
import React, { useState } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
  TextField,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useRouter, useParams } from "next/navigation";

export default function ApplicationPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const { postId } = useParams();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    router.push(path);
    toggleDrawer(false);
  };

  const handleSubmitApplication = () => {
    alert("Application submitted successfully!");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: 240, flexShrink: 0, "& .MuiDrawer-paper": { width: 240 } }}
        variant="temporary"
      >
        <List className="h-full bg-gray-900 text-white">
          <ListItem>
            <Typography variant="h6" className="text-center w-full">
              <img src="/logotalentos.png" alt="Talento Logo" className="h-8 mr-3" />
              TALENTO
            </Typography>
          </ListItem>

          {[
            { text: "Dashboard", path: "./dashboard" },
            { text: "Portfolio", path: "./portfolio" },
            { text: "Posts", path: "./posts" },
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

      <Box className="flex-grow">
        <AppBar position="sticky" className="bg-gray-900">
          <Toolbar className="flex justify-between">
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <h1 className="text-center font-serif font-semibold h-4">
              Application for Post #{postId}
            </h1>
            <div>
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <Box className="p-6">
          <Typography variant="h5" className="text-center font-bold mb-6">
            Fill Out Your Application
          </Typography>
          <Box className="bg-white shadow-lg rounded-lg p-6">
            <Avatar className="bg-gray-800 mr-4 mb-4"></Avatar>
            <Typography variant="h6" className="mb-4">
              Application Details
            </Typography>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              className="mb-4"
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              className="mb-4"
            />
            <TextField
              label="Portfolio Link"
              variant="outlined"
              fullWidth
              className="mb-4"
            />
            <TextField
              label="Why do you think you're a great fit for this position?"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              className="mb-4"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmitApplication}
            >
              Submit Application
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
