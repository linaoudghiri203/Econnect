// =================================================================
// FICHIER : src/components/MainNavbar.js
// Rôle : Barre de navigation affichée après la connexion.
// =================================================================
import React from 'react';
import logo from '../assets/images/logo.png';
import Icon from './Icon';
import { icons } from '../api/mockData';

const MainNavbar = ({ onLogout, onNavigate }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Cliquer ramène à la page de bienvenue */}
          <button onClick={onLogout} className="flex items-center">
            <img src={logo} alt="Connect Transit Logo" className="h-10 w-auto" />
          </button>
          
          {/* Liens de navigation à droite */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => onNavigate('about')}
              className="py-2 px-3 text-gray-600 font-semibold hover:text-purple-600 transition duration-300"
            >
              À propos
            </button>
            <button 
              onClick={onLogout}
              className="flex items-center py-2 px-3 text-gray-600 font-semibold hover:text-purple-600 transition duration-300"
            >
              <Icon path={icons.logout} className="w-6 h-6 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
