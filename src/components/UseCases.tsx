import React, { useState } from 'react';
import { Sparkles, Syringe, Scissors, Heart, Phone, TrendingUp } from 'lucide-react';

const UseCases = () => {
  const [activeCase, setActiveCase] = useState(0);

  const useCases = [
    {
      icon: Syringe,
      title: 'Medicina Estética',
      subtitle: 'De 35% no-shows a 5% en 60 días',
      description: 'Automatiza citas de botox, rellenos y tratamientos faciales con recordatorios inteligentes.',
      metrics: {
        before: '35% no-shows',
        after: '5% no-shows',
        revenue: '+€8,400/mes'
      },
      features: [
        'Recordatorios automáticos 48h y 24h antes',
        'Gestión de listas de espera inteligente',
        'Información sobre tratamientos y precios',
        'Confirmación de citas por WhatsApp/SMS'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Sparkles,
      title: 'Tratamientos Faciales',
      subtitle: 'Aumenta ocupación al 95%',
      description: 'Optimiza agenda de limpiezas, peelings y tratamientos con IA especializada.',
      metrics: {
        before: '70% ocupación',
        after: '95% ocupación',
        revenue: '+€5,200/mes'
      },
      features: [
        'Programación automática según tipo de piel',
        'Seguimiento post-tratamiento',
        'Recomendaciones de cuidado personalizado',
        'Upselling de productos y servicios'
      ],
      color: 'from-cyan-500 to-purple-500'
    },
    {
      icon: Scissors,
      title: 'Cirugía Estética',
      subtitle: 'Califica leads automáticamente',
      description: 'Gestiona consultas de cirugías con protocolo médico especializado.',
      metrics: {
        before: '40% leads no calificados',
        after: '8% leads no calificados',
        revenue: 'ROI 420%'
      },
      features: [
        'Cuestionario médico pre-consulta',
        'Calificación automática de candidatos',
        'Programación de consultas especializadas',
        'Seguimiento pre y post-operatorio'
      ],
      color: 'from-indigo-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Tratamientos Corporales',
      subtitle: 'Reduce cancelaciones 80%',
      description: 'Maneja citas de criolipólisis, radiofrecuencia y tratamientos corporales.',
      metrics: {
        before: '25% cancelaciones',
        after: '5% cancelaciones',
        revenue: '+€6,800/mes'
      },
      features: [
        'Recordatorios con preparación específica',
        'Gestión de sesiones múltiples',
        'Seguimiento de resultados',
        'Programación de mantenimiento'
      ],
      color: 'from-purple-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Consultas Virtuales',
      subtitle: 'Atiende 24/7 sin personal',
      description: 'Captura leads fuera de horario y programa consultas virtuales.',
      metrics: {
        before: '0 atención nocturna',
        after: '20-25 leads/noche',
        revenue: '+€4,500/mes'
      },
      features: [
        'Atención 24/7 automatizada',
        'Videoconsultas programadas',
        'Evaluación inicial por IA',
        'Derivación a especialista apropiado'
      ],
      color: 'from-cyan-500 to-indigo-500'
    },
    {
      icon: TrendingUp,
      title: 'Fidelización',
      subtitle: 'Aumenta retención 300%',
      description: 'Programa tratamientos de mantenimiento y seguimiento personalizado.',
      metrics: {
        before: '25% retención anual',
        after: '75% retención anual',
        revenue: '+€12,000/mes'
      },
      features: [
        'Recordatorios de mantenimiento',
        'Ofertas personalizadas por historial',
        'Programa de fidelización automático',
        'Encuestas de satisfacción post-tratamiento'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Casos de Éxito en Estética
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Resultados reales en 
            <span className="text-purple-600"> clínicas estéticas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo clínicas de medicina estética han eliminado no-shows, 
            aumentado ocupación y multiplicado sus ingresos con CallCraft AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  activeCase === index ? 'scale-105 shadow-2xl' : ''
                }`}
                onClick={() => setActiveCase(index)}
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-100 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm font-semibold text-purple-600 mb-4">{useCase.subtitle}</p>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Antes:</span>
                      <span className="text-sm font-semibold text-red-600">{useCase.metrics.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Después:</span>
                      <span className="text-sm font-semibold text-purple-600">{useCase.metrics.after}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-700">Impacto:</span>
                      <span className="text-lg font-bold text-cyan-600">{useCase.metrics.revenue}</span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:text-white">
                    Ver Demo Especializado
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed View */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className={`bg-gradient-to-r ${useCases[activeCase].color} p-8 text-white`}>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mr-6">
                  {React.createElement(useCases[activeCase].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{useCases[activeCase].title}</h3>
                  <p className="text-xl text-white/90">{useCases[activeCase].subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-white/90">{useCases[activeCase].description}</p>
            </div>

            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Características Específicas:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases[activeCase].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
                  Personalizar para Mi Clínica
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;