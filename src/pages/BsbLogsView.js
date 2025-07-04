// =================================================================
// FICHIER : src/pages/BsbLogsView.js
// Rôle : Affiche les logs en direct de la boîte noire (BSB).
// =================================================================
import React, { useState, useEffect, useRef } from 'react';

// Simulation de logs
const initialLogs = [
  { time: new Date().toLocaleTimeString('fr-FR'), type: 'INFO', msg: 'System boot... OK' },
  { time: new Date().toLocaleTimeString('fr-FR'), type: 'INFO', msg: 'GPS signal acquired.' },
  { time: new Date().toLocaleTimeString('fr-FR'), type: 'DATA', msg: 'Speed: 0 km/h, Lat: 33.57, Lon: -7.58' },
];

const generateNewLog = () => {
    const time = new Date().toLocaleTimeString('fr-FR');
    const types = ['INFO', 'WARN', 'DATA', 'ERROR'];
    const msgs = ['Engine temperature: 55°C', 'Network connection stable', 'Passenger count sensor: 12', 'Braking pressure normal', 'Unexpected vibration detected', 'GPS accuracy: HIGH'];
    const type = types[Math.floor(Math.random() * types.length)];
    const msg = msgs[Math.floor(Math.random() * msgs.length)];
    return { time, type, msg };
};

const BsbLogsView = () => {
    const [logs, setLogs] = useState(initialLogs);
    const logContainerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogs(prevLogs => [...prevLogs, generateNewLog()]);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [logs]);

    const getLogColor = (type) => {
        switch(type) {
            case 'INFO': return 'text-blue-400';
            case 'WARN': return 'text-yellow-400';
            case 'ERROR': return 'text-red-500';
            case 'DATA': return 'text-green-400';
            default: return 'text-gray-400';
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">BSB Live Logs (Boîte Noire)</h1>
            <p className="text-gray-500 mt-1">Flux de données en temps réel provenant des boîtiers IoT.</p>
            <div className="mt-6 w-full h-[60vh] bg-black rounded-lg p-4 flex flex-col shadow-2xl border border-gray-200">
                <div ref={logContainerRef} className="flex-grow overflow-y-auto font-mono text-sm space-y-1 pr-4">
                    {logs.map((log, index) => (
                        <p key={index}>
                            <span className="text-gray-500">{log.time}</span>
                            <span className={`font-bold mx-2 ${getLogColor(log.type)}`}>[{log.type}]</span>
                            <span className="text-gray-200">{log.msg}</span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BsbLogsView;
