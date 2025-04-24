import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-50 to-secondary-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-accent-200 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-primary-200 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
      </div>
      
      <div className="container relative z-10 min-h-[80vh] flex flex-col justify-center pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary-800">Coach</span> en psychologie & <span className="text-primary-800">Conseil</span> en droit social
            </h1>
            <p className="text-xl text-primary-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Une approche unique combinant expertise en psychologie et droit social pour accompagner les organisations et leurs talents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services" className="btn-primary">
                Découvrir nos services
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center">
                Prendre contact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-primary-100 absolute w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
            <img 
              src="public/Equilibris.png" 
              alt="Vanessa Lefebvre - Equilibris Consulting" 
              className="relative z-10 rounded-lg shadow-xl h-auto max-w-full mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;