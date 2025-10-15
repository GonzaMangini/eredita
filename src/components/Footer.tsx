import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="container mx-auto px-6">
        {/* Secciones tipo columna con logo a la izquierda */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {/* Logo a la izquierda */}
          <div className="flex md:justify-start">
            <img src="/Logosinfondo.png" alt="Eredita Logo" className="h-16 md:h-40" />
          </div>
          {/* Atención al cliente */}
          <div>
            <h3 className="uppercase tracking-widest font-extrabold text-white text-sm">Atención al Cliente</h3>
            <ul className="mt-4 space-y-3 text-gray-200">
              <li>
                <a className="flex items-center gap-2 hover:text-green-400 underline-offset-4 hover:underline" href="https://wa.me/5492804604612" target="_blank" rel="noopener noreferrer">
                  <span className="text-green-400"><FaWhatsapp size={20} /></span>
                  <span>+54 9 2804 604612</span>
                </a>
              </li>
              <li>
                <Link className="hover:text-white/90" to="/privacidad">Política de Privacidad</Link>
              </li>
              <li>
                <Link className="hover:text-white/90" to="/terminos">Términos y Condiciones</Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="uppercase tracking-widest font-extrabold text-white text-sm">Información</h3>
            <ul className="mt-4 space-y-3 text-gray-200">
              <li>
                <Link className="hover:text-white/90" to="/">EreditaOk</Link>
              </li>
              <li>
                <a className="hover:text-white/90" href="/#tienda">Tienda</a>
              </li>
              <li>
                <a className="hover:text-white/90" href="/#conoceme">Conoceme</a>
              </li>
            </ul>
          </div>

          {/* Redes sociales a la derecha */}
          <div className="flex md:justify-end">
            <div className="flex md:flex-col gap-5">
              <a href="mailto:tallereredita2@gmail.com" aria-label="Email" className="hover:text-eredita-title-pink transition-colors inline-flex">
                <FaEnvelope size={24} />
              </a>
              <a href="https://www.instagram.com/ereditaok/?hl=es-la" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition-colors inline-flex">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/eredita.ok" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500 transition-colors inline-flex">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright centrado */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-300">
          &copy; 2025 Eredita. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
