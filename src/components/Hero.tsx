import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUp } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Efecto para controlar el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const menuItems = [
    'Inicio',
    '¿Quiénes somos?',
    'Qué hacemos',
    'Cómo lo hacemos',
    'Casos de éxito',
    'Clientes'
  ];
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Image with responsive handling */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-top lg:bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/src/assets/hero-bg.png')" }}
        />

        {/* Lighter overlays so image remains visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.nav 
          className="flex justify-between items-center py-3 sm:py-4 lg:py-6 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="z-20">
            <img 
              src="/src/assets/logo.svg" 
              alt="In-Ova Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium text-sm"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Desktop CTA Button */}
          <button className="hidden lg:flex bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-300">
            Contáctanos
          </button>

          {/* Mobile Menu Button - Only show when menu is closed */}
          {!isMenuOpen && (
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden z-50 p-2 text-white"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6 text-white hover:text-orange-400 transition-colors" />
            </button>
          )}

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-white z-40 overflow-y-auto"
              >
                <div className="min-h-screen container mx-auto px-6 py-6">
                  {/* Mobile Menu Header */}
                  <div className="flex justify-between items-center mb-8 sticky top-0 bg-white pt-2">
                    <img 
                      src="/src/assets/logo.svg" 
                      alt="In-Ova Logo" 
                      className="h-8"
                    />
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Cerrar menú"
                    >
                      <X className="w-6 h-6 text-black" />
                    </button>
                  </div>

                  {/* Mobile Menu Items */}
                  <div className="flex flex-col items-center space-y-6">
                    {menuItems.map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className="text-black hover:text-orange-500 transition-colors duration-300 font-medium text-xl w-full text-center py-3"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                    <button 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full font-medium text-lg transition-all duration-300 mt-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contáctanos
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-5rem)] gap-6 sm:gap-8 py-12 sm:py-16 lg:py-20">
          <motion.div 
            className="text-center px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight sm:leading-tight lg:leading-tight mb-4 sm:mb-6 lg:mb-8 max-w-4xl mx-auto">
              Cultiva con Inteligencia.<br className="hidden sm:block" />
              Cosecha el Mañana
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0">
              Soluciones de datos y AI que transforman tu producción agrícola.
            </p>

            <motion.button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-medium text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Soluciones
            </motion.button>
          </motion.div>


        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;