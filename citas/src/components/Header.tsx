import React, { useState } from 'react';

const HeaderNavbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-blue-600 text-white p-4 shadow flex items-center justify-between relative">
            <h1 className="text-2xl font-bold">Citas</h1>
            <button
                className="p-2 z-20"
                onClick={() => setOpen(true)}
                aria-label="Abrir menú"
            >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* Offcanvas */}
            <nav className={`fixed top-0 left-0 h-full w-64 bg-white text-gray-800 shadow-lg transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out z-30`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="font-bold text-lg">Menú</span>
                    <button
                        className="p-2"
                        onClick={() => setOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-2">
                    <li><a href="#" className="block py-2 px-4 rounded hover:bg-blue-100">Inicio</a></li>
                    <li><a href="#" className="block py-2 px-4 rounded hover:bg-blue-100">Mis Citas</a></li>
                    <li><a href="#" className="block py-2 px-4 rounded hover:bg-blue-100">Perfil</a></li>
                </ul>
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