import React from 'react';
import { Box, Grid, Typography, TextField, Button, Card, CardMedia } from '@mui/material';

const destinations = [
  { city: 'Dubai', image: '/images/dubai.jpg' },
  { city: 'Paris', image: '/images/paris.jpg' },
  { city: 'Tbilisi', image: '/images/tbilisi.jpg' },
  { city: 'Istanbul', image: '/images/istanbul.jpg' },
  { city: 'Taiwan', image: '/images/taiwan.jpg' },
];

const TrendingSection = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', py: 8, px: { xs: 4, md: 10 } }}>
      <Grid container spacing={4}>
        {/* Left side - Newsletter */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Stay in the know
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 450, mb: 3 }}>
            Sign up to get marketing emails from Bookme.com, including promotions, rewards, travel experiences,
            and information about Bookme.com and Booking.com Transport Limited’s products and services.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, maxWidth: 500, mb: 1 }}>
            <TextField
              fullWidth
              variant="filled"
              placeholder="Your email address"
              sx={{
                bgcolor: 'white',
                borderRadius: 1,
                input: { color: 'black' },
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: '#C1986C',
                '&:hover': { bgcolor: '#a87d55' },
                borderRadius: 1,
                px: 3,
              }}
            >
              Subscribe
            </Button>
          </Box>
          <Typography variant="caption" color="#aaa">
            You can opt out anytime. See our{' '}
            <Box component="span" sx={{ color: '#C1986C', textDecoration: 'underline', cursor: 'pointer' }}>
              privacy statement.
            </Box>
          </Typography>
        </Grid>

        {/* Right side - Trending destinations */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Trending destinations
          </Typography>
          <Typography variant="body2" sx={{ color: '#aaa', mb: 2 }}>
            Most popular choices for travelers from Iran
          </Typography>
          <Grid container spacing={2}>
            {destinations.map((dest, index) => (
              <Grid item xs={6} key={index}>
                <Card sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={dest.image}
                    alt={dest.city}
                    height="120"
                    sx={{ filter: 'brightness(70%)' }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      left: 12,
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    {dest.city}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrendingSection;
