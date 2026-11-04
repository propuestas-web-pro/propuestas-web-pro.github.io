/* ==========================================================================
   MI WEB LOCAL — V2 CORE ENGINE, COMPILER, SHAREABLE ROUTER & /ADMIN ENGINE
   ========================================================================== */

const STORAGE_KEY = 'miweblocal_platform_v5';

// 13 Crisp, Non-Truncating Sector Presets (+ Unrestricted Custom Business)
const SECTOR_PRESETS = {
  barberia: {
    label: 'Barbería',
    icon: 'ph-scissors',
    defaultTheme: 'copper',
    defaultName: 'Barbería Martínez',
    yearsExp: '12 años en el barrio',
    tagline: 'Corte clásico, degradado al milímetro y afeitado tradicional a navaja.',
    story: 'Más de 12 años cuidando tu imagen con puntualidad, trato cercano y productos de primera línea. Reserva online en 15 segundos o consulta hueco hoy.',
    heroImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Corte Degradado / Skin Fade', meta: '35 min · Lavado y peinado incluido', price: '16 €' },
      { title: 'Combo Completo: Corte + Barba a Navaja', meta: '50 min · Toalla caliente y aceites', price: '24 €' },
      { title: 'Perfilado y Arreglo de Barba', meta: '25 min · Hidratación profunda', price: '12 €' },
      { title: 'Corte Clásico / Infantil', meta: '30 min · Acabado limpio', price: '13 €' }
    ]
  },
  estetica: {
    label: 'Estética y Uñas',
    icon: 'ph-sparkle',
    defaultTheme: 'cream',
    defaultName: 'Atelier Lumière Belleza',
    yearsExp: 'Centro especializado',
    tagline: 'Coloración orgánica, manicura rusa y tratamientos faciales de autor.',
    story: 'Un espacio diseñado para cuidar de ti con diagnóstico personalizado, firmas de alta cosmética y reserva cómoda desde el móvil.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Balayage Orgánico + Matiz + Peinado', meta: '120 min · Diagnóstico capilar incluido', price: '75 €' },
      { title: 'Manicura Rusa con Nivelación', meta: '60 min · Esmaltado larga duración', price: '28 €' },
      { title: 'Higiene Facial Hydraglow Vitaminas', meta: '55 min · Piel luminosa al instante', price: '48 €' },
      { title: 'Lifting de Pestañas + Diseño Cejas', meta: '45 min · Mirada natural', price: '40 €' }
    ]
  },
  taller: {
    label: 'Taller y Coches',
    icon: 'ph-wrench',
    defaultTheme: 'crimson',
    defaultName: 'Talleres MotorPro',
    yearsExp: '18 años en mecánica',
    tagline: 'Mecánica multimarca, diagnosis electrónica y pre-ITV con precio cerrado.',
    story: 'Te damos presupuesto exacto antes de tocar tu coche, recambios de primeras marcas y entrega en el día para que no pares tu rutina.',
    heroImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Revisión Oficial + Aceite Sintético y Filtros', meta: '60 min · Mantiene garantía oficial', price: '95 €' },
      { title: 'Diagnosis Electrónica + Revisión Pre-ITV', meta: '45 min · Informe completo 40 puntos', price: '39 €' },
      { title: 'Recarga Aire Acondicionado Climatizador', meta: '40 min · Comprobación de estanqueidad', price: '59 €' },
      { title: 'Pulido de Carrocería Espejo + Cerámico', meta: 'Acabado de exposición garantizado', price: '220 €' }
    ]
  },
  motos: {
    label: 'Motos y Stock',
    icon: 'ph-motorcycle',
    defaultTheme: 'crimson',
    defaultName: 'Orero Motor Store',
    yearsExp: 'Concesionario y Taller',
    tagline: 'Motos nuevas y de ocasión revisadas en 60 puntos con garantía.',
    story: 'Exposición física, financiación flexible, boutique técnica de cascos y taller oficial multimarca en el centro de tu ciudad.',
    heroImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Naked 700cc ABS · Revisada (1 año garantía)', meta: '6.400 km · Financiación a medida', price: '6.890 €' },
      { title: 'Scooter Urbano 125cc Nuevo a Estrenar', meta: 'Seguro y casco incluidos en promoción', price: '3.290 €' },
      { title: 'Cita Rápida de Taller y Neumáticos', meta: 'Entrega en el mismo día con cita', price: 'Desde 65 €' },
      { title: 'Compramos o Tasamos Tu Moto Actual', meta: 'Valoración en 15 minutos sin compromiso', price: 'Gratis' }
    ]
  },
  restaurante: {
    label: 'Restaurante',
    icon: 'ph-hamburger',
    defaultTheme: 'copper',
    defaultName: 'La Brasa Smash Club',
    yearsExp: 'Cocina de leña y brasa',
    tagline: 'Carnes maduradas al fuego y smash burgers artesanas hechas al momento.',
    story: 'Producto fresco diario, pan brioche de obrador y brasas de encina. Consulta nuestra carta con precios y reserva mesa sin comisiones.',
    heroImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Doble Truffle Smash Burger Dry-Aged', meta: 'Doble cheddar, mayo trufada y patatas caseras', price: '14,90 €' },
      { title: 'Costillar Ibérico a Baja Temperatura', meta: 'Glaseado a la brasa · Ración completa', price: '22,50 €' },
      { title: 'Chuletón de Vaca Madurada (por kg)', meta: '45 días de maduración + guarnición', price: '48,00 €' },
      { title: 'Tarta de Queso Cremosa Casera', meta: 'Horneada a diario en nuestra cocina', price: '6,50 €' }
    ]
  },
  cafeteria: {
    label: 'Cafetería Brunch',
    icon: 'ph-coffee',
    defaultTheme: 'cream',
    defaultName: 'La Vimacchiata Brunch',
    yearsExp: 'Café de especialidad',
    tagline: 'El arte de desayunar con calma: café 100% arábica y masa madre.',
    story: 'Tostamos café de origen, horneamos repostería artesana cada mañana y te esperamos en nuestra terraza soleada.',
    heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Menú Brunch Completo Artesano', meta: 'Café especialidad + Zumo + Tosta + Bowl', price: '15,90 €' },
      { title: 'Tosta Masa Madre Aguacate y Huevo Poché', meta: 'Semillas tostadas y AOVE virgen extra', price: '7,80 €' },
      { title: 'Iced Pistachio Latte / Flat White', meta: 'Doble espresso 100% arábica', price: '3,60 €' },
      { title: 'Pancakes Esponjosos Frutos Rojos', meta: 'Hechos al momento', price: '8,20 €' }
    ]
  },
  pizzeria: {
    label: 'Pizzería y Kebab',
    icon: 'ph-pizza',
    defaultTheme: 'crimson',
    defaultName: 'Forno Napolitano',
    yearsExp: 'Pedidos sin comisiones',
    tagline: 'Masa artesana de 72 horas y pedidos rápidos para recoger o envío.',
    story: 'Pide directamente desde nuestra web o WhatsApp sin recargos de aplicaciones externas y recógelo recién salido del horno.',
    heroImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Pizza Diavola Trufada al Horno de Piedra', meta: 'Mozzarella fresca y spianata italiana', price: '12,90 €' },
      { title: 'Menú Dürüm / Kebab XL + Patatas + Bebida', meta: 'Pan artesano recién horneado', price: '8,90 €' },
      { title: 'Pack Pareja: 2 Pizzas + Entrante Casero', meta: 'Recogida sin colas o envío a domicilio', price: '22,50 €' },
      { title: 'Calzone Relleno 4 Quesos Fundidos', meta: 'Receta tradicional', price: '11,50 €' }
    ]
  },
  reformas: {
    label: 'Reformas y Obra',
    icon: 'ph-house-line',
    defaultTheme: 'gold',
    defaultName: 'Reformas Élite Gold',
    yearsExp: '+180 obras entregadas',
    tagline: 'Reformas integrales de viviendas, cocinas y baños con plazo cerrado.',
    story: 'Coordinamos todos los gremios con contrato de fin de obra garantizado, materiales nobles y presupuesto detallado sin sorpresas.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Visita Técnica + Medición y Presupuesto', meta: 'Entrega en menos de 48h sin compromiso', price: 'Gratis' },
      { title: 'Cambio de Bañera por Plato de Ducha', meta: 'Terminado en 24-48h mampara incluida', price: '1.190 €' },
      { title: 'Reforma Completa de Cocina con Diseño 3D', meta: 'Mobiliario, encimera e instalaciones', price: 'A medida' },
      { title: 'Reforma Integral Llave en Mano', meta: 'Plazo cerrado garantizado por escrito', price: 'Consultar' }
    ]
  },
  clinica: {
    label: 'Clínica y Salud',
    icon: 'ph-heartbeat',
    defaultTheme: 'emerald',
    defaultName: 'Clínica Dental Balance',
    yearsExp: 'Especialistas colegiados',
    tagline: 'Odontología avanzada, fisioterapia y trato cercano sin esperas.',
    story: 'Equipamiento digital de última generación y atención honesta para cuidar la salud de toda tu familia con máxima comodidad.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Primera Visita + Diagnóstico Digital Completo', meta: '40 min · Valoración médica detallada', price: 'Gratis' },
      { title: 'Sesión de Fisioterapia Manual Individual', meta: '50 min · Tratamiento personalizado', price: '38 €' },
      { title: 'Limpieza Dental Avanzada Ultrasonidos', meta: '45 min · Revisión anual incluida', price: '45 €' },
      { title: 'Blanqueamiento Clínico LED', meta: 'Resultados seguros desde la 1ª cita', price: '190 €' }
    ]
  },
  tattoo: {
    label: 'Estudio Tattoo',
    icon: 'ph-pen-nib',
    defaultTheme: 'copper',
    defaultName: 'Gabi Tattoo Studio',
    yearsExp: 'Arte irrepetible en piel',
    tagline: 'Diseños exclusivos proyectados a medida con máxima higiene.',
    story: 'Cabinas privadas homologadas, especialistas en realismo, micro-realismo y fine line. Cuéntanos tu idea y recibe valoración directa.',
    heroImage: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1590246814883-57c511e7691c?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Tatuaje Minimalista / Fine Line', meta: 'Material 100% estéril y retoque incluido', price: 'Desde 60 €' },
      { title: 'Pieza Mediana de Autor (10–18 cm)', meta: 'Incluye diseño digital previo exclusivo', price: 'Desde 150 €' },
      { title: 'Sesión Completa Realismo / Manga', meta: 'Jornada reservada con artista especialista', price: 'Consultar' },
      { title: 'Asesoramiento y Boceto en Estudio', meta: '20 min · Se descuenta del tatuaje', price: 'Gratis' }
    ]
  },
  urgencias: {
    label: 'Cerrajero 24h',
    icon: 'ph-key',
    defaultTheme: 'gold',
    defaultName: 'Cerrajeros Urgencias 24h',
    yearsExp: 'Llegada en 20 minutos',
    tagline: 'Apertura de puertas sin romper y cambio de cerraduras las 24 horas.',
    story: 'Técnicos locales directos sin intermediarios. Te confirmamos el precio cerrado por teléfono o WhatsApp antes de desplazarnos.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Apertura Limpia sin Daños (Llaves puestas)', meta: 'Llegada urgente en 20 min', price: 'Desde 59 €' },
      { title: 'Cambio a Bombín Alta Seguridad Antibumping', meta: 'Incluye 5 llaves incopiables', price: '125 €' },
      { title: ' Motores y Persianas Comerciales', meta: 'Reparación en el mismo día', price: 'Presupuesto' },
      { title: 'Servicio Nocturno y Festivos 365 Días', meta: 'Precio cerrado antes de salir', price: '24 Horas' }
    ]
  },
  gimnasio: {
    label: 'Fitness / Pilates',
    icon: 'ph-barbell',
    defaultTheme: 'emerald',
    defaultName: 'Arco Pilates & Fitness',
    yearsExp: 'Grupos reducidos',
    tagline: 'Pilates Reformer y entrenamiento personal adaptado a tu ritmo.',
    story: 'Entrena sin agobios en grupos reducidos con seguimiento de entrenadores titulados y reserva tus horarios desde el móvil.',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Clase de Prueba + Valoración Postural', meta: '55 min · Conoce nuestro estudio', price: '10 €' },
      { title: 'Bono Mensual Pilates Máquina (2 días/sem)', meta: 'Máximo 6 alumnos por clase', price: '75 €/mes' },
      { title: 'Entrenamiento Funcional Fuerza y Salud', meta: 'Horarios de mañana y tarde', price: '65 €/mes' },
      { title: 'Entrenador Personal Individual 1 a 1', meta: 'Plan a medida de objetivos', price: '35 €' }
    ]
  },
  otro: {
    label: '+ Otro Negocio',
    icon: 'ph-plus-circle',
    defaultTheme: 'gold',
    defaultName: 'Mi Negocio Local',
    yearsExp: 'Atención de confianza',
    tagline: 'Servicio profesional, cercano y con respuesta inmediata en tu ciudad.',
    story: 'Atendemos a cada cliente de forma personalizada con precios transparentes y contacto directo por WhatsApp o cita previa.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Consulta / Servicio Principal Personalizado', meta: 'Atención directa sin esperas', price: 'Consultar' },
      { title: 'Servicio Completo Más Solicitado', meta: 'Calidad garantizada y precio cerrado', price: '49 €' },
      { title: 'Atención Rápida en el Día', meta: 'Reserva online o por WhatsApp', price: '29 €' }
    ]
  }
};

const DESIGN_THEMES = {
  copper: {
    label: 'Cobre & Grafito',
    sub: 'Serif Clásico + Cobre',
    swatch1: '#0D0C0B',
    swatch2: '#C88A4B',
    bg: '#0C0B0A',
    surface: '#161412',
    card: '#1D1A17',
    text: '#F7F3EE',
    muted: '#A89F95',
    border: 'rgba(200, 138, 75, 0.22)',
    accent: '#C88A4B',
    accentHi: '#DF9F5E',
    accentInk: '#0D0B09',
    headingFont: "'Instrument Serif', Georgia, serif",
    headingWeight: '400',
    isLight: false
  },
  crimson: {
    label: 'Rojo Motorsport',
    sub: 'Carbono + Rojo Vivo',
    swatch1: '#090A0F',
    swatch2: '#E11D48',
    bg: '#08090E',
    surface: '#11131C',
    card: '#171A26',
    text: '#F8FAFC',
    muted: '#94A3B8',
    border: 'rgba(225, 29, 72, 0.24)',
    accent: '#E11D48',
    accentHi: '#F43F5E',
    accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif",
    headingWeight: '800',
    isLight: false
  },
  cream: {
    label: 'Crema Editorial',
    sub: 'Luminoso + Terracota',
    swatch1: '#FAF6F0',
    swatch2: '#9A3412',
    bg: '#FAF6F0',
    surface: '#F2ECE1',
    card: '#FFFFFF',
    text: '#1C1613',
    muted: '#6B5E55',
    border: 'rgba(28, 22, 19, 0.12)',
    accent: '#9A3412',
    accentHi: '#B45309',
    accentInk: '#FFFFFF',
    headingFont: "'Instrument Serif', Georgia, serif",
    headingWeight: '400',
    isLight: true
  },
  gold: {
    label: 'Oro Imperial',
    sub: 'Azul Noche + Dorado',
    swatch1: '#070C18',
    swatch2: '#F59E0B',
    bg: '#070C18',
    surface: '#0F172A',
    card: '#162038',
    text: '#F8FAFC',
    muted: '#94A3B8',
    border: 'rgba(245, 158, 11, 0.24)',
    accent: '#F59E0B',
    accentHi: '#FBBF24',
    accentInk: '#090D16',
    headingFont: "'Outfit', sans-serif",
    headingWeight: '800',
    isLight: false
  },
  emerald: {
    label: 'Clínica Esmeralda',
    sub: 'Blanco Puro + Salud',
    swatch1: '#F8FAFC',
    swatch2: '#059669',
    bg: '#F8FAFC',
    surface: '#EEF2F6',
    card: '#FFFFFF',
    text: '#0F172A',
    muted: '#475669',
    border: 'rgba(15, 23, 42, 0.10)',
    accent: '#059669',
    accentHi: '#10B981',
    accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif",
    headingWeight: '800',
    isLight: true
  }
};

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function slugifyName(name) {
  const s = String(name || 'minegocio')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return s || 'minegocio';
}

// Encode compact shareable payload so /sitio/?d=... works on ANY phone
function encodeSharePayload(st) {
  try {
    const slim = {
      n: st.name,
      s: st.sector,
      cs: st.customSectorLabel,
      y: st.yearsExp,
      tg: st.tagline,
      st: st.story,
      bp: st.bookingPolicy,
      c: st.city,
      a: st.address,
      w: st.whatsapp,
      p: st.phone,
      ig: st.instagram,
      hw: st.hoursWeek,
      hs: st.hoursSat,
      hd: st.hoursSun,
      th: st.theme,
      sv: (st.services || []).slice(0, 12),
      md: st.modules,
      un: !!st.unlocked,
      pin: st.adminPin || 'PRO-2026'
    };
    const json = JSON.stringify(slim);
    return btoa(unescape(encodeURIComponent(json)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  } catch (e) {
    return '';
  }
}

function decodeSharePayload(b64) {
  try {
    let norm = String(b64).replace(/-/g, '+').replace(/_/g, '/');
    while (norm.length % 4) norm += '=';
    const json = decodeURIComponent(escape(atob(norm)));
    const slim = JSON.parse(json);
    if (!slim || !slim.n) return null;
    const def = SECTOR_PRESETS[slim.s] || SECTOR_PRESETS.barberia;
    return {
      name: slim.n,
      userEditedName: true,
      sector: slim.s || 'barberia',
      customSectorLabel: slim.cs || 'Negocio Local',
      yearsExp: slim.y || def.yearsExp,
      tagline: slim.tg || def.tagline,
      story: slim.st || def.story,
      bookingPolicy: slim.bp || 'ambos',
      city: slim.c || 'Madrid',
      address: slim.a || 'Calle Principal 12',
      whatsapp: slim.w || '612 890 345',
      phone: slim.p || '',
      instagram: slim.ig || '',
      hoursWeek: slim.hw || '09:30 – 20:00',
      hoursSat: slim.hs || '09:30 – 14:30',
      hoursSun: slim.hd || 'Cerrado',
      theme: slim.th || def.defaultTheme,
      customHeroPhoto: '',
      customGallery: [],
      services: Array.isArray(slim.sv) && slim.sv.length ? slim.sv : JSON.parse(JSON.stringify(def.services)),
      modules: Object.assign({
        booking: true, whatsappFloat: true, services: true, about: true,
        scheduleMap: true, gallery: true, reviews: true, faq: true
      }, slim.md || {}),
      unlocked: !!slim.un,
      adminPin: slim.pin || 'PRO-2026',
      expiresAt: Date.now() + 24 * 3600 * 1000
    };
  } catch (e) {
    return null;
  }
}

function loadStudioState() {
  const def = SECTOR_PRESETS.barberia;
  const fallback = {
    name: def.defaultName,
    userEditedName: false,
    sector: 'barberia',
    customSectorLabel: 'Comercio / Servicio Profesional',
    yearsExp: def.yearsExp,
    tagline: def.tagline,
    story: def.story,
    bookingPolicy: 'ambos',
    city: 'Madrid Centro',
    address: 'Calle Mayor 24, Local Bajo',
    whatsapp: '612 890 345',
    phone: '910 234 567',
    instagram: '@barberiamartinez',
    hoursWeek: '09:30 – 20:30',
    hoursSat: '09:30 – 15:00',
    hoursSun: 'Cerrado',
    theme: 'copper',
    customHeroPhoto: '',
    customGallery: [],
    services: JSON.parse(JSON.stringify(def.services)),
    modules: {
      booking: true,
      whatsappFloat: true,
      services: true,
      about: true,
      scheduleMap: true,
      gallery: true,
      reviews: true,
      faq: true
    },
    unlocked: false,
    adminPin: 'PRO-4829',
    buyerEmail: '',
    previewDevice: 'mobile',
    activeStep: 1,
    expiresAt: Date.now() + (24 * 3600 * 1000) - 9000
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.name && Array.isArray(parsed.services)) {
        return Object.assign({}, fallback, parsed, {
          modules: Object.assign({}, fallback.modules, parsed.modules || {})
        });
      }
    }
  } catch (e) {}
  return fallback;
}

let studioState = loadStudioState();
let compileTimer = null;

function saveStudioState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studioState));
  } catch (e) {}
}

function detectSectorFromName(inputStr) {
  const s = String(inputStr || '').toLowerCase();
  if (/barber|peluquería caballero|fade/.test(s)) return 'barberia';
  if (/uñas|estetica|estética|belleza|salon|salón|peluquer/.test(s)) return 'estetica';
  if (/moto|scooter|yamaha|kawasaki|honda/.test(s)) return 'motos';
  if (/taller|mecan|mecán|neumatic|detail|carrocer|auto/.test(s)) return 'taller';
  if (/cafe|café|brunch|panader|pasteler/.test(s)) return 'cafeteria';
  if (/pizz|kebab|durum|burger|smash/.test(s)) return s.includes('burger') || s.includes('brasa') ? 'restaurante' : 'pizzeria';
  if (/restauran|asador|brasa|bar |meson|mesón|arrocer|tapas/.test(s)) return 'restaurante';
  if (/reform|obra|construc|pintor|fontaner|instalac/.test(s)) return 'reformas';
  if (/clinic|clínic|dental|dentist|fisio|salud|medic|médic|podol/.test(s)) return 'clinica';
  if (/tattoo|tatuaj|piercing|ink/.test(s)) return 'tattoo';
  if (/cerraj|urgencia|24h|electricist/.test(s)) return 'urgencias';
  if (/gym|gimnasio|pilates|crossfit|box|entrenad/.test(s)) return 'gimnasio';
  return null;
}

// ==========================================================================
// BESPOKE SINGLE-FILE HTML WEBSITE COMPILER
// ==========================================================================
function compileClientWebsiteHTML(st) {
  const preset = SECTOR_PRESETS[st.sector] || SECTOR_PRESETS.barberia;
  const thm = DESIGN_THEMES[st.theme] || DESIGN_THEMES.copper;
  const sectorBadge = st.sector === 'otro'
    ? (st.customSectorLabel || 'Negocio Verificado')
    : preset.label;

  const heroImg = st.customHeroPhoto || preset.heroImage;
  const galleryPhotos = (st.customGallery && st.customGallery.length > 0)
    ? st.customGallery
    : preset.gallery;

  const cleanWa = String(st.whatsapp || '600000000').replace(/[^0-9]/g, '');
  const fullWa = cleanWa.startsWith('34') ? cleanWa : ('34' + cleanWa);

  let policyText = 'Atendemos con cita previa online y también sin cita por orden de llegada';
  let policyPill = 'CON Y SIN CITA PREVIA';
  if (st.bookingPolicy === 'cita') {
    policyText = 'Atención con cita previa para garantizarte cero esperas';
    policyPill = 'CON CITA PREVIA';
  } else if (st.bookingPolicy === 'sincita') {
    policyText = 'Entrada libre sin cita previa en nuestro horario habitual';
    policyPill = 'SIN CITA PREVIA';
  }

  const servicesHtml = (st.services || []).map(srv => `
    <div class="srv-card" onclick="selectServiceForBooking('${escapeHtml(srv.title)}')">
      <div class="srv-info">
        <div class="srv-title">${escapeHtml(srv.title)}</div>
        <div class="srv-meta">${escapeHtml(srv.meta)}</div>
      </div>
      <div class="srv-right">
        <span class="srv-price">${escapeHtml(srv.price)}</span>
        <span class="srv-arrow">Reservar →</span>
      </div>
    </div>
  `).join('');

  const galleryHtml = (galleryPhotos || []).map((src, idx) => `
    <div class="gal-item">
      <img src="${escapeHtml(src)}" alt="Trabajo ${idx + 1} de ${escapeHtml(st.name)}" loading="lazy" />
    </div>
  `).join('');

  const serviceOptionsHtml = (st.services || []).map(srv =>
    `<option value="${escapeHtml(srv.title)} (${escapeHtml(srv.price)})">${escapeHtml(srv.title)} — ${escapeHtml(srv.price)}</option>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(st.name)} · ${escapeHtml(st.city)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: ${thm.bg};
    --surface: ${thm.surface};
    --card: ${thm.card};
    --ink: ${thm.text};
    --muted: ${thm.muted};
    --border: ${thm.border};
    --accent: ${thm.accent};
    --accent-hi: ${thm.accentHi};
    --accent-ink: ${thm.accentInk};
    --font-head: ${thm.headingFont};
    --weight-head: ${thm.headingWeight};
  }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--bg);
    color: var(--ink);
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    line-height: 1.55;
    overflow-x: hidden;
    padding-bottom: 84px;
  }
  a { color: inherit; text-decoration: none; }
  .wrap { max-width: 980px; margin: 0 auto; padding: 0 18px; }
  .top-strip {
    background: var(--surface); border-bottom: 1px solid var(--border);
    padding: 8px 16px; font-size: 11.5px;
    display: flex; justify-content: space-between; align-items: center; gap: 8px;
  }
  .open-dot {
    display: inline-block; width: 7px; height: 7px; border-radius: 50%;
    background: #10B981; box-shadow: 0 0 8px #10B981; margin-right: 6px;
  }
  .nav {
    position: sticky; top: 0; z-index: 40;
    background: ${thm.isLight ? 'rgba(250,246,240,0.92)' : 'rgba(12,11,10,0.90)'};
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--border);
  }
  .nav-inner {
    max-width: 980px; margin: 0 auto; padding: 13px 18px;
    display: flex; align-items: center; justify-content: space-between; gap: 10px;
  }
  .brand {
    font-family: var(--font-head); font-weight: var(--weight-head);
    font-size: ${thm.headingFont.includes('Instrument') ? '1.55rem' : '1.2rem'};
    letter-spacing: -0.02em; line-height: 1.05;
  }
  .brand span { color: var(--accent); }
  .nav-cta {
    background: var(--accent); color: var(--accent-ink);
    padding: 9px 15px; border-radius: 999px; font-size: 12px; font-weight: 700;
    white-space: nowrap; border: none; cursor: pointer;
  }
  .hero {
    padding: 32px 0 36px;
    background: radial-gradient(650px 380px at 85% 10%, ${thm.accent}22, transparent 65%);
    border-bottom: 1px solid var(--border);
  }
  .hero-grid { display: grid; grid-template-columns: 1fr; gap: 22px; align-items: center; }
  @media (min-width: 720px) {
    .hero { padding: 52px 0 56px; }
    .hero-grid { grid-template-columns: 1.15fr 0.85fr; gap: 36px; }
  }
  .eyebrow {
    display: inline-flex; align-items: center; gap: 7px;
    padding: 5px 12px; border-radius: 999px; border: 1px solid var(--border);
    background: var(--surface); color: var(--accent);
    font-size: 10.5px; font-weight: 700; letter-spacing: 0.07em;
    text-transform: uppercase; margin-bottom: 12px;
  }
  h1 {
    font-family: var(--font-head); font-weight: var(--weight-head);
    font-size: ${thm.headingFont.includes('Instrument') ? 'clamp(2.15rem, 6vw, 3.5rem)' : 'clamp(1.8rem, 5vw, 2.9rem)'};
    line-height: 1.05; letter-spacing: -0.02em; margin-bottom: 12px;
  }
  .hero-p { color: var(--muted); font-size: 14px; max-width: 520px; margin-bottom: 16px; }
  .clarity-box {
    display: flex; align-items: center; gap: 9px; padding: 10px 13px; border-radius: 12px;
    background: var(--surface); border: 1px solid var(--border); font-size: 12.5px; margin-bottom: 18px;
  }
  .hero-btns { display: flex; flex-wrap: wrap; gap: 10px; }
  .btn-main {
    background: var(--accent); color: var(--accent-ink);
    padding: 13px 20px; border-radius: 12px; font-weight: 700; font-size: 13.5px;
    border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
  }
  .btn-sec {
    background: var(--surface); color: var(--ink); border: 1px solid var(--border);
    padding: 13px 18px; border-radius: 12px; font-weight: 600; font-size: 13.5px;
    display: inline-flex; align-items: center; gap: 7px;
  }
  .hero-img-card {
    position: relative; border-radius: 20px; overflow: hidden;
    border: 1px solid var(--border); box-shadow: 0 20px 45px rgba(0,0,0,0.28);
  }
  .hero-img-card img { width: 100%; height: 260px; object-fit: cover; display: block; }
  @media (min-width: 720px) { .hero-img-card img { height: 340px; } }
  .hero-img-badge {
    position: absolute; bottom: 12px; left: 12px; right: 12px;
    background: rgba(12, 12, 14, 0.85); backdrop-filter: blur(10px);
    color: #fff; padding: 10px 13px; border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.14);
    display: flex; justify-content: space-between; align-items: center; gap: 8px; font-size: 12px;
  }
  section { padding: 36px 0; border-bottom: 1px solid var(--border); }
  .sec-tag {
    color: var(--accent); font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.09em; margin-bottom: 6px;
  }
  h2 {
    font-family: var(--font-head); font-weight: var(--weight-head);
    font-size: ${thm.headingFont.includes('Instrument') ? 'clamp(1.8rem, 4.5vw, 2.5rem)' : 'clamp(1.4rem, 3.8vw, 2rem)'};
    line-height: 1.1; margin-bottom: 16px;
  }
  .srv-list { display: grid; grid-template-columns: 1fr; gap: 11px; }
  @media (min-width: 680px) { .srv-list { grid-template-columns: 1fr 1fr; } }
  .srv-card {
    background: var(--card); border: 1px solid var(--border); border-radius: 15px; padding: 15px;
    display: flex; justify-content: space-between; align-items: center; gap: 12px;
    cursor: pointer; transition: transform 0.18s ease, border-color 0.18s ease;
  }
  .srv-card:hover { transform: translateY(-2px); border-color: var(--accent); }
  .srv-title { font-weight: 700; font-size: 14px; margin-bottom: 3px; }
  .srv-meta { color: var(--muted); font-size: 12px; }
  .srv-right { text-align: right; flex-shrink: 0; }
  .srv-price { display: block; color: var(--accent); font-weight: 800; font-size: 15px; white-space: nowrap; }
  .srv-arrow { font-size: 11px; color: var(--muted); font-weight: 600; }
  .book-card { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 20px; }
  .form-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 14px; }
  @media (min-width: 640px) { .form-grid { grid-template-columns: 1fr 1fr; } }
  label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--muted); margin-bottom: 5px; }
  input, select {
    width: 100%; padding: 11px 13px; border-radius: 10px;
    border: 1px solid var(--border); background: var(--surface); color: var(--ink);
    font-size: 16px; font-family: inherit;
  }
  .slots { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin: 8px 0 16px; }
  .slot-btn {
    padding: 9px 4px; border-radius: 9px; border: 1px solid var(--border);
    background: var(--surface); color: var(--ink); font-weight: 700; font-size: 12.5px; cursor: pointer;
  }
  .slot-btn.active { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
  .book-ok {
    display: none; margin-top: 12px; padding: 13px; border-radius: 12px;
    background: rgba(16, 185, 129, 0.14); border: 1px solid rgba(16, 185, 129, 0.4);
    color: #10B981; font-size: 13px; font-weight: 600;
  }
  .sched-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
  @media (min-width: 680px) { .sched-grid { grid-template-columns: 1fr 1fr; } }
  .sched-box { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 18px; }
  .day-row {
    display: flex; justify-content: space-between; padding: 8px 10px;
    border-radius: 8px; font-size: 13px; border-bottom: 1px dashed var(--border);
  }
  .day-row:last-child { border-bottom: none; }
  .day-row.today { background: ${thm.accent}1F; color: var(--accent); font-weight: 700; border-bottom: none; }
  .gal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; }
  .gal-item { border-radius: 12px; overflow: hidden; aspect-ratio: 1 / 1; border: 1px solid var(--border); }
  .gal-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .rev-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
  @media (min-width: 680px) { .rev-grid { grid-template-columns: 1fr 1fr; } }
  .rev-card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 15px; font-size: 13px; }
  .stars { color: #F59E0B; letter-spacing: 2px; font-size: 13px; margin-bottom: 6px; }
  .wa-float {
    position: fixed; bottom: 16px; right: 16px; z-index: 60;
    background: #25D366; color: #052E16; padding: 12px 18px; border-radius: 999px;
    font-weight: 800; font-size: 13px; box-shadow: 0 10px 26px rgba(37, 211, 102, 0.42);
    display: inline-flex; align-items: center; gap: 8px;
  }
</style>
</head>
<body>
  <div class="top-strip">
    <div style="min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;"><span class="open-dot"></span><strong>${escapeHtml(st.city)}</strong> · ${escapeHtml(st.address)}</div>
    <div style="font-weight:700; color:var(--accent); white-space:nowrap;">${escapeHtml(st.yearsExp)}</div>
  </div>
  <header class="nav">
    <div class="nav-inner">
      <a href="#" class="brand">${escapeHtml(st.name)}<span>.</span></a>
      <a href="${st.modules.booking ? '#reservar' : ('https://wa.me/' + fullWa)}" class="nav-cta">
        ${st.modules.booking ? 'Reservar Cita' : 'WhatsApp Directo'}
      </a>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <div class="eyebrow">${escapeHtml(sectorBadge)} · ${escapeHtml(policyPill)}</div>
          <h1>${escapeHtml(st.tagline)}</h1>
          <p class="hero-p">${escapeHtml(st.story)}</p>
          <div class="clarity-box">
            <span style="color:var(--accent); font-weight:800;">✓</span>
            <span>${escapeHtml(policyText)}</span>
          </div>
          <div class="hero-btns">
            ${st.modules.booking ? `<a href="#reservar" class="btn-main">Reservar Hora Online →</a>` : ''}
            <a href="https://wa.me/${fullWa}?text=${encodeURIComponent('Hola ' + st.name + ', quería consultar disponibilidad.')}" target="_blank" class="btn-sec">
              WhatsApp · ${escapeHtml(st.whatsapp)}
            </a>
          </div>
        </div>
        <div class="hero-img-card">
          <img src="${escapeHtml(heroImg)}" alt="${escapeHtml(st.name)}" />
          <div class="hero-img-badge">
            <span>★ 4,9 en ${escapeHtml(st.city)}</span>
            <strong style="color:${thm.accentHi}; white-space:nowrap;">${escapeHtml(st.hoursWeek)}</strong>
          </div>
        </div>
      </div>
    </section>

    ${st.modules.about ? `
    <section id="nosotros">
      <div class="wrap">
        <div class="sec-tag">Quiénes Somos</div>
        <h2>${escapeHtml(st.name)} en ${escapeHtml(st.city)}</h2>
        <p style="color:var(--muted); font-size:14px; margin-bottom:18px;">${escapeHtml(st.story)}</p>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px; text-align:center;">
          <div style="background:var(--card); border:1px solid var(--border); padding:13px 8px; border-radius:13px;">
            <div style="font-weight:800; font-size:14px; color:var(--accent);">${escapeHtml(st.yearsExp)}</div>
            <div style="font-size:11px; color:var(--muted);">Experiencia</div>
          </div>
          <div style="background:var(--card); border:1px solid var(--border); padding:13px 8px; border-radius:13px;">
            <div style="font-weight:800; font-size:14px; color:var(--accent);">4,9 / 5 ★</div>
            <div style="font-size:11px; color:var(--muted);">Valoración</div>
          </div>
          <div style="background:var(--card); border:1px solid var(--border); padding:13px 8px; border-radius:13px;">
            <div style="font-weight:800; font-size:14px; color:var(--accent);">Directo</div>
            <div style="font-size:11px; color:var(--muted);">Sin comisiones</div>
          </div>
        </div>
      </div>
    </section>` : ''}

    ${st.modules.services ? `
    <section id="servicios">
      <div class="wrap">
        <div class="sec-tag">Tarifas Claras y Servicios</div>
        <h2>Nuestros Servicios y Precios</h2>
        <div class="srv-list">${servicesHtml}</div>
      </div>
    </section>` : ''}

    ${st.modules.booking ? `
    <section id="reservar">
      <div class="wrap">
        <div class="sec-tag">Agenda Online 24/7</div>
        <h2>Reserva tu hora en 15 segundos</h2>
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label>1. Servicio deseado</label>
              <select id="bk-service">${serviceOptionsHtml}</select>
            </div>
            <div>
              <label>2. Tu nombre y móvil</label>
              <input type="text" id="bk-client" placeholder="Ej. Carlos · 600 123 456" />
            </div>
          </div>
          <label>3. Elige tramo disponible</label>
          <div class="slots">
            <button type="button" class="slot-btn" onclick="pickSlot(this,'10:30')">10:30</button>
            <button type="button" class="slot-btn active" onclick="pickSlot(this,'12:00')">12:00</button>
            <button type="button" class="slot-btn" onclick="pickSlot(this,'17:30')">17:30</button>
            <button type="button" class="slot-btn" onclick="pickSlot(this,'19:00')">19:00</button>
          </div>
          <button type="button" class="btn-main" style="width:100%; justify-content:center;" onclick="confirmDemoBooking()">
            Confirmar Reserva en ${escapeHtml(st.name)} →
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>
    </section>` : ''}

    ${st.modules.gallery ? `
    <section id="galeria">
      <div class="wrap">
        <div class="sec-tag">Nuestro Trabajo</div>
        <h2>Galería de ${escapeHtml(st.name)}</h2>
        <div class="gal-grid">${galleryHtml}</div>
      </div>
    </section>` : ''}

    ${st.modules.scheduleMap ? `
    <section id="ubicacion">
      <div class="wrap sched-grid">
        <div class="sched-box">
          <div class="sec-tag">Horario Semanal</div>
          <h3 style="font-size:18px; margin-bottom:12px;">Horario de apertura</h3>
          <div class="day-row" data-day="1"><span>Lunes</span><span>${escapeHtml(st.hoursWeek)}</span></div>
          <div class="day-row" data-day="2"><span>Martes</span><span>${escapeHtml(st.hoursWeek)}</span></div>
          <div class="day-row" data-day="3"><span>Miércoles</span><span>${escapeHtml(st.hoursWeek)}</span></div>
          <div class="day-row" data-day="4"><span>Jueves</span><span>${escapeHtml(st.hoursWeek)}</span></div>
          <div class="day-row" data-day="5"><span>Viernes</span><span>${escapeHtml(st.hoursWeek)}</span></div>
          <div class="day-row" data-day="6"><span>Sábado</span><span>${escapeHtml(st.hoursSat)}</span></div>
          <div class="day-row" data-day="0"><span>Domingo</span><span>${escapeHtml(st.hoursSun)}</span></div>
        </div>
        <div class="sched-box" style="display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div class="sec-tag">Ubicación Exacta</div>
            <h3 style="font-size:18px; margin-bottom:8px;">${escapeHtml(st.address)}</h3>
            <p style="color:var(--muted); font-size:13.5px; margin-bottom:14px;">${escapeHtml(st.city)} · Tel: ${escapeHtml(st.phone || st.whatsapp)} ${st.instagram ? ('· ' + escapeHtml(st.instagram)) : ''}</p>
            <div style="border-radius:12px; padding:15px; background:var(--surface); border:1px solid var(--border); font-size:12.5px; margin-bottom:14px;">
              <strong style="display:block; margin-bottom:4px; color:var(--accent);">📍 Cómo llegar fácilmente</strong>
              Pulsa el botón inferior para abrir la ubicación directa en Google Maps desde tu móvil.
            </div>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(st.name + ' ' + st.address + ' ' + st.city)}" target="_blank" class="btn-sec" style="justify-content:center; width:100%;">
            Cómo Llegar en Google Maps ↗
          </a>
        </div>
      </div>
    </section>` : ''}

    ${st.modules.reviews ? `
    <section id="resenas">
      <div class="wrap">
        <div class="sec-tag">Clientes Reales</div>
        <h2>Reseñas Destacadas</h2>
        <div class="rev-grid">
          <div class="rev-card">
            <div class="stars">★★★★★</div>
            <p style="margin-bottom:8px;">"Trato excelente y súper puntual. Poder ver los precios claros y reservar cita desde el móvil en 20 segundos es comodísimo."</p>
            <strong style="font-size:12px; color:var(--accent);">— Javier M. · Cliente verificado</strong>
          </div>
          <div class="rev-card">
            <div class="stars">★★★★★</div>
            <p style="margin-bottom:8px;">"Totalmente recomendables en ${escapeHtml(st.city)}. Atención muy profesional desde el primer momento."</p>
            <strong style="font-size:12px; color:var(--accent);">— Laura G. · Reseña en Google</strong>
          </div>
        </div>
      </div>
    </section>` : ''}

    ${st.modules.faq ? `
    <section id="preguntas" style="border-bottom:none;">
      <div class="wrap">
        <div class="sec-tag">Información Útil</div>
        <h2>Preguntas Frecuentes</h2>
        <div style="display:grid; gap:10px;">
          <details style="background:var(--card); border:1px solid var(--border); border-radius:12px; padding:13px 15px;">
            <summary style="font-weight:700; font-size:13.5px; cursor:pointer;">¿Cómo puedo pedir cita o consultar disponibilidad?</summary>
            <p style="color:var(--muted); font-size:13px; margin-top:8px;">${escapeHtml(policyText)}. También atendemos al instante por WhatsApp en el ${escapeHtml(st.whatsapp)}.</p>
          </details>
          <details style="background:var(--card); border:1px solid var(--border); border-radius:12px; padding:13px 15px;">
            <summary style="font-weight:700; font-size:13.5px; cursor:pointer;">¿Dónde estáis y cuál es vuestro horario?</summary>
            <p style="color:var(--muted); font-size:13px; margin-top:8px;">Estamos en ${escapeHtml(st.address)}, ${escapeHtml(st.city)}. Abiertos ${escapeHtml(st.hoursWeek)} (Sábados: ${escapeHtml(st.hoursSat)}).</p>
          </details>
        </div>
      </div>
    </section>` : ''}
  </main>
  <footer style="padding:24px 18px; text-align:center; font-size:12px; color:var(--muted); border-top:1px solid var(--border);">
    © ${new Date().getFullYear()} ${escapeHtml(st.name)} · ${escapeHtml(st.address)}, ${escapeHtml(st.city)}
  </footer>
  ${st.modules.whatsappFloat ? `
  <a class="wa-float" href="https://wa.me/${fullWa}?text=${encodeURIComponent('Hola ' + st.name + ', os escribo desde vuestra página web.')}" target="_blank">
    <span>💬 WhatsApp</span>
  </a>` : ''}
  <script>
    let chosenSlot = '12:00';
    const todayIdx = new Date().getDay();
    document.querySelectorAll('.day-row').forEach(r => {
      if (Number(r.getAttribute('data-day')) === todayIdx) {
        r.classList.add('today');
        r.firstElementChild.textContent += ' (Hoy)';
      }
    });
    function pickSlot(btn, slot) {
      chosenSlot = slot;
      document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    function selectServiceForBooking(title) {
      const sel = document.getElementById('bk-service');
      if (sel) {
        for (let i = 0; i < sel.options.length; i++) {
          if (sel.options[i].value.includes(title)) { sel.selectedIndex = i; break; }
        }
        document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    function confirmDemoBooking() {
      const srv = document.getElementById('bk-service')?.value || 'Servicio';
      const cli = document.getElementById('bk-client')?.value || 'Cliente';
      const ok = document.getElementById('bk-ok');
      if (ok) {
        ok.style.display = 'block';
        ok.textContent = '✓ Reserva registrada: ' + srv + ' a las ' + chosenSlot + ' (' + cli + ').';
      }
    }
  <\/script>
</body>
</html>`;
}

// ==========================================================================
// LANDING PAGE INTERACTIONS (Hero Generator, Before/After, Studio, Modals)
// ==========================================================================

// Owner.com-style Before (Google Maps Loss) vs After (Live Converting Site)
function switchHeroComparison(mode) {
  const beforePane = document.getElementById('hero-pane-before');
  const afterPane = document.getElementById('hero-pane-after');
  const btnB = document.getElementById('hero-tab-before');
  const btnA = document.getElementById('hero-tab-after');
  if (!beforePane || !afterPane) return;

  if (mode === 'before') {
    beforePane.classList.remove('hidden');
    afterPane.classList.add('hidden');
    btnB.className = 'w-1/2 px-3 py-2 rounded-xl text-xs font-extrabold bg-rose-500 text-white shadow whitespace-nowrap';
    btnA.className = 'w-1/2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white whitespace-nowrap';
  } else {
    beforePane.classList.add('hidden');
    afterPane.classList.remove('hidden');
    btnB.className = 'w-1/2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white whitespace-nowrap';
    btnA.className = 'w-1/2 px-3 py-2 rounded-xl text-xs font-extrabold bg-emerald-400 text-slate-950 shadow whitespace-nowrap';
  }
}

// Mixo.io + Durable.co Instant Hero Magic Generator
function startHeroInstantGenerator(e) {
  if (e) e.preventDefault();
  const heroNameEl = document.getElementById('hero-quick-name');
  const heroSectorEl = document.getElementById('hero-quick-sector');

  const typedName = heroNameEl ? heroNameEl.value.trim() : '';
  let chosenSector = heroSectorEl ? heroSectorEl.value : 'auto';

  if (chosenSector === 'auto') {
    chosenSector = detectSectorFromName(typedName) || studioState.sector || 'barberia';
  }

  const preset = SECTOR_PRESETS[chosenSector] || SECTOR_PRESETS.barberia;
  studioState.sector = chosenSector;
  if (typedName) {
    studioState.name = typedName;
    studioState.userEditedName = true;
  } else if (!studioState.userEditedName) {
    studioState.name = preset.defaultName;
  }
  studioState.yearsExp = preset.yearsExp;
  studioState.tagline = preset.tagline;
  studioState.story = preset.story;
  studioState.theme = preset.defaultTheme;
  studioState.services = JSON.parse(JSON.stringify(preset.services));

  syncInputsFromState();
  renderSectorSelector();
  renderServicesEditor();
  renderThemeSelector();
  updateStudioPreview(true);

  // Show fast 1.6s Mixo-style AI compilation overlay then scroll cleanly to live preview
  const buildModal = document.getElementById('ai-build-overlay');
  const buildTitle = document.getElementById('ai-build-name');
  const buildBar = document.getElementById('ai-build-progress');
  const buildStep = document.getElementById('ai-build-step');

  if (buildModal && buildBar && buildStep) {
    if (buildTitle) buildTitle.textContent = studioState.name;
    buildBar.style.width = '18%';
    buildStep.textContent = '1/3 · Adaptando diseño móvil y tipografía del sector...';
    buildModal.classList.remove('hidden');

    setTimeout(() => {
      buildBar.style.width = '64%';
      buildStep.textContent = '2/3 · Integrando catálogo de precios, horarios y WhatsApp...';
    }, 520);

    setTimeout(() => {
      buildBar.style.width = '100%';
      buildStep.textContent = '3/3 · ¡Demo 24 horas compilada y lista!';
    }, 1050);

    setTimeout(() => {
      buildModal.classList.add('hidden');
      const target = window.innerWidth < 1024
        ? document.getElementById('live-preview-anchor')
        : document.getElementById('generador');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1500);
  } else {
    document.getElementById('generador')?.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderSectorSelector() {
  const container = document.getElementById('sector-chips-grid');
  if (!container) return;

  container.innerHTML = Object.entries(SECTOR_PRESETS).map(([key, item]) => {
    const isActive = studioState.sector === key;
    return `
      <button type="button" onclick="selectStudioSector('${key}')"
        class="sector-btn ${isActive ? 'active' : 'bg-white/[0.03] border-white/10 text-slate-300'} border rounded-xl px-3 py-2.5 text-left flex items-center gap-2 text-xs font-bold">
        <i class="ph-bold ${item.icon} text-sm ${isActive ? 'text-emerald-400' : 'text-slate-400'} shrink-0"></i>
        <span>${escapeHtml(item.label)}</span>
      </button>
    `;
  }).join('');

  const customWrap = document.getElementById('custom-sector-wrap');
  if (customWrap) customWrap.classList.toggle('hidden', studioState.sector !== 'otro');
}

// FIXED: Never wipe out user's typed business name when switching sectors!
function selectStudioSector(sectorKey) {
  const preset = SECTOR_PRESETS[sectorKey];
  if (!preset) return;

  const currentTyped = document.getElementById('inp-name')?.value.trim();
  const isDefaultName = Object.values(SECTOR_PRESETS).some(p => p.defaultName === currentTyped);
  if (currentTyped && !isDefaultName) {
    studioState.userEditedName = true;
    studioState.name = currentTyped;
  }

  studioState.sector = sectorKey;
  if (!studioState.userEditedName) {
    studioState.name = preset.defaultName;
  }
  studioState.yearsExp = preset.yearsExp;
  studioState.tagline = preset.tagline;
  studioState.story = preset.story;
  studioState.theme = preset.defaultTheme;
  studioState.services = JSON.parse(JSON.stringify(preset.services));
  studioState.customHeroPhoto = '';
  studioState.customGallery = [];

  syncInputsFromState();
  renderSectorSelector();
  renderServicesEditor();
  renderThemeSelector();
  updateStudioPreview(true);
}

function onNameInputManual(val) {
  studioState.userEditedName = val.trim().length > 0;
  schedulePreviewRefresh();
}

function renderServicesEditor() {
  const list = document.getElementById('services-editor-list');
  if (!list) return;

  list.innerHTML = studioState.services.map((srv, idx) => `
    <div class="p-3 rounded-xl bg-slate-900/90 border border-white/10 space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[11px] font-mono uppercase text-emerald-400 font-bold">Servicio / Plato #${idx + 1}</span>
        ${studioState.services.length > 1 ? `
          <button type="button" onclick="removeServiceItem(${idx})" class="text-xs text-rose-300 px-2 py-0.5 rounded bg-rose-500/15 font-semibold">
            Quitar
          </button>` : ''}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-2">
        <input type="text" value="${escapeHtml(srv.title)}" oninput="editServiceField(${idx}, 'title', this.value)"
          placeholder="Nombre del servicio o producto"
          class="sm:col-span-8 desk-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/12 text-white focus:border-emerald-400 focus:outline-none" />
        <input type="text" value="${escapeHtml(srv.price)}" oninput="editServiceField(${idx}, 'price', this.value)"
          placeholder="Precio"
          class="sm:col-span-4 desk-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/12 text-emerald-300 font-bold focus:border-emerald-400 focus:outline-none" />
      </div>
      <input type="text" value="${escapeHtml(srv.meta)}" oninput="editServiceField(${idx}, 'meta', this.value)"
        placeholder="Descripción breve o duración (ej. 35 min)"
        class="w-full desk-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/12 text-slate-300 focus:border-emerald-400 focus:outline-none" />
    </div>
  `).join('');
}

function editServiceField(idx, field, val) {
  if (!studioState.services[idx]) return;
  studioState.services[idx][field] = val;
  schedulePreviewRefresh();
}

function addServiceItem() {
  studioState.services.push({
    title: 'Nuevo Servicio Destacado',
    meta: 'Atención profesional · Consulta o reserva',
    price: '20 €'
  });
  renderServicesEditor();
  updateStudioPreview(true);
}

function removeServiceItem(idx) {
  if (studioState.services.length <= 1) return;
  studioState.services.splice(idx, 1);
  renderServicesEditor();
  updateStudioPreview(true);
}

function handleHeroPhotoUpload(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    studioState.customHeroPhoto = ev.target.result;
    const status = document.getElementById('hero-photo-status');
    if (status) status.textContent = '✓ Tu foto está puesta en portada';
    updateStudioPreview(true);
  };
  reader.readAsDataURL(file);
}

function handleGalleryUpload(input) {
  const files = Array.from(input.files || []).slice(0, 4);
  if (!files.length) return;
  const loaded = [];
  let done = 0;
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(ev) {
      loaded.push(ev.target.result);
      done++;
      if (done === files.length) {
        studioState.customGallery = loaded;
        const status = document.getElementById('gallery-photo-status');
        if (status) status.textContent = `✓ ${loaded.length} foto(s) cargadas`;
        updateStudioPreview(true);
      }
    };
    reader.readAsDataURL(file);
  });
}

function resetUploadedPhotos() {
  studioState.customHeroPhoto = '';
  studioState.customGallery = [];
  const s1 = document.getElementById('hero-photo-status');
  const s2 = document.getElementById('gallery-photo-status');
  if (s1) s1.textContent = 'Foto profesional automática';
  if (s2) s2.textContent = '3 fotos de muestra';
  updateStudioPreview(true);
}

function renderThemeSelector() {
  const wrap = document.getElementById('theme-selector-grid');
  if (!wrap) return;

  wrap.innerHTML = Object.entries(DESIGN_THEMES).map(([key, t]) => {
    const active = studioState.theme === key;
    return `
      <button type="button" onclick="selectStudioTheme('${key}')"
        class="p-3 rounded-xl border text-left flex items-center gap-3 ${active ? 'border-emerald-400 bg-emerald-500/12' : 'border-white/10 bg-white/[0.03]'}">
        <span class="w-8 h-8 rounded-full shrink-0 border border-white/20 flex overflow-hidden">
          <span style="background:${t.swatch1}; width:50%; height:100%;"></span>
          <span style="background:${t.swatch2}; width:50%; height:100%;"></span>
        </span>
        <span class="min-w-0">
          <span class="block text-xs font-bold text-white truncate">${escapeHtml(t.label)}</span>
          <span class="block text-[11px] text-slate-400 truncate">${escapeHtml(t.sub)}</span>
        </span>
      </button>
    `;
  }).join('');
}

function selectStudioTheme(themeKey) {
  studioState.theme = themeKey;
  renderThemeSelector();
  updateStudioPreview(true);
}

const MODULE_LIST = [
  { key: 'booking', label: 'Agenda de Citas y Reservas 24/7' },
  { key: 'whatsappFloat', label: 'Botón Flotante de WhatsApp Directo' },
  { key: 'services', label: 'Catálogo de Servicios / Carta con Precios' },
  { key: 'about', label: 'Historia del Local y Años de Experiencia' },
  { key: 'scheduleMap', label: 'Horario Semanal + Botón Google Maps' },
  { key: 'gallery', label: 'Galería Fotográfica de Trabajos' },
  { key: 'reviews', label: 'Muro de Reseñas 5,0 ★' },
  { key: 'faq', label: 'Preguntas Frecuentes (FAQ)' }
];

function renderModulesSelector() {
  const wrap = document.getElementById('modules-toggle-grid');
  if (!wrap) return;

  wrap.innerHTML = MODULE_LIST.map(m => {
    const on = !!studioState.modules[m.key];
    return `
      <button type="button" onclick="toggleStudioModule('${m.key}')"
        class="mod-switch ${on ? 'active' : 'bg-white/[0.02] border-white/10'} border rounded-xl p-3 flex items-center justify-between gap-2 text-left">
        <span class="text-xs font-semibold text-white">${escapeHtml(m.label)}</span>
        <span class="w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-xs font-extrabold ${on ? 'bg-emerald-400 text-slate-950' : 'bg-white/10 text-transparent'}">✓</span>
      </button>
    `;
  }).join('');
}

function toggleStudioModule(modKey) {
  studioState.modules[modKey] = !studioState.modules[modKey];
  renderModulesSelector();
  updateStudioPreview(true);
}

function switchStudioStep(stepNum) {
  studioState.activeStep = stepNum;
  for (let i = 1; i <= 4; i++) {
    const panel = document.getElementById(`studio-step-${i}`);
    const tab = document.getElementById(`studio-tab-${i}`);
    if (panel) panel.classList.toggle('hidden', i !== stepNum);
    if (tab) tab.classList.toggle('active', i === stepNum);
  }
}

function syncInputsFromState() {
  const map = {
    'inp-name': studioState.name,
    'inp-custom-sector': studioState.customSectorLabel,
    'inp-years': studioState.yearsExp,
    'inp-tagline': studioState.tagline,
    'inp-story': studioState.story,
    'inp-policy': studioState.bookingPolicy,
    'inp-city': studioState.city,
    'inp-address': studioState.address,
    'inp-whatsapp': studioState.whatsapp,
    'inp-phone': studioState.phone,
    'inp-instagram': studioState.instagram,
    'inp-hours-week': studioState.hoursWeek,
    'inp-hours-sat': studioState.hoursSat,
    'inp-hours-sun': studioState.hoursSun
  };
  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  });
}

function readInputsIntoState() {
  const elVal = id => {
    const el = document.getElementById(id);
    return el ? el.value : null;
  };
  if (elVal('inp-name') !== null) studioState.name = elVal('inp-name').trim() || 'Mi Negocio Local';
  if (elVal('inp-custom-sector') !== null) studioState.customSectorLabel = elVal('inp-custom-sector').trim() || 'Negocio Profesional';
  if (elVal('inp-years') !== null) studioState.yearsExp = elVal('inp-years').trim() || 'Atención Profesional';
  if (elVal('inp-tagline') !== null) studioState.tagline = elVal('inp-tagline').trim() || 'Calidad y atención directa.';
  if (elVal('inp-story') !== null) studioState.story = elVal('inp-story').trim() || 'Reserva online en segundos.';
  if (elVal('inp-policy') !== null) studioState.bookingPolicy = elVal('inp-policy') || 'ambos';
  if (elVal('inp-city') !== null) studioState.city = elVal('inp-city').trim() || 'Madrid';
  if (elVal('inp-address') !== null) studioState.address = elVal('inp-address').trim() || 'Calle Mayor 12';
  if (elVal('inp-whatsapp') !== null) studioState.whatsapp = elVal('inp-whatsapp').trim() || '612 890 345';
  if (elVal('inp-phone') !== null) studioState.phone = elVal('inp-phone').trim();
  if (elVal('inp-instagram') !== null) studioState.instagram = elVal('inp-instagram').trim();
  if (elVal('inp-hours-week') !== null) studioState.hoursWeek = elVal('inp-hours-week').trim() || '09:30 – 20:00';
  if (elVal('inp-hours-sat') !== null) studioState.hoursSat = elVal('inp-hours-sat').trim() || '09:30 – 14:30';
  if (elVal('inp-hours-sun') !== null) studioState.hoursSun = elVal('inp-hours-sun').trim() || 'Cerrado';
}

function schedulePreviewRefresh() {
  if (compileTimer) clearTimeout(compileTimer);
  compileTimer = setTimeout(() => {
    readInputsIntoState();
    updateStudioPreview(true);
  }, 160);
}

function getLiveShareableSiteUrl() {
  const slug = slugifyName(studioState.name);
  const d = encodeSharePayload(studioState);
  return `/sitio/?negocio=${encodeURIComponent(slug)}&d=${d}`;
}

function getLiveAdminPanelUrl() {
  const slug = slugifyName(studioState.name);
  const d = encodeSharePayload(studioState);
  return `/admin/?negocio=${encodeURIComponent(slug)}&d=${d}`;
}

function updateStudioPreview(skipRead) {
  if (!skipRead) readInputsIntoState();
  saveStudioState();

  const slug = slugifyName(studioState.name);
  const prettyUrl = `miweblocal.com/${slug}`;
  const urlEl = document.getElementById('preview-live-url');
  if (urlEl) urlEl.textContent = prettyUrl;
  const fullUrlEl = document.getElementById('fullscreen-demo-url');
  if (fullUrlEl) fullUrlEl.textContent = prettyUrl;

  const openRealLink = document.getElementById('open-real-demo-tab');
  if (openRealLink) openRealLink.href = getLiveShareableSiteUrl();

  const html = compileClientWebsiteHTML(studioState);
  const iframe = document.getElementById('studio-preview-iframe');
  if (iframe) iframe.srcdoc = html;

  const fullIframe = document.getElementById('fullscreen-demo-iframe');
  const fullModal = document.getElementById('fullscreen-demo-modal');
  if (fullIframe && fullModal && !fullModal.classList.contains('hidden')) {
    fullIframe.srcdoc = html;
  }
}

// Toggle mobile touch inside inline iframe so scrolling page never traps user
let mobileInlineUnlocked = false;
function toggleInlineIframeTouch() {
  mobileInlineUnlocked = !mobileInlineUnlocked;
  const guard = document.getElementById('iframe-touch-guard');
  const btn = document.getElementById('btn-unlock-inline-touch');
  if (!guard || !btn) return;

  if (mobileInlineUnlocked) {
    guard.classList.remove('locked-scroll');
    btn.innerHTML = '<i class="ph-bold ph-lock-simple"></i><span>Bloquear Scroll</span>';
    btn.className = 'px-3.5 py-2 rounded-full bg-amber-400 text-slate-950 font-display font-extrabold text-xs shadow-lg flex items-center gap-1.5 whitespace-nowrap';
  } else {
    guard.classList.add('locked-scroll');
    btn.innerHTML = '<i class="ph-bold ph-hand-tap text-emerald-400"></i><span>Tocar Demo</span>';
    btn.className = 'px-3.5 py-2 rounded-full bg-slate-900/95 border border-white/20 text-white font-display font-bold text-xs shadow-lg flex items-center gap-1.5 whitespace-nowrap';
  }
}

function setPreviewDevice(mode) {
  studioState.previewDevice = mode;
  const wrap = document.getElementById('preview-frame-shell');
  const btnMob = document.getElementById('btn-dev-mobile');
  const btnDesk = document.getElementById('btn-dev-desktop');
  if (wrap) {
    wrap.classList.toggle('is-mobile-width', mode === 'mobile');
    wrap.classList.toggle('is-desktop-width', mode === 'desktop');
  }
  if (btnMob && btnDesk) {
    btnMob.className = mode === 'mobile'
      ? 'px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-950'
      : 'px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white';
    btnDesk.className = mode === 'desktop'
      ? 'px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-950'
      : 'px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white';
  }
}

function openFullscreenGeneratedDemo() {
  readInputsIntoState();
  saveStudioState();
  const modal = document.getElementById('fullscreen-demo-modal');
  const iframe = document.getElementById('fullscreen-demo-iframe');
  const urlEl = document.getElementById('fullscreen-demo-url');
  if (!modal || !iframe) return;

  if (urlEl) urlEl.textContent = `miweblocal.com/${slugifyName(studioState.name)}`;
  iframe.srcdoc = compileClientWebsiteHTML(studioState);
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeFullscreenGeneratedDemo() {
  const modal = document.getElementById('fullscreen-demo-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// ==========================================================================
// 24H TIMER + VALIDATED 50€ ACTIVATION + REAL WORKING /SITIO/ & /ADMIN/ LINKS
// ==========================================================================
function tickCountdownTimers() {
  const remMs = Math.max(0, (studioState.expiresAt || (Date.now() + 86000000)) - Date.now());
  const totalSec = Math.floor(remMs / 1000);
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  const str = `${h}:${m}:${s}`;
  document.querySelectorAll('.js-countdown-24h').forEach(el => { el.textContent = str; });
}

let selectedPayMethod = 'card';
function pickPayMethod(m) {
  selectedPayMethod = m;
  document.querySelectorAll('.pay-method-btn').forEach(btn => {
    const on = btn.getAttribute('data-pm') === m;
    btn.className = on
      ? 'pay-method-btn py-2.5 px-3 rounded-xl border border-emerald-400 bg-emerald-500/15 text-white font-bold text-xs text-center'
      : 'pay-method-btn py-2.5 px-3 rounded-xl border border-white/12 bg-slate-950 text-slate-300 font-semibold text-xs text-center';
  });
}

function openAutomatedCheckoutModal() {
  readInputsIntoState();
  saveStudioState();
  closeFullscreenGeneratedDemo();
  const modal = document.getElementById('checkout-modal');
  const content = document.getElementById('checkout-modal-body');
  if (!modal || !content) return;

  const slug = slugifyName(studioState.name);
  content.innerHTML = `
    <div>
      <div class="flex items-center justify-between gap-2 mb-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-bold">
          ● PUBLICACIÓN AUTOMÁTICA 24/7
        </span>
        <button type="button" onclick="closeCheckoutModal()" class="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center">✕</button>
      </div>

      <h3 class="font-display font-extrabold text-xl sm:text-2xl text-white mb-1">
        Activar web de <span class="text-emerald-400">${escapeHtml(studioState.name)}</span>
      </h3>
      <p class="text-slate-300 text-xs leading-relaxed mb-4">
        Tu demo gratuita caduca en <strong class="text-amber-300 font-mono tabular-nums js-countdown-24h">23:59:10</strong>. Desbloquéala para siempre y recibe tu panel de propietario <code class="text-amber-300">/admin</code>.
      </p>

      <div class="p-3.5 rounded-2xl bg-slate-950 border border-white/10 space-y-2 mb-4 text-xs">
        <div class="flex justify-between items-center gap-2">
          <span class="text-slate-400">Web pública:</span>
          <strong class="text-emerald-300 font-mono truncate">miweblocal.com/${escapeHtml(slug)}</strong>
        </div>
        <div class="flex justify-between items-center gap-2">
          <span class="text-slate-400">Panel móvil propietario:</span>
          <strong class="text-amber-300 font-mono truncate">miweblocal.com/${escapeHtml(slug)}/admin</strong>
        </div>
        <div class="flex justify-between items-center pt-2 border-t border-white/10">
          <span class="text-white font-bold">Pago único (sin cuotas):</span>
          <strong class="text-xl font-display font-extrabold text-white">50 € <span class="text-[11px] font-normal text-slate-400">IVA incl.</span></strong>
        </div>
      </div>

      <div class="space-y-3 mb-4">
        <div>
          <label class="block text-[11px] font-mono uppercase text-slate-300 font-semibold mb-1">1. Tu Email (para enviarte enlaces y clave)</label>
          <input type="email" id="buyer-email" value="${escapeHtml(studioState.buyerEmail || '')}" placeholder="ejemplo@tunegocio.com"
            class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white focus:border-emerald-400 focus:outline-none" />
          <div id="buyer-email-err" class="hidden text-rose-400 text-xs font-semibold mt-1">Por favor, introduce un email válido con @ para recibir tus accesos.</div>
        </div>

        <div>
          <label class="block text-[11px] font-mono uppercase text-slate-300 font-semibold mb-1">2. Método de pago seguro</label>
          <div class="grid grid-cols-3 gap-2">
            <button type="button" data-pm="card" onclick="pickPayMethod('card')" class="pay-method-btn py-2.5 px-3 rounded-xl border border-emerald-400 bg-emerald-500/15 text-white font-bold text-xs text-center">Tarjeta</button>
            <button type="button" data-pm="bizum" onclick="pickPayMethod('bizum')" class="pay-method-btn py-2.5 px-3 rounded-xl border border-white/12 bg-slate-950 text-slate-300 font-semibold text-xs text-center">Bizum</button>
            <button type="button" data-pm="apple" onclick="pickPayMethod('apple')" class="pay-method-btn py-2.5 px-3 rounded-xl border border-white/12 bg-slate-950 text-slate-300 font-semibold text-xs text-center">Apple / GPay</button>
          </div>
        </div>
      </div>

      <button type="button" onclick="completeAutomatedDelivery()"
        class="w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-display font-extrabold text-sm shadow-lg shadow-emerald-500/20">
        Confirmar 50 € y Desbloquear Web + Panel /admin →
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  tickCountdownTimers();
}

function completeAutomatedDelivery() {
  const emailEl = document.getElementById('buyer-email');
  const errEl = document.getElementById('buyer-email-err');
  const email = emailEl ? emailEl.value.trim() : '';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (errEl) errEl.classList.remove('hidden');
    if (emailEl) {
      emailEl.classList.add('border-rose-500');
      emailEl.focus();
    }
    return;
  }

  studioState.buyerEmail = email;
  studioState.unlocked = true;
  if (!studioState.adminPin) {
    studioState.adminPin = 'PRO-' + String(Math.floor(1000 + Math.random() * 9000));
  }
  saveStudioState();

  const siteUrl = getLiveShareableSiteUrl();
  const adminUrl = getLiveAdminPanelUrl();
  const content = document.getElementById('checkout-modal-body');
  if (!content) return;

  content.innerHTML = `
    <div>
      <div class="flex items-center justify-between mb-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-bold">
          ✓ WEB PUBLICADA Y PANEL /ADMIN ACTIVO
        </span>
        <button type="button" onclick="closeCheckoutModal()" class="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center">✕</button>
      </div>

      <h3 class="font-display font-extrabold text-xl text-white mb-1.5">
        ¡Todo listo, ${escapeHtml(studioState.name)}!
      </h3>
      <p class="text-slate-300 text-xs leading-relaxed mb-4">
        Copia enviada a <strong class="text-white">${escapeHtml(email)}</strong>. Ya puedes abrir tu web pública o entrar a tu panel privado móvil con tu clave:
      </p>

      <div class="p-4 rounded-2xl bg-slate-950 border border-emerald-500/35 space-y-2.5 text-xs mb-4">
        <div class="flex items-center justify-between gap-2">
          <span class="text-slate-400">Clave de propietario:</span>
          <strong class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-sm">${escapeHtml(studioState.adminPin)}</strong>
        </div>
        <div class="pt-2 border-t border-white/10 grid grid-cols-1 gap-2">
          <a href="${siteUrl}" target="_blank"
            class="btn-tap py-3 px-4 rounded-xl bg-emerald-400 text-slate-950 font-display font-extrabold text-center block">
            1. Abrir Mi Web Pública Ahora ↗
          </a>
          <a href="${adminUrl}" target="_blank"
            class="btn-tap py-3 px-4 rounded-xl bg-amber-400 text-slate-950 font-display font-extrabold text-center block">
            2. Entrar a Mi Panel Móvil (/admin) ↗
          </a>
          <button type="button" onclick="downloadStandaloneClientHTML()"
            class="py-2.5 px-4 rounded-xl bg-white/10 border border-white/15 text-white font-semibold text-center">
            Descargar Archivo .HTML Completo
          </button>
        </div>
      </div>
    </div>
  `;
}

function downloadStandaloneClientHTML() {
  readInputsIntoState();
  const html = compileClientWebsiteHTML(studioState);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${slugifyName(studioState.name)}-web-oficial.html`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 300);
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// ==========================================================================
// REAL LIVE CLIENT PORTFOLIO + SAME-ORIGIN BANNER/COOKIE CLEANER
// ==========================================================================
const REAL_PORTFOLIO = [
  {
    id: 'orero',
    category: 'motor',
    name: 'Orero Motorcycles',
    city: 'Orihuela (Alicante)',
    sectorTag: 'Concesionario & Taller Oficial',
    metric: '18 motos en stock vivo + citas taller',
    screenshot: 'assets/portfolio/motos_orero.jpg',
    route: '/motorcycle-store-orero/'
  },
  {
    id: 'jamal',
    category: 'barberia',
    name: 'Barbería Jamal',
    city: 'Cox (Alicante)',
    sectorTag: 'Barbería & Degradados',
    metric: '+45 citas semanales en 30 seg',
    screenshot: 'assets/portfolio/barberia_jamal.jpg',
    route: '/cox/barberia-jamal/'
  },
  {
    id: 'vimacchiata',
    category: 'hosteleria',
    name: 'La Vimacchiata Brunch',
    city: 'Orihuela Centro',
    sectorTag: 'Specialty Coffee & Brunch',
    metric: 'Reservas de terraza + carta digital',
    screenshot: 'assets/portfolio/vimacchiata_brunch.jpg',
    route: '/orihuela/la-vimacchiata-brunch/'
  },
  {
    id: 'elite',
    category: 'reformas',
    name: 'Reformas Elite Gold',
    city: 'Guardamar del Segura',
    sectorTag: 'Reformas Integrales & Villas',
    metric: '5,0 ★ en Google · Presupuestos WhatsApp',
    screenshot: 'assets/portfolio/reformas_elite.jpg',
    route: '/reformas-elite-gold-guardamar/'
  },
  {
    id: 'gabi',
    category: 'barberia',
    name: 'Gabi Tattoo Studio',
    city: 'Orihuela',
    sectorTag: 'Estudio de Tatuajes de Autor',
    metric: 'Cotizador de piezas + agenda privada',
    screenshot: 'assets/portfolio/gabi_tattoo.jpg',
    route: '/orihuela/gabi-tattoo-studio/'
  },
  {
    id: 'autolomas',
    category: 'motor',
    name: 'Auto Lomas Carrocería',
    city: 'Torrevieja',
    sectorTag: 'Chapa, Pintura al Horno & Detailing',
    metric: 'Comparador Antes/Después + Foto WhatsApp',
    screenshot: 'assets/portfolio/autochrome.jpg',
    route: '/autochrome-torrevieja/'
  }
];

function renderPortfolioCards(filterCat = 'all') {
  const grid = document.getElementById('portfolio-cards-container');
  if (!grid) return;

  document.querySelectorAll('.pf-filter-btn').forEach(btn => {
    const active = btn.getAttribute('data-cat') === filterCat;
    btn.className = active
      ? 'pf-filter-btn px-4 py-2 rounded-full text-xs font-extrabold bg-white text-slate-950 whitespace-nowrap'
      : 'pf-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10 whitespace-nowrap';
  });

  const items = filterCat === 'all'
    ? REAL_PORTFOLIO
    : REAL_PORTFOLIO.filter(p => p.category === filterCat);

  grid.innerHTML = items.map(item => `
    <article class="pf-card pf-slide w-[84vw] max-w-[332px] rounded-3xl bg-slate-950 border border-white/12 p-5 flex flex-col justify-between transition-all duration-300">
      <div>
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/12 border border-emerald-500/25 text-emerald-300 text-[11px] font-mono font-bold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> EN VIVO
          </span>
          <span class="text-[11px] text-slate-400 font-medium truncate">${escapeHtml(item.city)}</span>
        </div>

        <div class="my-1 cursor-pointer" onclick="openLiveClientModal('${escapeHtml(item.route)}', '${escapeHtml(item.name)}')">
          <div class="iphone-mockup">
            <div class="iphone-inner">
              <div class="iphone-island"></div>
              <img src="${escapeHtml(item.screenshot)}" alt="Web real de ${escapeHtml(item.name)}" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 pt-4 border-t border-white/10">
        <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">${escapeHtml(item.sectorTag)}</div>
        <h3 class="font-display font-bold text-lg text-white mb-1">${escapeHtml(item.name)}</h3>
        <p class="text-xs text-emerald-300 font-semibold mb-4">✓ ${escapeHtml(item.metric)}</p>

        <div class="grid grid-cols-2 gap-2">
          <button type="button" onclick="openLiveClientModal('${escapeHtml(item.route)}', '${escapeHtml(item.name)}')"
            class="py-2.5 px-3 rounded-xl bg-white text-slate-950 font-display font-extrabold text-xs whitespace-nowrap">
            Probar Aquí
          </button>
          <a href="${escapeHtml(item.route)}" target="_blank" rel="noopener"
            class="btn-tap py-2.5 px-3 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-xs text-center whitespace-nowrap">
            Abrir Web ↗
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// Same-Origin Cleaner: hides cookie banners & owner sales banners inside live preview modal
function cleanPortfolioIframe(iframe) {
  try {
    const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
    if (!doc) return;
    const hideExtras = () => {
      try {
        const curDoc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
        if (!curDoc || !curDoc.defaultView) return;
        curDoc.querySelectorAll('#owner-activation-banner, #owner-floating-pill, [id*="cookie"], [class*="cookie"]').forEach(el => {
          el.style.display = 'none';
        });
        curDoc.querySelectorAll('div, aside, section').forEach(el => {
          if (el.innerText && el.innerText.length < 700 && (el.innerText.includes('Aviso de Cookies') || el.innerText.includes('Aceptar todas')) && curDoc.defaultView.getComputedStyle(el).position === 'fixed') {
            el.style.display = 'none';
          }
        });
        if (curDoc.body) {
          curDoc.body.style.paddingTop = '0px';
          curDoc.body.style.marginTop = '0px';
        }
      } catch (err) {}
    };
    hideExtras();
    setTimeout(hideExtras, 700);
    setTimeout(hideExtras, 1800);
  } catch (e) {}
}

function openLiveClientModal(route, name) {
  const modal = document.getElementById('live-client-modal');
  const iframe = document.getElementById('live-client-iframe');
  const title = document.getElementById('live-client-title');
  const ext = document.getElementById('live-client-external');
  if (!modal || !iframe) return;

  if (title) title.textContent = name;
  if (ext) ext.href = route;
  iframe.onload = () => cleanPortfolioIframe(iframe);
  iframe.src = route;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLiveClientModal() {
  const modal = document.getElementById('live-client-modal');
  const iframe = document.getElementById('live-client-iframe');
  if (iframe) iframe.src = 'about:blank';
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function toggleMobileNav(open) {
  const sheet = document.getElementById('mobile-nav-sheet');
  if (!sheet) return;
  sheet.classList.toggle('hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function openLiveAdminPreview() {
  readInputsIntoState();
  saveStudioState();
  window.open(getLiveAdminPanelUrl(), '_blank');
}

// ==========================================================================
// INITIALIZATION (Only runs landing bindings when on main index.html)
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('generador')) return;

  // Sync studio state & render clean components
  syncInputsFromState();
  renderSectorSelector();
  renderServicesEditor();
  renderThemeSelector();
  renderModulesSelector();
  switchStudioStep(1);
  setPreviewDevice(window.innerWidth >= 1024 ? 'desktop' : 'mobile');
  updateStudioPreview(true);
  renderPortfolioCards('all');

  tickCountdownTimers();
  setInterval(tickCountdownTimers, 1000);

  // Smart Mobile Bottom Bar: ONLY show when NOT in Hero AND NOT inside #generador!
  // That way it NEVER covers form inputs, preview buttons, or Hero CTAs!
  const heroEl = document.getElementById('hero-section');
  const genEl = document.getElementById('generador');
  const smartBar = document.getElementById('smart-bottom-bar');
  if (heroEl && genEl && smartBar && 'IntersectionObserver' in window) {
    let heroVisible = true;
    let genVisible = false;
    const updateBar = () => {
      const shouldHide = heroVisible || genVisible;
      smartBar.classList.toggle('bar-hidden', shouldHide);
    };
    new IntersectionObserver(e => { heroVisible = e[0].isIntersecting; updateBar(); }, { threshold: 0.1 }).observe(heroEl);
    new IntersectionObserver(e => { genVisible = e[0].isIntersecting; updateBar(); }, { threshold: 0.05 }).observe(genEl);
  }
});
