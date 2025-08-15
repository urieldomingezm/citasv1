// Servicio de autenticación MOCK para desarrollo frontend
// TODO: Implementar arquitectura híbrida cuando esté listo el backend

import { 
  LoginRequest, 
  RegisterRequest, 
  AuthResponse, 
  User, 
  ApiResponse 
} from '../types';

// Datos mock para desarrollo
const MOCK_USER: User = {
  id: '1',
  username: 'usuario_demo',
  email: 'demo@ejemplo.com',
  firstName: 'Usuario',
  lastName: 'Demo',
  age: 28,
  location: {
    latitude: 40.7128,
    longitude: -74.0060,
    city: 'Nueva York',
    country: 'Estados Unidos'
  },
  bio: 'Usuario de demostración para desarrollo frontend',
  photos: [
    {
      id: '1',
      url: 'https://via.placeholder.com/400x400/ff69b4/ffffff?text=Demo+User',
      isProfile: true,
      order: 1,
      uploadedAt: new Date()
    }
  ],
  preferences: {
    ageRange: { min: 25, max: 35 },
    distance: 50,
    interests: ['tecnología', 'viajes', 'música'],
    lookingFor: 'relationship'
  },
  isPremium: true,
  isOnline: true,
  lastSeen: new Date(),
  createdAt: new Date(),
  updatedAt: new Date()
};

class AuthService {
  private isLoggedIn: boolean = false;
  private currentUser: User | null = null;

  constructor() {
    // Verificar si hay datos guardados en localStorage
    this.initialize();
  }

  // Simular login (solo frontend)
  async login(credentials: LoginRequest): Promise<ApiResponse<AuthResponse>> {
    // En modo desarrollo, mostrar información de debug de forma más elegante
    if (import.meta.env.DEV) {
      console.debug('🔐 Mock Login:', { username: credentials.username, hasPassword: !!credentials.password });
    }
    
    // Simular delay de red
    await this.delay(1000);

    // Validación básica mock
    if (credentials.username && credentials.password) {
      const authResponse: AuthResponse = {
        success: true,
        token: 'mock_jwt_token_' + Date.now(),
        refreshToken: 'mock_refresh_token_' + Date.now(),
        user: MOCK_USER,
        message: 'Login exitoso (MOCK)',
        expiresIn: 3600
      };

      // Guardar en localStorage para persistencia
      localStorage.setItem('auth_token', authResponse.token!);
      localStorage.setItem('refresh_token', authResponse.refreshToken!);
      localStorage.setItem('user_data', JSON.stringify(MOCK_USER));
      
      this.isLoggedIn = true;
      this.currentUser = MOCK_USER;

      return {
        success: true,
        data: authResponse,
        message: 'Login exitoso'
      };
    } else {
      return {
        success: false,
        error: 'Credenciales inválidas',
        code: 401
      };
    }
  }

  // Simular registro (solo frontend)
  async register(userData: RegisterRequest): Promise<ApiResponse<AuthResponse>> {
    if (import.meta.env.DEV) {
      console.debug('🔐 Mock Register:', { username: userData.username, hasEmail: !!userData.email });
    }
    
    // Simular delay de red
    await this.delay(1500);

    // Validación básica mock
    if (userData.username && userData.password && userData.firstName) {
      const authResponse: AuthResponse = {
        success: true,
        message: 'Registro exitoso (MOCK). Ya puedes iniciar sesión.',
        user: {
          ...MOCK_USER,
          username: userData.username,
          firstName: userData.firstName,
          lastName: userData.lastName,
          age: userData.age
        }
      };

      return {
        success: true,
        data: authResponse,
        message: 'Registro exitoso'
      };
    } else {
      return {
        success: false,
        error: 'Datos de registro incompletos',
        code: 400
      };
    }
  }

  // Simular logout
  async logout(): Promise<ApiResponse<void>> {
    if (import.meta.env.DEV) {
      console.debug('🔐 Mock Logout');
    }
    
    // Simular delay
    await this.delay(500);

    // Limpiar datos
    this.clearLocalAuth();

    return {
      success: true,
      message: 'Logout exitoso'
    };
  }

  // Obtener perfil mock
  async getProfile(): Promise<ApiResponse<User>> {
    if (import.meta.env.DEV) {
      console.debug('🔐 Mock Get Profile');
    }
    
    await this.delay(800);

    if (this.isLoggedIn && this.currentUser) {
      return {
        success: true,
        data: this.currentUser,
        message: 'Perfil obtenido'
      };
    } else {
      return {
        success: false,
        error: 'Usuario no autenticado',
        code: 401
      };
    }
  }

  // Renovar token mock
  async refreshToken(): Promise<ApiResponse<AuthResponse>> {
    if (import.meta.env.DEV) {
      console.debug('🔐 Mock Refresh Token');
    }
    
    await this.delay(600);

    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken && this.isLoggedIn) {
      const authResponse: AuthResponse = {
        success: true,
        token: 'mock_jwt_token_refreshed_' + Date.now(),
        refreshToken: 'mock_refresh_token_refreshed_' + Date.now(),
        user: this.currentUser || undefined,
        message: 'Token renovado (MOCK)',
        expiresIn: 3600
      };

      // Actualizar tokens
      localStorage.setItem('auth_token', authResponse.token!);
      localStorage.setItem('refresh_token', authResponse.refreshToken!);

      return {
        success: true,
        data: authResponse,
        message: 'Token renovado'
      };
    } else {
      return {
        success: false,
        error: 'Refresh token inválido',
        code: 401
      };
    }
  }

  // Verificar si está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    this.isLoggedIn = !!token;
    return this.isLoggedIn;
  }

  // Obtener token
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Obtener datos del usuario
  getUserData(): User | null {
    try {
      const userData = localStorage.getItem('user_data');
      if (userData) {
        this.currentUser = JSON.parse(userData);
        return this.currentUser;
      }
    } catch (error) {
      console.error('Error parseando datos de usuario:', error);
    }
    return null;
  }

  // Limpiar autenticación local
  private clearLocalAuth(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_data');
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  // Inicializar servicio
  initialize(): void {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.isLoggedIn = true;
      this.currentUser = this.getUserData();
    }
  }

  // Simular verificación de salud
  async checkHealth(): Promise<{ rest: boolean; soap: boolean }> {
    if (import.meta.env.DEV) {
      console.debug('🔐 Mock Health Check');
    }
    await this.delay(300);
    
    return {
      rest: true,  // Simular que REST está disponible
      soap: false  // Simular que SOAP no está disponible aún
    };
  }

  // Mock para cambiar protocolo (no hace nada por ahora)
  setProtocol(protocol: 'REST' | 'SOAP'): void {
    if (import.meta.env.DEV) {
      console.debug(`🔐 Mock: Protocolo cambiado a ${protocol} (sin efecto en modo desarrollo)`);
    }
  }

  // Mock para estadísticas
  getAdapterStats(): Record<string, number> {
    return {
      'mock_requests': Math.floor(Math.random() * 10),
      'mock_retries': Math.floor(Math.random() * 3)
    };
  }

  // Función helper para simular delay
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Crear instancia singleton
const authService = new AuthService();

// Exportar como default
export default authService;
