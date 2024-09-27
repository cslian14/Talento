"use client";
import React, { useState } from "react";
import { Drawer, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Typography, Box, Button, Avatar,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    toggleDrawer(false);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const posts = [
    {
      id: 1,
      name: "Karl M.",
      date: "June 27, 2024",
      description:
        "Looking for multi-talented performer that can sing and dance for my son's birthday.",
      event: "Event: Birthday",
      location: "Location: Umapad, Mandaue City",
      dateTime: "August 5, 2024, Tuesday (5:00pm-6:00pm)",
      tags: ["Singer", "Dancer", "Sole Singer", "Hip Hop Dancer", "Male or Female"],
      appliedCount: 2,
    },
    {
      id: 2,
      name: "Ninz Garbo",
      date: "August 1, 2024",
      description:
        "I am looking for a Singer and Guitarist for my resto bar. Please apply as soon as possible.",
      event: "Event: Resto Bar",
      location: "Location: Umapad, Mandaue City",
      dateTime: "August 3, 2024, Tuesday (5:00pm-6:00pm)",
      tags: ["Singer", "Musician", "Sole Singer", "Guitarist", "Male or Female"],
      appliedCount: 2,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
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
            DASHBOARD
        </h1>
            <div>
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Box className="p-6">
          {posts.map((post) => (
            <Box
              key={post.id}
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
              >
                Apply
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}
