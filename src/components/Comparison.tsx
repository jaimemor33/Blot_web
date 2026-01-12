import React, { useState } from 'react';
import { CheckCircle, XCircle, Minus, Trophy, Zap } from 'lucide-react';

const Comparison = () => {
  const [activeColumn, setActiveColumn] = useState(0);

  const comparisonData = [
    {
      category: 'Gestión de Llamadas',
      features: [
        {
          feature: '% Reducción no-shows',
          callcraft: '85%',
          competition: '45-60%',
          noSolution: '0%',
          callcraftBest: true
        },
        {
          feature: 'Disponibilidad',
          callcraft: '24/7/365',
          competition: 'Horario comercial',
          noSolution: 'Solo horario laboral',
          callcraftBest: true
        },
        {
          feature: 'Tiempo de respuesta',
          callcraft: '< 0.8s',
          competition: '2-5s',
          noSolution: '15-30s',
          callcraftBest: true
        },
        {
          feature: 'Conocimiento médico estético',
          callcraft: 'Especializado + IA',
          competition: 'Genérico',
          noSolution: 'Limitado',
          callcraftBest: true
        }
      ]
    },
    {
      category: 'Implementación y Costos',
      features: [
        {
          feature: 'Tiempo de implementación',
          callcraft: '< 24 horas',
          competition: '1-4 semanas',
          noSolution: '2-6 meses',
          callcraftBest: true
        },
        {
          feature: 'Costo de setup',
          callcraft: '€0 (GRATIS)',
          competition: '€500-2,000',
          noSolution: '€3,000-10,000',
          callcraftBest: true
        },
        {
          feature: 'Costo mensual',
          callcraft: 'Desde €49/mes',
          competition: '€150-400/mes',
          noSolution: '€1,200-3,000/mes',
          callcraftBest: true
        },
        {
          feature: 'ROI clínicas estéticas',
          callcraft: '420%',
          competition: '150-200%',
          noSolution: 'Negativo',
          callcraftBest: true
        }
      ]
    },
    {
      category: 'Características Técnicas',
      features: [
        {
          feature: 'Integración software médico',
          callcraft: '20+ software médico',
          competition: '5-8 integraciones',
          noSolution: 'Manual',
          callcraftBest: true
        },
        {
          feature: 'Protocolos médicos',
          callcraft: '500+ tratamientos',
          competition: '50-100 tratamientos',
          noSolution: 'Ninguno',
          callcraftBest: true
        },
        {
          feature: 'Personalización clínica',
          callcraft: 'Total especializada',
          competition: 'Limitada',
          noSolution: 'Ninguna',
          callcraftBest: true
        },
        {
          feature: 'Métricas médicas',
          callcraft: '25+ métricas clínicas',
          competition: '8-12 métricas',
          noSolution: 'Básicos',
          callcraftBest: true
        }
      ]
    },
    {
      category: 'Soporte y Garantías',
      features: [
        {
          feature: 'Soporte técnico',
          callcraft: '24/7 en español',
          competition: 'Horario comercial',
          noSolution: 'Limitado',
          callcraftBest: true
        },
        {
          feature: 'Garantía reducción no-shows',
          callcraft: '85% o devolución',
          competition: '30 días',
          noSolution: 'Ninguna',
          callcraftBest: true
        },
        {
          feature: 'SLA uptime',
          callcraft: '99.98%',
          competition: '99.5%',
          noSolution: 'No garantizado',
          callcraftBest: true
        }
      ]
    }
  ];

  const columns = [
    {
      title: 'CallCraft AI',
      subtitle: 'La solución completa',
      color: 'from-orange-500 via-emerald-500 to-blue-500',
      highlight: true
    },
    {
      title: 'Competencia',
      subtitle: 'Otras soluciones IA',
      color: 'from-gray-500 to-gray-600',
      highlight: false
    },
    {
      title: 'Sin Solución',
      subtitle: 'Gestión manual',
      color: 'from-red-500 to-red-600',
      highlight: false
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            Comparación Competitiva
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir 
            <span className="text-purple-600"> CallCraft AI?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las ventajas competitivas que hacen de CallCraft AI 
            la mejor inversión para tu clínica estética.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Mobile View - Column Selector */}
          <div className="lg:hidden mb-8">
            <div className="flex space-x-2 bg-gray-100 rounded-xl p-1">
              {columns.map((column, index) => (
                <button
                  key={index}
                  onClick={() => setActiveColumn(index)}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    activeColumn === index
                      ? `bg-gradient-to-r ${column.color} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <div className="text-sm">{column.title}</div>
                  <div className="text-xs opacity-80">{column.subtitle}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">Características</h3>
              </div>
              {columns.map((column, index) => (
                <div
                  key={index}
                  className={`p-6 text-center ${column.highlight ? 'bg-gradient-to-br from-orange-50 via-emerald-50 to-blue-50 border-l-4 border-orange-500' : ''}`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 bg-gradient-to-r ${column.color}`}>
                    {column.highlight ? (
                      <Trophy className="w-6 h-6 text-white" />
                    ) : index === 1 ? (
                      <Zap className="w-6 h-6 text-white" />
                    ) : (
                      <Minus className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{column.title}</h3>
                  <p className="text-sm text-gray-600">{column.subtitle}</p>
                  {column.highlight && (
                    <div className="mt-2 inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                      <Trophy className="w-3 h-3 mr-1" />
                      RECOMENDADO
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="divide-y divide-gray-100">
              {comparisonData.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4">
                    <h4 className="text-lg font-bold text-gray-800">{section.category}</h4>
                  </div>
                  {section.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="grid grid-cols-4 hover:bg-gray-50 transition-colors duration-200">
                      <div className="p-6 font-medium text-gray-700 border-r border-gray-100">
                        {item.feature}
                      </div>
                      
                      {/* CallCraft AI Column */}
                      <div className="p-6 text-center bg-gradient-to-br from-orange-50/50 via-emerald-50/50 to-blue-50/50 border-l-4 border-orange-500 border-r border-gray-100">
                        <div className="flex items-center justify-center mb-2">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                          <span className="font-bold text-orange-700">{item.callcraft}</span>
                        </div>
                      </div>

                      {/* Competition Column */}
                      <div className="p-6 text-center border-r border-gray-100">
                        <div className="flex items-center justify-center mb-2">
                          <Minus className="w-5 h-5 text-yellow-500 mr-2" />
                          <span className="font-semibold text-gray-700">{item.competition}</span>
                        </div>
                      </div>

                      {/* No Solution Column */}
                      <div className="p-6 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <XCircle className="w-5 h-5 text-red-500 mr-2" />
                          <span className="font-semibold text-gray-600">{item.noSolution}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {comparisonData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800">{section.category}</h4>
                </div>
                <div className="p-6 space-y-4">
                  {section.features.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h5 className="font-semibold text-gray-800 mb-3">{item.feature}</h5>
                      <div className={`p-4 rounded-xl ${
                        activeColumn === 0 
                          ? 'bg-gradient-to-r from-orange-50 via-emerald-50 to-blue-50 border-2 border-orange-200'
                          : activeColumn === 1
                          ? 'bg-yellow-50 border-2 border-yellow-200'
                          : 'bg-red-50 border-2 border-red-200'
                      }`}>
                        <div className="flex items-center">
                          {activeColumn === 0 ? (
                            <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                          ) : activeColumn === 1 ? (
                            <Minus className="w-5 h-5 text-yellow-500 mr-3" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 mr-3" />
                          )}
                          <span className="font-bold">
                            {activeColumn === 0 ? item.callcraft : activeColumn === 1 ? item.competition : item.noSolution}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 via-emerald-50 to-blue-50 rounded-3xl p-8 max-w-4xl mx-auto border border-orange-200">
            <Trophy className="w-16 h-16 text-orange-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              La elección es clara
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              CallCraft AI supera a la competencia en cada métrica importante. 
              No arriesgues el futuro de tu negocio con soluciones inferiores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-emerald-500 hover:from-orange-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Comenzar en Mi Clínica
              </button>
              <button className="px-8 py-4 bg-white border-2 border-orange-500 text-orange-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-emerald-500 hover:text-white font-bold rounded-xl transition-all duration-300">
                Ver Planes para Clínicas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;