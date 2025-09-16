import React, { useState, useEffect, useRef } from 'react';
import { scrollToSection } from '../../utils/scroll';

const Hero: React.FC = () => {
  const phrases = [
    "Hola, soy Ricardo Pérez Gurrola",
    "Hola, soy un desarrollador Full-Stack",
    "¡Bienvenido a mi portafolio!"
  ];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typingFinished, setTypingFinished] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      const speed = isDeleting ? 50 : 100; // Velocidad de escritura
      const currentLength = displayText.length;

      if (!isDeleting && currentLength < currentPhrase.length) {
        setDisplayText(currentPhrase.substring(0, currentLength + 1));
        setTypingFinished(false);
        timeoutRef.current = setTimeout(handleTyping, speed);
      } 
      else if (isDeleting && currentLength > 0) {
        setDisplayText(currentPhrase.substring(0, currentLength - 1));
        setTypingFinished(false);
        timeoutRef.current = setTimeout(handleTyping, speed);
      } 
      else if (!isDeleting && currentLength === currentPhrase.length) {
        setTypingFinished(true);
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
          setTypingFinished(false);
          handleTyping();
        }, 1500);
      } 
      else if (isDeleting && currentLength === 0) {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setTypingFinished(false);
        timeoutRef.current = setTimeout(handleTyping, 500);
      }
    };

    timeoutRef.current = setTimeout(handleTyping, 500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, phraseIndex]);

  // Se aplica el estilo white-space solo si la animación está activa
  const h1Style = {
    whiteSpace: typingFinished || isDeleting ? 'normal' : 'nowrap',
    overflow: 'hidden',
    fontSize: '3.5rem',
    marginBottom: '1rem',
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/images/profile.svg" alt="Foto de perfil" />
          </div>
          <div className="hero-text">
            <h1 style={h1Style}>
              {displayText}
              <span className={`cursor ${typingFinished ? 'blinking' : 'solid'}`}></span>
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