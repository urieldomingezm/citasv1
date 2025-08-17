import React, { useState } from 'react';

interface PreferenciasModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PreferenciasModal: React.FC<PreferenciasModalProps> = ({ isOpen, onClose }) => {
    const [preferences, setPreferences] = useState({
        edadMin: 18,
        edadMax: 35,
        distanciaMax: 50,
        modoOscuro: false,
        sonidos: true,
        mostrarDistancia: true,
        verificados: false
    });

    const handleRangeChange = (key: string, value: number) => {
        setPreferences(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleToggle = (key: string) => {
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key as keyof typeof prev]
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-100 backdrop-blur-xl rounded-2xl w-full max-w-md sm:max-w-lg max-h-[95vh] overflow-y-auto shadow-2xl border border-white dark:border-gray-700">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-3 sm:p-4 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-white">Preferencias</h2>
                            <p className="text-blue-100 dark:text-blue-200 text-xs sm:text-sm">Personaliza tu experiencia</p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="bg-white dark:bg-gray-700 bg-opacity-20 hover:bg-opacity-30 dark:hover:bg-opacity-40 backdrop-blur-sm border border-white dark:border-gray-600 transition-all duration-300 rounded-xl p-1.5"
                        >
                            <i className="bi bi-x-lg text-sm text-white"></i>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 space-y-4">
                    {/* Filtros de Búsqueda */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                            Filtros de Búsqueda
                        </h3>
                        
                        {/* Edad */}
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 mb-2">
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Edad: {preferences.edadMin} - {preferences.edadMax} años
                            </label>
                            <div className="flex space-x-2">
                                <input
                                    type="range"
                                    min="18"
                                    max="80"
                                    value={preferences.edadMin}
                                    onChange={(e) => handleRangeChange('edadMin', parseInt(e.target.value))}
                                    className="flex-1 h-2 bg-green-200 dark:bg-green-800 rounded-lg appearance-none cursor-pointer"
                                />
                                <input
                                    type="range"
                                    min="18"
                                    max="80"
                                    value={preferences.edadMax}
                                    onChange={(e) => handleRangeChange('edadMax', parseInt(e.target.value))}
                                    className="flex-1 h-2 bg-green-200 dark:bg-green-800 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Distancia */}
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Distancia máxima: {preferences.distanciaMax} km
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={preferences.distanciaMax}
                                onChange={(e) => handleRangeChange('distanciaMax', parseInt(e.target.value))}
                                className="w-full h-2 bg-blue-200 dark:bg-blue-800 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Configuración */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                            Configuración
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                                { key: 'modoOscuro', label: 'Modo oscuro', icon: 'moon' },
                                { key: 'sonidos', label: 'Sonidos', icon: 'volume-up' },
                                { key: 'mostrarDistancia', label: 'Mostrar distancia', icon: 'geo-alt' },
                                { key: 'verificados', label: 'Solo verificados', icon: 'patch-check' }
                            ].map((item) => (
                                <div key={item.key} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-2 flex flex-col items-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
                                    <div className="bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full p-2 mb-2">
                                        <i className={`bi bi-${item.icon} text-sm`}></i>
                                    </div>
                                    <span className="font-medium text-gray-800 dark:text-gray-200 text-xs text-center mb-2">{item.label}</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={preferences[item.key as keyof typeof preferences] as boolean}
                                            onChange={() => handleToggle(item.key)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-8 h-4 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-green-700"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-100 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-3 rounded-b-2xl">
                    <div className="flex space-x-2">
                        <button 
                            onClick={onClose}
                            className="flex-1 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-sm"
                        >
                            Cancelar
                        </button>
                        <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-700 text-white px-4 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm">
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreferenciasModal;
