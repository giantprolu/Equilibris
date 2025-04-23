import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCategoryProps {
  id: string;
  title: string;
  description: string;
  offerings: string[];
  benefits: string[];
  imageUrl: string;
  order: 'normal' | 'reverse';
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  id,
  title,
  description,
  offerings,
  benefits,
  imageUrl,
  order,
}) => {
  return (
    <div id={id} className="py-16 scroll-mt-20">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
        order === 'reverse' ? 'lg:flex lg:flex-row-reverse' : ''
      }`}>
        <motion.div
          initial={{ opacity: 0, x: order === 'reverse' ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary-800 mb-6">{title}</h2>
          
          <p className="text-secondary-800 mb-8">{description}</p>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Nos prestations</h3>
            <ul className="space-y-2">
              {offerings.map((offering, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-800">{offering}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Bénéfices</h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-800">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
          >
            Demander un devis
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: order === 'reverse' ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className={`absolute inset-0 ${
              order === 'reverse' ? 'bg-primary-100' : 'bg-accent-100'
            } rounded-lg transform ${
              order === 'reverse' ? 'rotate-3' : '-rotate-3'
            }`}></div>
            <img 
              src={imageUrl} 
              alt={title} 
              className="relative z-10 rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCategory;