import React, { useState } from 'react';
import { Brain, MessageSquare, Phone, Calendar, Shield, Zap, ChevronDown } from 'lucide-react';

const Features = () => {
  const [openFeature, setOpenFeature] = useState(0);

  const features = [
    {
      icon: MessageSquare,
      title: 'Agente WhatsApp Especializado',
      description: 'Gestión completa de reservas y consultas por WhatsApp 24/7',
      details: [
        'Respuestas automáticas sobre tratamientos y precios',
        'Programación de citas directamente desde WhatsApp',
        'Recordatorios personalizados con emojis y multimedia',
        'Gestión de listas de espera en tiempo real',
        'Envío automático de formularios médicos pre-consulta'
      ],
      metrics: '89% conversión WhatsApp'
    },
    {
      icon: Phone,
      title: 'Agente Conversacional Médico',
      description: 'Llamadas especializadas en medicina estética con protocolo médico',
      details: [
        'Conocimiento especializado en tratamientos estéticos',
        'Calificación automática de candidatos para cirugías',
        'Manejo de objeciones sobre seguridad y resultados',
        'Programación según disponibilidad de especialistas',
        'Seguimiento post-tratamiento automatizado'
      ],
      metrics: '92% satisfacción pacientes'
    },
    {
      icon: Calendar,
      title: 'Gestión Inteligente de Citas',
      description: 'Optimización automática de agenda con IA especializada',
      details: [
        'Recordatorios escalonados: 48h, 24h y 2h antes',
        'Reprogramación automática de cancelaciones',
        'Optimización de agenda según tipo de tratamiento',
        'Lista de espera inteligente con priorización',
        'Integración con calendarios médicos existentes'
      ],
      metrics: '85% reducción no-shows'
    },
    {
      icon: Brain,
      title: 'IA Especializada en Estética',
      description: 'Conocimiento profundo en medicina y cirugía estética',
      details: [
        'Base de datos de +500 tratamientos estéticos',
        'Protocolos médicos pre y post-operatorios',
        'Evaluación inicial de candidatos por IA',
        'Recomendaciones personalizadas por tipo de piel',
        'Actualización continua con últimas técnicas'
      ],
      metrics: '99% precisión médica'
    },
    {
      icon: Shield,
      title: 'Cumplimiento Médico Total',
      description: 'Seguridad y privacidad según normativas sanitarias',
      details: [
        'Cumplimiento GDPR y LOPD para datos médicos',
        'Encriptación end-to-end de historiales',
        'Consentimientos informados digitales',
        'Trazabilidad completa de comunicaciones',
        'Backup seguro en servidores certificados'
      ],
      metrics: 'Certificación sanitaria ISO'
    },
    {
      icon: Zap,
      title: 'Integración Clínicas',
      description: 'Conexión perfecta con software médico existente',
      details: [
        'Integración con 20+ software de gestión médica',
        'Sincronización automática de historiales',
        'API nativa para sistemas personalizados',
        'Exportación de datos en formatos médicos',
        'Setup personalizado en menos de 48h'
      ],
      metrics: 'Integración en 24-48h'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Tecnología Médica Avanzada
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Características diseñadas para 
            <span className="text-purple-600"> clínicas estéticas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología de vanguardia especializada en medicina estética, 
            diseñada para eliminar no-shows y maximizar la ocupación de tu clínica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isOpen = openFeature === index;
              
              return (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 ${
                    isOpen ? 'shadow-2xl border-purple-200' : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  <button
                    className="w-full p-6 text-left focus:outline-none"
                    onClick={() => setOpenFeature(isOpen ? -1 : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl mr-4 transition-all duration-300 ${
                          isOpen 
                            ? 'bg-purple-600 text-white scale-110' 
                            : 'bg-gradient-to-r from-cyan-100 to-purple-100 text-purple-600'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold transition-colors duration-300 ${
                            isOpen ? 'text-purple-600' : 'text-gray-900'
                          }`}>
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="text-right mr-4">
                          <div className="text-sm font-semibold text-cyan-600">
                            {feature.metrics}
                          </div>
                        </div>
                        <ChevronDown 
                          className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </div>
                  </button>

                  <div className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="pl-16">
                        <div className="bg-gradient-to-r from-cyan-50 to-purple-50 rounded-xl p-6 border border-purple-100">
                          <div className="grid gap-3">
                            {feature.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-6 pt-4 border-t border-purple-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-600">
                                Rendimiento destacado:
                              </span>
                              <span className="text-lg font-bold text-purple-600">
                                {feature.metrics}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres ver estas características en tu clínica?
            </h3>
            <p className="text-gray-600 mb-6">
              Agenda una demo personalizada y descubre cómo CallCraft AI puede transformar 
              la gestión de pacientes de tu clínica estética específica.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Agendar Demo para Mi Clínica
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;