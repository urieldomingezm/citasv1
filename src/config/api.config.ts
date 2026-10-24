export const API_CONFIG = {
  GENERAL: {
    DEFAULT_PROTOCOL: 'REST' as 'REST' | 'SOAP',
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000,
    USE_SOAP_FALLBACK: false,
  },
  REST: {
    BASE_URL: import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api',
    VERSION: 'v1',
    ENDPOINTS: {
      AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
      },
    },
  },
  SOAP: {
    BASE_URL: import.meta.env.VITE_SOAP_URL ?? 'http://localhost:8080/soap',
    NAMESPACE: 'http://morrysmatch.local/services',
    SERVICES: {
      AUTH_SERVICE: {
        URL: '/AuthService',
        METHODS: {
          AUTHENTICATE_USER: 'AuthenticateUser',
        },
      },
    },
  },
} as const;
