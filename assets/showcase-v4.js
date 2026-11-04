/* ==========================================================================
   MIWEBLOCAL V4 — SIMPLE, DIRECT, ULTRA-VISUAL SHOWCASE ENGINE
   Direct WhatsApp: +34 632 76 81 52
   ========================================================================== */

const FATHI_WA = '34632768152';

const SHOWCASE_MODELS = [
  {
    id: 'motos',
    cat: 'motor',
    title: 'Concesionario y Taller de Motos',
    subtitle: 'Catálogo en stock · Precios · Cita de taller',
    photo: 'assets/showcase/photo_motos.jpg',
    video: 'assets/showcase/vid_orero.mp4',
    poster: 'assets/showcase/vid_orero_poster.jpg'
  },
  {
    id: 'barberia',
    cat: 'belleza',
    title: 'Barbería y Grooming Studio',
    subtitle: 'Reserva de hora en 30s · Cortes y tarifas',
    photo: 'assets/showcase/photo_barberia.jpg',
    video: 'assets/showcase/vid_jamal.mp4',
    poster: 'assets/showcase/vid_jamal_poster.jpg'
  },
  {
    id: 'reformas',
    cat: 'reformas',
    title: 'Reformas Integrales y Villas',
    subtitle: 'Galería de obras · Solicitud de presupuesto',
    photo: 'assets/showcase/photo_reformas.jpg',
    video: 'assets/showcase/vid_reformas.mp4',
    poster: 'assets/showcase/vid_reformas_poster.jpg'
  },
  {
    id: 'brunch',
    cat: 'hosteleria',
    title: 'Cafetería, Brunch y Terraza',
    subtitle: 'Carta fotográfica · Reserva de mesa directa',
    photo: 'assets/showcase/photo_restaurante.jpg',
    video: 'assets/showcase/vid_vimacchiata.mp4',
    poster: 'assets/showcase/vid_vimacchiata_poster.jpg'
  },
  {
    id: 'clinica',
    cat: 'salud',
    title: 'Clínica Dental y Estética',
    subtitle: 'Especialidades médicas · Cita online y WhatsApp',
    photo: 'assets/showcase/photo_clinica.jpg',
    video: 'assets/showcase/vid_artedent.mp4',
    poster: 'assets/showcase/vid_artedent_poster.jpg'
  },
  {
    id: 'taller',
    cat: 'motor',
    title: 'Taller de Chapa, Pintura y Detailing',
    subtitle: 'Antes y Después · Valoración por foto WhatsApp',
    photo: 'assets/showcase/photo_taller.jpg',
    video: 'assets/showcase/vid_autolomas.mp4',
    poster: 'assets/showcase/vid_autolomas_poster.jpg'
  },
  {
    id: 'restaurante',
    cat: 'hosteleria',
    title: 'Restaurante y Carta Digital',
    subtitle: 'Platos destacados · Reservas sin comisiones',
    photo: 'assets/showcase/photo_libanes.jpg',
    video: 'assets/showcase/vid_lebano.mp4',
    poster: 'assets/showcase/vid_lebano_poster.jpg'
  },
  {
    id: 'tattoo',
    cat: 'belleza',
    title: 'Estudio de Tatuajes y Arte',
    subtitle: 'Portafolio visual · Cita privada por WhatsApp',
    photo: 'assets/showcase/photo_tattoo.jpg',
    video: 'assets/showcase/vid_tattoo.mp4',
    poster: 'assets/showcase/vid_tattoo_poster.jpg'
  }
];

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${FATHI_WA}?text=${encodeURIComponent(message)}`;
}

function contactWhatsApp(topic) {
  const msg = topic
    ? `Hola, he visto vuestra web miweblocal.com y me interesa: ${topic}. ¿Me das información?`
    : 'Hola, he visto miweblocal.com y quiero información para hacer la web de mi negocio.';
  window.open(buildWhatsAppUrl(msg), '_blank', 'noopener');
}

let activeFilter = 'all';

function filterShowcase(cat) {
  activeFilter = cat;

  document.querySelectorAll('.filter-pill').forEach(btn => {
    const isSelected = btn.getAttribute('data-cat') === cat;
    btn.className = isSelected
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
          <!-- Pure Visual Showcase Area (looks like a real luxury website) -->
          <div class="relative aspect-[4/3] bg-[#080A0F] overflow-hidden cursor-pointer group"
               onclick="openCinemaModal('${escapeHtml(item.id)}')">
            <img src="${escapeHtml(item.photo)}"
                 alt="${escapeHtml(item.title)}"
                 loading="lazy"
                 class="card-media-img w-full h-full object-cover object-center block" />

            <!-- Subtle Gradient Scrim at bottom of image only -->
            <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"></div>

            <!-- Play Video Pill -->
            <div class="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Ver vídeo en movimiento</span>
              </span>
              <span class="w-9 h-9 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg">
                <i class="ph-fill ph-play text-sm ml-0.5"></i>
              </span>
            </div>
          </div>

          <!-- Ultra-Clean 1-Line Footer + Direct WhatsApp Action -->
          <div class="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 bg-[#0D1017]">
            <div class="min-w-0">
              <h3 class="font-display font-bold text-base sm:text-lg text-white truncate">${escapeHtml(item.title)}</h3>
              <p class="text-xs sm:text-sm text-slate-400 truncate mt-0.5">${escapeHtml(item.subtitle)}</p>
            </div>
            <button type="button"
                    onclick="contactWhatsApp('Diseño estilo ${escapeHtml(item.title)}')"
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

let currentModalItem = null;

function openCinemaModal(id) {
  const item = SHOWCASE_MODELS.find(m => m.id === id);
  if (!item) return;
  currentModalItem = item;

  const modal = document.getElementById('cinema-modal');
  const titleEl = document.getElementById('cinema-title');
  const subEl = document.getElementById('cinema-sub');
  const vidEl = document.getElementById('cinema-video');
  const imgEl = document.getElementById('cinema-photo');
  const waBtn = document.getElementById('cinema-wa-btn');

  if (!modal || !vidEl || !imgEl) return;

  if (titleEl) titleEl.textContent = item.title;
  if (subEl) subEl.textContent = item.subtitle;

  imgEl.src = item.photo;
  imgEl.alt = item.title;

  vidEl.poster = item.poster;
  vidEl.src = item.video;
  vidEl.load();
  vidEl.play().catch(() => {});

  if (waBtn) {
    waBtn.onclick = () => contactWhatsApp(`Diseño estilo ${item.title}`);
  }

  setCinemaView('video');
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function setCinemaView(mode) {
  const vidWrap = document.getElementById('cinema-video-wrap');
  const imgWrap = document.getElementById('cinema-photo-wrap');
  const btnVid = document.getElementById('btn-cinema-vid');
  const btnImg = document.getElementById('btn-cinema-img');

  if (!vidWrap || !imgWrap) return;

  const showVideo = mode === 'video';
  vidWrap.classList.toggle('hidden', !showVideo);
  imgWrap.classList.toggle('hidden', showVideo);

  if (btnVid && btnImg) {
    btnVid.className = showVideo
      ? 'btn-press px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-950'
      : 'btn-press px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white';
    btnImg.className = !showVideo
      ? 'btn-press px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-950'
      : 'btn-press px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white';
  }
}

function closeCinemaModal() {
  const modal = document.getElementById('cinema-modal');
  const vidEl = document.getElementById('cinema-video');
  if (vidEl) {
    vidEl.pause();
    vidEl.removeAttribute('src');
  }
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

  // Show mobile sticky WhatsApp bar smoothly only after scrolling past Hero CTA
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

  // Ensure Hero videos autoplay smoothly on all mobile browsers
  document.querySelectorAll('.js-hero-vid').forEach(v => {
    v.muted = true;
    v.play().catch(() => {});
  });
});
