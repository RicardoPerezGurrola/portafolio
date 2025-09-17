// Header.tsx
import React, { useState, useEffect } from 'react'; // <-- 1. Importa useEffect
import { Link } from 'react-router-dom';
import { scrollToSection } from '../../utils/scroll';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Cuando el menú se abre, añade la clase al body
    if (isOpen) {
      document.body.classList.add('menu-abierto');
    } else {
      // Cuando el menú se cierra, quita la clase del body
      document.body.classList.remove('menu-abierto');
    }

    // Opcional: Función de limpieza para cuando el componente se desmonte
    return () => {
      document.body.classList.remove('menu-abierto');
    };
  }, [isOpen]); // Este efecto se ejecuta cada vez que 'isOpen' cambia

  const handleScroll = (e: React.MouseEvent, id: string) => {
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
          <a href="#" onClick={(e) => handleScroll(e, 'inicio')}>Mi Portafolio</a>
        </div>

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