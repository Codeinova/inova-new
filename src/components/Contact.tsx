import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Linkedin, Instagram, Send, ArrowRight, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactChannels = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Chatbot In-Ova',
      description: 'Habla directamente con nuestro asistente inteligente para resolver tus dudas al instante',
      action: 'Iniciar Chat',
      featured: true
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      description: 'Síguenos para contenido profesional y actualizaciones del sector',
      action: 'Seguir'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Instagram',
      description: 'Descubre el día a día de nuestro equipo y proyectos',
      action: 'Ver perfil'
    }
  ];

  return (
    <section id="contacto" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            📞 Hablemos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            <span className="text-yellow-500">Contáctanos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para impulsar la transformación digital de tu organización. 
            Elige el canal que prefieras para comenzar la conversación.
          </p>
        </motion.div>

        {/* Contact Channels */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactChannels.map((channel, index) => (
            <motion.div
              key={index}
              className={`group cursor-pointer ${channel.featured ? 'md:col-span-3 lg:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 relative overflow-hidden ${channel.featured ? 'ring-2 ring-yellow-400' : ''}`}>
                {/* Featured badge */}
                {channel.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Recomendado
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="bg-black text-white p-4 rounded-2xl shadow-lg mb-6 inline-block">
                    {channel.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {channel.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {channel.description}
                  </p>
                  
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300">
                    <span>{channel.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-black text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">
                  ¿Tienes un proyecto específico en mente?
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Nuestro equipo está listo para ayudarte a llevarlo al siguiente nivel. 
                  Cuéntanos sobre tu organización y cómo podemos impulsar juntos la 
                  transformación digital del sector rural.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    '✅ Consulta gratuita de 30 minutos',
                    '✅ Análisis personalizado de necesidades',
                    '✅ Propuesta técnica detallada',
                    '✅ Acompañamiento en implementación'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Iniciar Chat Ahora</span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-6">Envíanos un Mensaje</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="tu@empresa.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Organización
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Nombre de tu organización"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, necesidades específicas o cualquier pregunta que tengas..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;