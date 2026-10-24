# Sistema de Temas Dark/Light/Auto 🎨

Sistema completo de temas para la aplicación de citas con soporte para modo claro, oscuro y automático.

## 📁 Estructura

```
src/themes/
├── ThemeContext.tsx      # Contexto y provider de temas
├── themeConfig.ts        # Configuración de colores y temas
├── themeUtils.ts         # Utilidades y helpers para aplicar temas
├── index.ts             # Exportaciones principales
└── README.md            # Esta documentación
```

## 🚀 Configuración Inicial

El sistema ya está configurado en `App.tsx`:

```tsx
import { ThemeProvider } from './themes';

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      {/* Tu aplicación */}
    </AuthProvider>
  </ThemeProvider>
);
```

## 🎯 Uso Básico

### 1. Hook useTheme

```tsx
import { useTheme } from '../themes';

const MiComponente = () => {
  const { theme, actualTheme, setTheme } = useTheme();
  
  // theme: 'light' | 'dark' | 'auto'
  // actualTheme: 'light' | 'dark' (resuelve auto)
  
  return (
    <div className={actualTheme === 'dark' ? 'text-white' : 'text-black'}>
      Tema actual: {theme}
    </div>
  );
};
```

### 2. Clases CSS Responsivas (Recomendado)

```tsx
import { themeClasses } from '../themes';

const MiCard = () => (
  <div className={`${themeClasses.card} ${themeClasses.hover} p-4 rounded-lg`}>
    <h3 className={themeClasses.text}>Título</h3>
    <p className={themeClasses.textSecondary}>Descripción</p>
  </div>
);
```

### 3. Hook useThemeClasses

```tsx
import { useThemeClasses } from '../themes';

const MiComponente = () => {
  const theme = useThemeClasses();
  
  return (
    <div className={`${theme.background} ${theme.text}`}>
      <div className={`${theme.card} p-4`}>
        Contenido adaptable
      </div>
    </div>
  );
};
```

## 🛠️ Clases CSS Disponibles

### Fondos
- `themeClasses.background` - Fondo principal (blanco/negro)
- `themeClasses.backgroundSecondary` - Fondo secundario (gris claro/oscuro)
- `themeClasses.backgroundTertiary` - Fondo terciario

### Textos
- `themeClasses.text` - Texto principal
- `themeClasses.textSecondary` - Texto secundario
- `themeClasses.textMuted` - Texto desactivado

### Interacciones
- `themeClasses.hover` - Hover estándar
- `themeClasses.hoverSecondary` - Hover alternativo

### Cards y Superficies
- `themeClasses.card` - Card con fondo y borde
- `themeClasses.cardHover` - Card con hover

### Forms
- `themeClasses.input` - Inputs y formularios

## 🎨 Gradientes Dinámicos

```tsx
import { getThemeGradient } from '../themes';

const MiBoton = () => {
  const gradientClass = getThemeGradient('primary');
  
  return (
    <button className={`${gradientClass} text-white px-4 py-2 rounded`}>
      Botón con gradiente
    </button>
  );
};
```

Gradientes disponibles:
- `primary` - Rosa a morado
- `secondary` - Azul a índigo  
- `success` - Verde a esmeralda
- `warning` - Amarillo a naranja
- `danger` - Rojo a rosa

## 🔧 Selector de Temas

El componente `ThemeSelector` ya está integrado en el menú:

```tsx
import ThemeSelector from '../components/ThemeSelector';

// Se usa automáticamente en el footer del menú
<ThemeSelector />
```

## 📱 Ejemplos Completos

### Card Responsiva
```tsx
import { themeClasses } from '../themes';

const ProfileCard = () => (
  <div className={`${themeClasses.card} p-6 rounded-xl shadow-lg transition-all duration-300`}>
    <div className={`${themeClasses.hover} p-2 rounded`}>
      <h3 className={`${themeClasses.text} text-xl font-bold mb-2`}>
        Usuario Demo
      </h3>
      <p className={`${themeClasses.textSecondary} text-sm`}>
        Descripción del perfil
      </p>
    </div>
  </div>
);
```

### Modal Temático
```tsx
import { themeClasses } from '../themes';

const MiModal = () => (
  <div className={themeClasses.overlay}>
    <div className={`${themeClasses.modal} p-6 rounded-xl max-w-md mx-auto`}>
      <h2 className={`${themeClasses.text} text-2xl font-bold mb-4`}>
        Título del Modal
      </h2>
      <p className={themeClasses.textSecondary}>
        Contenido del modal que se adapta al tema actual.
      </p>
    </div>
  </div>
);
```

### Formulario Adaptable
```tsx
import { themeClasses } from '../themes';

const MiForm = () => (
  <form className={`${themeClasses.background} p-4`}>
    <input 
      className={`${themeClasses.input} w-full p-3 rounded-lg border`}
      placeholder="Escribe algo..."
    />
    <button className={`${themeClasses.buttonSecondary} px-4 py-2 rounded`}>
      Enviar
    </button>
  </form>
);
```

## 💡 Tips y Mejores Prácticas

1. **Usa clases CSS responsivas**: Prefiere `themeClasses.text` sobre condicionalmente aplicar clases
2. **Mantén consistencia**: Usa los gradientes predefinidos para mantener la identidad visual
3. **Testa ambos modos**: Siempre verifica que tu componente se vea bien en light y dark
4. **Persistencia automática**: El tema seleccionado se guarda automáticamente en localStorage
5. **Detección del sistema**: El modo 'auto' respeta la preferencia del sistema operativo

## 🎯 Aplicación en Páginas Existentes

Para aplicar temas a páginas existentes, simplemente agrega las clases:

```tsx
// Antes
<div className="bg-white text-black">

// Después  
<div className={`${themeClasses.background} ${themeClasses.text}`}>
```

¡El sistema está listo para usar en toda la aplicación! 🚀
