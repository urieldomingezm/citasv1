import React, { useState } from 'react';

interface NotificacionesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NotificacionesModal: React.FC<NotificacionesModalProps> = ({ isOpen, onClose }) => {
    const [notifications, setNotifications] = useState({
        matches: true,
        mensajes: true,
        likes: false,
        pushGeneral: true,
        emailGeneral: false,
        horaInicio: '22:00',
        horaFin: '08:00',
        silencioso: false
    });

    const handleToggle = (key: string) => {
        setNotifications(prev => ({
            ...prev,
            [key]: !prev[key as keyof typeof prev]
        }));
    };

    const handleTimeChange = (key: string, value: string) => {
        setNotifications(prev => ({
            ...prev,
            [key]: value
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl w-full max-w-sm sm:max-w-md max-h-[90vh] overflow-y-auto shadow-2xl border border-white border-opacity-20">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 sm:p-4 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-white">Notificaciones 🔔</h2>
                            <p className="text-blue-100 text-xs sm:text-sm">Controla tus alertas</p>
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
                    {/* Notificaciones Principales */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                            Notificaciones
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {[
                                { key: 'matches', label: 'Matches', icon: 'heart-fill', color: 'red' },
                                { key: 'mensajes', label: 'Mensajes', icon: 'chat-dots-fill', color: 'blue' },
                                { key: 'likes', label: 'Likes', icon: 'hand-thumbs-up-fill', color: 'green' }
                            ].map((item) => (
                                <div key={item.key} className="bg-gray-50 rounded-xl p-2 flex items-center justify-between hover:bg-gray-100 transition-all duration-300">
                                    <div className="flex items-center space-x-2">
                                        <div className="bg-red-100 text-red-600 rounded-full p-1.5">
                                            <i className={`bi bi-${item.icon} text-xs`}></i>
                                        </div>
                                        <span className="font-medium text-gray-800 text-xs">{item.label}</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={notifications[item.key as keyof typeof notifications] as boolean}
                                            onChange={() => handleToggle(item.key)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-red-500"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Canales */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                            Canales
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[
                                { key: 'pushGeneral', label: 'Push', icon: 'phone', color: 'blue' },
                                { key: 'emailGeneral', label: 'Email', icon: 'envelope', color: 'green' }
                            ].map((item) => (
                                <div key={item.key} className="bg-gray-50 rounded-xl p-2 flex items-center justify-between hover:bg-gray-100 transition-all duration-300">
                                    <div className="flex items-center space-x-1">
                                        <div className="bg-blue-100 text-blue-600 rounded-full p-1.5">
                                            <i className={`bi bi-${item.icon} text-xs`}></i>
                                        </div>
                                        <span className="font-medium text-gray-800 text-xs">{item.label}</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={notifications[item.key as keyof typeof notifications] as boolean}
                                            onChange={() => handleToggle(item.key)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-500"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Horarios Silenciosos */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                            Horario Silencioso
                        </h3>
                        <div className="bg-gray-50 rounded-xl p-2">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-gray-800 text-sm">Activar</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={notifications.silencioso}
                                        onChange={() => handleToggle('silencioso')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-600"></div>
                                </label>
                            </div>
                            {notifications.silencioso && (
                                <div className="flex space-x-2 text-sm">
                                    <div className="flex-1">
                                        <label className="text-gray-600 text-xs">Desde</label>
                                        <input
                                            type="time"
                                            value={notifications.horaInicio}
                                            onChange={(e) => handleTimeChange('horaInicio', e.target.value)}
                                            className="w-full mt-1 p-1 border border-gray-300 rounded-lg text-gray-800"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-gray-600 text-xs">Hasta</label>
                                        <input
                                            type="time"
                                            value={notifications.horaFin}
                                            onChange={(e) => handleTimeChange('horaFin', e.target.value)}
                                            className="w-full mt-1 p-1 border border-gray-300 rounded-lg text-gray-800"
                                        />
                                    </div>
                                </div>
                            )}
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
                        <button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm">
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificacionesModal;