import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UserHome from './pages/usuario/home';
import Matches from './pages/usuario/matches'; // Asegúrate de que la ruta de importación sea correcta
import Mensajes from './pages/usuario/mensajes';
import Perfil from './pages/usuario/perfil';
import Descubrir from './pages/usuario/descubrir';
import Previa from './pages/usuario/previa';
import Fotos from './pages/usuario/fotos';
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
          path="/usuario/descubrir" 
          element={
            <ProtectedRoute>
              <Descubrir />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/matches" 
          element={
            <ProtectedRoute>
              <Matches />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/mensajes" 
          element={
            <ProtectedRoute>
              <Mensajes />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/perfil" 
          element={
            <ProtectedRoute>
              <Perfil />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/previa" 
          element={
            <ProtectedRoute>
              <Previa />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/fotos" 
          element={
            <ProtectedRoute>
              <Fotos />
            </ProtectedRoute>
          } 
        />
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