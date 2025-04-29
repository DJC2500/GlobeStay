import React from "react";
import { Button, Typography, Box, TextField } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        backgroundImage: "url('./hero2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold"}} >
      {/* Explore your next stay */}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 3, bgcolor: "rgba(0,0,0,0.5)", p: 2, borderRadius: 2 }}>
        <TextField variant="outlined" placeholder="Location" sx={{ bgcolor: "white" }} />
        <TextField variant="outlined" placeholder="Check-in" sx={{ bgcolor: "white" }} />
        <TextField variant="outlined" placeholder="Checkout" sx={{ bgcolor: "white" }} />
        <TextField variant="outlined" placeholder="Guests" sx={{ bgcolor: "white" }} />
        <Button variant="contained" color="primary">Search</Button>
      </Box>
    </Box>
  );
};


export default HeroSection;


