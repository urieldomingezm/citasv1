# 🛠️ Configuración de Rutas Absolutas

## ⚠️ IMPORTANTE - Primeros Pasos

**Después de configurar los alias, DEBES:**

1. **Reiniciar completamente el servidor de desarrollo:**
```bash
# Detener el servidor (Ctrl+C)
# Luego reiniciar:
npm run dev
```

2. **Si sigue dando errores, limpiar caché:**
```bash
rm -rf node_modules/.vite
npm run dev
```

## ¿Qué son las rutas absolutas?

En lugar de usar rutas relativas como:
```typescript
import Component from '../../../components/Component'
import Service from '../../services/myService'
```

Ahora puedes usar rutas absolutas como:
```typescript
import Component from '@components/Component'
import Service from '@services/myService'
```

## 📁 Alias configurados

| Alias | Ruta | Descripción |
|-------|------|-------------|
| `@` | `/src` | Carpeta raíz de src |
| `@components` | `/src/components` | Todos los componentes |
| `@pages` | `/src/pages` | Todas las páginas |
| `@services` | `/src/services` | Servicios y API |
| `@context` | `/src/context` | Context de React |
| `@config` | `/src/config` | Archivos de configuración |
| `@types` | `/src/types` | Tipos de TypeScript |
| `@assets` | `/src/assets` | Recursos estáticos |
| `@utils` | `/src/utils` | Utilidades y helpers |

## 🔥 Ejemplos de uso

### Antes (rutas relativas)
```typescript
// En src/pages/usuario/perfil.tsx
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { userService } from '../../services/userService'
import { AuthContext } from '../../context/AuthContext'
```

### Después (rutas absolutas)
```typescript
// En src/pages/usuario/perfil.tsx
import Header from '@components/Header'
import Footer from '@components/Footer'
import { userService } from '@services/userService'
import { AuthContext } from '@context/AuthContext'
```

### Importando modales de configuración
```typescript
// Antes
import NotificacionesModal from './configuracion/notificaciones'
import PreferenciasModal from './configuracion/preferencias'

// Después
import NotificacionesModal from '@components/modales/configuracion/notificaciones'
import PreferenciasModal from '@components/modales/configuracion/preferencias'
```

### Servicios y configuración
```typescript
// Antes
import { apiConfig } from '../../../config/api.config'
import { httpClient } from '../../../services/api/httpClient'

// Después
import { apiConfig } from '@config/api.config'
import { httpClient } from '@services/api/httpClient'
```

## ⚠️ Notas importantes

1. **Compatibilidad**: Funciona con Vite 2.x+ y TypeScript
2. **Autocompletado**: Tu IDE ahora tendrá mejor autocompletado
3. **Refactoring**: Más fácil mover archivos sin romper imports
4. **Legibilidad**: Código más limpio y fácil de entender

## 🔄 Migración gradual

No necesitas cambiar todos los imports de una vez. Puedes:
1. Usar rutas absolutas en archivos nuevos
2. Cambiar rutas relativas cuando edites archivos existentes
3. Ambos tipos de imports pueden coexistir

## 🚀 Reiniciar el servidor

**CRÍTICO:** Después de cambiar la configuración, SIEMPRE reinicia el servidor:

```bash
# Detener el servidor actual (Ctrl+C en la terminal)
# Luego ejecutar:
npm run dev
```

**Si sigue dando errores de resolución de módulos:**
```bash
# Limpiar caché de Vite
rm -rf node_modules/.vite
npm run dev
```

¡Ahora ya puedes usar rutas absolutas en todo tu proyecto! 🎉

## 🔧 Solución de Problemas

### Error: "Failed to resolve import"
1. Verificar que el servidor esté reiniciado
2. Limpiar caché: `rm -rf node_modules/.vite`
3. Verificar que el archivo existe en la ruta correcta
4. Usar rutas relativas temporalmente si es necesario
