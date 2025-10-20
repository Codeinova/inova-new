import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Zap } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Inicio',
    '¿Quiénes somos?',
    'Qué hacemos',
    'Cómo lo hacemos',
    'Casos de éxito',
    'Clientes'
  ];
  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-6">
        <motion.nav 
          className="flex justify-between items-center py-4 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold text-black flex items-center gap-2 z-20">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
            IN-OVA
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="text-black hover:text-yellow-600 transition-colors duration-300 font-medium text-sm"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Desktop CTA Button */}
          <button className="hidden lg:flex bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300">
            Escríbenos más
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-20 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
            )}
          </AnimatePresence>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl z-10 lg:hidden"
              >
                <div className="flex flex-col h-full pt-20 pb-6 px-6">
                  <div className="flex flex-col space-y-4">
                    {menuItems.map((item, index) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className="text-black hover:text-yellow-600 transition-colors duration-300 font-medium text-lg py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <button 
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Escríbenos más
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        <div className="flex flex-col items-center min-h-[calc(100vh-5rem)] gap-8 pt-16">
          <motion.div 
            className="text-center space-y-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              Impulsamos el desarrollo rural sostenible mediante la inteligencia colectiva
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Conectamos la tecnología, talento y aliados estratégicos para transformar el campo
            </p>

            <div className="flex justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-medium text-sm transition-all duration-300">
                Descubre más
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <div className="absolute top-8 left-8 text-black">
                  <div className="text-2xl font-bold mb-2">Ecosistema Digital</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <span>Colectiva App</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <span>Asistente ARI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <span>In-Ova BI</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-black rounded-2xl shadow-lg flex items-center justify-center">
                <Zap className="w-12 h-12 text-yellow-400" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white rounded-2xl shadow-lg border-4 border-yellow-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">SaaS + BPO</div>
                  <div className="text-sm text-gray-600">Modelo Híbrido</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;