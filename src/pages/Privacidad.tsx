import React from 'react';

const Privacidad: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-brand text-eredita-title-pink mb-4">Política de Privacidad</h1>
      <div className="bg-white rounded-xl border border-eredita-text-green/20 p-6 text-eredita-text-main leading-relaxed">
        <p className="mb-4">Estamos preparando esta sección con toda la información sobre cómo protegemos tus datos personales.</p>
        <p className="mb-4">Próximamente encontrarás aquí detalles sobre: qué datos recolectamos, con qué finalidad, cómo los almacenamos y cuáles son tus derechos.</p>
        <p>Gracias por tu paciencia. Si necesitás información ahora, escribinos por WhatsApp o Email desde el footer.</p>
      </div>
    </section>
  );
};

export default Privacidad;
