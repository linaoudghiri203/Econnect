// =================================================================
// FICHIER : src/pages/UserTracking.js
// Rôle : Affiche le tableau de suivi des passagers et utilisateurs WiFi.
// =================================================================

import React from 'react';
import { mockData } from '../api/mockData';

const UserTracking = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Passager avec WiFi':
        return 'bg-green-100 text-green-800';
      case 'Passager sans WiFi':
        return 'bg-blue-100 text-blue-800';
      case 'Utilisateur WiFi':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Suivi des Utilisateurs</h1>
      <p className="text-gray-500 mt-1">Liste des passagers et des connexions WiFi.</p>
      <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horaire Ticket</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockData.users.map(user => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.nom}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.prenom}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.horaireTicket || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(user.statut)}`}>
                    {user.statut}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTracking;
