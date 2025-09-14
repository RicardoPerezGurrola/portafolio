import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" >
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
              <a href="#proyectos" className="btn btn-success">Ver Proyectos</a>
              <a href="#contacto" className="btn btn-success">Contactar</a>
              <a href="/CV_Ricardo_Perez_Gurrola.pdf" download className="btn btn-success">Descargar CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;