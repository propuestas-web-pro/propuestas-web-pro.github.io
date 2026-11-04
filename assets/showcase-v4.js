/* ==========================================================================
   MIWEBLOCAL V6.5 — SELF-SERVICE 3D GENERATOR, 24H SHAREABLE LINK & LIFETIME UNLOCK
   Direct WhatsApp (Activation): +34 632 76 81 52
   ========================================================================== */

const FATHI_WA = '34632768152';
const STORAGE_KEY = 'miweblocal_platform_v5';

const SHOWCASE_MODELS = [
  {
    id: 'motos',
    cat: 'motor',
    shortLabel: 'Motor y Stock',
    icon: 'ph-motorcycle',
    theme: 'crimson',
    defaultBizName: 'Motos Veloce',
    tagline: 'Motos revisadas con garantía y taller multimarca.',
    story: 'Stock revisado en 60 puntos, financiación a medida y cita rápida de taller.',
    badge: 'Motor · Stock 24h',
    title: 'Concesionario y Compra-Venta',
    painTag: 'Deja de mandar fotos sueltas una a una por WhatsApp',
    photo: 'assets/showcase/photo_motos.jpg',
    solves: [
      'Todo tu stock con fotos y precios visible las 24 horas',
      'Solo te escriben compradores ya interesados en un modelo concreto',
      'Botón directo para reservar cita de taller o prueba'
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
    shortLabel: 'Barbería y Salón',
    icon: 'ph-scissors',
    theme: 'copper',
    defaultBizName: 'Barber Studio',
    tagline: 'Degradado al milímetro y afeitado clásico a navaja.',
    story: 'Puntualidad, trato cercano y reserva directa desde tu móvil en 15 segundos.',
    badge: 'Barbería · Citas Directas',
    title: 'Barbería, Peluquería y Salón',
    painTag: 'No pares de cortar para contestar llamadas y mensajes',
    photo: 'assets/showcase/photo_barberia.jpg',
    solves: [
      'El cliente ve tus tarifas claras y elige su tramo horario en segundos',
      'Llenas huecos vacíos incluso cuando estás cerrado',
      '0% comisiones por reserva: el cliente es 100% tuyo'
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
    shortLabel: 'Nuevo Negocio',
    icon: 'ph-briefcase',
    theme: 'gold',
    defaultBizName: 'Nexo Consultoría',
    tagline: 'Soluciones profesionales a medida con resultados desde el primer día.',
    story: 'Atención directa sin intermediarios. Agenda tu consulta o solicita presupuesto por WhatsApp.',
    badge: 'Nuevo Proyecto · Llave en Mano',
    title: 'Nuevo Negocio, Marca Personal o Servicio',
    painTag: '¿Empiezas de cero y no sabes cómo montar tu web?',
    photo: 'assets/showcase/photo_personal.jpg',
    solves: [
      'No necesitas saber informática: lo generas aquí en 10 segundos',
      'Ideal para autónomos, asesores, coaches o cualquier proyecto nuevo',
      'Sales al mercado viéndote serio y profesional desde el día 1'
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
    shortLabel: 'Reformas y Obra',
    icon: 'ph-house-line',
    theme: 'gold',
    defaultBizName: 'Villa & Reformas',
    tagline: 'Reformas integrales, cocinas y baños con plazo cerrado.',
    story: 'Coordinamos todos los gremios con materiales de primera y presupuesto sin sorpresas.',
    badge: 'Reformas · Presupuestos',
    title: 'Reformas, Construcción y Oficios',
    painTag: 'Deja de perder obras grandes por parecer poco profesional',
    photo: 'assets/showcase/photo_reformas.jpg',
    solves: [
      'Enseña tus mejores trabajos en Ordenador + Móvil y genera confianza',
      'Atrae propietarios que buscan calidad y no solo el más barato',
      'Recibe solicitudes de presupuesto filtradas en tu WhatsApp'
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
    title: 'Tienda o Catálogo de Productos',
    painTag: 'Vende tus artículos 24h sin depender solo de redes sociales',
    photo: 'assets/showcase/photo_tienda.jpg',
    solves: [
      'Tus productos ordenados con precios, fotos y disponibilidad',
      'Pedidos directos a tu WhatsApp sin pasarelas complicadas',
      'Sin comisiones por cada venta que hagas'
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
    shortLabel: 'Restaurante y Bar',
    icon: 'ph-hamburger',
    theme: 'copper',
    defaultBizName: 'Brasa & Origen',
    tagline: 'Carnes maduradas al fuego y cocina artesana en vivo.',
    story: 'Consulta nuestra carta con precios y reserva mesa en terraza o salón sin comisiones.',
    badge: 'Hostelería · Carta + Mesas',
    title: 'Restaurante, Cafetería y Comida',
    painTag: 'Que tus platos entren por los ojos antes de que elijan dónde ir',
    photo: 'assets/showcase/photo_restaurante.jpg',
    solves: [
      'Carta fotográfica apetecible que se abre al instante en el móvil',
      'Reservas de mesa o pedidos a recoger directos a tu teléfono',
      'Ahorra el 20–30% que se quedan las apps externas'
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
    shortLabel: 'Taller y Detailing',
    icon: 'ph-wrench',
    theme: 'crimson',
    defaultBizName: 'Apex Auto Detail',
    tagline: 'Mecánica, chapa, pintura y detailing con presupuesto cerrado.',
    story: 'Presupuesto exacto antes de tocar tu vehículo y entrega rápida garantizada.',
    badge: 'Taller · Valoración por Foto',
    title: 'Taller Mecánico, Chapa y Detailing',
    painTag: 'Ahorra visitas en vacío valorando el coche antes por foto',
    photo: 'assets/showcase/photo_taller.jpg',
    solves: [
      'El cliente te envía foto del golpe o servicio directo por WhatsApp',
      'Muestra acabados reales para justificar tus tarifas',
      'Ubicación GPS en 1 toque para llegar directo a tu nave'
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
    shortLabel: 'Clínica y Salud',
    icon: 'ph-heartbeat',
    theme: 'emerald',
    defaultBizName: 'Clínica Aura',
    tagline: 'Odontología avanzada, fisioterapia y salud integral sin esperas.',
    story: 'Tecnología digital avanzada y primera valoración personalizada para tu tranquilidad.',
    badge: 'Salud · Primera Cita',
    title: 'Clínica, Salud y Consultas',
    painTag: 'Transmite la seriedad que un paciente necesita antes de pedir cita',
    photo: 'assets/showcase/photo_clinica.jpg',
    solves: [
      'Explica tus tratamientos y equipo de forma limpia y clara',
      'Capta primeras visitas de alto valor desde Google',
      'Contacto inmediato por WhatsApp o teléfono sin esperas'
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
    shortLabel: 'Estética y Uñas',
    icon: 'ph-sparkle',
    theme: 'cream',
    defaultBizName: 'Maison Lumière',
    tagline: 'Estética facial avanzada, manicura rusa y rituales de autor.',
    story: 'Diagnóstico personalizado, firmas de alta cosmética y cita cómoda sin esperas.',
    badge: 'Estética · Carta de Rituales',
    title: 'Estética, Uñas y Bienestar',
    painTag: 'Evita regateos mostrando tu carta de rituales con imagen de lujo',
    photo: 'assets/showcase/photo_estetica.jpg',
    solves: [
      'Presentación impecable de tratamientos y tarifas claras',
      'Atrae clientela que valora tu trabajo y paga sin regatear',
      'Reserva rápida desde Instagram o Google Maps'
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
    shortLabel: 'Fitness y Gym',
    icon: 'ph-barbell',
    theme: 'emerald',
    defaultBizName: 'Kinetic Club',
    tagline: 'Entrenamiento personal, fuerza y transformación física.',
    story: 'Reserva tu valoración inicial y entrena con planificación a medida presencial u online.',
    badge: 'Fitness · Captación Alumnos',
    title: 'Entrenador Personal, Gym y Deporte',
    painTag: 'Consigue alumnos presenciales u online todas las semanas',
    photo: 'assets/showcase/photo_fitness.jpg',
    solves: [
      'Muestra horarios, planes y resultados en una sola pantalla',
      'Botón directo para reservar clase o valoración gratuita',
      'Funciona tanto si tienes centro físico como si entrenas por tu cuenta'
    ],
    services: [
      { title: 'Sesión de Valoración + Prueba', meta: '45 min · Estudio inicial', price: 'Gratis' },
      { title: 'Entrenamiento Personal 1 a 1', meta: 'Seguimiento + Nutrición', price: '120 €/mes' },
      { title: 'Grupos Reducidos Fuerza & HIIT', meta: 'Máx. 8 personas por turno', price: '69 €/mes' },
      { title: 'Preparación Online Personalizada', meta: 'Contacto directo WhatsApp', price: '59 €/mes' }
    ]
  }
];

const HERO_STAGE_IDS = ['motos', 'barberia', 'personal', 'reformas', 'tienda'];
let currentHeroIdx = 0;
let heroTimer = null;
let currentModalId = 'motos';

/* Generator State */
let genState = {
  sectorId: 'motos',
  name: 'Motos Veloce',
  city: 'Madrid',
  wa: '600 123 456',
  userTypedName: false,
  expiresAt: Date.now() + 24 * 3600 * 1000 - 4000
};

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
   1. SELF-SERVICE 10-SECOND GENERATOR & SHAREABLE 24H LINK ENGINE (#crear)
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

function selectGeneratorSector(sectorId, scrollToGen) {
  const model = SHOWCASE_MODELS.find(m => m.id === sectorId) || SHOWCASE_MODELS[0];
  genState.sectorId = model.id;

  const nameInput = document.getElementById('gen-name');
  if (nameInput && !genState.userTypedName) {
    nameInput.value = model.defaultBizName;
  }

  document.querySelectorAll('.gen-sector-chip').forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute('data-gen-sec') === model.id);
  });

  syncGeneratorLive(true);

  if (scrollToGen) {
    closeCinemaModal();
    const sec = document.getElementById('crear');
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function buildShareableSitioPayload() {
  const model = SHOWCASE_MODELS.find(m => m.id === genState.sectorId) || SHOWCASE_MODELS[0];
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
    address: `Centro · ${genState.city || 'Madrid'}`,
    whatsapp: genState.wa || '600 123 456',
    phone: genState.wa || '600 123 456',
    instagram: '@' + slugifyName(genState.name || model.defaultBizName),
    hoursWeek: '09:30 – 20:30',
    hoursSat: '10:00 – 14:30',
    hoursSun: 'Cerrado',
    theme: model.theme || 'copper',
    services: model.services,
    modules: {
      booking: true,
      whatsappFloat: true,
      services: true,
      about: true,
      scheduleMap: true,
      gallery: true
    },
    unlocked: false,
    expiresAt: genState.expiresAt
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fullState));
  } catch (e) {}

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
    sv: fullState.services,
    md: fullState.modules,
    un: false,
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
  const slug = slugifyName(fullState.name);
  return `${origin}/sitio/?negocio=${encodeURIComponent(slug)}&d=${encoded}`;
}

function syncGeneratorLive(fromSectorSwitch) {
  const nameInput = document.getElementById('gen-name');
  const cityInput = document.getElementById('gen-city');
  const waInput = document.getElementById('gen-wa');

  if (!fromSectorSwitch && nameInput) {
    const model = SHOWCASE_MODELS.find(m => m.id === genState.sectorId) || SHOWCASE_MODELS[0];
    if (nameInput.value.trim() && nameInput.value.trim() !== model.defaultBizName) {
      genState.userTypedName = true;
    }
  }

  const model = SHOWCASE_MODELS.find(m => m.id === genState.sectorId) || SHOWCASE_MODELS[0];
  genState.name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : model.defaultBizName;
  genState.city = (cityInput && cityInput.value.trim()) ? cityInput.value.trim() : 'Madrid';
  genState.wa = (waInput && waInput.value.trim()) ? waInput.value.trim() : '600 123 456';

  const imgEl = document.getElementById('gen-preview-img');
  const sectorEl = document.getElementById('gen-preview-sector');
  const titleEl = document.getElementById('gen-preview-title');
  const waEl = document.getElementById('gen-preview-wa');
  const urlInput = document.getElementById('gen-share-url');

  if (imgEl && imgEl.getAttribute('src') !== model.photo) {
    imgEl.src = model.photo;
    imgEl.alt = model.title;
  }
  if (sectorEl) sectorEl.textContent = `${model.title} · ${genState.city}`;
  if (titleEl) titleEl.textContent = genState.name;
  if (waEl) waEl.textContent = `Reservas y consultas al WhatsApp: ${genState.wa}`;

  const shareUrl = buildShareableSitioPayload();
  if (urlInput) urlInput.value = shareUrl;
}

function triggerInstantGenerate() {
  genState.expiresAt = Date.now() + 24 * 3600 * 1000;
  syncGeneratorLive(false);

  const badge = document.getElementById('gen-preview-badge');
  if (badge) {
    badge.textContent = `¡Lista! Web de ${genState.name} generada`;
  }

  const resCard = document.getElementById('gen-result-card');
  if (resCard) {
    resCard.classList.remove('is-just-generated');
    void resCard.offsetWidth;
    resCard.classList.add('is-just-generated');
    if (window.innerWidth < 1024) {
      resCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
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
    `Aquí tienes el enlace de la web generada para *${genState.name}* (${genState.city}), activa en modo prueba durante 24 horas:\n` +
    `${shareUrl}`;

  const waUrl = targetPhone
    ? `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`
    : `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank', 'noopener');
}

function activateGeneratedWeb(planDescription) {
  const shareUrl = buildShareableSitioPayload();
  const model = SHOWCASE_MODELS.find(m => m.id === genState.sectorId) || SHOWCASE_MODELS[0];
  const msg =
    `Hola, acabo de generar mi web en miweblocal.com y quiero activarla antes de que caduquen las 24 horas:\n` +
    `• Negocio: *${genState.name}* (${genState.city})\n` +
    `• Sector: ${model.title}\n` +
    `• Opción elegida: *${planDescription}*\n` +
    `• Enlace de mi web generada: ${shareUrl}\n` +
    `¿Me indicas cómo hacer el pago único para recibir el dominio y dejarla activa para siempre?`;
  window.open(`https://wa.me/${FATHI_WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

function init24hCountdownClocks() {
  const topTimer = document.getElementById('gen-top-timer');
  const unlockTimer = document.getElementById('gen-unlock-timer');

  const tick = () => {
    const rem = Math.max(0, genState.expiresAt - Date.now());
    const sec = Math.floor(rem / 1000);
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    const str = `${h}:${m}:${s}`;
    if (topTimer) topTimer.textContent = str;
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
          <!-- Base Hardware Bezel & Clipped Studio Image (translateZ(0)) -->
          <div class="hero-bezel-frame">
            <div class="hero-screen-clip">
              <img src="${escapeHtml(item.photo)}"
                   alt="${escapeHtml(item.title)}"
                   class="hero-deck-img" />
              <div class="hero-glare"></div>
              <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <!-- Real 3D Floating Top Chips (translateZ(42px)) -->
          <div class="hero-float-top">
            <span class="float-chip-glass px-3 py-1.5 rounded-full text-[11px] font-bold text-white inline-flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>${escapeHtml(item.badge)}</span>
            </span>
            <span class="float-chip-glass hidden sm:inline-flex px-3 py-1.5 rounded-full text-[11px] font-semibold text-emerald-300 items-center gap-1.5">
              <i class="ph-bold ph-infinity"></i>
              <span>50 € Pago Único · Sin Renovar</span>
            </span>
          </div>

          <!-- Real 3D Floating Bottom Bar (translateZ(36px)) -->
          <div class="hero-float-bottom">
            <div class="min-w-0 float-chip-glass rounded-2xl px-3.5 py-2.5">
              <div class="text-[10px] uppercase tracking-wider font-bold text-emerald-400">${escapeHtml(item.title)}</div>
              <div class="text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-2 mt-0.5">${escapeHtml(item.solves[0])}</div>
            </div>
            <span class="shrink-0 w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xl">
              <i class="ph-bold ph-corners-out text-base"></i>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

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
      ? 'js-hero-tab hero-tab-active btn-press relative overflow-hidden px-3.5 py-2 rounded-full bg-white text-slate-950 text-xs font-extrabold whitespace-nowrap shadow-md'
      : 'js-hero-tab btn-press relative overflow-hidden px-3.5 py-2 rounded-full bg-white/[0.06] text-slate-300 border border-white/10 hover:text-white text-xs font-semibold whitespace-nowrap';

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
    openCinemaModal(id);
  } else {
    setHeroStage(idx, true);
  }
}

function setHeroStage(idx, manual) {
  currentHeroIdx = (idx + HERO_STAGE_IDS.length) % HERO_STAGE_IDS.length;
  updateHeroDeckPositions();
  if (manual) restartHeroTimer();
}

function stepHeroStage(delta) {
  setHeroStage(currentHeroIdx + delta, true);
}

function restartHeroTimer() {
  if (heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    setHeroStage(currentHeroIdx + 1, false);
  }, 4400);
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
          <div class="text-[10.5px] font-semibold text-emerald-400 whitespace-nowrap">⚡ Generar este modelo (24h)</div>
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
      { icon: 'ph-currency-eur', text: '50 € Para Empezar · 200 € Proyecto Completo VIP' },
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
   4. UNIFIED "ORDENADOR + MÓVIL" 3D CATALOG GALLERY
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

  grid.innerHTML = list.map((item, idx) => `
    <article class="showcase-card">
      <div class="double-bezel js-tilt-card reveal-3d is-visible" style="--stagger: ${(idx % 2) * 70}ms;">
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
              <span>Ordenador + Móvil incluidos</span>
            </span>
            <span class="w-9 h-9 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg" title="Ampliar diseño">
              <i class="ph-bold ph-corners-out text-sm"></i>
            </span>
          </div>
        </div>

        <!-- Pain Solved + Instant Self-Service Generator Button -->
        <div class="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 bg-[#0D1017] rounded-b-[21px] mt-1">
          <div class="min-w-0">
            <h3 class="font-display font-bold text-base sm:text-lg text-white leading-snug">${escapeHtml(item.title)}</h3>
            <p class="text-xs sm:text-sm text-emerald-300/95 leading-snug mt-0.5">✓ ${escapeHtml(item.painTag)}</p>
          </div>
          <button type="button"
                  onclick="selectGeneratorSector('${escapeHtml(item.id)}', true)"
                  class="btn-press w-full sm:w-auto shrink-0 px-4 py-2.5 min-h-[44px] rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-display font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5">
            <i class="ph-bold ph-lightning text-base"></i>
            <span>Generar con este diseño</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');

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
  const crearSec = document.getElementById('crear');
  const mobBar = document.getElementById('mobile-wa-bar');
  if (sentinel && mobBar && 'IntersectionObserver' in window) {
    let pastHero = false;
    let inCrear = false;
    const syncMobBar = () => {
      mobBar.classList.toggle('is-hidden', !pastHero || inCrear);
    };
    new IntersectionObserver(entries => {
      entries.forEach(en => {
        pastHero = !en.isIntersecting && en.boundingClientRect.top < 0;
        syncMobBar();
      });
    }, { threshold: 0 }).observe(sentinel);

    if (crearSec) {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          inCrear = en.isIntersecting;
          syncMobBar();
        });
      }, { threshold: 0.08 }).observe(crearSec);
    }
  }
});
