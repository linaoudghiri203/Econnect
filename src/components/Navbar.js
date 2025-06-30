// =================================================================
// FICHIER : src/components/Navbar.js
// Rôle : Affiche la barre de navigation principale avec le logo et les liens.
// =================================================================
import React from 'react';
import logo from '../assets/images/logo.png'; // Importation du logo

const Navbar = ({ setView }) => {
  const navLinks = [
    { id: 'passenger', name: 'Vue Passager' },
    { id: 'station', name: 'Vue Station' },
    { id: 'driver', name: 'Vue Chauffeur' },
    { id: 'admin', name: 'Portail Admin' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <button onClick={() => setView('passenger')} className="flex items-center py-4 px-2">
              <img src={logo} alt="Connect Transit Logo" className="h-10 w-auto" />
            </button>
          </div>
          {/* Liens de navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => setView(link.id)} 
                className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-600 transition duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>
          {/* Bouton mobile (optionnel) */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg className=" w-6 h-6 text-gray-500 hover:text-purple-600 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
