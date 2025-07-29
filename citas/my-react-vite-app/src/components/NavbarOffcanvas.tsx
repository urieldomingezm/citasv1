import React, { useState } from 'react';

const NavbarOffcanvas: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav className={`fixed top-0 left-0 h-full w-64 bg-white shadow transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:static md:translate-x-0 md:flex md:items-center md:w-auto`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 p-4">
          <li><a href="#" className="block py-2 px-4 hover:bg-blue-100 rounded">Inicio</a></li>
          <li><a href="#" className="block py-2 px-4 hover:bg-blue-100 rounded">Mis Citas</a></li>
          <li><a href="#" className="block py-2 px-4 hover:bg-blue-100 rounded">Perfil</a></li>
        </ul>
      </nav>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default NavbarOffcanvas;