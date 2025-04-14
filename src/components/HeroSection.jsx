import React from "react";
import { AppBar, Toolbar, Button, Typography, Box, TextField } from "@mui/material";

// const Navbar = () => {
//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//           GlobeStay.com
//         </Typography>
//         <Box>
//           <Button color="inherit">List Your Property</Button>
//           <Button color="inherit">Support</Button>
//           <Button color="inherit">Trips</Button>
//           <Button color="inherit">Sign In</Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        backgroundImage: "url('./hero2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Explore your place to stay
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

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//     </>
//   );
// };

// export default App;

export default HeroSection;


