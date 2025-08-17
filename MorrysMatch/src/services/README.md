# Arquitectura Híbrida API REST y SOAP

Esta implementación proporciona una arquitectura híbrida que soporta tanto API REST como servicios SOAP, permitiendo flexibilidad en la comunicación con diferentes backends.

## Estructura de Directorios

```
src/
├── services/
│   ├── api/
│   │   └── httpClient.ts          # Cliente HTTP para API REST
│   ├── soap/
│   │   └── soapClient.ts          # Cliente SOAP para servicios web
│   ├── adapters/
│   │   └── hybridAdapter.ts       # Adaptador híbrido que maneja ambos protocolos
│   ├── authService.ts             # Servicio de autenticación
│   ├── userService.ts             # Servicio de usuarios
│   └── index.ts                   # Exportaciones principales
├── config/
│   └── api.config.ts              # Configuración de URLs y endpoints
├── types/
│   └── index.ts                   # Tipos TypeScript para la aplicación
└── context/
    └── AuthContext.tsx            # Contexto de autenticación actualizado
```

## Características Principales

### 🔄 **Adaptador Híbrido**
- Soporte automático para REST y SOAP
- Fallback automático entre protocolos
- Reintentos configurables
- Manejo de errores unificado

### 🛡️ **Autenticación Robusta**
- Tokens JWT con refresh automático
- Persistencia en localStorage
- Validación de sesión
- Logout seguro

### 📡 **Clientes Especializados**
- **HttpClient**: Manejo completo de API REST con fetch
- **SoapClient**: Parser XML nativo para servicios SOAP
- Timeout configurables
- Headers personalizables

### ⚙️ **Configuración Flexible**
- URLs configurables por ambiente
- Protocolos intercambiables dinámicamente
- Endpoints centralizados
- Namespace SOAP personalizable

## Uso Básico

### Autenticación
```typescript
import { authService } from '../services';

// Login
const result = await authService.login({
  username: 'usuario',
  password: 'contraseña'
});

// Registro
const registerResult = await authService.register({
  username: 'nuevo_usuario',
  password: 'contraseña',
  firstName: 'Nombre'
});
```

### Búsqueda de Usuarios
```typescript
import { userService } from '../services';

// Buscar usuarios cercanos
const users = await userService.searchUsers({
  ageRange: { min: 25, max: 35 },
  distance: 20,
  location: { latitude: 40.7128, longitude: -74.0060 }
});
```

### Cambio de Protocolo
```typescript
// Cambiar a SOAP
authService.setProtocol('SOAP');

// Cambiar a REST
authService.setProtocol('REST');
```

## Configuración de Endpoints

### API REST
```typescript
REST: {
  BASE_URL: 'http://localhost:3001/api',
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register'
    }
  }
}
```

### SOAP
```typescript
SOAP: {
  BASE_URL: 'http://localhost:8080/soap',
  SERVICES: {
    AUTH_SERVICE: {
      URL: '/AuthService',
      METHODS: {
        AUTHENTICATE_USER: 'AuthenticateUser'
      }
    }
  }
}
```

## URLs Tradicionales

El sistema también soporta URLs tradicionales para compatibilidad:

```typescript
TRADITIONAL_URLS: {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile'
}
```

## Manejo de Errores

Todas las respuestas siguen el formato estándar:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  code?: number;
}
```

## Funcionalidades Avanzadas

### Reintentos Automáticos
- 3 intentos por defecto
- Delay incremental entre reintentos
- Fallback entre protocolos

### Monitoreo de Salud
```typescript
const health = await authService.checkHealth();
// { rest: true, soap: false }
```

### Estadísticas de Rendimiento
```typescript
const stats = authService.getAdapterStats();
// Contador de reintentos por endpoint
```

## Integración con React

El contexto de autenticación se integra automáticamente:

```typescript
const { isAuthenticated, user, login, logout } = useAuth();

// Login asíncrono
const handleLogin = async () => {
  const success = await login(credentials);
  if (success) {
    // Redirigir o mostrar éxito
  }
};
```

## Beneficios de la Arquitectura

1. **Flexibilidad**: Soporte para múltiples protocolos
2. **Resiliencia**: Fallback automático y reintentos
3. **Escalabilidad**: Fácil adición de nuevos servicios
4. **Mantenibilidad**: Código limpio y bien estructurado
5. **Compatibilidad**: Funciona con sistemas legacy y modernos

Esta arquitectura permite una transición gradual entre diferentes tecnologías de backend y proporciona una base sólida para aplicaciones empresariales.
