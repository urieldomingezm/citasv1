import React from 'react';
import Header from '@components/plantillas/Header';
import Footer from '@components/plantillas/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex flex-1">
      <main className="flex-1 p-4">{children}</main>
    </div>
    <Footer />
  </div>
);

export default Layout;