// Configuración de temas para la aplicación
export const themes = {
  light: {
    name: 'Claro',
    icon: 'bi-sun-fill',
    colors: {
      primary: 'from-pink-500 to-purple-600',
      secondary: 'from-blue-500 to-indigo-600',
      background: 'bg-white',
      surface: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-gray-200',
      hover: 'hover:bg-gray-100',
    }
  },
  dark: {
    name: 'Oscuro',
    icon: 'bi-moon-fill',
    colors: {
      primary: 'from-pink-400 to-purple-500',
      secondary: 'from-blue-400 to-indigo-500',
      background: 'bg-gray-900',
      surface: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      border: 'border-gray-700',
      hover: 'hover:bg-gray-700',
    }
  },
  auto: {
    name: 'Automático',
    icon: 'bi-circle-half',
    colors: {} // Se resuelve dinámicamente
  }
};

export type ThemeConfig = typeof themes;
export type ThemeName = keyof ThemeConfig;
