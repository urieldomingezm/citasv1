import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import authService from '../services/authService';
import { User, LoginRequest, RegisterRequest } from '../types';

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    login: (credentials: LoginRequest) => Promise<boolean>;
    register: (userData: RegisterRequest) => Promise<boolean>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Inicializar contexto al cargar
    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const isAuth = authService.isAuthenticated();
                setIsAuthenticated(isAuth);
                
                if (isAuth) {
                    const userData = authService.getUserData();
                    setUser(userData);
                    
                    // Intentar obtener perfil actualizado del servidor
                    const profileResult = await authService.getProfile();
                    if (profileResult.success && profileResult.data) {
                        setUser(profileResult.data);
                    }
                }
            } catch (error) {
                console.error('Error inicializando autenticación:', error);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const login = async (credentials: LoginRequest): Promise<boolean> => {
        try {
            setLoading(true);
            const result = await authService.login(credentials);
            
            if (result.success && result.data) {
                setIsAuthenticated(true);
                setUser(result.data.user || null);
                return true;
            } else {
                console.error('Error en login:', result.error);
                return false;
            }
        } catch (error) {
            console.error('Error en login:', error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData: RegisterRequest): Promise<boolean> => {
        try {
            setLoading(true);
            const result = await authService.register(userData);
            
            if (result.success) {
                // Registro exitoso, pero no automáticamente logueado
                return true;
            } else {
                console.error('Error en registro:', result.error);
                return false;
            }
        } catch (error) {
            console.error('Error en registro:', error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = async (): Promise<void> => {
        try {
            setLoading(true);
            await authService.logout();
        } catch (error) {
            console.error('Error en logout:', error);
        } finally {
            setIsAuthenticated(false);
            setUser(null);
            setLoading(false);
        }
    };

    const refreshToken = async (): Promise<boolean> => {
        try {
            const result = await authService.refreshToken();
            
            if (result.success && result.data) {
                setUser(result.data.user || user);
                return true;
            } else {
                // Si falla la renovación, cerrar sesión
                await logout();
                return false;
            }
        } catch (error) {
            console.error('Error renovando token:', error);
            await logout();
            return false;
        }
    };

    return (
        <AuthContext.Provider value={{ 
            isAuthenticated, 
            user, 
            loading, 
            login, 
            register, 
            logout, 
            refreshToken 
        }}>
            {children}
        </AuthContext.Provider>
    );
};
