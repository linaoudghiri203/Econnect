// =================================================================
// FICHIER : src/pages/WelcomePage.js
// Rôle : Page d'accueil présentant le projet avec un design moderne et dynamique.
// =================================================================

import React, { useState, useEffect } from 'react';
import vicLogo from '../assets/images/VIC_logo.png';
import allianceLogo from '../assets/images/alliance_logo.png';

const WelcomePage = ({ onStart }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState([]);

  // Animation d'apparition au chargement
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Génération de particules flottantes
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1, // Taille des particules ajustée
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white font-sans flex flex-col relative overflow-hidden">
      {/* Particules flottantes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Section principale */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center relative z-10">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Titre principal avec effet de gradient */}
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            VIC TRANSPORT
          </h1>
          
          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
            Plateforme intelligente de supervision et communication
            <br />
            <span className="text-purple-400 font-semibold">pour les transports en temps réel</span>
          </p>

          {/* Bouton principal avec effet glassmorphism */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <button
              onClick={onStart}
              className="relative bg-gray-900/50 backdrop-blur-xl border border-purple-500/30 p-8 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 cursor-pointer text-white transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold">Commencer</span>
                <svg 
                  className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <p className="mt-3 text-sm text-purple-300 opacity-80">
                Supervision • Communication • Temps réel
              </p>
            </button>
          </div>
        </div>
      </main>

      {/* Footer amélioré */}
      <footer className="bg-gray-900/80 backdrop-blur-xl border-t border-purple-500/20 p-6 w-full relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Section Partenaires */}
            <div className="flex items-center space-x-6">
              <span className="text-sm font-semibold text-gray-400 border-l-2 border-purple-500 pl-3">
                Nos Partenaires
              </span>
              <div className="flex items-center space-x-4">
                <img 
                  src={vicLogo} 
                  alt="VIC Tech Logo" 
                  className="h-10 filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" 
                />
                <img 
                  src={allianceLogo} 
                  alt="Alliance 3000 Logo" 
                  className="h-12 filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" 
                />
              </div>
            </div>

            {/* Section Contact */}
            <div className="flex items-center space-x-4">
              <a
                href="mailto:vic.sarlau@gmail.com"
                className="group flex items-center space-x-2 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 rounded-lg px-4 py-2 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-purple-300 group-hover:text-purple-200">
                  vic.sarlau@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
