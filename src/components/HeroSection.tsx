import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [missedAppointments, setMissedAppointments] = useState(847);

  useEffect(() => {
    const interval = setInterval(() => {
      setMissedAppointments(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden group bg-[#050505]">
      {/* 1. THE CHOSEN IMAGE LAYER with Cinematic Slow Zoom Animation */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-in-out group-hover:scale-110"
        style={{
          backgroundImage: `url('https://r2.easyimg.io/3z621076j/c311415c-62b5-4569-9a8e-b9c53002440b.jpeg')`
        }}
      />

      {/* 2. THE DARK GRADIENT OVERLAY LAYER */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/50"></div>

      {/* 3. THE CONTENT LAYER */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 py-16 lg:py-24 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-gold mr-2" />
            <span className="text-gold font-semibold text-sm">Especializado en Medicina Estética</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Tu Agenda Llena.
            <br />
            Tu Recepción <span className="text-gold">Tranquila.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
            Sistemas de IA por WhatsApp y Voz que gestionan citas y recuperan pacientes <span className="text-gold font-semibold">24/7</span>. Sin bajas, sin esperas.
          </p>

          {/* Counter Card */}
          <div className="inline-block bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gold/30 rounded-2xl p-8 mb-12 backdrop-blur-sm">
            <p className="text-gray-400 font-light mb-2">Citas perdidas hoy en clínicas estéticas:</p>
            <div className="text-5xl font-bold text-gold font-mono">{missedAppointments.toLocaleString()}</div>
            <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden max-w-xs mx-auto">
              <div className="h-full bg-gradient-to-r from-gold to-yellow-500" style={{ width: '72%' }}></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gold hover:bg-yellow-500 text-deep-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-gold text-lg w-full sm:w-auto"
            >
              Solicitar Auditoría
              <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="px-8 py-4 bg-gold/10 border-2 border-gold hover:bg-gold/20 text-gold font-bold rounded-lg transition-all duration-300 text-lg w-full sm:w-auto"
            >
              Ver Soluciones
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
