import React, { useState } from 'react';
import { useTheme, themeClasses } from '../../themes';
import type { ThemeMode } from '../../themes';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions: { value: ThemeMode; label: string; icon: string }[] = [
    { value: 'light', label: 'Claro', icon: 'bi-sun-fill' },
    { value: 'dark', label: 'Oscuro', icon: 'bi-moon-fill' },
    { value: 'auto', label: 'Automático', icon: 'bi-circle-half' },
  ];

  const currentTheme = themeOptions.find(option => option.value === theme) || themeOptions[0];

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 py-2 px-3 rounded ${themeClasses.hover} hover:bg-gray-100 dark:hover:bg-gray-700 text-sm transition-colors`}
        title="Cambiar tema"
      >
        <i className={`${currentTheme.icon} ${themeClasses.textSecondary} text-gray-600 dark:text-gray-300`}></i>
        <span className={`${themeClasses.text} text-gray-700 dark:text-gray-200`}>{currentTheme.label}</span>
        <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'} ${themeClasses.textMuted} text-gray-400 text-xs`}></i>
      </button>

      {isOpen && (
        <>
          {/* Overlay para cerrar al hacer clic fuera */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Dropdown */}
          <div className={`absolute bottom-full left-0 mb-2 w-40 ${themeClasses.card} rounded-lg shadow-lg ${themeClasses.border} border-gray-200 dark:border-gray-700 z-20`}>
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleThemeChange(option.value)}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-left text-sm ${themeClasses.hover} hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  theme === option.value 
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : `${themeClasses.text} text-gray-700 dark:text-gray-200`
                }`}
              >
                <i className={`${option.icon} ${
                  theme === option.value 
                    ? 'text-blue-500 dark:text-blue-400' 
                    : `${themeClasses.textSecondary} text-gray-500 dark:text-gray-400`
                }`}></i>
                <span>{option.label}</span>
                {theme === option.value && (
                  <i className="bi bi-check-lg text-blue-500 dark:text-blue-400 ml-auto"></i>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSelector;
