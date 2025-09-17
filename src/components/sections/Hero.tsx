// Hero.tsx
import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../../utils/scroll';

const Hero: React.FC = () => {
  const phrases = [
    "Hola, soy Ricardo Pérez Gurrola",
    "Soy un desarrollador Full-Stack",
    "¡Bienvenido a mi portafolio!"
  ];
  
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingFinished, setTypingFinished] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
      } else {
        setDisplayText(prev => currentPhrase.substring(0, prev.length + 1));
      }
    };

    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 50 : 50;

    if (!isDeleting && displayText === currentPhrase) {
      setTypingFinished(true);
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingFinished(false);
      }, 1500);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    } else {
      const timeout = setTimeout(handleTyping, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, phraseIndex, phrases]);

  // Se controla el white-space, pero la altura se maneja en CSS
  

  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img src={`${import.meta.env.BASE_URL}images/Yo.svg`} alt="Foto de perfil" />
          </div>
          <div className="hero-text">
            <h1  className="typing-container">
              {displayText}
              <span className={`cursor ${typingFinished ? 'blinking' : ''}`}></span>
            </h1>
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