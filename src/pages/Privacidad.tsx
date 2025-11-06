import React from 'react';

const Privacidad: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-brand text-eredita-title-pink mb-4">Políticas de Privacidad</h1>
      <div className="bg-white rounded-xl border border-eredita-text-green/20 p-6 text-eredita-text-main leading-relaxed space-y-4">
        <p className="italic">Última actualización: Octubre 2025</p>

        <h2 className="font-bold text-lg mt-6">1. Introducción</h2>
        <p>En Eredita Ok ("nosotros", "nuestro" o "la empresa"), respetamos su privacidad y nos comprometemos a proteger la información personal que pueda recopilarse a través de nuestro sitio web.</p>

        <h2 className="font-bold text-lg mt-6">2. Información que Recopilamos</h2>
        <h3 className="font-semibold mt-4">2.1 Información de Navegación</h3>
        <p>Nuestro sitio web NO requiere registro de usuarios ni recopila información personal identificable como nombres, correos electrónicos o contraseñas. Sin embargo, podemos recopilar automáticamente información técnica básica cuando visita nuestro sitio, incluyendo:</p>
        <ul className="list-disc ml-6">
          <li>Dirección IP</li>
          <li>Tipo de navegador y versión</li>
          <li>Sistema operativo</li>
          <li>Páginas visitadas y tiempo de permanencia</li>
          <li>Fecha y hora de acceso</li>
          <li>Sitio web de referencia</li>
        </ul>
        <p>Esta información se recopila de forma anónima mediante cookies y tecnologías similares, y se utiliza únicamente para fines estadísticos y de mejora del servicio.</p>
        <h3 className="font-semibold mt-4">2.2 Información de Contacto</h3>
        <p>Si usted decide contactarnos voluntariamente a través de formularios de contacto, correo electrónico o cualquier otro medio proporcionado en el sitio, recopilaremos únicamente la información que usted nos proporcione (como su nombre, correo electrónico y mensaje).</p>

        <h2 className="font-bold text-lg mt-6">3. Uso de la Información</h2>
        <p>La información recopilada se utiliza para:</p>
        <ul className="list-disc ml-6">
          <li>Mejorar la experiencia de navegación en nuestro sitio web</li>
          <li>Analizar tendencias y estadísticas de uso</li>
          <li>Responder a consultas y solicitudes de información sobre nuestros talleres</li>
          <li>Comunicar novedades sobre nuestros servicios (solo si usted ha proporcionado su contacto voluntariamente)</li>
        </ul>

        <h2 className="font-bold text-lg mt-6">4. Cookies</h2>
        <p>Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Usted puede configurar su navegador para rechazar cookies o para que le notifique cuando se envíen cookies. Sin embargo, algunas funciones del sitio pueden no funcionar correctamente sin cookies.</p>

        <h2 className="font-bold text-lg mt-6">5. Compartición de Información</h2>
        <p>Eredita Ok NO vende, alquila ni comparte su información personal con terceros, excepto en los siguientes casos:</p>
        <ul className="list-disc ml-6">
          <li>Cuando sea requerido por ley o por orden judicial</li>
          <li>Para proteger nuestros derechos legales o la seguridad de nuestros usuarios</li>
          <li>Con proveedores de servicios que nos ayudan a operar el sitio web (estos proveedores están obligados a mantener la confidencialidad de la información)</li>
        </ul>

        <h2 className="font-bold text-lg mt-6">6. Seguridad de la Información</h2>
        <p>Aunque nuestro sitio web no almacena bases de datos con información sensible de usuarios, implementamos medidas de seguridad razonables para proteger la información que recopilamos contra acceso no autorizado, alteración o destrucción.</p>

        <h2 className="font-bold text-lg mt-6">7. Enlaces a Sitios de Terceros</h2>
        <p>Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Le recomendamos revisar las políticas de privacidad de cualquier sitio de terceros que visite.</p>

        <h2 className="font-bold text-lg mt-6">8. Derechos del Usuario</h2>
        <p>De acuerdo con las leyes de protección de datos aplicables, usted tiene derecho a:</p>
        <ul className="list-disc ml-6">
          <li>Acceder a la información que tenemos sobre usted</li>
          <li>Solicitar la corrección de información inexacta</li>
          <li>Solicitar la eliminación de su información personal</li>
          <li>Oponerse al procesamiento de sus datos</li>
          <li>Retirar su consentimiento en cualquier momento</li>
        </ul>
        <p>Para ejercer estos derechos, puede contactarnos a través de los medios proporcionados en nuestro sitio web.</p>

        <h2 className="font-bold text-lg mt-6">9. Menores de Edad</h2>
        <p>Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si un padre o tutor descubre que su hijo nos ha proporcionado información personal, debe contactarnos para que podamos eliminarla.</p>

        <h2 className="font-bold text-lg mt-6">10. Cambios a esta Política</h2>
        <p>Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio web. Le recomendamos revisar periódicamente esta página para estar informado sobre cómo protegemos su información.</p>

        <h2 className="font-bold text-lg mt-6">11. Contacto</h2>
        <p>Si tiene preguntas o inquietudes sobre esta Política de Privacidad, puede contactarnos a través de: los medios de contacto disponibles en nuestro sitio web.</p>

        <p className="mt-4">Al utilizar nuestro sitio web, usted acepta los términos descritos en esta Política de Privacidad.</p>
      </div>
    </section>
  );
};

export default Privacidad;
