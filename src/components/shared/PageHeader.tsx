import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgClass?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  bgClass = "bg-gradient-to-r from-primary-50 to-secondary-50" 
}) => {
  return (
    <section className={`py-20 ${bgClass} relative overflow-hidden`}>
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-accent-200 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-primary-200 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          {subtitle && (
            <p className="text-xl text-secondary-700">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;