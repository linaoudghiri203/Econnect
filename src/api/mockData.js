// =================================================================
// FICHIER : src/api/mockData.js
// Rôle : Contient toutes les données et icônes simulées.
// =================================================================

export const mockData = {
  buses: [
    { id: 'BUS-001', driver: 'Amina Khalis', status: 'En Ligne', route: 'Ligne 12', occupancy: 75, onTime: 'À l\'heure' },
    { id: 'BUS-002', driver: 'Youssef Alami', status: 'En Ligne', route: 'Ligne 07', occupancy: 50, onTime: '5 min de retard' },
    { id: 'BUS-003', driver: 'Fatima Zohra', status: 'Maintenance', route: 'N/A', occupancy: 0, onTime: 'N/A' },
    { id: 'BUS-004', driver: 'Mehdi Bennani', status: 'En Ligne', route: 'Ligne 21', occupancy: 90, onTime: 'À l\'heure' },
    { id: 'BUS-005', driver: 'Karim Saidi', status: 'Hors Ligne', route: 'N/A', occupancy: 0, onTime: 'N/A' },
  ],
  alerts: [
    { id: 1, busId: 'BUS-002', type: 'Sécurité', message: 'Bouton d\'urgence activé', time: '10:32', priority: 'Haute' },
    { id: 2, busId: 'BUS-004', type: 'Maintenance', message: 'Surchauffe moteur détectée', time: '10:28', priority: 'Moyenne' },
  ],
  busShelters: [
      { id: 'AB-101', location: 'Bd. Anfa', status: 'Opérationnel', wifi: 'Actif', solarPower: '85%' },
      { id: 'AB-102', location: 'Ain Diab', status: 'Opérationnel', wifi: 'Actif', solarPower: '92%' },
  ],
  users: [
    { id: 1, nom: 'Alami', prenom: 'Fatima', email: 'fatima.alami@email.com', horaireTicket: '08:15', statut: 'Passager avec WiFi' },
    { id: 2, nom: 'Bennani', prenom: 'Karim', email: 'k.bennani@email.com', horaireTicket: '08:22', statut: 'Passager sans WiFi' },
    { id: 3, nom: 'Chafik', prenom: 'Sara', email: 'sara.chafik@email.com', horaireTicket: null, statut: 'Utilisateur WiFi' },
    { id: 4, nom: 'Drissi', prenom: 'Mehdi', email: 'mehdi.d@email.com', horaireTicket: '08:30', statut: 'Passager avec WiFi' },
    { id: 5, nom: 'El Fassi', prenom: 'Nadia', email: 'nadia.elfassi@email.com', horaireTicket: '08:45', statut: 'Passager sans WiFi' },
    { id: 6, nom: 'Gharib', prenom: 'Omar', email: 'omar.gharib@email.com', horaireTicket: null, statut: 'Utilisateur WiFi' },
  ]
};

export const icons = {
  dashboard: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
  fleet: "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM17 12V9.5h2.5l1.96 2.5H17z",
  alerts: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
  routes: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  maintenance: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",
  analytics: "M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z",
  shelters: "M12 3L4 9v12h16V9l-8-6zm-2.25 9.5c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25H11v-4h2v4c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25v.25h-1.5v-.25c-.69 0-1.25-.56-1.25-1.25z",
  logout: "M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",
  users: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  bsb: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zm0-8h14V7H7v2z", // Nouvelle icône pour les logs
};
