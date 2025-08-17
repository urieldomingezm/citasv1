import { ApiResponse } from '../../types';

// Cliente HTTP para API REST
class HttpClient {
  private baseURL: string;
  private timeout: number;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string, timeout: number = 30000) {
    this.baseURL = baseURL;
    this.timeout = timeout;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  // Método para establecer el token de autorización
  setAuthToken(token: string) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  // Método para remover el token de autorización
  removeAuthToken() {
    delete this.defaultHeaders['Authorization'];
  }

  // Método genérico para hacer peticiones
  private async request<T = any>(
    method: string,
    endpoint: string,
    data?: any,
    customHeaders?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const headers = { ...this.defaultHeaders, ...customHeaders };

      const config: RequestInit = {
        method,
        headers,
        signal: AbortSignal.timeout(this.timeout),
      };

      if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
        config.body = JSON.stringify(data);
      }

      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        data: result.data || result,
        message: result.message,
        code: response.status
      };

    } catch (error: any) {
      console.error(`Error en ${method} ${endpoint}:`, error);
      return {
        success: false,
        error: error.message || 'Error de conexión',
        code: error.status || 500
      };
    }
  }

  // Métodos HTTP específicos
  async get<T = any>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    let url = endpoint;
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        }
      });
      url += `?${searchParams.toString()}`;
    }
    return this.request<T>('GET', url);
  }

  async post<T = any>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>('POST', endpoint, data);
  }

  async put<T = any>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>('PUT', endpoint, data);
  }

  async patch<T = any>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>('PATCH', endpoint, data);
  }

  async delete<T = any>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>('DELETE', endpoint);
  }

  // Método para subir archivos
  async uploadFile<T = any>(
    endpoint: string, 
    file: File, 
    additionalData?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      if (additionalData) {
        Object.entries(additionalData).forEach(([key, value]) => {
          formData.append(key, String(value));
        });
      }

      const headers = { ...this.defaultHeaders };
      delete headers['Content-Type']; // Dejar que el browser establezca el Content-Type para FormData

      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers,
        body: formData,
        signal: AbortSignal.timeout(this.timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        data: result.data || result,
        message: result.message,
        code: response.status
      };

    } catch (error: any) {
      console.error(`Error subiendo archivo a ${endpoint}:`, error);
      return {
        success: false,
        error: error.message || 'Error subiendo archivo',
        code: error.status || 500
      };
    }
  }
}

export default HttpClient;
