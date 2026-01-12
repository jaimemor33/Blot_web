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
    const monthly = dailyLoss * 22;
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
    <section id="roi" className="py-20 bg-deep-black border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2 text-gold" />
            <span className="text-gold">Calculadora de Recuperación</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Recuperando solo 3 pacientes a la semana, tu facturación aumenta
            <span className="text-gold"> +X.XXX€ al año</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Descubre el impacto real que tendrían 3 pacientes recuperados cada semana en tu clínica.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gold/30 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Calculator Form */}
              <div>
                <div className="flex items-center mb-8">
                  <Calculator className="w-8 h-8 text-gold mr-3" />
                  <h3 className="text-2xl font-bold text-white">Ajusta tus Números</h3>
                </div>

                <div className="space-y-6">
                  {/* Clinic Size */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Tamaño de tu clínica
                    </label>
                    <select
                      value={clinicSize}
                      onChange={(e) => setClinicSize(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gold/20 rounded-lg text-white focus:border-gold transition-colors font-light"
                    >
                      {Object.entries(clinicSizes).map(([key, label]) => (
                        <option key={key} value={key}>{label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Daily Appointments */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Citas diarias: <span className="text-gold font-bold">{dailyAppointments}</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="80"
                      value={dailyAppointments}
                      onChange={(e) => setDailyAppointments(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>5</span>
                      <span>80+</span>
                    </div>
                  </div>

                  {/* No-Show Percentage */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      % de no-shows: <span className="text-gold font-bold">{noShowPercentage}%</span>
                    </label>
                    <input
                      type="range"
                      min="15"
                      max="50"
                      value={noShowPercentage}
                      onChange={(e) => setNoShowPercentage(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>15%</span>
                      <span>50%</span>
                    </div>
                  </div>

                  {/* Average Treatment Value */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Valor promedio por tratamiento (€)
                    </label>
                    <input
                      type="number"
                      value={avgTreatmentValue}
                      onChange={(e) => setAvgTreatmentValue(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gold/20 rounded-lg text-white focus:border-gold transition-colors font-light"
                      placeholder="Ej: 180"
                    />
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <div className="text-center mb-8">
                  <TrendingDown className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-1">Tu Impacto Actual</h3>
                  <p className="text-gray-400 font-light">Cifras sin CallCraft AI</p>
                </div>

                <div className="space-y-4">
                  {/* Monthly Loss */}
                  <div className="bg-gradient-to-br from-gold/5 to-gold/0 border border-gold/20 rounded-lg p-6 text-center">
                    <p className="text-sm text-gray-400 font-light mb-2">Pérdidas Mensuales</p>
                    <p className="text-4xl font-bold text-gold">
                      €{monthlyLoss.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                    </p>
                  </div>

                  {/* Yearly Loss */}
                  <div className="bg-gradient-to-br from-gold/5 to-gold/0 border border-gold/20 rounded-lg p-6 text-center">
                    <p className="text-sm text-gray-400 font-light mb-2">Pérdidas Anuales</p>
                    <p className="text-5xl font-bold text-gold">
                      €{yearlyLoss.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                    </p>
                  </div>

                  {/* Recovery with CallCraft */}
                  <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-emerald-500/50 rounded-lg p-6 text-center mt-6">
                    <DollarSign className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300 font-light mb-2">Recuperable con CallCraft AI</p>
                    <p className="text-3xl font-bold text-emerald-400">
                      €{(monthlyLoss * 0.85).toLocaleString('es-ES', { maximumFractionDigits: 0 })}/mes
                    </p>
                    <p className="text-xs text-gray-400 mt-2 font-light">85% reducción de no-shows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LossCalculator;
