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
    <section id="hero" className="relative min-h-screen bg-deep-black overflow-hidden pt-24">
      {/* Premium Aesthetic Clinic Background Image with Masking */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%) brightness(25%) contrast(1.2)',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,1) 100%)',
        }}
      />

      {/* Gold Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-deep-black/40 via-deep-black/20 to-deep-black/60" />

      {/* Animated Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl opacity-30 z-0"></div>

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
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

        {/* Floating Elements */}
        <div className="absolute top-32 right-8 w-64 h-64 bg-gold/5 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-8 w-48 h-48 bg-gold/5 rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
