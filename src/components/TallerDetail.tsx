import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CarruselImagenes, { CarruselConThumbsAbajo } from './CarruselImagenes';
import { productService, type Product } from '../services/products';
import { useCart } from '../contexts/CartContext';

// Texto por defecto para Información de los talleres
const DEFAULT_WORKSHOP_INFO = `🌸 ¿Cómo funcionan los talleres?
Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.
Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.
🌸 ¿Cómo es la modalidad de los vivos?
👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 🧶
Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.
🌸 ¿Y si tengo dudas?
Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.
🌸 Al finalizar el taller
Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`;

// Metodología genérica por defecto
const DEFAULT_METHODOLOGY = [
  'Patrón completo de todos los proyectos',
  'Técnicas de tejido basicas',
  'Secretos de terminación',
  'Clases en vivo grabadas para que puedas aprender a tu ritmo',
  'Asesoramiento personalizado',
];

const TallerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    const load = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const numericId = Number(id);
        if (Number.isNaN(numericId)) throw new Error('ID inválido');
        const p = await productService.getProduct(numericId);
        setProduct(p);
      } catch (e: any) {
        setError(e?.message || 'Error al cargar el taller');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  // Volver atrás con tecla ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate(-1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [navigate]);

  if (loading) {
    return (
      <section className="max-w-3xl mx-auto py-16 px-4">
        <div className="animate-pulse text-center text-eredita-text-main">Cargando taller...</div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="max-w-3xl mx-auto py-16 px-4 text-center">
        <p className="mb-6">{error || 'Taller no encontrado.'}</p>
        <button onClick={() => navigate(-1)} className="text-eredita-green hover:underline">← Volver</button>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <button onClick={() => navigate(-1)} className="mb-6 text-eredita-text-green hover:underline">← Volver</button>

      {/* Título + CTA derecha */}
      <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
        <h1 className="text-3xl md:text-4xl font-brand text-eredita-title-pink">{product.name}</h1>
        <button
          onClick={() => addToCart(product, 1)}
          className="inline-flex items-center gap-2 bg-eredita-text-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-eredita-text-green/90 transition-colors shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15" />
          </svg>
          Agregar al Carrito
        </button>
      </div>
      {(product.categories && product.categories.length > 0) || product.category ? (
        <div className="flex flex-wrap gap-2 mb-6">
          {Array.isArray(product.categories) && product.categories.length > 0 ? (
            product.categories.map(cat => (
              <span key={cat} className="inline-block px-3 py-1 text-xs rounded-full bg-eredita-text-green/10 text-eredita-text-green">
                {cat}
              </span>
            ))
          ) : (
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-eredita-text-green/10 text-eredita-text-green">
              {product.category}
            </span>
          )}
        </div>
      ) : null}

      {/* Carrusel arriba */}
      <div className="w-full mb-24">
        {product.images && product.images.length > 1 ? (
          <CarruselConThumbsAbajo 
            images={product.images}
            className="w-full h-[340px] md:h-[500px]"
            imageFit="contain"
            showThumbs={true}
          />
        ) : (
          <div className="relative w-full h-[340px] md:h-[500px] overflow-hidden rounded-xl">
            <img
              src={product.images ? product.images[0] : ''}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        )}
      </div>

      {/* Contenido debajo */}
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Descripción corta */}
        {product.description && (
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: '#f8bbd9',
                textShadow:
                  '0 0 12px rgba(248, 187, 217, 0.7), 0 0 24px rgba(248, 187, 217, 0.45)'
              }}
            >
              Descripción
            </h2>
            <p className="text-eredita-text-main leading-relaxed">{product.description}</p>
          </section>
        )}

        {/* Información de los talleres */}
        {product.workshop_info && (
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: '#f8bbd9',
                textShadow:
                  '0 0 12px rgba(248, 187, 217, 0.7), 0 0 24px rgba(248, 187, 217, 0.45)'
              }}
            >
              Información del taller
            </h2>
            <p className="text-eredita-text-main leading-relaxed whitespace-pre-line">{product.workshop_info}</p>
          </section>
        )}

        {/* Proyectos a realizar */}
        {(product.detailed_description) && (
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: '#f8bbd9',
                textShadow:
                  '0 0 12px rgba(248, 187, 217, 0.7), 0 0 24px rgba(248, 187, 217, 0.45)'
              }}
            >
              Proyectos a realizar
            </h2>
            <p className="text-eredita-text-main leading-relaxed whitespace-pre-line">{product.detailed_description}</p>
          </section>
        )}

        {/* Metodología de trabajo (usamos workshop_includes como bullets) */}
        <section>
          <h2
            className="text-2xl font-semibold mb-4"
            style={{
              color: '#f8bbd9',
              textShadow:
                '0 0 12px rgba(248, 187, 217, 0.7), 0 0 24px rgba(248, 187, 217, 0.45)'
            }}
          >
            Metodología de trabajo
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-eredita-text-main">
            {(product.workshop_includes && product.workshop_includes.length > 0
              ? product.workshop_includes
              : DEFAULT_METHODOLOGY
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Materiales necesarios */}
        <section>
          <h2
            className="text-2xl font-semibold mb-4"
            style={{
              color: '#f8bbd9',
              textShadow:
                '0 0 12px rgba(248, 187, 217, 0.7), 0 0 24px rgba(248, 187, 217, 0.45)'
            }}
          >
            Materiales necesarios
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-eredita-text-main">
            {product.materials && product.materials.length > 0 ? (
              product.materials.map((item, idx) => <li key={idx}>{item}</li>)
            ) : (
              <li>No disponible.</li>
            )}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default TallerDetail;
