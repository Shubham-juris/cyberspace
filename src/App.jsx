import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import UnderMaintenans from './Components/UnderMaintenans/UnderMaintenans';
import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs';
import FeaturedCompanies from './Components/FeaturedCompanies/FeaturedCompanies';


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <FeaturedJobs/>
    <FeaturedCompanies/>
    <Footer/>
    <UnderMaintenans/>
    </>
  );
}

export default App;
