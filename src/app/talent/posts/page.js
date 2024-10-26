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
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PostsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    router.push(path);
    toggleDrawer(false);
  };

  const samplePosts = [
    {
      id: 1,
      name: "Karl M.",
      date: "June 27, 2024",
      description:
        "Looking for a wedding singer to perform at an evening wedding event.",
      event: "Event: Wedding",
      location: "New York, NY",
      dateTime: "November 12, 2024, Tuesday (5:00pm-6:00pm)",
      tags: ["Singer", "Evening", "Solo", "Male or Female"],
      appliedCount: 3,
    },
    {
      id: 2,
      name: "Ninz Garbo",
      date: "August 1, 2024",
      description:
        "Looking for a DJ for my corporate party. Apply as soon as possible.",
      event: "Event: Corporate Party",
      location: "Los Angeles, CA",
      dateTime: "December 1, 2024, Friday (7:00pm-11:00pm)",
      tags: ["DJ", "Corporate", "Party", "Male or Female"],
      appliedCount: 5,
    },
    {
      id: 3,
      name: "Sophia G.",
      date: "September 15, 2024",
      description:
        "Seeking a jazz band for a high-end gala event in downtown Chicago.",
      event: "Event: Gala",
      location: "Chicago, IL",
      dateTime: "October 30, 2024, Wednesday (6:00pm-9:00pm)",
      tags: ["Jazz Band", "Gala", "Band", "Male or Female"],
      appliedCount: 4,
    },
  ];

  const handleApply = (postId) => {
    router.push(`/application/${postId}`);
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
              Posts
            </h1>
            <div>
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <Box className="p-6">
          <Typography variant="h4" className="text-center font-bold mb-6">
            Available Talent Opportunities
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePosts.map((post) => (
              <motion.div whileHover={{ scale: 1.05 }} key={post.id}>
                <Box
                  className="bg-white shadow-lg rounded-lg mb-6 p-6 flex"
                >
                  <Avatar className="bg-gray-800 mr-4">{post.name[0]}</Avatar>
                  <Box className="flex-grow">
                    <Typography variant="h6">{post.name}</Typography>
                    <Typography variant="subtitle2" className="text-gray-500">
                      {post.date}
                    </Typography>
                    <Typography className="mt-2">{post.description}</Typography>
                    <Typography className="text-sm text-gray-500 mt-1">
                      {post.event}
                    </Typography>
                    <Typography className="text-sm text-gray-500">
                      {post.location}
                    </Typography>
                    <Typography className="text-sm text-gray-500">
                      {post.dateTime}
                    </Typography>
                    <Box className="mt-2 flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-200 px-3 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    className="self-start"
                    onClick={() => handleApply(post.id)}
                  >
                    Apply
                  </Button>
                </Box>
              </motion.div>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
}
