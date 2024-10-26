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
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tabs,
  Tab,
  Rating,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const EditPortfolioPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [editProfile, setEditProfile] = useState({
    name: "Kris Justin Oporto",
    profession: "Classical Singer",
    location: "Guizo, Mandaue City",
    overview:
      "I am Kris Justin Oporto, 29 years old from Guizo, Mandaue City. I am a good singer and I've participated in contests like Tawag ng Tanghalan sa Showtime, Gilas Pilipinas, Talentadong Pinoy, The Voice, Family Feud.",
  });
  const [openPhotoDialog, setOpenPhotoDialog] = useState(false);
  const router = useRouter();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    router.push(path);
    toggleDrawer(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleInputChange = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    setOpenDialog(false);
  };

  const handleSavePhotoVideo = () => {
    setOpenPhotoDialog(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Drawer */}
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
            { text: "Booking", path: "./bookings" },
            { text: "Log Out", path: "/" },
          ].map(({ text, path }, index) => (
            <ListItem button key={index} onClick={() => handleNavigation(path)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <AppBar position="static" className="bg-gray-900">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="text-center ml-96 flex-auto font-serif">
              EDIT PORTFOLIO
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Profile Section */}
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
                  <h2 className="text-xl font-semibold">{editProfile.name}</h2>
                  <p>{editProfile.profession}</p>
                  <p>{editProfile.location}</p>
                  <Rating name="read-only" value={4} readOnly />
                  <Button variant="contained" color="primary" className="mt-4" onClick={() => setOpenDialog(true)}>
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-16">
            <Tabs value={tabValue} onChange={handleTabChange} centered>
              <Tab label="Overview" />
              <Tab label="Reviews" />
              <Tab label="Photos & Videos" />
            </Tabs>

            {/* Tab Content */}
            <div className="mt-4">
              {tabValue === 0 && (
                <div className="text-center">
                  <Typography variant="h6" className="mb-4">
                    Overview
                  </Typography>
                  <p className="text-black font-serif">{editProfile.overview}</p>
                  <Button variant="contained" color="primary" className="mr-2 mt-4" onClick={() => setOpenDialog(true)}>
                    Edit Overview
                  </Button>
                </div>
              )}
              {tabValue === 1 && (
                <div className="text-center">
                  <Typography variant="h6" className="mb-4">
                    Reviews
                  </Typography>
                  <p>Coming Soon</p>
                </div>
              )}
              {tabValue === 2 && (
                <div className="text-center">
                  <Typography variant="h6" className="mb-4">
                    Photos & Videos
                  </Typography>
                  <Button variant="outlined" color="primary" className="mb-10" onClick={() => setOpenPhotoDialog(true)}>
                    Add Photo/Video
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Edit Profile Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit your profile details below:</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              name="name"
              value={editProfile.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Profession"
              type="text"
              fullWidth
              name="profession"
              value={editProfile.profession}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Location"
              type="text"
              fullWidth
              name="location"
              value={editProfile.location}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Overview"
              type="text"
              multiline
              rows={4}
              fullWidth
              name="overview"
              value={editProfile.overview}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveChanges} color="primary">
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>

        {/* Add Photo/Video Dialog */}
        <Dialog open={openPhotoDialog} onClose={() => setOpenPhotoDialog(false)}>
          <DialogTitle>Add Photo/Video</DialogTitle>
          <DialogContent>
            <DialogContentText>Add a photo or video to showcase your talent:</DialogContentText>
            <TextField autoFocus margin="dense" label="Upload" type="file" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenPhotoDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSavePhotoVideo} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default EditPortfolioPage;
