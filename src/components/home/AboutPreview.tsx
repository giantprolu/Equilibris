import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="section bg-primary-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-primary-800 mb-6">Vanessa Lefebvre</h2>
            <h3 className="text-xl text-accent-600 mb-6">Fondatrice d'Equilibris Consulting</h3>
            
            <p className="mb-6 text-secondary-800">
              Diplômée en psychologie et en droit social, j'accompagne depuis plus de 15 ans les entreprises 
              et leurs collaborateurs dans leurs transformations et problématiques humaines.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-white rounded-full p-2 mr-4">
                  <GraduationCap className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">Double expertise</h4>
                  <p className="text-secondary-700">Formation en psychologie et droit social</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white rounded-full p-2 mr-4">
                  <Award className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">Expérience éprouvée</h4>
                  <p className="text-secondary-700">Plus de 15 ans dans l'accompagnement des organisations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white rounded-full p-2 mr-4">
                  <Heart className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">Approche bienveillante</h4>
                  <p className="text-secondary-700">Une écoute attentive au service de l'humain</p>
                </div>
              </div>
            </div>
            
            <Link to="/qui-suis-je" className="btn-primary">
              Découvrir mon parcours
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent-100 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Vanessa Lefebvre - Portrait" 
                className="relative z-10 rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20">
                <p className="text-primary-800 font-display italic">
                  "Le bien-être au travail est un équilibre à construire ensemble."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;