import React from 'react';
import { Link2, Brain, Zap } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Conexión',
      description: 'Nos vinculamos a tu agenda actual (sin cambiar tu software).',
      icon: Link2
    },
    {
      number: 2,
      title: 'Entrenamiento',
      description: 'La IA aprende tus precios y tratamientos.',
      icon: Brain
    },
    {
      number: 3,
      title: 'Despliegue',
      description: 'Tu recepción automática empieza a funcionar.',
      icon: Zap
    }
  ];

  return (
    <section id="process" className="py-20 bg-deep-black border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Integración en <span className="text-gold">3 Pasos</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Comienza en menos de 48 horas. Simple, rápido y sin complicaciones.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connecting line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-[60%] right-[-60%] h-1 bg-gradient-to-r from-gold to-gold/30"></div>
                  )}

                  <div className="relative">
                    <div className="flex flex-col items-center">
                      {/* Number Circle */}
                      <div className="mb-6 relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center shadow-gold">
                          <span className="text-2xl font-bold text-deep-black">{step.number}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gold/20 rounded-xl p-6 text-center">
                        <div className="mb-4 flex justify-center">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 font-light text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-8">
            <p className="text-gray-300 font-light mb-3">
              ¿Listo para empezar?
            </p>
            <p className="text-white font-bold text-lg">
              Promedio: <span className="text-gold">7-10 días</span> desde auditoría hasta primer agente en vivo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
