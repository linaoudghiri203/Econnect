// =================================================================
// FICHIER : src/pages/StationView.js
// Rôle : Affichage pour les écrans en station.
// =================================================================
import React from 'react';

const mockDepartures = [
  { line: '12', destination: 'Ain Diab', time: 'À l\'heure', platform: 'A' },
  { line: '07', destination: 'Sidi Maarouf', time: '5 min', platform: 'B' },
  { line: '21', destination: 'Gare ONCF', time: '12 min', platform: 'A' },
  { line: '35', destination: 'Anfa Place', time: '15 min', platform: 'C' },
];

const StationView = () => {
  return (
    <div className="p-4 bg-blue-900 text-white min-h-screen font-sans">
      <div className="flex justify-between items-center border-b-2 border-blue-700 pb-2">
        <h1 className="text-5xl font-extrabold tracking-wider">Départs</h1>
        <div className="text-5xl font-bold">16:30</div>
      </div>
      <div className="mt-4">
        <table className="w-full text-3xl">
          <thead>
            <tr className="text-left text-yellow-400">
              <th className="py-3">Ligne</th>
              <th>Destination</th>
              <th>Départ dans</th>
              <th>Quai</th>
            </tr>
          </thead>
          <tbody>
            {mockDepartures.map((dep, index) => (
              <tr key={index} className="border-b border-blue-800">
                <td className="py-5 font-bold bg-yellow-400 text-blue-900 text-center mr-4 w-24">{dep.line}</td>
                <td className="py-5 font-semibold">{dep.destination}</td>
                <td className="py-5 text-green-400 font-bold">{dep.time}</td>
                <td className="py-5 font-bold">{dep.platform}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StationView;
