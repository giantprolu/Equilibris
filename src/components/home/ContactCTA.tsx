import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-primary-800 text-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre organisation ?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Contactez-nous pour échanger sur vos besoins et découvrir comment nous pouvons vous accompagner 
            avec une approche unique combinant psychologie et droit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-primary-800 hover:bg-primary-50 transition-colors btn"
            >
              Prendre rendez-vous
            </Link>
            <Link 
              to="/services" 
              className="text-white border border-primary-300 hover:bg-primary-700 transition-colors btn inline-flex items-center"
            >
              Découvrir nos services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;