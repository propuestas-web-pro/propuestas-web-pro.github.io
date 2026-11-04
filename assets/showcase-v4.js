/* ==========================================================================
   MIWEBLOCAL V5 — ORDENADOR + MÓVIL SHOWCASE & PAIN-FIRST ENGINE
   Direct WhatsApp: +34 632 76 81 52
   ========================================================================== */

const FATHI_WA = '34632768152';

const SHOWCASE_MODELS = [
  {
    id: 'motos',
    cat: 'motor',
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
   HERO "ORDENADOR + MÓVIL" LIVE STAGE
   ========================================================================== */
function setHeroStage(idx, manual) {
  currentHeroIdx = (idx + HERO_STAGE_IDS.length) % HERO_STAGE_IDS.length;
  const id = HERO_STAGE_IDS[currentHeroIdx];
  const item = SHOWCASE_MODELS.find(m => m.id === id) || SHOWCASE_MODELS[0];

  const imgEl = document.getElementById('hero-stage-img');
  const titleEl = document.getElementById('hero-stage-title');
  const painEl = document.getElementById('hero-stage-pain');
  const stageBox = document.getElementById('hero-stage-click');

  if (stageBox) {
    stageBox.onclick = () => openCinemaModal(item.id);
  }

  if (imgEl) {
    imgEl.classList.add('is-fading');
    imgEl.classList.remove('is-zooming');
    setTimeout(() => {
      imgEl.src = item.photo;
      imgEl.alt = item.title;
      if (titleEl) titleEl.textContent = item.title;
      if (painEl) painEl.textContent = item.solves[0];
      imgEl.classList.remove('is-fading');
      requestAnimationFrame(() => imgEl.classList.add('is-zooming'));
    }, 170);
  }

  document.querySelectorAll('.js-hero-tab').forEach((btn, i) => {
    const active = i === currentHeroIdx;
    btn.classList.toggle('hero-tab-active', active);
    btn.className = active
      ? 'js-hero-tab hero-tab-active btn-press relative overflow-hidden px-3.5 py-2 rounded-full bg-white text-slate-950 text-xs font-extrabold whitespace-nowrap shadow-md'
      : 'js-hero-tab btn-press relative overflow-hidden px-3.5 py-2 rounded-full bg-white/[0.06] text-slate-300 border border-white/10 hover:text-white text-xs font-semibold whitespace-nowrap';
  });

  if (manual) restartHeroTimer();
}

function restartHeroTimer() {
  if (heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    setHeroStage(currentHeroIdx + 1, false);
  }, 4200);
}

/* ==========================================================================
   UNIFIED "ORDENADOR + MÓVIL" CATALOG GALLERY
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

  grid.innerHTML = list.map(item => `
    <article class="showcase-card reveal-item is-visible">
      <div class="double-bezel">
        <div class="double-bezel-inner">
          <!-- Exact Same Ordenador + Móvil Studio Visual -->
          <div class="relative aspect-[4/3] bg-[#080A0F] overflow-hidden cursor-pointer"
               onclick="openCinemaModal('${escapeHtml(item.id)}')">
            <img src="${escapeHtml(item.photo)}"
                 alt="${escapeHtml(item.title)}"
                 loading="lazy"
                 class="card-media-img w-full h-full object-cover object-center block" />

            <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none"></div>

            <div class="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
                <i class="ph-bold ph-devices text-emerald-400"></i>
                <span>Ordenador + Móvil incluidos</span>
              </span>
              <span class="w-9 h-9 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg" title="Ampliar diseño">
                <i class="ph-bold ph-corners-out text-sm"></i>
              </span>
            </div>
          </div>

          <!-- Pain Solved + Direct WhatsApp CTA -->
          <div class="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 bg-[#0D1017]">
            <div class="min-w-0">
              <h3 class="font-display font-bold text-base sm:text-lg text-white truncate">${escapeHtml(item.title)}</h3>
              <p class="text-xs sm:text-sm text-emerald-300/90 truncate mt-0.5">✓ ${escapeHtml(item.painTag)}</p>
            </div>
            <button type="button"
                    onclick="contactWhatsApp('Web estilo ${escapeHtml(item.title)}')"
                    class="btn-press shrink-0 px-4 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-display font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-2">
              <i class="ph-fill ph-whatsapp-logo text-base"></i>
              <span>Quiero una así</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   FULLSCREEN "ORDENADOR + MÓVIL" LIGHTBOX (100% Matching — Zero Discrepancy!)
   ========================================================================== */
function openCinemaModal(id) {
  const item = SHOWCASE_MODELS.find(m => m.id === id);
  if (!item) return;

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

function closeCinemaModal() {
  const modal = document.getElementById('cinema-modal');
  if (modal) modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

function initScrollReveals() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('is-visible'));
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

  document.querySelectorAll('.reveal-item').forEach(el => obs.observe(el));
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCinemaModal();
});

window.addEventListener('DOMContentLoaded', () => {
  renderShowcaseGrid();
  initScrollReveals();

  // Start Hero "Ordenador + Móvil" live stage
  const firstImg = document.getElementById('hero-stage-img');
  if (firstImg) requestAnimationFrame(() => firstImg.classList.add('is-zooming'));
  restartHeroTimer();

  // Smoothly reveal mobile sticky WhatsApp bar after scrolling past Hero CTA
  const sentinel = document.getElementById('hero-cta-sentinel');
  const mobBar = document.getElementById('mobile-wa-bar');
  if (sentinel && mobBar && 'IntersectionObserver' in window) {
    const barObs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        const show = !en.isIntersecting && en.boundingClientRect.top < 0;
        mobBar.classList.toggle('translate-y-24', !show);
        mobBar.classList.toggle('opacity-0', !show);
        mobBar.classList.toggle('pointer-events-none', !show);
      });
    }, { threshold: 0 });
    barObs.observe(sentinel);
  }
});
