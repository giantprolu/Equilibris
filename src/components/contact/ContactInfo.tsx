import React from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-primary-50 rounded-lg p-8">
      <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="w-5 h-5 text-primary-600 mt-1 mr-4" />
          <div>
            <h4 className="font-bold text-secondary-900">Email</h4>
            <a 
              href="mailto:contact@equilibris-consulting.com" 
              className="text-secondary-700 hover:text-primary-600 transition-colors"
            >
              contact@equilibris-consulting.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="w-5 h-5 text-primary-600 mt-1 mr-4" />
          <div>
            <h4 className="font-bold text-secondary-900">Téléphone</h4>
            <a 
              href="tel:+33123456789" 
              className="text-secondary-700 hover:text-primary-600 transition-colors"
            >
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-primary-600 mt-1 mr-4" />
          <div>
            <h4 className="font-bold text-secondary-900">Adresse</h4>
            <p className="text-secondary-700">
              Paris, France
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="w-5 h-5 text-primary-600 mt-1 mr-4" />
          <div>
            <h4 className="font-bold text-secondary-900">Horaires</h4>
            <p className="text-secondary-700">
              Lundi - Vendredi: 9h - 18h
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Linkedin className="w-5 h-5 text-primary-600 mt-1 mr-4" />
          <div>
            <h4 className="font-bold text-secondary-900">LinkedIn</h4>
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-secondary-700 hover:text-primary-600 transition-colors"
            >
              linkedin.com/in/vanessa-lefebvre
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-secondary-200">
        <h4 className="font-bold text-secondary-900 mb-2">Besoin d'un rendez-vous rapide ?</h4>
        <p className="text-secondary-700 mb-4">
          Utilisez notre formulaire de contact ou appelez-nous directement pour une prise de rendez-vous rapide.
        </p>
        <a 
          href="tel:+33123456789" 
          className="btn-accent inline-block w-full text-center"
        >
          Appeler maintenant
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;