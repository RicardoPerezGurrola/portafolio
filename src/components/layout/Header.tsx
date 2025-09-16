// Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../../utils/scroll';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    setIsOpen(false); // Cierra el menú al hacer clic en un enlace
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#" onClick={(e) => handleScroll(e, 'inicio')}>Mi Portafolio</a>
        </div>

        {/* Botón de menú de hamburguesa */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#" onClick={(e) => handleScroll(e, 'inicio')}>Inicio</a></li>
            <li><a href="#" onClick={(e) => handleScroll(e, 'proyectos')}>Proyectos</a></li>
            <li><a href="#" onClick={(e) => handleScroll(e, 'habilidades')}>Habilidades</a></li>
            <li><a href="#" onClick={(e) => handleScroll(e, 'contacto')}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;