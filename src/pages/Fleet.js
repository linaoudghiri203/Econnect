
import React from 'react';
import { mockData } from '../api/mockData';

const Fleet = () => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'En Ligne': return 'bg-green-100 text-green-800';
            case 'Maintenance': return 'bg-yellow-100 text-yellow-800';
            case 'Hors Ligne': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Gestion de la Flotte</h1>
            <p className="text-gray-500 mt-1">Détails et statut de chaque véhicule</p>
            <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Bus</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chauffeur</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ligne</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ponctualité</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taux d'occupation</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockData.buses.map(bus => (
                            <tr key={bus.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bus.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bus.driver}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(bus.status)}`}>
                                        {bus.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bus.route}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bus.onTime}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bus.occupancy}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Fleet;
