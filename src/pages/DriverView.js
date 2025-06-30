// =================================================================
// FICHIER : src/pages/DriverView.js
// Rôle : Interface pour le chauffeur.
// =================================================================
import React from 'react';

const DriverView = () => {
  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ligne 12 - BUS-001</h1>
          <span className="px-4 py-1 text-sm font-semibold rounded-full bg-green-500">En service</span>
        </div>
        <div className="mt-8 text-center bg-gray-700 p-8 rounded-lg">
          <p className="text-xl text-gray-400">Prochain arrêt</p>
          <h2 className="text-6xl font-bold mt-2">Boulevard d'Anfa</h2>
          <p className="text-2xl text-green-400 mt-4">À l'heure</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-blue-500 text-white font-bold py-6 rounded-lg text-xl hover:bg-blue-600">
          Message Central
        </button>
        <button className="bg-red-600 text-white font-bold py-6 rounded-lg text-xl hover:bg-red-700">
          Alerte Urgence
        </button>
      </div>
    </div>
  );
};

export default DriverView;
