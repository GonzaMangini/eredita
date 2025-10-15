import React from 'react';

const Terminos: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-brand text-eredita-title-pink mb-4">Términos y Condiciones</h1>
      <div className="bg-white rounded-xl border border-eredita-text-green/20 p-6 text-eredita-text-main leading-relaxed">
        <p className="mb-4">Estamos redactando los términos y condiciones para ofrecerte claridad sobre el uso de nuestros servicios y talleres.</p>
        <p className="mb-4">Próximamente vas a poder consultar aquí toda la información relacionada a compras, reembolsos, propiedad intelectual y más.</p>
        <p>Si tenés dudas ahora, escribinos por WhatsApp o Email desde el footer.</p>
      </div>
    </section>
  );
};

export default Terminos;
