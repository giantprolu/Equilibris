import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container text-center px-4 py-16">
        <h1 className="text-8xl md:text-9xl font-bold text-primary-800 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl mb-6">Page non trouvée</h2>
        <p className="text-secondary-700 max-w-lg mx-auto mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;