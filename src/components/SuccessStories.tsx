import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Award, Play, ExternalLink } from 'lucide-react';

const SuccessStories = () => {
  const successStories = [
    {
      company: 'Alpina',
      logo: '🥛',
      title: 'IA Predictiva para Optimización de Acopio',
      description: 'Desarrollamos modelos de inteligencia artificial que predicen el acopio de leche con un 98,3% de precisión, optimizando la logística de compras y reduciendo desperdicios.',
      achievements: [
        { metric: '98.3%', label: 'Precisión en predicción de acopio' },
        { metric: '900', label: 'Predios mapeados' },
        { metric: '100%', label: 'Digitalización de asistencia técnica' }
      ],
      impact: 'Automatización de informes para ganaderos y apoyo al programa de sostenibilidad mediante mapeo de predios. Cálculo de huella de carbono y avance en metas de cero deforestación.',
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      company: 'Fedegán',
      logo: '🐄',
      title: 'Vacunación Nacional Digital',
      description: 'Gestionamos dos ciclos de vacunación nacional contra fiebre aftosa mediante un asistente digital por WhatsApp.',
      achievements: [
        { metric: '408K+', label: 'Vacunaciones programadas' },
        { metric: '40%', label: 'Tasa de respuesta (vs 5% anterior)' },
        { metric: '$1B+', label: 'Ahorros por ciclo' }
      ],
      impact: 'Esta innovación generó ahorros superiores a los 1.000 millones de pesos por ciclo, revolucionando la gestión sanitaria nacional.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      company: 'Postobón',
      logo: '🥤',
      title: 'Programas de Impacto Social',
      description: 'Apoyamos programas como FARO (6.000 recicladores) y HIT Social (1.000 productores de fruta) mediante herramientas de trazabilidad.',
      achievements: [
        { metric: '6K', label: 'Recicladores en programa FARO' },
        { metric: '1K', label: 'Productores de fruta' },
        { metric: '100%', label: 'Trazabilidad de impacto social' }
      ],
      impact: 'Asistencia técnica remota y análisis de impacto social, fortaleciendo la cadena de valor sostenible y la responsabilidad corporativa.',
      image: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      company: 'Alquería',
      logo: '🧀',
      title: 'Estrategia Carbono Neutro',
      description: 'Utilizó nuestro ecosistema para recopilar datos de más de 300 fincas ganaderas en el marco de su estrategia de carbono neutro.',
      achievements: [
        { metric: '300+', label: 'Fincas ganaderas monitoreadas' },
        { metric: '100%', label: 'Datos de sostenibilidad' },
        { metric: '↗️', label: 'Productividad rural mejorada' }
      ],
      impact: 'Fortalecimiento del enfoque en productividad rural y avance significativo hacia las metas de neutralidad de carbono.',
      image: 'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const impactMetrics = [
    { icon: <TrendingUp className="w-8 h-8" />, value: '98.3%', label: 'Precisión IA' },
    { icon: <Users className="w-8 h-8" />, value: '7K+', label: 'Beneficiarios' },
    { icon: <Zap className="w-8 h-8" />, value: '$1B+', label: 'Ahorros Generados' },
    { icon: <Award className="w-8 h-8" />, value: '1.2K+', label: 'Predios Impactados' }
  ];

  return (
    <section id="casos-de-exito" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            🏆 Resultados Comprobados
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Casos de <span className="text-yellow-500">Éxito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformaciones reales que generan triple impacto: económico, social y ambiental
          </p>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-black mb-4 flex justify-center">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-black mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <div className="space-y-16">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden border border-gray-200">
                  <div className="relative z-10">
                    {/* Company Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl bg-gray-100 rounded-xl p-3 shadow-lg">
                        {story.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">{story.company}</h3>
                        <p className="text-gray-600 font-medium">{story.title}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {story.description}
                    </p>

                    {/* Achievements */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {story.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="bg-gray-50 p-4 rounded-xl text-center border border-gray-200"
                        >
                          <div className="text-2xl font-bold text-black mb-1">
                            {achievement.metric}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            {achievement.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="bg-yellow-400 text-black p-4 rounded-xl mb-6">
                      <h4 className="font-semibold mb-2">Impacto generado:</h4>
                      <p className="text-sm leading-relaxed">
                        {story.impact}
                      </p>
                    </div>

                    {/* CTA */}
                    <button className="bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all duration-300">
                      <span>Ver caso completo</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Visual Content */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={story.image}
                    alt={`${story.company} case study`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium opacity-90">
                      Video testimonial disponible
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-black text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para ser nuestro próximo <span className="text-yellow-400">caso de éxito</span>?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Únete a las organizaciones líderes que ya están transformando el sector rural 
                con nuestras soluciones innovadoras.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Iniciar mi transformación digital
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;