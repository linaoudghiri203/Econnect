// =================================================================
// FICHIER : src/components/RoleSelectionModal.js
// Rôle : Pop-up (modal) pour choisir le rôle après la connexion.
// =================================================================
import React from 'react';

const RoleCard = ({ title, description, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:bg-purple-100 hover:border-purple-400 transform transition-all duration-300 cursor-pointer"
  >
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <p className="mt-1 text-gray-500">{description}</p>
  </div>
);

const RoleSelectionModal = ({ isOpen, onClose, onSelectRole }) => {
  // Ne rien afficher si le modal n'est pas ouvert
  if (!isOpen) return null;

  return (
    // Fond semi-transparent
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      {/* Contenu du modal */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full relative animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sélectionnez votre rôle</h2>
        <div className="grid grid-cols-1 gap-6">
          <RoleCard 
            title="Passager" 
            description="Consultez les horaires et planifiez votre voyage."
            onClick={() => onSelectRole('passenger')}
          />
          <RoleCard 
            title="Chauffeur" 
            description="Accédez à votre feuille de route et aux alertes."
            onClick={() => onSelectRole('driver')}
          />
          <RoleCard 
            title="Administrateur" 
            description="Gérez le réseau, la flotte et les utilisateurs."
            onClick={() => onSelectRole('admin')}
          />
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionModal;
