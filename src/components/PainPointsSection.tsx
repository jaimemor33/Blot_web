import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: Phone,
      title: 'Llamadas Perdidas',
      description: 'El 60% de pacientes llama a otra clínica si comunica.',
      stat: '60%'
    },
    {
      icon: MessageSquare,
      title: 'Mensajes sin Leer',
      description: 'Tardar horas en responder enfría la venta.',
      stat: '3h'
    },
    {
      icon: Calendar,
      title: 'Huecos Vacíos',
      description: 'Citas canceladas que no se rellenan automáticamente.',
      stat: '30%'
    }
  ];

  return (
    <section id="pain-points" className="py-20 bg-deep-black border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Cuánto dinero pierdes por
            <span className="text-gold"> no estar disponible?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Cada minuto sin atender es una oportunidad perdida. Descubre el costo real de la inacción.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gold/30 rounded-2xl p-8 hover:border-gold/50 transition-all duration-300 h-full">
                  <div className="mb-6">
                    <div className="inline-flex p-3 bg-gold/10 rounded-xl">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-gold mb-2">{point.stat}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                  </div>

                  <p className="text-gray-300 font-light leading-relaxed">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
