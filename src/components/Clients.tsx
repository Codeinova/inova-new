import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  // Placeholder logos - in a real implementation, these would be actual logo URLs
  const clients = [
    { name: 'Alpina', category: 'Corporativo' },
    { name: 'Bancolombia', category: 'Financiero' },
    { name: 'Postobón', category: 'Corporativo' },
    { name: 'Alcaldía de Medellín', category: 'Público' },
    { name: 'Alcaldía de Girardota', category: 'Público' },
    { name: 'Alcaldía de Apartadó', category: 'Público' },
    { name: 'Gobernación de Antioquia', category: 'Público' },
    { name: 'Gobernación de Caldas', category: 'Público' },
    { name: 'Gobernación de Córdoba', category: 'Público' },
    { name: 'Fundación UdeA', category: 'Fundación' },
    { name: 'Fundación Bancolombia', category: 'Fundación' },
    { name: 'Fundación Nutresa', category: 'Fundación' },
    { name: 'Porkcolombia', category: 'Gremial' },
    { name: 'Fedegan', category: 'Gremial' },
    { name: 'Fenavi', category: 'Gremial' },
    { name: 'FNC', category: 'Gremial' },
    { name: 'Corantioquia', category: 'Ambiental' },
    { name: 'Cornare', category: 'Ambiental' },
    { name: 'UdeA', category: 'Académico' },
    { name: 'CES', category: 'Académico' },
    { name: 'IU Digital', category: 'Académico' },
    { name: 'Cesde', category: 'Académico' },
    { name: 'UTRM', category: 'Académico' },
    { name: 'PJIC', category: 'Académico' },
    { name: 'CCMM', category: 'Cámara' },
    { name: 'Cámara de Comercio de Urabá', category: 'Cámara' },
    { name: 'Cámara de Comercio del Magdalena Medio', category: 'Cámara' },
    { name: 'Comfama', category: 'Social' },
    { name: 'Colsubsidio', category: 'Social' },
    { name: 'FAO', category: 'Internacional' },
    { name: 'Relaser IICA', category: 'Internacional' }
  ];

  const categories = [
    { name: 'Corporativo', icon: '🏢' },
    { name: 'Público', icon: '🏛️' },
    { name: 'Fundación', icon: '🤝' },
    { name: 'Gremial', icon: '🌾' },
    { name: 'Académico', icon: '🎓' },
    { name: 'Financiero', icon: '🏦' },
    { name: 'Ambiental', icon: '🌱' },
    { name: 'Cámara', icon: '🏪' },
    { name: 'Social', icon: '👥' },
    { name: 'Internacional', icon: '🌍' }
  ];

  const generateLogoPlaceholder = (name: string, category: string) => {
    const categoryInfo = categories.find(cat => cat.name === category);
    return {
      name,
      category,
      icon: categoryInfo?.icon || '🏢',
      initials: name.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase()
    };
  };

  const clientLogos = clients.map(client => generateLogoPlaceholder(client.name, client.category));

  return (
    <section id="clientes-aliados" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            🤝 Nuestros Aliados
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Clientes y <span className="text-yellow-400">Aliados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Organizaciones líderes que confían en nuestro ecosistema digital para transformar el sector rural
          </p>
        </motion.div>

        {/* Categories Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-4 rounded-xl text-center text-white hover:bg-gray-800 transition-all duration-300 border border-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="text-sm font-semibold">{category.name}</div>
              <div className="text-xs opacity-80 mt-1">
                {clientLogos.filter(client => client.category === category.name).length} aliados
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 12) * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 hover:bg-gray-800 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl border border-gray-800 hover:border-gray-700 relative overflow-hidden">
                <div className="relative z-10 text-center">
                  {/* Logo placeholder */}
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-bold text-lg mx-auto mb-3">
                    {client.initials}
                  </div>
                  
                  {/* Client name */}
                  <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                    {client.name}
                  </h3>
                  
                  {/* Category badge */}
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">{client.icon}</span>
                    <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {client.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: '30+', label: 'Organizaciones Aliadas', icon: '🤝' },
            { number: '10', label: 'Sectores Diferentes', icon: '🏢' },
            { number: '5+', label: 'Países de Impacto', icon: '🌍' },
            { number: '100%', label: 'Satisfacción Cliente', icon: '⭐' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres ser parte de nuestra red de aliados?
            </h3>
            <p className="mb-6 opacity-90">
              Únete a las organizaciones líderes que están transformando el sector rural con tecnología innovadora.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Convertirse en aliado
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;