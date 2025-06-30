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
    { id: 3, busId: 'BUS-001', type: 'Opérationnel', message: 'Forte affluence signalée', time: '10:25', priority: 'Faible' },
    { id: 4, busId: 'BUS-002', type: 'Vandalisme', message: 'Capteur de vitre brisée activé', time: '10:15', priority: 'Haute' },
  ],
  busShelters: [
      { id: 'AB-101', location: 'Bd. Anfa', status: 'Opérationnel', wifi: 'Actif', solarPower: '85%' },
      { id: 'AB-102', location: 'Ain Diab', status: 'Opérationnel', wifi: 'Actif', solarPower: '92%' },
      { id: 'AB-103', location: 'Maarif', status: 'Maintenance', wifi: 'Inactif', solarPower: '20%' },
  ],
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
  sun: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.03-.86.11-1.71.3-2.54l-1.43-1.43c-.53.84-.94 1.76-1.2 2.73.01.41.02.82.03 1.24zM20 13h-2c-.03-.86-.11-1.71-.3-2.54l1.43-1.43c.53.84.94 1.76 1.2 2.73-.01.41-.02.82-.03 1.24zM12 5V3c.82.02 1.63.12 2.4.34l1.43-1.43C14.89 1.28 13.47 1 12 1s-2.89.28-3.83.91l1.43 1.43C10.37 3.12 11.18 3.02 12 3v2zm0 16v-2c-.82-.02-1.63-.12-2.4-.34l-1.43 1.43c.94.63 2.36.91 3.83.91s2.89-.28 3.83-.91l-1.43-1.43c-.77.22-1.58.32-2.4.34zM4.91 4.91l-1.43-1.43C4.43 2.54 5.53 1.74 6.75 1.2c.41.38.79.81 1.13 1.29l-1.54 1.54c-.66-.25-1.32-.42-2-.49-.1-.08-.19-.16-.29-.23zM18.36 18.36l1.43 1.43c-1.05.94-2.27 1.6-3.62 1.99-.41-.38-.79-.81-1.13-1.29l1.54-1.54c.66.25 1.32.42 2 .49.1.08.19.16.29.23z",
  wifi: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z",
};