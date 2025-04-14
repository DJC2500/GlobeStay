import React from "react";
import { AppBar, Toolbar, Button, Typography, Box, TextField } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          GlobeStay.com
        </Typography>
        <Box>
          <Button color="inherit">List Your Property</Button>
          <Button color="inherit">Support</Button>
          <Button color="inherit">Trips</Button>
          <Button color="inherit">Sign In</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;