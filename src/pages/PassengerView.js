
// =================================================================
// FICHIER : src/pages/PassengerView.js
// Rôle : Interface pour le passager.
// =================================================================
import React from 'react';

const PassengerView = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-700">Bienvenue sur Connect Transit</h1>
        <p className="text-gray-600 mt-2">Votre voyage, simplifié et sécurisé.</p>
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Planifiez votre trajet</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="start" className="block text-sm font-medium text-gray-700">Point de départ</label>
              <input type="text" id="start" className="mt-1 block w-full px-4 py-3 bg-gray-100 border-transparent rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="Ex: Maarif, Casablanca" />
            </div>
            <div>
              <label htmlFor="end" className="block text-sm font-medium text-gray-700">Destination</label>
              <input type="text" id="end" className="mt-1 block w-full px-4 py-3 bg-gray-100 border-transparent rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="Ex: Gare de Casa-Port" />
            </div>
            <button className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-md hover:bg-purple-700 transition duration-300">
              Rechercher un itinéraire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerView;
