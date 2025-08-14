import React from 'react';

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
                    className="block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={onItemClick}
                >
                    <i className="bi bi-house"></i>
                    <span>Inicio</span>
                </a>
            </li>
            <li>
                <button
                    className="w-full text-left block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={handleLoginClick}
                >
                    <i className="bi bi-box-arrow-in-right"></i>
                    <span>Iniciar sesión</span>
                </button>
            </li>
            <li>
                <button
                    className="w-full text-left block py-2 px-3 rounded hover:bg-gray-200 flex items-center space-x-2"
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