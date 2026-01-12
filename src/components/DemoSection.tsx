import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, CheckCircle, Play, Pause } from 'lucide-react';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState('clinic');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoScenarios = {
    clinic: {
      title: 'Clínica Estética Bella Vida',
      conversation: [
        { speaker: 'ai', text: 'Hola, Clínica Bella Vida, ¿en qué puedo ayudarle?', time: '14:32' },
        { speaker: 'customer', text: 'Hola, me gustaría agendar una cita para botox en la frente', time: '14:33' },
        { speaker: 'ai', text: 'Perfecto. Tengo disponibilidad con la Dra. Martínez el viernes a las 16:00 o el lunes a las 11:30. ¿Cuál prefiere?', time: '14:33' },
        { speaker: 'customer', text: 'El viernes a las 16:00 me viene perfecto', time: '14:34' },
        { speaker: 'ai', text: 'Excelente. ¿Es su primera vez con nosotros? Necesito algunos datos para su historial médico', time: '14:34' },
        { speaker: 'customer', text: 'Sí, es mi primera vez. Soy Ana López, 35 años', time: '14:35' },
        { speaker: 'ai', text: 'Perfecto Ana. Cita confirmada viernes 16:00 para botox. Le envío recordatorio 24h antes y formulario médico. ¡Gracias!', time: '14:35' }
      ],
      metrics: {
        'Tiempo de respuesta': '0.8s',
        'Precisión': '99%',
        'Satisfacción': '4.9/5',
        'Conversión': '92%'
      }
    },
    whatsapp: {
      title: 'WhatsApp - Clínica Estética Premium',
      conversation: [
        { speaker: 'customer', text: 'Hola! Quería preguntar precios de rellenos de labios', time: '22:15' },
        { speaker: 'ai', text: '¡Hola! 😊 Los rellenos de labios van desde €280-450 según el tipo de ácido hialurónico. ¿Te gustaría agendar una consulta gratuita?', time: '22:15' },
        { speaker: 'customer', text: 'Sí, me interesa. ¿Cuándo tienen disponible?', time: '22:16' },
        { speaker: 'ai', text: 'Perfecto! Tengo disponibilidad mañana a las 18:00 o el jueves a las 16:30. ¿Cuál te conviene mejor?', time: '22:16' },
        { speaker: 'customer', text: 'Mañana a las 18:00 está genial', time: '22:17' },
        { speaker: 'ai', text: '¡Listo! 📅 Cita confirmada mañana 18:00 para consulta de rellenos. Te envío la ubicación y recordatorio. ¡Nos vemos!', time: '22:17' }
      ],
      metrics: {
        'Tiempo de respuesta': '0.5s',
        'Precisión': '97%',
        'Satisfacción': '4.9/5',
        'Conversión': '89%'
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentStep < demoScenarios[activeDemo as keyof typeof demoScenarios].conversation.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => prev + 1);
      }, 2500);
    } else if (currentStep >= demoScenarios[activeDemo as keyof typeof demoScenarios].conversation.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, activeDemo]);

  const startDemo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const currentScenario = demoScenarios[activeDemo as keyof typeof demoScenarios];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Demo Interactivo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Prueba <span className="text-blue-600">CallCraft AI</span> ahora mismo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selecciona un escenario y observa cómo CallCraft AI maneja las llamadas 
            con la precisión y profesionalismo de tu mejor empleado.
          </p>
        </div>

        {/* Demo Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(demoScenarios).map(([key, scenario]) => (
            <button
              key={key}
              onClick={() => {
                setActiveDemo(key);
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeDemo === key
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="lg:flex gap-8">
            {/* Conversation Simulator */}
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-orange-500 via-emerald-500 to-blue-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone className="w-8 h-8 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold">{currentScenario.title}</h3>
                        <p className="text-blue-100">Llamada en curso...</p>
                      </div>
                    </div>
                    <button
                      onClick={isPlaying ? () => setIsPlaying(false) : startDemo}
                      className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                  </div>
                </div>

                <div className="p-6 h-96 overflow-y-auto">
                  <div className="space-y-4">
                    {currentScenario.conversation.slice(0, currentStep + 1).map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.speaker === 'ai' ? 'justify-start' : 'justify-end'} animate-fade-in`}
                      >
                        <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg ${
                          message.speaker === 'ai'
                            ? 'bg-blue-600 text-white rounded-tl-sm'
                            : 'bg-gray-100 text-gray-800 rounded-tr-sm'
                        }`}>
                          <p className="mb-1">{message.text}</p>
                          <p className={`text-xs ${message.speaker === 'ai' ? 'text-blue-200' : 'text-gray-500'}`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    {isPlaying && currentStep < currentScenario.conversation.length - 1 && (
                      <div className="flex justify-start">
                        <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tl-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Dashboard */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Dashboard en Tiempo Real</h3>
                  <p className="text-emerald-100">Métricas de la llamada</p>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {Object.entries(currentScenario.metrics).map(([metric, value]) => (
                      <div key={metric} className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium">{metric}</span>
                        <span className="text-blue-600 font-bold text-lg">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-100">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                      <span className="font-semibold text-gray-800">Resultado</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      ✅ Reserva confirmada<br/>
                      ✅ Datos del cliente capturados<br/>
                      ✅ SMS de confirmación enviado<br/>
                      ✅ Calendario actualizado automáticamente
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Satisfacción del Cliente</span>
                      <span className="text-sm font-bold text-emerald-600">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
            Personalizar Mi Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;