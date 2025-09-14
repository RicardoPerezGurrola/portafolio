// src/components/TechBadge.tsx
import React from 'react';
import { technologyMap } from '../../data/technologyData';

interface TechBadgeProps {
  technology: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ technology }) => {
  // Buscamos la información de la tecnología en nuestro mapa (en minúsculas para consistencia)
  const techInfo = technologyMap.get(technology.toLowerCase());

  // Si no encontramos la tecnología, mostramos una badge genérica
  if (!techInfo) {
    return <span className="tech-tag tech-tag-generic">{technology}</span>;
  }

  const { name, color, textColor, icon: Icon } = techInfo;

  // Usamos variables CSS inline para aplicar los colores dinámicamente
  const badgeStyle = {
    '--tech-bg-color': color,
    '--tech-text-color': textColor,
  } as React.CSSProperties;

  return (
    <div className="tech-tag" style={badgeStyle}>
      <Icon className="tech-icon" />
      <span>{name}</span>
    </div>
  );
};

export default TechBadge;