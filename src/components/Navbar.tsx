import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'Inicio', id: 'hero' },
    { label: 'El Problema', id: 'pain-points' },
    { label: 'Soluciones', id: 'solutions' },
    { label: 'Cómo Funciona', id: 'process' },
    { label: 'Calculadora', id: 'roi' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-deep-black/80 border-b border-gold/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 bg-gradient-to-br from-gold to-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-deep-black font-bold text-sm">CC</span>
            </div>
            <span className="text-gold font-bold hidden sm:inline">CallCraft AI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-gold transition-colors font-light text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-block px-6 py-2 bg-gold hover:bg-yellow-500 text-deep-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contacto
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gold hover:text-yellow-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-300 hover:text-gold transition-colors font-light py-2 px-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 px-6 py-2 bg-gold hover:bg-yellow-500 text-deep-black font-semibold rounded-lg transition-all"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
