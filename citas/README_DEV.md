# App de Citas - Modo Desarrollo Frontend 💕

## 🚀 Estado Actual

Esta aplicación está configurada en **modo desarrollo frontend** para permitir el maquetado y pruebas de UI sin necesidad de un backend real.

### ✅ Componentes Implementados

- **Header.tsx** - Navegación principal con menús dinámicos
- **MenuPrimerNivel.tsx** - Menú para usuarios no autenticados
- **MenuSegundoNivel.tsx** - Menú completo para usuarios autenticados
- **LoginModal.tsx** - Modal de inicio de sesión
- **RegisterModal.tsx** - Modal de registro
- **Alert.tsx** - Sistema de alertas con Tailwind CSS
- **AuthContext.tsx** - Gestión de estado de autenticación
- **Layout.tsx** - Layout principal de la aplicación

### 🔧 Servicios Mock

Los servicios están configurados para usar datos mock:

- **authService.ts** - Autenticación simulada con datos locales
- **userService.ts** - Gestión de usuarios con datos mock
- **api.config.ts** - Configuración deshabilitada (modo desarrollo)

### 📱 Funcionalidades Frontend

- ✅ **Autenticación**: Login/registro con validación
- ✅ **Alertas**: Sistema de notificaciones con Tailwind CSS
- ✅ **Navegación**: Menús responsivos que cambian según el estado de auth
- ✅ **Persistencia**: Los datos se guardan en localStorage
- ✅ **UI Responsiva**: Diseño mobile-first con Tailwind CSS
- ✅ **Iconografía**: Bootstrap Icons integrados

### 🎯 Datos Mock Disponibles

- **Usuario Demo**: usuario_demo / contraseña cualquiera
- **Usuarios Mock**: Ana García, Carlos López, María Rodríguez
- **Matches Mock**: 2 matches de ejemplo
- **Mensajes Mock**: Conversaciones de prueba

### 🛠️ Tecnologías

- **React 18** + **TypeScript**
- **Tailwind CSS** para estilos
- **Bootstrap Icons** para iconografía
- **Context API** para estado global
- **LocalStorage** para persistencia

### 🚧 Arquitectura Híbrida (Preparada para el Futuro)

Cuando esté listo el backend:

1. **Descomenta** la configuración en `api.config.ts`
2. **Configura** las URLs reales de REST y SOAP
3. **Reemplaza** los servicios mock con la implementación real
4. **La arquitectura híbrida** permitirá usar REST y SOAP simultáneamente

### 🏃‍♂️ Ejecutar el Proyecto

```bash
cd citas
npm install
npm run dev
```

### 📝 Notas para Desarrollo

- Los datos mock se reinician al recargar la página
- Las validaciones están implementadas solo en frontend
- Los delays simulan latencia de red real
- Los errores de red están simulados aleatoriamente

### 🔮 Próximos Pasos

1. **Backend REST API** - Implementar endpoints reales
2. **Backend SOAP** - Implementar servicios SOAP
3. **Base de Datos** - Conectar con persistencia real
4. **WebSockets** - Para mensajería en tiempo real
5. **Push Notifications** - Para notificaciones móviles
6. **Testing** - Pruebas unitarias e integración

---

*Modo: Frontend Development Only*  
*Estado: ✅ Listo para maquetado y pruebas de UI*  
*Backend: 🚧 Pendiente de implementación*
