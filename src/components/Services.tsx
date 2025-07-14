import React from 'react';
import { motion } from 'framer-motion';
import { Users, Cloud, Zap, BarChart3, Settings, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Servicios BPO",
      subtitle: "Talento Humano + Tecnología",
      description: "Combinamos talento humano especializado (veterinarios, agrónomos, zootecnistas, analistas de datos y otros) con nuestras herramientas tecnológicas para tercerizar procesos de campo: captura de datos, asistencia técnica, generación de reportes y entrenamiento.",
      features: [
        "Captura de datos en campo",
        "Asistencia técnica especializada", 
        "Generación de reportes automáticos",
        "Entrenamiento y capacitación",
        "Trazabilidad completa",
        "Analítica en tiempo real"
      ],
      benefits: "A diferencia del BPO tradicional, integramos trazabilidad, analítica en tiempo real y comunicación directa con los productores, reduciendo costos y riesgos de contratación."
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Suscripciones SaaS",
      subtitle: "Ecosistema Digital Completo",
      description: "Licenciamos nuestro ecosistema digital completo —Colectiva App, Asistente WhatsApp (ARI) e In-Ova BI— en la nube, con arquitectura modular y rápida parametrización (20 h por proceso).",
      features: [
        "Colectiva App (captura de datos)",
        "Asistente WhatsApp (ARI)",
        "In-Ova BI (analítica avanzada)",
        "Parametrización en 20 horas",
        "Arquitectura modular",
        "Escalabilidad automática"
      ],
      benefits: "Nuestro modelo 'land & expand' permite activar 1–2 módulos iniciales e ir ampliando sin desarrollos a la medida, adaptándonos a áreas técnicas, sostenibilidad, servicio al cliente, comercial, etc."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Análisis de Necesidades",
      description: "Evaluamos los procesos actuales y identificamos oportunidades de mejora",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      number: "02", 
      title: "Parametrización Rápida",
      description: "Configuramos el ecosistema digital en solo 20 horas por proceso",
      icon: <Settings className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Implementación",
      description: "Desplegamos la solución con acompañamiento de nuestro equipo técnico",
      icon: <Zap className="w-8 h-8" />
    },
    {
      number: "04",
      title: "Expansión Modular",
      description: "Ampliamos funcionalidades según las necesidades del negocio",
      icon: <ArrowRight className="w-8 h-8" />
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            🚀 Nuestras Soluciones
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Qué <span className="text-yellow-500">Hacemos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos dos modelos de servicio complementarios que se adaptan a las necesidades específicas de cada organización
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 relative overflow-hidden">
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-yellow-400 text-black p-4 rounded-2xl shadow-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">Incluye:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-white p-4 rounded-xl mb-6 border border-gray-200">
                    <h4 className="font-semibold text-black mb-2">Ventaja diferencial:</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {service.benefits}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className="bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all duration-300">
                    <span>Conocer más</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          className="bg-black text-white p-12 rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Nuestro <span className="text-yellow-400">Proceso</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Metodología probada para la implementación exitosa de soluciones digitales
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                    {step.number}
                  </div>
                  
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-yellow-400 mx-auto mb-4">
                    {step.icon}
                  </div>
                  
                  <h4 className="font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto">
            <span>Solicitar Consulta Gratuita</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;