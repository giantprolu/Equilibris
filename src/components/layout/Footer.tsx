import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, MapPin, Scale } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and short description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-primary-400" />
              <span className="ml-2 text-xl font-display font-bold text-white">
                Equilibris Consulting<span className="text-accent-500">.</span>
              </span>
            </div>
            <p className="text-secondary-300 mb-6">
              Cabinet de coaching en entreprise et conseil en droit social. Une approche unique combinant psychologie et droit.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/qui-suis-je" className="text-secondary-300 hover:text-white transition-colors">
                  Qui suis-je ?
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/methode" className="text-secondary-300 hover:text-white transition-colors">
                  Méthode
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-400 mt-1 mr-3" />
                <a href="mailto:contact@equilibris-consulting.com" className="text-secondary-300 hover:text-white transition-colors">
                  contact@equilibris-consulting.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-400 mt-1 mr-3" />
                <a href="tel:+33647258250" className="text-secondary-300 hover:text-white transition-colors">
                  +33 6 47 25 82 50
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 mr-3" />
                <span className="text-secondary-300">
                  Lille, France
                </span>
              </li>
              <li className="flex items-start mt-4">
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display text-lg mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors">
                  Prendre rendez-vous
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-secondary-300 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-secondary-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 mt-12 pt-8 text-center md:text-left md:flex md:justify-between">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} Equilibris Consulting. Tous droits réservés.
          </p>
          <p className="text-secondary-400 text-sm mt-2 md:mt-0">
            Conçu par <a href="#" className="text-primary-400 hover:text-primary-300">Equilibris Consulting Design</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;