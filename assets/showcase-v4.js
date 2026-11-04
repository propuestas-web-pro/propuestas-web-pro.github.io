/* ==========================================================================
   MIWEBLOCAL V7 — HERO DIRECT GENERATOR, 24H LINK, 50€/200€ LIFETIME UNLOCK
   Direct WhatsApp (Activation): +34 632 76 81 52
   ========================================================================== */

const FATHI_WA = '34632768152';
const STORAGE_KEY = 'miweblocal_platform_v5';

/* Pagos: la configuración de Stripe vive en assets/stripe-config.js (MIWEB_STRIPE) */
let currentStripePlan = '197';

const SHOWCASE_MODELS = [
  {
    id: 'motos',
    cat: 'motor',
    shortLabel: 'Motos / Concesionario',
    icon: 'ph-motorcycle',
    theme: 'crimson',
    defaultBizName: 'Motos Veloce',
    tagline: 'Motos revisadas con garantía y taller multimarca.',
    story: 'Stock revisado en 60 puntos, financiación a medida y cita rápida de taller.',
    badge: 'Motor · Stock 24h',
    title: 'Motos y Concesionario Compra-Venta',
    painTag: 'Deja de mandar fotos y precios uno a uno por WhatsApp a curiosos',
    photo: 'assets/showcase/photo_motos.jpg',
    solves: [
      'Catálogo de vehículos en stock con fotos, km y precios visible las 24h',
      'Filtro de compradores serios que te escriben por un modelo concreto',
      'Reserva de cita previa para taller, revisión o prueba dinámica',
      'Formulario de tasación de moto/coche usado + mapa GPS directo'
    ],
    services: [
      { title: 'Naked 700cc ABS (Garantía 1 año)', meta: '6.400 km · Financiación', price: '6.890 €' },
      { title: 'Scooter Urbano 125cc Nuevo', meta: 'Seguro y casco incluidos', price: '3.290 €' },
      { title: 'Revisión Oficial + Neumáticos', meta: 'Entrega en el mismo día', price: 'Desde 65 €' },
      { title: 'Tasación de Tu Moto Actual', meta: 'En 15 min sin compromiso', price: 'Gratis' }
    ]
  },
  {
    id: 'barberia',
    cat: 'belleza',
    shortLabel: 'Barbería / Salón',
    icon: 'ph-scissors',
    theme: 'copper',
    defaultBizName: 'Barber Studio',
    tagline: 'Degradado al milímetro y afeitado clásico a navaja.',
    story: 'Puntualidad, trato cercano y reserva directa desde tu móvil en 15 segundos.',
    badge: 'Barbería · Citas Directas',
    title: 'Barbería, Peluquería y Salón',
    painTag: 'No pares de cortar el pelo para contestar llamadas y mensajes',
    photo: 'assets/showcase/photo_barberia.jpg',
    solves: [
      'Agenda de citas 24h: el cliente elige corte y hora sin llamarte',
      'Carta de servicios y tarifas clara para evitar preguntas repetidas',
      'Llenas huecos vacíos incluso cuando estás cerrado o cortando',
      '0% comisiones por reserva: aviso directo a tu WhatsApp'
    ],
    services: [
      { title: 'Corte Degradado / Skin Fade', meta: '35 min · Lavado y peinado', price: '16 €' },
      { title: 'Combo Corte + Barba a Navaja', meta: '50 min · Toalla caliente', price: '24 €' },
      { title: 'Perfilado y Arreglo de Barba', meta: '25 min · Aceites esenciales', price: '12 €' },
      { title: 'Corte Clásico / Infantil', meta: '30 min · Acabado limpio', price: '13 €' }
    ]
  },
  {
    id: 'personal',
    cat: 'emprendedor',
    shortLabel: 'Nuevo Negocio / Marca',
    icon: 'ph-briefcase',
    theme: 'gold',
    defaultBizName: 'Nexo Consultoría',
    tagline: 'Soluciones profesionales a medida con resultados desde el primer día.',
    story: 'Atención directa sin intermediarios. Agenda tu consulta o solicita presupuesto por WhatsApp.',
    badge: 'Nuevo Proyecto · Llave en Mano',
    title: 'Nuevo Negocio, Marca Personal o Servicio',
    painTag: '¿Quieres empezar un negocio por tu cuenta y no sabes hacer la web?',
    photo: 'assets/showcase/photo_personal.jpg',
    solves: [
      'Lanzas tu propio negocio o servicio desde cero sin saber informática',
      'Explicación clara de qué ofreces, tarifas y por qué contratarte',
      'Captación de clientes y presupuestos directos a tu WhatsApp',
      'Imagen de empresa grande en Ordenador + Móvil desde el primer día'
    ],
    services: [
      { title: 'Primera Consulta de Valoración', meta: '30 min · Análisis de tu caso', price: 'Gratis' },
      { title: 'Servicio Profesional Completo', meta: 'Entrega rápida y garantizada', price: 'A medida' },
      { title: 'Pack Integral para Clientes', meta: 'Todo incluido llave en mano', price: 'Consultar' },
      { title: 'Atención Preferente por WhatsApp', meta: 'Respuesta en el día', price: 'Directo' }
    ]
  },
  {
    id: 'reformas',
    cat: 'servicios',
    shortLabel: 'Reformas / Oficios',
    icon: 'ph-house-line',
    theme: 'gold',
    defaultBizName: 'Villa & Reformas',
    tagline: 'Reformas integrales, cocinas y baños con plazo cerrado.',
    story: 'Coordinamos todos los gremios con materiales de primera y presupuesto sin sorpresas.',
    badge: 'Reformas · Presupuestos',
    title: 'Reformas, Construcción y Oficios',
    painTag: 'Deja de perder obras grandes por no tener un catálogo serio que enseñar',
    photo: 'assets/showcase/photo_reformas.jpg',
    solves: [
      'Solicitud de presupuesto filtrada por tipo de obra y metros cuadrados',
      'Galería de reformas reales (cocinas, baños, vivienda completa)',
      'Atrae propietarios que buscan calidad y evita regateadores',
      'Contacto directo a tu WhatsApp mientras estás en la obra'
    ],
    services: [
      { title: 'Visita + Medición y Presupuesto', meta: 'En menos de 48h sin coste', price: 'Gratis' },
      { title: 'Cambio Bañera por Plato de Ducha', meta: 'Listo en 24h con mampara', price: '1.190 €' },
      { title: 'Reforma Completa de Cocina', meta: 'Diseño funcional llave en mano', price: 'A medida' },
      { title: 'Reforma Integral de Vivienda', meta: 'Plazo garantizado por contrato', price: 'Consultar' }
    ]
  },
  {
    id: 'tienda',
    cat: 'emprendedor',
    shortLabel: 'Tienda 24h',
    icon: 'ph-shopping-bag',
    theme: 'copper',
    defaultBizName: 'Atelier Store',
    tagline: 'Catálogo exclusivo disponible las 24 horas con pedido por WhatsApp.',
    story: 'Descubre nuestra colección actualizada con stock real. Compra o reserva sin comisiones.',
    badge: 'Tienda Online · Sin Comisiones',
    title: 'Tienda 24h o Catálogo de Productos',
    painTag: 'Vende tus artículos las 24h sin depender solo de subir historias',
    photo: 'assets/showcase/photo_tienda.jpg',
    solves: [
      'Tus productos ordenados con fotos, tallas/modelos y precios 24h',
      'Pedidos de compra o reserva para recoger directos a tu WhatsApp',
      '0% comisiones por venta y sin pasarelas técnicas complicadas',
      'Enlace oficial para poner en tu biografía de Instagram y TikTok'
    ],
    services: [
      { title: 'Producto Destacado de Temporada', meta: 'Unidades limitadas · Envío 24h', price: '39,90 €' },
      { title: 'Pack Ahorro Colección Completa', meta: 'El más vendido · Envío gratis', price: '69,00 €' },
      { title: 'Edición Especial / Personalizada', meta: 'Reserva directa por WhatsApp', price: '49,00 €' },
      { title: 'Recogida en Local sin Esperas', meta: 'Listo en 1 hora', price: '0 €' }
    ]
  },
  {
    id: 'restaurante',
    cat: 'hosteleria',
    shortLabel: 'Restaurante / Bar',
    icon: 'ph-hamburger',
    theme: 'copper',
    defaultBizName: 'Brasa & Origen',
    tagline: 'Carnes maduradas al fuego y cocina artesana en vivo.',
    story: 'Consulta nuestra carta con precios y reserva mesa en terraza o salón sin comisiones.',
    badge: 'Hostelería · Carta + Mesas',
    title: 'Restaurante, Bar y Hostelería',
    painTag: 'Que tus platos entren por los ojos y reserven mesa sin pagar comisiones',
    photo: 'assets/showcase/photo_restaurante.jpg',
    solves: [
      'Carta visual con fotos y precios que se abre al instante en el móvil',
      'Reserva de mesa (terraza o salón) en 3 toques directo a tu WhatsApp',
      'Pedidos para recoger sin colas ni esperas telefónicas',
      'Ahorras el 20–30% de comisión que te quitan las apps de reparto'
    ],
    services: [
      { title: 'Doble Truffle Smash Burger', meta: 'Cheddar fundido y patatas caseras', price: '14,90 €' },
      { title: 'Costillar Ibérico a la Brasa', meta: 'Baja temperatura · Ración entera', price: '22,50 €' },
      { title: 'Chuletón Vaca Madurada (kg)', meta: '45 días de maduración', price: '48,00 €' },
      { title: 'Tarta de Queso Cremosa', meta: 'Horneada cada mañana', price: '6,50 €' }
    ]
  },
  {
    id: 'taller',
    cat: 'motor',
    shortLabel: 'Taller Mecánico',
    icon: 'ph-wrench',
    theme: 'crimson',
    defaultBizName: 'Apex Auto Detail',
    tagline: 'Mecánica, chapa, pintura y detailing con presupuesto cerrado.',
    story: 'Presupuesto exacto antes de tocar tu vehículo y entrega rápida garantizada.',
    badge: 'Taller · Valoración por Foto',
    title: 'Taller Mecánico, Chapa y Detailing',
    painTag: 'Ahorra visitas en vacío valorando la avería o el golpe antes por WhatsApp',
    photo: 'assets/showcase/photo_taller.jpg',
    solves: [
      'El cliente elige servicio (revisión, pre-ITV, chapa o detailing) y pide cita',
      'Envío directo de foto del golpe o matrícula a tu WhatsApp',
      'Muestra tus acabados reales para justificar tarifas profesionales',
      'Botón GPS a Google Maps para llegar directo a la puerta de tu nave'
    ],
    services: [
      { title: 'Revisión Aceite Sintético + Filtros', meta: 'Mantiene garantía oficial', price: '95 €' },
      { title: 'Diagnosis Electrónica + Pre-ITV', meta: 'Informe completo 40 puntos', price: '39 €' },
      { title: 'Tratamiento Cerámico / Pulido', meta: 'Brillo espejo garantizado', price: '180 €' },
      { title: 'Valoración de Chapa por Foto', meta: 'Envía foto por WhatsApp', price: 'Gratis' }
    ]
  },
  {
    id: 'clinica',
    cat: 'salud',
    shortLabel: 'Clínica / Salud',
    icon: 'ph-heartbeat',
    theme: 'emerald',
    defaultBizName: 'Clínica Aura',
    tagline: 'Odontología avanzada, fisioterapia y salud integral sin esperas.',
    story: 'Tecnología digital avanzada y primera valoración personalizada para tu tranquilidad.',
    badge: 'Salud · Primera Cita',
    title: 'Clínica, Salud y Consultas',
    painTag: 'Transmite la máxima confianza que un paciente necesita antes de pedir cita',
    photo: 'assets/showcase/photo_clinica.jpg',
    solves: [
      'Presentación limpia y seria de tus tratamientos, especialidades y tarifas',
      'Solicitud de primera visita o valoración directa al WhatsApp de recepción',
      'Capta pacientes de tu ciudad que buscan clínica en Google',
      'Horarios claros y ruta GPS en 1 clic hasta tu consulta'
    ],
    services: [
      { title: '1ª Visita + Diagnóstico Digital', meta: '40 min · Valoración completa', price: 'Gratis' },
      { title: 'Sesión Fisioterapia / Consulta', meta: '50 min · Individual', price: '38 €' },
      { title: 'Higiene Dental Ultrasonidos', meta: '45 min · Revisión incluida', price: '45 €' },
      { title: 'Blanqueamiento Clínico LED', meta: 'Resultado visible en 1 sesión', price: '190 €' }
    ]
  },
  {
    id: 'estetica',
    cat: 'belleza',
    shortLabel: 'Estética / Uñas',
    icon: 'ph-sparkle',
    theme: 'cream',
    defaultBizName: 'Maison Lumière',
    tagline: 'Estética facial avanzada, manicura rusa y rituales de autor.',
    story: 'Diagnóstico personalizado, firmas de alta cosmética y cita cómoda sin esperas.',
    badge: 'Estética · Carta de Rituales',
    title: 'Estética, Uñas y Bienestar',
    painTag: 'Evita regateos mostrando tu carta de tratamientos con imagen de lujo',
    photo: 'assets/showcase/photo_estetica.jpg',
    solves: [
      'Carta completa de tratamientos faciales, uñas y rituales con precios',
      'Reserva de cita por tramo horario directo a tu WhatsApp',
      'Atrae clientela que valora tu trabajo y paga sin regatear',
      '0% comisiones por cita: cada clienta es 100% tuya'
    ],
    services: [
      { title: 'Higiene Facial Hydraglow', meta: '55 min · Piel luminosa', price: '48 €' },
      { title: 'Manicura Rusa con Nivelación', meta: '60 min · Larga duración', price: '28 €' },
      { title: 'Lifting de Pestañas + Diseño Cejas', meta: '45 min · Mirada natural', price: '40 €' },
      { title: 'Ritual Corporal Relajante', meta: '60 min · Cabina privada', price: '55 €' }
    ]
  },
  {
    id: 'fitness',
    cat: 'salud',
    shortLabel: 'Fitness / Gym',
    icon: 'ph-barbell',
    theme: 'emerald',
    defaultBizName: 'Kinetic Club',
    tagline: 'Entrenamiento personal, fuerza y transformación física.',
    story: 'Reserva tu valoración inicial y entrena con planificación a medida presencial u online.',
    badge: 'Fitness · Captación Alumnos',
    title: 'Fitness, Gym y Entrenador Personal',
    painTag: 'Capta alumnos presenciales u online todas las semanas de forma automática',
    photo: 'assets/showcase/photo_fitness.jpg',
    solves: [
      'Muestra tus bonos, horarios, entrenamientos y tarifas en una pantalla',
      'Reserva directa de clase de prueba o valoración física inicial',
      'Ideal tanto si tienes centro/box propio como si eres entrenador personal',
      'Contacto directo a tu WhatsApp sin intermediarios'
    ],
    services: [
      { title: 'Sesión de Valoración + Prueba', meta: '45 min · Estudio inicial', price: 'Gratis' },
      { title: 'Entrenamiento Personal 1 a 1', meta: 'Seguimiento + Nutrición', price: '120 €/mes' },
      { title: 'Grupos Reducidos Fuerza & HIIT', meta: 'Máx. 8 personas por turno', price: '69 €/mes' },
      { title: 'Preparación Online Personalizada', meta: 'Contacto directo WhatsApp', price: '59 €/mes' }
    ]
  }
];

const HERO_STAGE_IDS = SHOWCASE_MODELS.map(m => m.id);
let currentHeroIdx = 0;
let heroTimer = null;
let userInteractedWithGenerator = false;
let currentModalId = 'motos';

/* Generator State */
let genState = {
  sectorId: 'motos',
  name: 'Motos Veloce',
  city: 'Madrid',
  wa: '600 123 456',
  address: '',
  hoursWeek: '',
  hoursSat: '',
  hoursSun: '',
  customHeroPhoto: '',
  customGallery: [],
  reviews: [],
  userTypedName: false,
  expiresAt: Date.now() + 24 * 3600 * 1000 - 4000
};
let lastSmartSearchResults = [];

const canHoverFine = () =>
  window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

function contactWhatsApp(topic) {
  const msg = topic
    ? `Hola, he visto miweblocal.com y me interesa: ${topic}. ¿Me comentas cómo empezar?`
    : 'Hola, he visto miweblocal.com y quiero información para hacer mi página web.';
  window.open(`https://wa.me/${FATHI_WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

/* ==========================================================================
   1. HERO DIRECT GENERATOR & SHAREABLE 24H LINK ENGINE (#crear)
   ========================================================================== */
function buildGeneratorSectorChips() {
  const box = document.getElementById('gen-sector-chips');
  if (!box) return;

  box.innerHTML = SHOWCASE_MODELS.map(m => {
    const active = m.id === genState.sectorId;
    return `
      <button type="button"
              data-gen-sec="${escapeHtml(m.id)}"
              onclick="selectGeneratorSector('${escapeHtml(m.id)}', false)"
              class="gen-sector-chip btn-press ${active ? 'is-active' : ''}">
        <i class="ph-bold ${m.icon}"></i>
        <span>${escapeHtml(m.shortLabel)}</span>
      </button>
    `;
  }).join('');
}

function stopHeroAutoTimer() {
  userInteractedWithGenerator = true;
  if (heroTimer) {
    clearInterval(heroTimer);
    heroTimer = null;
  }
}

function selectGeneratorSector(sectorId, scrollToGen, fromStage) {
  const model = SHOWCASE_MODELS.find(m => m.id === sectorId) || SHOWCASE_MODELS[0];
  genState.sectorId = model.id;

  if (!fromStage) {
    stopHeroAutoTimer();
  }

  const nameInput = document.getElementById('gen-name');
  if (nameInput) {
    const curVal = nameInput.value.trim();
    const isSomeDefault = SHOWCASE_MODELS.some(m => m.defaultBizName === curVal);
    if (!genState.userTypedName || isSomeDefault || !curVal) {
      nameInput.value = model.defaultBizName;
      genState.userTypedName = false;
    }
  }

  document.querySelectorAll('.gen-sector-chip').forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute('data-gen-sec') === model.id);
  });

  // Sync Hero 3D Coverflow across ALL 10 models
  const heroIdx = HERO_STAGE_IDS.indexOf(model.id);
  if (!fromStage && heroIdx >= 0 && heroIdx !== currentHeroIdx) {
    setHeroStage(heroIdx, true, true);
  }

  syncGeneratorLive(true);

  if (scrollToGen) {
    closeCinemaModal();
    const sec = document.getElementById('crear');
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function buildShareableSitioPayload() {
  const model = SHOWCASE_MODELS.find(m => m.id === genState.sectorId) || SHOWCASE_MODELS[0];
  const slug = slugifyName(genState.name || model.defaultBizName);
  const pin = typeof miwebGeneratePin === 'function' ? miwebGeneratePin(slug) : 'PRO-4829';
  const fullState = {
    name: genState.name || model.defaultBizName,
    userEditedName: true,
    sector: model.id,
    customSectorLabel: model.title,
    yearsExp: model.badge,
    tagline: model.tagline,
    story: model.story,
    bookingPolicy: 'ambos',
    city: genState.city || 'Madrid',
    address: genState.address || `Centro · ${genState.city || 'Madrid'}`,
    whatsapp: genState.wa || '600 123 456',
    phone: genState.wa || '600 123 456',
    instagram: '@' + slug,
    hoursWeek: genState.hoursWeek || '09:30 – 20:30',
    hoursSat: genState.hoursSat || '10:00 – 14:30',
    hoursSun: genState.hoursSun || 'Cerrado',
    theme: model.theme || 'copper',
    customHeroPhoto: genState.customHeroPhoto || '',
    customGallery: Array.isArray(genState.customGallery) ? genState.customGallery : [],
    reviews: Array.isArray(genState.reviews) ? genState.reviews : [],
    services: model.services,
    modules: {
      booking: true,
      whatsappFloat: true,
      services: true,
      about: true,
      scheduleMap: true,
      gallery: true
    },
    adminPin: pin,
    unlocked: !!genState.unlocked,
    expiresAt: genState.expiresAt
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fullState));
  } catch (e) {}

  if (typeof miwebSaveSiteVault === 'function' && (fullState.customHeroPhoto || (fullState.customGallery && fullState.customGallery.length))) {
    miwebSaveSiteVault(slug, fullState);
  }

  const httpHero = (fullState.customHeroPhoto && /^https?:\/\//.test(fullState.customHeroPhoto)) ? fullState.customHeroPhoto : '';
  const httpGal = (fullState.customGallery || []).filter(u => typeof u === 'string' && /^https?:\/\//.test(u)).slice(0, 4);

  const slim = {
    n: fullState.name,
    s: fullState.sector,
    cs: fullState.customSectorLabel,
    y: fullState.yearsExp,
    tg: fullState.tagline,
    st: fullState.story,
    bp: fullState.bookingPolicy,
    c: fullState.city,
    a: fullState.address,
    w: fullState.whatsapp,
    p: fullState.phone,
    ig: fullState.instagram,
    hw: fullState.hoursWeek,
    hs: fullState.hoursSat,
    hd: fullState.hoursSun,
    th: fullState.theme,
    hp: httpHero,
    gp: httpGal,
    rv: (fullState.reviews || []).slice(0, 3),
    sv: fullState.services,
    md: fullState.modules,
    pin: fullState.adminPin,
    un: !!genState.unlocked,
    ex: fullState.expiresAt
  };

  let encoded = '';
  try {
    encoded = btoa(unescape(encodeURIComponent(JSON.stringify(slim))))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  } catch (e) {}

  const origin = (window.location.origin && window.location.origin.startsWith('http'))
    ? window.location.origin
    : 'https://miweblocal.com';
  return `${origin}/sitio/?negocio=${encodeURIComponent(slug)}&d=${encoded}`;
}

function syncGeneratorLive(fromSectorSwitch) {
  const nameInput = document.getElementById('gen-name');
  const cityInput = document.getElementById('gen-city');
  const waInput = document.getElementById('gen-wa');

  if (!fromSectorSwitch) {
    stopHeroAutoTimer();
    if (nameInput) {
      const curVal = nameInput.value.trim();
      const isSomeDefault = SHOWCASE_MODELS.some(m => m.defaultBizName === curVal);
      if (curVal && !isSomeDefault) {
        genState.userTypedName = true;
      }
    }
  }

  const model = SHOWCASE_MODELS.find(m => m.id === genState.sectorId) || SHOWCASE_MODELS[0];
  genState.name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : model.defaultBizName;
  genState.city = (cityInput && cityInput.value.trim()) ? cityInput.value.trim() : 'Madrid';
  genState.wa = (waInput && waInput.value.trim()) ? waInput.value.trim() : '600 123 456';

  // Update the active 3D card in the Hero so the user sees their business name live on the 3D stage!
  const activeHeroCard = document.querySelector('.hero-deck-card[data-pos="0"]');
  if (activeHeroCard) {
    const tEl = activeHeroCard.querySelector('.js-hero-card-biz');
    const sEl = activeHeroCard.querySelector('.js-hero-card-sub');
    const bEl = activeHeroCard.querySelector('.js-hero-card-topbadge');
    if (tEl) tEl.textContent = `${genState.name} · ${genState.city}`;
    if (sEl) sEl.textContent = `WhatsApp: ${genState.wa} · ${model.solves[0]}`;
    if (bEl) bEl.textContent = `Ordenador + Móvil · ${model.badge}`;
  }

  const urlInput = document.getElementById('gen-share-url');
  const shareUrl = buildShareableSitioPayload();
  if (urlInput) urlInput.value = shareUrl;
}

function triggerInstantGenerate(openPreviewWindow) {
  stopHeroAutoTimer();
  genState.expiresAt = Date.now() + 24 * 3600 * 1000;
  // Auto-detect sector if user typed a recognizable business name (e.g. Clínica / Barbería / Taller) without clicking chips
  const nameVal = (document.getElementById('gen-name')?.value || '').trim();
  if (nameVal && typeof miwebDetectSectorFromText === 'function') {
    const guessed = miwebDetectSectorFromText(nameVal);
    if (guessed && guessed !== 'personal' && genState.sectorId === 'motos' && !/moto/i.test(nameVal)) {
      selectGeneratorSector(guessed, false, false);
    }
  }
  syncGeneratorLive(false);

  const badge = document.getElementById('gen-preview-badge');
  if (badge) {
    badge.textContent = `✓ ¡Lista! Enlace 24h de ${genState.name}:`;
  }

  const resCard = document.getElementById('gen-result-card');
  if (resCard) {
    resCard.classList.remove('is-just-generated');
    void resCard.offsetWidth;
    resCard.classList.add('is-just-generated');
  }

  const unlockBox = document.getElementById('gen-unlock-console');
  if (unlockBox) {
    unlockBox.classList.remove('is-just-generated');
    void unlockBox.offsetWidth;
    unlockBox.classList.add('is-just-generated');
  }

  const activeHeroCard = document.querySelector('.hero-deck-card[data-pos="0"] .hero-bezel-frame');
  if (activeHeroCard) {
    activeHeroCard.classList.remove('is-just-generated');
    void activeHeroCard.offsetWidth;
    activeHeroCard.classList.add('is-just-generated');
  }

  if (openPreviewWindow) {
    openGeneratedSiteTab();
  }
}

/* Buscador Inteligente de 1 Clic (Google Maps / Directorio España + Escudo Anti-Curiosos) */
async function runSmartBusinessSearch(e) {
  if (e && e.preventDefault) e.preventDefault();
  stopHeroAutoTimer();
  const inp = document.getElementById('gen-smart-search');
  const box = document.getElementById('gen-search-results');
  const btn = document.getElementById('gen-smart-btn');
  if (!inp || !box) return;

  const q = inp.value.trim();
  if (q.length < 2) {
    inp.focus();
    return;
  }

  if (btn) btn.disabled = true;
  box.classList.remove('hidden');
  box.innerHTML = `<div class="p-3 text-xs text-emerald-300 flex items-center gap-2"><i class="ph-bold ph-spinner animate-spin"></i><span>Buscando datos de «${escapeHtml(q)}»...</span></div>`;

  try {
    const res = typeof miwebSearchRealBusiness === 'function'
      ? await miwebSearchRealBusiness(q)
      : { ok: true, results: [{ name: q, city: 'Madrid', address: 'Centro', sector: 'personal', source: 'instant' }] };

    lastSmartSearchResults = res.results || [];
    if (!lastSmartSearchResults.length) {
      lastSmartSearchResults = [{ name: q, city: 'Madrid', address: 'Centro', sector: 'personal', source: 'instant' }];
    }

    box.innerHTML = lastSmartSearchResults.map((item, idx) => {
      const mod = SHOWCASE_MODELS.find(m => m.id === item.sector) || SHOWCASE_MODELS[0];
      const tag = item.source === 'google'
        ? '★ Fotos + Reseñas Google Maps'
        : (item.source === 'directory' ? '📍 Local encontrado en España' : '⚡ Creación instantánea');
      return `
        <button type="button"
                onclick="applySmartSearchResult(${idx}, true)"
                class="w-full text-left p-2.5 hover:bg-emerald-500/15 rounded-xl border border-white/10 hover:border-emerald-400/50 transition-all flex items-center justify-between gap-2">
          <div class="min-w-0">
            <div class="text-xs font-extrabold text-white truncate">${escapeHtml(item.name)} · <span class="text-emerald-300">${escapeHtml(item.city)}</span></div>
            <div class="text-[10.5px] text-slate-400 truncate">${escapeHtml(item.address || mod.shortLabel)} · <span class="text-amber-300">${tag}</span></div>
          </div>
          <span class="shrink-0 px-2.5 py-1 rounded-full bg-emerald-400 text-slate-950 font-display font-extrabold text-[10.5px] whitespace-nowrap">
            Ver Mi Web ↗
          </span>
        </button>
      `;
    }).join('');
  } finally {
    if (btn) btn.disabled = false;
  }
}

async function applySmartSearchResult(idx, openWindowNow) {
  const item = lastSmartSearchResults[idx];
  if (!item) return;

  genState.userTypedName = true;
  genState.address = item.address || '';
  genState.hoursWeek = item.hoursWeek || '';
  genState.hoursSat = item.hoursSat || '';
  genState.hoursSun = item.hoursSun || '';
  genState.reviews = Array.isArray(item.reviews) ? item.reviews : [];
  if (Array.isArray(item.photos) && item.photos.length) {
    genState.customHeroPhoto = item.photos[0];
    genState.customGallery = item.photos.slice(0, 4);
  }

  const nameIn = document.getElementById('gen-name');
  const cityIn = document.getElementById('gen-city');
  const waIn = document.getElementById('gen-wa');
  if (nameIn) nameIn.value = item.name || 'Mi Negocio';
  if (cityIn) cityIn.value = item.city || 'Madrid';
  if (waIn && item.phone) waIn.value = item.phone;

  selectGeneratorSector(item.sector || 'personal', false, false);

  if (genState.customHeroPhoto) {
    const activeImg = document.querySelector('.hero-deck-card[data-pos="0"] .hero-deck-img');
    if (activeImg) activeImg.src = genState.customHeroPhoto;
  }

  const box = document.getElementById('gen-search-results');
  if (box) {
    box.innerHTML = `<div class="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-xs text-emerald-200 font-bold flex items-center justify-between gap-2">
      <span>✓ Web de ${escapeHtml(genState.name)} generada (${escapeHtml(genState.city)})</span>
      <button type="button" onclick="openGeneratedSiteTab()" class="px-2.5 py-1 rounded-lg bg-emerald-400 text-slate-950 font-extrabold text-[11px]">Abrir ↗</button>
    </div>`;
  }

  const shareUrl = buildShareableSitioPayload();
  const slug = slugifyName(genState.name);
  if (typeof miwebSaveSiteVault === 'function') {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      await miwebSaveSiteVault(slug, saved);
    } catch (e) {}
  }

  triggerInstantGenerate(false);
  if (openWindowNow) {
    window.open(shareUrl, '_blank', 'noopener');
  }
}

async function handleQuickHeroMobilePhotos(input) {
  const files = Array.from((input && input.files) || []).slice(0, 4);
  if (!files.length || typeof miwebCompressImageFile !== 'function') return;
  stopHeroAutoTimer();
  const badge = document.getElementById('gen-photo-status');
  if (badge) badge.textContent = 'Optimizando fotos...';

  const compressed = [];
  for (const f of files) {
    try {
      compressed.push(await miwebCompressImageFile(f, 1100, 0.78));
    } catch (e) {}
  }
  if (!compressed.length) return;

  genState.customHeroPhoto = compressed[0];
  genState.customGallery = compressed;

  const activeImg = document.querySelector('.hero-deck-card[data-pos="0"] .hero-deck-img');
  if (activeImg) activeImg.src = compressed[0];

  if (badge) {
    badge.textContent = `✓ ${compressed.length} foto(s) de tu local aplicadas`;
    badge.classList.add('text-emerald-300');
  }
  triggerInstantGenerate(false);
}

function openGeneratedSiteTab() {
  const shareUrl = buildShareableSitioPayload();
  window.open(shareUrl, '_blank', 'noopener');
}

function copyGeneratedLink() {
  const shareUrl = buildShareableSitioPayload();
  const badge = document.getElementById('gen-copy-badge');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareUrl).then(() => {
      if (badge) {
        badge.classList.remove('hidden');
        setTimeout(() => badge.classList.add('hidden'), 2600);
      }
    }).catch(() => {});
  }
}

function sendGeneratedLinkToMyWhatsApp() {
  const shareUrl = buildShareableSitioPayload();
  const rawPhone = String(genState.wa || '').replace(/[^0-9]/g, '');
  const isCustomPhone = rawPhone.length >= 9 && rawPhone !== '600123456';
  const targetPhone = isCustomPhone ? (rawPhone.startsWith('34') ? rawPhone : '34' + rawPhone) : '';

  const msg =
    `Aquí tienes el enlace de la web Ordenador + Móvil generada para *${genState.name}* (${genState.city}), activa en modo prueba durante 24 horas:\n` +
    `${shareUrl}`;

  const waUrl = targetPhone
    ? `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`
    : `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank', 'noopener');
}

/* ==========================================================================
   PASARELA STRIPE REAL · 3 PLANES DE PAGO ÚNICO PARA SIEMPRE (79€ / 197€ ⭐ / 297€)
   (WhatsApp reservado exclusivamente para dudas previas a la contratación)
   ========================================================================== */
function switchStripePlan(plan) {
  currentStripePlan = typeof miwebNormalizePlan === 'function'
    ? miwebNormalizePlan(plan)
    : (String(plan).includes('297') ? '297' : (String(plan).includes('79') ? '79' : '197'));

  const tab79 = document.getElementById('stripe-tab-79');
  const tab197 = document.getElementById('stripe-tab-197');
  const tab297 = document.getElementById('stripe-tab-297');

  const offCls = 'p-2.5 sm:p-3 rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-all opacity-75 hover:opacity-100';
  if (tab79) {
    tab79.className = currentStripePlan === '79'
      ? 'p-2.5 sm:p-3 rounded-2xl border border-emerald-400 bg-emerald-500/15 text-left transition-all shadow-lg'
      : offCls;
  }
  if (tab197) {
    tab197.className = currentStripePlan === '197'
      ? 'p-2.5 sm:p-3 rounded-2xl border-2 border-[#818CF8] bg-[#635BFF]/20 text-left transition-all shadow-lg'
      : offCls;
  }
  if (tab297) {
    tab297.className = currentStripePlan === '297'
      ? 'p-2.5 sm:p-3 rounded-2xl border border-amber-400 bg-amber-500/15 text-left transition-all shadow-lg'
      : offCls;
  }

  const PLAN_META = {
    '79': {
      price: '79,00 €',
      title: 'Plan 1 · Web Express + Enlace y Hosting Para Siempre (Pago Único)',
      cta: 'Contratar Web Express · 79 € Pago Único'
    },
    '197': {
      price: '197,00 €',
      title: 'Plan 2 ⭐ Negocio Pro + Google Maps + Dominio .com/.es (Pago Único)',
      cta: 'Contratar Negocio Pro ⭐ · 197 € Pago Único'
    },
    '297': {
      price: '297,00 €',
      title: 'Plan 3 · VIP Catálogo Completo + 3D + Placa QR + Dominio (Pago Único)',
      cta: 'Contratar Plan VIP · 297 € Pago Único'
    }
  };

  const meta = PLAN_META[currentStripePlan] || PLAN_META['197'];
  const itemTitle = document.getElementById('stripe-item-title');
  const itemPrice = document.getElementById('stripe-item-price');
  const totalAmount = document.getElementById('stripe-total-amount');
  const submitLabel = document.getElementById('stripe-submit-label');

  if (itemTitle) itemTitle.textContent = meta.title;
  if (itemPrice) itemPrice.textContent = meta.price;
  if (totalAmount) totalAmount.textContent = meta.price;
  if (submitLabel) submitLabel.textContent = meta.cta;
}

function buildCurrentOrder() {
  const slug = slugifyName(genState.name);
  const emailInput = document.getElementById('stripe-email');
  const domainInput = document.getElementById('stripe-domain');
  const nifInput = document.getElementById('stripe-nif');
  const cleanDom = (domainInput && domainInput.value.trim())
    ? domainInput.value.trim()
    : `${slug}.es`;
  return {
    plan: currentStripePlan,
    name: genState.name,
    city: genState.city,
    whatsapp: genState.wa,
    sector: genState.sectorId,
    slug,
    siteUrl: buildShareableSitioPayload(),
    email: emailInput ? emailInput.value.trim() : '',
    domain: cleanDom,
    legalNif: nifInput ? nifInput.value.trim() : ''
  };
}

let domainCheckTimer = null;
async function checkStripeModalDomain(customVal) {
  const domainInput = document.getElementById('stripe-domain');
  const statusEl = document.getElementById('stripe-domain-status');
  if (!domainInput || !statusEl || typeof miwebCheckDomainLive !== 'function') return;

  if (customVal) domainInput.value = customVal;
  const raw = domainInput.value.trim() || (slugifyName(genState.name) + '.es');
  statusEl.innerHTML = `<span class="text-slate-400">⏳ Comprobando disponibilidad de <strong>${escapeHtml(raw)}</strong>...</span>`;

  const res = await miwebCheckDomainLive(raw, genState.name, genState.city);
  if (!res.ok) {
    statusEl.innerHTML = `<span class="text-amber-300">${escapeHtml(res.error)}</span>`;
    return;
  }
  domainInput.value = res.domain;
  if (res.available) {
    statusEl.innerHTML = `<span class="text-emerald-300 font-bold">✅ ¡Disponible! <strong>${escapeHtml(res.domain)}</strong> está libre hoy para tu negocio.</span>`;
  } else {
    const chips = (res.suggestions || []).map(s =>
      `<button type="button" onclick="checkStripeModalDomain('${escapeHtml(s)}')" class="px-2 py-0.5 rounded-md bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 font-mono font-bold hover:bg-emerald-400/30">${escapeHtml(s)}</button>`
    ).join(' ');
    statusEl.innerHTML = `<span class="text-amber-300 font-semibold">⚠️ ${escapeHtml(res.domain)} ya está ocupado.</span> ${chips ? '<span class="text-slate-300">Libres en 1 clic:</span> ' + chips : ''}`;
  }
}

function scheduleStripeDomainCheck() {
  if (domainCheckTimer) clearTimeout(domainCheckTimer);
  domainCheckTimer = setTimeout(() => checkStripeModalDomain(), 420);
}

function openStripeCheckout(plan) {
  syncGeneratorLive(true);
  switchStripePlan(plan || '197');

  const slug = slugifyName(genState.name);
  const bizEl = document.getElementById('stripe-summary-biz');
  const urlEl = document.getElementById('stripe-summary-url');
  const domainInput = document.getElementById('stripe-domain');

  if (bizEl) bizEl.textContent = `${genState.name} · ${genState.city}`;
  if (urlEl) urlEl.textContent = buildShareableSitioPayload();
  if (domainInput && !domainInput.value) domainInput.value = `${slug}.es`;

  const modal = document.getElementById('stripe-checkout-modal');
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  setTimeout(() => checkStripeModalDomain(), 120);
}

function closeStripeCheckout() {
  const modal = document.getElementById('stripe-checkout-modal');
  if (modal) modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

/* Contratación 100% directa online mediante pasarela oficial Stripe (Pago Único) */
function processAutomaticStripePayment(e) {
  if (e && e.preventDefault) e.preventDefault();
  const order = buildCurrentOrder();
  miwebGoToStripe(order);
}

/* WhatsApp exclusivamente para resolver dudas antes de contratar en la web */
function askWhatsAppNoCommitment(contextNote) {
  const shareUrl = buildShareableSitioPayload();
  const model = SHOWCASE_MODELS.find(m => m.id === genState.sectorId) || SHOWCASE_MODELS[0];
  const msg =
    `Hola, tengo una duda antes de contratar mi web en MiWebLocal.com:\n\n` +
    `• *Duda:* ${contextNote || 'Consulta rápida antes de contratar en la web'}\n` +
    `• *Negocio / Sector:* ${genState.name} (${model.title} · ${genState.city})\n` +
    `• *Vista previa generada:* ${shareUrl}`;
  window.open(`https://wa.me/${FATHI_WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

function activateGeneratedWeb(planDescription) {
  openStripeCheckout(planDescription || '197');
}

function init24hCountdownClocks() {
  const navTimer = document.getElementById('nav-24h-timer');
  const unlockTimer = document.getElementById('gen-unlock-timer');

  const tick = () => {
    const rem = Math.max(0, genState.expiresAt - Date.now());
    const sec = Math.floor(rem / 1000);
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    const str = `${h}:${m}:${s}`;
    if (navTimer) navTimer.textContent = str;
    if (unlockTimer) unlockTimer.textContent = str;
  };
  tick();
  setInterval(tick, 1000);
}

/* ==========================================================================
   2. HERO 3D COVERFLOW STAGE (preserve-3d + Swipe on Mobile + Spring Tilt PC)
   ========================================================================== */
function buildHeroDeck() {
  const stage = document.getElementById('hero-deck-stage');
  if (!stage) return;

  stage.innerHTML = HERO_STAGE_IDS.map((id, idx) => {
    const item = SHOWCASE_MODELS.find(m => m.id === id) || SHOWCASE_MODELS[0];
    return `
      <div class="hero-deck-card" data-idx="${idx}" data-id="${escapeHtml(item.id)}" data-pos="0"
           onclick="handleHeroCardClick(${idx}, '${escapeHtml(item.id)}')">
        <div class="hero-tilt-rig">
          <div class="hero-bezel-frame">
            <div class="hero-screen-clip">
              <img src="${escapeHtml(item.photo)}"
                   alt="${escapeHtml(item.title)}"
                   class="hero-deck-img" />
              <div class="hero-glare"></div>
              <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div class="hero-float-top">
            <span class="float-chip-glass px-3 py-1.5 rounded-full text-[11px] font-bold text-white inline-flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span class="js-hero-card-topbadge">Ordenador + Móvil · ${escapeHtml(item.badge)}</span>
            </span>
            <span class="float-chip-glass hidden sm:inline-flex px-3 py-1.5 rounded-full text-[11px] font-semibold text-emerald-300 items-center gap-1.5">
              <i class="ph-bold ph-infinity"></i>
              <span>Pago Único · Todo Incluido Para Siempre</span>
            </span>
          </div>

          <div class="hero-float-bottom">
            <div class="min-w-0 float-chip-glass rounded-2xl px-3.5 py-2.5">
              <div class="js-hero-card-biz text-[10.5px] uppercase tracking-wider font-extrabold text-emerald-400">${escapeHtml(item.defaultBizName)} · Madrid</div>
              <div class="js-hero-card-sub text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-2 mt-0.5">${escapeHtml(item.solves[0])}</div>
            </div>
            <span class="shrink-0 w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xl" title="Abrir mi web generada">
              <i class="ph-bold ph-arrow-square-out text-base"></i>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const tabsBox = document.getElementById('hero-stage-tabs');
  if (tabsBox) {
    tabsBox.innerHTML = HERO_STAGE_IDS.map((id, idx) => {
      const item = SHOWCASE_MODELS.find(m => m.id === id) || SHOWCASE_MODELS[0];
      const active = idx === currentHeroIdx;
      return `
        <button type="button" onclick="setHeroStage(${idx}, true)"
                class="js-hero-tab ${active ? 'hero-tab-active bg-white text-slate-950 font-extrabold shadow-md' : 'bg-white/[0.06] text-slate-300 border border-white/10 hover:text-white font-semibold'} btn-press relative overflow-hidden px-3 py-1.5 rounded-full text-xs whitespace-nowrap">
          <span>${escapeHtml(item.shortLabel)}</span>
          <span class="hero-tab-progress"></span>
        </button>
      `;
    }).join('');
  }

  updateHeroDeckPositions();
  initHero3DInteractions();
}

function getCircularOffset(idx, activeIdx, total) {
  let diff = idx - activeIdx;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function updateHeroDeckPositions() {
  const total = HERO_STAGE_IDS.length;
  document.querySelectorAll('.hero-deck-card').forEach(card => {
    const idx = Number(card.getAttribute('data-idx') || 0);
    const offset = getCircularOffset(idx, currentHeroIdx, total);
    const clamped = Math.max(-2, Math.min(2, offset));
    card.setAttribute('data-pos', String(clamped));

    if (clamped !== 0) {
      const rig = card.querySelector('.hero-tilt-rig');
      const glare = card.querySelector('.hero-glare');
      if (rig) rig.style.transform = '';
      if (glare) glare.style.opacity = '0';
    }
  });

  document.querySelectorAll('.js-hero-tab').forEach((btn, i) => {
    const active = i === currentHeroIdx;
    btn.className = active
      ? 'js-hero-tab hero-tab-active btn-press relative overflow-hidden px-3 py-1.5 rounded-full bg-white text-slate-950 text-xs font-extrabold whitespace-nowrap shadow-md'
      : 'js-hero-tab btn-press relative overflow-hidden px-3 py-1.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/10 hover:text-white text-xs font-semibold whitespace-nowrap';

    const prog = btn.querySelector('.hero-tab-progress');
    if (prog && active) {
      prog.style.animation = 'none';
      void prog.offsetWidth;
      prog.style.animation = '';
    }
  });
}

function handleHeroCardClick(idx, id) {
  if (idx === currentHeroIdx) {
    openGeneratedSiteTab();
  } else {
    setHeroStage(idx, true, false);
  }
}

function setHeroStage(idx, manual, fromGenerator) {
  currentHeroIdx = (idx + HERO_STAGE_IDS.length) % HERO_STAGE_IDS.length;
  updateHeroDeckPositions();

  const stageSectorId = HERO_STAGE_IDS[currentHeroIdx];
  if (!fromGenerator && stageSectorId) {
    if (manual) {
      stopHeroAutoTimer();
    }
    selectGeneratorSector(stageSectorId, false, true);
  } else {
    syncGeneratorLive(true);
  }
}

function stepHeroStage(delta) {
  setHeroStage(currentHeroIdx + delta, true, false);
}

function restartHeroTimer() {
  if (heroTimer) clearInterval(heroTimer);
  if (userInteractedWithGenerator) return;
  heroTimer = setInterval(() => {
    if (userInteractedWithGenerator) {
      clearInterval(heroTimer);
      heroTimer = null;
      return;
    }
    setHeroStage(currentHeroIdx + 1, false, false);
  }, 4600);
}

function initHero3DInteractions() {
  const viewport = document.getElementById('hero-3d-viewport');
  if (!viewport) return;

  let targetRX = 0;
  let targetRY = 0;
  let currentRX = 0;
  let currentRY = 0;
  let glareX = 0;
  let glareY = 0;
  let isHovering = false;
  let rafId = null;

  function tickHeroSpring() {
    currentRX += (targetRX - currentRX) * 0.11;
    currentRY += (targetRY - currentRY) * 0.11;

    const activeCard = viewport.querySelector('.hero-deck-card[data-pos="0"]');
    if (activeCard) {
      const rig = activeCard.querySelector('.hero-tilt-rig');
      const glare = activeCard.querySelector('.hero-glare');
      if (rig) {
        rig.style.transform = `rotateX(${currentRX.toFixed(2)}deg) rotateY(${currentRY.toFixed(2)}deg)`;
      }
      if (glare) {
        glare.style.opacity = isHovering ? '1' : '0';
        glare.style.transform = `translate3d(${glareX.toFixed(1)}px, ${glareY.toFixed(1)}px, 0)`;
      }
    }

    if (isHovering || Math.abs(currentRX) > 0.05 || Math.abs(currentRY) > 0.05) {
      rafId = requestAnimationFrame(tickHeroSpring);
    } else {
      rafId = null;
      const activeCardDone = viewport.querySelector('.hero-deck-card[data-pos="0"] .hero-tilt-rig');
      if (activeCardDone && canHoverFine()) activeCardDone.style.transform = '';
    }
  }

  viewport.addEventListener('pointermove', e => {
    if (!canHoverFine() || prefersReducedMotion()) return;
    const rect = viewport.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    targetRY = nx * 15;
    targetRX = -ny * 12;
    glareX = nx * rect.width * 0.35;
    glareY = ny * rect.height * 0.35;
    isHovering = true;

    if (!rafId) rafId = requestAnimationFrame(tickHeroSpring);
  });

  viewport.addEventListener('pointerleave', () => {
    isHovering = false;
    targetRX = 0;
    targetRY = 0;
    if (!rafId && canHoverFine()) rafId = requestAnimationFrame(tickHeroSpring);
  });

  let touchStartX = 0;
  let touchStartY = 0;
  viewport.addEventListener('touchstart', e => {
    if (!e.touches || !e.touches[0]) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  viewport.addEventListener('touchend', e => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      stepHeroStage(dx < 0 ? 1 : -1);
    }
  }, { passive: true });
}

/* ==========================================================================
   3. DUAL-DIRECTION 3D INFINITE MARQUEE RIBBON
   ========================================================================== */
function build3DMarquee() {
  const visualTrack = document.getElementById('marquee-visual-track');
  const pillsTrack = document.getElementById('marquee-pills-track');

  if (visualTrack) {
    const cardsHtml = SHOWCASE_MODELS.map(item => `
      <div class="marquee-mini-card shrink-0" onclick="selectGeneratorSector('${escapeHtml(item.id)}', true)">
        <img src="${escapeHtml(item.photo)}" alt="${escapeHtml(item.title)}" loading="lazy" class="marquee-mini-thumb" />
        <div class="pr-1">
          <div class="text-xs font-display font-bold text-white whitespace-nowrap">${escapeHtml(item.title)}</div>
          <div class="text-[10.5px] font-semibold text-emerald-400 whitespace-nowrap">⚡ Generar enlace 24h</div>
        </div>
      </div>
    `).join('');
    visualTrack.innerHTML = cardsHtml + cardsHtml;
  }

  if (pillsTrack) {
    const capabilities = [
      { icon: 'ph-infinity', text: 'Pago Único Para Siempre · Sin Renovar Nunca Más' },
      { icon: 'ph-globe', text: 'Dominio + Hosting Incluidos de por Vida' },
      { icon: 'ph-lightning', text: 'Genera Tu Enlace en 10 Segundos (Prueba 24h)' },
      { icon: 'ph-devices', text: 'Adaptado 100% a Móvil y Ordenador PC con 3D' },
      { icon: 'ph-whatsapp-logo', text: 'Clientes Directos a tu WhatsApp · 0% Comisiones' },
      { icon: 'ph-currency-eur', text: '79 € Web Express · 197 € Negocio Pro ⭐ · 297 € VIP Catálogo' },
      { icon: 'ph-shield-check', text: '0 € al Mes · 0 € al Año · Sin Cuotas Ocultas' }
    ];
    const pillsHtml = capabilities.map(c => `
      <div class="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300 inline-flex items-center gap-2 whitespace-nowrap shrink-0">
        <i class="ph-bold ${c.icon} text-emerald-400 text-sm"></i>
        <span>${escapeHtml(c.text)}</span>
      </div>
    `).join('');
    pillsTrack.innerHTML = pillsHtml + pillsHtml;
  }
}

/* ==========================================================================
   4. UNIFIED "ORDENADOR + MÓVIL" 3D CATALOG (SHOWING ALL 4 SOLUTIONS PER CARD!)
   ========================================================================== */
let activeFilter = 'all';

function filterShowcase(cat) {
  activeFilter = cat;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    const on = btn.getAttribute('data-cat') === cat;
    btn.className = on
      ? 'filter-pill btn-press px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-950 whitespace-nowrap shadow-sm'
      : 'filter-pill btn-press px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/[0.05] text-slate-300 border border-white/10 hover:bg-white/[0.1] hover:text-white whitespace-nowrap';
  });
  renderShowcaseGrid();
}

function renderShowcaseGrid() {
  const grid = document.getElementById('showcase-grid');
  if (!grid) return;

  const list = activeFilter === 'all'
    ? SHOWCASE_MODELS
    : SHOWCASE_MODELS.filter(m => m.cat === activeFilter);

  grid.innerHTML = list.map((item, idx) => {
    const solvesListHtml = (item.solves || []).map(s => `
      <li class="flex items-start gap-2 text-xs text-slate-200 leading-snug">
        <i class="ph-bold ph-check-circle text-emerald-400 text-sm shrink-0 mt-0.5"></i>
        <span>${escapeHtml(s)}</span>
      </li>
    `).join('');

    return `
      <article class="showcase-card">
        <div class="double-bezel js-tilt-card reveal-3d is-visible h-full flex flex-col justify-between" style="--stagger: ${(idx % 2) * 70}ms;">
          <!-- Multi-Plane 3D Media Wrapper -->
          <div class="card-3d-media-shell cursor-pointer" onclick="openCinemaModal('${escapeHtml(item.id)}')">
            <div class="double-bezel-inner">
              <div class="relative aspect-[4/3] bg-[#080A0F] overflow-hidden">
                <img src="${escapeHtml(item.photo)}"
                     alt="${escapeHtml(item.title)}"
                     loading="lazy"
                     class="card-media-img w-full h-full object-cover object-center block" />
                <div class="card-glare"></div>
                <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>
              </div>
            </div>

            <!-- Floating 3D Hardware Badge & Expand Orb (translateZ(28px)) -->
            <div class="card-3d-float-row">
              <span class="float-chip-glass inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-semibold">
                <i class="ph-bold ph-devices text-emerald-400"></i>
                <span>Ordenador + Móvil · ${escapeHtml(item.badge)}</span>
              </span>
              <span class="w-9 h-9 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg" title="Ampliar diseño">
                <i class="ph-bold ph-corners-out text-sm"></i>
              </span>
            </div>
          </div>

          <!-- Pain Eliminated + ALL 4 Concrete Solutions + Self-Service Generator Button -->
          <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4 bg-[#0D1017] rounded-b-[21px] mt-1">
            <div class="space-y-3">
              <div>
                <h3 class="font-display font-extrabold text-base sm:text-xl text-white leading-snug">${escapeHtml(item.title)}</h3>
                <div class="mt-1 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs font-semibold">
                  <i class="ph-bold ph-warning-circle shrink-0"></i>
                  <span>${escapeHtml(item.painTag)}</span>
                </div>
              </div>

              <ul class="space-y-1.5 pt-1 border-t border-white/[0.07]">
                ${solvesListHtml}
              </ul>
            </div>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
              <button type="button"
                      onclick="selectGeneratorSector('${escapeHtml(item.id)}', true)"
                      class="btn-press flex-1 px-4 py-2.5 min-h-[44px] rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-display font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 shadow-lg">
                <i class="ph-bold ph-lightning text-base"></i>
                <span>Generar mi enlace con este diseño (24h)</span>
              </button>
              <button type="button"
                      onclick="openCinemaModal('${escapeHtml(item.id)}')"
                      class="btn-press px-3.5 py-2.5 min-h-[44px] rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/12 text-white font-display font-bold text-xs inline-flex items-center justify-center gap-1.5">
                <i class="ph-bold ph-corners-out text-sm"></i>
                <span>Ampliar</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  bindInteractiveTiltCards();
}

/* ==========================================================================
   5. PC INTERACTIVE 3D TILT + MOBILE SCROLL-LINKED 3D PERSPECTIVE
   ========================================================================== */
function bindInteractiveTiltCards() {
  const cards = document.querySelectorAll('.js-tilt-card');
  cards.forEach(card => {
    if (card.dataset.tiltBound === '1') return;
    card.dataset.tiltBound = '1';

    let raf = null;
    card.addEventListener('pointermove', e => {
      if (!canHoverFine() || prefersReducedMotion()) return;
      const rect = card.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rx = (-ny * 8.5).toFixed(2);
        const ry = (nx * 10.5).toFixed(2);
        card.classList.add('is-tilting');
        card.style.transform = `perspective(1050px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(0, -4px, 0)`;

        const glare = card.querySelector('.card-glare');
        if (glare) {
          const gx = (nx * rect.width * 0.4).toFixed(1);
          const gy = (ny * rect.height * 0.4).toFixed(1);
          glare.style.opacity = '1';
          glare.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
        }
      });
    });

    card.addEventListener('pointerleave', () => {
      if (raf) cancelAnimationFrame(raf);
      card.classList.remove('is-tilting');
      card.style.transform = '';
      const glare = card.querySelector('.card-glare');
      if (glare) glare.style.opacity = '0';
    });
  });
}

function initScroll3DDepth() {
  let ticking = false;

  function updateOnScroll() {
    ticking = false;
    if (prefersReducedMotion() || canHoverFine()) return;

    const vh = window.innerHeight || 800;
    const center = vh * 0.5;
    document.querySelectorAll('#showcase-grid .double-bezel').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -60 || r.top > vh + 60) return;
      const cardCenter = r.top + r.height * 0.5;
      const norm = Math.max(-1, Math.min(1, (cardCenter - center) / (vh * 0.55)));
      const rx = (norm * -5.5).toFixed(2);
      el.style.transform = `perspective(1000px) rotateX(${rx}deg)`;
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateOnScroll);
    }
  }, { passive: true });
}

/* ==========================================================================
   6. FULLSCREEN "ORDENADOR + MÓVIL" LIGHTBOX (100% Unified + Jump to Generator)
   ========================================================================== */
function openCinemaModal(id) {
  const item = SHOWCASE_MODELS.find(m => m.id === id) || SHOWCASE_MODELS[0];
  if (!item) return;
  currentModalId = item.id;

  const modal = document.getElementById('cinema-modal');
  const titleEl = document.getElementById('cinema-title');
  const subEl = document.getElementById('cinema-sub');
  const imgEl = document.getElementById('cinema-photo');
  const solvesEl = document.getElementById('cinema-solves');
  const waBtn = document.getElementById('cinema-wa-btn');

  if (!modal || !imgEl) return;

  if (titleEl) titleEl.textContent = item.title;
  if (subEl) subEl.textContent = item.painTag;

  imgEl.src = item.photo;
  imgEl.alt = item.title;

  if (solvesEl) {
    solvesEl.innerHTML = (item.solves || []).map(s => `
      <div class="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
        <i class="ph-bold ph-check-circle text-emerald-400 text-base shrink-0 mt-0.5"></i>
        <span>${escapeHtml(s)}</span>
      </div>
    `).join('');
  }

  if (waBtn) {
    waBtn.onclick = () => selectGeneratorSector(item.id, true);
  }

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function stepCinemaModal(delta) {
  const idx = SHOWCASE_MODELS.findIndex(m => m.id === currentModalId);
  const nextIdx = ((idx >= 0 ? idx : 0) + delta + SHOWCASE_MODELS.length) % SHOWCASE_MODELS.length;
  openCinemaModal(SHOWCASE_MODELS[nextIdx].id);
}

function closeCinemaModal() {
  const modal = document.getElementById('cinema-modal');
  if (modal) modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

function initScrollReveals() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-3d').forEach(el => el.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('is-visible');
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal-3d').forEach(el => obs.observe(el));
}

window.addEventListener('keydown', e => {
  const modal = document.getElementById('cinema-modal');
  const isOpen = modal && modal.classList.contains('is-open');
  if (!isOpen) return;
  if (e.key === 'Escape') closeCinemaModal();
  if (e.key === 'ArrowRight') stepCinemaModal(1);
  if (e.key === 'ArrowLeft') stepCinemaModal(-1);
});

window.addEventListener('DOMContentLoaded', () => {
  buildHeroDeck();
  build3DMarquee();
  buildGeneratorSectorChips();
  syncGeneratorLive(true);
  init24hCountdownClocks();
  renderShowcaseGrid();
  bindInteractiveTiltCards();
  initScrollReveals();
  initScroll3DDepth();
  restartHeroTimer();

  const sentinel = document.getElementById('hero-cta-sentinel');
  const mobBar = document.getElementById('mobile-wa-bar');
  if (sentinel && mobBar && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      entries.forEach(en => {
        const show = !en.isIntersecting && en.boundingClientRect.top < 0;
        mobBar.classList.toggle('is-hidden', !show);
      });
    }, { threshold: 0 }).observe(sentinel);
  }
});
