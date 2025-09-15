// Hero.tsx
import React from 'react';
import { scrollToSection } from '../../utils/scroll'; // <-- Importa la función compartida

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/images/profile.svg" alt="Foto de perfil" />
          </div>
          <div className="hero-text">
            <h1>Hola, soy <span className="highlight">Ricardo Pérez Gurrola</span></h1>
            <h2>Desarrollador Full-Stack</h2>
            <p>
              Bienvenido a mi portafolio. Soy un apasionado desarrollador web 
              enfocado en crear experiencias digitales atractivas y funcionales.
              Me especializo en React, TypeScript y diseño web responsive.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('habilidades')} className="btn btn-secondary">
                Ver Habilidades
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="btn btn-primary">
                Ver Proyectos
              </button>
              <button onClick={() => scrollToSection('contacto')} className="btn btn-primary">
                Contactar
              </button>
              <button className="btn btn-success">
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;