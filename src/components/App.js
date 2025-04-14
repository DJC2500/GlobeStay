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

