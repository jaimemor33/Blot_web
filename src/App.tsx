import React from 'react';
import HeroSection from './components/HeroSection';
import LossCalculator from './components/LossCalculator';
import DemoSection from './components/DemoSection';
import UseCases from './components/UseCases';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <LossCalculator />
      <DemoSection />
      <UseCases />
      <Features />
      <Testimonials />
      <Comparison />
      <FinalCTA />
    </div>
  );
}

export default App;