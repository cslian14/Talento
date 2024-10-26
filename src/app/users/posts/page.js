"use client";
import Head from 'next/head';
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Modal,
  Box,
} from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ClientDashboard() {
  const [showFormPopup, setShowFormPopup] = useState(false);

  const samplePosts = [
    {
      id: 1,
      eventName: "Wedding Singer",
      eventDate: "2024-11-12",
      description: "Looking for a wedding singer to perform at an evening wedding event.",
      location: "New York, NY",
    },
    {
      id: 2,
      eventName: "Corporate DJ",
      eventDate: "2024-12-01",
      description: "Need a DJ to host a corporate party with a fun vibe.",
      location: "Los Angeles, CA",
    },
    {
      id: 3,
      eventName: "Jazz Band for Gala",
      eventDate: "2024-10-30",
      description: "Seeking a jazz band for a high-end gala event in downtown Chicago.",
      location: "Chicago, IL",
    },
  ];

  return (
    <>
      <Head>
        <title>TALENTO - Post Opportunities for Talents</title>
      </Head>
      <div>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logotalentos.png" alt="Talento Logo" className="h-8 mr-3" />
              <div className="text-xl font-bold">TALENTO</div>
            </div>
            <div className="space-x-6">
              <a href="/" className="hover:text-gray-700">Home</a>
              <a href="/posts" className="hover:text-gray-700">Posts</a>
              <a href="/profile" className="hover:text-gray-700">Profile</a>
            </div>
          </div>
        </nav>

        <section className="bg-gray-100 py-8">
          <div className="container mx-auto text-center">
            <Button
              variant="contained"
              className="bg-blue-500"
              onClick={() => setShowFormPopup(true)}
            >
              Post an Event
            </Button>
          </div>
        </section>

        <section className="container mx-auto py-16">
          <h2 className="text-2xl font-bold text-center mb-6">Posts from other Users</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePosts.map((post) => (
              <motion.div whileHover={{ scale: 1.05 }} key={post.id}>
                <Card className="shadow-lg">
                  <CardContent>
                    <Typography variant="h6" className="mb-2">
                      {post.eventName}
                    </Typography>
                    <Typography className="text-gray-600 mb-2">
                      <strong>Date:</strong> {post.eventDate}
                    </Typography>
                    <Typography className="text-gray-600 mb-2">
                      <strong>Location:</strong> {post.location}
                    </Typography>
                    <Typography className="text-gray-600 mb-4">
                      <strong>Description:</strong> {post.description}
                    </Typography>
                    <Button
                      variant="contained"
                      className="bg-green-500 hover:bg-green-400"
                      onClick={() => alert('Application submitted!')}
                    >
                      Add Comment
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Modal open={showFormPopup} onClose={() => setShowFormPopup(false)}>
          <Box
            sx={{
              width: 600,
              bgcolor: 'background.paper',
              padding: 4,
              borderRadius: 2,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: 24,
              overflowY: 'auto',
            }}
          >
            <Typography variant="h6" component="h2" className="mb-4 text-center">
              Post Your Event Opportunity
            </Typography>
            <form>
              <TextField
                label="Event Name"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Event Date"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
              />
              <TextField
                label="Location"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Description"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
              />
              <div className="flex justify-end mt-4">
                <Button variant="contained" color="primary" type="submit">
                  Submit Post
                </Button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
}
