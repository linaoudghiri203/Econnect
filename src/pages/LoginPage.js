// =================================================================
// FICHIER : src/pages/LoginPage.js
// Rôle : Page d'accueil et de connexion, avec logo cliquable.
// =================================================================
import React from 'react';
import logo from '../assets/images/logo.png';

const LoginPage = ({ onLogin, onGoToWelcome }) => {
  const handleSignUpClick = () => {
    alert("Redirection vers la future page d'inscription.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-12">
          {/* Le logo est maintenant un bouton qui retourne à l'accueil */}
          <button onClick={onGoToWelcome} className="transition-transform transform hover:scale-105">
            <img src={logo} alt="Connect Transit Logo" className="w-auto h-20 mx-auto" />
          </button>
          <h1 className="text-4xl font-extrabold text-gray-800 mt-6">
            Bienvenue sur Connect Transit
          </h1>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Accédez à votre espace</h2>
          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full px-4 py-3 bg-gray-100 border-transparent rounded-md focus:ring-purple-500 focus:border-purple-500" 
                  placeholder="vous@exemple.com"
                  defaultValue="admin@connect.ma"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input 
                  type="password" 
                  id="password" 
                  className="mt-1 block w-full px-4 py-3 bg-gray-100 border-transparent rounded-md focus:ring-purple-500 focus:border-purple-500" 
                  placeholder="********"
                  defaultValue="password"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-md hover:bg-purple-700 transition duration-300"
              >
                Se connecter
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-500 mt-8">
            Pas encore de compte ? 
            <button 
              onClick={handleSignUpClick} 
              className="font-medium text-purple-600 hover:text-purple-500 ml-1"
            >
              S'inscrire
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
