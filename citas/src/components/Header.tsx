import React, { useState } from 'react';
import MenuPrimerNivel from './menu/primer-nivel';

const HeaderNavbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-gray-100 text-gray-900 p-4 shadow flex items-center justify-between relative">
            <h1 className="text-2xl font-bold">Citas</h1>
            <button
                className="p-2 z-20"
                onClick={() => setOpen(true)}
                aria-label="Abrir menú"
            >
                <i className="bi bi-list" style={{ fontSize: '28px' }}></i>
            </button>
            {/* Offcanvas */}
            <nav className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-800 shadow-lg transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out z-30`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="font-bold text-lg">Menú</span>
                    <button
                        className="p-2"
                        onClick={() => setOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        <i className="bi bi-x" style={{ fontSize: '24px' }}></i>
                    </button>
                </div>
                <MenuPrimerNivel onItemClick={() => setOpen(false)} />
            </nav>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-20"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
};

export default HeaderNavbar;