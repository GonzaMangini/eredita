// Mock products data
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Taller Bolso Summer",
    description: "En este taller vamos a crear 3 proyectos distintos de bolsos al crochet, ideales para acompañarte en el verano.Vas a aprender diferentes técnicas de tejido, armado y terminaciones, para que cada bolso tenga tu estilo único.",
    detailed_description: `Proyectos a realizar:
    - Bolso combinado calado y grannys
    - Bolso tres colores
    - Bolso súper grannys XL`,
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Hilo de algodón 8/8 o 8/6 (varios colores: mostaza, tierra, crudo)",
      "Aguja N° 4 o 4,5",
    ],
    workshop_includes: [
      "Clases online en Instagram",
      "Grabaciones guardadas",
      "Envío de patrones por correo",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "Accesorios", "Grannys"],
    images: [
      "/BolsoSum/BolsoSum1.webp",
      "/BolsoSum/BolsoSum2.webp",
      "/BolsoSum/BolsoSum3.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    name: "Taller Chaleco Grannys",
    description: `En este taller completo vas a aprender desde los fundamentos del clásico cuadrado granny hasta las técnicas de construcción necesarias para transformar esos módulos en una prenda única 🧶💕.
Vamos a trabajar con distintas combinaciones de colores para lograr efectos visuales especiales, y te voy a mostrar cómo adaptar el patrón a tu propia talla 🙌.
El resultado será un chaleco versátil y moderno, ideal para usar tanto en un look casual como en uno más elegante ✨.`,
    detailed_description: `Proyectos a realizar:
    - Chaleco tejido con cuadrados granny`,
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Hilo de algodón 8/6 o 8/8",
      "Aguja N° 4 o 5",
      "Colores sugeridos: celeste 50gr, verde seco 80gr, visón/tierra 80gr, crudo 500gr",
    ],
    workshop_includes: [
      "Clases online",
      "Diagramas de patrones",
      "Acompañamiento paso a paso",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "Grannys", "Prendas"],
    images: [
      "/ChalecoGrannys/ChalecoGrannys1.webp",
      "/ChalecoGrannys/ChalecoGrannys2.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    name: "Taller Deco Hogar",
    description: "Te vas a sorprender de la cantidad de proyectos y accesorios, que vas a poder realizar para tu casa con tan solo este TALLER",
    detailed_description: `Proyectos a realizar:
    - Camino de mesa grannys flor
    - Carpeta/individual libélula
    - Camino de mesa combinado en 2 colores`,
    materials: [
      "Hilo de algodón 8/6 o 8/8",
      "Aguja N° 4 a 5",
    ],
    workshop_includes: [
      "Clases online en Instagram",
      "Grabaciones guardadas",
      "Diagramas compartidos",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "DecoHogar"],
    images: [
      "/DecoHogar/DecoHogar1.webp", 
      "/DecoHogar/DecoHogar2.webp"
    ],
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    name: "Taller Manta Nordica",
    description: "Curso que parte del tejido de grannys para crear distintos accesorios textiles con tips de unión y terminación.",
    detailed_description: `Proyectos a realizar:
    - Mantas en varias medidas
    - Almohadones
    - Pie de cama
    - Otros accesorios a partir de grannys`,
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Hilo de algodón 8/6 o 8/8",
      "Aguja N° 4 o 4,5",
    ],
    workshop_includes: [
      "Clases online con grabaciones disponibles",
      "Patrones enviados por correo",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "DecoHogar", "Grannys"],
    images: [
      "/MantaNordica/MantaNordica.webp",
      "/MantaNordica/Manta nordica 1.webp",
      "/MantaNordica/Manta nordica 2.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 5,
    name: "Vestido Arcoíris",
    description: "Aprende a tejer un vestido con los colores del arcoíris, para ser la sensación del verano.",
    detailed_description: "Este taller está diseñado especialmente para el verano, donde aprenderás a crear un bolso funcional y estiloso usando técnicas de crochet modernas. El diseño incluye un forro interior resistente al agua y asas cómodas para uso prolongado. Perfecto para principiantes que quieren crear algo útil y hermoso.",
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Hilo de algodón 8/6 o 8/8",
      "Aguja N° 4 o 4,5",
    ],
    workshop_includes: [
      "Clases en vivo con patrones",
      "Material guardado en Instagram",
      "Soporte por Whatsapp",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "Prendas"],
    images: [
      "/VestidoArc/Arcoiris1.webp",
      "/VestidoArc/Arcoiris2.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 6,
    name: "Grannys para Sacon",
    description: "Les aseguro que van aprender a tejer este Sacón con grannys y todas sus variantes chaqueta Sacón y Tapado Largo!",
    detailed_description: `Proyectos a realizar:
    - Sacón tejido con grannys de 8 pétalos
    - Chaqueta corta
    - Tapado largo`,
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Lana Merino Sedificada 8/6",
      "180 gr. 1°color",
      "180 gr. 2° color",
      "960 gr. 3° color",
      "Aguja N° 4 o 5",
    ],
    workshop_includes: [
      "Taller de 20 días con vivos semanales",
      "Posteos con videos y fotos paso a paso",
      "Material enviado por correo",
    ],
    price: 38000,
    category: "Talleres",
    images: [
      "/GrannysSacon/Imagen1.webp",
      "/GrannysSacon/Imagen2.webp",
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 7,
    name: "Taller Grannys XXL",
    description: "Les aseguro que van aprender a tejer estos grannys y todas sus variantes. También vas a leer un patrón y lo más importante los secretos, para que las terminaciones queden excelentes.",
    detailed_description: `Proyectos a realizar:
    - Grannys de gran tamaño en distintas variantes`,
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Hilo de algodón 8/6 o 8/8",
      "Aguja N° 4 o 4,5",
    ],
    workshop_includes: [
      "Clases en vivo con patrones",
      "Material guardado en Instagram",
      "Soporte por Whatsapp",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "Grannys", "Prendas"],
    images: [
      "/Grannys XXL/grannys XXL 1.webp",
      "/Grannys XXL/Grannys XXL 2.webp",
      "/Grannys XXL/Grannys XXL 3.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 8,
    name: "Taller Sacon Penelope",
    description: "Estoy segura que te vas a sorprender de lo básico, rápido y sencillo que podes realizar una prenda tan elegante y abrigada !",
    detailed_description: `Proyectos a realizar:
    - Sacón tejido en una sola pieza`,
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Hilo de algodón mercerizado en 2 colores",
      "Aguja de crochet N° 4mm",
    ],
    workshop_includes: [
      "Patrón completo del bolso",
      "Técnicas de tejido en redondo",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "Prendas"],
    images: [
      "/SaconPenelope/SaconPenelope1.webp",
      "/SaconPenelope/SaconPenelope2.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 9,
    name: "Taller Puntillas Deco Hogar",
    description: "Fusión de crochet recto, grannys y calados con puntillas decorativas para el hogar.",
    detailed_description: `Proyectos a realizar:
    - Camino de mesa recto con puntillas
    - Carpeta calada con rombos + puntilla
    - Camino de mesa con grannys y puntilla rulet`,
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Hilo de algodón mercerizado en 2 colores",
      "Aguja de crochet N° 4mm",
    ],
    workshop_includes: [
      "Patrón completo del bolso",
      "Técnicas de tejido en redondo",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "DecoHogar", "Accesorios"],
    images: [
      "/PuntillasDecoHogar/PuntillasDecoHogar1.webp",
      "/PuntillasDecoHogar/PuntillasDecoHogar2.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 10,
    name: "Taller Vestido Flowers",
    description: "Proyecto central en vestido crochet adaptable a distintas prendas femeninas, con detalles románticos y terminaciones.",
    detailed_description: `Proyectos a realizar:
    - Vestido Flowers
    - Polleras
    - Kimono
    - Remera
    - Túnica`,
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Hilo de algodón mercerizado en 2 colores",
      "Aguja de crochet N° 4mm",
    ],
    workshop_includes: [
      "Patrón completo del bolso",
      "Técnicas de tejido en redondo",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "Prendas"],
    images: [
      "/VestidoFlowers/VestidoFlowers1.webp",
      "/VestidoFlowers/VestidoFlowers2.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 11,
    name: "Taller Puntillas Deco III",
    description: "Diseños rápidos y decorativos para aplicar en cortinas, prendas, canastos, sábanas o toallas.",
    detailed_description: `Proyectos a realizar:
    - Puntilla Flor
    - Puntilla Abanico`,
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Hilo de algodón mercerizado en 2 colores",
      "Aguja de crochet N° 4mm",
    ],
    workshop_includes: [
      "Patrón completo del bolso",
      "Técnicas de tejido en redondo",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "DecoHogar", "Accesorios"],
    images: [
      "/DecoIII/Deco1.webp",
      "/DecoIII/Deco2.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 12,
    name: "Taller Manga Margott",
    description: "Proyecto práctico y multifuncional que combina abrigo y diseño elegante.",
    detailed_description: `Proyectos a realizar:
    - Mangas multifunción tejido crochet`,
    workshop_info: `🌸 ¿Cómo funcionan los talleres?

Cada taller tiene una duración aproximada de 3 días, y siempre me gusta sumar un encuentro extra para charlar juntas y responder todas las dudas 🤗.

Lo mejor es que podés manejar tus propios tiempos 🕐. Si no podés estar en los vivos, no te preocupes: todo queda guardado para que lo veas cuando quieras y a tu ritmo ✨.

🌸 ¿Cómo es la modalidad de los vivos?

👉 Comenzamos con una breve presentación.
👉 Vemos el material sugerido y los gráficos.
👉 Y enseguida ¡nos ponemos a tejer juntas! 

Los vivos quedan grabados para que tengas acceso siempre, sin límite de tiempo.

🌸 ¿Y si tengo dudas?

Podés escribirme por WhatsApp privado y te voy a responder con mucho gusto 💕.

🌸 Al finalizar el taller

Recibirás un correo electrónico con un acceso a Google Drive, donde vas a encontrar todas las fotos, videos y patrones, así lo conservás para siempre 🫶.`,
    materials: [
      "Hilo de algodón mercerizado en 2 colores",
      "Aguja de crochet N° 4mm",
    ],
    workshop_includes: [
      "Patrón completo del bolso",
      "Técnicas de tejido en redondo",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "Prendas", "Accesorios"],
    images: [
      "/MangasMargott/MangaMar1.webp",
      "/MangasMargott/MangaMar2.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 13,
    name: "Taller Deco Fusión",
    description: "Tres proyectos de deco hogar: camino de mesa recto con puntillas, carpeta calada con rombos y camino de mesa con grannys.",
    detailed_description: `Les comparto el orden de los proyectos y el material que utilizaremos en cada uno de ellos😘\n\n💫 Camino de mesa Recto c/vareta vertical e inclinada + 2 Puntillas combinadas para terminaciones.\n📌 Material sugerido\n🧶 Hilo de algodón 8/8 o 8/6\n   para color Verde seco 150gr\n\n💫 Carpeta Calada con Rombos + Puntilla media\n📌 Material Sugerido\n🧶 Hilo de algodón 8/8 o 8/6\n   Color Beige o Marrón Claro\n🧶 Aguja N° 4 o 4,5\n\n💫 Camino de Mesa con Grannys (2 colores) + Puntilla Rulet\n📌 Material sugerido\n🧶 Hilo de algodón 8/8 o 8/6\n   Color Crudo 160gr\n   Color Beige o Marrón Claro 30 gr\n\nA preparar todo y nos vemos pronto ❤️`,
    materials: [
      "Hilo de algodón 8/8 o 8/6 (verde seco, crudo, beige/marrón claro)",
      "Aguja N° 4 o 4,5",
    ],
    workshop_includes: [
      "Clases online en Instagram",
      "Grabaciones guardadas",
      "Diagramas compartidos",
    ],
    price: 38000,
    category: "Talleres",
    categories: ["Talleres", "DecoHogar", "Grannys"],
    images: [
      "/DecoFusion/1Caminodemesa.webp",
      "/DecoFusion/2CarpetaCalada.webp",
      "/DecoFusion/3CaminodemesaGrannys.webp"
    ],
    is_active: true,
    created_at: new Date().toISOString()
  },
];

export interface Product {
  id: number;
  name: string;
  description: string;
  detailed_description?: string;
  materials?: string[];
  workshop_includes?: string[];
  workshop_info?: string;
  price: number;
  category: string; // legacy single category used for filters
  categories?: string[]; // optional multiple categories for UI badges
  images: string[];
  is_active: boolean;
  created_at: string;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  detailed_description?: string;
  materials?: string[];
  workshop_includes?: string[];
  workshop_info?: string;
  price: number;
  category: string;
  images: string[];
}

class ProductService {
  // Get all products (public)
  async getProducts(filters?: { category?: string; search?: string }): Promise<Product[]> {
    // Mock API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    let filteredProducts = [...mockProducts];
    
    // Apply category filter
    if (filters?.category) {
      const cat = filters.category;
      filteredProducts = filteredProducts.filter(p => 
        p.category === cat || (Array.isArray(p.categories) && p.categories.includes(cat))
      );
    }
    
    // Apply search filter
    if (filters?.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
      );
    }
    
    return filteredProducts;
  }

  // Get single product (public)
  async getProduct(id: number): Promise<Product> {
    // Mock API call delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const product = mockProducts.find(p => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  // Get categories (public)
  async getCategories(): Promise<{ categories: string[] }> {
    // Mock API call delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const set = new Set<string>();
    for (const p of mockProducts) {
      if (p.category) set.add(p.category);
      if (Array.isArray(p.categories)) {
        for (const c of p.categories) set.add(c);
      }
    }
    const categories = [...set];
    return { categories };
  }
}

export const productService = new ProductService();
