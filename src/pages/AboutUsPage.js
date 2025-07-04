// =================================================================
// FICHIER : src/pages/AboutUsPage.js
// Rôle : Page de présentation de l'équipe avec un design mis à jour.
// =================================================================
import React from 'react';

const teamMembers = [
  { name: 'Mehdi', role: 'PDG, VIC Technologies' },
  { name: 'Lina Oudghiri', role: 'CTO (Soft) - Ingénieure Logiciel & IA' },
  { name: 'Hiba', role: 'CTO (Soft) - Développeuse Backend' },
  { name: 'Aymane Tribak', role: 'CTO (Hard) - Ingénieur Systèmes Intelligents' },
  { name: 'Rafya Youness', role: 'Support Technique en Mécatronique' },
  { name: 'Mme Ahlam Zouaghi', role: 'CMO - Directrice Marketing' }
];

// Fonction pour extraire la bonne initiale
const getInitial = (name) => {
  const parts = name.split(' ');
  // Si le nom commence par "Mme", on prend l'initiale du mot suivant
  if (parts[0].toLowerCase() === 'mme' && parts.length > 1) {
    return parts[1].charAt(0).toUpperCase();
  }
  // Sinon, on prend la première lettre du nom complet
  return name.charAt(0).toUpperCase();
};

const TeamMemberCard = ({ member }) => (
  <div className="text-center transition-transform transform hover:scale-105 duration-300">
    <img
      className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
      src={`https://placehold.co/128x128/E9D5FF/4C1D95?text=${getInitial(member.name)}`}
      alt={member.name}
    />
    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
    <p className="text-md text-purple-600 font-semibold">{member.role}</p>
  </div>
);


const AboutUsPage = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
          Notre Équipe
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {teamMembers.map(member => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
