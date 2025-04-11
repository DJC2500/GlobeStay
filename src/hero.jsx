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

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
};

export default App;


// import React from 'react';
// import { TextField, Button } from '@mui/material';

// const Hero = () => {
//   return (
//     <div className="relative">
//       {/* Full Page Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('./hero2.jpg')",
//           height: "100vh", // Full height
//           zIndex: -1, // So the background stays behind
//         }}
//       />
      
//       {/* Navbar with Logo */}
//       <nav className="bg-blue-600 py-4 z-10 relative">
//         <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//           <div className="text-white text-2xl font-semibold">GlobeStay.com</div>
//           <div className="flex space-x-8">
//             <button className="text-[#1D1D1D] font-medium text-[20px] leading-[24px] tracking-[0.1px]">List Your Property</button>
//             <button className="text-[#1D1D1D] font-medium text-[20px] leading-[24px] tracking-[0.1px]">Support</button>
//             <button className="text-[#1D1D1D] font-medium text-[20px] leading-[24px] tracking-[0.1px]">Trips</button>
//             <button className="text-[#1D1D1D] font-medium text-[20px] leading-[24px] tracking-[0.1px]">Sign In</button>
//           </div>
//         </div>
//       </nav>

//       {/* Curved Dip (SVG Path) */}
//       <div className="relative z-10">
//         <svg
//           className="absolute bottom-0 left-0 w-full"
//           viewBox="0 0 1440 320"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="#ffffff"
//             d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
//           ></path>
//         </svg>
//       </div>

//       {/* Overlay Box with Form Elements */}
//       <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-xl z-20">
//         <h2 className="text-3xl font-bold text-center mb-6">Find Your Stay</h2>
        
//         {/* Search Hotel Section */}
//         <div className="flex flex-col space-y-4">
//           <TextField
//             label="Location"
//             variant="outlined"
//             fullWidth
//             className="bg-white"
//           />
//           <div className="flex space-x-4">
//             <TextField
//               label="Check-in"
//               type="date"
//               variant="outlined"
//               fullWidth
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//             <TextField
//               label="Check-out"
//               type="date"
//               variant="outlined"
//               fullWidth
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </div>
//           <TextField
//             label="Guests"
//             variant="outlined"
//             fullWidth
//             className="bg-white"
//           />
//         </div>

//         {/* Search Button */}
//         <div className="text-center mt-6">
//           <Button variant="contained" color="primary" fullWidth>
//             Search Hotel
//           </Button>
//         </div>
//       </div>

//       {/* Centered Headings */}
//       <div className="relative z-20 text-center mt-40">
//         <h1 className="text-5xl font-bold text-white mb-4">List Your Property</h1>
//         <h1 className="text-5xl font-bold text-white mb-4">Support</h1>
//         <h1 className="text-5xl font-bold text-white mb-4">Trips</h1>
//         <h1 className="text-5xl font-bold text-white mb-4">Sign In</h1>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import { ImageList, ImageListItem } from "@mui/material";


// const Hero = () => {
//     return (
//       <div className="relative bg-blue-600 text-white">
//         <ImageList cols={1}>
//             <ImageListItem>
//                 <img src="./hero2.jpg" alt="Hero" loading="lazy" />
//             </ImageListItem>
//         </ImageList>
  
    
//       {/* Curved Dip */}
//       <div className="relative">
//         <svg
//           className="absolute bottom-0 left-0 w-full"
//           viewBox="0 0 1440 320"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="#EAE0C8"
//             fillOpacity="0.8"
//             d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Hero;


