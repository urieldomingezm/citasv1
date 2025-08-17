import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UserHome from './pages/usuario/home';
import Matches from './pages/usuario/matches';
import Mensajes from './pages/usuario/mensajes';
import Perfil from './pages/usuario/perfil';
import Descubrir from './pages/usuario/descubrir';
import Previa from './pages/usuario/previa';
import Fotos from './pages/usuario/fotos';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoadingProvider } from './context/LoadingContext';
import { ThemeProvider } from './themes';
import PageWrapper from './components/loading/PageWrapper';

// Componente para rutas protegidas
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

// Componente para rutas públicas (solo para no autenticados)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    const lastRoute = localStorage.getItem('lastRoute');
    return <Navigate to={lastRoute || "/usuario/descubrir"} replace />;
  }
  
  return <>{children}</>;
};

// Componente para rastrear rutas y guardarlas
const RouteTracker: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && location.pathname.startsWith('/usuario/')) {
      localStorage.setItem('lastRoute', location.pathname);
    }
  }, [location.pathname, isAuthenticated]);

  return null;
};

const AppContent: React.FC = () => {
  return (
    <Layout>
      <RouteTracker />
      <Routes>
        {/* Ruta pública */}
        <Route 
          path="/" 
          element={
            <PublicRoute>
              <PageWrapper loadingMessage="Bienvenido a MorrysMatch..." loadingType="hearts">
                <Home />
              </PageWrapper>
            </PublicRoute>
          } 
        />
        
        {/* Rutas protegidas para usuarios autenticados */}
        <Route 
          path="/usuario/descubrir" 
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Descubrir />
              </PageWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/matches" 
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Matches />
              </PageWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/mensajes" 
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Mensajes />
              </PageWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/perfil" 
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Perfil />
              </PageWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/previa" 
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Previa />
              </PageWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/fotos" 
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Fotos />
              </PageWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuario/home" 
          element={
            <ProtectedRoute>
              <PageWrapper>
                <UserHome />
              </PageWrapper>
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
  <ThemeProvider>
    <AuthProvider>
      <LoadingProvider>
        <Router future={{ 
          v7_startTransition: true,
          v7_relativeSplatPath: true 
        }}>
          <AppContent />
        </Router>
      </LoadingProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;