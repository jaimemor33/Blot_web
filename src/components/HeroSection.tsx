import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Sparkles, PlayCircle, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [missedAppointments, setMissedAppointments] = useState(847);

  useEffect(() => {
    const interval = setInterval(() => {
      setMissedAppointments(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-4">
            {/* Logo corporativo para clínicas estéticas */}
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                {/* Cristal base */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-indigo-400 rounded-2xl transform rotate-12 shadow-2xl"></div>
                <div className="absolute inset-0.5 sm:inset-1 bg-gradient-to-br from-slate-900 to-purple-900 rounded-xl transform rotate-12"></div>
                
                {/* Elemento central - Diamante estético */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Ondas de tecnología */}
                    <div className="absolute -left-1.5 sm:-left-2 top-1/2 transform -translate-y-1/2">
                      <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                      <div className="w-0.5 h-1 sm:w-1 sm:h-2 bg-purple-400 rounded-full mt-0.5 sm:mt-1 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-indigo-400 rounded-full mt-0.5 sm:mt-1 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    
                    {/* Símbolo de diamante/cristal */}
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-lg flex items-center justify-center transform rotate-45">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-sm transform -rotate-45"></div>
                    </div>
                    
                    {/* Ondas de tecnología derecha */}
                    <div className="absolute -right-1.5 sm:-right-2 top-1/2 transform -translate-y-1/2">
                      <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-0.5 h-1 sm:w-1 sm:h-2 bg-cyan-400 rounded-full mt-0.5 sm:mt-1 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 rounded-full mt-0.5 sm:mt-1 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                </div>
                
                {/* Anillo exterior animado */}
                <div className="absolute -inset-1 sm:-inset-2 border border-white/20 sm:border-2 rounded-3xl animate-spin" style={{animationDuration: '25s'}}></div>
              </div>
            </div>
            
            {/* Tipografía corporativa */}
            <div className="flex flex-col ml-2 sm:ml-0">
              <div className="flex items-baseline space-x-1">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  Call<span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Craft</span>
                </h1>
                <div className="flex items-center space-x-0.5 sm:space-x-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-purple-400 tracking-wider">AI</span>
                </div>
              </div>
              <p className="text-xs sm:text-xs text-cyan-200 font-medium tracking-wide uppercase mt-0.5 sm:mt-1">
                Especialistas en Estética
              </p>
            </div>
          </div>
          <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
            Contacto
          </button>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-300/30 rounded-full text-purple-100 text-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Especializado en Medicina Estética
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              ¿Cuántos pacientes 
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text"> pierdes </span>
              por no atender a tiempo?
            </h1>
            
            <p className="text-xl text-slate-100 mb-8 leading-relaxed">
              <strong>Agentes de WhatsApp y llamadas</strong> especializados en clínicas estéticas. 
              <strong> Reduce no-shows hasta un 85%</strong> con recordatorios inteligentes.
            </p>

            {/* Services Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <MessageSquare className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="font-bold text-white mb-1">Agente WhatsApp</h3>
                <p className="text-sm text-slate-200">Reservas, consultas y recordatorios automáticos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <Phone className="w-8 h-8 text-purple-400 mb-2" />
                <h3 className="font-bold text-white mb-1">Agente Llamadas</h3>
                <p className="text-sm text-slate-200">Atención 24/7 especializada en estética</p>
              </div>
            </div>

            {/* Real-time Counter */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-200 mb-2">Citas perdidas hoy en clínicas estéticas:</p>
                  <div className="text-4xl font-bold text-purple-400 font-mono">
                    {missedAppointments.toLocaleString()}
                  </div>
                </div>
                <TrendingUp className="w-12 h-12 text-red-400" />
              </div>
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-purple-500 rounded-full animate-pulse" style={{width: '72%'}}></div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50">
                <PlayCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Ver Demo Especializado
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300">
                Calcular ROI para Mi Clínica
              </button>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main illustration */}
              <div className="w-80 h-80 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-60 h-60 bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-indigo-400/20 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-32 h-32 text-white" />
                </div>
              </div>
              
              {/* Animated rings */}
              <div className="absolute inset-0 animate-ping">
                <div className="w-80 h-80 border-4 border-purple-400/30 rounded-full"></div>
              </div>
              <div className="absolute inset-0 animate-ping" style={{animationDelay: '1s'}}>
                <div className="w-80 h-80 border-4 border-cyan-400/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;