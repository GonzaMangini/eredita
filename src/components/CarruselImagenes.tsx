import React, { useState, useEffect, useRef } from 'react';

interface CarruselImagenesProps {
  images: string[];
  className?: string;
  imageFit?: 'cover' | 'contain';
  showThumbs?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
}

const CarruselImagenes: React.FC<CarruselImagenesProps> = ({ images, className, imageFit = 'cover', showThumbs = true, showArrows = true, showDots = true }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goToSlide = (idx: number) => setCurrent(idx);

  // Autoplay con reinicio al interactuar
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(nextSlide, 6000);
    return () => clearTimeout(timeoutRef.current!);
  }, [current, images.length]);

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-xl ${className ? className : ''}`}>
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Imagen ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
        />
      ))}
      {/* Flechas */}
      {showArrows && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-eredita-green rounded-full p-2 shadow-md z-20"
            onClick={() => { prevSlide(); }}
            aria-label="Anterior"
            tabIndex={0}
          >
            &#8592;
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-eredita-green rounded-full p-2 shadow-md z-20"
            onClick={() => { nextSlide(); }}
            aria-label="Siguiente"
            tabIndex={0}
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );
};

export default CarruselImagenes;

// Render thumbnails below the main image, outside of the overlay container
export const CarruselConThumbsAbajo: React.FC<CarruselImagenesProps> = ({ images, className, imageFit = 'contain', showThumbs = true, showArrows = false, showDots = false }) => {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef<number | null>(null);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const goToSlide = (idx: number) => setCurrent(idx);
  React.useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(nextSlide, 6000);
    return () => clearTimeout(timeoutRef.current!);
  }, [current, images.length]);

  return (
    <div className={className}>
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Imagen ${idx + 1}`}
            className={`absolute top-0 left-0 w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
          />
        ))}
      </div>
      {showThumbs && images.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((thumb, idx) => (
            <button
              key={`thumb-${idx}`}
              onClick={() => goToSlide(idx)}
              className={`h-12 w-12 rounded-md overflow-hidden ring-2 transition ${current === idx ? 'ring-eredita-title-pink' : 'ring-transparent hover:ring-eredita-text-green/50'}`}
              aria-label={`Ver miniatura ${idx + 1}`}
            >
              <img src={thumb} alt={`Miniatura ${idx + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
