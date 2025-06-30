// =================================================================
// FICHIER : src/App.js
// Rôle : Fichier principal qui gère la navigation entre les vues.
// =================================================================

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PassengerView from './pages/PassengerView';
import StationView from './pages/StationView';
import DriverView from './pages/DriverView';
import AdminView from './pages/AdminView';

export default function App() {
  // 'passenger' est la vue par défaut
  const [currentView, setCurrentView] = useState('passenger');

  const renderView = () => {
    switch (currentView) {
      case 'passenger':
        return <PassengerView />;
      case 'station':
        return <StationView />;
      case 'driver':
        return <DriverView />;
      case 'admin':
        return <AdminView />;
      default:
        return <PassengerView />;
    }
  };

  return (
    <div>
      <Navbar setView={setCurrentView} />
      <main>
        {renderView()}
      </main>
    </div>
  );
}
