"use client";
import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, MenuItem } from '@mui/material';

const BookingRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    numberOfGuests: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Request Submitted', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-300">
      <Paper elevation={3} className="p-6 max-w-md w-full bg-gray-300 mt-10 mb-10" >
        <Typography variant="h5" className="mb-4 text-center">
            <img src='/logotalentos.png' height={80} width={80} alt='logo' className='ml-40'/>
          Booking Request Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Event Type"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <MenuItem value="wedding">Wedding</MenuItem>
                <MenuItem value="birthday">Birthday Party</MenuItem>
                <MenuItem value="corporate">Corporate Event</MenuItem>
                <MenuItem value="concert">Concert</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Event Date"
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Number of Guests"
                name="numberOfGuests"
                type="number"
                value={formData.numberOfGuests}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Additional Notes"
                name="additionalNotes"
                multiline
                rows={4}
                value={formData.additionalNotes}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default BookingRequestForm;
