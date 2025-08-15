import HttpClient from '../api/httpClient';
import SoapClient from '../soap/soapClient';
import { API_CONFIG } from '../../config/api.config';
import { ApiResponse, SoapRequest, ServiceConfig } from '../../types';

// Adaptador híbrido para manejar tanto REST como SOAP
class HybridServiceAdapter {
  private httpClient: HttpClient;
  private soapClient: SoapClient;
  private config: ServiceConfig;
  private retryCount: Map<string, number> = new Map();

  constructor(config?: Partial<ServiceConfig>) {
    this.config = {
      protocol: API_CONFIG.GENERAL.DEFAULT_PROTOCOL,
      timeout: API_CONFIG.GENERAL.TIMEOUT,
      retryAttempts: API_CONFIG.GENERAL.RETRY_ATTEMPTS,
      retryDelay: API_CONFIG.GENERAL.RETRY_DELAY,
      ...config
    };

    // Inicializar clientes
    this.httpClient = new HttpClient(
      `${API_CONFIG.REST.BASE_URL}/${API_CONFIG.REST.VERSION}`,
      this.config.timeout
    );

    this.soapClient = new SoapClient(
      API_CONFIG.SOAP.BASE_URL,
      API_CONFIG.SOAP.NAMESPACE,
      this.config.timeout
    );
  }

  // Establecer token de autenticación
  setAuthToken(token: string) {
    this.httpClient.setAuthToken(token);
  }

  // Remover token de autenticación
  removeAuthToken() {
    this.httpClient.removeAuthToken();
  }

  // Método principal para hacer peticiones híbridas
  async request<T = any>(
    restEndpoint: string,
    soapRequest: SoapRequest,
    data?: any,
    forceProtocol?: 'REST' | 'SOAP'
  ): Promise<ApiResponse<T>> {
    const protocol = forceProtocol || this.config.protocol;
    const requestId = `${protocol}-${restEndpoint || soapRequest.method}`;

    try {
      let result: ApiResponse<T>;

      if (protocol === 'REST') {
        result = await this.makeRestRequest<T>(restEndpoint, data);
        
        // Si REST falla y está habilitado el fallback a SOAP
        if (!result.success && API_CONFIG.GENERAL.USE_SOAP_FALLBACK) {
          console.warn(`REST falló, intentando con SOAP: ${restEndpoint}`);
          result = await this.makeSoapRequest<T>(soapRequest);
        }
      } else {
        result = await this.makeSoapRequest<T>(soapRequest);
        
        // Si SOAP falla, intentar con REST
        if (!result.success) {
          console.warn(`SOAP falló, intentando con REST: ${soapRequest.method}`);
          result = await this.makeRestRequest<T>(restEndpoint, data);
        }
      }

      // Si la petición fue exitosa, resetear contador de reintentos
      if (result.success) {
        this.retryCount.delete(requestId);
      } else {
        // Manejar reintentos
        const currentRetries = this.retryCount.get(requestId) || 0;
        
        if (currentRetries < this.config.retryAttempts) {
          this.retryCount.set(requestId, currentRetries + 1);
          
          // Esperar antes del reintento
          await this.delay(this.config.retryDelay * (currentRetries + 1));
          
          console.log(`Reintentando petición (${currentRetries + 1}/${this.config.retryAttempts}): ${requestId}`);
          return this.request<T>(restEndpoint, soapRequest, data, forceProtocol);
        } else {
          // Se agotaron los reintentos
          this.retryCount.delete(requestId);
          console.error(`Se agotaron los reintentos para: ${requestId}`);
        }
      }

      return result;

    } catch (error: any) {
      console.error(`Error en petición híbrida ${requestId}:`, error);
      return {
        success: false,
        error: error.message || 'Error desconocido en petición híbrida',
        code: 500
      };
    }
  }

  // Hacer petición REST
  private async makeRestRequest<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    try {
      if (!endpoint) {
        throw new Error('Endpoint REST no proporcionado');
      }

      if (data) {
        return await this.httpClient.post<T>(endpoint, data);
      } else {
        return await this.httpClient.get<T>(endpoint);
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Error en petición REST',
        code: 500
      };
    }
  }

  // Hacer petición SOAP
  private async makeSoapRequest<T>(soapRequest: SoapRequest): Promise<ApiResponse<T>> {
    try {
      const soapResponse = await this.soapClient.call<T>(soapRequest);
      
      if (soapResponse.success) {
        return {
          success: true,
          data: soapResponse.data,
          message: 'Petición SOAP exitosa'
        };
      } else {
        return {
          success: false,
          error: soapResponse.fault?.message || 'Error en petición SOAP',
          code: 500
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Error en petición SOAP',
        code: 500
      };
    }
  }

  // Método para peticiones GET específicas
  async get<T = any>(
    restEndpoint: string,
    soapRequest: SoapRequest,
    params?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    if (this.config.protocol === 'REST') {
      return await this.httpClient.get<T>(restEndpoint, params);
    } else {
      // Para SOAP, agregar parámetros al request
      if (params) {
        soapRequest.parameters = { ...soapRequest.parameters, ...params };
      }
      return await this.request<T>(restEndpoint, soapRequest);
    }
  }

  // Método para peticiones POST específicas
  async post<T = any>(
    restEndpoint: string,
    soapRequest: SoapRequest,
    data: any
  ): Promise<ApiResponse<T>> {
    if (this.config.protocol === 'REST') {
      return await this.httpClient.post<T>(restEndpoint, data);
    } else {
      // Para SOAP, agregar datos a los parámetros
      soapRequest.parameters = { ...soapRequest.parameters, ...data };
      return await this.request<T>(restEndpoint, soapRequest, data);
    }
  }

  // Método para subir archivos
  async uploadFile<T = any>(
    restEndpoint: string,
    file: File,
    additionalData?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    // Para archivos, preferir siempre REST
    return await this.httpClient.uploadFile<T>(restEndpoint, file, additionalData);
  }

  // Verificar disponibilidad de servicios
  async checkServicesHealth(): Promise<{ rest: boolean; soap: boolean }> {
    const [restHealth, soapHealth] = await Promise.allSettled([
      this.httpClient.get('/health').then(r => r.success),
      this.soapClient.ping()
    ]);

    return {
      rest: restHealth.status === 'fulfilled' ? restHealth.value : false,
      soap: soapHealth.status === 'fulfilled' ? soapHealth.value : false
    };
  }

  // Cambiar protocolo dinámicamente
  setProtocol(protocol: 'REST' | 'SOAP') {
    this.config.protocol = protocol;
  }

  // Obtener protocolo actual
  getProtocol(): 'REST' | 'SOAP' {
    return this.config.protocol;
  }

  // Método auxiliar para delays
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Obtener estadísticas de reintentos
  getRetryStats(): Record<string, number> {
    return Object.fromEntries(this.retryCount);
  }

  // Limpiar estadísticas de reintentos
  clearRetryStats() {
    this.retryCount.clear();
  }
}

export default HybridServiceAdapter;
