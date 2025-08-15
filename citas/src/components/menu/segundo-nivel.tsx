import React, { useState } from 'react';

interface MenuSegundoNivelProps {
    onItemClick?: () => void;
    onLogout?: () => void;
}

const MenuSegundoNivel: React.FC<MenuSegundoNivelProps> = ({ onItemClick, onLogout }) => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (dropdownName: string) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const handleLogout = () => {
        onLogout?.();
        onItemClick?.();
    };

    return (
        <div>
            {/* Perfil del usuario en la parte superior */}
            <div className="p-3 bg-gradient-to-r from-pink-50 to-purple-50 border-b">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                        <i className="bi bi-person text-white text-xl"></i>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Usuario Demo</h4>
                        <p className="text-xs text-gray-500">Perfil al 95% completo</p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="flex flex-col p-2 space-y-1">
            {/* Dashboard */}
            <li>
                <a
                    href="#"
                    className="block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={onItemClick}
                >
                    <i className="bi bi-speedometer2 text-blue-600"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            {/* Descubrir */}
            <li>
                <a
                    href="#"
                    className="block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={onItemClick}
                >
                    <i className="bi bi-search-heart text-pink-600"></i>
                    <span>Descubrir</span>
                </a>
            </li>

            {/* Mensajes */}
            <li>
                <a
                    href="#"
                    className="block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={onItemClick}
                >
                    <i className="bi bi-chat-dots text-green-600"></i>
                    <span>Mensajes</span>
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">3</span>
                </a>
            </li>

            {/* Matches */}
            <li>
                <a
                    href="#"
                    className="block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={onItemClick}
                >
                    <i className="bi bi-heart-fill text-red-600"></i>
                    <span>Mis Matches</span>
                    <span className="ml-auto bg-pink-500 text-white text-xs rounded-full px-2 py-1">12</span>
                </a>
            </li>

            {/* Mi Perfil - Con Dropdown */}
            <li className="relative">
                <button
                    className="w-full text-left block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={() => toggleDropdown('perfil')}
                >
                    <i className="bi bi-person-circle text-purple-600"></i>
                    <span>Mi Perfil</span>
                    <i className={`bi bi-chevron-${activeDropdown === 'perfil' ? 'up' : 'down'} ml-auto text-gray-400`}></i>
                </button>
                {activeDropdown === 'perfil' && (
                    <ul className="ml-4 mt-1 space-y-1">
                        <li>
                            <a
                                href="#"
                                className="block py-1 px-3 text-sm rounded hover:bg-gray-100 flex items-center space-x-2"
                                onClick={onItemClick}
                            >
                                <i className="bi bi-pencil text-gray-500"></i>
                                <span>Editar Perfil</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-1 px-3 text-sm rounded hover:bg-gray-100 flex items-center space-x-2"
                                onClick={onItemClick}
                            >
                                <i className="bi bi-images text-gray-500"></i>
                                <span>Mis Fotos</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-1 px-3 text-sm rounded hover:bg-gray-100 flex items-center space-x-2"
                                onClick={onItemClick}
                            >
                                <i className="bi bi-eye text-gray-500"></i>
                                <span>Vista Previa</span>
                            </a>
                        </li>
                    </ul>
                )}
            </li>

            {/* Configuración - Con Dropdown */}
            <li className="relative">
                <button
                    className="w-full text-left block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={() => toggleDropdown('config')}
                >
                    <i className="bi bi-gear text-gray-600"></i>
                    <span>Configuración</span>
                    <i className={`bi bi-chevron-${activeDropdown === 'config' ? 'up' : 'down'} ml-auto text-gray-400`}></i>
                </button>
                {activeDropdown === 'config' && (
                    <ul className="ml-4 mt-1 space-y-1">
                        <li>
                            <a
                                href="#"
                                className="block py-1 px-3 text-sm rounded hover:bg-gray-100 flex items-center space-x-2"
                                onClick={onItemClick}
                            >
                                <i className="bi bi-bell text-gray-500"></i>
                                <span>Notificaciones</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-1 px-3 text-sm rounded hover:bg-gray-100 flex items-center space-x-2"
                                onClick={onItemClick}
                            >
                                <i className="bi bi-shield-check text-gray-500"></i>
                                <span>Privacidad</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-1 px-3 text-sm rounded hover:bg-gray-100 flex items-center space-x-2"
                                onClick={onItemClick}
                            >
                                <i className="bi bi-sliders text-gray-500"></i>
                                <span>Preferencias</span>
                            </a>
                        </li>
                    </ul>
                )}
            </li>

            {/* Premium */}
            <li>
                <a
                    href="#"
                    className="block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2 text-yellow-600"
                    onClick={onItemClick}
                >
                    <i className="bi bi-star-fill"></i>
                    <span>Obtener Premium</span>
                    <span className="ml-auto text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">HOT</span>
                </a>
            </li>

            {/* Ayuda */}
            <li>
                <a
                    href="#"
                    className="block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={onItemClick}
                >
                    <i className="bi bi-question-circle text-blue-600"></i>
                    <span>Ayuda y Soporte</span>
                </a>
            </li>

            {/* Separador */}
            <li className="border-t border-gray-200 my-2"></li>

            {/* Cerrar Sesión */}
            <li>
                <button
                    className="w-full text-left block py-2 px-3 rounded hover:bg-red-50 flex items-center space-x-2 text-red-600"
                    onClick={handleLogout}
                >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Cerrar Sesión</span>
                </button>
            </li>
        </ul>
        </div>
    );
};

export default MenuSegundoNivel;