import React from 'react';
import { themeClasses } from '../../themes';

interface MenuPrimerNivelProps {
    onItemClick?: () => void;
    onLoginClick?: () => void;
    onRegisterClick?: () => void;
}

const MenuPrimerNivel: React.FC<MenuPrimerNivelProps> = ({ onItemClick, onLoginClick, onRegisterClick }) => {
    const handleLoginClick = () => {
        onLoginClick?.();
        onItemClick?.();
    };

    const handleRegisterClick = () => {
        onRegisterClick?.();
        onItemClick?.();
    };

    return (
        <ul className="flex flex-col p-2 space-y-1">
            <li>
                <a
                    href="#"
                    className={`block py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-700 dark:text-gray-300 transition-colors duration-200`}
                    onClick={onItemClick}
                >
                    <i className="bi bi-house"></i>
                    <span>Inicio</span>
                </a>
            </li>
            <li>
                <button
                    className={`w-full text-left block py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-700 dark:text-gray-300 transition-colors duration-200`}
                    onClick={handleLoginClick}
                >
                    <i className="bi bi-box-arrow-in-right"></i>
                    <span>Iniciar sesión</span>
                </button>
            </li>
            <li>
                <button
                    className={`w-full text-left block py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2 ${themeClasses.text} text-gray-700 dark:text-gray-300 transition-colors duration-200`}
                    onClick={handleRegisterClick}
                >
                    <i className="bi bi-person-plus"></i>
                    <span>Registrarse</span>
                </button>
            </li>
        </ul>
    );
};

export default MenuPrimerNivel;