import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';     
import Footer from './footer';  
import TrendingSection from './TrendingSection'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <TrendingSection />
      <Footer />
    </div>
    
  );
}
export default App;

// import React from 'react';
// import Navbar from './Navbar';
// import HeroSection from './HeroSection';     
// import Footer from './footer';  
// import TrendingSection from './TrendingSection';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SearchResultsPage from "../pages/SearchResultsPage";

// function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <TrendingSection />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/search" element={<SearchResultsPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

