// Header.tsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../Hooks/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';
import { scrollToSection } from '../../utils/scroll';

// 1. Definimos un tipo para nuestros enlaces de navegación
type NavLink = {
  id: string;
  label: string;
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [theme, toggleTheme] = useTheme();

  // Creamos un array con nuestros enlaces, usando el tipo que definimos
  const navLinks: NavLink[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-abierto');
    } else {
      document.body.classList.remove('menu-abierto');
    }
    return () => {
      document.body.classList.remove('menu-abierto');
    };
  }, [isOpen]);

  // 2. Añadimos el tipo explícito al evento del mouse
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    setIsOpen(false); 
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')}>Mi Portafolio</a>
        </div>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
            ☰
          </button>

          <nav className={`nav ${isOpen ? 'active' : ''}`}>
            <ul>
              {/* 3. Mapeamos el array de enlaces para generar el menú dinámicamente */}
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={(e) => handleScroll(e, link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;