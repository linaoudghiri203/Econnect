import React from 'react';
import { icons } from '../api/mockData';
import Icon from '../components/Icon';


const Placeholder = ({ title }) => (
    <div className="flex flex-col items-center justify-center h-full bg-white rounded-lg shadow-md p-8">
        <Icon path={icons.maintenance} className="w-24 h-24 text-gray-300" />
        <h1 className="text-2xl font-bold text-gray-600 mt-4">{title}</h1>
        <p className="text-gray-400 mt-2">Cette section est en cours de développement.</p>
        <p className="text-gray-400 text-center mt-1">Ici se trouveront les interfaces pour {title.toLowerCase()}.</p>
    </div>
);

export default Placeholder;