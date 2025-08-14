import React from 'react';

interface MenuPrimerNivelProps {
    onItemClick?: () => void;
}

const MenuPrimerNivel: React.FC<MenuPrimerNivelProps> = ({ onItemClick }) => {
    return (
        <ul className="flex flex-col p-4 space-y-2">
            <li>
                <a
                    href="#"
                    className="block py-2 px-4 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={onItemClick}
                >
                    <i className="bi bi-house"></i>
                    <span>Inicio</span>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="block py-2 px-4 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={onItemClick}
                >
                    <i className="bi bi-box-arrow-in-right"></i>
                    <span>Iniciar sesión</span>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="block py-2 px-4 rounded hover:bg-gray-200 flex items-center space-x-2"
                    onClick={onItemClick}
                >
                    <i className="bi bi-person-plus"></i>
                    <span>Registrarse</span>
                </a>
            </li>
        </ul>
    );
};

export default MenuPrimerNivel;