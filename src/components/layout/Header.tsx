// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../../utils/scroll'; // <-- Importa la función compartida

const Header: React.FC = () => {

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#" onClick={(e) => handleScroll(e, 'inicio')}>Mi Portafolio</a>
        </div>
        <nav className="nav">
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