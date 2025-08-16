// Utilidades para aplicar temas de forma consistente
import { useTheme } from './';

// Hook para obtener clases de tema dinámicamente
export const useThemeClasses = () => {
  const { actualTheme } = useTheme();
  
  return {
    // Fondos
    background: actualTheme === 'dark' ? 'bg-gray-900' : 'bg-white',
    backgroundSecondary: actualTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-50',
    backgroundTertiary: actualTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-100',
    
    // Textos
    text: actualTheme === 'dark' ? 'text-white' : 'text-gray-900',
    textSecondary: actualTheme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    textMuted: actualTheme === 'dark' ? 'text-gray-400' : 'text-gray-500',
    
    // Bordes
    border: actualTheme === 'dark' ? 'border-gray-700' : 'border-gray-200',
    borderSecondary: actualTheme === 'dark' ? 'border-gray-600' : 'border-gray-300',
    
    // Interacciones
    hover: actualTheme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
    hoverSecondary: actualTheme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-200',
    
    // Cards y superficies
    card: actualTheme === 'dark' 
      ? 'bg-gray-800 border-gray-700' 
      : 'bg-white border-gray-200',
    cardHover: actualTheme === 'dark' 
      ? 'hover:bg-gray-750 hover:border-gray-600' 
      : 'hover:bg-gray-50 hover:border-gray-300',
    
    // Gradientes (mantienen colores pero con opacidad ajustada)
    primaryGradient: actualTheme === 'dark' 
      ? 'bg-gradient-to-r from-pink-500 to-purple-600 opacity-90' 
      : 'bg-gradient-to-r from-pink-500 to-purple-600',
    secondaryGradient: actualTheme === 'dark' 
      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 opacity-90' 
      : 'bg-gradient-to-r from-blue-500 to-indigo-600',
  };
};

// Clases CSS estáticas para uso directo en JSX
export const themeClasses = {
  // Uso: className={`${themeClasses.background} ${themeClasses.text}`}
  
  // Fondos responsive para dark/light
  background: 'bg-white dark:bg-gray-900',
  backgroundSecondary: 'bg-gray-50 dark:bg-gray-800',
  backgroundTertiary: 'bg-gray-100 dark:bg-gray-700',
  
  // Textos responsive
  text: 'text-gray-900 dark:text-white',
  textSecondary: 'text-gray-600 dark:text-gray-300',
  textMuted: 'text-gray-500 dark:text-gray-400',
  
  // Bordes responsive
  border: 'border-gray-200 dark:border-gray-700',
  borderSecondary: 'border-gray-300 dark:border-gray-600',
  
  // Interacciones responsive
  hover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
  hoverSecondary: 'hover:bg-gray-200 dark:hover:bg-gray-600',
  
  // Cards responsive
  card: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
  cardHover: 'hover:bg-gray-50 dark:hover:bg-gray-750',
  
  // Inputs y forms responsive
  input: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400',
  
  // Botones responsive (además de los gradientes)
  buttonSecondary: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600',
  
  // Overlays y modales
  overlay: 'bg-black bg-opacity-50 dark:bg-opacity-70',
  modal: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
};

// Funciones helper para casos específicos
export const getThemeColor = (lightColor: string, darkColor: string) => {
  const { actualTheme } = useTheme();
  return actualTheme === 'dark' ? darkColor : lightColor;
};

export const getThemeGradient = (gradient: 'primary' | 'secondary' | 'success' | 'warning' | 'danger') => {
  const { actualTheme } = useTheme();
  
  const gradients = {
    primary: actualTheme === 'dark' 
      ? 'from-pink-400 to-purple-500' 
      : 'from-pink-500 to-purple-600',
    secondary: actualTheme === 'dark' 
      ? 'from-blue-400 to-indigo-500' 
      : 'from-blue-500 to-indigo-600',
    success: actualTheme === 'dark' 
      ? 'from-green-400 to-emerald-500' 
      : 'from-green-500 to-emerald-600',
    warning: actualTheme === 'dark' 
      ? 'from-yellow-400 to-orange-500' 
      : 'from-yellow-500 to-orange-600',
    danger: actualTheme === 'dark' 
      ? 'from-red-400 to-pink-500' 
      : 'from-red-500 to-pink-600',
  };
  
  return `bg-gradient-to-r ${gradients[gradient]}`;
};
