import React from 'react';
import { MessageSquare, Phone, Zap } from 'lucide-react';

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-deep-black to-gray-950 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            El Ecosistema <span className="text-gold">CallCraft</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Dos soluciones potentes diseñadas específicamente para clínicas estéticas. Elige la que mejor se adapte a tu flujo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Card A: WhatsApp Agent */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-gold/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold rounded-2xl p-8 md:p-10 hover:shadow-gold transition-all duration-300 transform group-hover:scale-[1.02]">
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-3 py-1 bg-gold text-deep-black text-xs font-bold rounded-full">
                  <Zap className="w-3 h-3 mr-1" />
                  RECOMENDADO
                </span>
              </div>

              <div className="mb-6">
                <div className="inline-flex p-4 bg-gold/10 rounded-xl">
                  <MessageSquare className="w-8 h-8 text-gold" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Agente de Chat</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Ideal para empezar. Agenda citas y resuelve dudas por WhatsApp al instante. Disponible 24/7 sin costos de recepción.
              </p>

              <div className="space-y-3 pt-6 border-t border-gold/20">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                  Agendamiento automático
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                  Respuestas en tiempo real
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                  Sin cambiar tu software
                </div>
              </div>
            </div>
          </div>

          {/* Card B: Voice Agent */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-gray-600/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gray-600 rounded-2xl p-8 md:p-10 hover:shadow-lg hover:border-gold/40 transition-all duration-300 transform group-hover:scale-[1.02]">
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gray-800 rounded-xl">
                  <Phone className="w-8 h-8 text-gray-400" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Agente de Voz</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Recepción telefónica humana que gestiona tu agenda en tiempo real. Conversaciones naturales y profesionales.
              </p>

              <div className="space-y-3 pt-6 border-t border-gray-700">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3"></span>
                  Llamadas entrantes 24/7
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3"></span>
                  Capacidad de decisión avanzada
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3"></span>
                  Integración con tu CRM
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 font-light mb-6">
            Combina ambas soluciones para máxima cobertura
          </p>
          <div className="inline-flex items-center space-x-3 bg-gold/10 border border-gold/30 rounded-lg px-6 py-3">
            <MessageSquare className="w-4 h-4 text-gold" />
            <span className="text-white font-light">+</span>
            <Phone className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold">=</span>
            <span className="text-white font-light">Recepción Completa 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
