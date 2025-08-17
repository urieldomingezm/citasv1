import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-center p-4 mt-auto transition-colors duration-300">
    <span>© {new Date().getFullYear()} MorrysMatch. Todos los derechos reservados.</span>
  </footer>
);

export default Footer;