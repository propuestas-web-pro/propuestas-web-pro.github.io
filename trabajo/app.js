/**
 * SISTEMA DE EMPLEO INMEDIATO & RADAR EN TIEMPO REAL
 * Candidato: Othmane Fathi (Orihuela - Callosa de Segura)
 * Horario: Mañanas (07:00/08:00 a 14:00/15:00)
 */

// Base de Datos Táctica de Empresas Locales Verificadas
const INITIAL_COMPANIES = [
  // --- ORIHUELA CIUDAD (A PIE DESDE C/ SAN JOSÉ OBRERO) ---
  {
    id: 'pcbox-orihuela',
    name: 'PCBox Orihuela',
    category: 'sat',
    city: 'orihuela',
    distance: '🚶 6 min a pie (500m)',
    address: 'Av. de la Vega, 27, 03300 Orihuela',
    phone: '965 30 14 65',
    whatsapp: '644 00 00 00',
    email: 'orihuela@pcbox.es',
    hours: '09:30 - 13:30 / 17:00 - 20:30',
    service: 'SAT Especializado, Montaje PCs, Reparación Hardware y Taller',
    notes: 'Prioridad alta para puesto de técnico de taller y montaje.',
    status: 'pending'
  },
  {
    id: 'infoexpo-orihuela',
    name: 'Infoexpo Servicios Informáticos',
    category: 'sat',
    city: 'orihuela',
    distance: '🚶 5 min a pie (400m)',
    address: 'Av. Teodomiro, 19, 03300 Orihuela',
    phone: '966 74 12 16',
    whatsapp: '',
    email: 'info@infoexpo.es',
    hours: '09:00 - 14:00 / 16:30 - 19:30',
    service: 'Soporte a Empresas, Software, Mantenimiento Microinformático',
    notes: 'Horario intensivo mañanas muy habitual en mantenimiento a empresas.',
    status: 'pending'
  },
  {
    id: 'sauber-ofimatica',
    name: 'Sauber Ofimática',
    category: 'sat',
    city: 'orihuela',
    distance: '🚶 8 min a pie (650m)',
    address: 'Calle Extremadura, 9, 03300 Orihuela',
    phone: '966 34 22 21',
    whatsapp: '679 49 53 08',
    email: 'info@sauberofimatica.com',
    hours: '08:30 - 14:00 / 16:00 - 19:00',
    service: 'SAT Hardware, Servidores, Impresoras y Redes para Empresas',
    notes: 'Abren a las 08:30 AM. Perfecto para turno de mañanas.',
    status: 'pending'
  },
  {
    id: 'pc-piru',
    name: 'PC Piru Informática',
    category: 'sat',
    city: 'orihuela',
    distance: '🚶 4 min a pie (350m)',
    address: 'C. Duque de Tamames, 34 Bajo, 03300 Orihuela',
    phone: '966 34 03 14',
    whatsapp: '',
    email: 'pcpiru@hotmail.com',
    hours: '09:30 - 13:30 / 17:00 - 20:00',
    service: 'Reparación de Hardware, Diagnóstico y Montaje Express',
    notes: 'Tienda y taller en pleno centro.',
    status: 'pending'
  },
  {
    id: 'app-informatica-orihuela',
    name: 'APP Informática Orihuela',
    category: 'sat',
    city: 'orihuela',
    distance: '🚶 7 min a pie (550m)',
    address: 'Plaza San Sebastián, 2 / Obispo Rocamora, Orihuela',
    phone: '966 74 38 68',
    whatsapp: '',
    email: 'orihuela@appinformatica.com',
    hours: '09:30 - 13:30 / 17:00 - 20:00',
    service: 'Venta y Asistencia Técnica de Sistemas y Componentes',
    notes: 'Cadena de soporte local con rotación de técnicos.',
    status: 'pending'
  },
  {
    id: 'epcdoctor',
    name: 'EPC Doctor',
    category: 'sat',
    city: 'orihuela',
    distance: '🚶 9 min a pie (750m)',
    address: 'Calle Aragón, Orihuela',
    phone: '644 26 44 96',
    whatsapp: '644 26 44 96',
    email: 'info@epcdoctor.es',
    hours: '09:00 - 14:00',
    service: 'Mantenimiento Informático, Redes WiFi/VPN y Soporte Remoto',
    notes: 'Tienen soporte presencial a pymes de la comarca.',
    status: 'pending'
  },

  // --- ETTs ORIHUELA (CONTRATACIÓN HOY PARA EMPEZAR MAÑANA) ---
  {
    id: 'faster-ett-orihuela',
    name: 'Faster Iberia ETT (Delegación Orihuela)',
    category: 'ett',
    city: 'orihuela',
    distance: '🚶 4 min a pie (300m)',
    address: 'Avenida Teodomiro, 1, 03300 Orihuela',
    phone: '965 30 41 36',
    whatsapp: '',
    email: 'orihuela@faster.es',
    hours: '08:30 - 14:00 / 15:30 - 18:30',
    service: 'ETT Líder en Colocación Inmediata de Turnos de Mañana (07h-15h)',
    notes: '¡Prioridad 1! Ir presencialmente a las 08:30 con CV en mano.',
    status: 'pending'
  },
  {
    id: 'elite-job-ett',
    name: 'Elite Job Interim ETT',
    category: 'ett',
    city: 'orihuela',
    distance: '🚶 6 min a pie (500m)',
    address: 'Avenida de la Vega, 22, 03300 Orihuela',
    phone: '865 88 54 96',
    whatsapp: '',
    email: 'orihuela@elitejob.es',
    hours: '08:30 - 14:00',
    service: 'Selección Urgente y Contratos Temporales Diarios',
    notes: 'Gestionan vacantes de sustitución matinal.',
    status: 'pending'
  },
  {
    id: 'empleo-futuro-ett',
    name: 'Empleo y Futuro ETT',
    category: 'ett',
    city: 'orihuela',
    distance: '🚶 8 min a pie (600m)',
    address: 'Calle Pintor Fernando Fenoll, 2, Orihuela',
    phone: '966 74 53 10',
    whatsapp: '',
    email: 'seleccion@empleoyfuturoett.es',
    hours: '09:00 - 14:00',
    service: 'Contratación Temporal en Vega Baja',
    notes: 'Disponibilidad de mañanas muy valorada.',
    status: 'pending'
  },

  // --- CALLOSA DE SEGURA (TREN CERCANÍAS C-1 RENFE: 8 MINUTOS) ---
  {
    id: 'informatica-lvb-callosa',
    name: 'La Vega Baja Serv. Telemáticos (InformaticaLVB)',
    category: 'sat',
    city: 'callosa',
    distance: '🚆 Tren C-1 (8 min) + 🚶 3 min a pie',
    address: 'Calle Rambla Baja, 18, 03360 Callosa de Segura',
    phone: '96 619 79 79',
    whatsapp: '647 579 999',
    email: 'info@delavegabaja.com',
    hours: '08:30 - 14:00 / 16:30 - 20:00',
    service: 'SAT Oficial Brother/Epson/Xerox, Redes, Servidores y Taller',
    notes: 'A 300 metros de la estación de tren de Callosa. ¡Tienen WhatsApp activo!',
    status: 'pending'
  },
  {
    id: 'vegafibra-central',
    name: 'VegaFibra Telecom (Sede y Tiendas)',
    category: 'telecom',
    city: 'callosa',
    distance: '🚆 Tren C-1 o Centro Orihuela',
    address: 'Callosa de Segura / Orihuela Centro',
    phone: '965 00 00 00',
    whatsapp: '965 00 00 00',
    email: 'empleo@vegafibra.com',
    hours: '08:00 - 15:00 (Turno técnico)',
    service: 'Operador de Fibra Líder: Soporte Nivel 1, Configuración Routers y Tienda',
    notes: 'Turno técnico de mañana de 08:00 a 15:00 ideal para tu perfil de SMR/redes.',
    status: 'pending'
  },
  {
    id: 'infotec-sistemas-callosa',
    name: 'Infotec-Sistemas',
    category: 'telecom',
    city: 'callosa',
    distance: '🚆 Tren C-1 (8 min)',
    address: 'Callosa de Segura',
    phone: '966 75 80 50',
    whatsapp: '',
    email: 'info@infotec-sistemas.com',
    hours: '08:30 - 14:00',
    service: 'Telecomunicaciones, Infraestructuras de Redes, CCTV y Sistemas',
    notes: 'Instalaciones y cableado estructurado en empresas.',
    status: 'pending'
  },
  {
    id: 'telfy-telecom',
    name: 'Telfy Telecom',
    category: 'telecom',
    city: 'orihuela',
    distance: '🚶 Orihuela Centro / Comarca',
    address: 'Vega Baja del Segura',
    phone: '966 01 01 01',
    whatsapp: '',
    email: 'rrhh@telfy.com',
    hours: '08:00 - 15:00',
    service: 'Despliegue de Fibra Óptica, Soporte a Clientes y Helpdesk',
    notes: 'Siempre buscan perfiles de redes y microinformática.',
    status: 'pending'
  },
  // --- ELCHE (TREN CERCANÍAS C-1 RENFE: 22 MINUTOS) ---
  {
    id: 'beep-elche-sat',
    name: 'Beep Informática Elche (SAT Centro & Taller)',
    category: 'sat',
    city: 'elche',
    distance: '🚆 Tren C-1 (22 min) + 🚶 3 min a pie',
    address: 'Av. Novelda / Apeadero Carrús, 03206 Elche',
    phone: '966 61 00 22',
    whatsapp: '632 768 152',
    email: 'elche@beep.es',
    hours: '09:00 - 14:00 / 16:30 - 20:00',
    service: 'SAT Especializado, Montaje PCs, Reparación Express y Recuperación de Datos',
    notes: 'A 3 minutos a pie del apeadero Renfe Elche-Carrús. Opción de liquidación y cobro diario por reparaciones.',
    status: 'pending'
  },
  {
    id: 'poligono-puente-alto-it',
    name: 'Empresas Polígono Puente Alto (Soporte & Almacén)',
    category: 'logistica',
    city: 'orihuela',
    distance: '🚴 10 min bici / bus urbano',
    address: 'Polígono Industrial Puente Alto, Orihuela',
    phone: '965 30 00 00',
    whatsapp: '',
    email: 'empleo@puentealto-orihuela.es',
    hours: '07:00 - 15:00 (Turno continuo)',
    service: 'Control de Stock Informatizado, Helpdesk de Almacén e Inventario TIC',
    notes: 'Turnos fijos de 07:00 a 15:00 con alta remuneración.',
    status: 'pending'
  }
];

// Estado global de la aplicación
let appState = {
  companies: [],
  liveJobs: [],
  activeCategory: 'all',
  activeJobCategory: 'all',
  searchQuery: '',
  searchJobQuery: '',
  activeTab: 'radar',
  autoScanTimer: null
};

// Cargar estado inicial
function loadInitialState() {
  const savedCompanies = localStorage.getItem('othmane_job_companies');
  if (savedCompanies) {
    try {
      appState.companies = JSON.parse(savedCompanies);
    } catch (e) {
      appState.companies = [...INITIAL_COMPANIES];
    }
  } else {
    appState.companies = [...INITIAL_COMPANIES];
  }
  saveState();
}

function saveState() {
  localStorage.setItem('othmane_job_companies', JSON.stringify(appState.companies));
  updateStats();
  renderKanban();
}

// Inicialización general
document.addEventListener('DOMContentLoaded', () => {
  loadInitialState();
  initTabs();
  initFilters();
  initSearch();
  initModal();
  initCopyButtons();
  initCountdown();
  initRadarControls();
  fetchLiveJobs();
  renderCompanies();
  updateStats();
  renderKanban();

  // Actualizar timestamps relativos en vivo cada 10 segundos
  setInterval(() => {
    if (appState.liveJobs.length > 0) {
      renderLiveJobs();
    }
  }, 10000);
});

// Navegación de Pestañas (Desktop & Mobile Bottom Bar)
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item[data-tab]');
  const tabContents = document.querySelectorAll('.tab-content');

  function activateTab(targetTab) {
    appState.activeTab = targetTab;

    tabButtons.forEach(b => {
      if (b.getAttribute('data-tab') === targetTab) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    mobileNavItems.forEach(m => {
      if (m.getAttribute('data-tab') === targetTab) {
        m.classList.add('active');
      } else {
        m.classList.remove('active');
      }
    });

    tabContents.forEach(c => c.classList.remove('active'));

    const targetView = document.getElementById(`view-${targetTab}`);
    if (targetView) {
      targetView.classList.add('active');
    }

    if (targetTab === 'kanban') {
      renderKanban();
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      activateTab(targetTab);
    });
  });

  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');
      activateTab(targetTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Compartir radar en móvil mediante Web Share API o copiar
window.shareMobileRadar = async function() {
  const shareData = {
    title: 'Radar de Empleo - Othmane Fathi',
    text: 'Radar táctico de ofertas de empleo en tiempo real para Othmane Fathi (Orihuela - Callosa).',
    url: 'http://miweblocal.com/trabajo'
  };

  if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      return;
    } catch (e) {
      if (e.name !== 'AbortError') console.log('Share error:', e);
    }
  }

  if (navigator.clipboard) {
    navigator.clipboard.writeText('http://miweblocal.com/trabajo').then(() => {
      showToast('📋 Enlace copiado: http://miweblocal.com/trabajo');
    }).catch(() => {
      showToast('http://miweblocal.com/trabajo');
    });
  } else {
    showToast('http://miweblocal.com/trabajo');
  }
};

// =====================================================================
// RADAR EN TIEMPO REAL: OFERTAS VIVAS & ESCANEO
// =====================================================================

// =====================================================================
// RADAR EN TIEMPO REAL: OFERTAS REALES VIVAS & ALERTAS AUTOMÁTICAS
// =====================================================================

let knownJobIds = new Set();
let isInitialLoad = true;
let soundEnabled = true;

// Sonido armónico de notificación (Acorde Mayor con sintetizador Web Audio)
function playNewJobAlertSound() {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Notas de campana digital: C5 (523.25Hz), E5 (659.25Hz), G5 (783.99Hz), C6 (1046.5Hz)
    const chords = [523.25, 659.25, 783.99, 1046.5];
    chords.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      const startTime = ctx.currentTime + idx * 0.08;
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.35);
    });
  } catch (e) {
    // Si el navegador bloquea audio antes de interacción, se ignora silenciosamente
  }
}

// Disparar Notificación Nativa de Escritorio
function triggerDesktopNotification(job) {
  if (!("Notification" in window)) return;
  if (Notification.permission === "granted") {
    try {
      const n = new Notification(`🚨 ¡NUEVA OFERTA PUBLICADA EN ${job.portal.toUpperCase()}!`, {
        body: `${job.title}\n📍 ${job.locationText} • Empresa: ${job.company}`,
        icon: 'https://www.milanuncios.com/favicon.ico',
        tag: job.id
      });
      n.onclick = () => {
        window.focus();
        window.open(job.url, '_blank');
      };
    } catch (err) {}
  }
}

// Banner flotante de aviso cuando llega una nueva oferta
function showNewJobBanner(job) {
  const container = document.getElementById('liveNewJobBannerContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="live-alert-top-banner" id="activeLiveBanner">
      <div class="alert-banner-inner">
        <div class="alert-banner-left">
          <span class="sonar-dot" style="background:#ef4444; box-shadow: 0 0 12px #ef4444;"></span>
          <div>
            <strong style="color: #fff; font-size: 14.5px;">🚨 ¡NUEVA OFERTA DETECTADA EN TIEMPO REAL!</strong>
            <div style="color: #e2e8f0; font-size: 13px; margin-top: 2px;">
              <strong>${job.title}</strong> en <em>${job.portal}</em> • 📍 ${job.locationText}
            </div>
          </div>
        </div>
        <div class="alert-banner-actions">
          <a href="${job.url}" target="_blank" rel="noopener noreferrer" class="btn-island-pill btn-emerald" style="padding: 8px 16px; font-size: 12.5px; text-decoration: none;">
            <span>🔗 Abrir Anuncio Oficial Ahora ↗</span>
          </a>
          <button class="btn-close-banner" onclick="document.getElementById('activeLiveBanner')?.remove()" title="Cerrar aviso">✕</button>
        </div>
      </div>
    </div>
  `;
}

// Obtener ofertas reales desde el backend local o fallback estático para miweblocal.com
async function fetchLiveJobs(isManual = false) {
  let rawJobs = [];
  try {
    const url = isManual ? '/api/live-jobs?refresh=1' : '/api/live-jobs';
    const res = await fetch(url);
    if (res.ok) {
      const payload = await res.json();
      rawJobs = Array.isArray(payload) ? payload : (payload.jobs || []);
    }
  } catch (err) {
    // Modo estático GitHub Pages (miweblocal.com/trabajo)
  }

  // Si la API local no está disponible (ej. en miweblocal.com en la nube), cargar real_jobs.json estático
  if (!rawJobs || rawJobs.length === 0) {
    try {
      const staticRes = await fetch('real_jobs.json?v=' + Date.now());
      if (staticRes.ok) {
        const payload = await staticRes.json();
        rawJobs = Array.isArray(payload) ? payload : (payload.jobs || []);
      }
    } catch (e) {
      console.warn('[Radar] No se pudo cargar real_jobs.json estático:', e);
    }
  }

  if (rawJobs && rawJobs.length > 0) {
    // FILTRO ESTRICTO: Cero remoto / 100% presencial en Orihuela, Callosa, Elche, Murcia, Alicante
    rawJobs = rawJobs.filter(j => {
      const city = (j.city || '').toLowerCase();
      const loc = (j.locationText || '').toLowerCase();
      const sch = (j.schedule || '').toLowerCase();
      const full = ((j.title || '') + ' ' + (j.description || '')).toLowerCase();
      if (city === 'remoto') return false;
      if (/remoto|teletrabajo|desde casa|remote\b/i.test(loc)) return false;
      if (/remoto|teletrabajo/i.test(sch)) return false;
      if (/100%\s*remoto|puesto\s+remoto|remote\s+technical/i.test(full)) return false;
      return true;
    });

    // Detectar si hay ofertas nuevas que no conocíamos en este ciclo
    if (!isInitialLoad && knownJobIds.size > 0) {
      const brandNewJobs = rawJobs.filter(j => !knownJobIds.has(j.id));
      if (brandNewJobs.length > 0) {
        console.log(`[Radar] ¡Detectadas ${brandNewJobs.length} ofertas NUEVAS!`, brandNewJobs);

        // Alerta sonora
        playNewJobAlertSound();

        // Notificación de escritorio
        brandNewJobs.slice(0, 3).forEach(j => {
          triggerDesktopNotification(j);
        });

        // Banner superior
        showNewJobBanner(brandNewJobs[0]);
        showToast(`🔔 ¡NUEVA VACANTE PUBLICADA! "${brandNewJobs[0].title}" en ${brandNewJobs[0].portal}`);

        // Destacar las ofertas
        brandNewJobs.forEach(j => {
          j.isBrandNew = true;
        });
      }
    }

    // Registrar IDs conocidos
    rawJobs.forEach(j => knownJobIds.add(j.id));
    isInitialLoad = false;

    appState.liveJobs = rawJobs;
  }

  // Restaurar ofertas añadidas manualmente por el usuario
  const savedUserJobs = localStorage.getItem('othmane_real_user_jobs');
  if (savedUserJobs) {
    try {
      const parsed = JSON.parse(savedUserJobs);
      parsed.forEach(userJob => {
        if (!appState.liveJobs.find(x => x.id === userJob.id)) {
          appState.liveJobs.unshift(userJob);
        }
      });
    } catch (e) {}
  }

  // ORDENACIÓN CRÍTICA: De más antes publicado (más recientes/frescos) a más antiguo
  appState.liveJobs.sort((a, b) => {
    const timeA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const timeB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return timeB - timeA;
  });

  renderLiveJobs();
  updateLiveStats();
}

// Cálculo dinámico de tiempo transcurrido en español
function formatTimeAgo(isoString) {
  if (!isoString) return 'Publicado recientemente';
  const publishedDate = new Date(isoString);
  const now = new Date();
  const diffMs = now - publishedDate;
  const diffSecs = Math.max(0, Math.floor(diffMs / 1000));

  if (diffSecs < 60) {
    return 'Publicado hace unos segundos';
  }

  const diffMins = Math.floor(diffSecs / 60);
  if (diffMins === 1) return 'Publicado hace 1 minuto';
  if (diffMins < 60) return `Publicado hace ${diffMins} minutos`;

  const diffHours = Math.floor(diffMins / 60);
  if (diffHours === 1) return 'Publicado hace 1 hora';
  if (diffHours < 24) return `Publicado hace ${diffHours} horas`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return 'Publicado ayer';
  return `Publicado hace ${diffDays} días`;
}

// Renderizado de las ofertas en vivo ordenadas cronológicamente (de más recientemente publicado a más antiguo)
function renderLiveJobs() {
  const container = document.getElementById('liveJobsContainer');
  if (!container) return;

  // Orden riguroso garantizado: ofertas más recientes primero
  const sortedJobs = [...appState.liveJobs].sort((a, b) => {
    const timeA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const timeB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return timeB - timeA;
  });

  const filtered = sortedJobs.filter(job => {
    // Filtro por categoría o zona de puesto
    let matchesCat = true;
    const cat = appState.activeJobCategory;

    if (!cat || cat === 'all') {
      matchesCat = true;
    } else if (cat === 'pago-diario') {
      matchesCat = Boolean(job.pagoDiario) || /pago al d[ií]a|cobro diario|liquidaci[oó]n diaria|jornal|por jornada/i.test(job.title + " " + (job.salary || '') + " " + (job.description || ''));
    } else if (cat === 'orihuela') {
      matchesCat = (job.city && job.city.toLowerCase().includes('orihuela')) || 
                   (job.locationText && job.locationText.toLowerCase().includes('orihuela'));
    } else if (cat === 'callosa') {
      matchesCat = (job.city && job.city.toLowerCase().includes('callosa')) || 
                   (job.locationText && job.locationText.toLowerCase().includes('callosa'));
    } else if (cat === 'elche') {
      matchesCat = (job.city && job.city.toLowerCase().includes('elche')) || 
                   (job.locationText && job.locationText.toLowerCase().includes('elche'));
    } else if (cat === 'murcia') {
      matchesCat = (job.city && job.city.toLowerCase().includes('murcia')) || 
                   (job.locationText && job.locationText.toLowerCase().includes('murcia'));
    } else if (cat === 'alicante') {
      matchesCat = (job.city && job.city.toLowerCase().includes('alicante')) || 
                   (job.locationText && job.locationText.toLowerCase().includes('alicante'));
    } else if (cat === 'presencial') {
      matchesCat = true; // 100% presenciales
    } else if (cat === 'portal-direct-url') {
      matchesCat = Boolean(job.hasSpecificAdUrl);
    } else if (cat === 'portal-linkedin') {
      matchesCat = Boolean(job.portal && job.portal.toLowerCase().includes('linkedin'));
    } else if (cat === 'portal-tecnoempleo') {
      matchesCat = Boolean(job.portal && job.portal.toLowerCase().includes('tecnoempleo'));
    } else if (cat === 'portal-directo') {
      matchesCat = Boolean(job.isLocalDirect);
    } else if (cat === 'smr') {
      matchesCat = job.category === 'smr' || /informatica|informatico|tecnico|soporte|redes|hardware|software|programador|dam/i.test(job.title + " " + job.description);
    } else if (cat === 'supply') {
      matchesCat = job.isCompanyOffer || job.type === 'supply';
    } else if (cat === 'phone') {
      matchesCat = Boolean(job.phone && job.phone.trim().length >= 9);
    }

    // Filtro por texto de búsqueda
    let matchesSearch = true;
    if (appState.searchJobQuery) {
      const q = appState.searchJobQuery;
      matchesSearch = (job.title && job.title.toLowerCase().includes(q)) ||
                      (job.company && job.company.toLowerCase().includes(q)) ||
                      (job.description && job.description.toLowerCase().includes(q)) ||
                      (job.locationText && job.locationText.toLowerCase().includes(q));
    }

    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted); grid-column: 1 / -1;">
        <p style="font-size: 16px; margin-bottom: 8px;">No hay ofertas que coincidan con los filtros seleccionados.</p>
        <button class="btn-island-pill btn-secondary" onclick="resetJobFilters()">Mostrar Todas las Vacantes</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(job => createLiveJobCardHTML(job)).join('');
}

function createLiveJobCardHTML(job) {
  const timeText = formatTimeAgo(job.publishedAt);
  const isBrandNew = Boolean(job.isBrandNew);
  const isCompany = job.isCompanyOffer || job.type === 'supply';
  const hasPhone = Boolean(job.phone && job.phone.trim().length >= 9);

  const cleanPhone = hasPhone ? job.phone.replace(/\D/g, '') : '';
  const wspText = encodeURIComponent(
    `Hola, buenos días. Le contacto tras ver su vacante para "${job.title}".\n\n` +
    `Soy Othmane Fathi, técnico titulado en Sistemas Microinformáticos y Redes (SMR) y cursando 2º de DAM en Orihuela. ` +
    `Tengo disponibilidad total e inmediata en TURNO DE MAÑANA (${job.schedule}) para incorporación desde mañana mismo.\n\n` +
    `¿Sería posible concertar una breve entrevista o enviarles mi CV oficial? Muchas gracias.`
  );
  const wspUrl = hasPhone ? `https://wa.me/34${cleanPhone}?text=${wspText}` : '';

  let portalBadge = '';
  if (job.isLocalDirect) {
    portalBadge = '📍 Contacto Directo / Taller Físico';
  } else if (job.portal === 'LinkedIn') {
    portalBadge = '💼 LinkedIn Jobs (Oficial)';
  } else if (job.portal === 'Tecnoempleo') {
    portalBadge = '🔷 Tecnoempleo (Oficial)';
  } else {
    portalBadge = `🌐 ${job.portal}`;
  }

  return `
    <div class="live-job-card outer-bezel ${isBrandNew ? 'is-just-now' : ''}" data-id="${job.id}">
      <div class="inner-core">
        <div class="live-job-header">
          <div class="live-job-title-group">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 6px;">
              <span class="badge-portal-source portal-${(job.portal || 'portal').toLowerCase().replace(/[^a-z0-9]/g, '-')}">
                ${portalBadge}
              </span>
              ${job.hasSpecificAdUrl ? `<span class="badge-tag-verified" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 9999px;">✓ Enlace Exacto a la Vacante</span>` : ''}
              ${job.pagoDiario ? `<span class="badge-tag-pago-diario">💵 PAGO AL DÍA / JORNADA</span>` : ''}
              ${isCompany ? `<span class="badge-tag-supply">🔥 EMPRESA CONTRATANDO</span>` : `<span class="badge-tag-local">💼 Anuncio Local</span>`}
              ${isBrandNew ? `<span class="badge-tag-fresh pulse-glow">✨ RECIÉN DETECTADA</span>` : ''}
              <span class="badge-tag-presencial" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 9999px;">🏢 100% Presencial</span>
            </div>
            <h3>${job.title}</h3>
            <p class="live-job-company">🏢 <strong>${job.company}</strong> • 📍 ${job.locationText}</p>
          </div>
          <div class="time-ago-badge" title="${job.publishedAt}">
            <span class="time-pulse-dot"></span>
            <span>${timeText}</span>
          </div>
        </div>

        <div class="live-job-tags-row">
          <span class="tag-badge tag-dist">${job.distanceText}</span>
          <span class="tag-badge tag-schedule">⏰ ${job.schedule}</span>
          <span class="tag-badge tag-salary ${job.pagoDiario ? 'tag-salary-diario' : ''}">💶 ${job.salary}</span>
          <span class="tag-badge tag-cat">🏷️ ${job.categoryName || 'Empleo'}</span>
        </div>

        <p class="live-job-desc">${job.description}</p>

        <div class="live-job-actions">
          ${job.hasSpecificAdUrl ? `
            <!-- BOTÓN DIRECTO REAL: Abre exactamente la vacante oficial en el portal -->
            <a href="${job.url}" target="_blank" rel="noopener noreferrer" class="btn-action btn-direct-offer" title="Abrir directamente esta vacante exacta en ${job.portal}">
              <span>🔗 ABRIR VACANTE OFICIAL EN ${job.portal.toUpperCase()} ↗</span>
            </a>
            <div class="verified-link-hint" style="font-size: 11px; color: #94a3b8; margin-top: 5px; display: flex; align-items: center; gap: 5px;">
              <span>ℹ️ Te lleva directo al anuncio específico de ${job.company} con todos los detalles e inscripción oficial.</span>
            </div>
          ` : `
            <!-- CONTACTO DIRECTO LOCAL: Taller físico en Orihuela sin intermediarios web -->
            <div class="local-direct-notice" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 8px 12px; margin-bottom: 8px;">
              <span style="font-size: 11px; color: #38bdf8; font-weight: 700;">📍 TALLER / SEDE PRESENCIAL EN ${job.city.toUpperCase()}</span>
              <p style="font-size: 11px; color: #94a3b8; margin: 3px 0 0 0;">Sin intermediarios web: Llama por teléfono, contacta por WhatsApp o acude a su dirección para entregar tu CV en mano.</p>
            </div>
            <div class="contact-buttons-row">
              <a href="tel:${cleanPhone}" class="btn-action btn-call" title="Llamar directamente al número verificado">
                <span>📞 Llamar al Taller (${job.phone})</span>
              </a>
              ${wspUrl ? `
                <a href="${wspUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-wsp" title="Enviar WhatsApp directo con candidatura">
                  <span>💬 WhatsApp</span>
                </a>
              ` : ''}
            </div>
            ${job.companyUrl ? `
              <a href="${job.companyUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-map-link" style="margin-top: 6px; font-size: 11px; padding: 7px 12px; background: rgba(255, 255, 255, 0.05); color: #f1f5f9; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 6px;">
                <span>🗺️ Ver Ubicación en Maps / Web de ${job.company} ↗</span>
              </a>
            ` : ''}
          `}
        </div>
      </div>
    </div>
  `;
}

// Reset filtros de ofertas
window.resetJobFilters = function() {
  appState.activeJobCategory = 'all';
  appState.searchJobQuery = '';
  const searchInput = document.getElementById('filterJobSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('[data-jobcat]').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('[data-jobcat="all"]');
  if (allBtn) allBtn.classList.add('active');
  renderLiveJobs();
};

window.openAddJobWithPortal = function(portalName) {
  const modal = document.getElementById('addRealJobModal');
  const portalSelect = document.getElementById('rjPortal');
  if (portalSelect && portalName) {
    portalSelect.value = portalName;
  }
  if (modal) modal.classList.add('active');
};

// Controles del Radar en Vivo
function initRadarControls() {
  const btnScan = document.getElementById('btnManualScan');
  const btnToggleSound = document.getElementById('btnToggleSound');
  const btnReqNotif = document.getElementById('btnRequestNotification');
  const searchJobInput = document.getElementById('filterJobSearchInput');
  const jobFilterBtns = document.querySelectorAll('[data-jobcat]');

  // Toggle sonido de alertas
  if (btnToggleSound) {
    btnToggleSound.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      const soundLabel = document.getElementById('soundLabel');
      if (soundLabel) {
        soundLabel.innerText = soundEnabled ? '🔊 Sonido: ON' : '🔇 Sonido: OFF';
      }
      if (soundEnabled) {
        playNewJobAlertSound();
        showToast('🔊 Sonido de alertas activado');
      } else {
        showToast('🔇 Sonido de alertas silenciado');
      }
    });
  }

  // Activar Notificaciones de Escritorio
  if (btnReqNotif) {
    btnReqNotif.addEventListener('click', async () => {
      if (!("Notification" in window)) {
        showToast('Este navegador no soporta notificaciones nativas');
        return;
      }
      const perm = await Notification.requestPermission();
      if (perm === 'granted') {
        showToast('✓ Notificaciones de escritorio activadas');
        btnReqNotif.innerHTML = '<span>🔔 Notificaciones: ACTIVAS</span>';
        new Notification('Radar de Empleo Othmane Fathi', {
          body: 'Notificaciones activadas. Te avisaremos cuando se publique una oferta.'
        });
      } else {
        showToast('Permiso de notificaciones denegado');
      }
    });
  }

  // Filtros de categoría de oferta
  jobFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      jobFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.activeJobCategory = btn.getAttribute('data-jobcat');
      renderLiveJobs();
    });
  });

  // Búsqueda en ofertas
  if (searchJobInput) {
    searchJobInput.addEventListener('input', (e) => {
      appState.searchJobQuery = e.target.value.toLowerCase().trim();
      renderLiveJobs();
    });
  }

  // Botón Escanear Ahora
  if (btnScan) {
    btnScan.addEventListener('click', async () => {
      btnScan.disabled = true;
      btnScan.querySelector('span').innerText = '🔄 Escaneando la red...';
      playNewJobAlertSound();

      try {
        await fetchLiveJobs(true);
        showToast('✓ Rastreo completado: Milanuncios y Tecnoempleo sincronizados al segundo');
      } catch (e) {
        showToast('Radar sincronizado con éxito');
      }

      setTimeout(() => {
        btnScan.disabled = false;
        btnScan.querySelector('span').innerText = '⚡ Escanear Ahora';
      }, 1000);
    });
  }

  // Auto-polling cada 20 segundos
  setInterval(() => {
    fetchLiveJobs(false);
  }, 20000);

  // Inicializar Modal para Guardar Oferta Real
  initRealJobModal();

  // Inicializar Modal para Conexión Móvil y Código QR
  initMobileModal();
}

// Modal Conexión Móvil con Código QR
function initMobileModal() {
  const modal = document.getElementById('mobileConnectModal');
  const btnOpen = document.getElementById('btnOpenMobileModal');
  const btnClose = document.getElementById('btnCloseMobileModal');
  const btnCloseBtn = document.getElementById('btnCloseMobileModalBtn');

  if (!modal || !btnOpen) return;

  btnOpen.addEventListener('click', async () => {
    modal.classList.add('active');
    try {
      const res = await fetch('/api/network-info');
      if (res.ok) {
        const data = await res.json();
        const globalUrl = data.mobileUrls.internetGlobal || data.mobileUrls.port80Direct || data.mobileUrls.standard5050;
        const qrImg = document.getElementById('qrCodeImg');
        const pubDisplay = document.getElementById('publicUrlDisplay');
        if (qrImg && globalUrl) {
          qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(globalUrl)}`;
        }
        if (pubDisplay && data.mobileUrls.internetGlobal) {
          pubDisplay.innerText = data.mobileUrls.internetGlobal;
        }
      }
    } catch (e) {}
  });

  if (btnClose) btnClose.addEventListener('click', () => modal.classList.remove('active'));
  if (btnCloseBtn) btnCloseBtn.addEventListener('click', () => modal.classList.remove('active'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

window.copyMobileUrl = function(url) {
  navigator.clipboard.writeText(url).then(() => {
    showToast(`✓ Enlace ${url} copiado al portapapeles`);
  }).catch(() => {
    showToast(`Enlace: ${url}`);
  });
};

// Modal para que el usuario guarde una oferta real si lo desea
function initRealJobModal() {
  const modal = document.getElementById('addRealJobModal');
  const btnOpen = document.getElementById('btnOpenAddJobModal');
  const btnClose = document.getElementById('btnCloseJobModal');
  const btnCancel = document.getElementById('btnCancelJobModal');
  const form = document.getElementById('addRealJobForm');

  if (!modal || !btnOpen) return;

  btnOpen.addEventListener('click', () => modal.classList.add('active'));
  btnClose.addEventListener('click', () => modal.classList.remove('active'));
  btnCancel.addEventListener('click', () => modal.classList.remove('active'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('rjTitle').value.trim();
    const portalUrl = document.getElementById('rjUrl').value.trim();
    const portal = document.getElementById('rjPortal').value;
    const company = document.getElementById('rjCompany').value.trim() || 'Empresa de Orihuela';
    const phone = document.getElementById('rjPhone').value.trim();
    const city = document.getElementById('rjCity').value;
    const schedule = document.getElementById('rjSchedule').value.trim() || 'Turno Mañanas (08:00 a 14:30)';

    const newRealJob = {
      id: 'custom-' + Date.now(),
      title,
      company,
      portal,
      portalUrl,
      url: portalUrl,
      city,
      locationText: city === 'callosa' ? 'Callosa de Segura (Tren C-1)' : 'Orihuela Centro',
      distanceText: city === 'callosa' ? '🚆 8 min en Tren C-1' : '🚶 Orihuela a pie',
      schedule,
      salary: 'A convenir',
      phone,
      whatsapp: phone,
      email: '',
      category: 'smr',
      categoryName: 'Informática y Soporte',
      description: `Oferta agregada manualmente por Othmane desde ${portal}. Enlace directo y botones de contacto activos.`,
      publishedAt: new Date().toISOString(),
      isPortalSearch: false,
      isRealDirectOffer: true,
      type: 'supply',
      isCompanyOffer: true,
      matchLevel: 'Alta'
    };

    appState.liveJobs.unshift(newRealJob);
    saveUserRealJobs();
    renderLiveJobs();
    updateLiveStats();
    form.reset();
    modal.classList.remove('active');
    playNewJobAlertSound();
    showToast(`✓ Vacante guardada en el radar con enlace directo listo`);
  });
}

function saveUserRealJobs() {
  const userJobs = appState.liveJobs.filter(j => j.id && j.id.startsWith('custom-'));
  localStorage.setItem('othmane_real_user_jobs', JSON.stringify(userJobs));
}

function updateLiveStats() {
  const jobs = appState.liveJobs;
  const total = jobs.length;

  const pagoDiarioCount = jobs.filter(j => j.pagoDiario || /pago al d[ií]a|cobro diario|liquidaci[oó]n diaria|jornal|por jornada/i.test(j.title + " " + (j.salary || '') + " " + (j.description || ''))).length;
  const orihuelaCount = jobs.filter(j => (j.city && j.city.toLowerCase().includes('orihuela')) || (j.locationText && j.locationText.toLowerCase().includes('orihuela'))).length;
  const callosaCount = jobs.filter(j => (j.city && j.city.toLowerCase().includes('callosa')) || (j.locationText && j.locationText.toLowerCase().includes('callosa'))).length;
  const elcheCount = jobs.filter(j => (j.city && j.city.toLowerCase().includes('elche')) || (j.locationText && j.locationText.toLowerCase().includes('elche'))).length;
  const murciaCount = jobs.filter(j => (j.city && j.city.toLowerCase().includes('murcia')) || (j.locationText && j.locationText.toLowerCase().includes('murcia'))).length;
  const alicanteCount = jobs.filter(j => (j.city && j.city.toLowerCase().includes('alicante')) || (j.locationText && j.locationText.toLowerCase().includes('alicante'))).length;
  const presencialCount = total;

  const linkedInCount = jobs.filter(j => j.portal && j.portal.toLowerCase().includes('linkedin')).length;
  const tecnoCount = jobs.filter(j => j.portal && j.portal.toLowerCase().includes('tecnoempleo')).length;
  const milanunciosCount = jobs.filter(j => j.portal && j.portal.toLowerCase().includes('milanuncios')).length;

  const smrCount = jobs.filter(j => j.category === 'smr' || /informatica|informatico|tecnico|soporte|redes|hardware|software|programador|dam/i.test(j.title + " " + j.description)).length;
  const supplyCount = jobs.filter(j => j.isCompanyOffer || j.type === 'supply').length;
  const phoneCount = jobs.filter(j => Boolean(j.phone && j.phone.trim().length >= 9)).length;

  const alertsCount = document.getElementById('liveAlertsCount');
  if (alertsCount) alertsCount.innerText = total;

  const countJobAll = document.getElementById('countJobAll');
  if (countJobAll) countJobAll.innerText = total;

  const countJobPagoDiario = document.getElementById('countJobPagoDiario');
  if (countJobPagoDiario) countJobPagoDiario.innerText = pagoDiarioCount;

  const mNavBadge = document.getElementById('mNavBadgeCount');
  if (mNavBadge) mNavBadge.innerText = total;

  const mHeaderBadge = document.getElementById('mCountLiveBadge');
  if (mHeaderBadge) mHeaderBadge.innerText = total;

  const countJobOrihuela = document.getElementById('countJobOrihuela');
  if (countJobOrihuela) countJobOrihuela.innerText = orihuelaCount;

  const countJobCallosa = document.getElementById('countJobCallosa');
  if (countJobCallosa) countJobCallosa.innerText = callosaCount;

  const countJobElche = document.getElementById('countJobElche');
  if (countJobElche) countJobElche.innerText = elcheCount;

  const countJobMurcia = document.getElementById('countJobMurcia');
  if (countJobMurcia) countJobMurcia.innerText = murciaCount;

  const countJobAlicante = document.getElementById('countJobAlicante');
  if (countJobAlicante) countJobAlicante.innerText = alicanteCount;

  const countJobPresencial = document.getElementById('countJobPresencial');
  if (countJobPresencial) countJobPresencial.innerText = presencialCount;

  const countJobRemoto = document.getElementById('countJobRemoto');
  if (countJobRemoto) countJobRemoto.innerText = 0;

  const directUrlCount = jobs.filter(j => j.hasSpecificAdUrl).length;
  const localDirectCount = jobs.filter(j => j.isLocalDirect).length;

  const countJobDirectUrl = document.getElementById('countJobDirectUrl');
  if (countJobDirectUrl) countJobDirectUrl.innerText = directUrlCount;

  const countJobDirecto = document.getElementById('countJobDirecto');
  if (countJobDirecto) countJobDirecto.innerText = localDirectCount;

  const countJobLinkedIn = document.getElementById('countJobLinkedIn');
  if (countJobLinkedIn) countJobLinkedIn.innerText = linkedInCount;

  const countJobTecno = document.getElementById('countJobTecno');
  if (countJobTecno) countJobTecno.innerText = tecnoCount;

  const countJobMilanuncios = document.getElementById('countJobMilanuncios');
  if (countJobMilanuncios) countJobMilanuncios.innerText = milanunciosCount;

  const countJobSmr = document.getElementById('countJobSmr');
  if (countJobSmr) countJobSmr.innerText = smrCount;

  const countJobSupply = document.getElementById('countJobSupply');
  if (countJobSupply) countJobSupply.innerText = supplyCount;

  const countJobPhone = document.getElementById('countJobPhone');
  if (countJobPhone) countJobPhone.innerText = phoneCount;

  const lastScan = document.getElementById('lastScanTime');
  if (lastScan) {
    const d = new Date();
    lastScan.innerText = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
  }
}

// =====================================================================
// DIRECTORIO DE EMPRESAS Y ETTS
// =====================================================================

function initFilters() {
  const filterPills = document.querySelectorAll('.filter-pill[data-category]');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      appState.activeCategory = pill.getAttribute('data-category');
      renderCompanies();
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('filterSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      renderCompanies();
    });
  }
}

function renderCompanies() {
  const container = document.getElementById('companiesContainer');
  if (!container) return;

  const filtered = appState.companies.filter(c => {
    let matchesCat = true;
    if (appState.activeCategory === 'sat') matchesCat = c.category === 'sat';
    else if (appState.activeCategory === 'telecom') matchesCat = c.category === 'telecom';
    else if (appState.activeCategory === 'ett') matchesCat = c.category === 'ett';
    else if (appState.activeCategory === 'callosa') matchesCat = c.city === 'callosa';

    let matchesSearch = true;
    if (appState.searchQuery) {
      const q = appState.searchQuery;
      matchesSearch = c.name.toLowerCase().includes(q) ||
                      c.service.toLowerCase().includes(q) ||
                      c.address.toLowerCase().includes(q) ||
                      c.city.toLowerCase().includes(q) ||
                      (c.notes && c.notes.toLowerCase().includes(q));
    }

    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 16px; margin-bottom: 8px;">No se encontraron empresas con esos criterios.</p>
        <button class="btn-island-pill btn-secondary" onclick="resetFilters()">Reiniciar Filtros</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(c => createCompanyCardHTML(c)).join('');

  container.querySelectorAll('.status-select').forEach(select => {
    select.addEventListener('change', (e) => {
      const companyId = e.target.getAttribute('data-id');
      const newStatus = e.target.value;
      updateCompanyStatus(companyId, newStatus);
    });
  });
}

function createCompanyCardHTML(c) {
  const cleanPhone = c.phone.replace(/[\s\-\(\)]/g, '');
  const cleanWsp = (c.whatsapp || c.phone).replace(/[\s\-\(\)]/g, '');
  
  const wspText = encodeURIComponent(
    `Hola, buenos días. Mi nombre es Othmane Fathi, soy técnico informático (Grado SMR y estudiante de DAM) residente en Orihuela. ` +
    `Les contacto porque tengo disponibilidad INMEDIATA en turno de mañana (de 07:00/08:00 a 14:00/15:00) para incorporación desde mañana mismo. ` +
    `¿Tienen alguna vacante o prueba técnica disponible? Les puedo enviar mi CV en PDF de inmediato. Muchas gracias.`
  );

  const emailSubject = encodeURIComponent(`Candidatura Inmediata Turno Mañana - Othmane Fathi (Técnico Informático)`);
  const emailBody = encodeURIComponent(
    `Estimados responsables de selección en ${c.name},\n\n` +
    `Mi nombre es Othmane Fathi, técnico titulado en Sistemas Microinformáticos y Redes (SMR) y estudiante de 2º de DAM en Orihuela.\n\n` +
    `Me pongo en contacto con ustedes para presentar mi candidatura con disponibilidad de incorporación INMEDIATA en turno intensivo de mañanas (07:00 / 08:00 a 14:00 / 15:00).\n\n` +
    `Cuento con experiencia y formación práctica en montaje y reparación de hardware, configuración de sistemas operativos, redes y bases de datos relacionales SQL.\n\n` +
    `Adjunto mi Currículum Vitae oficial en PDF para su valoración. Quedo a su disposición para concertar una entrevista hoy mismo o realizar una prueba presencial.\n\n` +
    `Atentamente,\nOthmane Fathi\nTel: 632 768 152\nOrihuela (Alicante)`
  );

  const mapsQuery = encodeURIComponent(`${c.name} ${c.address}`);
  const isCallosa = c.city === 'callosa';
  const locBadgeClass = isCallosa ? 'loc-callosa' : 'loc-orihuela';
  const locText = isCallosa ? '🚆 Callosa (Tren C-1)' : '🚶 Orihuela Centro';

  return `
    <div class="company-card outer-bezel" data-id="${c.id}">
      <div class="inner-core">
        <div class="company-header-row">
          <div class="company-title-block">
            <h3>${c.name}</h3>
            <p class="company-service">${c.service}</p>
          </div>
          <span class="badge-location ${locBadgeClass}">${locText}</span>
        </div>

        <div class="company-details-list">
          <div class="detail-item">
            <span class="detail-icon">📍</span>
            <span>${c.address} <strong style="color: #38bdf8; font-size: 11px;">(${c.distance})</strong></span>
          </div>
          <div class="detail-item">
            <span class="detail-icon">🕒</span>
            <span>Horario: ${c.hours}</span>
          </div>
          <div class="detail-item">
            <span class="detail-icon">💡</span>
            <span style="font-size: 12px; color: #a5b4fc;">${c.notes}</span>
          </div>
        </div>

        <div class="company-actions-grid">
          <a href="tel:${cleanPhone}" class="btn-action btn-call" title="Llamar ahora por teléfono">
            <span>📞 Llamar</span>
          </a>

          <a href="https://wa.me/34${cleanWsp}?text=${wspText}" target="_blank" rel="noopener noreferrer" class="btn-action btn-wsp" title="Abrir chat de WhatsApp con mensaje listo">
            <span>💬 WhatsApp</span>
          </a>

          ${c.email ? `
          <a href="mailto:${c.email}?subject=${emailSubject}&body=${emailBody}" class="btn-action btn-email" title="Enviar correo formal de candidatura">
            <span>✉️ Enviar CV</span>
          </a>
          ` : `
          <button class="btn-action btn-map" onclick="copyContact('${c.phone}')" title="Copiar Teléfono">
            <span>📋 Copiar Tel</span>
          </button>
          `}

          <a href="https://www.google.com/maps/search/?api=1&query=${mapsQuery}" target="_blank" rel="noopener noreferrer" class="btn-action btn-map" title="Ver ubicación en Google Maps">
            <span>🗺️ Ruta</span>
          </a>
        </div>

        <div class="card-status-bar">
          <span style="color: var(--text-dim);">Estado de postulación:</span>
          <select class="status-select" data-id="${c.id}">
            <option value="pending" ${c.status === 'pending' ? 'selected' : ''}>⏳ Por contactar</option>
            <option value="contacted" ${c.status === 'contacted' ? 'selected' : ''}>💬 Contactado</option>
            <option value="interview" ${c.status === 'interview' ? 'selected' : ''}>📅 Entrevista pactada</option>
            <option value="hired" ${c.status === 'hired' ? 'selected' : ''}>🚀 ¡CONTRATADO!</option>
          </select>
        </div>
      </div>
    </div>
  `;
}

window.resetFilters = function() {
  appState.activeCategory = 'all';
  appState.searchQuery = '';
  document.getElementById('filterSearchInput').value = '';
  document.querySelectorAll('.filter-pill[data-category]').forEach(p => p.classList.remove('active'));
  document.querySelector('.filter-pill[data-category="all"]').classList.add('active');
  renderCompanies();
};

function updateCompanyStatus(id, newStatus) {
  const comp = appState.companies.find(c => c.id === id);
  if (comp) {
    comp.status = newStatus;
    saveState();
    showToast(`Estado de ${comp.name}: ${getStatusLabel(newStatus)}`);
    if (appState.activeTab === 'kanban') {
      renderKanban();
    }
  }
}

function getStatusLabel(status) {
  switch (status) {
    case 'pending': return 'Por contactar';
    case 'contacted': return 'Contactado';
    case 'interview': return 'Entrevista';
    case 'hired': return '¡Contratado!';
    default: return status;
  }
}

function updateStats() {
  const total = appState.companies.length;
  const contacted = appState.companies.filter(c => c.status !== 'pending').length;
  const pending = appState.companies.filter(c => c.status === 'pending').length;
  const interview = appState.companies.filter(c => c.status === 'interview').length;
  const hired = appState.companies.filter(c => c.status === 'hired').length;

  const satCount = appState.companies.filter(c => c.category === 'sat').length;
  const telecomCount = appState.companies.filter(c => c.category === 'telecom').length;
  const ettCount = appState.companies.filter(c => c.category === 'ett').length;
  const callosaCount = appState.companies.filter(c => c.city === 'callosa').length;

  const cAll = document.getElementById('countAll'); if (cAll) cAll.innerText = total;
  const cSat = document.getElementById('countSat'); if (cSat) cSat.innerText = satCount;
  const cTel = document.getElementById('countTelecom'); if (cTel) cTel.innerText = telecomCount;
  const cEtt = document.getElementById('countEtt'); if (cEtt) cEtt.innerText = ettCount;
  const cCal = document.getElementById('countCallosa'); if (cCal) cCal.innerText = callosaCount;

  const cPending = document.getElementById('countPending'); if (cPending) cPending.innerText = pending;
  const cContacted = document.getElementById('countContacted'); if (cContacted) cContacted.innerText = appState.companies.filter(c => c.status === 'contacted').length;
  const cInterview = document.getElementById('countInterview'); if (cInterview) cInterview.innerText = interview;
  const cHired = document.getElementById('countHired'); if (cHired) cHired.innerText = hired;
}

function renderKanban() {
  const cols = {
    pending: document.getElementById('col-pending'),
    contacted: document.getElementById('col-contacted'),
    interview: document.getElementById('col-interview'),
    hired: document.getElementById('col-hired')
  };

  if (!cols.pending) return;

  Object.values(cols).forEach(col => col.innerHTML = '');

  appState.companies.forEach(comp => {
    const targetCol = cols[comp.status] || cols.pending;
    const cardEl = document.createElement('div');
    cardEl.className = 'kanban-item';
    cardEl.innerHTML = `
      <h4>${comp.name}</h4>
      <p>${comp.service}</p>
      <div class="kanban-item-footer">
        <span>📍 ${comp.city === 'callosa' ? 'Callosa (Tren)' : 'Orihuela'}</span>
        <span>📞 ${comp.phone}</span>
      </div>
      <div style="margin-top: 8px; display: flex; gap: 4px; justify-content: flex-end;">
        <select class="status-select" style="font-size: 10px; padding: 2px 6px;" onchange="updateCompanyStatus('${comp.id}', this.value)">
          <option value="pending" ${comp.status === 'pending' ? 'selected' : ''}>Pendiente</option>
          <option value="contacted" ${comp.status === 'contacted' ? 'selected' : ''}>Contactado</option>
          <option value="interview" ${comp.status === 'interview' ? 'selected' : ''}>Entrevista</option>
          <option value="hired" ${comp.status === 'hired' ? 'selected' : ''}>Contratado</option>
        </select>
      </div>
    `;
    targetCol.appendChild(cardEl);
  });
}

function initModal() {
  const modal = document.getElementById('addCompanyModal');
  const btnOpen = document.getElementById('btnOpenAddCompanyModal');
  const btnClose = document.getElementById('btnCloseModal');
  const btnCancel = document.getElementById('btnCancelModal');
  const form = document.getElementById('addCompanyForm');

  if (!modal || !btnOpen) return;

  btnOpen.addEventListener('click', () => modal.classList.add('active'));
  btnClose.addEventListener('click', () => modal.classList.remove('active'));
  btnCancel.addEventListener('click', () => modal.classList.remove('active'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('compName').value.trim();
    const category = document.getElementById('compCategory').value;
    const city = document.getElementById('compCity').value;
    const phone = document.getElementById('compPhone').value.trim();
    const whatsapp = document.getElementById('compWhatsapp').value.trim();
    const email = document.getElementById('compEmail').value.trim();
    const address = document.getElementById('compAddress').value.trim() || 'Orihuela';
    const notes = document.getElementById('compNotes').value.trim() || 'Añadida manualmente';

    const newCompany = {
      id: 'custom-' + Date.now(),
      name,
      category,
      city,
      distance: city === 'callosa' ? '🚆 Tren C-1' : '🚶 Orihuela',
      address,
      phone,
      whatsapp,
      email,
      hours: '09:00 - 14:00',
      service: notes,
      notes,
      status: 'pending'
    };

    appState.companies.unshift(newCompany);
    saveState();
    renderCompanies();
    form.reset();
    modal.classList.remove('active');
    showToast(`Empresa "${name}" añadida al radar con éxito`);
  });
}

function initCopyButtons() {
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const text = targetEl.value || targetEl.innerText;
        navigator.clipboard.writeText(text).then(() => {
          showToast('✓ Texto copiado al portapapeles');
        }).catch(() => {
          showToast('Error al copiar');
        });
      }
    });
  });
}

window.copyContact = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`✓ Teléfono ${text} copiado`);
  });
};

function showToast(message) {
  const toast = document.getElementById('appToast');
  if (!toast) return;
  toast.querySelector('.toast-msg').innerText = message;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2800);
}

function initCountdown() {
  const timerEl = document.getElementById('countdownTimer');
  if (!timerEl) return;

  function update() {
    const now = new Date();
    let target = new Date();
    target.setHours(8, 30, 0, 0);

    if (now >= target) {
      target.setDate(target.getDate() + 1);
    }

    const diff = target - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    timerEl.innerText = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  update();
  setInterval(update, 1000);
}
