import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users } from 'lucide-react';

const CaseStudyPreview = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary-800 mb-6">Études de cas</h2>
          <p className="text-lg text-secondary-700">
            Découvrez comment nous avons accompagné nos clients dans la résolution 
            de leurs problématiques et l'atteinte de leurs objectifs.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-secondary-50 rounded-lg overflow-hidden shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center justify-center bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                Étude de cas
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Transformation d'une équipe en difficulté</h3>
              
              <p className="text-secondary-800 mb-6">
                Comment nous avons accompagné une équipe managériale en tension 
                vers une dynamique collaborative et performante, tout en respectant 
                le cadre juridique de l'entreprise.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-secondary-800">Diagnostic organisationnel complet</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-secondary-800">Coaching individuel des managers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-secondary-800">Ateliers collectifs de cohésion</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium">Équipe de 12 personnes</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-accent-500 mr-2" />
                  <span className="text-sm font-medium">+40% de productivité</span>
                </div>
              </div>
              
            </div>
            
            <div className="relative h-80 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Équipe en réunion" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        <div className="text-center mt-12">
          <Link to="/s-de-cas" className="btn-secondary">
            Explorer toutes nos études de cas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;