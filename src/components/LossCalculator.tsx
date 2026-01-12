import React, { useState, useEffect } from 'react';
import { Calculator, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react';

const LossCalculator = () => {
  const [clinicSize, setClinicSize] = useState('medium');
  const [dailyAppointments, setDailyAppointments] = useState(25);
  const [noShowPercentage, setNoShowPercentage] = useState(30);
  const [avgTreatmentValue, setAvgTreatmentValue] = useState(180);
  const [monthlyLoss, setMonthlyLoss] = useState(0);
  const [yearlyLoss, setYearlyLoss] = useState(0);

  useEffect(() => {
    const dailyLoss = (dailyAppointments * (noShowPercentage / 100)) * avgTreatmentValue;
    const monthly = dailyLoss * 22; // 22 días laborables
    const yearly = monthly * 12;
    
    setMonthlyLoss(monthly);
    setYearlyLoss(yearly);
  }, [clinicSize, dailyAppointments, noShowPercentage, avgTreatmentValue]);

  const clinicSizes = {
    small: 'Clínica Pequeña (1-2 consultas)',
    medium: 'Clínica Mediana (3-5 consultas)',
    large: 'Clínica Grande (6+ consultas)'
  };

  return (
    <div className="py-20 bg-gradient-to-r from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Análisis de No-Shows
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Cuánto dinero pierdes por 
            <span className="text-red-500"> pacientes que no asisten?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los no-shows son el mayor problema de las clínicas estéticas. 
            Calcula el impacto real en tus ingresos mensuales.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="lg:flex">
              {/* Calculator Form */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-8">
                  <Calculator className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Calculadora de Pérdidas</h3>
                </div>

                <div className="space-y-8">
                  {/* Clinic Size */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Tamaño de tu clínica estética
                    </label>
                    <select
                      value={clinicSize}
                      onChange={(e) => setClinicSize(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      {Object.entries(clinicSizes).map(([key, label]) => (
                        <option key={key} value={key}>{label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Daily Appointments */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Citas programadas por día: <span className="text-purple-600 font-bold">{dailyAppointments}</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="80"
                      value={dailyAppointments}
                      onChange={(e) => setDailyAppointments(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>5</span>
                      <span>80+</span>
                    </div>
                  </div>

                  {/* No-Show Percentage */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      % de no-shows actuales: <span className="text-red-500 font-bold">{noShowPercentage}%</span>
                    </label>
                    <input
                      type="range"
                      min="15"
                      max="50"
                      value={noShowPercentage}
                      onChange={(e) => setNoShowPercentage(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>15%</span>
                      <span>50%</span>
                    </div>
                  </div>

                  {/* Average Treatment Value */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Valor promedio por tratamiento (€)
                    </label>
                    <input
                      type="number"
                      value={avgTreatmentValue}
                      onChange={(e) => setAvgTreatmentValue(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Ej: 180"
                    />
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="lg:w-1/2 bg-gradient-to-br from-red-50 to-purple-50 p-8 lg:p-12">
                <div className="text-center mb-8">
                  <TrendingDown className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pérdidas por No-Shows</h3>
                  <p className="text-gray-600">Impacto real en tu clínica</p>
                </div>

                <div className="space-y-6">
                  {/* Monthly Loss */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-red-100">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-600 mb-2">Pérdidas Mensuales</p>
                      <p className="text-4xl font-bold text-red-600">
                        €{monthlyLoss.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>

                  {/* Yearly Loss */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-red-100">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-600 mb-2">Pérdidas Anuales</p>
                      <p className="text-5xl font-bold text-red-700">
                        €{yearlyLoss.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>

                  {/* Recovery with AestheticBot */}
                  <div className="bg-gradient-to-r from-purple-100 to-cyan-100 rounded-2xl p-6 border border-purple-200">
                    <div className="text-center">
                      <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700 mb-2">Con AestheticBot AI Recuperarías</p>
                      <p className="text-3xl font-bold text-purple-600">
                        €{(monthlyLoss * 0.85).toLocaleString('es-ES', { maximumFractionDigits: 0 })}/mes
                      </p>
                      <p className="text-xs text-gray-600 mt-1">85% reducción de no-shows</p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Ver Cómo Eliminar Estos No-Shows
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LossCalculator;