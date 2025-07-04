// =================================================================
// FICHIER : src/pages/AdminView.js
// Rôle : Le tableau de bord de l'administrateur.
// =================================================================

import React, { useState } from 'react';
import { icons } from '../api/mockData';
import Icon from '../components/Icon';
import Dashboard from './Dashboard';
import Fleet from './Fleet';
import Shelters from './Shelters';
import Placeholder from './Placeholder';
import UserTracking from './UserTracking';
import BsbLogsView from './BsbLogsView'; // Importer la nouvelle page de logs

const AdminView = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de Bord', icon: icons.dashboard },
    { id: 'bsb', label: 'BSB Live Logs', icon: icons.bsb }, // Nouvel élément de menu
    { id: 'users', label: 'Suivi Utilisateurs', icon: icons.users },
    { id: 'fleet', label: 'Flotte', icon: icons.fleet },
    { id: 'alerts', label: 'Alertes', icon: icons.alerts },
    { id: 'routes', label: 'Optimisation Trajets', icon: icons.routes },
    { id: 'maintenance', label: 'Maintenance', icon: icons.maintenance },
    { id: 'analytics', label: 'Analyses', icon: icons.analytics },
    { id: 'shelters', label: 'Abribus Connectés', icon: icons.shelters },
  ];

  const renderAdminView = () => {
    switch (activeView) {
      case 'dashboard': return <Dashboard />;
      case 'bsb': return <BsbLogsView />; // Cas pour la nouvelle vue
      case 'users': return <UserTracking />;
      case 'fleet': return <Fleet />;
      case 'shelters': return <Shelters />;
      case 'alerts': return <Placeholder title="Gestion des Alertes" />;
      case 'routes': return <Placeholder title="Optimisation des Trajets" />;
      case 'maintenance': return <Placeholder title="Maintenance Prédictive" />;
      case 'analytics': return <Placeholder title="Analyses et Rapports" />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      <nav className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 border-b flex items-center">
          <div className="ml-3">
            <h1 className="text-lg font-bold text-gray-800">Portail Admin</h1>
            <p className="text-xs text-gray-500">Connect Transit</p>
          </div>
        </div>
        <div className="flex-grow">
          <ul>
            {menuItems.map(item => (
              <li key={item.id} className="px-4">
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center w-full text-left py-3 px-3 my-1 rounded-lg transition-colors ${
                    activeView === item.id 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon path={item.icon} />
                  <span className="ml-4 font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="flex-1 p-6 lg:p-10">
        {renderAdminView()}
      </main>
    </div>
  );
}

export default AdminView;
