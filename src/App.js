import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import './index.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import PhotoGallery from './Components/PhotoGallery';
import About from './Components/About';
import Footer from './Components/Footer';

const App = () => {
  useEffect(() => {
    // AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans h-screen w-screen ">
      <Navbar />
      <HeroSection />
      <PhotoGallery />
      <About />
      <Footer />
    </div>
  );
};

export default App;
