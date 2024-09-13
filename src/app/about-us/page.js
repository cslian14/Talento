import React from 'react';
import { Container, Typography, Grid, Avatar, Box, Paper } from '@mui/material';

const teamMembers = [
  {
    name: 'John Clifford Tumulak',
    role: 'Project Manager',
    bio: 'John is the visionary behind our company, leading with innovation and passion.',
    avatarUrl: '/john.jpg',
  },
  {
    name: 'Ian Jeoffrey Casul',
    role: 'Hipster',
    bio: 'Ian is the leading person in doing documentations and other important matters.',
    avatarUrl: 'ayji.png',
  },
  {
    name: 'Nino Rey Garbo',
    role: 'Hacker',
    bio: 'Nino is the technical mastermind, building and scaling our technology platform.',
    avatarUrl: 'ninz.jpg',
  },
  {
    name: 'James Garthcliff Albejos',
    role: 'Tester',
    bio: 'James is the one who tests the system that Nino and Kris made.',
    avatarUrl: 'gar.jpg',
  },
  {
    name: 'Kris Justin Oporto',
    role: 'Hacker',
    bio: 'Kris is the technical expert and has a lot of projects developed through his career.',
    avatarUrl: 'kris.jpg',
  },
];

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      {/* Heading */}
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        We are a team of passionate individuals dedicated to delivering the best talent and performance for your events.
      </Typography>

      {/* Team Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <Avatar
                  src={member.avatarUrl}
                  alt={member.name}
                  sx={{ width: 100, height: 100, margin: '0 auto 16px auto' }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {member.role}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  {member.bio}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Our Mission Section */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" paragraph>
          Our mission is to help event organizers or individuals to find the suitable talent for their specific events. 
          Also we want to help talents to be discovered and perform their talents to earn money.  
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
