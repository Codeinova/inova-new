import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MessageSquare, BarChart3, Users, Network, Play, ChevronRight } from 'lucide-react';

const Methodology = () => {
  const [activeTab, setActiveTab] = useState('ecosystem');

  const ecosystemTools = [
    {
      id: 'colectiva',
      title: 'Colectiva App',
      description: 'Permite a los profesionales registrar con precisión todos los procesos técnicos, de sostenibilidad y administrativos en campo.',
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        'Georreferenciación offline',
        'Generación de agendas de trabajo',
        'Alertas inteligentes',
        'Reportes PDF al instante',
        'Disponible en todas las plataformas',
        'Operativa online y offline'
      ],
      videoPlaceholder: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'ari',
      title: 'Asistente WhatsApp (ARI)',
      description: 'Permite a productores y profesionales interactuar con todos los servicios directamente desde WhatsApp.',
      icon: <MessageSquare className="w-8 h-8" />,
      features: [
        'Registro y actualización de datos',
        'Acceso a minicursos',
        'Coordinación de asesorías con IA',
        'Gestión de trámites y pagos',
        'Automatización de PQRSF',
        'Alertas inteligentes personalizadas'
      ],
      videoPlaceholder: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'bi',
      title: 'In-Ova BI',
      description: 'Centraliza y consolida automáticamente los datos capturados en campo, simplificando la evaluación y seguimiento.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        'Tablas dinámicas y gráficos',
        'Mapas inteligentes',
        'Segmentación de información',
        'Detección de patrones',
        'Alertas por desviaciones',
        'Biblioteca de informes PDF'
      ],
      videoPlaceholder: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const tabs = [
    { id: 'ecosystem', label: 'Ecosistema Digital', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'talent', label: 'Talento en Territorio', icon: <Users className="w-5 h-5" /> },
    { id: 'network', label: 'Red de Aliados', icon: <Network className="w-5 h-5" /> }
  ];

  const renderEcosystemContent = () => (
    <div className="space-y-12">
      {ecosystemTools.map((tool, index) => (
        <motion.div
          key={tool.id}
          className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-400 text-black p-3 rounded-xl">
                {tool.icon}
              </div>
              <h3 className="text-2xl font-bold text-black">{tool.title}</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              {tool.description}
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {tool.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all duration-300">
              <span>Ver en acción</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={tool.videoPlaceholder}
                alt={`${tool.title} demo`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8" />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
              Demo disponible
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderTalentContent = () => (
    <motion.div
      className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-black mb-6">
            Talento Multidisciplinar en Territorio
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Contamos con un equipo multidisciplinar (veterinarios, agrónomos, zootecnistas y analistas de datos) 
            desplegado en zonas rurales o de forma remota y equipados con nuestro ecosistema digital.
          </p>
          
          <div className="space-y-4 mb-6">
            {[
              'Implementación y supervisión de actividades en campo',
              'Captura y validación de información al instante',
              'Análisis predictivo y recomendaciones en tiempo real',
              'Trazabilidad completa de procesos',
              'Reducción de tiempos y errores',
              'Optimización de costos operativos'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-400 text-black p-4 rounded-xl">
            <p className="font-medium">
              Este modelo BPO garantiza trazabilidad completa, reduce tiempos y errores, 
              y optimiza costos al unir lo mejor del talento humano con nuestra tecnología.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Equipo en campo"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  );

  const renderNetworkContent = () => (
    <motion.div
      className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-black mb-4">
          Red de Aliados Estratégicos
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Articulamos instituciones públicas, fundaciones, universidades y entidades financieras 
          para potenciar la adopción y el impacto de nuestras soluciones.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Instituciones Públicas', icon: '🏛️', count: '15+' },
          { title: 'Fundaciones', icon: '🤝', count: '8+' },
          { title: 'Universidades', icon: '🎓', count: '12+' },
          { title: 'Entidades Financieras', icon: '🏦', count: '5+' }
        ].map((ally, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <div className="text-4xl mb-3">{ally.icon}</div>
            <div className="text-2xl font-bold text-black mb-2">{ally.count}</div>
            <div className="text-sm text-gray-600 font-medium">{ally.title}</div>
          </div>
        ))}
      </div>
      
      <div className="bg-yellow-400 text-black p-6 rounded-xl text-center">
        <p className="font-medium">
          Estas alianzas facilitan la expansión regional y aseguran que cada intervención 
          responda a necesidades locales específicas en el sector rural.
        </p>
      </div>
    </motion.div>
  );

  return (
    <section id="metodologia" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            ⚙️ Nuestra Metodología
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Cómo lo <span className="text-yellow-500">Hacemos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Combinamos ecosistema digital, talento técnico en campo y alianzas estratégicas 
            para cubrir el ciclo completo de valor en el sector rural
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-yellow-400 text-black shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'ecosystem' && renderEcosystemContent()}
          {activeTab === 'talent' && renderTalentContent()}
          {activeTab === 'network' && renderNetworkContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;