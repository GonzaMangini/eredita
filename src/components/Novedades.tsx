import React, { useState, useEffect, useRef } from 'react';

const novedadesImages = [
  '/Novedades/TallerMargott.webp',
  '/Novedades/VivoGratis.webp',

];

const Novedades: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % novedadesImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + novedadesImages.length) % novedadesImages.length);
  const goToSlide = (idx: number) => setCurrent(idx);

  // Autoplay cada 4 segundos
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(nextSlide, 4000);
    return () => clearTimeout(timeoutRef.current!);
  }, [current]);

  return (
    <section id="novedades" className="w-full py-24 mt-16 bg-gradient-to-b">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h2 className="mt-2 text-3xl md:text-5xl lg:text-6xl font-brand text-eredita-pink text-center mb-2">Novedades</h2>
        <p className="text-xl text-center text-gray-600 mb-8">Descubre nuestros últimos talleres y creaciones</p>
      </div>

      {/* Layout en dos columnas en desktop, apilado en móvil */}
      <div className="max-w-8xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Carrusel - ocupa la mitad en desktop, full en móvil */}
        <div className="relative w-full h-80 md:h-[600px] overflow-hidden rounded-xl shadow-lg">
          {novedadesImages.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={img}
                alt={`Novedad ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay para mejor legibilidad */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}

          {/* Flechas eliminadas por requerimiento */}

          {/* Puntos indicadores */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {novedadesImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === idx 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ir a la imagen ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Panel de texto - se ubica al lado en desktop y debajo en móvil */}
        <div className="space-y-4 md:pl-8">
          <h3 className="text-2xl md:text-3xl font-brand text-eredita-pink">¿Querés estar al tanto de todas las novedades?</h3>
          <p className="text-gray-700 text-xl leading-relaxed">
            Sumate a nuestra comunidad en Instagram para inspirarte todos los días con ideas, tips y lanzamientos. 
            Tu próxima creación puede empezar con un post. ¡Te espero!
          </p>
          <div>
            <a
              href="https://www.instagram.com/ereditaok/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-eredita-pink text-white font-medium shadow-lg transition hover:shadow-xl hover:opacity-95"
            >
              {/* Icono de Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
              </svg>
              Seguime en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Novedades;
