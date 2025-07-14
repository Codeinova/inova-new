import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, MessageSquare, Zap, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <MessageSquare className="w-5 h-5" />, 
      href: '#',
      label: 'Chatbot In-Ova',
      featured: true
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: '#',
      label: 'LinkedIn'
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: '#',
      label: 'Instagram'
    }
  ];

  const footerLinks = [
    {
      title: 'Ecosistema Digital',
      links: [
        { name: 'Colectiva App', href: '#' },
        { name: 'Asistente ARI', href: '#' },
        { name: 'In-Ova BI', href: '#' },
        { name: 'Integraciones', href: '#' }
      ]
    },
    {
      title: 'Servicios',
      links: [
        { name: 'BPO Especializado', href: '#' },
        { name: 'Suscripciones SaaS', href: '#' },
        { name: 'Consultoría', href: '#' },
        { name: 'Soporte 24/7', href: '#' }
      ]
    },
    {
      title: 'Sectores',
      links: [
        { name: 'Agricultura', href: '#' },
        { name: 'Ganadería', href: '#' },
        { name: 'Sostenibilidad', href: '#' },
        { name: 'Otros Sectores', href: '#' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Casos de Éxito', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Documentación', href: '#' },
        { name: 'Webinars', href: '#' }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'contacto@in-ova.co',
      href: 'mailto:contacto@in-ova.co'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Medellín, Colombia',
      href: '#'
    }
  ];

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-3xl font-bold">IN-OVA</h3>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Impulsamos el desarrollo rural sostenible mediante la inteligencia colectiva. 
              Articulamos tecnología, talento humano y redes de aliados para transformar el sector rural.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  {info.icon}
                  <span className="text-sm">{info.text}</span>
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`relative w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all duration-300 group ${social.featured ? 'ring-2 ring-yellow-400' : ''}`}
                  title={social.label}
                >
                  {social.icon}
                  {social.featured && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Zap className="w-2 h-2 text-black" />
                    </div>
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-yellow-400">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-8 rounded-2xl mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para transformar tu organización?
            </h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Únete a las organizaciones líderes que ya están impulsando el desarrollo rural sostenible 
              con nuestro ecosistema digital.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
              <MessageSquare className="w-5 h-5" />
              <span>Iniciar Conversación</span>
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 In-Ova. Todos los derechos reservados. Impulsando el desarrollo rural sostenible.
            </p>
            <div className="flex space-x-6">
              {['Privacidad', 'Términos', 'Cookies'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;