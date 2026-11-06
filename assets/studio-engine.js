/* ==========================================================================
   MIWEBLOCAL.COM — COMPILADOR DE WEBS EN VIVO (MOTOR UNIVERSAL DE +65 OFICIOS)
   Incluye los 8 Módulos Interactivos de Solución al WhatsApp según oficio:
   1. medidas_presupuesto     (Carpintero, Aluminio, Cristalero, Tapicero, Reformas...)
   2. urgencia_o_llaves       (Cerrajero/Llavero, Fontanero, Electricista, Grúa...)
   3. motor_diagnostico       (Taller Mecánico, Chapa, Neumáticos, Lavadero, Motos...)
   4. recepcion_taller_local  (Móviles, Tintorería, Zapatería, Bicicletas/Patinetes...)
   5. encargo_sin_cola        (Asador, Panadería, Pizzería, Carnicería, Floristería...)
   6. mesa_carta              (Restaurante, Bar de Tapas, Cafetería y Brunch)
   7. agenda_citas            (Peluquería, Barbería, Clínica, Fisio, Mascotas, Autoescuela...)
   8. filtro_clientes         (Inmobiliaria, Abogados, Asesoría, Fotógrafo, Eventos...)
   ========================================================================== */

const STORAGE_KEY = 'miweblocal_platform_v5';
const FATHI_WHATSAPP = '34632768152';

const DESIGN_THEMES = {
  royal: {
    label: 'Blanco & Azul Real', sub: 'Limpio, moderno y luminoso',
    swatch1: '#FAFBFD', swatch2: '#4F46E5',
    bg: '#FAFBFD', surface: '#F1F5FB', card: '#FFFFFF',
    text: '#0F172A', muted: '#475569', border: 'rgba(15, 23, 42, 0.08)',
    accent: '#4F46E5', accentHi: '#4338CA', accentSoft: '#EEF2FF', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  },
  sage: {
    label: 'Blanco & Esmeralda', sub: 'Salud, Mascotas y Bienestar',
    swatch1: '#F8FAFC', swatch2: '#0D9488',
    bg: '#F9FBFA', surface: '#ECFDF5', card: '#FFFFFF',
    text: '#0F172A', muted: '#475569', border: 'rgba(15, 23, 42, 0.08)',
    accent: '#0D9488', accentHi: '#0F766E', accentSoft: '#CCFBF1', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  },
  atelier: {
    label: 'Marfil & Terracota', sub: 'Madera, Gastronomía y Artesanía',
    swatch1: '#FDFBF7', swatch2: '#C2410C',
    bg: '#FDFBF7', surface: '#F7F2EA', card: '#FFFFFF',
    text: '#1C1917', muted: '#57534E', border: 'rgba(28, 25, 23, 0.09)',
    accent: '#C2410C', accentHi: '#9A3412', accentSoft: '#FFEDD5', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  },
  gold: {
    label: 'Azul Marino & Blanco', sub: 'Oficios, Motor y Despachos',
    swatch1: '#F8FAFC', swatch2: '#1E40AF',
    bg: '#F8FAFC', surface: '#EEF2FF', card: '#FFFFFF',
    text: '#0F172A', muted: '#475569', border: 'rgba(30, 64, 175, 0.12)',
    accent: '#1E40AF', accentHi: '#1E3A8A', accentSoft: '#DBEAFE', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  },
  crimson: {
    label: 'Noche Índigo (Oscuro)', sub: 'Tattoo, Eventos y Estilo Urbano',
    swatch1: '#0F172A', swatch2: '#6366F1',
    bg: '#0F172A', surface: '#1E293B', card: '#1E293B',
    text: '#F8FAFC', muted: '#CBD5E1', border: 'rgba(148, 163, 184, 0.18)',
    accent: '#6366F1', accentHi: '#4F46E5', accentSoft: 'rgba(99, 102, 241, 0.18)', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: false
  }
};

// Construir SECTOR_PRESETS unificado desde oficios-catalog.js (+ respaldo por si se carga aislado)
const SECTOR_PRESETS = (function buildUnifiedPresets() {
  const map = {};
  if (typeof MIWEB_OFICIOS_BY_ID === 'object' && MIWEB_OFICIOS_BY_ID) {
    Object.keys(MIWEB_OFICIOS_BY_ID).forEach(k => {
      map[k] = MIWEB_OFICIOS_BY_ID[k];
    });
  }
  if (!map.peluqueria) {
    map.peluqueria = {
      id: 'peluqueria', label: 'Peluquería y Salón', icon: 'ph-scissors',
      actionType: 'agenda_citas', defaultTheme: 'royal', defaultName: 'Salón Aura',
      yearsExp: 'Reserva Directa', tagline: 'Tu salón de confianza con cita rápida por WhatsApp.',
      story: 'Consulta nuestros servicios con precios claros y elige tu hora en 15 segundos.',
      heroImage: '/assets/real/peluqueria_hero.jpg',
      gallery: ['/assets/real/peluqueria_hero.jpg', '/assets/real/peluqueria_work_1.jpg', '/assets/real/peluqueria_work_2.jpg'],
      services: [
        { title: 'Mechas Balayage + Matiz', meta: 'Diagnóstico y peinado incluido', price: '89 €' },
        { title: 'Corte + Lavado + Peinado', meta: 'Asesoramiento personalizado', price: '32 €' }
      ],
      wcfg: {}
    };
  }
  if (!map.otro) {
    map.otro = typeof miwebBuildCustomOficio === 'function'
      ? miwebBuildCustomOficio('Negocio Especializado Madrid')
      : Object.assign({}, map.peluqueria, { id: 'otro', label: 'Oficio a Medida' });
  }
  return map;
})();

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

function normalizeActionType(rawMode) {
  const m = String(rawMode || '').trim();
  if (m === 'reformas') return 'medidas_presupuesto';
  if (m === 'urgencia') return 'urgencia_o_llaves';
  if (m === 'motor') return 'motor_diagnostico';
  if (m === 'mesa') return 'mesa_carta';
  if (m === 'citas') return 'agenda_citas';
  const valid = [
    'medidas_presupuesto', 'urgencia_o_llaves', 'motor_diagnostico',
    'recepcion_taller_local', 'encargo_sin_cola', 'mesa_carta',
    'agenda_citas', 'filtro_clientes'
  ];
  return valid.includes(m) ? m : 'agenda_citas';
}

function resolvePresetForState(st) {
  if (!st) return SECTOR_PRESETS.peluqueria;
  if (st.sector && st.sector !== 'otro' && SECTOR_PRESETS[st.sector]) {
    return SECTOR_PRESETS[st.sector];
  }
  if (typeof miwebBuildCustomOficio === 'function') {
    const seed = (st.customSectorLabel && st.customSectorLabel !== 'Negocio Local')
      ? `${st.customSectorLabel} ${st.city || ''}`
      : `${st.name || 'Negocio Local'} ${st.city || ''}`;
    const custom = miwebBuildCustomOficio(seed);
    if (st.actionType) custom.actionType = normalizeActionType(st.actionType);
    return custom;
  }
  return SECTOR_PRESETS.otro || SECTOR_PRESETS.peluqueria;
}

function encodeSharePayload(st) {
  try {
    const httpHero = (st.customHeroPhoto && /^https?:\/\//.test(st.customHeroPhoto)) ? st.customHeroPhoto : '';
    const httpGal = Array.isArray(st.customGallery)
      ? st.customGallery.filter(u => typeof u === 'string' && /^https?:\/\//.test(u)).slice(0, 4)
      : [];
    const slim = {
      n: st.name, s: st.sector, cs: st.customSectorLabel || '',
      at: st.actionType || '',
      y: st.yearsExp, tg: st.tagline, st: st.story, bp: st.bookingPolicy,
      c: st.city, a: st.address, w: st.whatsapp, p: st.phone, ig: st.instagram,
      hw: st.hoursWeek, hs: st.hoursSat, hd: st.hoursSun, th: st.theme,
      hp: httpHero, gp: httpGal,
      rv: Array.isArray(st.reviews) ? st.reviews.slice(0, 3) : [],
      lh: st.legalHolder || '', ln: st.legalNif || '', dm: st.desiredDomain || '',
      sv: (st.services || []).slice(0, 12), md: st.modules,
      un: !!st.unlocked, pin: st.adminPin || 'PRO-4829',
      ex: st.expiresAt || (Date.now() + 24 * 3600 * 1000)
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
    const tempRef = {
      name: slim.n,
      sector: slim.s || 'peluqueria',
      customSectorLabel: slim.cs || '',
      city: slim.c || 'Madrid',
      actionType: slim.at || ''
    };
    const def = resolvePresetForState(tempRef);
    return {
      name: slim.n,
      userEditedName: true,
      sector: slim.s || 'peluqueria',
      customSectorLabel: slim.cs || def.label || 'Negocio Local',
      actionType: slim.at || def.actionType || 'agenda_citas',
      yearsExp: slim.y || def.yearsExp,
      tagline: slim.tg || def.tagline,
      story: slim.st || def.story,
      bookingPolicy: slim.bp || 'ambos',
      city: slim.c || 'Madrid',
      address: slim.a || 'Calle Principal 18',
      whatsapp: slim.w || '612 890 345',
      phone: slim.p || '',
      instagram: slim.ig || '',
      hoursWeek: slim.hw || '09:30 a 20:00',
      hoursSat: slim.hs || '09:30 a 14:00',
      hoursSun: slim.hd || 'Cerrado',
      theme: slim.th || def.defaultTheme || 'royal',
      customHeroPhoto: slim.hp || '',
      customGallery: Array.isArray(slim.gp) ? slim.gp : [],
      reviews: Array.isArray(slim.rv) ? slim.rv : [],
      legalHolder: slim.lh || '',
      legalNif: slim.ln || '',
      desiredDomain: slim.dm || '',
      services: Array.isArray(slim.sv) && slim.sv.length ? slim.sv : JSON.parse(JSON.stringify(def.services)),
      modules: Object.assign({
        booking: true, whatsappFloat: true, services: true, about: true,
        scheduleMap: true, gallery: true, reviews: true, faq: true
      }, slim.md || {}),
      unlocked: !!slim.un,
      adminPin: slim.pin || 'PRO-4829',
      expiresAt: slim.ex || (Date.now() + 24 * 3600 * 1000)
    };
  } catch (e) { return null; }
}

function loadStudioState() {
  const def = SECTOR_PRESETS.carpintero || SECTOR_PRESETS.peluqueria;
  const fallback = {
    name: def.defaultName,
    userEditedName: false,
    sector: def.id || 'peluqueria',
    customSectorLabel: def.label || 'Negocio Local',
    actionType: def.actionType || 'agenda_citas',
    yearsExp: def.yearsExp,
    tagline: def.tagline,
    story: def.story,
    bookingPolicy: 'ambos',
    city: 'Madrid',
    address: 'Calle Serrano 42, Local',
    whatsapp: '612 890 345',
    phone: '910 234 567',
    instagram: '',
    hoursWeek: '09:00 a 19:30',
    hoursSat: '09:30 a 14:00',
    hoursSun: 'Cerrado',
    theme: def.defaultTheme || 'royal',
    customHeroPhoto: '',
    customGallery: [],
    services: JSON.parse(JSON.stringify(def.services)),
    modules: {
      booking: true, whatsappFloat: true, services: true, about: true,
      scheduleMap: true, gallery: true, reviews: true, faq: true
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

function saveStudioState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(studioState)); } catch (e) {}
}

function getLiveShareableSiteUrl(customSt) {
  const target = customSt || studioState;
  const slug = slugifyName(target.name);
  return `/sitio/?negocio=${encodeURIComponent(slug)}&d=${encodeSharePayload(target)}`;
}

function getLiveAdminPanelUrl(customSt) {
  const target = customSt || studioState;
  const slug = slugifyName(target.name);
  return `/admin/?negocio=${encodeURIComponent(slug)}&d=${encodeSharePayload(target)}`;
}
// ==========================================================================
// 8 MÓDULOS INTERACTIVOS DE SOLUCIÓN ESPECÍFICA CONECTADOS A WHATSAPP
// ==========================================================================
function buildSectorActionWidgetHTML(st, preset) {
  const mode = normalizeActionType(st.actionType || preset.actionType);
  const wcfg = preset.wcfg || {};
  const srvList = Array.isArray(st.services) && st.services.length ? st.services : (preset.services || []);
  const srvOpts = srvList.map(srv =>
    `<option value="${escapeHtml(srv.title)} (${escapeHtml(srv.price)})">${escapeHtml(srv.title)} · ${escapeHtml(srv.price)}</option>`
  ).join('');

  // 1) MEDIDAS + PRESUPUESTO FILTRADO (Carpintero, Aluminio/PVC, Cristalero, Tapicero, Reformas, Pintor...)
  if (mode === 'medidas_presupuesto') {
    const dimChips = wcfg.dimChips || ['180 × 220 cm', '240 × 240 cm', 'Estancia media', 'Vivienda completa'];
    const mats = wcfg.materials || ['Calidad estándar profesional', 'Acabado blanco / madera', 'Alta gama a medida', 'Aconsejadme material'];
    return `
      <div class="sec-head">
        <span class="sec-pill">Presupuesto filtrado con medidas · Cero visitas en balde</span>
        <h2>${escapeHtml(wcfg.heading || 'Calcula tu solicitud a medida en 30 segundos')}</h2>
        <p class="sec-sub">${escapeHtml(wcfg.sub || 'Indica trabajo, medidas aproximadas y acabado para recibir valoración directa por WhatsApp.')}</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label for="bk-service">1. Trabajo o servicio</label>
              <select id="bk-service">${srvOpts}</select>
            </div>
            <div>
              <label for="bk-material">${escapeHtml(wcfg.matLabel || '3. Acabado o material')}</label>
              <select id="bk-material">
                ${mats.map(m => `<option value="${escapeHtml(m)}">${escapeHtml(m)}</option>`).join('')}
              </select>
            </div>
          </div>
          <label for="bk-dims">${escapeHtml(wcfg.dimLabel || '2. Medidas aproximadas (ancho × alto o m²)')}</label>
          <div class="slots">
            ${dimChips.map((ch, idx) => `<button type="button" class="slot-btn ${idx === 1 ? 'active' : ''}" onclick="pickDimChip(this, '${escapeHtml(ch)}')">${escapeHtml(ch)}</button>`).join('')}
          </div>
          <div class="form-grid">
            <div>
              <input type="text" id="bk-dims" value="${escapeHtml(dimChips[1] || '')}" placeholder="${escapeHtml(wcfg.dimPlaceholder || 'Ej. 240 × 220 cm (o m² aproximados)')}" />
            </div>
            <div>
              <input type="text" id="bk-client" placeholder="Tu nombre y zona · Ej. Javier (${escapeHtml(st.city)})" />
            </div>
          </div>
          <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('medidas_presupuesto')">
            <span>Enviar medidas y pedir presupuesto por WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  // 2) DOBLE MODO: URGENCIA 24H vs COPIA DE LLAVE / MANDO / MODELO (Cerrajero/Llavero, Fontanero, Electricista, Grúa...)
  if (mode === 'urgencia_o_llaves') {
    const tabUrg = wcfg.tabUrgent || '🚨 Urgencia 24h Ahora';
    const tabQuo = wcfg.tabQuote || '🔑 Copia Llave / Presupuesto';
    const urgOpts = wcfg.urgentOptions || ['Asistencia urgente ahora', 'Avería bloqueante en vivienda o local', 'Apertura sin daños'];
    const quoOpts = wcfg.quoteOptions || ['Presupuesto indicando modelo', 'Copia / Sustitución programada', 'Revisión sin urgencia'];
    return `
      <div class="sec-head">
        <span class="sec-pill">Doble modo inteligente · Datos exactos antes de desplazarnos</span>
        <h2>¿Tienes una urgencia ahora o buscas presupuesto / copia?</h2>
        <p class="sec-sub">Elige modo arriba para enviarnos la calle exacta o el modelo de llave, mando o equipo directo a nuestro WhatsApp.</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="mode-tabs" role="tablist">
            <button type="button" class="mode-tab active" data-umode="urgencia" onclick="switchUrgentTab('urgencia')">${escapeHtml(tabUrg)}</button>
            <button type="button" class="mode-tab" data-umode="copia" onclick="switchUrgentTab('copia')">${escapeHtml(tabQuo)}</button>
          </div>

          <div id="urg-pane-urgencia">
            <div class="live-est live-est-urgent">⚡ Atención inmediata en <strong>${escapeHtml(st.city)}</strong> · Confirmamos precio cerrado y llegada (~20 min) antes de salir.</div>
            <div class="form-grid">
              <div>
                <label for="bk-urg-type">1. Qué ocurre ahora mismo</label>
                <select id="bk-urg-type">
                  ${urgOpts.map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('')}
                </select>
              </div>
              <div>
                <label for="bk-urg-street">2. Calle exacta y número en ${escapeHtml(st.city)}</label>
                <input type="text" id="bk-urg-street" placeholder="Ej. Calle Mayor 18, 3ºB · ${escapeHtml(st.city)}" />
              </div>
            </div>
          </div>

          <div id="urg-pane-copia" style="display:none;">
            <div class="live-est">✓ Ahorra esperas: dinos marca y modelo exacto y te confirmamos precio y disponibilidad en el acto.</div>
            <div class="form-grid">
              <div>
                <label for="bk-quo-type">1. Qué necesitas</label>
                <select id="bk-quo-type">
                  ${quoOpts.map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('')}
                  ${srvOpts}
                </select>
              </div>
              <div>
                <label for="bk-quo-model">${escapeHtml(wcfg.modelLabel || '2. Marca y modelo (coche, mando, cerradura o equipo)')}</label>
                <input type="text" id="bk-quo-model" placeholder="${escapeHtml(wcfg.modelPlaceholder || 'Ej. Seat León 2020 / Bombín Tesa / Mando garaje')}" />
              </div>
            </div>
          </div>

          <div style="margin-bottom:16px;">
            <label for="bk-client">3. Tu nombre (y cuándo pasas o teléfono)</label>
            <input type="text" id="bk-client" placeholder="Ej. David · Paso hoy tarde / Urgente ahora" />
          </div>
          <button type="button" class="btn-primary btn-block" id="bk-urg-submit" onclick="sendSectorWhatsApp('urgencia_o_llaves')">
            <span id="bk-urg-btn-txt">Enviar aviso urgente por WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  // 3) MOTOR Y DIAGNÓSTICO PREVIO (Taller Mecánico, Chapa, Neumáticos, Motos, Lavadero, Compraventa)
  if (mode === 'motor_diagnostico') {
    return `
      <div class="sec-head">
        <span class="sec-pill">Recepción digital de vehículos · Sin esperas al teléfono</span>
        <h2>${escapeHtml(wcfg.heading || 'Reserva cita de taller o lavado indicando tu vehículo')}</h2>
        <p class="sec-sub">${escapeHtml(wcfg.sub || 'Déjanos matrícula/modelo y qué necesitas para tener recambios y box preparados.')}</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label for="bk-service">1. Servicio o pack elegido</label>
              <select id="bk-service">${srvOpts}</select>
            </div>
            <div>
              <label for="bk-plate">${escapeHtml(wcfg.plateLabel || '2. Matrícula y modelo del vehículo')}</label>
              <input type="text" id="bk-plate" placeholder="${escapeHtml(wcfg.platePlaceholder || 'Ej. 4821 KLP · Seat León / Scooter 125')}" />
            </div>
          </div>
          <div class="form-grid">
            <div>
              <label for="bk-symptom">${escapeHtml(wcfg.symLabel || '3. Síntoma, medida o detalle')}</label>
              <input type="text" id="bk-symptom" placeholder="${escapeHtml(wcfg.symPlaceholder || 'Ej. Ruido frenos / Toca revisión / Tapicería')}" />
            </div>
            <div>
              <label for="bk-client">4. Tu nombre</label>
              <input type="text" id="bk-client" placeholder="Ej. Marcos" />
            </div>
          </div>
          <label>Preferencia de entrada</label>
          <div class="slots">
            <button type="button" class="slot-btn" onclick="pickSlot(this,'Hoy si hay hueco')">Hoy</button>
            <button type="button" class="slot-btn active" onclick="pickSlot(this,'Mañana 09:00')">Mañana 09h</button>
            <button type="button" class="slot-btn" onclick="pickSlot(this,'Esta semana mañanas')">Mañanas</button>
            <button type="button" class="slot-btn" onclick="pickSlot(this,'Esta semana tardes')">Tardes</button>
          </div>
          <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('motor_diagnostico')">
            <span>Confirmar entrada en ${escapeHtml(st.name)} por WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  // 4) RECEPCIÓN TALLER LOCAL + AVISO RECOGIDA (Móviles, Tintorería, Arreglos, Calzado, Bicicletas)
  if (mode === 'recepcion_taller_local') {
    const firstSrv = srvList[0] ? `${srvList[0].title} · ${srvList[0].price}` : 'Consulta rápida';
    return `
      <div class="sec-head">
        <span class="sec-pill">Tarifa orientativa al instante + Aviso por WhatsApp al terminar</span>
        <h2>${escapeHtml(wcfg.heading || 'Consulta tu arreglo y reserva repuesto o entrega')}</h2>
        <p class="sec-sub">${escapeHtml(wcfg.sub || 'Indica dispositivo, prenda o artículo y te avisamos por WhatsApp en cuanto esté listo para recoger.')}</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label for="bk-device">${escapeHtml(wcfg.itemLabel || '1. Dispositivo, prenda o artículo')}</label>
              <input type="text" id="bk-device" placeholder="${escapeHtml(wcfg.itemPlaceholder || 'Ej. iPhone 13 / Traje 2 piezas / Botas piel')}" />
            </div>
            <div>
              <label for="bk-service">2. Avería o arreglo necesario</label>
              <select id="bk-service" onchange="updateRepairEstimate(this)">${srvOpts}</select>
            </div>
          </div>
          <div class="live-est" id="bk-live-estimate">
            💡 Tarifa seleccionada: <strong>${escapeHtml(firstSrv)}</strong> · Te avisamos al WhatsApp en cuanto esté terminado.
          </div>
          <label>3. Cuándo nos lo acercas</label>
          <div class="slots">
            <button type="button" class="slot-btn" onclick="pickSlot(this,'Paso hoy por la mañana')">Hoy mañana</button>
            <button type="button" class="slot-btn active" onclick="pickSlot(this,'Paso hoy por la tarde')">Hoy tarde</button>
            <button type="button" class="slot-btn" onclick="pickSlot(this,'Paso mañana')">Mañana</button>
            <button type="button" class="slot-btn" onclick="pickSlot(this,'Consultar recogida')">Consultar</button>
          </div>
          <div style="margin-bottom:16px;">
            <label for="bk-client">4. Tu nombre</label>
            <input type="text" id="bk-client" placeholder="Ej. Víctor · Avisar por WhatsApp al terminar" />
          </div>
          <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('recepcion_taller_local')">
            <span>Confirmar precio y dejar aviso en WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  // 5) ENCARGOS SIN COLA Y 0% COMISIONES (Asador, Panadería, Pizzería, Carnicería, Frutería, Floristería, Copistería, Tienda)
  if (mode === 'encargo_sin_cola') {
    const slots = wcfg.slots || ['11:30', '13:30', '14:15', '19:30'];
    return `
      <div class="sec-head">
        <span class="sec-pill">Encargos directos sin hacer cola · 0% comisiones</span>
        <h2>${escapeHtml(wcfg.heading || 'Haz tu encargo y pasa directo a recogerlo a tu hora')}</h2>
        <p class="sec-sub">${escapeHtml(wcfg.sub || 'Sin esperas al teléfono ni recargos de aplicaciones externas.')}</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label for="bk-service">1. Producto, menú o encargo principal</label>
              <select id="bk-service">${srvOpts}</select>
            </div>
            <div>
              <label for="bk-qty">${escapeHtml(wcfg.qtyLabel || '2. Unidades y detalle del pedido')}</label>
              <input type="text" id="bk-qty" placeholder="${escapeHtml(wcfg.qtyPlaceholder || 'Ej. 2 unidades / Detalle o dedicatoria')}" />
            </div>
          </div>
          <label>3. Hora exacta de recogida en tienda (sin cola)</label>
          <div class="slots">
            ${slots.map((sl, i) => `<button type="button" class="slot-btn ${i === 1 ? 'active' : ''}" onclick="pickSlot(this,'${escapeHtml(sl)}')">${escapeHtml(sl)}</button>`).join('')}
          </div>
          <div style="margin-bottom:16px;">
            <label for="bk-client">4. A nombre de</label>
            <input type="text" id="bk-client" placeholder="Ej. Carmen · Recojo en mostrador" />
          </div>
          <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('encargo_sin_cola')">
            <span>Enviar encargo directo al WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  // 6) RESERVA DE MESA SALÓN / TERRAZA + CARTA (Restaurante, Bar de Tapas, Cafetería/Brunch)
  if (mode === 'mesa_carta') {
    const slots = wcfg.slots || ['13:30', '14:15', '20:45', '21:30'];
    return `
      <div class="sec-head">
        <span class="sec-pill">Reserva directa con sala · 0 € comisión por comensal</span>
        <h2>${escapeHtml(wcfg.heading || 'Reserva tu mesa en Salón o Terraza')}</h2>
        <p class="sec-sub">${escapeHtml(wcfg.sub || 'Elige zona, comensales y turno. Confirmación directa con nuestro equipo.')}</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label for="bk-zone">1. Zona y nº de comensales</label>
              <select id="bk-zone">
                <option value="Terraza exterior · 2 personas">Terraza exterior · 2 personas</option>
                <option value="Terraza exterior · 4 personas" selected>Terraza exterior · 4 personas</option>
                <option value="Salón interior · 2 personas">Salón interior · 2 personas</option>
                <option value="Salón interior · 4 personas">Salón interior · 4 personas</option>
                <option value="Mesa para grupo (6 o más personas)">Mesa grupo (6+ personas)</option>
                <option value="Pedido para recoger en local">Pedido para recoger sin espera</option>
              </select>
            </div>
            <div>
              <label for="bk-service">2. Plato, arroz o menú destacado</label>
              <select id="bk-service">${srvOpts}</select>
            </div>
          </div>
          <label>3. Turno y hora</label>
          <div class="slots">
            ${slots.map((sl, i) => `<button type="button" class="slot-btn ${i === 1 ? 'active' : ''}" onclick="pickSlot(this,'Hoy ${escapeHtml(sl)}')">${escapeHtml(sl)}</button>`).join('')}
          </div>
          <div style="margin-bottom:16px;">
            <label for="bk-client">4. Reserva a nombre de (indica si vienes otro día o trona/alergias)</label>
            <input type="text" id="bk-client" placeholder="Ej. Laura · Sábado mediodía" />
          </div>
          <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('mesa_carta')">
            <span>Confirmar mesa gratis por WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  // 8) FILTRO DE CLIENTES CUALIFICADOS (Inmobiliaria, Abogados, Asesoría, Guardería, Fotógrafo, Eventos)
  if (mode === 'filtro_clientes') {
    const qOpts = wcfg.qualifyOptions || [
      'Quiero iniciar gestión esta semana',
      'Consulta con fecha concreta / Urgente',
      'Empresa / Profesional',
      'Solicitar valoración previa'
    ];
    return `
      <div class="sec-head">
        <span class="sec-pill">Atención prioritaria filtrada · Trato directo sin esperas</span>
        <h2>${escapeHtml(wcfg.heading || 'Cuéntanos tu caso o fecha y recibe respuesta directa')}</h2>
        <p class="sec-sub">${escapeHtml(wcfg.sub || 'Completa estos 3 datos para darte respuesta exacta desde el primer mensaje.')}</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label for="bk-service">1. Servicio o área</label>
              <select id="bk-service">${srvOpts}</select>
            </div>
            <div>
              <label for="bk-qualify">${escapeHtml(wcfg.qualifyLabel || '2. Tu situación o perfil')}</label>
              <select id="bk-qualify">
                ${qOpts.map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="form-grid">
            <div>
              <label for="bk-detail">${escapeHtml(wcfg.detailLabel || '3. Fecha, zona o resumen breve')}</label>
              <input type="text" id="bk-detail" placeholder="${escapeHtml(wcfg.detailPlaceholder || 'Ej. Resumen en 1 línea o fecha del evento')}" />
            </div>
            <div>
              <label for="bk-client">4. Tu nombre</label>
              <input type="text" id="bk-client" placeholder="Ej. Miguel Ángel" />
            </div>
          </div>
          <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('filtro_clientes')">
            <span>Enviar consulta filtrada por WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  // 7) DEFAULT: AGENDA DE CITAS DIRECTA 0% COMISIÓN (Belleza, Salud, Mascotas, Autoescuela, Academia, Fitness...)
  return `
    <div class="sec-head">
      <span class="sec-pill">Agenda directa 24h · 0% comisiones externas</span>
      <h2>${escapeHtml(wcfg.heading || 'Pide tu cita en 15 segundos')}</h2>
      <p class="sec-sub">${escapeHtml(wcfg.sub || 'Elige servicio, día y tramo horario; recibimos tu solicitud al instante en nuestro WhatsApp.')}</p>
    </div>
    <div class="bezel-shell">
      <div class="book-card">
        <div class="form-grid">
          <div>
            <label for="bk-service">1. Servicio con tarifa clara</label>
            <select id="bk-service">${srvOpts}</select>
          </div>
          <div>
            <label for="bk-extra">2. Día preferido</label>
            <select id="bk-extra">
              <option value="Hoy (si queda hueco)">Hoy (si queda hueco)</option>
              <option value="Mañana" selected>Mañana</option>
              <option value="Esta semana · Mañanas">Esta semana · Mañanas</option>
              <option value="Esta semana · Tardes">Esta semana · Tardes</option>
              <option value="Sábado">Sábado</option>
            </select>
          </div>
        </div>
        <label>3. Tramo horario preferido</label>
        <div class="slots">
          <button type="button" class="slot-btn" onclick="pickSlot(this,'10:00')">10:00</button>
          <button type="button" class="slot-btn active" onclick="pickSlot(this,'11:30')">11:30</button>
          <button type="button" class="slot-btn" onclick="pickSlot(this,'17:00')">17:00</button>
          <button type="button" class="slot-btn" onclick="pickSlot(this,'18:30')">18:30</button>
        </div>
        <div style="margin-bottom:16px;">
          <label for="bk-client">4. Tu nombre y nota opcional</label>
          <input type="text" id="bk-client" placeholder="${escapeHtml(wcfg.clientPlaceholder || 'Ej. Marta García')}" />
        </div>
        <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('agenda_citas')">
          <span>Confirmar cita en ${escapeHtml(st.name)}</span>
          <span class="btn-arrow">→</span>
        </button>
        <div class="book-ok" id="bk-ok"></div>
      </div>
    </div>`;
}

// ==========================================================================
// COMPILADOR EDITORIAL "PRESTIGE" (INSPIRADO EN PRESTIGECARDETAIL.ES / NOTFOUND404)
// Entrada con cámara en movimiento + escudo recortado con zoom en scroll +
// 3 Verbos + Tabla de precios cerrados + Antes/Después interactivo +
// Capas técnicas + Casos reales con serif superpuesta + Herramienta WhatsApp
// ==========================================================================

function resolvePrestigePalette(themeKey) {
  const palettes = {
    royal: {
      noche: '#0f1a2d', hondo: '#0a1322', placa: '#16253d',
      oro: '#c8a548', oroHover: '#d8b75c', plata: '#c0c0c0',
      tinta: '#eef0f3', tinta2: '#a9b1be', filete: 'rgba(192, 192, 192, 0.18)'
    },
    gold: {
      noche: '#0d1728', hondo: '#080f1c', placa: '#142238',
      oro: '#d4af37', oroHover: '#e2bf4c', plata: '#c4cad4',
      tinta: '#f1f3f6', tinta2: '#a6b0c0', filete: 'rgba(196, 202, 212, 0.18)'
    },
    atelier: {
      noche: '#171311', hondo: '#0f0c0a', placa: '#221c18',
      oro: '#cf9d56', oroHover: '#deaef68', plata: '#c7beb5',
      tinta: '#f3efe9', tinta2: '#b8afa6', filete: 'rgba(199, 190, 181, 0.18)'
    },
    sage: {
      noche: '#0d1d1b', hondo: '#081312', placa: '#132a27',
      oro: '#c7ab59', oroHover: '#d6bc6c', plata: '#b8c7c4',
      tinta: '#eef3f2', tinta2: '#a3b8b4', filete: 'rgba(184, 199, 196, 0.18)'
    },
    crimson: {
      noche: '#12131a', hondo: '#0a0b10', placa: '#1a1c26',
      oro: '#cba34b', oroHover: '#dab45e', plata: '#c2c5d0',
      tinta: '#f0f1f5', tinta2: '#a6abc0', filete: 'rgba(194, 197, 208, 0.18)'
    }
  };
  return palettes[themeKey] || palettes.royal;
}

function buildPrestigeBrandParts(bizName, sectorBadge) {
  const clean = String(bizName || 'PRESTIGE').trim();
  const words = clean.split(/\s+/).filter(Boolean);
  let mainLine = words[0] ? words[0].toUpperCase() : 'PRESTIGE';
  let subLine = '';
  if (words.length >= 2) {
    if (words[0].length <= 3 && words[1]) {
      mainLine = (words[0] + ' ' + words[1]).toUpperCase();
      subLine = words.slice(2).join(' ').toUpperCase();
    } else {
      mainLine = words[0].toUpperCase();
      subLine = words.slice(1).join(' ').toUpperCase();
    }
  }
  if (!subLine) {
    subLine = String(sectorBadge || 'ESTUDIO PROFESIONAL').toUpperCase();
  }
  if (mainLine.length > 13) mainLine = mainLine.slice(0, 13);
  if (subLine.length > 26) subLine = subLine.slice(0, 26);
  return { mainLine, subLine };
}

function buildPrestigeCrestArtworkSVG(preset, mode) {
  const cat = String(preset.category || '').toLowerCase();
  const id = String(preset.id || '').toLowerCase();

  //Nota: el centro (500, 390) incluye una ventana blanca amplia (r=54) para que al hacer zoom 50x la cámara atraviese limpia el emblema
  if (cat === 'motor' || mode === 'motor_diagnostico' || id.includes('taller') || id.includes('lavadero') || id.includes('moto')) {
    return `
      <!-- Silueta coupé estilo Prestige Car Detail + Torre/Emblema central -->
      <path d="M295 415 C330 362, 405 338, 495 336 C575 335, 650 358, 705 408 L722 436 C725 452, 710 462, 685 462 L315 462 C292 462, 282 444, 295 415 Z" />
      <circle cx="500" cy="390" r="64" />
      <path d="M472 260 L500 218 L528 260 L528 332 L472 332 Z" />
      <rect x="494" y="192" width="12" height="34" />
    `;
  }
  if (cat === 'belleza' || id.includes('barber') || id.includes('peluquer') || id.includes('estetica') || id.includes('tatuaje')) {
    return `
      <!-- Emblema Barbería / Salón: Tijeras cruzadas + Corona + Ventana central -->
      <path d="M365 295 L635 455 L618 474 L348 314 Z" />
      <path d="M635 295 L365 455 L382 474 L652 314 Z" />
      <circle cx="348" cy="462" r="28" />
      <circle cx="652" cy="462" r="28" />
      <path d="M438 265 L468 292 L500 246 L532 292 L562 265 L548 320 L452 320 Z" />
      <circle cx="500" cy="390" r="66" />
      <path d="M320 432 Q500 472 680 432 L666 454 Q500 490 334 454 Z" />
    `;
  }
  if (mode === 'medidas_presupuesto' || id.includes('carpinter') || id.includes('reforma') || id.includes('cristal') || id.includes('pintor')) {
    return `
      <!-- Emblema Maestro de Oficio / Carpintería / Reformas: Escuadra + Compás + Ventana central -->
      <path d="M500 222 L660 395 L628 422 L500 282 L372 422 L340 395 Z" />
      <path d="M330 430 L670 430 L655 458 L345 458 Z" />
      <circle cx="500" cy="390" r="66" />
    `;
  }
  if (mode === 'urgencia_o_llaves' || id.includes('cerrajer') || id.includes('llave') || id.includes('fontaner') || id.includes('electric')) {
    return `
      <!-- Emblema Cerrajería / Asistencia Técnica: Escudo y Llave Maestra -->
      <path d="M500 218 L635 270 C635 375, 585 445, 500 475 C415 445, 365 375, 365 270 Z" />
      <circle cx="500" cy="390" r="68" />
    `;
  }
  if (cat === 'hosteleria' || mode === 'mesa_carta' || mode === 'encargo_sin_cola') {
    return `
      <!-- Emblema Gastronómico / Obrador: Campana Real + Espiga + Ventana central -->
      <path d="M335 438 C345 330, 415 278, 500 278 C585 278, 655 330, 665 438 Z" />
      <circle cx="500" cy="256" r="22" />
      <rect x="315" y="444" width="370" height="18" rx="9" />
      <circle cx="500" cy="390" r="66" />
    `;
  }
  // Salud / Clínicas / Servicios / General: Escudo Imperial con Ventana Central
  return `
    <path d="M500 220 L645 282 C642 382, 585 444, 500 472 C415 444, 358 382, 355 282 Z" />
    <circle cx="500" cy="390" r="68" />
  `;
}

function buildTradeVerbos(preset, st, mode) {
  const cat = String(preset.category || '').toLowerCase();
  const id = String(preset.id || '').toLowerCase();
  if (id.includes('barber') || id.includes('peluquer') || cat === 'belleza') {
    return {
      intro: `Mucho más que un servicio rápido en ${st.city}`,
      items: [
        { word: 'Precisión.', desc: 'Diagnóstico previo de facciones, caída y textura para que el resultado te favorezca desde el primer día y crezca con forma.' },
        { word: 'Ritual.', desc: 'Productos de primera línea, toalla caliente, herramientas esterilizadas y el tiempo que cada trabajo necesita sin prisas.' },
        { word: 'Estilo.', desc: 'Acabado limpio y duradero que puedes mantener fácilmente en casa hasta tu próxima visita al salón.' }
      ]
    };
  }
  if (cat === 'motor' || mode === 'motor_diagnostico') {
    return {
      intro: 'Mucho más que revisar o lavar un vehículo',
      items: [
        { word: 'Limpieza.', desc: 'Interior y exterior a fondo, también donde no llega la vista: marcos, rieles, vano, conductos y tapicerías.' },
        { word: 'Recuperación.', desc: 'Piezas, ópticas, tapicerías y superficies que parecían desgastadas vuelven a su estado original con técnica profesional.' },
        { word: 'Protección.', desc: 'Tratamientos, recambios y sellantes de primera marca para que el resultado aguante el uso diario en carretera.' }
      ]
    };
  }
  if (mode === 'medidas_presupuesto') {
    return {
      intro: `Mucho más que dar un presupuesto a ojo en ${st.city}`,
      items: [
        { word: 'Medida.', desc: 'Ajuste milimétrico a tu espacio real: salvamos pilares, vigas, desniveles y aprovechamos cada centímetro útil.' },
        { word: 'Material.', desc: 'Herrajes, maderas, perfiles y acabados seleccionados para durar décadas sin desajustarse ni perder presencia.' },
        { word: 'Montaje.', desc: 'Instalación limpia en tu domicilio, protegiendo el suelo y entregando el trabajo rematado y listo para usar.' }
      ]
    };
  }
  if (mode === 'urgencia_o_llaves') {
    return {
      intro: `Mucho más que salir del paso en ${st.city}`,
      items: [
        { word: 'Rapidez.', desc: 'Atención directa sin centralitas intermediarias: hablas con el técnico que va a ir a tu puerta o te atiende en taller.' },
        { word: 'Limpieza.', desc: 'Aperturas, codificaciones y reparaciones con herramienta específica para no dañar tu puerta, cerradura o vehículo.' },
        { word: 'Garantía.', desc: 'Precio cerrado confirmado por WhatsApp antes de empezar y factura oficial en cada intervención.' }
      ]
    };
  }
  if (cat === 'salud') {
    return {
      intro: `Mucho más que una consulta estándar en ${st.city}`,
      items: [
        { word: 'Escucha.', desc: 'Valoración completa de tu caso sin prisas para entender el origen real de la molestia o necesidad antes de actuar.' },
        { word: 'Rigor.', desc: 'Protocolos clínicos actualizados, equipamiento de última generación y trato cercano en cada sesión.' },
        { word: 'Seguimiento.', desc: 'Plan claro por etapas y contacto directo por WhatsApp para resolver cualquier duda tras tu visita.' }
      ]
    };
  }
  if (cat === 'hosteleria' || mode === 'mesa_carta' || mode === 'encargo_sin_cola') {
    return {
      intro: `Mucho más que salir a comer en ${st.city}`,
      items: [
        { word: 'Producto.', desc: 'Materia prima fresca seleccionada a diario en origen, respetando temporada, punto y sabor auténtico.' },
        { word: 'Oficio.', desc: 'Elaboración propia cada mañana en nuestra cocina y obrador, sin atajos industriales ni prisas.' },
        { word: 'Mesa.', desc: 'Atención cercana, tiempos cuidados y reserva o encargo directo por WhatsApp sin esperas en la puerta.' }
      ]
    };
  }
  return {
    intro: `Mucho más que un servicio convencional en ${st.city}`,
    items: [
      { word: 'Criterio.', desc: 'Analizamos tu caso concreto antes de empezar para proponerte la solución que mejor funciona de verdad.' },
      { word: 'Oficio.', desc: 'Ejecución cuidada al detalle por profesionales con experiencia contrastada en ' + st.city + '.' },
      { word: 'Claridad.', desc: 'Precios cerrados desde el primer minuto y comunicación directa por WhatsApp sin intermediarios.' }
    ]
  };
}

function buildTradeCapas(preset, st, srvList) {
  const s0 = srvList[0] ? srvList[0].title : 'Valoración inicial';
  const s1 = srvList[1] ? srvList[1].title : 'Ejecución principal';
  const s2 = srvList[2] ? srvList[2].title : 'Acabado superior';
  return [
    { num: '01', name: 'Recepción y diagnóstico previo', spec: '100% incluido', desc: `Revisamos contigo el estado inicial en ${st.name} y confirmamos el precio cerrado antes de tocar nada.`, tag: 'DIAGNÓSTICO', pos: 'top:28%;left:44%' },
    { num: '02', name: s0, spec: srvList[0] ? srvList[0].price : 'Estándar Pro', desc: (srvList[0] && srvList[0].meta ? srvList[0].meta : 'Intervención base con materiales certificados') + ' trabajando zona por zona con máxima precisión.', tag: s0.slice(0, 18).toUpperCase(), pos: 'top:46%;left:52%' },
    { num: '03', name: s1, spec: srvList[1] ? srvList[1].price : 'Nivel Avanzado', desc: (srvList[1] && srvList[1].meta ? srvList[1].meta : 'Tratamiento completo en detalle') + ' cuidando tanto lo que se ve a primera vista como los remates internos.', tag: s1.slice(0, 18).toUpperCase(), pos: 'top:58%;left:38%' },
    { num: '04', name: s2, spec: srvList[2] ? srvList[2].price : 'Acabado Especial', desc: (srvList[2] && srvList[2].meta ? srvList[2].meta : 'Resultado de máxima durabilidad') + ' pensado para que el trabajo aguante perfecto mucho más tiempo.', tag: s2.slice(0, 18).toUpperCase(), pos: 'top:36%;left:62%' },
    { num: '05', name: 'Revisión final y entrega garantizada', spec: 'Garantía Oficial', desc: `Comprobamos cada punto contigo antes de entregar y quedamos a tu disposición directa en nuestro WhatsApp de ${st.city}.`, tag: 'ENTREGA OK', pos: 'top:68%;left:48%' }
  ];
}

function buildTradeCasos(preset, st, srvList, galleryArr, heroImg) {
  const p0 = galleryArr[0] || heroImg;
  const p1 = galleryArr[1] || heroImg;
  const p2 = galleryArr[2] || p0;
  const p3 = galleryArr[3] || p1;

  const s0 = srvList[0] || { title: 'Servicio Integral', meta: 'Trabajo completo', price: 'Precio cerrado' };
  const s1 = srvList[1] || s0;
  const s2 = srvList[2] || s0;
  const s3 = srvList[3] || s1;

  return [
    {
      num: 'Nº 001',
      title: s0.title.split(/[·+\(\/]/)[0].trim(),
      photo: p0,
      llego: `Cliente de ${st.city} buscando un resultado impecable y sin esperas`,
      trabajo: `${s0.title} (${s0.meta || 'ejecución completa'})`,
      entrega: 'Acabado de estudio entregado en el plazo acordado'
    },
    {
      num: 'Nº 002',
      title: s1.title.split(/[·+\(\/]/)[0].trim(),
      photo: p1,
      llego: 'Necesitaba solución profesional con presupuesto claro por adelantado',
      trabajo: `${s1.title} (${s1.meta || 'atención personalizada'})`,
      entrega: 'Resultado revisado al detalle y garantía activa'
    },
    {
      num: 'Nº 003',
      title: s2.title.split(/[·+\(\/]/)[0].trim(),
      photo: p2,
      llego: 'Reserva directa por WhatsApp indicando preferencia de horario',
      trabajo: `${s2.title} (${s2.meta || 'máxima dedicación'})`,
      entrega: 'Trabajo terminado a la primera y cliente 100% satisfecho'
    },
    {
      num: 'Nº 004',
      title: s3.title.split(/[·+\(\/]/)[0].trim(),
      photo: p3,
      llego: `Recomendado por otro cliente habitual de ${st.name}`,
      trabajo: `${s3.title} (${s3.meta || 'servicio especialista'})`,
      entrega: 'Revisión completa y acabado protegido'
    }
  ];
}

function resolveProjectAssetUrl(rawUrl) {
  const u = String(rawUrl || '').trim();
  if (!u) return '';
  if (/^(https?:|data:|blob:|file:)/i.test(u)) return u;
  if (typeof window !== 'undefined' && window.location && window.location.href) {
    try {
      const href = window.location.href.split('#')[0].split('?')[0];
      const baseDir = /\/(sitio|admin|gracias)\/[^/]*$/i.test(href)
        ? href.replace(/\/(sitio|admin|gracias)\/[^/]*$/i, '/')
        : href.replace(/\/[^/]*$/, '/');
      const cleanRel = u.replace(/^\/+/, '');
      return new URL(cleanRel, baseDir).href;
    } catch (e) {}
  }
  return u;
}

function compileClientWebsiteHTML(st) {
  const preset = resolvePresetForState(st);
  const pal = resolvePrestigePalette(st.theme || preset.defaultTheme || 'royal');
  const sectorBadge = st.sector === 'otro'
    ? (st.customSectorLabel || preset.label || 'Especialista Local')
    : preset.label;

  const customPhotos = Array.isArray(st.customGallery) ? st.customGallery.filter(Boolean) : [];
  const defaultGallery = Array.isArray(preset.gallery) && preset.gallery.length ? preset.gallery : [preset.heroImage];
  const activeGallery = (customPhotos.length ? customPhotos : defaultGallery).map(resolveProjectAssetUrl);
  const heroImg = resolveProjectAssetUrl(st.customHeroPhoto || activeGallery[0] || preset.heroImage || '/assets/real/tienda_hero.jpg');
  const secondImg = resolveProjectAssetUrl(activeGallery[1] || heroImg);
  const thirdImg = resolveProjectAssetUrl(activeGallery[2] || secondImg);

  const cleanWa = String(st.whatsapp || '612890345').replace(/[^0-9]/g, '');
  const fullWa = cleanWa.startsWith('34') ? cleanWa : ('34' + cleanWa);
  const telHref = 'tel:+' + fullWa;
  const directWaHref = `https://wa.me/${fullWa}?text=${encodeURIComponent('Hola ' + st.name + ', he visto vuestra web y me gustaría consultar disponibilidad.')}`;

  const mode = normalizeActionType(st.actionType || preset.actionType);
  const actionBtnLabel = preset.ctaShort || (
    mode === 'medidas_presupuesto' ? 'Pedir presupuesto'
    : mode === 'urgencia_o_llaves' ? 'Asistencia / Llaves'
    : mode === 'motor_diagnostico' ? 'Cita de taller'
    : mode === 'recepcion_taller_local' ? 'Consultar arreglo'
    : mode === 'encargo_sin_cola' ? 'Hacer encargo'
    : mode === 'mesa_carta' ? 'Reservar mesa'
    : mode === 'filtro_clientes' ? 'Consultar ahora'
    : 'Reservar por WhatsApp'
  );

  const brandParts = buildPrestigeBrandParts(st.name, sectorBadge);
  const crestArtworkSvg = buildPrestigeCrestArtworkSVG(preset, mode);
  const srvList = Array.isArray(st.services) && st.services.length ? st.services : (preset.services || []);

  // Tabla interactiva estilo Prestige ("Tres detallados, precio cerrado")
  const cartaRowsHtml = srvList.map((srv, idx) => `
    <details class="fila srv-card" ${idx === 0 ? 'open' : ''}>
      <summary>
        <span class="n">
          ${escapeHtml(srv.title)}
          <small>${escapeHtml(srv.meta || 'Servicio profesional con precio cerrado')}</small>
        </span>
        <span class="p">${escapeHtml(srv.price)}</span>
      </summary>
      <div class="inc">
        <ul>
          <li><strong>Qué incluye:</strong> ${escapeHtml(srv.meta || 'Atención completa por nuestro equipo especialista')}</li>
          <li><strong>Precio cerrado:</strong> ${escapeHtml(srv.price)} confirmados antes de empezar, sin cargos ocultos.</li>
          <li><strong>Reserva directa:</strong> Confirmación inmediata en nuestro WhatsApp de ${escapeHtml(st.city)}.</li>
        </ul>
        <div class="pie-fila">
          <button type="button" class="enlace-btn" onclick="selectServiceForBooking('${escapeHtml(srv.title)}')">
            Seleccionar ${escapeHtml(srv.title)} y pedir por WhatsApp →
          </button>
        </div>
      </div>
    </details>
  `).join('');

  const verbosData = buildTradeVerbos(preset, st, mode);
  const verbosHtml = verbosData.items.map(v => `
    <a class="verbo" href="#servicios">
      <strong>${escapeHtml(v.word)}</strong>
      <p>${escapeHtml(v.desc)}</p>
    </a>
  `).join('');

  const capasData = buildTradeCapas(preset, st, srvList);
  const capasHtml = capasData.map((c, idx) => `
    <details class="capa" data-capa="${escapeHtml(c.tag)}" data-pos="${escapeHtml(c.pos)}" ${idx === 0 ? 'open' : ''}>
      <summary>
        <span class="capa-n">${escapeHtml(c.num)}</span>
        <span class="capa-nombre">${escapeHtml(c.name)}</span>
        <span class="capa-grosor">${escapeHtml(c.spec)}</span>
      </summary>
      <div class="capa-det">
        <p>${escapeHtml(c.desc)}</p>
        <button type="button" class="enlace-btn" style="margin-top:10px;" onclick="jumpSec('accion')">Consultar para mi caso →</button>
      </div>
    </details>
  `).join('');

  const casosData = buildTradeCasos(preset, st, srvList, activeGallery, heroImg);
  const casosHtml = casosData.map((cs, idx) => `
    <article class="e-caso">
      <div class="e-media">
        <span class="dato e-num">${escapeHtml(cs.num)}</span>
        <img src="${escapeHtml(cs.photo)}" alt="${escapeHtml(cs.title)} en ${escapeHtml(st.name)}" />
      </div>
      <h3>${escapeHtml(cs.title)}</h3>
      <dl class="e-parte">
        <dt>Llegó</dt><dd>${escapeHtml(cs.llego)}</dd>
        <dt>Trabajo</dt><dd>${escapeHtml(cs.trabajo)}</dd>
        <dt>Entrega</dt><dd>${escapeHtml(cs.entrega)}</dd>
      </dl>
    </article>
  `).join('');

  const fallbackReviews = preset.defaultReviews || [
    { author: 'Gonzalo G.', rating: 5, text: `Excelente servicio en ${st.name}. Quedó impecable, trato muy amable, profesional y atento en todo momento. Da gusto encontrar personas que trabajan con tanta dedicación en ${st.city}.` },
    { author: 'Sandra M.', rating: 5, text: `100% recomendable. Precio cerrado desde el primer momento por WhatsApp, cero esperas y un resultado inmejorable. Volveré sin duda.` },
    { author: 'Eugenio A.', rating: 5, text: `Sinceramente un trabajo excepcional. Se nota el oficio, el cuidado por los detalles y la puntualidad. Totalmente de confianza.` }
  ];
  const activeReviews = (Array.isArray(st.reviews) && st.reviews.length) ? st.reviews : fallbackReviews;
  const reviewsHtml = activeReviews.slice(0, 3).map((rv, idx) => `
    <figure class="res-tarjeta ${idx === 0 ? 'activa' : ''}" style="--o:${idx}">
      <div class="res-estrellas" aria-label="5 de 5 estrellas">★★★★★</div>
      <blockquote>«${escapeHtml(rv.text)}»</blockquote>
      <figcaption>
        <span class="res-inicial">${escapeHtml((rv.author || 'C').trim().charAt(0).toUpperCase())}</span>
        <div>
          <b>${escapeHtml(rv.author || 'Cliente verificado')}</b>
          <small>Reseña de Google · ${escapeHtml(st.city)}</small>
        </div>
      </figcaption>
    </figure>
  `).join('');

  const faqs = preset.faqs || [
    { q: '¿Sabré el precio exacto antes de empezar?', a: 'Sí. Trabajamos con precios claros y cerrados. Si nos escribes por WhatsApp con lo que necesitas, te confirmamos importe y tiempo antes de tocar nada.' },
    { q: '¿Cómo pido cita, encargo o presupuesto rápido?', a: 'Usa la herramienta interactiva de esta misma sección: eliges el servicio, completas los datos básicos y se abre tu WhatsApp con todo listo para que te demos hueco prioritario.' },
    { q: '¿Cómo se puede pagar?', a: `En efectivo, con tarjeta o por Bizum directamente en nuestro local de ${st.city} al terminar.` },
    { q: '¿Dónde estáis exactamente y qué horario tenéis?', a: `Estamos en ${st.address} (${st.city}).Nuestro horario habitual es de lunes a viernes de ${st.hoursWeek} y sábados de ${st.hoursSat}.` }
  ];
  const faqHtml = faqs.map((f, i) => `
    <details ${i === 0 ? 'open' : ''}>
      <summary>${escapeHtml(f.q)}</summary>
      <p>${escapeHtml(f.a)}</p>
    </details>
  `).join('');

  const editPhotoBtnHero = '';

  const editPhotoBtnGal = !st.unlocked
    ? `<button type="button" class="btn btn-linea" style="min-height:38px;padding:0 14px;font-size:13px;" onclick="try{window.parent.postMessage({type:'MIWEB_OPEN_EDITOR',tab:'fotos'},'*')}catch(e){}">
         Subir fotos de mi móvil
       </button>`
    : '';

  const legalHolderName = st.legalHolder || st.name;
  const legalNifText = st.legalNif ? ` · NIF/CIF: ${st.legalNif}` : '';
  const widgetHtml = buildSectorActionWidgetHTML(st, preset);
  const firstPrice = (srvList[0] && srvList[0].price) ? srvList[0].price : 'Precio cerrado';

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(st.name)} · ${escapeHtml(sectorBadge)} en ${escapeHtml(st.city)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --noche: ${pal.noche};
    --hondo: ${pal.hondo};
    --placa: ${pal.placa};
    --oro: ${pal.oro};
    --oro-hover: ${pal.oroHover};
    --plata: ${pal.plata};
    --tinta: ${pal.tinta};
    --tinta-2: ${pal.tinta2};
    --filete: ${pal.filete};
    --serif: 'Newsreader', Georgia, 'Times New Roman', serif;
    --sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    --mono: 'IBM Plex Mono', ui-monospace, monospace;
    --gutter: 20px;
    --bar: 62px;
    --cab: 78px;
    /* Compatibilidad con el widget interactivo de WhatsApp */
    --bg: ${pal.hondo};
    --surface: ${pal.noche};
    --card: ${pal.placa};
    --ink: ${pal.tinta};
    --muted: ${pal.tinta2};
    --border: ${pal.filete};
    --accent: ${pal.oro};
    --accent-hi: ${pal.oroHover};
    --accent-soft: rgba(200, 165, 72, 0.14);
    --accent-ink: #121212;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; scroll-padding-top: var(--cab); }
  body {
    background: var(--noche);
    color: var(--tinta);
    font-family: var(--sans);
    padding-bottom: var(--bar);
    font-size: 16.5px;
    line-height: 1.55;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }
  img, video { max-width: 100%; height: auto; display: block; }
  a { color: inherit; text-decoration: none; }
  .wrap { width: 100%; max-width: 1180px; padding: 0 var(--gutter); margin: 0 auto; }
  .dato { font-family: var(--mono); letter-spacing: 0.04em; color: var(--plata); font-size: 12px; text-transform: uppercase; }

  /* CABECERA SIMÉTRICA ESTILO PRESTIGE */
  .top {
    z-index: 45;
    padding: 10px var(--gutter);
    border-bottom: 1px solid transparent;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    transition: background 0.4s, border-color 0.4s, padding 0.4s;
    display: grid;
    position: fixed;
    top: 0; left: 0; right: 0;
  }
  .top.solida {
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    border-bottom-color: var(--filete);
    background: rgba(10, 19, 34, 0.90);
    padding-block: 8px;
  }
  .top .marca {
    grid-column: 2;
    text-align: center;
    cursor: pointer;
    transition: opacity 0.45s, transform 0.45s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
  .top .marca-titulo {
    font-family: var(--serif);
    font-size: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--tinta);
    line-height: 1;
  }
  .top .marca-sub {
    font-family: var(--mono);
    font-size: 9.5px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--oro);
  }
  .top.en-portada:not(.solida) .marca {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-6px);
  }
  .top nav { display: none; align-items: center; gap: 24px; }
  .top nav a { color: var(--tinta-2); font-size: 14.5px; transition: color 0.2s; }
  .top nav a:hover { color: var(--tinta); }
  .top .izq { grid-column: 1; justify-self: start; }
  .top .der { grid-column: 3; justify-self: end; }
  .menu-btn {
    min-height: 42px; color: var(--tinta); font: 500 14.5px var(--sans);
    cursor: pointer; background: none; border: 0; grid-column: 1; justify-self: start;
    align-items: center; gap: 8px; display: flex;
  }
  .menu-btn i { gap: 5px; width: 18px; display: grid; }
  .menu-btn i:before, .menu-btn i:after { content: ""; background: currentColor; height: 1.5px; display: block; }
  .reservar-movil {
    color: #121212; background: var(--oro); grid-column: 3; justify-self: end;
    align-items: center; min-height: 36px; padding: 0 13px; border-radius: 2px;
    font-size: 13px; font-weight: 600; display: inline-flex; border: none; cursor: pointer;
  }

  /* CORTINA MENÚ MÓVIL */
  .cortina {
    z-index: 70; background: var(--noche); padding: 18px var(--gutter) 90px;
    visibility: hidden; flex-direction: column;
    transition: transform 0.45s cubic-bezier(0.6, 0, 0.2, 1), visibility 0s 0.45s;
    display: flex; position: fixed; inset: 0; overflow-y: auto; transform: translateY(-100%);
  }
  .cortina.abierta { visibility: visible; transition: transform 0.45s cubic-bezier(0.6, 0, 0.2, 1); transform: none; }
  .cortina .cerrar { min-height: 44px; color: var(--tinta); font: 500 15px var(--sans); cursor: pointer; background: 0 0; border: 0; align-self: flex-start; }
  .cortina ul { border-top: 1px solid var(--oro); margin-top: 20px; list-style: none; }
  .cortina li a {
    border-bottom: 1px solid var(--filete); font-family: var(--serif);
    justify-content: space-between; align-items: baseline; padding: 15px 0;
    font-size: 28px; line-height: 1.1; display: flex;
  }
  .cortina li a small { font-family: var(--mono); color: var(--oro); font-size: 12px; }

  /* BOTONES PRESTIGE */
  .btn {
    min-height: 48px; font: 600 15.5px/1.1 var(--sans); cursor: pointer;
    text-align: center; border: 0; border-radius: 2px;
    justify-content: center; align-items: center; gap: 8px; padding: 0 22px;
    display: inline-flex; position: relative; overflow: hidden;
    transition: background 0.25s, box-shadow 0.25s, transform 0.25s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .btn:after {
    content: ""; pointer-events: none;
    background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
    position: absolute; inset: 0; transform: translateX(-120%);
  }
  .btn:hover:after { transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1); transform: translateX(120%); }
  .btn-oro, .btn-primary { background: var(--oro); color: #121212; }
  .btn-oro:hover, .btn-primary:hover { background: var(--oro-hover); transform: translateY(-2px); box-shadow: 0 12px 28px -12px rgba(200, 165, 72, 0.7); }
  .btn-linea { color: var(--tinta); box-shadow: inset 0 0 0 1px var(--filete); background: rgba(15, 26, 45, 0.45); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); }
  .btn-linea:hover { box-shadow: inset 0 0 0 1px var(--oro); color: var(--oro); }
  .top .btn { min-height: 38px; padding: 0 16px; font-size: 14px; }
  .enlace-btn {
    background: none; border: 0; color: var(--tinta); box-shadow: inset 0 -1px var(--oro);
    font: 600 14.5px var(--sans); padding: 2px 0; cursor: pointer; text-align: left;
  }
  .enlace-btn:hover { color: var(--oro); }

  /* ==========================================================================
     PORTADA DE ENTRADA CON CÁMARA EN MOVIMIENTO + ESCUDO EN SCROLL (#intro)
     ========================================================================== */
  .portada { height: 185vh; position: relative; }
  .pin {
    background: var(--hondo);
    isolation: isolate;
    height: 100svh;
    position: sticky;
    top: 0;
    overflow: hidden;
  }
  /* Escenario de cámara en movimiento continuo (Dolly + Pan 3D + Reflejo de estudio) */
  .fondo-cam {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background: var(--hondo);
    will-change: transform;
  }
  .cam-plane {
    position: absolute;
    inset: -6%;
    width: 112%;
    height: 112%;
    max-width: none;
    object-fit: cover;
    filter: contrast(1.06) saturate(1.05) brightness(0.86);
    will-change: transform, opacity;
  }
  .cam-plane-1 {
    animation: camMovePrimary 14s ease-in-out infinite alternate;
  }
  .cam-plane-2 {
    opacity: 0;
    animation: camMoveSecondary 14s ease-in-out infinite alternate;
  }
  /* Barrido de luces de techo reflejadas sobre la escena (como los tubos de luz en el capó del Mercedes) */
  .cam-sheen {
    position: absolute;
    inset: -20%;
    background:
      linear-gradient(115deg,
        transparent 18%,
        rgba(255, 255, 255, 0.03) 34%,
        rgba(255, 248, 225, 0.16) 38%,
        rgba(255, 255, 255, 0.02) 42%,
        transparent 56%,
        rgba(200, 165, 72, 0.11) 68%,
        transparent 76%);
    mix-blend-mode: screen;
    pointer-events: none;
    animation: camLightSweep 9s ease-in-out infinite alternate;
  }
  @keyframes camMovePrimary {
    0%   { transform: scale(1.04) translate3d(-1.8%, -1.2%, 0) rotate(-0.3deg); }
    50%  { transform: scale(1.13) translate3d(1.6%, 0.8%, 0) rotate(0.2deg); }
    100% { transform: scale(1.20) translate3d(-1.0%, 1.8%, 0) rotate(-0.2deg); }
  }
  @keyframes camMoveSecondary {
    0%, 38%  { opacity: 0; transform: scale(1.16) translate3d(2.2%, -1.0%, 0); }
    62%, 92% { opacity: 0.72; transform: scale(1.06) translate3d(-1.8%, 1.2%, 0); }
    100%     { opacity: 0; transform: scale(1.12) translate3d(0%, 0%, 0); }
  }
  @keyframes camLightSweep {
    0%   { transform: translate3d(-14%, -6%, 0) rotate(-2deg); }
    100% { transform: translate3d(14%, 6%, 0) rotate(2deg); }
  }

  /* Velo multiplicador con escudo recortado (blanco = ventana transparente a la cámara) */
  .velo {
    mix-blend-mode: multiply;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .fondo-velo { fill: var(--hondo); }
  .escudo-rim {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .firma {
    left: 0; right: 0;
    bottom: calc(var(--bar) + 4vh);
    text-align: center;
    color: var(--plata);
    font-size: 14.5px;
    letter-spacing: 0.03em;
    line-height: 1.5;
    position: absolute;
    cursor: pointer;
    z-index: 6;
  }
  .firma span {
    display: inline-block;
    max-width: calc(100vw - 32px);
    padding: 5px 14px;
    background: rgba(10, 19, 34, 0.72);
    border: 1px solid var(--filete);
    border-radius: 999px;
    font-size: clamp(12px, 3.2vw, 14.5px);
  }
  .firma i {
    background: linear-gradient(var(--oro), transparent);
    width: 1px;
    height: 36px;
    margin: 10px auto 0;
    animation: 2.2s ease-in-out infinite gota;
    display: block;
  }
  @keyframes gota {
    0%   { transform-origin: top; transform: scaleY(0); }
    50%  { transform-origin: top; transform: scaleY(1); }
    51%  { transform-origin: bottom; }
    100% { transform-origin: bottom; transform: scaleY(0); }
  }

  .sombra {
    opacity: 0;
    background: linear-gradient(rgba(15, 26, 45, 0.55) 0%, rgba(15, 26, 45, 0.10) 28%, rgba(15, 26, 45, 0.94) 88%);
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .titular {
    left: 0; right: 0;
    bottom: calc(var(--bar) + 24px);
    padding: 0 var(--gutter);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transform: translateY(24px);
    z-index: 8;
  }
  .titular-kicker {
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--oro);
    margin-bottom: 10px;
    display: block;
  }
  .titular h1 {
    font-family: var(--serif);
    letter-spacing: -0.02em;
    max-width: 14ch;
    font-size: clamp(26px, 7.2vw, 84px);
    font-weight: 400;
    line-height: 1.02;
    color: var(--tinta);
  }
  .titular .sub {
    color: var(--tinta);
    opacity: 0.88;
    max-width: 42ch;
    margin-top: 12px;
    font-size: clamp(14.5px, 3.8vw, 16.5px);
  }
  .titular .acciones {
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 18px;
    display: flex;
  }
  @media (max-width: 639px) {
    .titular .acciones .btn { flex: 1 1 auto; padding: 0 14px; font-size: 14.5px; }
  }
  .nota-google {
    color: var(--tinta-2);
    align-items: center;
    gap: 10px;
    margin-top: 16px;
    font-size: 13.5px;
    display: flex;
  }
  .nota-google b { font-family: var(--serif); color: var(--tinta); font-size: 20px; font-weight: 400; }
  .estrellas { color: var(--oro); letter-spacing: 2px; }

  .demo-photo-pill {
    position: absolute;
    top: calc(var(--cab) + 8px);
    right: var(--gutter);
    z-index: 25;
    background: rgba(10, 19, 34, 0.85);
    color: var(--oro);
    border: 1px solid var(--oro);
    border-radius: 2px;
    padding: 7px 13px;
    font: 600 12px var(--mono);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
  }

  /* ==========================================================================
     SECCIÓN 1: LOS 3 VERBOS EN SERIF CONTORNEADA (.verbos)
     ========================================================================== */
  .verbos {
    background: var(--hondo);
    border-block: 1px solid var(--filete);
    padding: 68px 0;
  }
  .verbos h2 {
    font-family: var(--serif);
    color: var(--tinta-2);
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 400;
  }
  .verbos .lista { display: grid; gap: 24px; }
  .verbo {
    border-top: 1px solid var(--filete);
    padding: 18px 0 10px;
    display: block;
    transition: border-color 0.3s;
  }
  .verbo:hover { border-top-color: var(--oro); }
  .verbo strong {
    font-family: var(--serif);
    letter-spacing: -0.03em;
    color: transparent;
    -webkit-text-stroke: 1.2px var(--plata);
    font-size: clamp(36px, 9vw, 62px);
    font-weight: 600;
    line-height: 0.98;
    display: block;
    transition: color 0.35s, -webkit-text-stroke-color 0.35s;
  }
  .verbo:hover strong {
    color: var(--oro);
    -webkit-text-stroke-color: var(--oro);
  }
  .verbo p { color: var(--tinta-2); max-width: 38ch; margin-top: 10px; font-size: 15.5px; }

  /* ==========================================================================
     SECCIONES EDITORIALES Y PRECIOS CERRADOS (#servicios)
     ========================================================================== */
  .sec { padding: 78px 0; }
  .sec.hundida, .e.hundida { background: var(--hondo); border-block: 1px solid var(--filete); }
  .sec.destacada {
    background: radial-gradient(ellipse 70% 60% at 85% 0%, rgba(200, 165, 72, 0.12), transparent 70%), var(--placa);
    border-block: 1px solid rgba(200, 165, 72, 0.52);
    position: relative;
  }
  .sec.destacada:before {
    content: "";
    background: var(--oro);
    width: min(220px, 40%);
    height: 3px;
    position: absolute;
    top: -1px; left: 50%;
    transform: translateX(-50%);
  }
  .sec h2 {
    font-family: var(--serif);
    letter-spacing: -0.015em;
    max-width: 16ch;
    font-size: clamp(32px, 7.5vw, 58px);
    font-weight: 400;
    line-height: 1.03;
  }
  .sec .intro { color: var(--tinta-2); max-width: 44ch; margin-top: 14px; }
  .duo { display: grid; gap: 44px; align-items: start; }

  .incluye { border-top: 1px solid var(--oro); margin-top: 24px; }
  .incluye ul { list-style: none; }
  .incluye li {
    border-bottom: 1px solid var(--filete);
    padding: 13px 0 13px 20px;
    position: relative;
    color: var(--tinta-2);
    font-size: 15.5px;
  }
  .incluye li:before {
    content: "";
    background: var(--oro);
    width: 9px; height: 1px;
    position: absolute;
    top: 1.4em; left: 0;
  }
  .incluye li strong { color: var(--tinta); font-weight: 600; }

  .carta {
    border-top: 1px solid var(--oro);
    background: rgba(10, 19, 34, 0.38);
    padding: 0 18px;
  }
  .carta .cab {
    color: var(--tinta-2);
    border-bottom: 1px solid var(--filete);
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 12px;
    padding: 11px 0;
    font-family: var(--mono);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    display: grid;
  }
  .fila { border-bottom: 1px solid var(--filete); }
  .fila summary {
    cursor: pointer;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: baseline;
    gap: 14px;
    padding: 18px 0;
    list-style: none;
    display: grid;
  }
  .fila summary::-webkit-details-marker { display: none; }
  .fila .n { font-family: var(--serif); font-size: 23px; line-height: 1.15; color: var(--tinta); }
  .fila .n small { font-family: var(--sans); color: var(--tinta-2); margin-top: 4px; font-size: 13.5px; display: block; }
  .fila .p { font-family: var(--serif); font-variant-numeric: tabular-nums; font-size: 23px; color: var(--oro); white-space: nowrap; }
  .fila[open] summary .n { color: var(--oro); }
  .fila .inc { color: var(--tinta-2); padding: 0 0 18px; font-size: 14.5px; }
  .fila .inc ul { gap: 6px; list-style: none; display: grid; }
  .fila .inc li { padding-left: 16px; position: relative; }
  .fila .inc li:before { content: ""; background: var(--oro); width: 7px; height: 1px; position: absolute; top: 0.7em; left: 0; }
  .fila .inc .pie-fila { margin-top: 12px; }

  /* ==========================================================================
     SECCIÓN 2: COMPARADOR INTERACTIVO ANTES / DESPUÉS (#resultados)
     ========================================================================== */
  .ad {
    aspect-ratio: 4/5;
    -webkit-user-select: none;
    user-select: none;
    background: #000;
    width: 100%;
    max-width: 440px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--filete);
  }
  .ad-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }
  .ad-antes {
    filter: grayscale(0.65) contrast(0.86) brightness(0.68) sepia(0.18);
    clip-path: inset(0 var(--x, 65%) 0 0);
  }
  .ad-divisor {
    position: absolute;
    top: 0; bottom: 0;
    left: calc(100% - var(--x, 65%));
    width: 1.5px;
    background: var(--oro);
    box-shadow: 0 0 16px rgba(200, 165, 72, 0.8);
    pointer-events: none;
  }
  .ad .et {
    font-family: var(--serif);
    color: var(--tinta);
    background: rgba(10, 19, 34, 0.82);
    border: 1px solid var(--filete);
    padding: 6px 12px;
    font-size: 18px;
    position: absolute;
    top: 14px; left: 14px;
    z-index: 3;
  }
  .ad.salio .et { color: var(--oro); border-color: var(--oro); }
  .ad .riel {
    background: rgba(255, 255, 255, 0.35);
    height: 2px;
    position: absolute;
    bottom: 24px; left: 16px; right: 16px;
    z-index: 3;
  }
  .ad .avance {
    height: 2px;
    width: var(--x, 35%);
    background: var(--oro);
    position: absolute;
    top: 0; left: 0;
    box-shadow: 0 0 14px 1px rgba(200, 165, 72, 0.7);
  }
  .ad .asa {
    top: 0;
    left: var(--x, 35%);
    background: var(--oro);
    border-radius: 50%;
    width: 22px; height: 22px;
    margin: -10px 0 0 -11px;
    position: absolute;
    box-shadow: 0 0 0 6px rgba(200, 165, 72, 0.25);
  }
  .ad input[type="range"] {
    opacity: 0;
    cursor: ew-resize;
    width: 100%; height: 100%;
    margin: 0;
    position: absolute;
    inset: 0;
    z-index: 5;
  }
  .ad-hecho { border-top: 1px solid var(--filete); margin: 24px 0 0; padding: 0; list-style: none; }
  .ad-hecho li {
    border-bottom: 1px solid var(--filete);
    color: var(--tinta-2);
    padding: 13px 0 13px 22px;
    position: relative;
    font-size: 15.5px;
  }
  .ad-hecho li:before { content: ""; background: var(--oro); width: 9px; height: 1px; position: absolute; top: 22px; left: 0; }
  .ad-hecho b { color: var(--tinta); font-weight: 600; }
  .ad-precio { font: 500 12.5px var(--mono); letter-spacing: 0.08em; text-transform: uppercase; color: var(--oro); margin: 20px 0 16px; }

  /* ==========================================================================
     SECCIÓN 3: RESEÑAS DE GOOGLE ESTILO PRESTIGE (#opiniones)
     ========================================================================== */
  .resenas-grid { display: grid; gap: 18px; margin-top: 32px; }
  .res-tarjeta {
    background: var(--placa);
    border: 1px solid var(--filete);
    border-top: 2px solid var(--oro);
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;
    padding: 26px 24px 22px;
    display: flex;
  }
  .res-estrellas { color: var(--oro); letter-spacing: 4px; font-size: 19px; line-height: 1; }
  .res-tarjeta blockquote { font-family: var(--serif); color: var(--tinta); font-size: 19px; line-height: 1.42; }
  .res-tarjeta figcaption { border-top: 1px solid var(--filete); align-items: center; gap: 12px; padding-top: 14px; display: flex; }
  .res-inicial {
    background: var(--hondo);
    width: 38px; height: 38px;
    color: var(--oro);
    font: 400 17px var(--serif);
    border: 1px solid rgba(200, 165, 72, 0.5);
    border-radius: 50%;
    place-items: center;
    display: grid;
    flex-shrink: 0;
  }
  .res-tarjeta figcaption b { font-size: 15px; font-weight: 600; display: block; }
  .res-tarjeta figcaption small { color: var(--tinta-2); font-size: 12.5px; display: block; }

  /* ==========================================================================
     SECCIÓN 4: DESGLOSE POR CAPAS DE CALIDAD (#capas)
     ========================================================================== */
  .capas { display: grid; gap: 36px; align-items: center; }
  .capas-lista { border-top: 1px solid var(--oro); margin-top: 22px; }
  .capa { border-bottom: 1px solid var(--filete); }
  .capa summary {
    cursor: pointer;
    grid-template-columns: auto 1fr auto;
    align-items: baseline;
    gap: 14px;
    padding: 15px 4px;
    list-style: none;
    display: grid;
  }
  .capa summary::-webkit-details-marker { display: none; }
  .capa-n { font: 500 12px var(--mono); color: var(--oro); }
  .capa-nombre { font-family: var(--serif); color: var(--tinta-2); font-size: 21px; line-height: 1.2; transition: color 0.2s; }
  .capa[open] .capa-nombre, .capa summary:hover .capa-nombre { color: var(--tinta); }
  .capa-grosor { font: 400 12px var(--mono); color: var(--plata); text-align: right; }
  .capa-det { padding: 0 4px 18px 32px; color: var(--tinta-2); font-size: 15px; }
  .capas-coche {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
    border: 1px solid var(--filete);
    background: var(--hondo);
  }
  .capas-coche img { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.05) brightness(0.86); }
  .capas-marca {
    pointer-events: none;
    position: absolute;
    top: 38%; left: 46%;
    transition: top 0.45s cubic-bezier(0.2, 0.7, 0.2, 1), left 0.45s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .capas-marca i {
    border: 2px solid var(--oro);
    border-radius: 50%;
    width: 32px; height: 32px;
    margin: -16px 0 0 -16px;
    position: absolute;
    box-shadow: 0 0 0 6px rgba(200, 165, 72, 0.25);
  }
  .capas-marca span {
    white-space: nowrap;
    font: 500 11.5px/1 var(--mono);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #10141c;
    background: var(--oro);
    padding: 7px 10px;
    position: absolute;
    top: -13px; left: 24px;
  }

  /* ==========================================================================
     SECCIÓN 5: CASOS NUMERADOS CON SERIF GIGANTE SUPERPUESTA (#casos / #galeria)
     ========================================================================== */
  .e { padding: 80px 0 56px; position: relative; }
  .e-cab { justify-content: space-between; align-items: flex-end; gap: 16px; display: flex; flex-wrap: wrap; }
  .e-pista {
    padding: 28px 0 18px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    gap: 24px;
    display: flex;
    overflow-x: auto;
  }
  .e-pista::-webkit-scrollbar { display: none; }
  .e-caso {
    scroll-snap-align: start;
    flex: 0 0 min(82vw, 340px);
    position: relative;
  }
  .e-media {
    aspect-ratio: 3/4;
    background: #000;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--filete);
  }
  .e-media img { object-fit: cover; width: 100%; height: 100%; transition: transform 0.7s ease; }
  .e-caso:hover .e-media img { transform: scale(1.04); }
  .e-media:after {
    content: "";
    background: linear-gradient(transparent 50%, rgba(10, 19, 34, 0.88));
    position: absolute;
    inset: 0;
  }
  .e-num { z-index: 2; color: var(--tinta); background: rgba(10, 19, 34, 0.72); padding: 4px 8px; position: absolute; top: 12px; left: 12px; }
  .e-caso h3 {
    z-index: 2;
    font-family: var(--serif);
    letter-spacing: -0.03em;
    margin: -0.95em 0 0 12px;
    font-size: clamp(38px, 8vw, 64px);
    font-style: italic;
    font-weight: 400;
    line-height: 0.94;
    position: relative;
    color: var(--tinta);
    text-shadow: 0 8px 24px rgba(0, 0, 0, 0.65);
  }
  .e-parte {
    grid-template-columns: auto 1fr;
    gap: 7px 14px;
    margin-top: 16px;
    font-size: 14.5px;
    display: grid;
    border-top: 1px solid var(--filete);
    padding-top: 12px;
  }
  .e-parte dt { font-family: var(--mono); color: var(--oro); font-size: 11.5px; text-transform: uppercase; padding-top: 2px; }
  .e-parte dd { color: var(--tinta-2); }

  /* ==========================================================================
     SECCIÓN 6: ASÍ SE TRABAJA AQUÍ (#nosotros)
     ========================================================================== */
  .proceso { gap: 34px; margin-top: 32px; display: grid; }
  .proceso figure { aspect-ratio: 4/5; max-height: 480px; width: 100%; position: relative; overflow: hidden; border: 1px solid var(--filete); }
  .proceso figure img { object-fit: cover; width: 100%; height: 100%; }
  .proceso figcaption {
    background: linear-gradient(transparent, rgba(10, 19, 34, 0.92));
    padding: 28px 14px 12px;
    font-size: 13.5px;
    color: var(--plata);
    position: absolute;
    bottom: 0; left: 0; right: 0;
  }
  .pasos { counter-reset: p; list-style: none; display: grid; }
  .pasos li {
    counter-increment: p;
    border-top: 1px solid var(--filete);
    grid-template-columns: 46px 1fr;
    padding: 18px 0;
    display: grid;
  }
  .pasos li:before {
    content: counter(p);
    font-family: var(--serif);
    color: var(--oro);
    font-size: 34px;
    line-height: 1;
  }
  .pasos h3 { font-size: 18px; font-weight: 600; color: var(--tinta); }
  .pasos p { color: var(--tinta-2); margin-top: 4px; font-size: 15.5px; }

  /* ==========================================================================
     SECCIÓN 7: RESERVA / HERRAMIENTA WHATSAPP + FAQ + UBICACIÓN (#accion)
     ========================================================================== */
  .reserva { background: var(--hondo); border-top: 1px solid var(--filete); }
  .vias { flex-wrap: wrap; gap: 10px; margin-top: 22px; display: flex; }
  .faq { border-top: 1px solid var(--oro); margin-top: 28px; }
  .faq details { border-bottom: 1px solid var(--filete); }
  .faq summary {
    cursor: pointer;
    padding: 16px 32px 16px 0;
    font-weight: 500;
    list-style: none;
    position: relative;
    color: var(--tinta);
  }
  .faq summary::-webkit-details-marker { display: none; }
  .faq summary:after {
    content: "+";
    font-family: var(--serif);
    color: var(--oro);
    font-size: 25px;
    transition: transform 0.25s;
    position: absolute;
    top: 11px; right: 4px;
  }
  .faq details[open] summary:after { transform: rotate(45deg); }
  .faq details p { color: var(--tinta-2); padding: 0 0 16px; font-size: 15px; }

  .contacto-datos { border-top: 1px solid var(--oro); margin-top: 26px; display: grid; }
  .contacto-datos div { border-bottom: 1px solid var(--filete); padding: 13px 0; }
  .contacto-datos dt { font-family: var(--mono); color: var(--oro); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.05em; }
  .contacto-datos dd { margin-top: 3px; font-size: 15.5px; color: var(--tinta); }

  /* ESTILOS DEL MÓDULO INTERACTIVO DE WHATSAPP INTEGRADO EN PRESTIGE */
  .sec-head { margin-bottom: 18px; }
  .sec-pill {
    display: inline-block;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--oro);
    margin-bottom: 8px;
  }
  #accion .sec-head h2 {
    font-family: var(--serif);
    font-size: clamp(26px, 4.5vw, 38px);
    font-weight: 400;
    line-height: 1.08;
    color: var(--tinta);
  }
  .sec-sub { color: var(--tinta-2); font-size: 14.5px; margin-top: 6px; }
  .bezel-shell {
    border-top: 2px solid var(--oro);
    background: var(--placa);
    border-inline: 1px solid var(--filete);
    border-bottom: 1px solid var(--filete);
  }
  .book-card { padding: 22px 20px; }
  .mode-tabs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 16px;
    padding: 5px;
    background: var(--hondo);
    border: 1px solid var(--filete);
  }
  @media (min-width: 520px) { .mode-tabs { grid-template-columns: 1fr 1fr; } }
  .mode-tab {
    padding: 11px 12px;
    border: 0;
    background: transparent;
    color: var(--tinta-2);
    font: 600 13.5px var(--sans);
    cursor: pointer;
    border-radius: 2px;
  }
  .mode-tab.active { background: var(--oro); color: #121212; }
  .live-est {
    padding: 11px 14px;
    background: rgba(200, 165, 72, 0.12);
    border-left: 2px solid var(--oro);
    color: var(--tinta);
    font-size: 13.5px;
    margin-bottom: 14px;
  }
  .form-grid { display: grid; grid-template-columns: 1fr; gap: 13px; margin-bottom: 14px; }
  @media (min-width: 620px) { .form-grid { grid-template-columns: 1fr 1fr; } }
  label {
    display: block;
    font: 500 12px var(--mono);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--tinta-2);
    margin-bottom: 6px;
  }
  input, select, textarea {
    width: 100%;
    min-height: 48px;
    padding: 10px 13px;
    border-radius: 2px;
    border: 1px solid var(--filete);
    background: var(--hondo);
    color: var(--tinta);
    font: 16px var(--sans);
    outline: none;
  }
  @media (max-width: 899px) {
    #accion .duo > div:last-child { order: -1; }
  }
  input:focus, select:focus, textarea:focus { border-color: var(--oro); }
  .slots { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin: 6px 0 15px; }
  @media (min-width: 520px) { .slots { grid-template-columns: repeat(4, 1fr); } }
  .slot-btn {
    padding: 10px 8px;
    border-radius: 2px;
    border: 1px solid var(--filete);
    background: var(--hondo);
    color: var(--tinta);
    font: 600 13px var(--mono);
    cursor: pointer;
  }
  .slot-btn.active { background: var(--oro); color: #121212; border-color: var(--oro); }
  .btn-block { width: 100%; min-height: 50px; justify-content: center; padding: 14px 18px; font: 700 15px var(--sans); border-radius: 2px; border: 0; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; }
  .btn-arrow { font-weight: 700; }
  .book-ok {
    display: none;
    margin-top: 14px;
    padding: 13px 15px;
    background: rgba(200, 165, 72, 0.16);
    border: 1px solid var(--oro);
    color: var(--tinta);
    font-size: 14px;
  }

  /* PIE DE PÁGINA ESTILO PRESTIGE + BARRA INFERIOR MÓVIL */
  .pie-web { border-top: 1px solid var(--oro); padding: 64px 0 40px; position: relative; overflow: hidden; background: var(--noche); }
  .pie-web .lema { font-family: var(--serif); max-width: 16ch; font-size: clamp(26px, 6vw, 42px); line-height: 1.08; color: var(--tinta); }
  .pie-web .cols { gap: 30px; margin-top: 32px; display: grid; }
  .pie-web h2 { font-family: var(--mono); color: var(--oro); margin-bottom: 10px; font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.08em; }
  .pie-web ul { gap: 6px; list-style: none; display: grid; font-size: 14.5px; color: var(--tinta-2); }
  .pie-web a:hover { color: var(--oro); }
  .pie-web .legal { color: var(--tinta-2); flex-wrap: wrap; gap: 8px 18px; margin-top: 36px; font-size: 13px; display: flex; border-top: 1px solid var(--filete); padding-top: 20px; }

  .barra {
    z-index: 50;
    height: var(--bar);
    background: var(--noche);
    border-top: 1px solid var(--oro);
    grid-template-columns: 1fr 1fr;
    display: grid;
    position: fixed;
    bottom: 0; left: 0; right: 0;
  }
  .barra a, .barra button {
    justify-content: center;
    align-items: center;
    gap: 8px;
    font: 600 14.5px var(--sans);
    border: 0;
    cursor: pointer;
    display: flex;
  }
  .barra .b-wa { background: var(--oro); color: #121212; }
  .barra .b-tel { background: var(--noche); color: var(--tinta); }

  @media (min-width: 900px) {
    :root { --gutter: 40px; --bar: 0px; --cab: 92px; }
    .barra, .menu-btn, .reservar-movil { display: none; }
    .top { padding-block: 14px; }
    .top nav { display: flex; }
    .titular { left: max(var(--gutter), calc((100vw - 1180px) / 2 + 40px)); padding: 0; bottom: 9vh; }
    .verbos .lista { grid-template-columns: repeat(3, 1fr); gap: 28px; }
    .duo { grid-template-columns: 0.92fr 1.08fr; gap: 64px; }
    .duo .fijo { top: calc(var(--cab) + 24px); position: sticky; }
    .resenas-grid { grid-template-columns: repeat(3, 1fr); }
    .capas { grid-template-columns: 0.95fr 1.05fr; gap: 56px; }
    .proceso { grid-template-columns: 0.82fr 1.18fr; gap: 56px; align-items: start; }
    .pie-web .cols { grid-template-columns: 1.3fr 1fr 1fr; }
    .e-caso { flex: 0 0 360px; }
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .cam-plane-1, .cam-plane-2, .cam-sheen, .firma i { animation: none !important; }
  }
</style>
</head>
<body>

  <!-- CABECERA SIMÉTRICA PRESTIGE -->
  <header class="top en-portada" id="top">
    <button type="button" class="menu-btn" id="btn-abrir-cortina" aria-expanded="false">
      <i></i><span>Menú</span>
    </button>
    <nav class="izq" aria-label="Principal izquierda">
      <a href="#servicios">Servicios</a>
      <a href="#capas">Método</a>
      <a href="#resultados">Resultados</a>
    </nav>
    <a class="marca" href="#intro">
      <span class="marca-titulo">${escapeHtml(brandParts.mainLine)}</span>
      <span class="marca-sub">${escapeHtml(brandParts.subLine)}</span>
    </a>
    <nav class="der" aria-label="Principal derecha">
      <a href="#casos">Trabajos</a>
      <a href="#opiniones">Opiniones</a>
      <a href="#accion">Contacto</a>
      <button type="button" class="btn btn-oro" onclick="jumpSec('accion')">Reservar</button>
    </nav>
    <button type="button" class="reservar-movil" onclick="jumpSec('accion')">Reservar</button>
  </header>

  <!-- MENÚ DESPLEGABLE MÓVIL -->
  <div class="cortina" id="cortina" aria-hidden="true">
    <button type="button" class="cerrar" id="btn-cerrar-cortina">✕ Cerrar</button>
    <ul>
      <li><a href="#servicios" onclick="cerrarCortina()"><span>Servicios y precios</span><small>01</small></a></li>
      <li><a href="#resultados" onclick="cerrarCortina()"><span>Antes y después</span><small>02</small></a></li>
      <li><a href="#capas" onclick="cerrarCortina()"><span>Nuestro método</span><small>03</small></a></li>
      <li><a href="#casos" onclick="cerrarCortina()"><span>Trabajos realizados</span><small>04</small></a></li>
      <li><a href="#opiniones" onclick="cerrarCortina()"><span>Reseñas Google</span><small>05</small></a></li>
      <li><a href="#accion" onclick="cerrarCortina()"><span>${escapeHtml(actionBtnLabel)}</span><small>06</small></a></li>
    </ul>
  </div>

  <main>
    <!-- ======================================================================
         ENTRADA CINEMÁTICA CON CÁMARA EN MOVIMIENTO + ESCUDO EN SCROLL (#intro)
         ====================================================================== -->
    <section class="portada" id="intro">
      <div class="pin">
        ${editPhotoBtnHero}

        <!-- Cámara en movimiento continuo detrás del emblema -->
        <div class="fondo-cam" id="fondo-cam">
          <img class="cam-plane cam-plane-1" src="${escapeHtml(heroImg)}" alt="${escapeHtml(st.name)} en ${escapeHtml(st.city)}" />
          <img class="cam-plane cam-plane-2" src="${escapeHtml(secondImg)}" alt="${escapeHtml(sectorBadge)} · Vista 2" />
          <div class="cam-sheen"></div>
        </div>

        <!-- Máscara SVG con mix-blend-mode:multiply (el escudo blanco deja ver la cámara en movimiento y encaja 100% en móvil y PC) -->
        <svg class="velo" id="velo-svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <rect class="fondo-velo" x="-50000" y="-50000" width="100000" height="100000"></rect>
          <g id="escudo" fill="#ffffff">
            <!-- Doble arco superior estilo Prestige -->
            <path d="M235 440 A268 268 0 0 1 765 440 L748 440 A251 251 0 0 0 252 440 Z" />
            <path d="M275 432 A228 228 0 0 1 725 432 L713 432 A216 216 0 0 0 287 432 Z" />
            <!-- Emblema vectorial del oficio + ventana central (500,390) -->
            ${crestArtworkSvg}
            <!-- Nombre principal del negocio en Serif mayúscula a través del cual se ve la cámara -->
            <text x="500" y="548" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${brandParts.mainLine.length > 10 ? 54 : brandParts.mainLine.length > 8 ? 64 : 74}" font-weight="700" letter-spacing="6">${escapeHtml(brandParts.mainLine)}</text>
            <!-- Subtítulo espaciado del oficio -->
            <text x="500" y="604" text-anchor="middle" font-family="Arial, sans-serif" font-size="${brandParts.subLine.length > 20 ? 18 : 22}" font-weight="700" letter-spacing="9">${escapeHtml(brandParts.subLine)}</text>
            <!-- Doble chevron inferior estilo Prestige -->
            <path d="M350 644 L500 704 L650 644 L636 632 L500 684 L364 632 Z" />
            <path d="M388 678 L500 726 L612 678 L600 668 L500 708 L400 668 Z" />
          </g>
        </svg>

        <!-- Filete dorado sutil que acompaña al emblema antes de abrirse -->
        <svg class="escudo-rim" id="escudo-rim" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <g id="escudo-borde" fill="none" stroke="${pal.oro}" stroke-opacity="0.42" stroke-width="1.8">
            <path d="M235 440 A268 268 0 0 1 765 440" />
            <path d="M350 644 L500 704 L650 644" />
            <path d="M388 678 L500 726 L612 678" />
          </g>
        </svg>

        <div class="sombra" id="intro-sombra"></div>

        <p class="firma" id="intro-firma" onclick="abrirPortadaSuave()">
          <span>${escapeHtml(sectorBadge)} en ${escapeHtml(st.city)} · Desliza para entrar</span>
          <i></i>
        </p>

        <div class="titular" id="intro-titular">
          <span class="titular-kicker">${escapeHtml(st.name)} · ${escapeHtml(st.city)}</span>
          <h1>${escapeHtml(st.tagline || (sectorBadge + ' en ' + st.city))}</h1>
          <p class="sub">${escapeHtml(st.story)}</p>
          <div class="acciones">
            <button type="button" class="btn btn-oro" onclick="jumpSec('accion')">${escapeHtml(actionBtnLabel)}</button>
            <a class="btn btn-linea" href="#servicios">Ver servicios y precios</a>
          </div>
          <div class="nota-google">
            <b>5,0</b>
            <span class="estrellas">★★★★★</span>
            <span>Valoración verificada en ${escapeHtml(st.city)} · Trato directo por WhatsApp</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECCIÓN 1: LOS 3 VERBOS EN SERIF CONTORNEADA (.verbos)
         ====================================================================== -->
    <section class="verbos">
      <div class="wrap">
        <h2>${escapeHtml(verbosData.intro)}</h2>
        <div class="lista">${verbosHtml}</div>
      </div>
    </section>

    <!-- ======================================================================
         SECCIÓN 2: PRECIOS CERRADOS Y TABLA DESPLEGABLE (#servicios)
         ====================================================================== -->
    ${st.modules.services !== false ? `
    <section class="sec destacada" id="servicios">
      <div class="wrap duo">
        <div class="fijo">
          <h2>Tarifas claras, precio cerrado</h2>
          <p class="intro">Elige según lo que necesites en ${escapeHtml(st.name)}. Toca cualquier servicio para ver qué incluye y solicitarlo directo por WhatsApp.</p>
          <div class="incluye">
            <ul>
              <li><strong>Sabes el precio antes de empezar.</strong> Por WhatsApp te confirmamos el importe exacto sin compromiso.</li>
              <li><strong>No cambia a mitad del trabajo.</strong> Si hace falta algo adicional, te lo valoramos antes de tocarlo.</li>
              <li><strong>Pagas en efectivo, Bizum o tarjeta.</strong> Sin comisiones ni plataformas intermediarias.</li>
              <li><strong>Atención prioritaria en ${escapeHtml(st.city)}.</strong> Confirmamos tu hueco directamente desde el móvil.</li>
            </ul>
          </div>
          <div style="margin-top:26px; display:flex; flex-wrap:wrap; gap:12px; align-items:center;">
            <button type="button" class="btn btn-oro" onclick="jumpSec('accion')">Pedir precio por WhatsApp</button>
          </div>
        </div>

        <div class="carta-col">
          <div class="carta">
            <div class="cab">
              <span>Servicio en ${escapeHtml(st.name)}</span>
              <span>Precio</span>
            </div>
            ${cartaRowsHtml}
          </div>
          <p style="color:var(--tinta-2); font-size:14px; margin-top:14px;">
            ¿Buscas algo personalizado? Escríbenos por WhatsApp y te damos valoración cerrada antes de empezar.
          </p>
        </div>
      </div>
    </section>` : ''}

    <!-- ======================================================================
         SECCIÓN 3: COMPARADOR INTERACTIVO ANTES / DESPUÉS (#resultados)
         ====================================================================== -->
    <section class="sec" id="resultados">
      <div class="wrap duo">
        <div class="ad-texto">
          <h2>Así entra, así sale terminado</h2>
          <p class="intro">Míralo salir impecable. Arrastra el deslizador de izquierda a derecha para comprobar la diferencia cuando se trabaja cada detalle con calma.</p>
          <ul class="ad-hecho">
            <li><b>Preparación completa</b> desde la base antes de iniciar el trabajo principal.</li>
            <li><b>Materiales y herramientas de primera línea</b> específicos para cada acabado.</li>
            <li><b>Revisión punto por punto</b> antes de avisarte para la entrega en ${escapeHtml(st.city)}.</li>
          </ul>
          <p class="ad-precio">${escapeHtml(sectorBadge)} · DESDE ${escapeHtml(firstPrice)}</p>
          <button type="button" class="btn btn-oro" onclick="jumpSec('accion')">Quiero este resultado</button>
        </div>

        <div>
          <div class="ad" id="ad" style="--x:36%;">
            <img class="ad-img" src="${escapeHtml(heroImg)}" alt="Resultado final en ${escapeHtml(st.name)}" />
            <img class="ad-img ad-antes" src="${escapeHtml(secondImg)}" alt="Estado previo antes de ${escapeHtml(st.name)}" />
            <div class="ad-divisor"></div>
            <span class="et" data-et>Entró así</span>
            <div class="riel">
              <div class="avance"></div>
              <div class="asa"></div>
            </div>
            <input type="range" id="ad-range" min="0" max="1000" value="360" aria-label="Comparar antes y después" />
          </div>
          <p style="color:var(--tinta-2); font-size:13.5px; margin-top:10px; text-align:center;">
            ${escapeHtml(st.name)} · Trabajo real en ${escapeHtml(st.city)}
          </p>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECCIÓN 4: LO QUE DICEN EN GOOGLE (#opiniones)
         ====================================================================== -->
    <section class="sec hundida" id="opiniones">
      <div class="wrap">
        <h2>Lo que dicen en Google</h2>
        <div class="resenas-grid">${reviewsHtml}</div>
        <div style="margin-top:24px; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px; color:var(--tinta-2); font-size:14.5px;">
          <div><b style="font-family:var(--serif); font-size:22px; color:var(--tinta); font-weight:400;">5,0</b> de 5 en Google · Clientes verificados en ${escapeHtml(st.city)}</div>
          <button type="button" class="enlace-btn" onclick="jumpSec('accion')">Solicitar cita o consulta por WhatsApp →</button>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECCIÓN 5: DESGLOSE INTERACTIVO POR CAPAS (#capas)
         ====================================================================== -->
    <section class="sec" id="capas" data-capas>
      <div class="wrap capas">
        <div>
          <h2>¿Cómo cuidamos cada trabajo?</h2>
          <p class="intro">Cada servicio lleva un orden técnico. Toca cada fase para ver qué hacemos exactamente en ${escapeHtml(st.name)}.</p>
          <div class="capas-lista">${capasHtml}</div>
          <div style="margin-top:24px;">
            <button type="button" class="btn btn-oro" onclick="jumpSec('accion')">Consultar para mi caso</button>
          </div>
        </div>

        <figure class="capas-coche">
          <img src="${escapeHtml(thirdImg)}" alt="Detalle técnico en ${escapeHtml(st.name)}" />
          <div class="capas-marca" id="capas-marca">
            <i></i>
            <span data-marca>DIAGNÓSTICO</span>
          </div>
        </figure>
      </div>
    </section>

    <!-- ======================================================================
         SECCIÓN 6: CASOS REALES CON TIPOGRAFÍA SERIF GIGANTE (#casos / #galeria)
         ====================================================================== -->
    ${st.modules.gallery !== false ? `
    <section class="e hundida" id="casos">
      <div class="wrap" id="galeria">
        <div class="e-cab">
          <h2>Trabajos que han pasado por aquí</h2>
          <div style="display:flex; gap:12px; align-items:center;">
            ${editPhotoBtnGal}
            <button type="button" class="enlace-btn" onclick="jumpSec('accion')">Pedir el mío →</button>
          </div>
        </div>
        <div class="e-pista">${casosHtml}</div>
      </div>
    </section>` : ''}

    <!-- ======================================================================
         SECCIÓN 7: ASÍ SE TRABAJA EN EL LOCAL (#nosotros)
         ====================================================================== -->
    <section class="sec" id="nosotros">
      <div class="wrap">
        <h2>Así se trabaja en ${escapeHtml(st.name)}</h2>
        <div class="proceso">
          <figure>
            <img src="${escapeHtml(secondImg)}" alt="Equipo e instalaciones de ${escapeHtml(st.name)}" />
            <figcaption>Cuidamos cada entrega en ${escapeHtml(st.address)} (${escapeHtml(st.city)}).</figcaption>
          </figure>
          <ol class="pasos">
            <li>
              <div>
                <h3>Nos escribes desde la web a nuestro WhatsApp</h3>
                <p>Eliges el servicio o nos indicas los datos en 15 segundos y lo recibimos al instante en el móvil del local.</p>
              </div>
            </li>
            <li>
              <div>
                <h3>Te damos precio cerrado antes de empezar</h3>
                <p>Sin sorpresas. Si hay cualquier detalle especial, te lo valoramos y confirmamos antes de tocar nada.</p>
              </div>
            </li>
            <li>
              <div>
                <h3>Trabajamos paso a paso con material profesional</h3>
                <p>Dedicamos el tiempo necesario a cada fase para garantizar un resultado limpio y duradero.</p>
              </div>
            </li>
            <li>
              <div>
                <h3>Te avisamos en cuanto está listo</h3>
                <p>Revisamos contigo el acabado final y pagas cómodamente en efectivo, tarjeta o Bizum.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECCIÓN 8: HERRAMIENTA INTERACTIVA WHATSAPP + FAQ + HORARIO (#accion)
         ====================================================================== -->
    <section class="sec reserva" id="accion">
      <div class="wrap duo" id="ubicacion">
        <div>
          <h2>Pide tu cita o presupuesto</h2>
          <p class="intro">Atendemos directamente por WhatsApp y teléfono en ${escapeHtml(st.city)}. Completa la herramienta interactiva o escríbenos en 1 clic.</p>
          <div class="vias">
            <a class="btn btn-oro" href="${directWaHref}" target="_blank" rel="noopener">Escribir por WhatsApp</a>
            <a class="btn btn-linea" href="${telHref}">Llamar al ${escapeHtml(st.phone || st.whatsapp)}</a>
          </div>

          <div class="faq">${faqHtml}</div>

          <dl class="contacto-datos">
            <div>
              <dt>Dirección en ${escapeHtml(st.city)}</dt>
              <dd>${escapeHtml(st.address)} · ${escapeHtml(st.city)} (<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(st.name + ' ' + st.address + ' ' + st.city)}" target="_blank" rel="noopener" style="color:var(--oro);text-decoration:underline;">Cómo llegar en Google Maps ↗</a>)</dd>
            </div>
            <div>
              <dt>Horario de atención</dt>
              <dd>Lunes a viernes: ${escapeHtml(st.hoursWeek)} · Sábados: ${escapeHtml(st.hoursSat)} · Domingos: ${escapeHtml(st.hoursSun)}</dd>
            </div>
          </dl>
        </div>

        <div>
          ${widgetHtml}
        </div>
      </div>
    </section>
  </main>

  <!-- PIE DE PÁGINA ESTILO PRESTIGE -->
  <footer class="pie-web">
    <div class="wrap">
      <p class="lema">Pasión, precisión y oficio en ${escapeHtml(st.city)}.</p>
      <div class="cols">
        <div>
          <h2>${escapeHtml(st.name)}</h2>
          <ul>
            <li>${escapeHtml(st.address)} · ${escapeHtml(st.city)}</li>
            <li><a href="${telHref}">Tel. ${escapeHtml(st.phone || st.whatsapp)}</a></li>
            <li><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(st.name + ' ' + st.address + ' ' + st.city)}" target="_blank" rel="noopener">Cómo llegar ↗</a></li>
          </ul>
        </div>
        <div>
          <h2>Servicios Principales</h2>
          <ul>
            ${srvList.slice(0, 4).map(s => `<li><a href="#servicios">${escapeHtml(s.title)}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h2>El Estudio</h2>
          <ul>
            <li><a href="#resultados">Resultados (Antes y Después)</a></li>
            <li><a href="#casos">Trabajos realizados</a></li>
            <li><a href="#opiniones">Reseñas de Google</a></li>
            <li><a href="#accion">${escapeHtml(actionBtnLabel)}</a></li>
          </ul>
        </div>
      </div>

      <div class="legal">
        <span>© ${new Date().getFullYear()} ${escapeHtml(st.name)} · Todos los derechos reservados</span>
        <button type="button" onclick="document.getElementById('legal-modal').style.display='flex'" style="background:none;border:0;color:var(--tinta-2);text-decoration:underline;cursor:pointer;font:inherit;">
          Aviso Legal y Política de Privacidad (RGPD)
        </button>
      </div>
    </div>
  </footer>

  <!-- MODAL LEGAL RGPD -->
  <div id="legal-modal" onclick="if(event.target===this)this.style.display='none'" style="display:none; position:fixed; inset:0; z-index:95; background:rgba(10,19,34,0.82); backdrop-filter:blur(6px); align-items:center; justify-content:center; padding:16px;">
    <div style="background:var(--placa); color:var(--tinta); border:1px solid var(--oro); max-width:560px; width:100%; padding:24px; max-height:82vh; overflow-y:auto; font-size:13.5px; line-height:1.6;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <strong style="font-family:var(--serif); font-size:20px; font-weight:400;">Aviso Legal y Privacidad (LSSI-CE / RGPD)</strong>
        <button type="button" onclick="document.getElementById('legal-modal').style.display='none'" style="background:var(--hondo); color:var(--tinta); border:1px solid var(--filete); width:32px; height:32px; cursor:pointer;">✕</button>
      </div>
      <p style="margin-bottom:8px;"><strong>Titular:</strong> ${escapeHtml(legalHolderName)}${escapeHtml(legalNifText)}</p>
      <p style="margin-bottom:8px;"><strong>Domicilio / Ubicación:</strong> ${escapeHtml(st.address)}, ${escapeHtml(st.city)} · Teléfono: ${escapeHtml(st.phone || st.whatsapp)}</p>
      <p style="margin-bottom:8px;"><strong>Protección de Datos (RGPD):</strong> Los datos enviados voluntariamente por WhatsApp o teléfono se destinan exclusivamente a gestionar su cita, reserva, encargo o presupuesto solicitado, sin cesión a terceros.</p>
      <p style="color:var(--tinta-2); font-size:12px;">Este sitio web no instala cookies publicitarias ni rastreadores de terceros.</p>
    </div>
  </div>

  <!-- BARRA INFERIOR FIJA EN MÓVIL -->
  ${st.modules.whatsappFloat !== false ? `
  <nav class="barra" aria-label="Contacto rápido móvil">
    <button type="button" class="b-wa" onclick="jumpSec('accion')">WhatsApp</button>
    <a class="b-tel" href="${telHref}">Llamar</a>
  </nav>` : ''}

  <script>
    let chosenSlot = '11:30';
    let urgentMode = 'urgencia';

    (function initDefaultSlot() {
      const act = document.querySelector('.slot-btn.active');
      if (act) chosenSlot = act.textContent.trim();
    })();

    // Menú cortina móvil
    const cortina = document.getElementById('cortina');
    const btnAbrir = document.getElementById('btn-abrir-cortina');
    const btnCerrar = document.getElementById('btn-cerrar-cortina');
    function cerrarCortina() {
      if (cortina) cortina.classList.remove('abierta');
      if (btnAbrir) btnAbrir.setAttribute('aria-expanded', 'false');
    }
    if (btnAbrir && cortina) {
      btnAbrir.addEventListener('click', () => {
        cortina.classList.add('abierta');
        btnAbrir.setAttribute('aria-expanded', 'true');
      });
    }
    if (btnCerrar) btnCerrar.addEventListener('click', cerrarCortina);

    // =========================================================================
    // MOTOR DE ENTRADA CINEMÁTICA (#intro) + AUTO-ZOOM EN VISTA PREVIA
    // =========================================================================
    (function initPrestigeIntro() {
      const intro = document.getElementById('intro');
      const velo = document.getElementById('velo-svg');
      const rim = document.getElementById('escudo-rim');
      const escudo = document.getElementById('escudo');
      const escudoBorde = document.getElementById('escudo-borde');
      const sombra = document.getElementById('intro-sombra');
      const firma = document.getElementById('intro-firma');
      const titular = document.getElementById('intro-titular');
      const fondoCam = document.getElementById('fondo-cam');
      const topBar = document.getElementById('top');
      if (!intro || !velo || !escudo) return;

      const isEmbedded = (function() { try { return window.self !== window.top; } catch (e) { return true; } })();
      const clamp01 = (v, a, b) => Math.min(1, Math.max(0, (v - a) / (b - a)));
      const easeInOutCubic = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

      // Punto focal central de la ventana del escudo en el viewBox 1000x1000
      const pivotX = 500;
      const pivotY = 390;
      const maxZoom = 46;

      function applyIntroProgress(v, isScrolledPast) {
        // Zoom exponencial del escudo alrededor de (500, 390)
        const zoomProgress = easeInOutCubic(clamp01(v, 0, 0.62));
        const scale = Math.pow(maxZoom, zoomProgress);
        const tx = (pivotX - pivotX * scale).toFixed(2);
        const ty = (pivotY - pivotY * scale).toFixed(2);
        const tf = 'translate(' + tx + ' ' + ty + ') scale(' + scale.toFixed(4) + ')';
        escudo.setAttribute('transform', tf);
        if (escudoBorde) escudoBorde.setAttribute('transform', tf);

        const veloOpacity = String((1 - clamp01(v, 0.50, 0.62)).toFixed(3));
        velo.style.opacity = veloOpacity;
        if (rim) rim.style.opacity = String((1 - clamp01(v, 0.25, 0.48)).toFixed(3));
        if (firma) firma.style.opacity = String((1 - clamp01(v, 0, 0.12)).toFixed(3));

        // Push físico de cámara al hacer zoom
        if (fondoCam) {
          const camPush = 1 + v * 0.10;
          fondoCam.style.transform = 'scale(' + camPush.toFixed(4) + ')';
        }

        // Aparición del titular editorial Serif y botones dorados
        const rev = clamp01(v, 0.56, 0.84);
        if (sombra) sombra.style.opacity = String(rev.toFixed(3));
        if (titular) {
          titular.style.opacity = String(rev.toFixed(3));
          titular.style.transform = 'translateY(' + (24 * (1 - rev)).toFixed(1) + 'px)';
          titular.style.pointerEvents = rev > 0.45 ? 'auto' : 'none';
        }
        if (topBar) {
          topBar.classList.toggle('solida', Boolean(isScrolledPast) || v > 0.55);
        }
      }

      let manualScrollActive = false;
      let autoZoomStart = performance.now();

      function updateIntroOnScroll() {
        const rect = intro.getBoundingClientRect();
        const scrollable = Math.max(1, intro.offsetHeight - window.innerHeight);
        const v = Math.min(1, Math.max(0, -rect.top / scrollable));
        if (window.scrollY > 12) manualScrollActive = true;
        else if (isEmbedded && window.scrollY <= 4) manualScrollActive = false;
        applyIntroProgress(v, rect.bottom < window.innerHeight * 1.04);
      }

      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            ticking = false;
            updateIntroOnScroll();
          });
        }
      }, { passive: true });
      window.addEventListener('resize', updateIntroOnScroll);

      const pinEl = intro.querySelector('.pin');
      if (pinEl) {
        pinEl.addEventListener('click', (ev) => {
          if (ev.target && ev.target.closest('button, a')) return;
          const rect = intro.getBoundingClientRect();
          const scrollable = Math.max(1, intro.offsetHeight - window.innerHeight);
          const v = Math.min(1, Math.max(0, -rect.top / scrollable));
          if (v < 0.35) abrirPortadaSuave();
        });
      }

      // Si está dentro del cuadro de vista previa de miweblocal.com (isEmbedded),
      // hace el zoom del escudo automáticamente ("él tiene el zoom") sin obligar a hacer scroll interno:
      if (isEmbedded) {
        const cycleDuration = 7600; // 7.6s por ciclo completo
        function runEmbeddedZoomLoop(now) {
          if (!manualScrollActive && window.scrollY <= 8) {
            const elapsed = (now - autoZoomStart) % cycleDuration;
            let vAuto = 0;
            if (elapsed < 1200) {
              // 0.0s - 1.2s: Muestra el Escudo Calado con la cámara moviéndose detrás
              vAuto = 0;
            } else if (elapsed < 3000) {
              // 1.2s - 3.0s: Hace el Zoom 1x -> 46x atravesando el escudo hacia la portada
              vAuto = (elapsed - 1200) / 1800;
            } else if (elapsed < 6400) {
              // 3.0s - 6.4s: Mantiene la portada abierta con el titular Serif y botones
              vAuto = 1;
            } else {
              // 6.4s - 7.6s: Regresa suavemente al escudo para repetir la demostración
              vAuto = 1 - (elapsed - 6400) / 1200;
            }
            applyIntroProgress(vAuto, false);
          }
          requestAnimationFrame(runEmbeddedZoomLoop);
        }
        requestAnimationFrame(runEmbeddedZoomLoop);
      } else {
        updateIntroOnScroll();
      }

      // Escuchar comandos desde los botones de vista previa de index.html (sin conflicto de scroll en móvil)
      window.addEventListener('message', (ev) => {
        if (!ev || !ev.data || ev.data.type !== 'MIWEB_PREVIEW_NAV') return;
        const target = ev.data.target;
        if (target === 'intro') {
          manualScrollActive = false;
          autoZoomStart = performance.now() - 1050; // Arranca el zoom al instante
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        manualScrollActive = true;
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (target === 'resultados') {
            const range = document.getElementById('ad-range');
            if (range) {
              let t0 = performance.now();
              function demoSlider(now) {
                const p = (now - t0) / 1800;
                if (p <= 1) {
                  const wave = 500 + Math.sin(p * Math.PI * 2) * 340;
                  range.value = String(Math.round(wave));
                  range.dispatchEvent(new Event('input'));
                  requestAnimationFrame(demoSlider);
                }
              }
              setTimeout(() => requestAnimationFrame(demoSlider), 450);
            }
          }
        }
      });
    })();

    function abrirPortadaSuave() {
      const intro = document.getElementById('intro');
      if (!intro) return;
      const targetY = Math.max(0, (intro.offsetHeight - window.innerHeight) * 0.78);
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }

    // =========================================================================
    // DESLIZADOR INTERACTIVO ANTES / DESPUÉS (#ad)
    // =========================================================================
    (function initBeforeAfter() {
      const ad = document.getElementById('ad');
      const range = document.getElementById('ad-range');
      const et = ad ? ad.querySelector('[data-et]') : null;
      if (!ad || !range) return;
      function syncAd() {
        const val = Number(range.value) / 1000;
        const pct = (val * 100).toFixed(1) + '%';
        ad.style.setProperty('--x', pct);
        const salio = val > 0.68;
        ad.classList.toggle('salio', salio);
        if (et) {
          et.textContent = salio ? 'Salió así' : (val > 0.40 ? 'Trabajando…' : 'Entró así');
        }
      }
      range.addEventListener('input', syncAd);
      syncAd();
    })();

    // =========================================================================
    // DESGLOSE INTERACTIVO POR CAPAS (#capas)
    // =========================================================================
    (function initCapas() {
      const sec = document.querySelector('[data-capas]');
      if (!sec) return;
      const detailsList = Array.from(sec.querySelectorAll('details.capa'));
      const marcaWrap = document.getElementById('capas-marca');
      const marcaTxt = sec.querySelector('[data-marca]');
      detailsList.forEach(det => {
        det.addEventListener('toggle', () => {
          if (det.open) {
            detailsList.forEach(other => { if (other !== det) other.open = false; });
            if (marcaTxt) marcaTxt.textContent = det.getAttribute('data-capa') || 'DETALLE';
            const pos = det.getAttribute('data-pos') || '';
            if (marcaWrap && pos) {
              pos.split(';').forEach(pair => {
                const [k, v] = pair.split(':');
                if (k && v) marcaWrap.style[k.trim()] = v.trim();
              });
            }
          }
        });
      });
    })();

    function jumpSec(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    function pickSlot(btn, slot) {
      chosenSlot = slot;
      const box = btn.parentElement;
      if (box) box.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }

    function pickDimChip(btn, val) {
      pickSlot(btn, val);
      const inp = document.getElementById('bk-dims');
      if (inp) inp.value = val;
    }

    function switchUrgentTab(mode) {
      urgentMode = mode;
      document.querySelectorAll('.mode-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-umode') === mode);
      });
      const pUrg = document.getElementById('urg-pane-urgencia');
      const pCop = document.getElementById('urg-pane-copia');
      const btnTxt = document.getElementById('bk-urg-btn-txt');
      if (pUrg) pUrg.style.display = mode === 'urgencia' ? 'block' : 'none';
      if (pCop) pCop.style.display = mode === 'copia' ? 'block' : 'none';
      if (btnTxt) {
        btnTxt.textContent = mode === 'urgencia'
          ? 'Enviar aviso urgente por WhatsApp'
          : 'Consultar precio exacto por WhatsApp';
      }
    }

    function updateRepairEstimate(sel) {
      const box = document.getElementById('bk-live-estimate');
      if (box && sel) {
        box.innerHTML = '💡 Tarifa seleccionada: <strong>' + sel.value.replace(/</g, '&lt;') + '</strong> · Te avisamos al WhatsApp en cuanto esté terminado.';
      }
    }

    function selectServiceForBooking(title) {
      const sel = document.getElementById('bk-service') || document.getElementById('bk-quo-type');
      if (sel) {
        if (sel.id === 'bk-quo-type') switchUrgentTab('copia');
        for (let i = 0; i < sel.options.length; i++) {
          if (sel.options[i].value.includes(title)) { sel.selectedIndex = i; break; }
        }
        if (sel.id === 'bk-service') updateRepairEstimate(sel);
      }
      jumpSec('accion');
    }

    function sendSectorWhatsApp(kind) {
      const biz = ${JSON.stringify(st.name)};
      const srv = document.getElementById('bk-service')?.value || '';
      const cli = document.getElementById('bk-client')?.value || '';
      const lines = ['Hola ' + biz + ', os escribo desde vuestra web:'];

      if (kind === 'medidas_presupuesto') {
        const dims = document.getElementById('bk-dims')?.value || chosenSlot;
        const mat = document.getElementById('bk-material')?.value || '';
        if (srv) lines.push('• Trabajo: ' + srv);
        if (dims) lines.push('• Medidas aprox.: ' + dims);
        if (mat) lines.push('• Acabado / Material: ' + mat);
        if (cli) lines.push('• Cliente y zona: ' + cli);
      } else if (kind === 'urgencia_o_llaves') {
        if (urgentMode === 'urgencia') {
          const ut = document.getElementById('bk-urg-type')?.value || '';
          const stName = document.getElementById('bk-urg-street')?.value || '';
          lines.push('• MODO: 🚨 URGENCIA AHORA');
          if (ut) lines.push('• Avería: ' + ut);
          if (stName) lines.push('• Ubicación exacta: ' + stName);
        } else {
          const qt = document.getElementById('bk-quo-type')?.value || '';
          const md = document.getElementById('bk-quo-model')?.value || '';
          lines.push('• MODO: 🔑 CONSULTA / COPIA / PRESUPUESTO');
          if (qt) lines.push('• Solicitud: ' + qt);
          if (md) lines.push('• Marca / Modelo exacto: ' + md);
        }
        if (cli) lines.push('• Contacto: ' + cli);
      } else if (kind === 'motor_diagnostico') {
        const plate = document.getElementById('bk-plate')?.value || '';
        const sym = document.getElementById('bk-symptom')?.value || '';
        if (srv) lines.push('• Servicio: ' + srv);
        if (plate) lines.push('• Vehículo / Matrícula: ' + plate);
        if (sym) lines.push('• Síntoma / Detalle: ' + sym);
        if (chosenSlot) lines.push('• Preferencia: ' + chosenSlot);
        if (cli) lines.push('• Cliente: ' + cli);
      } else if (kind === 'recepcion_taller_local') {
        const dev = document.getElementById('bk-device')?.value || '';
        if (dev) lines.push('• Artículo / Modelo: ' + dev);
        if (srv) lines.push('• Arreglo: ' + srv);
        if (chosenSlot) lines.push('• Entrega en local: ' + chosenSlot);
        if (cli) lines.push('• Cliente (avisar al terminar): ' + cli);
      } else if (kind === 'encargo_sin_cola') {
        const qty = document.getElementById('bk-qty')?.value || '';
        if (srv) lines.push('• Encargo: ' + srv);
        if (qty) lines.push('• Unidades / Detalle: ' + qty);
        if (chosenSlot) lines.push('• Hora recogida sin cola: ' + chosenSlot);
        if (cli) lines.push('• A nombre de: ' + cli);
      } else if (kind === 'mesa_carta') {
        const zone = document.getElementById('bk-zone')?.value || '';
        if (zone) lines.push('• Mesa / Zona: ' + zone);
        if (srv) lines.push('• Preferencia carta: ' + srv);
        if (chosenSlot) lines.push('• Turno: ' + chosenSlot);
        if (cli) lines.push('• A nombre de: ' + cli);
      } else if (kind === 'filtro_clientes') {
        const qual = document.getElementById('bk-qualify')?.value || '';
        const det = document.getElementById('bk-detail')?.value || '';
        if (srv) lines.push('• Servicio: ' + srv);
        if (qual) lines.push('• Perfil / Situación: ' + qual);
        if (det) lines.push('• Fecha / Detalle: ' + det);
        if (cli) lines.push('• Contacto: ' + cli);
      } else {
        const ext = document.getElementById('bk-extra')?.value || '';
        if (srv) lines.push('• Servicio: ' + srv);
        if (ext) lines.push('• Día: ' + ext);
        if (chosenSlot) lines.push('• Hora aprox.: ' + chosenSlot);
        if (cli) lines.push('• Nombre: ' + cli);
      }

      const msg = lines.join('\\n');
      const ok = document.getElementById('bk-ok');
      if (ok) {
        ok.style.display = 'block';
        ok.innerHTML = '✓ Solicitud preparada para <strong>' + biz.replace(/</g, '&lt;') + '</strong>. <a href="https://wa.me/${fullWa}?text=' + encodeURIComponent(msg) + '" target="_blank" rel="noopener" style="text-decoration:underline; font-weight:800; margin-left:6px; color:var(--oro);">Enviar ahora por WhatsApp ↗</a>';
      }
      try {
        window.open('https://wa.me/${fullWa}?text=' + encodeURIComponent(msg), '_blank', 'noopener');
      } catch (e) {}
    }
  <\/script>
</body>
</html>`;
}

if (typeof window !== 'undefined') {
  window.STORAGE_KEY = STORAGE_KEY;
  window.DESIGN_THEMES = DESIGN_THEMES;
  window.SECTOR_PRESETS = SECTOR_PRESETS;
  window.slugifyName = slugifyName;
  window.encodeSharePayload = encodeSharePayload;
  window.decodeSharePayload = decodeSharePayload;
  window.compileClientWebsiteHTML = compileClientWebsiteHTML;
}
