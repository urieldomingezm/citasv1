import React, { useState } from 'react';
import MenuPrimerNivel from '@components/menu/primer-nivel';
import MenuSegundoNivel from '@components/menu/segundo-nivel';
import LoginModal from '@components/modales/login/LoginModal';
import AyudaModal from '@components/modales/soporte/ayuda';
import { NotificacionesModal, PreferenciasModal, PrivacidadModal } from '@components/modales/configuracion';
// import RegisterModal from './modales/login/RegisterModal';
import { useAuth } from '@context/AuthContext';
import { themeClasses } from '@themes/index';
import Alert from '@components/alerts/login/Alert';

const HeaderNavbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    const [showLogoutAlert, setShowLogoutAlert] = useState(false);
    const [activeConfigModal, setActiveConfigModal] = useState<string | null>(null);
    const [showAyudaModal, setShowAyudaModal] = useState(false);
    const { login, logout, isAuthenticated, user } = useAuth();

    const handleLoginSuccess = () => {
        setLoginModalOpen(false);
        // El login ya se manejó en el modal
    };

    const handleRegisterSuccess = () => {
        setRegisterModalOpen(false);
        // El registro ya se manejó en el modal
    };

    const handleLogout = () => {
        // Mostrar alerta de despedida
        setShowLogoutAlert(true);
        
        // Cerrar sesión después de un delay
        setTimeout(() => {
            logout();
        }, 2000);
    };

    const openConfigModal = (modalName: string) => {
        setActiveConfigModal(modalName);
        setOpen(false); // Cerrar el menú cuando se abre un modal
    };

    const closeConfigModal = () => {
        setActiveConfigModal(null);
    };

    const openAyudaModal = () => {
        setShowAyudaModal(true);
        setOpen(false); // Cerrar el menú cuando se abre el modal
    };

    const closeAyudaModal = () => {
        setShowAyudaModal(false);
    };

    return (
        <header className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 py-2 px-4 shadow flex items-center justify-between relative transition-colors duration-300">
            <h1 className="text-xl font-bold">MorrysMatch</h1>
            <button
                className="p-2 z-20 text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                onClick={() => setOpen(true)}
                aria-label="Abrir menú"
            >
                <i className="bi bi-list" style={{ fontSize: '24px' }}></i>
            </button>
            {/* Offcanvas */}
            <nav className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out z-30`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">
                            {isAuthenticated ? 'Mi Cuenta' : 'Menú'}
                        </span>
                        {isAuthenticated && user && (
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Hola, {user.username}
                            </span>
                        )}
                    </div>
                    <button
                        className="p-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                        onClick={() => setOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        <i className="bi bi-x" style={{ fontSize: '24px' }}></i>
                    </button>
                </div>
                {isAuthenticated ? (
                    <MenuSegundoNivel 
                        onItemClick={() => setOpen(false)}
                        onLogout={handleLogout}
                        onConfigModalOpen={openConfigModal}
                        onAyudaModalOpen={openAyudaModal}
                    />
                ) : (
                    <MenuPrimerNivel 
                        onItemClick={() => setOpen(false)}
                        onLoginClick={() => setLoginModalOpen(true)}
                        onRegisterClick={() => setRegisterModalOpen(true)}
                    />
                )}
            </nav>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-20"
                    onClick={() => setOpen(false)}
                />
            )}
            
            {/* Modales */}
            <LoginModal 
                isOpen={loginModalOpen} 
                onClose={() => setLoginModalOpen(false)}
                onLoginSuccess={handleLoginSuccess}
            />
            {/* <RegisterModal 
                isOpen={registerModalOpen} 
                onClose={() => setRegisterModalOpen(false)} 
                onRegisterSuccess={handleRegisterSuccess}
            /> */}
            
            {/* Modales de Configuración */}
            <NotificacionesModal 
                isOpen={activeConfigModal === 'notificaciones'} 
                onClose={closeConfigModal} 
            />
            <PreferenciasModal 
                isOpen={activeConfigModal === 'preferencias'} 
                onClose={closeConfigModal} 
            />
            <PrivacidadModal 
                isOpen={activeConfigModal === 'privacidad'} 
                onClose={closeConfigModal} 
            />
            
            {/* Modal de Ayuda */}
            <AyudaModal 
                isOpen={showAyudaModal} 
                onClose={closeAyudaModal} 
            />
            
            {/* Alerta de cierre de sesión */}
            <Alert
                type="info"
                message="¡Hasta pronto! Esperamos verte de nuevo muy pronto 👋"
                isVisible={showLogoutAlert}
                onClose={() => setShowLogoutAlert(false)}
                autoClose={true}
                duration={3000}
            />
        </header>
    );
};

export default HeaderNavbar;