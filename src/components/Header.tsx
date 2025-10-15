import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartModal from './Cart/CartModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();

  // Handle scroll to shrink header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (sectionId: string) => {
    // Si no estamos en la página principal, navegar primero
    if (location.pathname !== '/') {
      navigate('/');
      // Esperar un poco más para que la página cargue completamente antes de hacer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      // Si ya estamos en la página principal, hacer scroll directo
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Solid header when not on home, or when scrolled on home
  const solidHeader = location.pathname !== '/' || isScrolled;

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${solidHeader ? 'bg-pink-pastel text-gray-700 shadow-md' : 'bg-transparent text-white shadow-none'}`}>
      <div className={`max-w-8xl mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
        solidHeader ? 'px-12 py-3' : 'px-20 py-4'
      }`}>
        {/* Left side - Logo (click to go Home and scroll to top) */}
        <div className="flex items-center">
          <button
            onClick={() => {
              if (location.pathname !== '/') navigate('/');
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
              setIsMenuOpen(false);
            }}
            className="relative z-50"
          >
            <img
              src="/Logo.webp"
              alt="Logo Eredita"
              className={`rounded-full transition-all duration-500 hover:scale-110 object-cover cursor-pointer ${
                solidHeader ? 'h-12 w-12' : 'h-20 w-20'
              }`}
            />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden transition-colors"
          style={!solidHeader ? {
            color: '#f6c0d2'
          } : { color: '#eab8cf' }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Right side - Nav links + Cart */}
        <div className={`hidden md:flex items-center transition-all duration-500 ease-out ${
          solidHeader ? 'space-x-4' : 'space-x-6'
        }`}>
          {/* Nav Links */}
          <button
            onClick={() => {
              if (location.pathname !== '/') navigate('/');
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
            }}
            className={`px-4 py-2 font-semibold text-lg tracking-wide md:tracking-wider transition-colors`}
            style={!solidHeader ? {
              color: '#f6c0d2',
              textShadow: '0 0 12px rgba(246, 192, 210, 0.65), 0 0 24px rgba(246, 192, 210, 0.4)'
            } : { color: '#000000' }}
          >
            Inicio
          </button>
          <button
            onClick={() => handleSmoothScroll('novedades')}
            className={`px-4 py-2 font-semibold text-lg tracking-wide md:tracking-wider transition-colors`}
            style={!solidHeader ? {
              color: '#f6c0d2',
              textShadow: '0 0 12px rgba(246, 192, 210, 0.65), 0 0 24px rgba(246, 192, 210, 0.4)'
            } : { color: '#000000' }}
          >
            Novedades
          </button>
          <button
            onClick={() => handleSmoothScroll('tienda')}
            className={`px-4 py-2 font-semibold text-lg tracking-wide md:tracking-wider transition-colors`}
            style={!solidHeader ? {
              color: '#f6c0d2',
              textShadow: '0 0 12px rgba(246, 192, 210, 0.65), 0 0 24px rgba(246, 192, 210, 0.4)'
            } : { color: '#000000' }}
          >
            Tienda
          </button>
          <button
            onClick={() => handleSmoothScroll('conoceme')}
            className={`px-4 py-2 font-semibold text-lg tracking-wide md:tracking-wider transition-colors`}
            style={!solidHeader ? {
              color: '#f6c0d2',
              textShadow: '0 0 12px rgba(246, 192, 210, 0.65), 0 0 24px rgba(246, 192, 210, 0.4)'
            } : { color: '#000000' }}
          >
            Conóceme
          </button>

          <button
            onClick={() => setShowCartModal(true)}
            className={`relative p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              solidHeader
                ? 'text-eredita-text-main hover:text-eredita-title-pink'
                : 'text-eredita-title-pink bg-white/10 backdrop-blur-sm hover:bg-white/20 animate-pulse-glow'
            }`}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-eredita-title-pink text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-pink-pastel border-t border-eredita-text-green/20">
          <div className="px-6 py-4 space-y-2">
            <button
              onClick={() => {
                navigate('/');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-3 text-lg text-eredita-text-main hover:text-eredita-title-pink transition-colors font-semibold"
            >
              Inicio
            </button>
            <button
              onClick={() => {
                handleSmoothScroll('novedades');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-3 text-lg text-eredita-text-main hover:text-eredita-title-pink transition-colors font-semibold"
            >
              Novedades
            </button>
            <button
              onClick={() => {
                handleSmoothScroll('tienda');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-3 text-lg text-eredita-text-main hover:text-eredita-title-pink transition-colors font-semibold"
            >
              Tienda
            </button>
            <button
              onClick={() => {
                handleSmoothScroll('conoceme');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-3 text-lg text-eredita-text-main hover:text-eredita-title-pink transition-colors font-semibold"
            >
              Conóceme
            </button>
            <div className="pt-4 space-y-2 border-t border-eredita-text-green/20">
              <button
                onClick={() => {
                  setShowCartModal(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-3 text-lg text-eredita-text-green hover:text-eredita-title-pink transition-colors font-semibold"
              >
                Ver Carrito
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <CartModal
        isOpen={showCartModal}
        onClose={() => setShowCartModal(false)}
      />
    </header>
  );
};

export default Header;
