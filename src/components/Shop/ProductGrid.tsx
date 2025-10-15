import React, { useState, useEffect, useMemo } from 'react';
import { Product, productService } from '../../services/products';
import { useCart } from '../../contexts/CartContext';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const ProductGrid = () => {
  const [products, setProducts] = useState([] as Product[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // Etiquetas fijas solicitadas por el usuario (orden específico)
  const TAGS = ['Todos', 'Talleres', 'Prendas', 'DecoHogar', 'Accesorios', 'Grannys'];
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  // Navegación a detalle
  const navigate = useNavigate();
  
  const { addToCart } = useCart();

  // Ya no cargamos categorías dinámicamente; usamos TAGS fijas

  // Load products when category changes (or on first mount)
  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const productsData = await productService.getProducts({ 
        category: selectedCategory === 'Todos' ? undefined : selectedCategory,
        // no enviar search: filtramos en cliente
      });
      setProducts(productsData);
    } catch (err) {
      setError('Error al cargar productos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Filter products client-side based on searchTerm
  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return products;
    return products.filter(p =>
      [p.name, p.description, (p as any).detailed_description]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase().includes(term))
    );
  }, [products, searchTerm]);

  // Products to display (limit to 3 unless showAll)
  const displayedProducts = useMemo(() => {
    return showAll ? filteredProducts : filteredProducts.slice(0, 3);
  }, [filteredProducts, showAll]);

  const handleAddToCart = async (productId: number, quantity: number = 1) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart(product, quantity);
      // No alert needed - the cart counter will update automatically
    }
  };

  const handleViewDetails = (productId: number) => {
    // Ir a la página de detalle del taller
    navigate(`/taller/${productId}`);
  };

  // Autenticación eliminada: no se requiere login para agregar al carrito

  // Nota: no retornamos temprano en 'loading' para mantener el layout estable y mostrar overlay

  if (error) {
    return (
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={loadProducts}
            className="mt-4 bg-eredita-title-pink text-white px-4 py-2 rounded-lg hover:bg-eredita-text-light transition-colors"
          >
            Reintentar
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="tienda" className="max-w-7xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-brand text-eredita-title-pink mb-4">
          Nuestra Tienda
        </h2>
        <p className="text-lg text-eredita-text-main max-w-2xl mx-auto">
          Descubre nuestros productos únicos hechos con amor y dedicación
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-eredita-text-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-eredita-title-pink focus:border-transparent"
          />
          <svg className="absolute left-3 top-2.5 h-5 w-5 text-eredita-text-green/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Filter (etiquetas fijas) */}
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedCategory(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === tag
                  ? 'bg-eredita-title-pink text-white'
                  : 'bg-eredita-text-green/10 text-eredita-text-green hover:bg-eredita-text-green/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid with layout-preserving loader */}
      <div className="relative min-h-[24rem]">
        <div className={`${loading ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-16 w-16 text-eredita-text-green/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <h3 className="text-lg font-medium text-eredita-text-main mb-2">No hay productos disponibles</h3>
              <p className="text-eredita-text-main/70">
                {searchTerm || selectedCategory 
                  ? 'Intenta cambiar los filtros de búsqueda' 
                  : 'Pronto tendremos productos disponibles'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProducts.map((product, index) => (
                <div key={product.id} className="grid-item animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Ver más / Ver menos */}
        {filteredProducts.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full font-semibold transition-colors bg-eredita-title-pink text-white hover:bg-eredita-text-light"
            >
              {showAll ? 'Ver menos' : `Ver más (${filteredProducts.length - 3})`}
            </button>
          </div>
        )}

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="relative h-1 w-40 overflow-hidden rounded-full bg-eredita-text-green/20">
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-eredita-title-pink to-transparent"></div>
              </div>
              <p className="text-eredita-text-main text-sm">Actualizando...</p>
            </div>
          </div>
        )}
      </div>

      {/* Login/Register modals eliminados para modo mostrador */}
    </section>
  );
};

export default ProductGrid;
