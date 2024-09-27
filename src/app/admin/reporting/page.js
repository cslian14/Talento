"use client";
import React, { useState } from 'react';
import { Rating, Drawer, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Typography, Grid, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AdminDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
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
              <img src="/logotalentos.png" height={50} width={50} />
              TALENTO
            </Typography>
          </ListItem>
          {[ 
            { text: "Dashboard", path: "/admin/dashboard" }, 
            { text: "Reporting", path: "/admin/reporting" }, 
            { text: "Bookings", path: "/admin/bookings" }, 
            { text: "Users", path: "/admin/users" }, 
            { text: "Log Out", path: "/" }
          ].map(({ text }, index) => (
            <ListItem button key={index}>
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
            <h1 className="ml-auto">Reportings</h1>
          </Toolbar>
        </AppBar>

        <div className="mt-8">
          <Typography variant="h4" className="mb-4">User Reports</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className="shadow-md">
                <CardContent>
                  <Typography variant="h5">Total Users</Typography>
                  <Typography variant="h6" color="textSecondary">1,254</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className="shadow-md">
                <CardContent>
                  <Typography variant="h5">Active Users</Typography>
                  <Typography variant="h6" color="textSecondary">890</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className="shadow-md">
                <CardContent>
                  <Typography variant="h5">Inactive Users</Typography>
                  <Typography variant="h6" color="textSecondary">364</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h4" className="mt-8 mb-4">User Feedback</Typography>
          <div className="bg-white p-4 rounded shadow-md">
            <ul>
              <li>
                <strong>User:</strong> Nino Garbo <br/>
                <p><strong>Feedback: </strong>Great experience, really loved the service! Will book again soon.</p>
              </li><br/>
              <li>
                <strong>User:</strong> Kobe Cutamora
                <p><strong>Feedback: </strong>Very irritating, the performance is not same as in his portfolio.</p>
              </li>
              <br/>
              <li>
                <strong>User:</strong> Karl Macho Pepoots
                <p><strong>Feedback: </strong>Easy to use, very detailed.</p>
              </li>
            </ul>
          </div>

          <Typography variant="h4" className="mt-8 mb-4">Statistics</Typography>
          <div className="bg-white p-4 rounded shadow-md">
            <Typography variant="h6">Overall Rating</Typography>
            <p>Total Posts: 925</p>
            <p>Total Events: 1,203</p>
            <p>Total Bookings: 524</p>
            <p>Average Rating: 4.3/5</p>
            <Rating name="read-only" value={4.3} readOnly></Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
