import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-100 text-gray-600 text-center p-4 mt-auto">
    <span>© {new Date().getFullYear()} Citas. Todos los derechos reservados.</span>
  </footer>
);

export default Footer;