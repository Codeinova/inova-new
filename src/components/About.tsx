import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, ChevronRight, X, Smartphone, MessageSquare, BarChart3 } from 'lucide-react';

const About = () => {
  const [selectedModal, setSelectedModal] = useState<string | null>(null);

  const ecosystemItems = [
    {
      id: 'colectiva',
      title: 'Colectiva App',
      description: 'Captura 360° de procesos agropecuarios, incluso sin conexión a internet.',
      icon: <Smartphone className="w-8 h-8" />,
      details: {
        title: 'Colectiva App - Captura Integral de Procesos',
        content: `Permite a los profesionales registrar con precisión todos los procesos técnicos, de sostenibilidad y administrativos en campo, vinculando la información del predio o productor y construyendo así un historial acumulativo.

        Funcionalidades clave:
        • Georreferenciación offline
        • Generación de agendas de trabajo
        • Alertas inteligentes
        • Reportes PDF al instante
        • Disponible en PlayStore, AppStore y Web
        • Operativa tanto en línea como fuera de ella

        La información de campo está siempre completa y lista para el análisis, garantizando continuidad operativa sin importar la conectividad.`
      }
    },
    {
      id: 'ari',
      title: 'Asistente WhatsApp (ARI)',
      description: 'Canal inteligente para toma de datos, procesos de formación y campañas.',
      icon: <MessageSquare className="w-8 h-8" />,
      details: {
        title: 'ARI - Asistente Inteligente por WhatsApp',
        content: `Permite a productores y profesionales interactuar con todos los servicios directamente desde WhatsApp.

        Capacidades principales:
        • Registra y actualiza datos en tiempo real
        • Accede a minicursos especializados
        • Coordina asesorías con IA o profesionales expertos
        • Gestiona trámites y pagos
        • Automatiza PQRSF
        • Recibe alertas inteligentes por fechas, valores o ubicaciones críticas

        Cada conversación se integra automáticamente a In-Ova BI, generando insights en tiempo real para optimizar decisiones y medir el impacto de los programas.`
      }
    },
    {
      id: 'bi',
      title: 'In-Ova BI',
      description: 'Analítica en tiempo real con mapas y modelos predictivos.',
      icon: <BarChart3 className="w-8 h-8" />,
      details: {
        title: 'In-Ova BI - Business Intelligence Avanzado',
        content: `Centraliza y consolida automáticamente los datos capturados en campo, simplificando la evaluación y el seguimiento de los programas rurales.

        Características destacadas:
        • Tablas dinámicas y gráficos al instante
        • Mapas inteligentes interactivos
        • Segmentación avanzada de información
        • Detección automática de patrones
        • Alertas por desviaciones críticas
        • Gestión de agendas integrada
        • Evaluación del desempeño de equipos
        • Biblioteca de informes PDF personalizables

        Todo desde un único panel que brinda información precisa y en tiempo real para la toma de decisiones estratégicas.`
      }
    }
  ];

  const teamMembers = [
    {
      name: 'Juan Sebastián Pineda Arango',
      role: 'Director de Estrategia',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Nelson David Aristizábal Amaya',
      role: 'CTO (Chief Technology Officer)',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Susana Márquez Montoya',
      role: 'Analista de Procesos',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Martha Rosa Valverde Luna',
      role: 'Analista de Procesos',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Carlos Nicolas Mápura Borja',
      role: 'Gestor Comercial',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Leidy Johana Marín Duque',
      role: 'Coordinadora Administrativa',
      image: 'https://images.pexels.com/photos/3756680/pexels-photo-3756680.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Carlos Andrés García Duque',
      role: 'Gestor Comercial',
      image: 'https://images.pexels.com/photos/2182971/pexels-photo-2182971.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const Modal = ({ item, onClose }: { item: any; onClose: () => void }) => (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-black">{item.details.title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="prose prose-lg text-gray-700 whitespace-pre-line">
            {item.details.content}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="quienes-somos" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            🌱 Nuestra Identidad
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            ¿Quiénes <span className="text-yellow-500">Somos?</span>
          </h2>
        </motion.div>

        {/* Main Description */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En <strong>In-Ova</strong> articulamos <strong>tecnología</strong>, <strong>talento humano</strong> y <strong>redes de aliados</strong> para 
              impulsar el desarrollo rural sostenible. Acompañamos a organizaciones ancla y productores del campo 
              en su transformación digital, la captura y el análisis de datos, y la toma de decisiones orientadas 
              al crecimiento y la sostenibilidad.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hoy operamos bajo un <strong>modelo híbrido SaaS + BPO</strong>, apoyados en un ecosistema digital dinámico y flexible 
              que se adapta a cualquier sector que requiera digitalizar procesos, gestionar datos y tomar decisiones basadas en información.
            </p>
          </div>
        </motion.div>

        {/* Ecosystem Digital */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Nuestro <span className="text-yellow-500">Ecosistema Digital</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ecosystemItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedModal(item.id)}
              >
                <div className="bg-white p-8 rounded-2xl text-black shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-200">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <button className="flex items-center gap-2 text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                    <span>Más información</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Flexibility Note */}
        <motion.div
          className="bg-yellow-400 text-black p-8 rounded-2xl mb-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-medium">
            Aunque nacimos con foco en el agro, nuestro ecosistema es dinámico y flexible, 
            y se adapta a cualquier sector que requiera digitalizar procesos, gestionar datos 
            y tomar decisiones basadas en información.
          </p>
        </motion.div>

        {/* Purpose */}
        <motion.div
          className="bg-black text-white p-12 rounded-3xl mb-20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Nuestro <span className="text-yellow-400">Propósito</span>
            </h3>
            <p className="text-xl leading-relaxed text-gray-300 mb-4">
              <strong className="text-white">Impulsar el Desarrollo rural sostenible mediante la inteligencia colectiva.</strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Acompañamos a organizaciones ancla y a productores del campo en su transformación digital, 
              la captura y el análisis de datos, y la toma de decisiones basadas en información, 
              para generar valor económico, social y ambiental.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-black mb-4">
            Nuestro <span className="text-yellow-500">Equipo</span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un equipo multidisciplinario comprometido con la innovación y el desarrollo rural sostenible
          </p>

          {/* Team Photo Placeholder */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg mb-12 text-center border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-gray-600 italic">Foto del equipo In-Ova trabajando juntos</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-black text-center mb-2">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      {selectedModal && (
        <Modal
          item={ecosystemItems.find(item => item.id === selectedModal)}
          onClose={() => setSelectedModal(null)}
        />
      )}
    </section>
  );
};

export default About;