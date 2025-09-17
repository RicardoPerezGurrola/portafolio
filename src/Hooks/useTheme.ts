// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export const useTheme = (): [string, () => void] => {
  // 1. El estado del tema, por defecto 'dark'
  const [theme, setTheme] = useState('dark');

  // 2. Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. Efecto que se ejecuta cuando el tema cambia
  useEffect(() => {
    // Guarda el tema en localStorage
    localStorage.setItem('theme', theme);
    // Aplica el atributo data-theme al body
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // 4. Efecto que se ejecuta solo una vez al cargar la página
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      document.body.setAttribute('data-theme', localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};