import React from 'react';
import { motion } from 'framer-motion';

interface InterventionFormatProps {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  delay?: number;
}

const InterventionFormat: React.FC<InterventionFormatProps> = ({ 
  title, 
  description, 
  details,
  icon,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg shadow-md p-8 h-full"
    >
      <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-secondary-800 mb-6">{description}</p>
      
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-600 mr-2">•</span>
            <span className="text-secondary-800">{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default InterventionFormat;