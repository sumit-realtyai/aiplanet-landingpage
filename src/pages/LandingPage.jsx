import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkingOn from '../components/WorkingOn';
import Philosophy from '../components/Philosophy';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WorkingOn />
      <Philosophy />
      <WhoWeWorkWith />
      <Footer />
    </div>
  );
};

export default LandingPage;