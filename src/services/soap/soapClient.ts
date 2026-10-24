import { SoapRequest, SoapResponse, SoapFault } from '@/types';

// Cliente SOAP para servicios web
class SoapClient {
  private baseURL: string;
  private namespace: string;
  private timeout: number;

  constructor(baseURL: string, namespace: string, timeout: number = 30000) {
    this.baseURL = baseURL;
    this.namespace = namespace;
    this.timeout = timeout;
  }

  // Crear envelope SOAP
  private createSoapEnvelope(
    service: string,
    method: string,
    parameters: Record<string, any>
  ): string {
    const paramsXml = this.objectToXml(parameters);
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:tns="${this.namespace}">
  <soap:Header/>
  <soap:Body>
    <tns:${method}>
      ${paramsXml}
    </tns:${method}>
  </soap:Body>
</soap:Envelope>`;
  }

  // Convertir objeto a XML
  private objectToXml(obj: Record<string, any>, indent: string = '      '): string {
    let xml = '';
    
    for (const [key, value] of Object.entries(obj)) {
      if (value === null || value === undefined) {
        xml += `${indent}<tns:${key} xsi:nil="true" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/>\n`;
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        xml += `${indent}<tns:${key}>\n`;
        xml += this.objectToXml(value, indent + '  ');
        xml += `${indent}</tns:${key}>\n`;
      } else if (Array.isArray(value)) {
        value.forEach(item => {
          xml += `${indent}<tns:${key}>${this.escapeXml(String(item))}</tns:${key}>\n`;
        });
      } else {
        xml += `${indent}<tns:${key}>${this.escapeXml(String(value))}</tns:${key}>\n`;
      }
    }
    
    return xml;
  }

  // Escapar caracteres especiales XML
  private escapeXml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  // Parsear respuesta SOAP
  private parseSoapResponse(xmlText: string): any {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      
      // Verificar si hay faults
      const fault = xmlDoc.getElementsByTagName('soap:Fault')[0] || 
                   xmlDoc.getElementsByTagName('Fault')[0];
      
      if (fault) {
        const faultCode = fault.querySelector('faultcode')?.textContent || 'Unknown';
        const faultString = fault.querySelector('faultstring')?.textContent || 'Unknown error';
        const faultDetail = fault.querySelector('detail')?.textContent;
        
        return {
          success: false,
          fault: {
            code: faultCode,
            message: faultString,
            detail: faultDetail
          } as SoapFault
        };
      }

      // Extraer el cuerpo de la respuesta
      const body = xmlDoc.getElementsByTagName('soap:Body')[0] || 
                  xmlDoc.getElementsByTagName('Body')[0];
      
      if (body && body.firstElementChild) {
        const responseData = this.xmlToObject(body.firstElementChild);
        return {
          success: true,
          data: responseData
        };
      }

      return {
        success: false,
        fault: {
          code: 'PARSE_ERROR',
          message: 'No se pudo parsear la respuesta SOAP'
        }
      };

    } catch (error: any) {
      return {
        success: false,
        fault: {
          code: 'PARSE_ERROR',
          message: error.message || 'Error parseando respuesta XML'
        }
      };
    }
  }

  // Convertir XML a objeto
  private xmlToObject(element: Element): any {
    const result: any = {};
    
    // Obtener atributos
    if (element.attributes.length > 0) {
      result['@attributes'] = {};
      for (let i = 0; i < element.attributes.length; i++) {
        const attr = element.attributes[i];
        result['@attributes'][attr.name] = attr.value;
      }
    }
    
    // Obtener elementos hijos
    if (element.children.length > 0) {
      for (let i = 0; i < element.children.length; i++) {
        const child = element.children[i];
        const childName = child.tagName.replace(/^.*:/, ''); // Remover namespace
        
        if (result[childName]) {
          // Si ya existe, convertir a array
          if (!Array.isArray(result[childName])) {
            result[childName] = [result[childName]];
          }
          result[childName].push(this.xmlToObject(child));
        } else {
          result[childName] = this.xmlToObject(child);
        }
      }
    } else {
      // Si no hay hijos, devolver el texto
      return element.textContent || '';
    }
    
    return result;
  }

  // Método principal para hacer llamadas SOAP
  async call<T = any>(soapRequest: SoapRequest): Promise<SoapResponse<T>> {
    try {
      const soapEnvelope = this.createSoapEnvelope(
        soapRequest.service,
        soapRequest.method,
        soapRequest.parameters
      );

      const response = await fetch(`${this.baseURL}${soapRequest.service}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
          'SOAPAction': `"${this.namespace}/${soapRequest.method}"`,
          'Accept': 'text/xml'
        },
        body: soapEnvelope,
        signal: AbortSignal.timeout(this.timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseText = await response.text();
      return this.parseSoapResponse(responseText);

    } catch (error: any) {
      console.error(`Error en llamada SOAP ${soapRequest.method}:`, error);
      return {
        success: false,
        fault: {
          code: 'CONNECTION_ERROR',
          message: error.message || 'Error de conexión SOAP'
        }
      };
    }
  }

  // Método para verificar disponibilidad del servicio
  async ping(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}?wsdl`, {
        method: 'GET',
        signal: AbortSignal.timeout(5000), // 5 segundos para ping
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}

export default SoapClient;
