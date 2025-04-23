import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Scale } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Qui suis-je ?', path: '/qui-suis-je' },
    { name: 'Services', path: '/services' },
    { name: 'Études de cas', path: '/etudes-de-cas' },
    { name: 'Méthode', path: '/methode' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="sr-only">Equilibris Consulting</span>
          <div className="flex items-center">
            <Scale className="w-7 h-7 text-primary-600" />
            <span className="ml-2 text-xl font-display font-bold text-primary-800">
              Equilibris<span className="text-accent-500">.</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary-600 ${
                  isActive 
                    ? 'text-primary-600'
                    : scrolled 
                      ? 'text-secondary-900' 
                      : 'text-secondary-800'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary text-sm py-2">
            Prendre rendez-vous
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          className="md:hidden p-2 text-secondary-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            <div className="container px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-secondary-900 hover:bg-primary-50 hover:text-primary-600'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="block mt-4 w-full btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Prendre rendez-vous
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;