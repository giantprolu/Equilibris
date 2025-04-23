import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Lightbulb, Target, TrendingUp, Users } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  client: string;
  context: string;
  challenge: string;
  approach: string[];
  results: string[];
  duration: string;
  teamSize: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  imageUrl: string;
  order: 'normal' | 'reverse';
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  client,
  context,
  challenge,
  approach,
  results,
  duration,
  teamSize,
  metrics,
  imageUrl,
  order,
}) => {
  return (
    <div className="py-16">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
        order === 'reverse' ? 'lg:flex lg:flex-row-reverse' : ''
      }`}>
        <motion.div
          initial={{ opacity: 0, x: order === 'reverse' ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <div className="inline-flex items-center justify-center bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {client}
            </div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4">{title}</h2>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center bg-secondary-50 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-primary-600 mr-2" />
                <span className="text-sm font-medium">{duration}</span>
              </div>
              <div className="flex items-center bg-secondary-50 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-primary-600 mr-2" />
                <span className="text-sm font-medium">{teamSize}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Contexte</h3>
            <p className="text-secondary-800">{context}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Problématique</h3>
            <p className="text-secondary-800">{challenge}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Notre approche</h3>
            <ul className="space-y-2">
              {approach.map((step, index) => (
                <li key={index} className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-accent-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-800">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Résultats</h3>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-800">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-secondary-100">
                <div className="flex items-center mb-2">
                  {metric.icon}
                  <span className="text-sm font-medium text-secondary-700 ml-2">{metric.label}</span>
                </div>
                <p className="text-2xl font-bold text-primary-800">{metric.value}</p>
              </div>
            ))}
          </div>
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

export default CaseStudy;