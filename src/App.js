// =================================================================
// FICHIER : src/App.js
// Rôle : Gère le flux principal de l'application.
// =================================================================

import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RoleSelectionModal from './components/RoleSelectionModal';
import PassengerView from './pages/PassengerView';
import DriverView from './pages/DriverView';
import AdminView from './pages/AdminView';
import AboutUsPage from './pages/AboutUsPage';
import MainNavbar from './components/MainNavbar'; 

export default function App() {
  const [appState, setAppState] = useState('welcome'); // 'welcome', 'login', 'passenger', 'driver', 'admin', 'about'
  const [userRole, setUserRole] = useState(null); // Stocke le rôle principal de l'utilisateur
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleToLogin, setRoleToLogin] = useState(null);

  // 1. Appelé depuis le bouton "Commencer" de la page de bienvenue
  const handleStart = () => {
    setIsModalOpen(true);
  };

  // 2. Appelé depuis le pop-up quand un rôle est choisi
  const handleRoleSelectForLogin = (role) => {
    setRoleToLogin(role);
    setAppState('login');
    setIsModalOpen(false);
  };

  // 3. Appelé depuis la page de connexion après soumission du formulaire
  const handleLogin = () => {
    if (roleToLogin) {
      setAppState(roleToLogin);
      setUserRole(roleToLogin);
    }
  };
  
  // 4. Appelé pour la déconnexion
  const handleLogout = () => {
    setAppState('welcome');
    setUserRole(null);
    setRoleToLogin(null);
  };

  // Fonction pour fermer le pop-up
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Fonction de navigation générale (pour "À propos")
  const handleNavigate = (view) => {
    setAppState(view);
  };
  
  // NOUVELLE fonction pour retourner à la page de bienvenue depuis la page de connexion
  const handleGoToWelcome = () => {
    setAppState('welcome');
  };

  // Affiche la vue principale pour un utilisateur connecté
  const renderMainView = () => {
    switch (appState) {
      case 'passenger':
        return <PassengerView />;
      case 'driver':
        return <DriverView />;
      case 'admin':
        return <AdminView />;
      case 'about':
        return <AboutUsPage />;
      default:
        // Par sécurité, si l'état est invalide, on retourne à la page de bienvenue
        return <WelcomePage onStart={handleStart} />;
    }
  };

  // Logique d'affichage principale
  if (appState === 'welcome') {
    return (
      <>
        <WelcomePage onStart={handleStart} />
        <RoleSelectionModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSelectRole={handleRoleSelectForLogin}
        />
      </>
    );
  }

  if (appState === 'login') {
    return <LoginPage onLogin={handleLogin} onGoToWelcome={handleGoToWelcome} />;
  }

  // Si l'application est dans un état "connecté" ('passenger', 'driver', 'admin', 'about')
  return (
    <div>
      <MainNavbar 
        onLogout={handleLogout} 
        onNavigate={handleNavigate}
        userRole={userRole}
      />
      <main>
        {renderMainView()}
      </main>
    </div>
  );
}
