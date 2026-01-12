import React, { useState } from 'react';
import { Star, Play, Quote, TrendingUp, Calendar, Users } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Dra. Carmen Ruiz',
      business: 'Clínica Estética Bella Vida',
      location: 'Madrid',
      photo: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: '💉',
      rating: 5,
      quote: "CallCraft AI eliminó completamente nuestros no-shows. Antes perdíamos 8-10 citas diarias, ahora máximo 1. El ROI fue inmediato.",
      results: {
        before: '35% no-shows',
        after: '4% no-shows',
        revenue: '+€12,400/mes',
        period: '2 meses'
      },
      detailedStory: 'Los no-shows eran mi mayor dolor de cabeza. Perdíamos €15,000 mensuales en citas perdidas de botox y rellenos. CallCraft AI cambió todo con recordatorios inteligentes y gestión automática de listas de espera. Ahora tenemos 95% de ocupación.',
      businessType: 'aesthetic'
    },
    {
      name: 'Dr. Miguel Fernández',
      business: 'Centro de Cirugía Estética Premium',
      location: 'Barcelona',
      photo: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: '✨',
      rating: 5,
      quote: "El agente WhatsApp captura leads 24/7. El 40% de nuestras consultas de cirugía ahora llegan fuera del horario de oficina.",
      results: {
        before: '0 leads nocturnos',
        after: '25-30 leads/noche',
        revenue: '+€28,000/mes',
        period: '3 meses'
      },
      detailedStory: 'Las consultas de cirugía estética no esperan horarios de oficina. CallCraft AI captura esas consultas nocturnas y de fin de semana, califica automáticamente a los candidatos y programa las citas. Hemos triplicado nuestras consultas.',
      businessType: 'surgery'
    },
    {
      name: 'Dra. Ana López',
      business: 'Clínica Facial & Corporal',
      location: 'Valencia',
      photo: 'https://images.pexels.com/photos/5452273/pexels-photo-5452273.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: '🌟',
      rating: 5,
      quote: "La gestión automática de tratamientos corporales es increíble. Programa automáticamente las 6-8 sesiones de cada paciente.",
      results: {
        before: '60% abandono tratamientos',
        after: '15% abandono tratamientos',
        revenue: '+€18,600/mes',
        period: '4 meses'
      },
      detailedStory: 'Los tratamientos corporales requieren múltiples sesiones y seguimiento constante. CallCraft AI automatiza todo el proceso: recordatorios, reprogramaciones, seguimiento de resultados y programación de mantenimiento. La adherencia mejoró 300%.',
      businessType: 'body'
    },
    {
      name: 'Dra. Isabel Martín',
      business: 'Estética Avanzada Madrid',
      location: 'Madrid',
      photo: 'https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: '💎',
      rating: 5,
      quote: "El agente conoce todos nuestros tratamientos y precios. Responde consultas técnicas mejor que algunas recepcionistas.",
      results: {
        before: '50% consultas no atendidas',
        after: '2% consultas no atendidas',
        revenue: '+€9,800/mes',
        period: '6 semanas'
      },
      detailedStory: 'Recibíamos 200+ consultas diarias sobre tratamientos, precios y disponibilidad. Era imposible atender todo. CallCraft AI responde instantáneamente con información precisa, agenda citas y envía presupuestos automáticamente.',
      businessType: 'general'
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="py-20 bg-gradient-to-br from-cyan-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Testimonios de Clínicas Reales
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Historias reales de 
            <span className="text-purple-600"> clínicas estéticas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo doctores y clínicas de medicina estética han eliminado no-shows, 
            aumentado ocupación y multiplicado sus ingresos con CallCraft AI.
          </p>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-white shadow-xl border-2 border-purple-500 transform scale-105'
                  : 'bg-white/70 hover:bg-white shadow-lg border border-gray-200'
              }`}
            >
              <div className="flex items-center">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-900">{testimonial.business}</div>
                  <div className="text-xs text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="lg:flex">
              {/* Left Side - Testimonial Content */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <img
                    src={currentTestimonial.photo}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentTestimonial.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-lg mr-2">{currentTestimonial.logo}</span>
                      <div>
                        <div className="text-lg font-semibold text-gray-700">{currentTestimonial.business}</div>
                        <div className="text-sm text-gray-600">{currentTestimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600 text-lg">({currentTestimonial.rating}/5)</span>
                </div>

                <Quote className="w-12 h-12 text-purple-400 mb-4" />
                <blockquote className="text-2xl text-gray-800 font-medium leading-relaxed mb-6">
                  "{currentTestimonial.quote}"
                </blockquote>

                <div className="bg-gradient-to-r from-cyan-50 to-purple-50 rounded-2xl p-6 border border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-3">Historia completa:</h4>
                  <p className="text-gray-700 leading-relaxed">{currentTestimonial.detailedStory}</p>
                </div>

                <div className="mt-8 flex items-center">
                  <button className="flex items-center px-6 py-3 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-xl transition-all duration-300 mr-4">
                    <Play className="w-5 h-5 mr-2" />
                    Ver Video Testimonio
                  </button>
                  <span className="text-sm text-gray-600">Caso verificado por nuestro equipo médico</span>
                </div>
              </div>

              {/* Right Side - Metrics */}
              <div className="lg:w-1/3 bg-gradient-to-br from-purple-500 via-cyan-500 to-indigo-500 text-white p-8 lg:p-12">
                <h4 className="text-xl font-bold mb-8">Resultados Verificados</h4>
                
                <div className="space-y-8">
                  <div>
                    <div className="text-sm text-purple-100 mb-2">Situación Anterior</div>
                    <div className="text-2xl font-bold text-red-300">{currentTestimonial.results.before}</div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-8 bg-white/30"></div>
                    <TrendingUp className="w-8 h-8 text-white/70 mx-auto" />
                  </div>

                  <div>
                    <div className="text-sm text-purple-100 mb-2">Después de CallCraft AI</div>
                    <div className="text-3xl font-bold">{currentTestimonial.results.after}</div>
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <div className="text-sm text-purple-100 mb-2">Impacto en Ingresos</div>
                    <div className="text-4xl font-bold text-cyan-300">{currentTestimonial.results.revenue}</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Calendar className="w-5 h-5 text-purple-200" />
                      <span className="text-sm text-purple-100">Tiempo de implementación</span>
                    </div>
                    <div className="text-xl font-bold">{currentTestimonial.results.period}</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-center">
                    <div className="text-sm text-purple-100 mb-1">ROI Promedio</div>
                    <div className="text-3xl font-bold text-cyan-300">420%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Casos Médicos Verificados</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">GDPR Sanitario</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">ISO 27001 Médico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;