import React from 'react';
import { motion } from 'framer-motion';

interface MethodStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const MethodStep: React.FC<MethodStepProps> = ({ 
  number, 
  title, 
  description, 
  icon,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary-600 h-full"
    >
      <div className="flex items-center mb-6">
        <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
          <span className="text-xl font-bold text-primary-800">{number}</span>
        </div>
        <div className="flex-1">
          <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mb-6 md:mb-0">
            {icon}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-secondary-800">{description}</p>
    </motion.div>
  );
};

export default MethodStep;