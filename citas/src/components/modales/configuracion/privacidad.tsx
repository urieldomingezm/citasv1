import React, { useState } from 'react';

interface PrivacidadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacidadModal: React.FC<PrivacidadModalProps> = ({ isOpen, onClose }) => {
    const [privacy, setPrivacy] = useState({
        perfilPublico: true,
        mostrarEdad: true,
        mostrarDistancia: true,
        permitirMensajes: true,
        compartirUbicacion: true,
        modoIncognito: false
    });

    const handleToggle = (key: string) => {
        setPrivacy(prev => ({
            ...prev,
            [key]: !prev[key as keyof typeof prev]
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl w-full max-w-md sm:max-w-lg max-h-[95vh] overflow-y-auto shadow-2xl border border-white border-opacity-20">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-red-500 to-pink-600 text-white p-3 sm:p-4 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-white">Privacidad 🔒</h2>
                            <p className="text-red-100 text-xs sm:text-sm">Controla tu información</p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm border border-white border-opacity-30 transition-all duration-300 rounded-xl p-1.5"
                        >
                            <i className="bi bi-x-lg text-sm text-white"></i>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 space-y-4">
                    {/* Visibilidad */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                            Visibilidad
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {[
                                { key: 'perfilPublico', label: 'Perfil público', icon: 'eye-fill' },
                                { key: 'mostrarEdad', label: 'Mostrar edad', icon: 'calendar-event' },
                                { key: 'mostrarDistancia', label: 'Mostrar distancia', icon: 'geo-alt' }
                            ].map((item) => (
                                <div key={item.key} className="bg-gray-50 rounded-xl p-2 flex flex-col items-center hover:bg-gray-100 transition-all duration-300">
                                    <div className="bg-red-100 text-red-600 rounded-full p-1.5 mb-2">
                                        <i className={`bi bi-${item.icon} text-xs`}></i>
                                    </div>
                                    <span className="font-medium text-gray-800 text-xs text-center mb-2">{item.label}</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={privacy[item.key as keyof typeof privacy] as boolean}
                                            onChange={() => handleToggle(item.key)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-red-500"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comunicación */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                            Comunicación
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[
                                { key: 'permitirMensajes', label: 'Permitir mensajes', icon: 'chat-dots' },
                                { key: 'compartirUbicacion', label: 'Compartir ubicación', icon: 'geo-alt-fill' }
                            ].map((item) => (
                                <div key={item.key} className="bg-gray-50 rounded-xl p-2 flex flex-col items-center hover:bg-gray-100 transition-all duration-300">
                                    <div className="bg-blue-100 text-blue-600 rounded-full p-1.5 mb-2">
                                        <i className={`bi bi-${item.icon} text-xs`}></i>
                                    </div>
                                    <span className="font-medium text-gray-800 text-xs text-center mb-2">{item.label}</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={privacy[item.key as keyof typeof privacy] as boolean}
                                            onChange={() => handleToggle(item.key)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-500"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modo Especial */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                            Modo Especial
                        </h3>
                        <div className="bg-gray-50 rounded-xl p-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="bg-purple-100 text-purple-600 rounded-full p-1.5">
                                        <i className="bi bi-incognito text-xs"></i>
                                    </div>
                                    <span className="font-medium text-gray-800 text-sm">Modo Incógnito</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={privacy.modoIncognito}
                                        onChange={() => handleToggle('modoIncognito')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500"></div>
                                </label>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">Navega sin que otros vean que has visitado su perfil</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white bg-opacity-90 backdrop-blur-sm border-t border-gray-200 p-3 rounded-b-2xl">
                    <div className="flex space-x-2">
                        <button 
                            onClick={onClose}
                            className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-all duration-300 hover:bg-gray-100 rounded-xl text-sm"
                        >
                            Cancelar
                        </button>
                        <button className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm">
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacidadModal;
