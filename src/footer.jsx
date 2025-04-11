import React from 'react';
import { Box, Button, Grid, TextField, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
 

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', py: 6, px: { xs: 4, md: 10 } }}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">
            Globe Stay<span style={{ color: '#fff' }}>.com</span>
          </Typography>
          <Box mt={2}>
            <Typography variant="body2" gutterBottom>Subscribe to our Newsletter</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                variant="standard"
                placeholder="Email address"
                InputProps={{
                  disableUnderline: true,
                  sx: { bgcolor: 'white', borderRadius: 1, px: 1, py: 0.5, mr: 1, flex: 1 },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#b68c5a',
                  '&:hover': { bgcolor: '#a0784b' },
                  minWidth: '40px',
                }}
              >
                &gt;
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="subtitle2" gutterBottom>Services</Typography>
          <Typography variant="body2">Email Marketing</Typography>
          <Typography variant="body2">Campaigns</Typography>
          <Typography variant="body2">Branding</Typography>
          <Typography variant="body2">Offline</Typography>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="subtitle2" gutterBottom>About</Typography>
          <Typography variant="body2">Our Story</Typography>
          <Typography variant="body2">Benefits</Typography>
          <Typography variant="body2">Team</Typography>
          <Typography variant="body2">Careers</Typography>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="subtitle2" gutterBottom>Help</Typography>
          <Typography variant="body2">FAQs</Typography>
          <Typography variant="body2">Contact Us</Typography>
        </Grid>

        <Grid item xs={12} md={2} display="flex" flexDirection="column" alignItems="flex-end">
          <Typography variant="body2" gutterBottom>Ready to get started?</Typography>
          <Button variant="contained" sx={{ bgcolor: '#b68c5a', '&:hover': { bgcolor: '#a0784b' } }}>
            Get started
          </Button>
        </Grid>
      </Grid>

      <Box mt={5} display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box display="flex" gap={2}>
          <Typography variant="caption">Terms & Conditions</Typography>
          <Typography variant="caption">Privacy Policy</Typography>
          <Typography variant="caption">&copy; 2025 GlobeStay. All rights reserved.</Typography>
        </Box>

        <Box display="flex" gap={1}>
          <IconButton sx={{ color: 'white' }}><Facebook /></IconButton>
          <IconButton sx={{ color: 'white' }}><Twitter /></IconButton>
          <IconButton sx={{ color: 'white' }}><Instagram /></IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
