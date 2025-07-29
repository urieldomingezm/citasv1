import React, { useState } from 'react';

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
                {/* Bootstrap menu icon (list) SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z"/>
                </svg>
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
                        {/* Bootstrap close icon (x) SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-2">
                    <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">Inicio</a></li>
                    <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">Mis Citas</a></li>
                    <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">Perfil</a></li>
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