/* ==========================================================================
   MI WEB LOCAL — V3 VISUAL ENGINE, SECTOR SOLVERS, 2-TIER LADDER & COMPILER
   ========================================================================== */

const STORAGE_KEY = 'miweblocal_platform_v5';
const FATHI_WHATSAPP = '34632768152';

// 13 Crisp Sector Presets with Sector-Specific Action Modes
const SECTOR_PRESETS = {
  barberia: {
    label: 'Barbería',
    icon: 'ph-scissors',
    actionType: 'citas',
    defaultTheme: 'copper',
    defaultName: 'Barbería Martínez',
    yearsExp: '12 años de oficio',
    tagline: 'Degradado al milímetro y afeitado clásico a navaja.',
    story: 'Puntualidad, trato cercano y reserva directa desde tu móvil en 15 segundos.',
    heroImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Corte Degradado / Skin Fade', meta: '35 min · Lavado y peinado', price: '16 €' },
      { title: 'Combo Corte + Barba a Navaja', meta: '50 min · Toalla caliente', price: '24 €' },
      { title: 'Perfilado y Arreglo de Barba', meta: '25 min · Aceites esenciales', price: '12 €' },
      { title: 'Corte Clásico / Infantil', meta: '30 min · Acabado limpio', price: '13 €' }
    ]
  },
  estetica: {
    label: 'Estética y Uñas',
    icon: 'ph-sparkle',
    actionType: 'citas',
    defaultTheme: 'cream',
    defaultName: 'Atelier Lumière',
    yearsExp: 'Centro especializado',
    tagline: 'Coloración orgánica, manicura rusa y estética facial.',
    story: 'Diagnóstico personalizado, firmas de alta cosmética y cita cómoda sin esperas.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Balayage Orgánico + Peinado', meta: '120 min · Diagnóstico incluido', price: '75 €' },
      { title: 'Manicura Rusa con Nivelación', meta: '60 min · Larga duración', price: '28 €' },
      { title: 'Higiene Facial Hydraglow', meta: '55 min · Piel luminosa', price: '48 €' },
      { title: 'Lifting de Pestañas + Cejas', meta: '45 min · Mirada natural', price: '40 €' }
    ]
  },
  motos: {
    label: 'Motos y Stock',
    icon: 'ph-motorcycle',
    actionType: 'motor',
    defaultTheme: 'crimson',
    defaultName: 'Motor Store Pro',
    yearsExp: 'Concesionario & Taller',
    tagline: 'Motos revisadas con garantía y taller multimarca.',
    story: 'Stock revisado en 60 puntos, financiación a medida y cita rápida de taller.',
    heroImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Naked 700cc ABS (Garantía 1 año)', meta: '6.400 km · Financiación', price: '6.890 €' },
      { title: 'Scooter Urbano 125cc Nuevo', meta: 'Seguro y casco incluidos', price: '3.290 €' },
      { title: 'Revisión Oficial + Neumáticos', meta: 'Entrega en el mismo día', price: 'Desde 65 €' },
      { title: 'Tasación de Tu Moto Actual', meta: 'En 15 min sin compromiso', price: 'Gratis' }
    ]
  },
  taller: {
    label: 'Taller y Coches',
    icon: 'ph-wrench',
    actionType: 'motor',
    defaultTheme: 'crimson',
    defaultName: 'Talleres MotorPro',
    yearsExp: '18 años en mecánica',
    tagline: 'Mecánica, chapa al horno y pre-ITV con precio cerrado.',
    story: 'Presupuesto exacto antes de tocar tu vehículo y entrega rápida garantizada.',
    heroImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Revisión Aceite Sintético + Filtros', meta: 'Mantiene garantía oficial', price: '95 €' },
      { title: 'Diagnosis Electrónica + Pre-ITV', meta: 'Informe completo 40 puntos', price: '39 €' },
      { title: 'Carga Aire Acondicionado', meta: 'Test de fugas incluido', price: '59 €' },
      { title: 'Pintura / Pulido Espejo', meta: ' Envía foto por WhatsApp', price: 'Valorar' }
    ]
  },
  reformas: {
    label: 'Reformas y Obra',
    icon: 'ph-house-line',
    actionType: 'reformas',
    defaultTheme: 'gold',
    defaultName: 'Reformas Élite',
    yearsExp: '+180 obras entregadas',
    tagline: 'Reformas integrales, cocinas y baños con plazo cerrado.',
    story: 'Coordinamos todos los gremios con materiales de primera y presupuesto sin sorpresas.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Visita + Medición y Presupuesto', meta: 'En menos de 48h sin coste', price: 'Gratis' },
      { title: 'Cambio Bañera por Plato de Ducha', meta: 'Listo en 24h con mampara', price: '1.190 €' },
      { title: 'Reforma Completa de Cocina', meta: 'Diseño funcional llave en mano', price: 'A medida' },
      { title: 'Reforma Integral de Vivienda', meta: 'Plazo garantizado por contrato', price: 'Consultar' }
    ]
  },
  restaurante: {
    label: 'Restaurante',
    icon: 'ph-hamburger',
    actionType: 'mesa',
    defaultTheme: 'copper',
    defaultName: 'La Brasa Club',
    yearsExp: 'Brasa y cocina viva',
    tagline: 'Carnes maduradas al fuego y smash burgers artesanas.',
    story: 'Consulta nuestra carta con precios y reserva mesa en terraza o salón sin comisiones.',
    heroImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Doble Truffle Smash Burger', meta: 'Cheddar fundido y patatas caseras', price: '14,90 €' },
      { title: 'Costillar Ibérico a la Brasa', meta: 'Baja temperatura · Ración entera', price: '22,50 €' },
      { title: 'Chuletón Vaca Madurada (kg)', meta: '45 días de maduración', price: '48,00 €' },
      { title: 'Tarta de Queso Cremosa', meta: 'Horneada cada mañana', price: '6,50 €' }
    ]
  },
  cafeteria: {
    label: 'Cafetería Brunch',
    icon: 'ph-coffee',
    actionType: 'mesa',
    defaultTheme: 'cream',
    defaultName: 'La Vimacchiata',
    yearsExp: 'Specialty Coffee',
    tagline: 'Café 100% arábica, brunch artesano y terraza soleada.',
    story: 'Repostería recién horneada y tostadas de masa madre hechas al momento.',
    heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Menú Brunch Completo', meta: 'Café + Zumo + Tosta + Bowl', price: '15,90 €' },
      { title: 'Tosta Aguacate y Huevo Poché', meta: 'Pan de masa madre ecológico', price: '7,80 €' },
      { title: 'Iced Pistachio Latte', meta: 'Doble shot arábica origen', price: '3,60 €' },
      { title: 'Pancakes Frutos Rojos', meta: 'Esponjosos al momento', price: '8,20 €' }
    ]
  },
  pizzeria: {
    label: 'Pizzería y Kebab',
    icon: 'ph-pizza',
    actionType: 'mesa',
    defaultTheme: 'crimson',
    defaultName: 'Forno Napolitano',
    yearsExp: 'Pedidos 0% comisión',
    tagline: 'Masa de 72 horas al horno de piedra para recoger o envío.',
    story: 'Haz tu pedido directo por WhatsApp sin recargos de plataformas externas.',
    heroImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Pizza Diavola Trufada', meta: 'Mozzarella fresca al horno', price: '12,90 €' },
      { title: 'Menú Dürüm XL + Patatas + Bebida', meta: 'Pan recién horneado', price: '8,90 €' },
      { title: 'Oferta 2 Pizzas + Entrante', meta: 'Recogida rápida o domicilio', price: '22,50 €' },
      { title: 'Calzone 4 Quesos Italianos', meta: 'Receta tradicional', price: '11,50 €' }
    ]
  },
  clinica: {
    label: 'Clínica y Salud',
    icon: 'ph-heartbeat',
    actionType: 'citas',
    defaultTheme: 'emerald',
    defaultName: 'Clínica Balance',
    yearsExp: 'Equipo colegiado',
    tagline: 'Odontología, fisioterapia y salud integral sin esperas.',
    story: 'Tecnología digital avanzada y primera valoración personalizada para tu tranquilidad.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: '1ª Visita + Diagnóstico Digital', meta: '40 min · Valoración completa', price: 'Gratis' },
      { title: 'Sesión Fisioterapia Manual', meta: '50 min · Individual', price: '38 €' },
      { title: 'Higiene Dental Ultrasonidos', meta: '45 min · Revisión incluida', price: '45 €' },
      { title: 'Blanqueamiento Clínico LED', meta: 'Seguro y visible en 1 sesión', price: '190 €' }
    ]
  },
  tattoo: {
    label: 'Estudio Tattoo',
    icon: 'ph-pen-nib',
    actionType: 'citas',
    defaultTheme: 'copper',
    defaultName: 'Gabi Tattoo Studio',
    yearsExp: 'Arte en piel',
    tagline: 'Realismo, micro-realismo y fine line con diseño único.',
    story: 'Cabinas privadas homologadas. Cuéntanos tu idea y reserva tu sesión.',
    heroImage: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1590246814883-57c511e7691c?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Fine Line / Minimalista', meta: 'Material 100% estéril', price: 'Desde 60 €' },
      { title: 'Pieza de Autor (10–18 cm)', meta: 'Boceto previo incluido', price: 'Desde 150 €' },
      { title: 'Sesión Realismo / Manga', meta: 'Día completo reservado', price: 'Consultar' },
      { title: 'Asesoramiento en Estudio', meta: '20 min · Sin compromiso', price: 'Gratis' }
    ]
  },
  urgencias: {
    label: 'Cerrajero 24h',
    icon: 'ph-key',
    actionType: 'urgencia',
    defaultTheme: 'gold',
    defaultName: 'Cerrajeros 24h Express',
    yearsExp: 'Llegada en 20 min',
    tagline: 'Aperturas sin romper y urgencias 24 horas los 365 días.',
    story: 'Técnicos directos de tu zona con precio cerrado por WhatsApp antes de salir.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Apertura Limpia sin Daños', meta: 'Llegada en 20 minutos', price: 'Desde 59 €' },
      { title: 'Bombín Antibumping Seguridad', meta: '5 llaves incopiables', price: '125 €' },
      { title: 'Persianas de Local Comercial', meta: 'Motorización y arreglo hoy', price: 'Valorar' },
      { title: 'Urgencia Nocturna y Festivos', meta: 'Atención inmediata 24h', price: '24 Horas' }
    ]
  },
  gimnasio: {
    label: 'Fitness / Pilates',
    icon: 'ph-barbell',
    actionType: 'citas',
    defaultTheme: 'emerald',
    defaultName: 'Arco Pilates & Gym',
    yearsExp: 'Grupos reducidos',
    tagline: 'Pilates Reformer y entrenamiento personal a tu medida.',
    story: 'Reserva tu clase de prueba y entrena con seguimiento de entrenadores titulados.',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Clase de Prueba + Valoración', meta: '55 min · Conoce el centro', price: '10 €' },
      { title: 'Bono Pilates Máquina (2/sem)', meta: 'Máx. 6 personas por grupo', price: '75 €/mes' },
      { title: 'Entrenamiento Funcional', meta: 'Mañanas y tardes', price: '65 €/mes' },
      { title: 'Entrenador Personal 1 a 1', meta: 'Objetivos garantizados', price: '35 €' }
    ]
  },
  otro: {
    label: '+ Otro Negocio',
    icon: 'ph-plus-circle',
    actionType: 'presupuesto',
    defaultTheme: 'gold',
    defaultName: 'Mi Negocio Profesional',
    yearsExp: 'Atención directa',
    tagline: 'Calidad, confianza y respuesta inmediata en tu ciudad.',
    story: 'Consulta tarifas claras y escríbenos por WhatsApp sin esperas.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Servicio / Producto Destacado #1', meta: 'Atención personalizada', price: 'Consultar' },
      { title: 'Pack Completo Más Solicitado', meta: 'Garantía incluida', price: '49 €' },
      { title: 'Consulta o Reserva Preferente', meta: 'Respuesta en el día', price: 'Gratis' }
    ]
  }
};

const DESIGN_THEMES = {
  copper: {
    label: 'Cobre & Grafito', sub: 'Serif Clásico + Cobre',
    swatch1: '#0D0C0B', swatch2: '#C88A4B',
    bg: '#0C0B0A', surface: '#161412', card: '#1D1A17',
    text: '#F7F3EE', muted: '#A89F95', border: 'rgba(200, 138, 75, 0.22)',
    accent: '#C88A4B', accentHi: '#DF9F5E', accentInk: '#0D0B09',
    headingFont: "'Instrument Serif', Georgia, serif", headingWeight: '400', isLight: false
  },
  crimson: {
    label: 'Rojo Motorsport', sub: 'Carbono + Rojo Vivo',
    swatch1: '#090A0F', swatch2: '#E11D48',
    bg: '#08090E', surface: '#11131C', card: '#171A26',
    text: '#F8FAFC', muted: '#94A3B8', border: 'rgba(225, 29, 72, 0.24)',
    accent: '#E11D48', accentHi: '#F43F5E', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: false
  },
  cream: {
    label: 'Crema Editorial', sub: 'Luminoso + Terracota',
    swatch1: '#FAF6F0', swatch2: '#9A3412',
    bg: '#FAF6F0', surface: '#F2ECE1', card: '#FFFFFF',
    text: '#1C1613', muted: '#6B5E55', border: 'rgba(28, 22, 19, 0.12)',
    accent: '#9A3412', accentHi: '#B45309', accentInk: '#FFFFFF',
    headingFont: "'Instrument Serif', Georgia, serif", headingWeight: '400', isLight: true
  },
  gold: {
    label: 'Oro Imperial', sub: 'Azul Noche + Dorado',
    swatch1: '#070C18', swatch2: '#F59E0B',
    bg: '#070C18', surface: '#0F172A', card: '#162038',
    text: '#F8FAFC', muted: '#94A3B8', border: 'rgba(245, 158, 11, 0.24)',
    accent: '#F59E0B', accentHi: '#FBBF24', accentInk: '#090D16',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: false
  },
  emerald: {
    label: 'Clínica Esmeralda', sub: 'Blanco Puro + Salud',
    swatch1: '#F8FAFC', swatch2: '#059669',
    bg: '#F8FAFC', surface: '#EEF2F6', card: '#FFFFFF',
    text: '#0F172A', muted: '#475669', border: 'rgba(15, 23, 42, 0.10)',
    accent: '#059669', accentHi: '#10B981', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  }
};

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function slugifyName(name) {
  const s = String(name || 'minegocio')
    .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return s || 'minegocio';
}

function encodeSharePayload(st) {
  try {
    const slim = {
      n: st.name, s: st.sector, cs: st.customSectorLabel, y: st.yearsExp,
      tg: st.tagline, st: st.story, bp: st.bookingPolicy, c: st.city,
      a: st.address, w: st.whatsapp, p: st.phone, ig: st.instagram,
      hw: st.hoursWeek, hs: st.hoursSat, hd: st.hoursSun, th: st.theme,
      sv: (st.services || []).slice(0, 12), md: st.modules,
      un: !!st.unlocked, pin: st.adminPin || 'PRO-4829'
    };
    return btoa(unescape(encodeURIComponent(JSON.stringify(slim))))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  } catch (e) { return ''; }
}

function decodeSharePayload(b64) {
  try {
    let norm = String(b64).replace(/-/g, '+').replace(/_/g, '/');
    while (norm.length % 4) norm += '=';
    const slim = JSON.parse(decodeURIComponent(escape(atob(norm))));
    if (!slim || !slim.n) return null;
    const def = SECTOR_PRESETS[slim.s] || SECTOR_PRESETS.barberia;
    return {
      name: slim.n, userEditedName: true, sector: slim.s || 'barberia',
      customSectorLabel: slim.cs || 'Negocio Local', yearsExp: slim.y || def.yearsExp,
      tagline: slim.tg || def.tagline, story: slim.st || def.story,
      bookingPolicy: slim.bp || 'ambos', city: slim.c || 'Madrid',
      address: slim.a || 'Calle Mayor 12', whatsapp: slim.w || '612 890 345',
      phone: slim.p || '', instagram: slim.ig || '',
      hoursWeek: slim.hw || '09:30 – 20:00', hoursSat: slim.hs || '09:30 – 14:30',
      hoursSun: slim.hd || 'Cerrado', theme: slim.th || def.defaultTheme,
      customHeroPhoto: '', customGallery: [],
      services: Array.isArray(slim.sv) && slim.sv.length ? slim.sv : JSON.parse(JSON.stringify(def.services)),
      modules: Object.assign({
        booking: true, whatsappFloat: true, services: true, about: true,
        scheduleMap: true, gallery: true, reviews: true, faq: true
      }, slim.md || {}),
      unlocked: !!slim.un, adminPin: slim.pin || 'PRO-4829',
      expiresAt: Date.now() + 24 * 3600 * 1000
    };
  } catch (e) { return null; }
}

function loadStudioState() {
  const def = SECTOR_PRESETS.barberia;
  const fallback = {
    name: def.defaultName, userEditedName: false, sector: 'barberia',
    customSectorLabel: 'Comercio / Servicio Profesional',
    yearsExp: def.yearsExp, tagline: def.tagline, story: def.story,
    bookingPolicy: 'ambos', city: 'Madrid Centro', address: 'Calle Mayor 24, Bajo',
    whatsapp: '612 890 345', phone: '910 234 567', instagram: '@barberiamartinez',
    hoursWeek: '09:30 – 20:30', hoursSat: '09:30 – 15:00', hoursSun: 'Cerrado',
    theme: 'copper', customHeroPhoto: '', customGallery: [],
    services: JSON.parse(JSON.stringify(def.services)),
    modules: {
      booking: true, whatsappFloat: true, services: true, about: true,
      scheduleMap: true, gallery: true, reviews: true, faq: true
    },
    unlocked: false, adminPin: 'PRO-4829', buyerEmail: '',
    previewDevice: 'mobile', activeStep: 1,
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
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(studioState)); } catch (e) {}
}

// ==========================================================================
// SECTOR-ADAPTIVE COMPILER (Generates Tailored Action Module per Business!)
// ==========================================================================
function buildSectorActionWidgetHTML(st, preset, fullWa) {
  const mode = preset.actionType || 'citas';
  const srvOpts = (st.services || []).map(srv =>
    `<option value="${escapeHtml(srv.title)} (${escapeHtml(srv.price)})">${escapeHtml(srv.title)} — ${escapeHtml(srv.price)}</option>`
  ).join('');

  if (mode === 'reformas') {
    return `
      <div class="sec-tag">Presupuesto Rápido Sin Compromiso</div>
      <h2>Calcula o solicita presupuesto de tu reforma</h2>
      <div class="book-card">
        <div class="form-grid">
          <div>
            <label>1. Tipo de trabajo</label>
            <select id="bk-service">${srvOpts}</select>
          </div>
          <div>
            <label>2. Tamaño / Metros aprox.</label>
            <select id="bk-extra">
              <option value="Estancia pequeña (< 10 m²)">Estancia / Baño (&lt; 10 m²)</option>
              <option value="Cocina / Salón (15 - 35 m²)">Cocina o Salón (15–35 m²)</option>
              <option value="Vivienda completa (+70 m²)">Vivienda completa (+70 m²)</option>
            </select>
          </div>
        </div>
        <div style="margin-bottom:14px;">
          <label>3. Tu nombre y teléfono</label>
          <input type="text" id="bk-client" placeholder="Ej. Javier · 600 123 456" />
        </div>
        <button type="button" class="btn-main" style="width:100%; justify-content:center;" onclick="sendSectorWhatsApp('reforma')">
          Solicitar Visita y Presupuesto por WhatsApp →
        </button>
        <div class="book-ok" id="bk-ok"></div>
      </div>`;
  }

  if (mode === 'motor') {
    return `
      <div class="sec-tag">Taller & Vehículos</div>
      <h2>Reserva cita de taller o consulta un vehículo</h2>
      <div class="book-card">
        <div class="form-grid">
          <div>
            <label>1. Vehículo o servicio</label>
            <select id="bk-service">${srvOpts}</select>
          </div>
          <div>
            <label>2. Modelo / Matrícula</label>
            <input type="text" id="bk-extra" placeholder="Ej. Yamaha MT-07 / Seat León" />
          </div>
        </div>
        <div style="margin-bottom:14px;">
          <label>3. Tu nombre y móvil</label>
          <input type="text" id="bk-client" placeholder="Ej. Marcos · 600 123 456" />
        </div>
        <button type="button" class="btn-main" style="width:100%; justify-content:center;" onclick="sendSectorWhatsApp('motor')">
          Confirmar Consulta / Cita por WhatsApp →
        </button>
        <div class="book-ok" id="bk-ok"></div>
      </div>`;
  }

  if (mode === 'mesa') {
    return `
      <div class="sec-tag">Reservas y Pedidos Directos (0% Comisión)</div>
      <h2>Reserva tu mesa o pide para recoger</h2>
      <div class="book-card">
        <div class="form-grid">
          <div>
            <label>1. ¿Qué prefieres?</label>
            <select id="bk-extra">
              <option value="Mesa para 2 personas · Terraza">Mesa 2 personas · Terraza</option>
              <option value="Mesa para 4 personas · Salón">Mesa 4 personas · Salón</option>
              <option value="Grupo (+6 personas)">Mesa Grupo (+6 personas)</option>
              <option value="Pedido para recoger en local">Pedido para recoger sin colas</option>
            </select>
          </div>
          <div>
            <label>2. Plato / Menú favorito</label>
            <select id="bk-service">${srvOpts}</select>
          </div>
        </div>
        <label>3. Hora aproximada</label>
        <div class="slots">
          <button type="button" class="slot-btn" onclick="pickSlot(this,'13:30')">13:30</button>
          <button type="button" class="slot-btn active" onclick="pickSlot(this,'14:30')">14:30</button>
          <button type="button" class="slot-btn" onclick="pickSlot(this,'21:00')">21:00</button>
          <button type="button" class="slot-btn" onclick="pickSlot(this,'22:00')">22:00</button>
        </div>
        <button type="button" class="btn-main" style="width:100%; justify-content:center;" onclick="sendSectorWhatsApp('mesa')">
          Confirmar Mesa / Pedido al Instante →
        </button>
        <div class="book-ok" id="bk-ok"></div>
      </div>`;
  }

  if (mode === 'urgencia') {
    return `
      <div class="sec-tag">Asistencia Rápida 24 Horas</div>
      <h2>Solicita técnico urgente ahora mismo</h2>
      <div class="book-card">
        <div class="form-grid">
          <div>
            <label>1. Tipo de urgencia</label>
            <select id="bk-service">${srvOpts}</select>
          </div>
          <div>
            <label>2. Tu calle / zona</label>
            <input type="text" id="bk-extra" placeholder="Ej. Av. Libertad 14" />
          </div>
        </div>
        <button type="button" class="btn-main" style="width:100%; justify-content:center;" onclick="sendSectorWhatsApp('urgencia')">
          🚨 Avisar Técnico Urgente por WhatsApp →
        </button>
        <div class="book-ok" id="bk-ok"></div>
      </div>`;
  }

  // Default: citas / presupuesto
  return `
    <div class="sec-tag">Agenda Online 24/7</div>
    <h2>Reserva tu hora en 15 segundos</h2>
    <div class="book-card">
      <div class="form-grid">
        <div>
          <label>1. Servicio elegido</label>
          <select id="bk-service">${srvOpts}</select>
        </div>
        <div>
          <label>2. Tu nombre y móvil</label>
          <input type="text" id="bk-client" placeholder="Ej. Carlos · 600 123 456" />
        </div>
      </div>
      <label>3. Tramo disponible</label>
      <div class="slots">
        <button type="button" class="slot-btn" onclick="pickSlot(this,'10:30')">10:30</button>
        <button type="button" class="slot-btn active" onclick="pickSlot(this,'12:00')">12:00</button>
        <button type="button" class="slot-btn" onclick="pickSlot(this,'17:30')">17:30</button>
        <button type="button" class="slot-btn" onclick="pickSlot(this,'19:00')">19:00</button>
      </div>
      <button type="button" class="btn-main" style="width:100%; justify-content:center;" onclick="sendSectorWhatsApp('citas')">
        Confirmar en ${escapeHtml(st.name)} →
      </button>
      <div class="book-ok" id="bk-ok"></div>
    </div>`;
}

function compileClientWebsiteHTML(st) {
  const preset = SECTOR_PRESETS[st.sector] || SECTOR_PRESETS.barberia;
  const thm = DESIGN_THEMES[st.theme] || DESIGN_THEMES.copper;
  const sectorBadge = st.sector === 'otro' ? (st.customSectorLabel || 'Negocio Verificado') : preset.label;
  const heroImg = st.customHeroPhoto || preset.heroImage;
  const galleryPhotos = (st.customGallery && st.customGallery.length > 0) ? st.customGallery : preset.gallery;

  const cleanWa = String(st.whatsapp || '600000000').replace(/[^0-9]/g, '');
  const fullWa = cleanWa.startsWith('34') ? cleanWa : ('34' + cleanWa);

  const actionBtnLabel = preset.actionType === 'reformas' ? 'Pedir Presupuesto'
    : preset.actionType === 'mesa' ? 'Reservar Mesa'
    : preset.actionType === 'motor' ? 'Taller / Stock'
    : preset.actionType === 'urgencia' ? 'Urgencias 24h'
    : 'Reservar Cita';

  const servicesHtml = (st.services || []).map(srv => `
    <div class="srv-card" onclick="selectServiceForBooking('${escapeHtml(srv.title)}')">
      <div class="srv-info">
        <div class="srv-title">${escapeHtml(srv.title)}</div>
        <div class="srv-meta">${escapeHtml(srv.meta)}</div>
      </div>
      <div class="srv-right">
        <span class="srv-price">${escapeHtml(srv.price)}</span>
        <span class="srv-arrow">Elegir →</span>
      </div>
    </div>
  `).join('');

  const galleryHtml = (galleryPhotos || []).map((src, idx) => `
    <div class="gal-item">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(st.name)} ${idx + 1}" loading="lazy" />
    </div>
  `).join('');

  const widgetHtml = buildSectorActionWidgetHTML(st, preset, fullWa);

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
    --bg:${thm.bg}; --surface:${thm.surface}; --card:${thm.card};
    --ink:${thm.text}; --muted:${thm.muted}; --border:${thm.border};
    --accent:${thm.accent}; --accent-hi:${thm.accentHi}; --accent-ink:${thm.accentInk};
    --font-head:${thm.headingFont}; --weight-head:${thm.headingWeight};
  }
  * { box-sizing:border-box; margin:0; padding:0; -webkit-tap-highlight-color:transparent; }
  html { scroll-behavior:smooth; }
  body { background:var(--bg); color:var(--ink); font-family:'Plus Jakarta Sans',sans-serif; line-height:1.5; overflow-x:clip; padding-bottom:82px; }
  a { color:inherit; text-decoration:none; }
  .wrap { max-width:960px; margin:0 auto; padding:0 18px; }
  .top-strip { background:var(--surface); border-bottom:1px solid var(--border); padding:8px 16px; font-size:11.5px; display:flex; justify-content:space-between; align-items:center; gap:8px; }
  .open-dot { display:inline-block; width:7px; height:7px; border-radius:50%; background:#10B981; box-shadow:0 0 8px #10B981; margin-right:6px; }
  .nav { position:sticky; top:0; z-index:40; background:${thm.isLight ? 'rgba(250,246,240,0.92)' : 'rgba(12,11,10,0.90)'}; backdrop-filter:blur(14px); border-bottom:1px solid var(--border); }
  .nav-inner { max-width:960px; margin:0 auto; padding:12px 18px; display:flex; align-items:center; justify-content:space-between; gap:10px; }
  .brand { font-family:var(--font-head); font-weight:var(--weight-head); font-size:${thm.headingFont.includes('Instrument') ? '1.5rem' : '1.18rem'}; line-height:1.05; cursor:pointer; }
  .brand span { color:var(--accent); }
  .nav-cta { background:var(--accent); color:var(--accent-ink); padding:9px 15px; border-radius:999px; font-size:12px; font-weight:700; border:none; cursor:pointer; white-space:nowrap; }
  .hero { padding:28px 0 32px; background:radial-gradient(600px 360px at 85% 10%, ${thm.accent}22, transparent 65%); border-bottom:1px solid var(--border); }
  .hero-grid { display:grid; grid-template-columns:1fr; gap:20px; align-items:center; }
  @media (min-width:720px) { .hero { padding:46px 0 50px; } .hero-grid { grid-template-columns:1.1fr 0.9fr; gap:32px; } }
  .eyebrow { display:inline-flex; align-items:center; gap:7px; padding:5px 12px; border-radius:999px; border:1px solid var(--border); background:var(--surface); color:var(--accent); font-size:10.5px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:10px; }
  h1 { font-family:var(--font-head); font-weight:var(--weight-head); font-size:${thm.headingFont.includes('Instrument') ? 'clamp(2.05rem,5.5vw,3.3rem)' : 'clamp(1.75rem,4.8vw,2.75rem)'}; line-height:1.06; margin-bottom:10px; }
  .hero-p { color:var(--muted); font-size:14px; max-width:500px; margin-bottom:16px; }
  .hero-btns { display:flex; flex-wrap:wrap; gap:10px; }
  .btn-main { background:var(--accent); color:var(--accent-ink); padding:13px 20px; border-radius:12px; font-weight:700; font-size:13.5px; border:none; cursor:pointer; display:inline-flex; align-items:center; gap:7px; }
  .btn-sec { background:var(--surface); color:var(--ink); border:1px solid var(--border); padding:13px 18px; border-radius:12px; font-weight:600; font-size:13.5px; display:inline-flex; align-items:center; gap:7px; cursor:pointer; }
  .hero-img-card { position:relative; border-radius:20px; overflow:hidden; border:1px solid var(--border); box-shadow:0 20px 45px rgba(0,0,0,0.28); }
  .hero-img-card img { width:100%; height:250px; object-fit:cover; display:block; }
  @media (min-width:720px) { .hero-img-card img { height:320px; } }
  .hero-img-badge { position:absolute; bottom:10px; left:10px; right:10px; background:rgba(12,12,14,0.86); backdrop-filter:blur(10px); color:#fff; padding:9px 12px; border-radius:12px; border:1px solid rgba(255,255,255,0.14); display:flex; justify-content:space-between; align-items:center; font-size:12px; }
  section { padding:32px 0; border-bottom:1px solid var(--border); }
  .sec-tag { color:var(--accent); font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:5px; }
  h2 { font-family:var(--font-head); font-weight:var(--weight-head); font-size:${thm.headingFont.includes('Instrument') ? 'clamp(1.7rem,4vw,2.35rem)' : 'clamp(1.35rem,3.5vw,1.9rem)'}; line-height:1.1; margin-bottom:14px; }
  .srv-list { display:grid; grid-template-columns:1fr; gap:10px; }
  @media (min-width:680px) { .srv-list { grid-template-columns:1fr 1fr; } }
  .srv-card { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:14px; display:flex; justify-content:space-between; align-items:center; gap:10px; cursor:pointer; transition:transform 0.16s ease, border-color 0.16s ease; }
  .srv-card:hover { transform:translateY(-2px); border-color:var(--accent); }
  .srv-title { font-weight:700; font-size:14px; margin-bottom:2px; }
  .srv-meta { color:var(--muted); font-size:12px; }
  .srv-right { text-align:right; flex-shrink:0; }
  .srv-price { display:block; color:var(--accent); font-weight:800; font-size:15px; white-space:nowrap; }
  .srv-arrow { font-size:11px; color:var(--muted); font-weight:600; }
  .book-card { background:var(--card); border:1px solid var(--border); border-radius:18px; padding:18px; }
  .form-grid { display:grid; grid-template-columns:1fr; gap:11px; margin-bottom:12px; }
  @media (min-width:640px) { .form-grid { grid-template-columns:1fr 1fr; } }
  label { display:block; font-size:11px; font-weight:700; text-transform:uppercase; color:var(--muted); margin-bottom:4px; }
  input, select { width:100%; padding:11px 12px; border-radius:10px; border:1px solid var(--border); background:var(--surface); color:var(--ink); font-size:16px; font-family:inherit; }
  .slots { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; margin:6px 0 14px; }
  .slot-btn { padding:9px 4px; border-radius:9px; border:1px solid var(--border); background:var(--surface); color:var(--ink); font-weight:700; font-size:12.5px; cursor:pointer; }
  .slot-btn.active { background:var(--accent); color:var(--accent-ink); border-color:var(--accent); }
  .book-ok { display:none; margin-top:12px; padding:12px; border-radius:11px; background:rgba(16,185,129,0.14); border:1px solid rgba(16,185,129,0.4); color:#10B981; font-size:13px; font-weight:600; }
  .gal-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:9px; }
  .gal-item { border-radius:12px; overflow:hidden; aspect-ratio:1/1; border:1px solid var(--border); }
  .gal-item img { width:100%; height:100%; object-fit:cover; display:block; }
  .sched-grid { display:grid; grid-template-columns:1fr; gap:14px; }
  @media (min-width:680px) { .sched-grid { grid-template-columns:1fr 1fr; } }
  .sched-box { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:16px; }
  .day-row { display:flex; justify-content:space-between; padding:7px 9px; border-radius:8px; font-size:13px; border-bottom:1px dashed var(--border); }
  .day-row:last-child { border-bottom:none; }
  .day-row.today { background:${thm.accent}1F; color:var(--accent); font-weight:700; border-bottom:none; }
  .wa-float { position:fixed; bottom:16px; right:16px; z-index:60; background:#25D366; color:#052E16; padding:12px 18px; border-radius:999px; font-weight:800; font-size:13px; box-shadow:0 10px 26px rgba(37,211,102,0.42); display:inline-flex; align-items:center; gap:7px; }
</style>
</head>
<body>
  <div class="top-strip">
    <div style="min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;"><span class="open-dot"></span><strong>${escapeHtml(st.city)}</strong> · ${escapeHtml(st.address)}</div>
    <div style="font-weight:700; color:var(--accent); white-space:nowrap;">${escapeHtml(st.yearsExp)}</div>
  </div>
  <header class="nav">
    <div class="nav-inner">
      <div class="brand" onclick="window.scrollTo({top:0,behavior:'smooth'})">${escapeHtml(st.name)}<span>.</span></div>
      <button type="button" class="nav-cta" onclick="jumpSec('accion')">${escapeHtml(actionBtnLabel)}</button>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <div class="eyebrow">${escapeHtml(sectorBadge)} · ${escapeHtml(st.city)}</div>
          <h1>${escapeHtml(st.tagline)}</h1>
          <p class="hero-p">${escapeHtml(st.story)}</p>
          <div class="hero-btns">
            ${st.modules.booking ? `<button type="button" class="btn-main" onclick="jumpSec('accion')">${escapeHtml(actionBtnLabel)} →</button>` : ''}
            <a href="https://wa.me/${fullWa}?text=${encodeURIComponent('Hola ' + st.name + ', os escribo desde vuestra web.')}" target="_blank" class="btn-sec">
              💬 WhatsApp · ${escapeHtml(st.whatsapp)}
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

    ${st.modules.services ? `
    <section id="servicios">
      <div class="wrap">
        <div class="sec-tag">Catálogo y Tarifas</div>
        <h2>Servicios y Precios</h2>
        <div class="srv-list">${servicesHtml}</div>
      </div>
    </section>` : ''}

    ${st.modules.booking ? `
    <section id="accion">
      <div class="wrap">${widgetHtml}</div>
    </section>` : ''}

    ${st.modules.gallery ? `
    <section id="galeria">
      <div class="wrap">
        <div class="sec-tag">Imágenes</div>
        <h2>Galería de ${escapeHtml(st.name)}</h2>
        <div class="gal-grid">${galleryHtml}</div>
      </div>
    </section>` : ''}

    ${st.modules.scheduleMap ? `
    <section id="ubicacion" style="border-bottom:none;">
      <div class="wrap sched-grid">
        <div class="sched-box">
          <div class="sec-tag">Horario</div>
          <div class="day-row" data-day="1"><span>Lunes – Viernes</span><span>${escapeHtml(st.hoursWeek)}</span></div>
          <div class="day-row" data-day="6"><span>Sábados</span><span>${escapeHtml(st.hoursSat)}</span></div>
          <div class="day-row" data-day="0"><span>Domingos</span><span>${escapeHtml(st.hoursSun)}</span></div>
        </div>
        <div class="sched-box" style="display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
          <div>
            <div class="sec-tag">Dónde Estamos</div>
            <strong style="font-size:16px; display:block; margin-bottom:4px;">${escapeHtml(st.address)}</strong>
            <span style="color:var(--muted); font-size:13px;">${escapeHtml(st.city)} · Tel: ${escapeHtml(st.phone || st.whatsapp)}</span>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(st.name + ' ' + st.address + ' ' + st.city)}" target="_blank" class="btn-sec" style="justify-content:center; width:100%;">
            📍 Abrir Ruta en Google Maps ↗
          </a>
        </div>
      </div>
    </section>` : ''}
  </main>
  <footer style="padding:20px 18px; text-align:center; font-size:12px; color:var(--muted); border-top:1px solid var(--border);">
    © ${new Date().getFullYear()} ${escapeHtml(st.name)} · ${escapeHtml(st.city)}
  </footer>
  ${st.modules.whatsappFloat ? `
  <a class="wa-float" href="https://wa.me/${fullWa}?text=${encodeURIComponent('Hola ' + st.name + ', quería consultar disponibilidad.')}" target="_blank">
    <span>💬 WhatsApp</span>
  </a>` : ''}
  <script>
    let chosenSlot = '12:00';
    function jumpSec(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
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
        jumpSec('accion');
      }
    }
    function sendSectorWhatsApp(kind) {
      const srv = document.getElementById('bk-service')?.value || '';
      const ext = document.getElementById('bk-extra')?.value || '';
      const cli = document.getElementById('bk-client')?.value || '';
      const ok = document.getElementById('bk-ok');
      if (ok) {
        ok.style.display = 'block';
        ok.textContent = '✓ Solicitud lista: ' + srv + (ext ? ' · ' + ext : '') + (cli ? ' (' + cli + ')' : '');
      }
    }
  <\/script>
</body>
</html>`;
}

// ==========================================================================
// VISUAL SECTOR SOLUTIONS SHOWCASE (Interactive Visual Demos on Landing Page!)
// ==========================================================================
function switchVisualSolution(solKey) {
  document.querySelectorAll('.sol-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-sol') === solKey);
  });
  document.querySelectorAll('.sol-stage-pane').forEach(pane => {
    pane.classList.toggle('hidden', pane.getAttribute('data-sol-pane') !== solKey);
  });
}

function demoPickChip(btn) {
  const group = btn.parentElement;
  if (!group) return;
  group.querySelectorAll('button').forEach(b => {
    b.classList.remove('bg-emerald-400', 'text-slate-950', 'border-emerald-400');
    b.classList.add('bg-white/5', 'text-slate-200', 'border-white/10');
  });
  btn.classList.remove('bg-white/5', 'text-slate-200', 'border-white/10');
  btn.classList.add('bg-emerald-400', 'text-slate-950', 'border-emerald-400');

  const feedback = btn.closest('.sol-stage-pane')?.querySelector('.js-sol-feedback');
  if (feedback) {
    feedback.textContent = '✓ Seleccionado: ' + btn.innerText.trim() + ' — Directo al WhatsApp del dueño';
    feedback.classList.remove('hidden');
  }
}

function jumpGeneratorWithSector(sectorKey) {
  selectStudioSector(sectorKey);
  const gen = document.getElementById('generador');
  if (gen) gen.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==========================================================================
// INTERACTIVE BEFORE / AFTER IMAGE SLIDERS (Mouse + Touch Drag)
// ==========================================================================
function initBeforeAfterSliders() {
  document.querySelectorAll('.ba-slider').forEach(slider => {
    let dragging = false;
    const setPos = (clientX) => {
      const rect = slider.getBoundingClientRect();
      if (!rect.width) return;
      const pct = Math.max(6, Math.min(94, ((clientX - rect.left) / rect.width) * 100));
      slider.style.setProperty('--pos', pct.toFixed(1) + '%');
    };
    slider.addEventListener('mousedown', (e) => { dragging = true; setPos(e.clientX); });
    window.addEventListener('mousemove', (e) => { if (dragging) setPos(e.clientX); });
    window.addEventListener('mouseup', () => { dragging = false; });

    slider.addEventListener('touchstart', (e) => {
      if (e.touches[0]) setPos(e.touches[0].clientX);
    }, { passive: true });
    slider.addEventListener('touchmove', (e) => {
      if (e.touches[0]) setPos(e.touches[0].clientX);
    }, { passive: true });
  });
}

// ==========================================================================
// VIP CUSTOM HIGH-TICKET PROJECT CONFIGURATOR MODAL (400€ – 900€+ Leads!)
// ==========================================================================
let vipState = {
  sector: 'Motos / Taller / Concesionario',
  extras: ['Diseño Exclusivo 100% A Medida', 'Catálogo / Reservas Avanzadas'],
  refSite: ''
};

function openVipCustomModal(preSector, refSiteName) {
  closeLiveClientModal();
  if (preSector) vipState.sector = preSector;
  vipState.refSite = refSiteName || '';

  const modal = document.getElementById('vip-custom-modal');
  const refBadge = document.getElementById('vip-ref-badge');
  const refText = document.getElementById('vip-ref-text');
  if (!modal) return;

  if (vipState.refSite && refBadge && refText) {
    refText.textContent = 'Inspirado en: ' + vipState.refSite;
    refBadge.classList.remove('hidden');
  } else if (refBadge) {
    refBadge.classList.add('hidden');
  }

  document.querySelectorAll('.vip-sec-btn').forEach(btn => {
    const on = btn.getAttribute('data-vsec') === vipState.sector;
    btn.className = on
      ? 'vip-sec-btn p-2.5 rounded-xl border border-amber-400 bg-amber-400/15 text-white font-bold text-xs text-left flex items-center gap-2'
      : 'vip-sec-btn p-2.5 rounded-xl border border-white/10 bg-slate-950 text-slate-300 font-semibold text-xs text-left flex items-center gap-2';
  });

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVipCustomModal() {
  const modal = document.getElementById('vip-custom-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function pickVipSector(btn, secLabel) {
  vipState.sector = secLabel;
  document.querySelectorAll('.vip-sec-btn').forEach(b => {
    b.className = b === btn
      ? 'vip-sec-btn p-2.5 rounded-xl border border-amber-400 bg-amber-400/15 text-white font-bold text-xs text-left flex items-center gap-2'
      : 'vip-sec-btn p-2.5 rounded-xl border border-white/10 bg-slate-950 text-slate-300 font-semibold text-xs text-left flex items-center gap-2';
  });
}

function toggleVipExtra(btn, label) {
  const idx = vipState.extras.indexOf(label);
  if (idx >= 0) vipState.extras.splice(idx, 1);
  else vipState.extras.push(label);
  const on = vipState.extras.includes(label);
  btn.className = on
    ? 'vip-ext-btn px-3 py-2 rounded-xl border border-emerald-400 bg-emerald-500/15 text-emerald-200 font-bold text-xs text-left flex items-center justify-between gap-2'
    : 'vip-ext-btn px-3 py-2 rounded-xl border border-white/10 bg-slate-950 text-slate-300 font-medium text-xs text-left flex items-center justify-between gap-2';
}

function sendVipProposalWhatsApp(e) {
  if (e) e.preventDefault();
  const biz = document.getElementById('vip-biz-name')?.value.trim() || 'Mi Negocio';
  const city = document.getElementById('vip-biz-city')?.value.trim() || '';
  const refLine = vipState.refSite ? `\n• Referencia que me gustó: ${vipState.refSite}` : '';
  const extrasLine = vipState.extras.length ? vipState.extras.join(', ') : 'Proyecto completo a medida';

  const msg = `Hola Fathi, quiero presupuesto para una *WEB ÉLITE A MEDIDA* (Proyecto Exclusivo):\n` +
    `• Negocio: *${biz}* ${city ? '(' + city + ')' : ''}\n` +
    `• Sector: ${vipState.sector}\n` +
    `• Funciones clave: ${extrasLine}${refLine}\n` +
    `¿Podemos ver una propuesta personalizada para mi local?`;

  window.open(`https://wa.me/${FATHI_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  closeVipCustomModal();
}

// ==========================================================================
// 50€ BASIC SELF-SERVE STUDIO LOGIC
// ==========================================================================
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
  if (!studioState.userEditedName) studioState.name = preset.defaultName;
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
        <span class="text-[11px] font-mono uppercase text-emerald-400 font-bold">Ítem #${idx + 1}</span>
        ${studioState.services.length > 1 ? `
          <button type="button" onclick="removeServiceItem(${idx})" class="text-xs text-rose-300 px-2 py-0.5 rounded bg-rose-500/15 font-semibold">Quitar</button>` : ''}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-2">
        <input type="text" value="${escapeHtml(srv.title)}" oninput="editServiceField(${idx}, 'title', this.value)"
          class="sm:col-span-8 desk-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/12 text-white focus:border-emerald-400 focus:outline-none" />
        <input type="text" value="${escapeHtml(srv.price)}" oninput="editServiceField(${idx}, 'price', this.value)"
          class="sm:col-span-4 desk-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/12 text-emerald-300 font-bold focus:border-emerald-400 focus:outline-none" />
      </div>
      <input type="text" value="${escapeHtml(srv.meta)}" oninput="editServiceField(${idx}, 'meta', this.value)"
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
  studioState.services.push({ title: 'Nuevo Servicio / Producto', meta: 'Atención directa', price: '20 €' });
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
  reader.onload = ev => {
    studioState.customHeroPhoto = ev.target.result;
    const status = document.getElementById('hero-photo-status');
    if (status) status.textContent = '✓ Foto cargada en portada';
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
    reader.onload = ev => {
      loaded.push(ev.target.result);
      done++;
      if (done === files.length) {
        studioState.customGallery = loaded;
        const status = document.getElementById('gallery-photo-status');
        if (status) status.textContent = `✓ ${loaded.length} foto(s) listas`;
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
  if (s1) s1.textContent = 'Foto automática del sector';
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
  { key: 'booking', label: 'Módulo Interactivo del Sector (Citas / Presupuesto / Mesa)' },
  { key: 'whatsappFloat', label: 'Botón Flotante de WhatsApp Directo' },
  { key: 'services', label: 'Listado de Servicios / Carta con Precios' },
  { key: 'gallery', label: 'Galería Fotográfica Visual' },
  { key: 'scheduleMap', label: 'Horario + Ruta Google Maps' }
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
    document.getElementById(`studio-step-${i}`)?.classList.toggle('hidden', i !== stepNum);
    document.getElementById(`studio-tab-${i}`)?.classList.toggle('active', i === stepNum);
  }
}

function syncInputsFromState() {
  const map = {
    'inp-name': studioState.name,
    'inp-custom-sector': studioState.customSectorLabel,
    'inp-years': studioState.yearsExp,
    'inp-tagline': studioState.tagline,
    'inp-story': studioState.story,
    'inp-city': studioState.city,
    'inp-address': studioState.address,
    'inp-whatsapp': studioState.whatsapp,
    'inp-phone': studioState.phone,
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
  const v = id => {
    const el = document.getElementById(id);
    return el ? el.value : null;
  };
  if (v('inp-name') !== null) studioState.name = v('inp-name').trim() || 'Mi Negocio';
  if (v('inp-custom-sector') !== null) studioState.customSectorLabel = v('inp-custom-sector').trim() || 'Negocio Local';
  if (v('inp-years') !== null) studioState.yearsExp = v('inp-years').trim() || 'Atención Directa';
  if (v('inp-tagline') !== null) studioState.tagline = v('inp-tagline').trim() || 'Calidad profesional.';
  if (v('inp-story') !== null) studioState.story = v('inp-story').trim() || 'Contacto directo.';
  if (v('inp-city') !== null) studioState.city = v('inp-city').trim() || 'Madrid';
  if (v('inp-address') !== null) studioState.address = v('inp-address').trim() || 'Calle Principal 12';
  if (v('inp-whatsapp') !== null) studioState.whatsapp = v('inp-whatsapp').trim() || '612 890 345';
  if (v('inp-phone') !== null) studioState.phone = v('inp-phone').trim();
  if (v('inp-hours-week') !== null) studioState.hoursWeek = v('inp-hours-week').trim() || '09:30 – 20:00';
  if (v('inp-hours-sat') !== null) studioState.hoursSat = v('inp-hours-sat').trim() || '09:30 – 14:30';
  if (v('inp-hours-sun') !== null) studioState.hoursSun = v('inp-hours-sun').trim() || 'Cerrado';
}

function schedulePreviewRefresh() {
  if (compileTimer) clearTimeout(compileTimer);
  compileTimer = setTimeout(() => {
    readInputsIntoState();
    updateStudioPreview(true);
  }, 180);
}

function getLiveShareableSiteUrl() {
  const slug = slugifyName(studioState.name);
  return `/sitio/?negocio=${encodeURIComponent(slug)}&d=${encodeSharePayload(studioState)}`;
}

function getLiveAdminPanelUrl() {
  const slug = slugifyName(studioState.name);
  return `/admin/?negocio=${encodeURIComponent(slug)}&d=${encodeSharePayload(studioState)}`;
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
}

let mobileInlineUnlocked = false;
function toggleInlineIframeTouch() {
  mobileInlineUnlocked = !mobileInlineUnlocked;
  const guard = document.getElementById('iframe-touch-guard');
  const btn = document.getElementById('btn-unlock-inline-touch');
  if (!guard || !btn) return;
  if (mobileInlineUnlocked) {
    guard.classList.remove('locked-scroll');
    btn.innerHTML = '<i class="ph-bold ph-lock-simple"></i><span>Fijar Scroll</span>';
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
      ? 'px-3 py-1 rounded-lg text-xs font-bold bg-white text-slate-950'
      : 'px-3 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white';
    btnDesk.className = mode === 'desktop'
      ? 'px-3 py-1 rounded-lg text-xs font-bold bg-white text-slate-950'
      : 'px-3 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white';
  }
}

function openFullscreenGeneratedDemo() {
  readInputsIntoState();
  saveStudioState();
  const modal = document.getElementById('fullscreen-demo-modal');
  const iframe = document.getElementById('fullscreen-demo-iframe');
  if (!modal || !iframe) return;
  iframe.srcdoc = compileClientWebsiteHTML(studioState);
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeFullscreenGeneratedDemo() {
  document.getElementById('fullscreen-demo-modal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function tickCountdownTimers() {
  const remMs = Math.max(0, (studioState.expiresAt || (Date.now() + 86000000)) - Date.now());
  const totalSec = Math.floor(remMs / 1000);
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  document.querySelectorAll('.js-countdown-24h').forEach(el => { el.textContent = `${h}:${m}:${s}`; });
}

function pickPayMethod(m) {
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
          ⚡ PLAN BÁSICO AUTOMÁTICO · 50 €
        </span>
        <button type="button" onclick="closeCheckoutModal()" class="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center">✕</button>
      </div>

      <h3 class="font-display font-extrabold text-xl text-white mb-1">
        Activar web básica de <span class="text-emerald-400">${escapeHtml(studioState.name)}</span>
      </h3>

      <div class="p-3.5 rounded-2xl bg-slate-950 border border-white/10 space-y-2 my-3 text-xs">
        <div class="flex justify-between items-center gap-2">
          <span class="text-slate-400">Enlace público:</span>
          <strong class="text-emerald-300 font-mono truncate">miweblocal.com/${escapeHtml(slug)}</strong>
        </div>
        <div class="flex justify-between items-center gap-2">
          <span class="text-slate-400">Autogestión básica:</span>
          <strong class="text-amber-300 font-mono truncate">miweblocal.com/${escapeHtml(slug)}/admin</strong>
        </div>
        <div class="flex justify-between items-center pt-2 border-t border-white/10">
          <span class="text-white font-bold">Pago único total:</span>
          <strong class="text-xl font-display font-extrabold text-white">50 €</strong>
        </div>
      </div>

      <div class="space-y-3 mb-4">
        <div>
          <label class="block text-[11px] font-mono uppercase text-slate-300 font-semibold mb-1">Tu Email (para enviarte enlaces y PIN)</label>
          <input type="email" id="buyer-email" value="${escapeHtml(studioState.buyerEmail || '')}" placeholder="ejemplo@tunegocio.com"
            class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white focus:border-emerald-400 focus:outline-none" />
          <div id="buyer-email-err" class="hidden text-rose-400 text-xs font-semibold mt-1">Introduce un email válido con @</div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <button type="button" data-pm="card" onclick="pickPayMethod('card')" class="pay-method-btn py-2.5 px-3 rounded-xl border border-emerald-400 bg-emerald-500/15 text-white font-bold text-xs text-center">Tarjeta</button>
          <button type="button" data-pm="bizum" onclick="pickPayMethod('bizum')" class="pay-method-btn py-2.5 px-3 rounded-xl border border-white/12 bg-slate-950 text-slate-300 font-semibold text-xs text-center">Bizum</button>
          <button type="button" data-pm="apple" onclick="pickPayMethod('apple')" class="pay-method-btn py-2.5 px-3 rounded-xl border border-white/12 bg-slate-950 text-slate-300 font-semibold text-xs text-center">Apple / GPay</button>
        </div>
      </div>

      <button type="button" onclick="completeAutomatedDelivery()"
        class="w-full py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-display font-extrabold text-sm shadow-lg mb-2.5">
        Desbloquear Web Básica · 50 € →
      </button>

      <button type="button" onclick="closeCheckoutModal(); openVipCustomModal('${escapeHtml(studioState.sector)}', '')"
        class="w-full py-2.5 px-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
        💎 ¿Prefieres una Web Élite A Medida hecha por nosotros? Consultar
      </button>
    </div>
  `;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function completeAutomatedDelivery() {
  const emailEl = document.getElementById('buyer-email');
  const errEl = document.getElementById('buyer-email-err');
  const email = emailEl ? emailEl.value.trim() : '';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (errEl) errEl.classList.remove('hidden');
    emailEl?.focus();
    return;
  }

  studioState.buyerEmail = email;
  studioState.unlocked = true;
  if (!studioState.adminPin) studioState.adminPin = 'PRO-' + String(Math.floor(1000 + Math.random() * 9000));
  saveStudioState();

  const siteUrl = getLiveShareableSiteUrl();
  const adminUrl = getLiveAdminPanelUrl();
  const content = document.getElementById('checkout-modal-body');
  if (!content) return;

  content.innerHTML = `
    <div>
      <div class="flex items-center justify-between mb-3">
        <span class="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-bold">
          ✓ WEB ACTIVA + PANEL /ADMIN
        </span>
        <button type="button" onclick="closeCheckoutModal()" class="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center">✕</button>
      </div>
      <h3 class="font-display font-extrabold text-xl text-white mb-2">¡Lista, ${escapeHtml(studioState.name)}!</h3>
      <div class="p-4 rounded-2xl bg-slate-950 border border-emerald-500/35 space-y-2.5 text-xs">
        <div class="flex items-center justify-between">
          <span class="text-slate-400">PIN Propietario:</span>
          <strong class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-sm">${escapeHtml(studioState.adminPin)}</strong>
        </div>
        <a href="${siteUrl}" target="_blank" class="btn-tap py-3 px-4 rounded-xl bg-emerald-400 text-slate-950 font-display font-extrabold text-center block">
          1. Abrir Mi Web Pública ↗
        </a>
        <a href="${adminUrl}" target="_blank" class="btn-tap py-3 px-4 rounded-xl bg-amber-400 text-slate-950 font-display font-extrabold text-center block">
          2. Entrar a Mi Panel (/admin) ↗
        </a>
      </div>
    </div>
  `;
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function openLiveAdminPreview() {
  readInputsIntoState();
  saveStudioState();
  window.open(getLiveAdminPanelUrl(), '_blank');
}

// ==========================================================================
// 8 REAL ELITE CUSTOM PROJECTS PORTFOLIO (High-Ticket Showcase + Mouse Drag)
// ==========================================================================
const REAL_PORTFOLIO = [
  {
    id: 'orero', category: 'motor',
    name: 'Orero Motorcycles', city: 'Orihuela',
    badge: 'ÉLITE A MEDIDA · MOTOR',
    visualTags: ['18 Motos en Stock', 'Sonido 310 CV', 'Cita Taller'],
    screenshot: 'assets/portfolio/motos_orero.jpg',
    route: '/motorcycle-store-orero/'
  },
  {
    id: 'elite', category: 'reformas',
    name: 'Reformas Elite Gold', city: 'Guardamar',
    badge: 'ÉLITE A MEDIDA · OBRAS',
    visualTags: ['Villas de Lujo', 'Presupuesto WhatsApp', '5,0 ★ Google'],
    screenshot: 'assets/portfolio/reformas_elite.jpg',
    route: '/reformas-elite-gold-guardamar/'
  },
  {
    id: 'autolomas', category: 'motor',
    name: 'Auto Lomas Chapa', city: 'Torrevieja',
    badge: 'ÉLITE A MEDIDA · TALLER',
    visualTags: ['Slider Antes/Después', 'Foto Daño WhatsApp', 'Cabina Horno'],
    screenshot: 'assets/portfolio/autochrome.jpg',
    route: '/autochrome-torrevieja/'
  },
  {
    id: 'vimacchiata', category: 'hosteleria',
    name: 'La Vimacchiata Brunch', city: 'Orihuela',
    badge: 'ÉLITE A MEDIDA · BRUNCH',
    visualTags: ['Carta Interactiva', 'Reserva Terraza', 'Specialty Coffee'],
    screenshot: 'assets/portfolio/vimacchiata_brunch.jpg',
    route: '/orihuela/la-vimacchiata-brunch/'
  },
  {
    id: 'jamal', category: 'barberia',
    name: 'Barbería Jamal', city: 'Cox',
    badge: 'ÉLITE A MEDIDA · BARBER',
    visualTags: ['Agenda 30 seg', 'Galería Cortes', '+45 Citas/sem'],
    screenshot: 'assets/portfolio/barberia_jamal.jpg',
    route: '/cox/barberia-jamal/'
  },
  {
    id: 'artedent', category: 'salud',
    name: 'Clínica Dental Artedent', city: 'Orihuela',
    badge: 'ÉLITE A MEDIDA · SALUD',
    visualTags: ['Cita Médica Online', 'Especialidades', 'Confianza Clínica'],
    screenshot: 'assets/portfolio/clinica_artedent.jpg',
    route: '/orihuela/clinica-dental-artedent/'
  },
  {
    id: 'lebano', category: 'hosteleria',
    name: 'El Lebano Restaurante', city: 'Alicante',
    badge: 'ÉLITE A MEDIDA · CARTA',
    visualTags: ['Reserva de Mesa', 'Carta Visual', '0% Comisiones'],
    screenshot: 'assets/portfolio/el_lebano.jpg',
    route: '/alicante/el-lebano-cocina-libanesa/'
  },
  {
    id: 'gabi', category: 'barberia',
    name: 'Gabi Tattoo Studio', city: 'Orihuela',
    badge: 'ÉLITE A MEDIDA · TATTOO',
    visualTags: ['Cotizador Tatuaje', 'Portafolio Piel', 'Cita Privada'],
    screenshot: 'assets/portfolio/gabi_tattoo.jpg',
    route: '/orihuela/gabi-tattoo-studio/'
  }
];

function renderPortfolioCards(filterCat = 'all') {
  const grid = document.getElementById('portfolio-cards-container');
  if (!grid) return;

  document.querySelectorAll('.pf-filter-btn').forEach(btn => {
    const active = btn.getAttribute('data-cat') === filterCat;
    btn.className = active
      ? 'pf-filter-btn px-4 py-2 rounded-full text-xs font-extrabold bg-amber-400 text-slate-950 whitespace-nowrap'
      : 'pf-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10 hover:text-white whitespace-nowrap';
  });

  const items = filterCat === 'all' ? REAL_PORTFOLIO : REAL_PORTFOLIO.filter(p => p.category === filterCat);

  grid.innerHTML = items.map(item => `
    <article class="pf-card pf-slide w-[80vw] max-w-[300px] rounded-3xl bg-[#10141F] border border-white/12 p-4 flex flex-col justify-between transition-all duration-300">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/35 text-amber-300 text-[10px] font-mono font-extrabold">
            💎 ${escapeHtml(item.badge)}
          </span>
          <span class="text-[11px] text-slate-400 truncate">${escapeHtml(item.city)}</span>
        </div>

        <div class="cursor-pointer" onclick="openLiveClientModal('${escapeHtml(item.route)}', '${escapeHtml(item.name)}')">
          <div class="iphone-mockup">
            <div class="iphone-inner">
              <div class="iphone-island"></div>
              <img src="${escapeHtml(item.screenshot)}" alt="${escapeHtml(item.name)}" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 pt-3.5 border-t border-white/10 space-y-2.5">
        <h3 class="font-display font-extrabold text-base text-white truncate">${escapeHtml(item.name)}</h3>
        <div class="flex flex-wrap gap-1">
          ${item.visualTags.map(t => `<span class="px-2 py-0.5 rounded-md bg-white/[0.06] text-[10.5px] font-semibold text-emerald-300">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="grid grid-cols-2 gap-1.5 pt-1">
          <button type="button" onclick="openLiveClientModal('${escapeHtml(item.route)}', '${escapeHtml(item.name)}')"
            class="py-2.5 px-2 rounded-xl bg-white text-slate-950 font-display font-extrabold text-xs whitespace-nowrap">
            Ver en Vivo
          </button>
          <button type="button" onclick="openVipCustomModal('', '${escapeHtml(item.name)}')"
            class="py-2.5 px-2 rounded-xl bg-amber-400/15 border border-amber-400/35 text-amber-300 font-display font-bold text-xs whitespace-nowrap">
            Pedir Igual
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function scrollPortfolioCarousel(dir) {
  const el = document.getElementById('portfolio-cards-container');
  if (el) el.scrollBy({ left: dir * 320, behavior: 'smooth' });
}

function initMouseDragCarousels() {
  document.querySelectorAll('.pf-carousel').forEach(box => {
    let isDown = false, startX = 0, scrollL = 0;
    box.addEventListener('mousedown', e => {
      if (window.innerWidth >= 1100) return;
      isDown = true;
      startX = e.pageX - box.offsetLeft;
      scrollL = box.scrollLeft;
    });
    window.addEventListener('mouseup', () => { isDown = false; });
    box.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - box.offsetLeft;
      box.scrollLeft = scrollL - (x - startX) * 1.4;
    });
  });
}

function cleanPortfolioIframe(iframe) {
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
  setTimeout(hideExtras, 650);
  setTimeout(hideExtras, 1700);
}

let currentModalClientName = '';
function openLiveClientModal(route, name) {
  currentModalClientName = name || 'Proyecto Élite';
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

function requestLikeCurrentModalClient() {
  openVipCustomModal('', currentModalClientName);
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

// ==========================================================================
// INITIALIZATION
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('generador')) return;

  syncInputsFromState();
  renderSectorSelector();
  renderServicesEditor();
  renderThemeSelector();
  renderModulesSelector();
  switchStudioStep(1);
  setPreviewDevice(window.innerWidth >= 1024 ? 'desktop' : 'mobile');
  updateStudioPreview(true);
  renderPortfolioCards('all');

  initBeforeAfterSliders();
  initMouseDragCarousels();

  tickCountdownTimers();
  setInterval(tickCountdownTimers, 1000);

  // Scroll-Reveal Observer
  if ('IntersectionObserver' in window) {
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          revObs.unobserve(en.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal-up').forEach(el => revObs.observe(el));

    // Smart Bottom Bar visibility
    const heroEl = document.getElementById('hero-section');
    const genEl = document.getElementById('generador');
    const smartBar = document.getElementById('smart-bottom-bar');
    if (heroEl && genEl && smartBar) {
      let heroVis = true, genVis = false;
      const syncBar = () => smartBar.classList.toggle('bar-hidden', heroVis || genVis);
      new IntersectionObserver(e => { heroVis = e[0].isIntersecting; syncBar(); }, { threshold: 0.1 }).observe(heroEl);
      new IntersectionObserver(e => { genVis = e[0].isIntersecting; syncBar(); }, { threshold: 0.05 }).observe(genEl);
    }
  }
});
