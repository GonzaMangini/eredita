import React, { useEffect } from 'react';
import CarruselRedondo from '../components/CarruselRedondo';

const Conoceme = () => {
  return (
    <div className="bg-eredita-neutral min-h-screen pt-20">
      <section id="conoceme" className="max-w-6xl mx-auto py-24 md:py-28 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-brand text-eredita-title-pink mb-4">Conoceme</h2>
        </div>
        <div className="flex justify-center">
          <CarruselRedondo />
        </div>
        <div className="text-center mt-14 md:mt-16 max-w-4xl mx-auto">
          <ParagraphsWithReveal />
        </div>
      </section>
    </div>
  );
};

export default Conoceme;

const paragraphs: string[] = [
  'Porque el público se renueva y muchas aún no me conocen, quiero presentarme desde mi humilde rincón, donde la magia ocurre ✨',
  'Mi nombre es Rosa y me apasiona el tejido a crochet 🧶',
  'Todo comenzó cuando era una niña muy inquieta, tendría entre 7 y 9 años. Fue mi madre quien me enseñó este hermoso arte con paciencia y dedicación. Ella era una verdadera creadora: tejía sus propios abrigos, confeccionaba su ropa reciclando telas de otras prendas, y realizaba bordados hermosos que aún guardo en mi memoria. Eran otros tiempos, ¿verdad? Una diseñadora y creadora con todas las letras 🩷',
  'Hoy agradezco profundamente cada una de esas horas de aprendizaje y amor que me dedicó para enseñarme este oficio. Estoy segura de que si mi madre pudiera ver todo lo que sembró en mí, estaría feliz de saber que continúo con este legado maravilloso.',
  'EreditaOK nació de ese amor heredado. Detrás de cada proyecto hay mucho más que hilos y puntadas: hay historia, dedicación y el deseo genuino de transmitirles ese cariño en cada creación 💕',
  'No puedo explicarles la satisfacción que me da poder compartir mi mundo con ustedes y que sean parte de este camino. Cada persona que elige mis tejidos, cada mensaje de apoyo, cada compartir... todo eso le da sentido a lo que hago.',
  'Si llegaste hasta acá, solo puedo decirte:',
  'GRACIAS INFINITAS por acompañarme 🙏🏻',
  'GRACIAS por todo el amor 🩷',
  'GRACIAS por estar 🙌🏻',
  'GRACIAS por elegirme 🤗',
  'Simplemente gracias por ser parte de esta historia ✨',
  'Con cariño,',
  'Rosi 💕'
];

const ParagraphsWithReveal: React.FC = () => {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.reveal-paragraph')) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-eredita-text-main text-lg md:text-xl leading-loose md:leading-relaxed space-y-6 md:space-y-8 px-2">
      {paragraphs.map((text, idx) => (
        <p
          key={idx}
          className={
            'reveal-paragraph opacity-0 translate-y-4 transition-all duration-700 ease-out will-change-transform will-change-opacity ' +
            (idx === 0
              ? 'font-medium text-eredita-title-pink'
              : idx === 1
              ? 'font-semibold'
              : '')
          }
          style={{ transitionDelay: `${Math.min(idx * 120, 600)}ms` }}
        >
          {text}
        </p>
      ))}
    </div>
  );
};
