import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UserHome from './pages/usuario/home';
import { AuthProvider, useAuth } from './context/AuthContext';

// Componente para rutas protegidas
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

// Componente para rutas públicas (solo para no autenticados)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <>{children}</> : <Navigate to="/usuario/home" replace />;
};

const AppContent: React.FC = () => {
  return (
    <Layout>
      <Routes>
        {/* Ruta pública */}
        <Route 
          path="/" 
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          } 
        />
        
        {/* Rutas protegidas para usuarios autenticados */}
        <Route 
          path="/usuario/home" 
          element={
            <ProtectedRoute>
              <UserHome />
            </ProtectedRoute>
          } 
        />
        
        {/* Ruta por defecto - redirigir según autenticación */}
        <Route 
          path="*" 
          element={<Navigate to="/" replace />} 
        />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <Router future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true 
    }}>
      <AppContent />
    </Router>
  </AuthProvider>
);

export default App;