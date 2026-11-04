/* ==========================================================================
   MIWEBLOCAL V6 — 3D COVERFLOW, SPRING TILT, MARQUEE & MOBILE/PC ENGINE
   Direct WhatsApp: +34 632 76 81 52
   ========================================================================== */

const FATHI_WA = '34632768152';

const SHOWCASE_MODELS = [
  {
    id: 'motos',
    cat: 'motor',
    badge: 'Motor · Stock 24h',
    title: 'Concesionario y Compra-Venta',
    painTag: 'Deja de mandar fotos sueltas una a una por WhatsApp',
    photo: 'assets/showcase/photo_motos.jpg',
    solves: [
      'Todo tu stock con fotos y precios visible las 24 horas',
      'Solo te escriben compradores ya interesados en un modelo concreto',
      'Botón directo para reservar cita de taller o prueba'
    ]
  },
  {
    id: 'barberia',
    cat: 'belleza',
    badge: 'Barbería · Citas Directas',
    title: 'Barbería, Peluquería y Salón',
    painTag: 'No pares de cortar para contestar llamadas y mensajes',
    photo: 'assets/showcase/photo_barberia.jpg',
    solves: [
      'El cliente ve tus tarifas claras y elige su tramo horario en segundos',
      'Llenas huecos vacíos incluso cuando estás cerrado',
      '0% comisiones por reserva: el cliente es 100% tuyo'
    ]
  },
  {
    id: 'personal',
    cat: 'emprendedor',
    badge: 'Nuevo Proyecto · Llave en Mano',
    title: 'Nuevo Negocio, Marca Personal o Servicio',
    painTag: '¿Empiezas de cero y no sabes cómo montar tu web?',
    photo: 'assets/showcase/photo_personal.jpg',
    solves: [
      'No necesitas saber informática: nosotros creamos todo por ti',
      'Ideal para autónomos, asesores, coaches o cualquier proyecto nuevo',
      'Sales al mercado viéndote serio y profesional desde el día 1'
    ]
  },
  {
    id: 'reformas',
    cat: 'servicios',
    badge: 'Reformas · Presupuestos',
    title: 'Reformas, Construcción y Oficios',
    painTag: 'Deja de perder obras grandes por parecer poco profesional',
    photo: 'assets/showcase/photo_reformas.jpg',
    solves: [
      'Enseña tus mejores trabajos en Ordenador + Móvil y genera confianza',
      'Atrae propietarios que buscan calidad y no solo el más barato',
      'Recibe solicitudes de presupuesto filtradas en tu WhatsApp'
    ]
  },
  {
    id: 'tienda',
    cat: 'emprendedor',
    badge: 'Tienda Online · Sin Comisiones',
    title: 'Tienda o Catálogo de Productos',
    painTag: 'Vende tus artículos 24h sin depender solo de redes sociales',
    photo: 'assets/showcase/photo_tienda.jpg',
    solves: [
      'Tus productos ordenados con precios, fotos y disponibilidad',
      'Pedidos directos a tu WhatsApp sin pasarelas complicadas',
      'Sin comisiones por cada venta que hagas'
    ]
  },
  {
    id: 'restaurante',
    cat: 'hosteleria',
    badge: 'Hostelería · Carta + Mesas',
    title: 'Restaurante, Cafetería y Comida',
    painTag: 'Que tus platos entren por los ojos antes de que elijan dónde ir',
    photo: 'assets/showcase/photo_restaurante.jpg',
    solves: [
      'Carta fotográfica apetecible que se abre al instante en el móvil',
      'Reservas de mesa o pedidos a recoger directos a tu teléfono',
      'Ahorra el 20–30% que se quedan las apps externas'
    ]
  },
  {
    id: 'taller',
    cat: 'motor',
    badge: 'Taller · Valoración por Foto',
    title: 'Taller Mecánico, Chapa y Detailing',
    painTag: 'Ahorra visitas en vacío valorando el coche antes por foto',
    photo: 'assets/showcase/photo_taller.jpg',
    solves: [
      'El cliente te envía foto del golpe o servicio directo por WhatsApp',
      'Muestra acabados reales para justificar tus tarifas',
      'Ubicación GPS en 1 toque para llegar directo a tu nave'
    ]
  },
  {
    id: 'clinica',
    cat: 'salud',
    badge: 'Salud · Primera Cita',
    title: 'Clínica, Salud y Consultas',
    painTag: 'Transmite la seriedad que un paciente necesita antes de pedir cita',
    photo: 'assets/showcase/photo_clinica.jpg',
    solves: [
      'Explica tus tratamientos y equipo de forma limpia y clara',
      'Capta primeras visitas de alto valor desde Google',
      'Contacto inmediato por WhatsApp o teléfono sin esperas'
    ]
  },
  {
    id: 'estetica',
    cat: 'belleza',
    badge: 'Estética · Carta de Rituales',
    title: 'Estética, Uñas y Bienestar',
    painTag: 'Evita regateos mostrando tu carta de rituales con imagen de lujo',
    photo: 'assets/showcase/photo_estetica.jpg',
    solves: [
      'Presentación impecable de tratamientos y tarifas claras',
      'Atrae clientela que valora tu trabajo y paga sin regatear',
      'Reserva rápida desde Instagram o Google Maps'
    ]
  },
  {
    id: 'fitness',
    cat: 'salud',
    badge: 'Fitness · Captación Alumnos',
    title: 'Entrenador Personal, Gym y Deporte',
    painTag: 'Consigue alumnos presenciales u online todas las semanas',
    photo: 'assets/showcase/photo_fitness.jpg',
    solves: [
      'Muestra horarios, planes y resultados en una sola pantalla',
      'Botón directo para reservar clase o valoración gratuita',
      'Funciona tanto si tienes centro físico como si entrenas por tu cuenta'
    ]
  }
];

const HERO_STAGE_IDS = ['motos', 'barberia', 'personal', 'reformas', 'tienda'];
let currentHeroIdx = 0;
let heroTimer = null;
let currentModalId = 'motos';

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

function contactWhatsApp(topic) {
  const msg = topic
    ? `Hola, he visto miweblocal.com y me interesa: ${topic}. ¿Me comentas cómo empezar?`
    : 'Hola, he visto miweblocal.com y quiero información para hacer mi página web.';
  window.open(`https://wa.me/${FATHI_WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

/* ==========================================================================
   1. HERO 3D COVERFLOW STAGE (preserve-3d + Swipe on Mobile + Spring Tilt PC)
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
              <i class="ph-bold ph-devices"></i>
              <span>Ordenador + Móvil 3D</span>
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

    // Reset tilt rig on non-active cards
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

    // Restart progress bar keyframe cleanly on active tab
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

/* Spring-interpolated 3D mouse rig on PC + 1:1 horizontal swipe on Mobile */
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

    targetRY = nx * 15;   // max ±7.5deg horizontal 3D turn
    targetRX = -ny * 12;  // max ±6deg vertical 3D pitch
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

  // Mobile Touch Swipe (pan-y preserved so vertical scroll is never blocked!)
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
   2. DUAL-DIRECTION 3D INFINITE MARQUEE RIBBON
   ========================================================================== */
function build3DMarquee() {
  const visualTrack = document.getElementById('marquee-visual-track');
  const pillsTrack = document.getElementById('marquee-pills-track');

  if (visualTrack) {
    const cardsHtml = SHOWCASE_MODELS.map(item => `
      <div class="marquee-mini-card shrink-0" onclick="openCinemaModal('${escapeHtml(item.id)}')">
        <img src="${escapeHtml(item.photo)}" alt="${escapeHtml(item.title)}" loading="lazy" class="marquee-mini-thumb" />
        <div class="pr-1">
          <div class="text-xs font-display font-bold text-white whitespace-nowrap">${escapeHtml(item.title)}</div>
          <div class="text-[10.5px] font-semibold text-emerald-400 whitespace-nowrap">${escapeHtml(item.badge)}</div>
        </div>
      </div>
    `).join('');
    // Duplicate exactly twice for seamless -50% translate3d loop
    visualTrack.innerHTML = cardsHtml + cardsHtml;
  }

  if (pillsTrack) {
    const capabilities = [
      { icon: 'ph-cube', text: 'Efectos 3D y Movimiento Fluido 60fps' },
      { icon: 'ph-devices', text: 'Adaptado 100% a Móvil y Ordenador PC' },
      { icon: 'ph-whatsapp-logo', text: 'Clientes Directos a tu WhatsApp' },
      { icon: 'ph-shield-check', text: '0% Comisiones · Sin Cuotas Mensuales' },
      { icon: 'ph-rocket-launch', text: 'Para Locales Físicos y Nuevos Negocios' },
      { icon: 'ph-lightning', text: 'Carga Instantánea en Menos de 1 Segundo' },
      { icon: 'ph-sparkle', text: 'Sin Saber Informática: Lo Hacemos Todo' }
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
   3. UNIFIED "ORDENADOR + MÓVIL" 3D CATALOG GALLERY
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
        <!-- Multi-Plane 3D Media Wrapper (preserve-3d so badge floats at translateZ(28px)) -->
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

        <!-- Pain Solved + Direct WhatsApp CTA -->
        <div class="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 bg-[#0D1017] rounded-b-[21px] mt-1">
          <div class="min-w-0">
            <h3 class="font-display font-bold text-base sm:text-lg text-white leading-snug">${escapeHtml(item.title)}</h3>
            <p class="text-xs sm:text-sm text-emerald-300/95 leading-snug mt-0.5">✓ ${escapeHtml(item.painTag)}</p>
          </div>
          <button type="button"
                  onclick="contactWhatsApp('Web estilo ${escapeHtml(item.title)}')"
                  class="btn-press w-full sm:w-auto shrink-0 px-4 py-2.5 min-h-[44px] rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-display font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-2">
            <i class="ph-fill ph-whatsapp-logo text-base"></i>
            <span>Quiero una así</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  bindInteractiveTiltCards();
}

/* ==========================================================================
   4. PC INTERACTIVE 3D TILT + MOBILE SCROLL-LINKED 3D PERSPECTIVE
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

/* Scroll-linked 3D depth perspective for Mobile touch screens */
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
   5. FULLSCREEN "ORDENADOR + MÓVIL" LIGHTBOX (100% Unified + Prev/Next)
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
    waBtn.onclick = () => contactWhatsApp(`Web Ordenador + Móvil estilo ${item.title}`);
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
  renderShowcaseGrid();
  bindInteractiveTiltCards();
  initScrollReveals();
  initScroll3DDepth();
  restartHeroTimer();

  // Smoothly reveal mobile sticky WhatsApp bar after scrolling past Hero CTA
  const sentinel = document.getElementById('hero-cta-sentinel');
  const mobBar = document.getElementById('mobile-wa-bar');
  if (sentinel && mobBar && 'IntersectionObserver' in window) {
    const barObs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        const show = !en.isIntersecting && en.boundingClientRect.top < 0;
        mobBar.classList.toggle('is-hidden', !show);
      });
    }, { threshold: 0 });
    barObs.observe(sentinel);
  }
});
