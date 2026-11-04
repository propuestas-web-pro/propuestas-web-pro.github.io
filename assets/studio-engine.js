/* ==========================================================================
   MI WEB LOCAL — COMPLETE AUTOMATED PLATFORM & BESPOKE WEBSITE COMPILER
   ========================================================================== */

// 1. HERO TRANSFORMATION WORLDS (Before Wireframe -> 4 Radial Color Worlds)
const HERO_WORLDS = [
  {
    id: 'copper',
    label: 'Barbería',
    bg: 'radial-gradient(circle at 50% 28%, rgba(212, 145, 84, 0.34) 0%, rgba(46, 28, 14, 0.45) 42%, #07080C 82%)',
    orb: '#D49154',
    accent: '#E09F5A',
    accentText: '#09090B',
    brand: 'Barbería Martínez',
    city: 'Madrid · 12 años',
    badge: 'CON Y SIN CITA PREVIA · RESERVA EN 15s',
    title: 'Corte clásico y degradado a navaja.',
    desc: 'Elige tu barbero, consulta precios claros y reserva hueco desde el móvil sin esperar llamadas.',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85',
    itemTitle: 'Corte Degradado + Ritual Barba',
    itemSub: '45 min · Toalla caliente',
    itemPrice: '24 €',
    floatStat: '+38 citas online esta semana'
  },
  {
    id: 'motor',
    label: 'Motor',
    bg: 'radial-gradient(circle at 50% 28%, rgba(225, 29, 72, 0.34) 0%, rgba(69, 10, 25, 0.45) 42%, #07080C 82%)',
    orb: '#E11D48',
    accent: '#F43F5E',
    accentText: '#FFFFFF',
    brand: 'Orero Motor Club',
    city: 'Orihuela · Taller Oficial',
    badge: 'STOCK EN VIVO · CITA DE TALLER 24/7',
    title: 'Motos revisadas en 60 puntos y taller pro.',
    desc: 'Explora vehículos disponibles con fotos reales o pide cita para revisión e ITV en dos toques.',
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85',
    itemTitle: 'Revisión Oficial + Diagnosis Pro',
    itemSub: 'Entrega en el mismo día',
    itemPrice: '89 €',
    floatStat: '18 motos en catálogo activo'
  },
  {
    id: 'burger',
    label: 'Hostelería',
    bg: 'radial-gradient(circle at 50% 28%, rgba(234, 88, 12, 0.36) 0%, rgba(67, 20, 7, 0.48) 42%, #07080C 82%)',
    orb: '#EA580C',
    accent: '#FB923C',
    accentText: '#09090B',
    brand: 'Fuego Smash & Brasa',
    city: 'Alicante · Carta Digital',
    badge: 'SIN COMISIONES · MESA Y RECOGIDA',
    title: 'Doble Smash madurada al fuego de leña.',
    desc: 'Carta visual con alérgenos, reserva de mesa en terraza al instante y pedidos directos por WhatsApp.',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
    itemTitle: 'Doble Truffle Smash + Patatas',
    itemSub: 'Top Ventas · Carne Dry-Aged',
    itemPrice: '14,90 €',
    floatStat: '+64 mesas reservadas el finde'
  },
  {
    id: 'clinica',
    label: 'Clínica',
    bg: 'radial-gradient(circle at 50% 28%, rgba(16, 185, 129, 0.30) 0%, rgba(6, 78, 59, 0.42) 42%, #07080C 82%)',
    orb: '#10B981',
    accent: '#34D399',
    accentText: '#052E16',
    brand: 'Clínica Dental Balance',
    city: 'Murcia · 1ª Visita Gratis',
    badge: 'ESPECIALISTAS COLEGIADOS · CITA ONLINE',
    title: 'Estética dental e implantes sin dolor.',
    desc: 'Conoce al equipo médico, resuelve tus dudas y agenda tu valoración gratuita por WhatsApp o web.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85',
    itemTitle: 'Estudio Dental 3D + Limpieza',
    itemSub: 'Valoración inicial completa',
    itemPrice: 'Gratis',
    floatStat: '4,9 ★ en 140 reseñas reales'
  }
];

let heroMode = 'after';
let currentHeroWorld = 0;
let heroAutoTimer = null;

function setHeroMode(mode) {
  heroMode = mode;
  const shell = document.getElementById('hero-card-shell');
  const btnBefore = document.getElementById('btn-mode-before');
  const btnAfter = document.getElementById('btn-mode-after');
  const worldBar = document.getElementById('hero-world-pills');
  const stage = document.getElementById('hero-stage');

  if (!shell || !stage) return;

  if (mode === 'before') {
    shell.classList.add('is-before');
    stage.style.background = 'radial-gradient(circle at 50% 25%, rgba(100,116,139,0.18) 0%, #07080C 75%)';
    if (btnBefore) btnBefore.className = 'px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800 text-white border border-slate-600 whitespace-nowrap';
    if (btnAfter) btnAfter.className = 'px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white whitespace-nowrap';
    if (worldBar) worldBar.style.opacity = '0.45';
  } else {
    shell.classList.remove('is-before');
    if (btnBefore) btnBefore.className = 'px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white whitespace-nowrap';
    if (btnAfter) btnAfter.className = 'px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-400 text-slate-950 shadow-sm whitespace-nowrap';
    if (worldBar) worldBar.style.opacity = '1';
    applyHeroWorld(currentHeroWorld);
  }
}

function applyHeroWorld(idx) {
  currentHeroWorld = idx;
  if (heroMode === 'before') {
    heroMode = 'after';
    const shell = document.getElementById('hero-card-shell');
    if (shell) shell.classList.remove('is-before');
    const btnBefore = document.getElementById('btn-mode-before');
    const btnAfter = document.getElementById('btn-mode-after');
    if (btnBefore) btnBefore.className = 'px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white whitespace-nowrap';
    if (btnAfter) btnAfter.className = 'px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-400 text-slate-950 shadow-sm whitespace-nowrap';
    const worldBar = document.getElementById('hero-world-pills');
    if (worldBar) worldBar.style.opacity = '1';
  }

  const w = HERO_WORLDS[idx];
  const stage = document.getElementById('hero-stage');
  if (stage) stage.style.background = w.bg;

  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('hw-brand', w.brand);
  setTxt('hw-city', w.city);
  setTxt('hw-badge', w.badge);
  setTxt('hw-title', w.title);
  setTxt('hw-desc', w.desc);
  setTxt('hw-item-title', w.itemTitle);
  setTxt('hw-item-sub', w.itemSub);
  setTxt('hw-item-price', w.itemPrice);
  setTxt('hw-float-stat', w.floatStat);

  const img = document.getElementById('hw-img');
  if (img) img.src = w.img;

  const cta = document.getElementById('hw-cta-pill');
  if (cta) {
    cta.style.backgroundColor = w.accent;
    cta.style.color = w.accentText;
  }

  const priceEl = document.getElementById('hw-item-price');
  if (priceEl) priceEl.style.color = w.accent;

  document.querySelectorAll('.hero-world-btn').forEach((btn, i) => {
    if (i === idx) {
      btn.className = 'hero-world-btn px-3 py-1.5 rounded-full text-xs font-bold bg-white text-slate-950 shadow whitespace-nowrap';
    } else {
      btn.className = 'hero-world-btn px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-white/5 border border-white/10 whitespace-nowrap';
    }
  });
}

function replayHeroSequence() {
  if (heroAutoTimer) clearInterval(heroAutoTimer);
  setHeroMode('before');
  setTimeout(() => {
    setHeroMode('after');
    applyHeroWorld(0);
  }, 1150);
}

// ==========================================================================
// 2. COMPLETE UNRESTRICTED WEBSITE GENERATOR CATALOG (13 SECTORS + CUSTOM)
// ==========================================================================
const SECTOR_PRESETS = {
  barberia: {
    label: 'Barbería',
    icon: 'ph-scissors',
    defaultTheme: 'copper',
    defaultName: 'Barbería Martínez',
    yearsExp: '12 años en el barrio',
    tagline: 'Corte clásico, degradado al milímetro y afeitado tradicional a navaja.',
    story: 'Llevamos más de 12 años cuidando la imagen de nuestros clientes con trato cercano, puntualidad suiza y productos de primera línea. Ven con cita reservada o consulta hueco en el día.',
    heroImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Corte Clásico o Skin Fade', meta: '35 min · Lavado y peinado incluido', price: '16 €' },
      { title: 'Ritual Completo: Corte + Barba a Navaja', meta: '50 min · Toalla caliente y aceites esenciales', price: '24 €' },
      { title: 'Arreglo y Perfilado de Barba', meta: '25 min · Hidratación profunda', price: '12 €' },
      { title: 'Corte Infantil / Joven', meta: '30 min · Trato paciente y cuidado', price: '13 €' }
    ]
  },
  estetica: {
    label: 'Peluquería / Estética',
    icon: 'ph-sparkle',
    defaultTheme: 'cream',
    defaultName: 'Atelier Lumière Estética',
    yearsExp: '9 años de experiencia',
    tagline: 'Coloración orgánica, manicura rusa y rituales faciales de autor.',
    story: 'Un espacio de calma diseñado para realzar tu belleza natural con diagnóstico personalizado y firmas de alta cosmética.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Balayage Orgánico + Matiz + Brushing', meta: '120 min · Diagnóstico capilar previo', price: '78 €' },
      { title: 'Manicura Rusa Nivelación Semipermanente', meta: '60 min · Acabado ultra limpio', price: '28 €' },
      { title: 'Higiene Facial Hydraglow Vitaminas', meta: '55 min · Luminosidad inmediata', price: '49 €' },
      { title: 'Laminado de Cejas + Lifting de Pestañas', meta: '50 min · Mirada definida', price: '42 €' }
    ]
  },
  taller: {
    label: 'Taller / Detailing',
    icon: 'ph-wrench',
    defaultTheme: 'crimson',
    defaultName: 'Talleres MotorPro',
    yearsExp: '18 años en automoción',
    tagline: 'Mecánica multimarca, diagnosis electrónica y pre-ITV sin sorpresas.',
    story: 'Presupuesto cerrado antes de tocar tu vehículo, recambios originales y entrega puntual para que no te quedes sin coche.',
    heroImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Revisión Completa + Aceite Sintético y Filtros', meta: '60 min · Sello de garantía oficial', price: '95 €' },
      { title: 'Diagnosis Computerizada + Revisión Pre-ITV', meta: '45 min · Informe impreso de 40 puntos', price: '39 €' },
      { title: 'Carga Aire Acondicionado + Detección Fugas', meta: '40 min · Gas homologado', price: '59 €' },
      { title: 'Pulido de Carrocería Espejo + Tratamiento Cerámico', meta: '1 día · Brillo garantizado 2 años', price: '240 €' }
    ]
  },
  motos: {
    label: 'Concesionario Motos/Coches',
    icon: 'ph-motorcycle',
    defaultTheme: 'crimson',
    defaultName: 'Orero Motor Store',
    yearsExp: 'Desde 2015',
    tagline: 'Motos nuevas y de ocasión revisadas en 60 puntos con garantía real.',
    story: 'Exposición permanente, financiación a medida, boutique de equipamiento técnico y servicio técnico oficial propio.',
    heroImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Naked 700cc ABS · Año 2024 (1 año garantía)', meta: '6.400 km · Financiación desde 119 €/mes', price: '6.890 €' },
      { title: 'Scooter Urbano 125cc A1/B Nuevo a Estrenar', meta: 'Matriculación y casco de regalo incluidos', price: '3.290 €' },
      { title: 'Mantenimiento Oficial y Cambio de Neumáticos', meta: 'Cita rápida sin dejar la moto días parada', price: 'Desde 65 €' },
      { title: 'Tasación de Tu Moto Actual como Parte de Pago', meta: 'Valoración presencial en 15 minutos', price: 'Gratis' }
    ]
  },
  restaurante: {
    label: 'Restaurante / Burger',
    icon: 'ph-hamburger',
    defaultTheme: 'copper',
    defaultName: 'La Brasa Smash Club',
    yearsExp: 'Cocina de fuego real',
    tagline: 'Carnes maduradas a la brasa y burgers artesanas hechas al momento.',
    story: 'Seleccionamos carne nacional picada a diario, pan brioche horneado cada mañana y brasas de encina. Reserva mesa en salón o terraza sin esperas.',
    heroImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Doble Truffle Smash Burger Dry-Aged', meta: 'Doble cheddar inglés, mayo trufada y patatas caseras', price: '14,90 €' },
      { title: 'Costillar Ibérico Glaseado a Baja Temperatura', meta: 'Ración completa para compartir · 12h de cocción', price: '22,50 €' },
      { title: 'Chuletón de Vaca Vieja a la Piedra (por kg)', meta: '45 días de maduración + pimientos del padrón', price: '48,00 €' },
      { title: 'Tarta de Queso Cremosa al Horno', meta: 'Receta casera diaria con base de galleta lotus', price: '6,50 €' }
    ]
  },
  cafeteria: {
    label: 'Cafetería / Brunch',
    icon: 'ph-coffee',
    defaultTheme: 'cream',
    defaultName: 'La Vimacchiata Brunch',
    yearsExp: 'Tostadores de especialidad',
    tagline: 'El arte de desayunar sin prisa: café 100% arábica y masa madre.',
    story: 'Café de especialidad recién molido, repostería artesana hecha en obrador propio y una terraza soleada en pleno centro.',
    heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Combo Brunch Completo para 1 Persona', meta: 'Café especialidad + Zumo natural + Tosta Benedicto + Bowl', price: '15,90 €' },
      { title: 'Tosta Hogaza Masa Madre Aguacate y Huevo Poché', meta: 'Con semillas tostadas y AOVE virgen extra', price: '7,80 €' },
      { title: 'Flat White / Iced Pistachio Latte', meta: 'Doble shot arábica de origen · Leche fresca o avena', price: '3,60 €' },
      { title: 'Tortitas Esponjosas con Frutos Rojos y Mascarpone', meta: 'Hechas al momento', price: '8,20 €' }
    ]
  },
  pizzeria: {
    label: 'Pizzería / Kebab',
    icon: 'ph-pizza',
    defaultTheme: 'crimson',
    defaultName: 'Forno Napolitano & Grill',
    yearsExp: 'Receta artesana diaria',
    tagline: 'Masa fermentada 72 horas y pedidos rápidos para recoger o domicilio.',
    story: 'Haz tu pedido directo por WhatsApp sin comisiones de apps externas y recógelo recién salido del horno a la hora exacta.',
    heroImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Pizza Diavola Trufada en Horno de Piedra', meta: 'Mozzarella fior di latte, spianata picante y miel', price: '12,90 €' },
      { title: 'Menú Dürüm / Kebab XL Artesano + Patatas + Bebida', meta: 'Pan recién horneado y salsas caseras', price: '8,90 €' },
      { title: 'Oferta Pareja: 2 Pizzas Medianas + Entrante', meta: 'Para recoger en local o envío directo', price: '22,50 €' },
      { title: 'Calzone Relleno de 4 Quesos Italianos', meta: 'Horneado al momento', price: '11,50 €' }
    ]
  },
  reformas: {
    label: 'Reformas / Obras',
    icon: 'ph-house-line',
    defaultTheme: 'gold',
    defaultName: 'Reformas Integrales Élite',
    yearsExp: 'Más de 180 obras entregadas',
    tagline: 'Transformamos viviendas, cocinas y locales con plazo cerrado por contrato.',
    story: 'Equipo propio de albañilería, fontanería, electricidad e interiorismo. Sin retrasos ni sobrecostes imprevistos.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Visita Técnica + Medición y Presupuesto Detallado', meta: 'Respuesta en menos de 48 horas sin compromiso', price: 'Gratis' },
      { title: 'Cambio de Bañera por Plato de Ducha Antideslizante', meta: 'Obra limpia terminada en 24-48 horas mampara incluida', price: 'Desde 1.190 €' },
      { title: 'Reforma Integral de Cocina con Diseño 3D Previo', meta: 'Mobiliario, encimera porcelánica e instalaciones', price: 'A medida' },
      { title: 'Reforma Completa de Vivienda Llave en Mano', meta: 'Coordinación integral de gremios y garantía escrita', price: 'Presupuesto' }
    ]
  },
  clinica: {
    label: 'Clínica / Salud',
    icon: 'ph-heartbeat',
    defaultTheme: 'emerald',
    defaultName: 'Clínica Salud & Sonrisa',
    yearsExp: 'Centro sanitario homologado',
    tagline: 'Odontología avanzada, fisioterapia y atención personalizada sin esperas.',
    story: 'Tecnología de diagnóstico digital y un equipo humano cercano para cuidar de tu salud y la de tu familia con total confianza.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Primera Consulta + Diagnóstico Digital Completo', meta: '40 min · Plan de tratamiento transparente', price: 'Gratis' },
      { title: 'Sesión de Fisioterapia Manual y Readaptación', meta: '50 min · Tratamiento individual en box privado', price: '38 €' },
      { title: 'Higiene Dental Avanzada con Ultrasonidos', meta: '45 min · Revisión completa incluida', price: '45 €' },
      { title: 'Blanqueamiento Dental Clínico LED', meta: 'Resultados visibles desde la primera sesión', price: '190 €' }
    ]
  },
  tattoo: {
    label: 'Estudio Tattoo',
    icon: 'ph-pen-nib',
    defaultTheme: 'copper',
    defaultName: 'Gabi Tattoo Studio',
    yearsExp: 'Arte en piel a medida',
    tagline: 'Cada pieza se diseña en exclusiva sobre tu anatomía con precisión absoluta.',
    story: 'Estudio privado homologado con cabinas individuales, material 100% desechable y especialistas en realismo, micro-realismo y línea fina.',
    heroImage: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1590246814883-57c511e7691c?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Tatuaje Fine Line / Minimalista', meta: 'Diseño fino y delicado · Material estéril incluido', price: 'Desde 60 €' },
      { title: 'Pieza Mediana de Autor (10–18 cm)', meta: 'Boceto digital previo personalizado incluido', price: 'Desde 150 €' },
      { title: 'Sesión Completa Realismo / Brazo o Espalda', meta: 'Jornada exclusiva con artista residente', price: 'Consultar' },
      { title: 'Asesoramiento Presencial y Diseño de Proyecto', meta: '20 min en estudio · Se descuenta de la pieza', price: 'Gratis' }
    ]
  },
  urgencias: {
    label: 'Cerrajero / 24h',
    icon: 'ph-key',
    defaultTheme: 'gold',
    defaultName: 'Cerrajería y Urgencias 24h',
    yearsExp: 'Llegamos en 20 minutos',
    tagline: 'Apertura de puertas sin romper, cambio de bombines antibumping y urgencias.',
    story: 'Técnicos propios de tu ciudad sin intermediarios abusivos. Te damos el precio exacto por teléfono o WhatsApp antes de desplazarnos.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Apertura Limpia de Puerta (Llaves puestas o perdidas)', meta: 'Llegada urgente en 20 min · Sin dañar la puerta', price: 'Desde 59 €' },
      { title: 'Instalación Bombín Alta Seguridad Antibumping', meta: 'Incluye 5 llaves incopiables y escudo protector', price: '125 €' },
      { title: 'Reparación de Persianas Metálicas de Locales', meta: 'Motores, cierres y ejes en el mismo día', price: 'Presupuesto' },
      { title: 'Atención Urgente Nocturna y Festivos 365 Días', meta: 'Precio cerrado confirmado por WhatsApp antes de salir', price: '24 Horas' }
    ]
  },
  gimnasio: {
    label: 'Gimnasio / Pilates',
    icon: 'ph-barbell',
    defaultTheme: 'emerald',
    defaultName: 'Arco Studio Fitness & Pilates',
    yearsExp: 'Grupos reducidos',
    tagline: 'Entrenamiento personal y Pilates Reformer adaptado a tu nivel real.',
    story: 'Olvídate de gimnasios masificados. Entrena con seguimiento constante de entrenadores titulados y reserva tus clases desde el móvil.',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Clase de Prueba Guiada + Valoración Inicial', meta: '55 min · Conoce el centro sin compromiso', price: '10 €' },
      { title: 'Bono Mensual Pilates Máquina (2 clases/semana)', meta: 'Máximo 6 personas por turno · Horario flexible', price: '75 €/mes' },
      { title: 'Entrenamiento Funcional en Grupo Reducido', meta: 'Fuerza, movilidad y pérdida de grasa', price: '65 €/mes' },
      { title: 'Sesión Individual Entrenador Personal 1 a 1', meta: 'Planificación nutricional y seguimiento', price: '35 €' }
    ]
  },
  otro: {
    label: 'Otro Negocio (Libre)',
    icon: 'ph-buildings',
    defaultTheme: 'gold',
    defaultName: 'Mi Negocio Profesional',
    yearsExp: 'Trato directo y garantía',
    tagline: 'Atención profesional de confianza en tu ciudad con respuesta inmediata.',
    story: 'Ofrecemos un servicio cercano, transparente y adaptado a cada cliente. Consulta nuestras tarifas claras o escríbenos por WhatsApp para atenderte hoy mismo.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1100&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80'
    ],
    services: [
      { title: 'Servicio Principal / Consulta Personalizada', meta: 'Atención individual sin esperas', price: 'Consultar' },
      { title: 'Pack Completo Más Solicitado', meta: 'Todo incluido con presupuesto cerrado', price: '49 €' },
      { title: 'Servicio Express en el Día', meta: 'Reserva online o por WhatsApp directo', price: '29 €' }
    ]
  }
};

// 5 Designer Palettes & Typography Systems (frontend-design standard)
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
    headingStyle: 'normal',
    isLight: false
  },
  crimson: {
    label: 'Rojo Motorsport',
    sub: 'Oscuro + Rojo Potente',
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
    headingStyle: 'normal',
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
    headingStyle: 'normal',
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
    headingStyle: 'normal',
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
    muted: '#475569',
    border: 'rgba(15, 23, 42, 0.10)',
    accent: '#059669',
    accentHi: '#10B981',
    accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif",
    headingWeight: '800',
    headingStyle: 'normal',
    isLight: true
  }
};

// Default Initial State (Barbería Martínez inspired by TikTok ref5 + full customization)
const STORAGE_KEY = 'miweblocal_studio_state_v4';

function getInitialStudioState() {
  const def = SECTOR_PRESETS.barberia;
  const fallback = {
    name: def.defaultName,
    sector: 'barberia',
    customSectorLabel: 'Despacho / Comercio Local',
    yearsExp: def.yearsExp,
    tagline: def.tagline,
    story: def.story,
    bookingPolicy: 'ambos', // 'cita' | 'sincita' | 'ambos'
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
    previewDevice: 'mobile',
    activeStep: 1,
    expiresAt: Date.now() + (24 * 3600 * 1000) - 8000
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

let studioState = getInitialStudioState();
let compileDebounce = null;

function saveStudioState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studioState));
  } catch (e) {
    // Handle quota exceeded if huge base64 images were uploaded
  }
}

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

// ==========================================================================
// 3. BESPOKE SINGLE-FILE HTML WEBSITE COMPILER (Renders inside <iframe>)
// ==========================================================================
function compileClientWebsiteHTML(st) {
  const preset = SECTOR_PRESETS[st.sector] || SECTOR_PRESETS.barberia;
  const thm = DESIGN_THEMES[st.theme] || DESIGN_THEMES.copper;
  const sectorBadge = st.sector === 'otro'
    ? (st.customSectorLabel || 'Negocio Local Verificado')
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
    policyText = 'Atención exclusiva con cita previa para garantizarte cero esperas';
    policyPill = 'ATENCIÓN CON CITA PREVIA';
  } else if (st.bookingPolicy === 'sincita') {
    policyText = 'Puedes venir directamente sin cita previa en nuestro horario habitual';
    policyPill = 'ENTRADA LIBRE SIN CITA';
  }

  const servicesHtml = st.services.map((srv, i) => `
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

  const galleryHtml = galleryPhotos.map((src, idx) => `
    <div class="gal-item">
      <img src="${escapeHtml(src)}" alt="Trabajo ${idx + 1} de ${escapeHtml(st.name)}" loading="lazy" />
    </div>
  `).join('');

  const serviceOptionsHtml = st.services.map(srv =>
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

  /* Top status strip */
  .top-strip {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 8px 16px;
    font-size: 11.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  .open-dot {
    display: inline-block; width: 7px; height: 7px; border-radius: 50%;
    background: #10B981; box-shadow: 0 0 8px #10B981; margin-right: 6px;
  }

  /* Sticky Navbar */
  .nav {
    position: sticky; top: 0; z-index: 40;
    background: ${thm.isLight ? 'rgba(250,246,240,0.90)' : 'rgba(12,11,10,0.88)'};
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--border);
  }
  .nav-inner {
    max-width: 980px; margin: 0 auto; padding: 13px 18px;
    display: flex; align-items: center; justify-content: space-between; gap: 10px;
  }
  .brand {
    font-family: var(--font-head);
    font-weight: var(--weight-head);
    font-size: ${thm.headingFont.includes('Instrument') ? '1.55rem' : '1.2rem'};
    letter-spacing: -0.02em;
    line-height: 1.05;
  }
  .brand span { color: var(--accent); }
  .nav-cta {
    background: var(--accent);
    color: var(--accent-ink);
    padding: 9px 15px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    transition: transform 0.16s ease;
  }
  .nav-cta:active { transform: scale(0.96); }

  /* Hero */
  .hero {
    padding: 34px 0 38px;
    background: radial-gradient(650px 380px at 85% 10%, ${thm.accent}22, transparent 65%);
    border-bottom: 1px solid var(--border);
  }
  .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    align-items: center;
  }
  @media (min-width: 720px) {
    .hero { padding: 54px 0 58px; }
    .hero-grid { grid-template-columns: 1.15fr 0.85fr; gap: 36px; }
  }
  .eyebrow {
    display: inline-flex; align-items: center; gap: 7px;
    padding: 5px 12px; border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--accent);
    font-size: 10.5px; font-weight: 700; letter-spacing: 0.07em;
    text-transform: uppercase; margin-bottom: 14px;
  }
  h1 {
    font-family: var(--font-head);
    font-weight: var(--weight-head);
    font-size: ${thm.headingFont.includes('Instrument') ? 'clamp(2.25rem, 6vw, 3.6rem)' : 'clamp(1.85rem, 5vw, 2.95rem)'};
    line-height: 1.04;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }
  .hero-p {
    color: var(--muted);
    font-size: 14.5px;
    max-width: 520px;
    margin-bottom: 18px;
  }
  .clarity-box {
    display: flex; align-items: center; gap: 9px;
    padding: 10px 13px; border-radius: 12px;
    background: var(--surface); border: 1px solid var(--border);
    font-size: 12.5px; margin-bottom: 20px;
  }
  .hero-btns { display: flex; flex-wrap: wrap; gap: 10px; }
  .btn-main {
    background: var(--accent); color: var(--accent-ink);
    padding: 13px 20px; border-radius: 12px; font-weight: 700; font-size: 13.5px;
    border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
  }
  .btn-sec {
    background: var(--surface); color: var(--ink);
    border: 1px solid var(--border);
    padding: 13px 18px; border-radius: 12px; font-weight: 600; font-size: 13.5px;
    display: inline-flex; align-items: center; gap: 7px;
  }
  .hero-img-card {
    position: relative; border-radius: 20px; overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: 0 20px 45px rgba(0,0,0,0.28);
  }
  .hero-img-card img {
    width: 100%; height: 270px; object-fit: cover; display: block;
  }
  @media (min-width: 720px) {
    .hero-img-card img { height: 350px; }
  }
  .hero-img-badge {
    position: absolute; bottom: 12px; left: 12px; right: 12px;
    background: rgba(12, 12, 14, 0.82); backdrop-filter: blur(10px);
    color: #fff; padding: 10px 13px; border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.14);
    display: flex; justify-content: space-between; align-items: center; font-size: 12px;
  }

  /* Generic Section */
  section { padding: 38px 0; border-bottom: 1px solid var(--border); }
  .sec-tag {
    color: var(--accent); font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.09em; margin-bottom: 6px;
  }
  h2 {
    font-family: var(--font-head);
    font-weight: var(--weight-head);
    font-size: ${thm.headingFont.includes('Instrument') ? 'clamp(1.85rem, 4.5vw, 2.55rem)' : 'clamp(1.45rem, 3.8vw, 2.05rem)'};
    line-height: 1.1; margin-bottom: 18px;
  }

  /* Services interactive cards */
  .srv-list { display: grid; grid-template-columns: 1fr; gap: 11px; }
  @media (min-width: 680px) { .srv-list { grid-template-columns: 1fr 1fr; } }
  .srv-card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 15px; padding: 16px;
    display: flex; justify-content: space-between; align-items: center; gap: 12px;
    cursor: pointer;
    transition: transform 0.18s ease, border-color 0.18s ease;
  }
  .srv-card:hover { transform: translateY(-2px); border-color: var(--accent); }
  .srv-title { font-weight: 700; font-size: 14px; margin-bottom: 3px; }
  .srv-meta { color: var(--muted); font-size: 12px; }
  .srv-right { text-align: right; flex-shrink: 0; }
  .srv-price { display: block; color: var(--accent); font-weight: 800; font-size: 15px; white-space: nowrap; }
  .srv-arrow { font-size: 11px; color: var(--muted); font-weight: 600; }

  /* 24/7 Booking Box */
  .book-card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 18px; padding: 20px;
  }
  .form-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 14px; }
  @media (min-width: 640px) { .form-grid { grid-template-columns: 1fr 1fr; } }
  label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--muted); margin-bottom: 5px; }
  input, select {
    width: 100%; padding: 11px 13px; border-radius: 10px;
    border: 1px solid var(--border); background: var(--surface); color: var(--ink);
    font-size: 15px; font-family: inherit;
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

  /* Visual Schedule + Map */
  .sched-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
  @media (min-width: 680px) { .sched-grid { grid-template-columns: 1fr 1fr; } }
  .sched-box {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 16px; padding: 18px;
  }
  .day-row {
    display: flex; justify-content: space-between; padding: 8px 10px;
    border-radius: 8px; font-size: 13px; border-bottom: 1px dashed var(--border);
  }
  .day-row:last-child { border-bottom: none; }
  .day-row.today {
    background: ${thm.accent}1F; color: var(--accent); font-weight: 700; border-bottom: none;
  }

  /* Gallery */
  .gal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; }
  .gal-item { border-radius: 12px; overflow: hidden; aspect-ratio: 1 / 1; border: 1px solid var(--border); }
  .gal-item img { width: 100%; height: 100%; object-fit: cover; display: block; }

  /* Reviews */
  .rev-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
  @media (min-width: 680px) { .rev-grid { grid-template-columns: 1fr 1fr; } }
  .rev-card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 15px; font-size: 13px; }
  .stars { color: #F59E0B; letter-spacing: 2px; font-size: 13px; margin-bottom: 6px; }

  /* Floating WhatsApp Button */
  .wa-float {
    position: fixed; bottom: 16px; right: 16px; z-index: 60;
    background: #25D366; color: #052E16;
    padding: 12px 18px; border-radius: 999px;
    font-weight: 800; font-size: 13px;
    box-shadow: 0 10px 26px rgba(37, 211, 102, 0.42);
    display: inline-flex; align-items: center; gap: 8px;
  }
</style>
</head>
<body>

  <div class="top-strip">
    <div><span class="open-dot"></span><strong>${escapeHtml(st.city)}</strong> · ${escapeHtml(st.address)}</div>
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
            <span>★ 4,9 Valoración en ${escapeHtml(st.city)}</span>
            <strong style="color:${thm.accentHi};">${escapeHtml(st.hoursWeek)}</strong>
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
            <div style="font-weight:800; font-size:15px; color:var(--accent);">${escapeHtml(st.yearsExp)}</div>
            <div style="font-size:11px; color:var(--muted);">Trayectoria</div>
          </div>
          <div style="background:var(--card); border:1px solid var(--border); padding:13px 8px; border-radius:13px;">
            <div style="font-weight:800; font-size:15px; color:var(--accent);">4,9 / 5 ★</div>
            <div style="font-size:11px; color:var(--muted);">Clientes reales</div>
          </div>
          <div style="background:var(--card); border:1px solid var(--border); padding:13px 8px; border-radius:13px;">
            <div style="font-weight:800; font-size:15px; color:var(--accent);">100%</div>
            <div style="font-size:11px; color:var(--muted);">Trato directo</div>
          </div>
        </div>
      </div>
    </section>` : ''}

    ${st.modules.services ? `
    <section id="servicios">
      <div class="wrap">
        <div class="sec-tag">Tarifas Claras y Servicios</div>
        <h2>Nuestros Servicios Destacados</h2>
        <div class="srv-list">
          ${servicesHtml}
        </div>
      </div>
    </section>` : ''}

    ${st.modules.booking ? `
    <section id="reservar">
      <div class="wrap">
        <div class="sec-tag">Agenda Online 24/7 Sin Esperas</div>
        <h2>Reserva tu hora en 15 segundos</h2>
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label>1. Servicio deseado</label>
              <select id="bk-service">${serviceOptionsHtml}</select>
            </div>
            <div>
              <label>2. Tu nombre y teléfono</label>
              <input type="text" id="bk-client" placeholder="Ej. Carlos · 600 123 456" />
            </div>
          </div>
          <label>3. Elige tramo disponible hoy / mañana</label>
          <div class="slots" id="bk-slots">
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
        <div class="sec-tag">Nuestro Trabajo Real</div>
        <h2>Galería de ${escapeHtml(st.name)}</h2>
        <div class="gal-grid">
          ${galleryHtml}
        </div>
      </div>
    </section>` : ''}

    ${st.modules.scheduleMap ? `
    <section id="ubicacion">
      <div class="wrap sched-grid">
        <div class="sched-box">
          <div class="sec-tag">Horario Visual de Apertura</div>
          <h3 style="font-size:18px; margin-bottom:12px;">Cuándo estamos abiertos</h3>
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
            <div class="sec-tag">Dónde Estamos</div>
            <h3 style="font-size:18px; margin-bottom:8px;">${escapeHtml(st.address)}</h3>
            <p style="color:var(--muted); font-size:13.5px; margin-bottom:14px;">${escapeHtml(st.city)} · Teléfono: ${escapeHtml(st.phone || st.whatsapp)} ${st.instagram ? ('· ' + escapeHtml(st.instagram)) : ''}</p>
            <div style="border-radius:12px; padding:16px; background:var(--surface); border:1px solid var(--border); font-size:12.5px; margin-bottom:14px;">
              <strong style="display:block; margin-bottom:4px; color:var(--accent);">📍 Referencia de llegada rápida</strong>
              Fácil aparcamiento en la zona. Pulsa el botón inferior para abrir la ruta exacta en Google Maps desde tu móvil.
            </div>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(st.name + ' ' + st.address + ' ' + st.city)}" target="_blank" class="btn-sec" style="justify-content:center; width:100%;">
            Abrir Ruta en Google Maps ↗
          </a>
        </div>
      </div>
    </section>` : ''}

    ${st.modules.reviews ? `
    <section id="resenas">
      <div class="wrap">
        <div class="sec-tag">Opiniones Verificadas</div>
        <h2>Lo que dicen nuestros clientes</h2>
        <div class="rev-grid">
          <div class="rev-card">
            <div class="stars">★★★★★</div>
            <p style="margin-bottom:8px;">"Trato de 10 y máxima puntualidad. Reservar desde el móvil en 20 segundos sin tener que llamar es comodísimo."</p>
            <strong style="font-size:12px; color:var(--accent);">— Javier M. · Cliente habitual</strong>
          </div>
          <div class="rev-card">
            <div class="stars">★★★★★</div>
            <p style="margin-bottom:8px;">"Profesionales de verdad en ${escapeHtml(st.city)}. Precios claros en la web desde el primer momento y resultado impecable."</p>
            <strong style="font-size:12px; color:var(--accent);">— Laura G. · Reseña en Google</strong>
          </div>
        </div>
      </div>
    </section>` : ''}

    ${st.modules.faq ? `
    <section id="preguntas" style="border-bottom:none;">
      <div class="wrap">
        <div class="sec-tag">Dudas Rápidas</div>
        <h2>Preguntas Frecuentes</h2>
        <div style="display:grid; gap:10px;">
          <details style="background:var(--card); border:1px solid var(--border); border-radius:12px; padding:13px 15px;">
            <summary style="font-weight:700; font-size:13.5px; cursor:pointer;">¿Necesito reservar cita previa o puedo ir directamente?</summary>
            <p style="color:var(--muted); font-size:13px; margin-top:8px;">${escapeHtml(policyText)}. También puedes escribirnos por WhatsApp al ${escapeHtml(st.whatsapp)}.</p>
          </details>
          <details style="background:var(--card); border:1px solid var(--border); border-radius:12px; padding:13px 15px;">
            <summary style="font-weight:700; font-size:13.5px; cursor:pointer;">¿Dónde estáis exactamente y qué horario tenéis?</summary>
            <p style="color:var(--muted); font-size:13px; margin-top:8px;">Estamos en ${escapeHtml(st.address)} (${escapeHtml(st.city)}). Nuestro horario habitual es ${escapeHtml(st.hoursWeek)} y sábados ${escapeHtml(st.hoursSat)}.</p>
          </details>
        </div>
      </div>
    </section>` : ''}
  </main>

  <footer style="padding:24px 18px; text-align:center; font-size:12px; color:var(--muted); border-top:1px solid var(--border);">
    © ${new Date().getFullYear()} ${escapeHtml(st.name)} · ${escapeHtml(st.address)}, ${escapeHtml(st.city)}
  </footer>

  ${st.modules.whatsappFloat ? `
  <a class="wa-float" href="https://wa.me/${fullWa}?text=${encodeURIComponent('Hola ' + st.name + ', vengo desde vuestra página web.')}" target="_blank">
    <span>💬 WhatsApp Directo</span>
  </a>` : ''}

  <script>
    let chosenSlot = '12:00';
    // Highlight current day of week in visual schedule
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
      const cli = document.getElementById('bk-client')?.value || 'Cliente Demo';
      const ok = document.getElementById('bk-ok');
      if (ok) {
        ok.style.display = 'block';
        ok.textContent = '✓ Reserva de prueba registrada: ' + srv + ' a las ' + chosenSlot + ' para ' + cli + '. (En tu web activa te llega al instante al panel y WhatsApp).';
      }
    }
  <\/script>
</body>
</html>`;
}

// ==========================================================================
// 4. CONFIGURATOR UI BINDINGS (Steps, Services Editor, Photo Upload, Modules)
// ==========================================================================
function renderSectorSelector() {
  const container = document.getElementById('sector-chips-grid');
  if (!container) return;

  container.innerHTML = Object.entries(SECTOR_PRESETS).map(([key, item]) => {
    const isActive = studioState.sector === key;
    return `
      <button type="button" onclick="selectStudioSector('${key}')"
        class="sector-chip ${isActive ? 'active' : 'bg-white/[0.03] border-white/10 text-slate-300'} border rounded-xl px-3 py-2.5 text-left flex items-center gap-2 text-xs font-semibold">
        <i class="ph-bold ${item.icon} text-sm ${isActive ? 'text-emerald-400' : 'text-slate-400'} shrink-0"></i>
        <span class="truncate">${escapeHtml(item.label)}</span>
      </button>
    `;
  }).join('');

  const customWrap = document.getElementById('custom-sector-wrap');
  if (customWrap) {
    customWrap.classList.toggle('hidden', studioState.sector !== 'otro');
  }
}

function selectStudioSector(sectorKey) {
  const preset = SECTOR_PRESETS[sectorKey];
  if (!preset) return;

  studioState.sector = sectorKey;
  studioState.name = preset.defaultName;
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

function renderServicesEditor() {
  const list = document.getElementById('services-editor-list');
  if (!list) return;

  list.innerHTML = studioState.services.map((srv, idx) => `
    <div class="p-3 rounded-xl bg-black/50 border border-white/10 space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[11px] font-mono uppercase text-emerald-400 font-semibold">Ítem #${idx + 1}</span>
        ${studioState.services.length > 1 ? `
          <button type="button" onclick="removeServiceItem(${idx})" class="text-xs text-rose-400 hover:text-rose-300 px-2 py-0.5 rounded bg-rose-500/10">
            Eliminar
          </button>` : ''}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-2">
        <input type="text" value="${escapeHtml(srv.title)}" oninput="editServiceField(${idx}, 'title', this.value)"
          placeholder="Nombre del servicio o plato"
          class="sm:col-span-7 desktop-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white focus:border-emerald-400 focus:outline-none" />
        <input type="text" value="${escapeHtml(srv.price)}" oninput="editServiceField(${idx}, 'price', this.value)"
          placeholder="Precio (ej. 18 €)"
          class="sm:col-span-5 desktop-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-emerald-300 font-semibold focus:border-emerald-400 focus:outline-none" />
      </div>
      <input type="text" value="${escapeHtml(srv.meta)}" oninput="editServiceField(${idx}, 'meta', this.value)"
        placeholder="Detalle o duración (ej. 35 min · Incluye lavado)"
        class="w-full desktop-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-slate-300 focus:border-emerald-400 focus:outline-none" />
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
    title: 'Nuevo Servicio o Producto Especial',
    meta: 'Atención personalizada · Reserva online',
    price: '25 €'
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
    if (status) status.textContent = '✓ Foto propia cargada en portada';
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
        if (status) status.textContent = `✓ ${loaded.length} foto(s) añadidas a tu galería`;
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
  if (s1) s1.textContent = 'Usando fotografía profesional del sector';
  if (s2) s2.textContent = '3 fotos de muestra activas';
  updateStudioPreview(true);
}

function renderThemeSelector() {
  const wrap = document.getElementById('theme-selector-grid');
  if (!wrap) return;

  wrap.innerHTML = Object.entries(DESIGN_THEMES).map(([key, t]) => {
    const active = studioState.theme === key;
    return `
      <button type="button" onclick="selectStudioTheme('${key}')"
        class="p-3 rounded-xl border text-left flex items-center gap-3 ${active ? 'border-emerald-400 bg-emerald-500/10' : 'border-white/10 bg-white/[0.02]'}">
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

const MODULE_LABELS = [
  { key: 'booking', label: 'Agenda de Citas / Reservas 24/7', icon: 'ph-calendar-check' },
  { key: 'whatsappFloat', label: 'Botón Flotante de WhatsApp', icon: 'ph-whatsapp-logo' },
  { key: 'services', label: 'Tarjetas de Servicios / Carta con Precios', icon: 'ph-list-Star' },
  { key: 'about', label: 'Historia del Negocio y Experiencia', icon: 'ph-medal' },
  { key: 'scheduleMap', label: 'Horario Visual Semanal + Mapa Google', icon: 'ph-map-pin' },
  { key: 'gallery', label: 'Galería Fotográfica de Trabajos', icon: 'ph-images' },
  { key: 'reviews', label: 'Muro de Reseñas 5,0 ★', icon: 'ph-star' },
  { key: 'faq', label: 'Preguntas Frecuentes de Clientes', icon: 'ph-question' }
];

function renderModulesSelector() {
  const wrap = document.getElementById('modules-toggle-grid');
  if (!wrap) return;

  wrap.innerHTML = MODULE_LABELS.map(m => {
    const on = !!studioState.modules[m.key];
    return `
      <button type="button" onclick="toggleStudioModule('${m.key}')"
        class="module-toggle ${on ? 'active' : 'bg-white/[0.02] border-white/10'} border rounded-xl p-3 flex items-center justify-between gap-2 text-left">
        <span class="text-xs font-semibold text-white">${escapeHtml(m.label)}</span>
        <span class="w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-xs font-bold ${on ? 'bg-emerald-400 text-slate-950' : 'bg-white/10 text-transparent'}">✓</span>
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
  const val = id => {
    const el = document.getElementById(id);
    return el ? el.value : '';
  };
  studioState.name = val('inp-name').trim() || 'Mi Negocio Local';
  studioState.customSectorLabel = val('inp-custom-sector').trim() || 'Negocio Profesional';
  studioState.yearsExp = val('inp-years').trim() || 'Atención Profesional';
  studioState.tagline = val('inp-tagline').trim() || 'Calidad y atención directa en tu ciudad.';
  studioState.story = val('inp-story').trim() || 'Conócenos y reserva online en segundos.';
  studioState.bookingPolicy = val('inp-policy') || 'ambos';
  studioState.city = val('inp-city').trim() || 'Madrid';
  studioState.address = val('inp-address').trim() || 'Calle Principal 12';
  studioState.whatsapp = val('inp-whatsapp').trim() || '612 890 345';
  studioState.phone = val('inp-phone').trim();
  studioState.instagram = val('inp-instagram').trim();
  studioState.hoursWeek = val('inp-hours-week').trim() || '09:30 – 20:00';
  studioState.hoursSat = val('inp-hours-sat').trim() || '09:30 – 14:30';
  studioState.hoursSun = val('inp-hours-sun').trim() || 'Cerrado';
}

function schedulePreviewRefresh() {
  if (compileDebounce) clearTimeout(compileDebounce);
  compileDebounce = setTimeout(() => {
    readInputsIntoState();
    updateStudioPreview(false);
  }, 180);
}

function updateStudioPreview(skipRead) {
  if (!skipRead) readInputsIntoState();
  saveStudioState();

  const slug = slugifyName(studioState.name);
  const urlText = `miweblocal.com/${slug}`;
  const urlEl = document.getElementById('preview-live-url');
  if (urlEl) urlEl.textContent = urlText;
  const fullUrlEl = document.getElementById('fullscreen-demo-url');
  if (fullUrlEl) fullUrlEl.textContent = urlText;

  const html = compileClientWebsiteHTML(studioState);
  const iframe = document.getElementById('studio-preview-iframe');
  if (iframe) iframe.srcdoc = html;

  const fullIframe = document.getElementById('fullscreen-demo-iframe');
  const fullModal = document.getElementById('fullscreen-demo-modal');
  if (fullIframe && fullModal && !fullModal.classList.contains('hidden')) {
    fullIframe.srcdoc = html;
  }
}

function setPreviewDevice(mode) {
  studioState.previewDevice = mode;
  const wrap = document.getElementById('preview-frame-shell');
  const btnMob = document.getElementById('btn-dev-mobile');
  const btnDesk = document.getElementById('btn-dev-desktop');

  if (wrap) {
    wrap.classList.toggle('mode-mobile', mode === 'mobile');
    wrap.classList.toggle('mode-desktop', mode === 'desktop');
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

function scrollToPreviewOnMobile() {
  readInputsIntoState();
  updateStudioPreview(true);
  const target = document.getElementById('live-preview-anchor');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==========================================================================
// 5. 24-HOUR EXPIRATION COUNTDOWN & 100% AUTOMATED 50€ DELIVERY + /ADMIN
// ==========================================================================
function tickCountdownTimers() {
  const remMs = Math.max(0, (studioState.expiresAt || (Date.now() + 86000000)) - Date.now());
  const totalSec = Math.floor(remMs / 1000);
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  const formatted = `${h}:${m}:${s}`;

  document.querySelectorAll('.js-countdown-24h').forEach(el => {
    el.textContent = formatted;
  });
}

function openAutomatedCheckoutModal() {
  readInputsIntoState();
  closeFullscreenGeneratedDemo();
  const modal = document.getElementById('checkout-modal');
  const content = document.getElementById('checkout-modal-body');
  if (!modal || !content) return;

  const slug = slugifyName(studioState.name);
  content.innerHTML = `
    <div>
      <div class="flex items-center justify-between gap-2 mb-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-semibold">
          ● ACTIVACIÓN AUTOMÁTICA AL INSTANTE
        </span>
        <button type="button" onclick="closeCheckoutModal()" class="w-9 h-9 rounded-full bg-white/5 text-slate-300 flex items-center justify-center">✕</button>
      </div>

      <h3 class="font-display font-extrabold text-xl sm:text-2xl text-white mb-1.5">
        Publicar web oficial de <span class="text-emerald-400">${escapeHtml(studioState.name)}</span>
      </h3>
      <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
        Tu demo caduca en <strong class="text-amber-300 font-mono tabular-nums js-countdown-24h">23:59:40</strong>. Desbloquéala para siempre con un <strong class="text-white">único pago de 50 €</strong> (sin cuotas mensuales obligatorias).
      </p>

      <div class="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 mb-4 text-xs">
        <div class="flex justify-between items-center">
          <span class="text-slate-400">Enlace público listo:</span>
          <strong class="text-emerald-300 font-mono truncate max-w-[200px]">miweblocal.com/${escapeHtml(slug)}</strong>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-slate-400">Panel privado móvil:</span>
          <strong class="text-amber-300 font-mono truncate max-w-[200px]">miweblocal.com/${escapeHtml(slug)}/admin</strong>
        </div>
        <div class="flex justify-between items-center pt-1.5 border-t border-white/10">
          <span class="text-white font-semibold">Total pago único definitivo:</span>
          <strong class="text-xl font-display font-extrabold text-white">50 € <span class="text-[11px] font-normal text-slate-400">IVA incl.</span></strong>
        </div>
      </div>

      <div class="space-y-3 mb-4">
        <div>
          <label class="block text-[11px] font-mono uppercase text-slate-400 mb-1">Email donde recibirás tu web y contraseñas al segundo</label>
          <input type="email" id="buyer-email" placeholder="tunegocio@gmail.com" value=""
            class="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-white/15 text-white focus:border-emerald-400 focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-mono uppercase text-slate-400 mb-1">WhatsApp de respaldo para enviarte copia del acceso</label>
          <input type="tel" id="buyer-wa" value="${escapeHtml(studioState.whatsapp)}"
            class="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-white/15 text-white focus:border-emerald-400 focus:outline-none" />
        </div>
      </div>

      <button type="button" onclick="completeAutomatedDelivery()"
        class="w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-display font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/20">
        Desbloquear Mi Web por 50 € y Recibir Claves →
      </button>
      <p class="text-[11px] text-center text-slate-400 mt-2.5">
        Pago 100% seguro con Tarjeta, Apple Pay, Google Pay o Bizum · Entrega automática 24/7
      </p>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  tickCountdownTimers();
}

function completeAutomatedDelivery() {
  const emailInput = document.getElementById('buyer-email');
  const email = (emailInput && emailInput.value.trim()) ? emailInput.value.trim() : 'propietario@tunegocio.com';
  const slug = slugifyName(studioState.name);
  const pass = 'PRO-' + String(Math.floor(1000 + Math.random() * 9000));
  const content = document.getElementById('checkout-modal-body');
  if (!content) return;

  content.innerHTML = `
    <div>
      <div class="flex items-center justify-between mb-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-bold">
          ✓ ENTREGA AUTOMÁTICA COMPLETADA
        </span>
        <button type="button" onclick="closeCheckoutModal()" class="w-9 h-9 rounded-full bg-white/5 text-slate-300 flex items-center justify-center">✕</button>
      </div>

      <h3 class="font-display font-extrabold text-xl sm:text-2xl text-white mb-1.5">
        ¡Tu web ya no caduca! Accesos enviados
      </h3>
      <p class="text-slate-300 text-xs leading-relaxed mb-4">
        Nuestro sistema automático acaba de enviar las credenciales a <strong class="text-white">${escapeHtml(email)}</strong>:
      </p>

      <div class="p-4 rounded-2xl bg-slate-950 border border-emerald-500/35 font-mono text-xs space-y-2 mb-4">
        <div class="text-emerald-400 font-bold border-b border-white/10 pb-1.5">ASUNTO: Tu Web Activa + Acceso Panel Propietario</div>
        <div><span class="text-slate-400">1. URL Pública:</span> <span class="text-white">https://miweblocal.com/${escapeHtml(slug)}</span></div>
        <div><span class="text-slate-400">2. Panel Móvil:</span> <span class="text-amber-300">https://miweblocal.com/${escapeHtml(slug)}/admin</span></div>
        <div><span class="text-slate-400">3. Clave Única:</span> <span class="px-2 py-0.5 rounded bg-white/10 text-emerald-300 font-bold">${pass}</span></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <button type="button" onclick="downloadStandaloneClientHTML()"
          class="py-3.5 px-4 rounded-xl bg-emerald-400 text-slate-950 font-display font-extrabold text-xs sm:text-sm">
          Descargar Mi Web Completa (.html)
        </button>
        <button type="button" onclick="closeCheckoutModal(); openFullscreenGeneratedDemo();"
          class="py-3.5 px-4 rounded-xl bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/15">
          Abrir Mi Web a Pantalla Completa
        </button>
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
// 6. REAL LIVE CLIENT PORTFOLIO SHOWCASE & LIVE MODAL VIEWER
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
    route: '/motorcycle-store-orero/',
    accent: '#F43F5E'
  },
  {
    id: 'jamal',
    category: 'barberia',
    name: 'Barbería Jamal',
    city: 'Cox (Alicante)',
    sectorTag: 'Barbería & Degradados',
    metric: '+45 citas semanales en 30 seg',
    screenshot: 'assets/portfolio/barberia_jamal.jpg',
    route: '/cox/barberia-jamal/',
    accent: '#F59E0B'
  },
  {
    id: 'vimacchiata',
    category: 'hosteleria',
    name: 'La Vimacchiata Brunch',
    city: 'Orihuela Centro',
    sectorTag: 'Specialty Coffee & Brunch',
    metric: 'Reservas de terraza + carta digital',
    screenshot: 'assets/portfolio/vimacchiata_brunch.jpg',
    route: '/orihuela/la-vimacchiata-brunch/',
    accent: '#D97706'
  },
  {
    id: 'elite',
    category: 'reformas',
    name: 'Reformas Elite Gold',
    city: 'Guardamar del Segura',
    sectorTag: 'Reformas Integrales & Villas',
    metric: '5,0 ★ en Google · Presupuestos WhatsApp',
    screenshot: 'assets/portfolio/reformas_elite.jpg',
    route: '/reformas-elite-gold-guardamar/',
    accent: '#FBBF24'
  },
  {
    id: 'gabi',
    category: 'barberia',
    name: 'Gabi Tattoo Studio',
    city: 'Orihuela',
    sectorTag: 'Estudio de Tatuajes de Autor',
    metric: 'Cotizador de piezas + agenda privada',
    screenshot: 'assets/portfolio/gabi_tattoo.jpg',
    route: '/orihuela/gabi-tattoo-studio/',
    accent: '#FB7185'
  },
  {
    id: 'autolomas',
    category: 'motor',
    name: 'Auto Lomas Carrocería',
    city: 'Torrevieja',
    sectorTag: 'Chapa, Pintura al Horno & Detailing',
    metric: 'Comparador Antes/Después + Foto WhatsApp',
    screenshot: 'assets/portfolio/autochrome.jpg',
    route: '/autochrome-torrevieja/',
    accent: '#38BDF8'
  }
];

function renderPortfolioCards(filterCat = 'all') {
  const grid = document.getElementById('portfolio-cards-container');
  if (!grid) return;

  document.querySelectorAll('.pf-filter-btn').forEach(btn => {
    const active = btn.getAttribute('data-cat') === filterCat;
    btn.className = active
      ? 'pf-filter-btn px-4 py-2 rounded-full text-xs font-bold bg-white text-slate-950 whitespace-nowrap'
      : 'pf-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10 whitespace-nowrap';
  });

  const items = filterCat === 'all'
    ? REAL_PORTFOLIO
    : REAL_PORTFOLIO.filter(p => p.category === filterCat);

  grid.innerHTML = items.map(item => `
    <article class="portfolio-card snap-item w-[85vw] max-w-[340px] lg:max-w-none rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-5 flex flex-col justify-between transition-all duration-300">
      <div>
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] font-mono font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> EN VIVO
          </span>
          <span class="text-[11px] text-slate-400 font-medium truncate">${escapeHtml(item.city)}</span>
        </div>

        <!-- Real Retina Client Screenshot inside Titanium iPhone 15 Pro Frame -->
        <div class="my-2 cursor-pointer" onclick="openLiveClientModal('${escapeHtml(item.route)}', '${escapeHtml(item.name)}')">
          <div class="iphone-frame">
            <div class="iphone-notch"></div>
            <div class="iphone-screen">
              <img src="${escapeHtml(item.screenshot)}" alt="Web real de ${escapeHtml(item.name)}" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 pt-4 border-t border-white/10">
        <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">${escapeHtml(item.sectorTag)}</div>
        <h3 class="font-display font-bold text-lg text-white mb-1">${escapeHtml(item.name)}</h3>
        <p class="text-xs text-emerald-300 font-medium mb-4">✓ ${escapeHtml(item.metric)}</p>

        <div class="grid grid-cols-2 gap-2">
          <button type="button" onclick="openLiveClientModal('${escapeHtml(item.route)}', '${escapeHtml(item.name)}')"
            class="py-2.5 px-3 rounded-xl bg-white text-slate-950 font-display font-bold text-xs whitespace-nowrap">
            Probar en Vivo
          </button>
          <a href="${escapeHtml(item.route)}" target="_blank" rel="noopener"
            class="btn-press py-2.5 px-3 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-xs text-center whitespace-nowrap">
            Abrir Web ↗
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

function openLiveClientModal(route, name) {
  const modal = document.getElementById('live-client-modal');
  const iframe = document.getElementById('live-client-iframe');
  const title = document.getElementById('live-client-title');
  const ext = document.getElementById('live-client-external');
  if (!modal || !iframe) return;

  if (title) title.textContent = name;
  if (ext) ext.href = route;
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

// Mobile Navigation Sheet
function toggleMobileNav(open) {
  const sheet = document.getElementById('mobile-nav-sheet');
  if (!sheet) return;
  sheet.classList.toggle('hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

// Init Everything Cleanly on DOM Ready
window.addEventListener('DOMContentLoaded', () => {
  // 1. Trigger automatic Before -> After visual transformation in Hero
  setHeroMode('before');
  setTimeout(() => {
    setHeroMode('after');
    applyHeroWorld(0);
  }, 1100);

  // 2. Initialize Unrestricted Website Studio
  syncInputsFromState();
  renderSectorSelector();
  renderServicesEditor();
  renderThemeSelector();
  renderModulesSelector();
  switchStudioStep(1);
  setPreviewDevice(window.innerWidth >= 1024 ? 'desktop' : 'mobile');
  updateStudioPreview(true);

  // 3. Render Real Live Client Portfolio
  renderPortfolioCards('all');

  // 4. Start 24-Hour Countdown Clock
  tickCountdownTimers();
  setInterval(tickCountdownTimers, 1000);

  // 5. Observe Hero visibility to show/hide thumb-friendly Mobile Sticky Bar
  const heroEl = document.getElementById('hero-stage');
  const stickyBar = document.getElementById('mobile-sticky-bar');
  if (heroEl && stickyBar && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        stickyBar.classList.toggle('hidden-bar', entry.isIntersecting);
      });
    }, { threshold: 0.15 });
    io.observe(heroEl);
  }
});

