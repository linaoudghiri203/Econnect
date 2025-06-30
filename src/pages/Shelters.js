
import React from 'react';
import { mockData, icons } from '../api/mockData';
import Icon from '../components/Icon';

const Shelters = () => {
    const getStatusClass = (status) => {
        return status === 'Opérationnel' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
    };
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Abribus Connectés</h1>
            <p className="text-gray-500 mt-1">Supervision des infrastructures d'abribus</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockData.busShelters.map(shelter => (
                    <div key={shelter.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">{shelter.id}</h2>
                                <p className="text-sm text-gray-500">{shelter.location}</p>
                            </div>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(shelter.status)}`}>
                                {shelter.status}
                            </span>
                        </div>
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center text-gray-700">
                                <Icon path={icons.wifi} className="w-5 h-5 text-blue-500"/>
                                <span className="ml-3">Wi-Fi:</span>
                                <span className={`ml-auto font-semibold ${shelter.wifi === 'Actif' ? 'text-green-600' : 'text-red-600'}`}>{shelter.wifi}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Icon path={icons.sun} className="w-5 h-5 text-yellow-500"/>
                                <span className="ml-3">Charge Solaire:</span>
                                <span className="ml-auto font-semibold">{shelter.solarPower}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shelters;