import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeSelector from '../ThemeSelector';
import { themeClasses } from '../../themes';

interface MenuSegundoNivelProps {
    onItemClick?: () => void;
    onLogout?: () => void;
    onConfigModalOpen?: (modalName: string) => void;
}

const MenuSegundoNivel: React.FC<MenuSegundoNivelProps> = ({ onItemClick, onLogout, onConfigModalOpen }) => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (dropdownName: string) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const openModal = (modalName: string) => {
        onConfigModalOpen?.(modalName);
        setActiveDropdown(null); // Cerrar dropdown al abrir modal
    };

    const handleLogout = () => {
        onLogout?.();
        onItemClick?.();
    };

    return (
        <div className={`${themeClasses.background} bg-white dark:bg-gray-800 transition-colors duration-300 min-h-full w-full flex flex-col`}>
            {/* Perfil del usuario en la parte superior */}
            <div className={`p-3 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 ${themeClasses.border} border-b border-gray-200 dark:border-gray-600`}>
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 dark:from-pink-500 dark:to-purple-600 rounded-full flex items-center justify-center">
                        <i className="bi bi-person text-white text-xl"></i>
                    </div>
                    <div className="flex-1">
                        <h4 className={`font-semibold ${themeClasses.text} text-gray-800 dark:text-white`}>Usuario Demo</h4>
                        <p className={`text-xs ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400`}>Perfil al 95% completo</p>
                        <div className={`w-full ${themeClasses.backgroundTertiary} bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-1`}>
                            <div className="bg-green-500 dark:bg-green-400 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className={`flex flex-col p-2 space-y-1 ${themeClasses.background} bg-white dark:bg-gray-800 flex-1 min-h-0`}>

            {/* Descubrir */}
            <li>
                <Link
                    to="/usuario/descubrir"
                    className={`block py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-800 dark:text-gray-200 transition-colors`}
                    onClick={onItemClick}
                >
                    <i className="bi bi-search-heart text-pink-600 dark:text-pink-400"></i>
                    <span>Descubrir</span>
                </Link>
            </li>

            {/* Mensajes */}
            <li>
                <Link
                    to="/usuario/mensajes"
                    className={`block py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-800 dark:text-gray-200 transition-colors`}
                    onClick={onItemClick}
                >
                    <i className="bi bi-chat-dots text-green-600 dark:text-green-400"></i>
                    <span>Mensajes</span>
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">3</span>
                </Link>
            </li>

            {/* Matches */}
            <li>
                <Link
                    to="/usuario/matches"
                    className={`block py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-800 dark:text-gray-200 transition-colors`}
                    onClick={onItemClick}
                >
                    <i className="bi bi-heart-fill text-red-600 dark:text-red-400"></i>
                    <span>Mis Matches</span>
                    <span className="ml-auto bg-pink-500 text-white text-xs rounded-full px-2 py-1">12</span>
                </Link>
            </li>

            {/* Mi Perfil - Con Dropdown */}
            <li className="relative">
                <button
                    className={`w-full text-left block py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-800 dark:text-gray-200 transition-colors`}
                    onClick={() => toggleDropdown('perfil')}
                >
                    <i className="bi bi-person-circle text-purple-600 dark:text-purple-400"></i>
                    <span>Mi Perfil</span>
                    <i className={`bi bi-chevron-${activeDropdown === 'perfil' ? 'up' : 'down'} ml-auto ${themeClasses.textMuted} text-gray-400 dark:text-gray-500`}></i>
                </button>
                {activeDropdown === 'perfil' && (
                    <ul className="ml-4 mt-1 space-y-1">
                        <li>
                            <Link
                                to="/usuario/perfil"
                                className={`block py-1 px-3 text-sm rounded ${themeClasses.hover} hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-700 dark:text-gray-300 transition-colors`}
                                onClick={onItemClick}
                            >
                                <i className={`bi bi-pencil ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400`}></i>
                                <span>Editar Perfil</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/usuario/fotos"
                                className={`block py-1 px-3 text-sm rounded ${themeClasses.hover} hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-700 dark:text-gray-300 transition-colors`}
                                onClick={onItemClick}
                            >
                                <i className={`bi bi-images ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400`}></i>
                                <span>Mis Fotos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/usuario/previa"
                                className={`block py-1 px-3 text-sm rounded ${themeClasses.hover} hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-700 dark:text-gray-300 transition-colors`}
                                onClick={onItemClick}
                            >
                                <i className={`bi bi-eye ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400`}></i>
                                <span>Vista Previa</span>
                            </Link>
                        </li>
                    </ul>
                )}
            </li>

            {/* Configuración - Con Dropdown */}
            <li className="relative">
                <button
                    className={`w-full text-left block py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-800 dark:text-gray-200 transition-colors`}
                    onClick={() => toggleDropdown('config')}
                >
                    <i className={`bi bi-gear ${themeClasses.textSecondary} text-gray-600 dark:text-gray-400`}></i>
                    <span>Configuración</span>
                    <i className={`bi bi-chevron-${activeDropdown === 'config' ? 'up' : 'down'} ml-auto ${themeClasses.textMuted} text-gray-400 dark:text-gray-500`}></i>
                </button>
                {activeDropdown === 'config' && (
                    <ul className="ml-4 mt-1 space-y-1">
                        <li>
                            <button
                                className={`w-full text-left block py-1 px-3 text-sm rounded ${themeClasses.hover} hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-700 dark:text-gray-300 transition-colors`}
                                onClick={() => openModal('notificaciones')}
                            >
                                <i className={`bi bi-bell ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400`}></i>
                                <span>Notificaciones</span>
                            </button>
                        </li>
                        <li>
                            <button
                                className={`w-full text-left block py-1 px-3 text-sm rounded ${themeClasses.hover} hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-700 dark:text-gray-300 transition-colors`}
                                onClick={() => openModal('privacidad')}
                            >
                                <i className={`bi bi-shield-check ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400`}></i>
                                <span>Privacidad</span>
                            </button>
                        </li>
                        <li>
                            <button
                                className={`w-full text-left block py-1 px-3 text-sm rounded ${themeClasses.hover} hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-700 dark:text-gray-300 transition-colors`}
                                onClick={() => openModal('preferencias')}
                            >
                                <i className={`bi bi-sliders ${themeClasses.textSecondary} text-gray-500 dark:text-gray-400`}></i>
                                <span>Preferencias</span>
                            </button>
                        </li>
                    </ul>
                )}
            </li>

            {/* Premium */}
            <li>
                <a
                    href="#"
                    className={`block py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 transition-colors`}
                    onClick={onItemClick}
                >
                    <i className="bi bi-star-fill"></i>
                    <span>Obtener Premium</span>
                    <span className="ml-auto text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded">HOT</span>
                </a>
            </li>

            {/* Ayuda */}
            <li>
                <a
                    href="#"
                    className={`block py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-800 dark:text-gray-200 transition-colors`}
                    onClick={onItemClick}
                >
                    <i className="bi bi-question-circle text-blue-600 dark:text-blue-400"></i>
                    <span>Ayuda y Soporte</span>
                </a>
            </li>

            {/* Separador */}
            <li className={`${themeClasses.border} border-t border-gray-200 dark:border-gray-600 my-2`}></li>

            {/* Selector de tema */}
            <li>
                <div className="px-3 py-1">
                    <ThemeSelector />
                </div>
            </li>

            {/* Cerrar Sesión */}
            <li>
                <button
                    className={`w-full text-left block py-2 px-3 rounded hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center space-x-2 text-red-600 dark:text-red-400 transition-colors ${themeClasses.hover}`}
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