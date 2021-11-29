import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Profile from '../Profilecontainer/Home/Profile';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Profile />
      <Footer />
    </>
  );
};

export default Home;