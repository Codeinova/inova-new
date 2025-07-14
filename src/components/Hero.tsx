import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-5"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.nav 
          className="flex justify-between items-center py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-3xl font-bold text-black flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            IN-OVA
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['¿Quiénes somos?', 'Servicios', 'Metodología', 'Casos de éxito', 'Contacto'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="text-black hover:text-yellow-600 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
            <span>Contactar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.nav>

        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] gap-16">
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="inline-block">
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                🌱 Desarrollo Rural Sostenible
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
              Impulsamos el
              <span className="text-yellow-500 block">
                Desarrollo Rural
              </span>
              <span className="text-black">Sostenible</span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              Articulamos <strong>tecnología</strong>, <strong>talento humano</strong> y <strong>redes de aliados</strong> para 
              acompañar organizaciones ancla y productores del campo en su transformación digital 
              mediante la inteligencia colectiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span>Conocer Ecosistema</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Ver Demo</span>
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black">98.3%</div>
                <div className="text-sm text-gray-600">Precisión IA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">408K+</div>
                <div className="text-sm text-gray-600">Vacunaciones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">40%</div>
                <div className="text-sm text-gray-600">Tasa Respuesta</div>
              </div>
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