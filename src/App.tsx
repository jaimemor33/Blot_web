import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import SolutionsSection from './components/SolutionsSection';
import ProcessSection from './components/ProcessSection';
import LossCalculator from './components/LossCalculator';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-deep-black text-white">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <SolutionsSection />
      <ProcessSection />
      <LossCalculator />
      <ContactSection />
    </div>
  );
}

export default App;
