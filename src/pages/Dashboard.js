// =================================================================
// FICHIER : src/pages/Dashboard.js
// Rôle : Affiche la page principale du tableau de bord.
// =================================================================

import React, { useState, useEffect } from 'react';
import { mockData, icons } from '../api/mockData';
import Icon from '../components/Icon';

const Dashboard = () => {
    // --- Calcul des nouvelles données de transaction ---
    const ticketPrice = 5; // Prix du ticket en MAD (Dirham Marocain)
    const dailyPassengers = 7000; // Nombre de passagers mis à jour
    const dailyRevenue = (ticketPrice * dailyPassengers).toLocaleString('fr-FR'); // Calcul du revenu total

    // --- State pour l'horloge en direct ---
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Met à jour l'heure chaque seconde
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Nettoie l'intervalle quand le composant est démonté
        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <div className="relative min-h-[calc(100vh-5rem)]"> {/* Conteneur relatif pour positionner l'horloge */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Tableau de Bord</h1>
                <p className="text-gray-500 mt-1">Aperçu en temps réel du réseau de transport</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {/* Carte Bus Actifs (MISE À JOUR) */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                               <Icon path={icons.fleet} className="w-7 h-7" />
                            </div>
                            <div className="ml-4">
                                <p className="text-lg text-gray-500">Bus Actifs</p>
                                <p className="text-3xl font-bold text-gray-800">30 / 50</p>
                            </div>
                        </div>
                    </div>
                    {/* Carte Alertes Actives */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-red-100 text-red-500">
                                <Icon path={icons.alerts} className="w-7 h-7" />
                            </div>
                            <div className="ml-4">
                                <p className="text-lg text-gray-500">Alertes Actives</p>
                                <p className="text-3xl font-bold text-gray-800">{mockData.alerts.length}</p>
                            </div>
                        </div>
                    </div>
                    {/* Carte Ponctualité */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                         <div className="flex items-center">
                            <div className="p-3 rounded-full bg-green-100 text-green-500">
                               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-lg text-gray-500">Ponctualité</p>
                                <p className="text-3xl font-bold text-gray-800">96%</p>
                            </div>
                        </div>
                    </div>
                    {/* Carte Revenu par Jour (MISE À JOUR) */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                         <div className="flex items-start">
                            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
                               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-lg text-gray-500">Revenu / jour</p>
                                <p className="text-3xl font-bold text-gray-800">{dailyRevenue} <span className="text-xl font-medium text-gray-500">MAD</span></p>
                                <p className="text-sm text-gray-400 mt-1">{dailyPassengers.toLocaleString('fr-FR')} passagers</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-gray-700 mb-4">Carte du Réseau en Temps Réel</h2>
                        <div className="bg-gray-200 h-96 rounded-md flex items-center justify-center">
                            <img 
                                src="https://placehold.co/800x600/e2e8f0/64748b?text=Simulation+de+la+Carte+de+Casablanca" 
                                alt="Carte de Casablanca avec les bus" 
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-gray-700 mb-4">Flux d'Alertes</h2>
                        <div className="space-y-4">
                            {mockData.alerts.map(alert => (
                                <div key={alert.id} className="flex items-start">
                                    <div className={`mt-1 p-2 rounded-full ${alert.priority === 'Haute' ? 'bg-red-100 text-red-500' : 'bg-yellow-100 text-yellow-500'}`}>
                                        <Icon path={icons.alerts} className="w-5 h-5"/>
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-semibold text-gray-800">{alert.type} - {alert.busId}</p>
                                        <p className="text-sm text-gray-600">{alert.message}</p>
                                        <p className="text-xs text-gray-400">{alert.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Horloge en direct en bas à gauche */}
            <div className="absolute bottom-0 left-0 p-4">
                <p className="text-2xl font-bold text-gray-700 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    {currentTime.toLocaleTimeString('fr-FR')}
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
