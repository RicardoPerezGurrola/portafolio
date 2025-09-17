import React, { useState, useRef, useEffect } from 'react';

interface ImageModalProps {
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, altText, onClose }) => {
  // 1. Estado para el nivel de zoom (0=normal, 1=zoom x1.75, 2=zoom x2.5) y el origen del transform
  const [zoomLevel, setZoomLevel] = useState(0);
  const [transformOrigin, setTransformOrigin] = useState('center center');
  const imageRef = useRef<HTMLImageElement>(null);

  // 2. Efecto para resetear el zoom si la imagen cambia o se cierra el modal
  useEffect(() => {
    setZoomLevel(0);
  }, [imageUrl]);

  // 3. Función para manejar el clic en la imagen (cambia el nivel de zoom)
  const handleImageClick = () => {
    setZoomLevel((prevZoom) => (prevZoom + 1) % 3); // Cicla entre 0, 1, 2
  };

  // 4. Función para seguir el mouse y actualizar el punto de zoom (panning)
  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (zoomLevel === 0 || !imageRef.current) return; // No hacer nada si no hay zoom

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  // 5. Define la escala y el cursor basados en el nivel de zoom
  const zoomScales = [1, 1.75, 2.5];
  const imageStyle: React.CSSProperties = {
    transform: `scale(${zoomScales[zoomLevel]})`,
    transformOrigin: transformOrigin,
    cursor: zoomLevel > 0 ? 'zoom-out' : 'zoom-in',
  };

  // 6. Cierra el modal al presionar la tecla 'Escape'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="image-modal-backdrop" onClick={onClose}>
      {/* Detenemos la propagación del clic para que no se cierre al hacer clic en la imagen */}
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <img
          ref={imageRef}
          src={imageUrl}
          alt={altText}
          style={imageStyle}
          onClick={handleImageClick}
          onMouseMove={handleMouseMove}
        />
      </div>
    </div>
  );
};

export default ImageModal;