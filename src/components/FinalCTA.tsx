import React, { useState, useEffect } from 'react';
import { Clock, Shield, TrendingUp, Phone, Mail, ArrowRight, Gift, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 22
  });
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, phone });
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Urgency Banner */}
          <div className="inline-flex items-center px-6 py-3 bg-red-500/90 backdrop-blur-sm border border-red-400 rounded-full text-white font-semibold mb-8 animate-pulse">
            <Clock className="w-5 h-5 mr-2" />
            ¡OFERTA LIMITADA! Solo para las primeras 50 clínicas
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cada no-show que permites
            <br />
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              es dinero que pierdes para siempre
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            No dejes que tus pacientes se vayan a la competencia. 
            Actúa ahora y asegura el futuro de tu clínica estética.
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Oferta especial termina en:</h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white rounded-2xl p-4 mb-2">
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-purple-200 text-sm uppercase tracking-wide">
                    {unit === 'days' ? 'Días' : unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Min' : 'Seg'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-purple-500/90 to-cyan-500/90 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-white mr-4" />
              <h3 className="text-3xl font-bold text-white">Oferta Exclusiva para Clínicas</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">60 días</div>
                <div className="text-lg">Completamente GRATIS</div>
                <div className="text-sm text-purple-200">Sin compromiso de permanencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">€0</div>
                <div className="text-lg">Setup especializado</div>
                <div className="text-sm text-purple-200">Valorado en €1,200</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">€1,000</div>
                <div className="text-lg">Compensación garantizada</div>
                <div className="text-sm text-purple-200">Si no reduces no-shows 85% en 90 días</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white mr-3" />
                <h4 className="text-xl font-bold text-white">Garantía Total para Clínicas Estéticas</h4>
              </div>
              <p className="text-white/90 text-center">
                Si no reduces tus no-shows en <strong>85% o más</strong> en los primeros 90 días, 
                te devolvemos el 100% de tu dinero + €1,000 de compensación por las molestias.
              </p>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Comenzar Ahora - 100% Gratis para Tu Clínica
            </h3>
            <p className="text-gray-600 mb-8">
              Solo necesitamos 2 datos para preparar tu CallCraft AI especializado en estética
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email de la clínica"
                    required
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Teléfono directo"
                    required
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-xl"
              >
                <span className="flex items-center justify-center">
                  Activar CallCraft AI en Mi Clínica
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <div className="text-sm text-gray-500 text-center">
                ✅ Sin tarjeta de crédito • ✅ Setup en 24-48h • ✅ Soporte médico especializado 24/7
              </div>
            </form>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-8 text-gray-600">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">847</div>
                  <div className="text-sm">Clínicas transformadas</div>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2.8M+</div>
                  <div className="text-sm">Citas gestionadas</div>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm">Reducción no-shows</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;