import React, { useState } from 'react';
import { Mail, Phone as PhoneIcon, Building2 } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    clinic: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-deep-black to-gray-950 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Solicitar <span className="text-gold">Estudio de Viabilidad</span>
            </h2>
            <p className="text-lg text-gray-400 font-light">
              Descubre exactamente cuánto puede recuperar tu clínica con CallCraft AI.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gold/30 rounded-2xl p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">¡Solicitud Recibida!</h3>
                <p className="text-gray-300 font-light">
                  Te contactaremos dentro de 24 horas para agendar tu auditoría.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white font-semibold mb-3">Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gold/20 rounded-lg text-white placeholder-gray-500 font-light focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-white font-semibold mb-3 flex items-center">
                    <PhoneIcon className="w-4 h-4 mr-2 text-gold" />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+34 XXX XXX XXX"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gold/20 rounded-lg text-white placeholder-gray-500 font-light focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Clinic Name Field */}
                <div>
                  <label className="block text-white font-semibold mb-3 flex items-center">
                    <Building2 className="w-4 h-4 mr-2 text-gold" />
                    Nombre de la Clínica
                  </label>
                  <input
                    type="text"
                    name="clinic"
                    value={formData.clinic}
                    onChange={handleChange}
                    required
                    placeholder="Tu clínica"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gold/20 rounded-lg text-white placeholder-gray-500 font-light focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-8 px-8 py-4 bg-gold hover:bg-yellow-500 text-deep-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-gold text-lg"
                >
                  Enviar Solicitud
                </button>

                <p className="text-center text-gray-400 text-xs font-light mt-6">
                  Al enviar, aceptas nuestra política de privacidad.
                </p>
              </form>
            )}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 font-light text-sm">
              ¿Preguntas? Escríbenos a <span className="text-gold">hello@callcraft.ai</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
