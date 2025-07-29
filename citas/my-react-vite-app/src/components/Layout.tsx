import React from 'react';
import Header from './Header';
import NavbarOffcanvas from './NavbarOffcanvas';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex flex-1">
      <NavbarOffcanvas />
      <main className="flex-1 p-4">{children}</main>
    </div>
    <Footer />
  </div>
);

export default Layout;