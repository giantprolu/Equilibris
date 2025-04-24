import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Briefcase, BookOpen, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-8 h-8 text-[#eec1ac]" />,
    title: 'Accompagnement individuel & collectif',
    description: 'Coaching individuel (managers, salariés en transition, situations de mal-être, burn-out)',
    link: '/services#accompagnement',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#eec1ac]" />,
    title: 'Conseil RH & Accompagnement juridique',
    description: 'Expertise juridique et accompagnement stratégique pour la gestion des ressources humaines et des relations sociales.',
    link: '/services#conseil',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[#eec1ac]" />,
    title: 'Formations & sensibilisations',
    description: 'Sessions de formation sur-mesure pour développer les compétences managériales et la culture d\'entreprise.',
    link: '/services#formations',
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary-800 mb-6">Nos services</h2>
          <p className="text-lg text-secondary-700">
            Des prestations adaptées aux besoins des organisations et de leurs collaborateurs, 
            avec une approche transversale alliant expertise psychologique et juridique.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-400 rounded-lg shadow-md p-8 border border-[#eec1ac] hover:border-[#eec1ac] hover:border-2 transition-all duration-300 group"
            >
              <div className="bg-primary-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#eec1ac]">{service.title}</h3>
              <p className="text-white mb-6">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-[#eec1ac] font-medium hover:text-white transition-colors"
              >
                En savoir plus
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            Explorer tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;