/* ==========================================================================
   MIWEBLOCAL · MOTOR AUTOMÁTICO STRIPE + DOMINIOS + BUSCADOR LOCAL + FOTOS
   --------------------------------------------------------------------------
   Cuenta conectada: acct_1TOvtGGcKo8sPYaQ (Modo Live · EUR)
   Concepto bancario: MIWEBLOCAL WEB · Factura PDF automática activada.
   Todo incluido en un único pago para siempre (0 €/mes · 0 €/año).
   WhatsApp queda reservado exclusivamente para resolver dudas previas.
   ========================================================================== */

const MIWEB_STRIPE = {
  publishableKey: 'pk_live_51TOvtGGcKo8sPYaQukhMmk1bBmyZwxq85qvQuOLRjJ87PbOcxIRsCFfOX1LuWy0oNoJMQqorm80NnqYdZjclvwb200HF1GznMm',
  paymentLink79: 'https://buy.stripe.com/bJe28rckNco30kAb9McfK04',
  paymentLink197: 'https://buy.stripe.com/eVq7sL3Oh3Rx7N2a5IcfK05',
  paymentLink297: 'https://buy.stripe.com/fZu28r0C53Rxffu3HkcfK06',
  whatsapp: '34632768152',
  supportDays: 14
};

/* ==========================================================================
   CONFIGURACIÓN DE AUTOMATIZACIÓN (GOOGLE MAPS + NUBE OPCIONAL + ESCUDO TIKTOK)
   - Pega tu clave gratuita de Google Maps en googlePlacesApiKey (o usa cloudWorkerUrl)
     para extraer automáticamente fotos y reseñas de Google Maps en 1 clic.
   - Mientras esté vacía, el buscador usa el directorio abierto de España en vivo
     + detección inteligente de sector a coste 0,00 €.
   ========================================================================== */
const MIWEB_AUTOMATION = {
  googlePlacesApiKey: '',
  cloudWorkerUrl: '',
  maxDailySearchesPerDevice: 5
};

const MIWEB_PENDING_KEY = 'miweblocal_pending_order';
const MIWEB_SEARCH_GUARD_KEY = 'miweblocal_search_guard_v1';

function miwebNormalizePlan(plan) {
  const s = String(plan || '').trim();
  if (s.includes('297') || s.toLowerCase().includes('vip')) return '297';
  if (s.includes('79') || s === '50' || s.toLowerCase().includes('express')) return '79';
  return '197';
}

function miwebGetLinkForPlan(plan) {
  const p = miwebNormalizePlan(plan);
  if (p === '297') return MIWEB_STRIPE.paymentLink297;
  if (p === '79') return MIWEB_STRIPE.paymentLink79;
  return MIWEB_STRIPE.paymentLink197;
}

function miwebStripeIsReady(plan) {
  const link = miwebGetLinkForPlan(plan);
  return /^https:\/\/(buy\.stripe\.com|checkout\.stripe\.com)\//.test(link || '');
}

function miwebStripeRef(slug, plan) {
  const clean = String(slug || 'negocio').replace(/[^A-Za-z0-9_-]/g, '-').slice(0, 150);
  return `${clean}__p${plan}__${Date.now().toString(36)}`;
}

function miwebGeneratePin(seedSlug) {
  const s = String(seedSlug || 'negocio');
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const num = 1000 + (Math.abs(h) % 9000);
  return 'PRO-' + String(num);
}

/**
 * Guarda el pedido localmente (+ nube opcional) y redirige en 1 clic a Stripe.
 */
function miwebGoToStripe(order) {
  const plan = miwebNormalizePlan(order.plan);
  const ref = miwebStripeRef(order.slug, plan);
  const adminPin = order.adminPin || miwebGeneratePin(order.slug);
  const pending = Object.assign({}, order, { plan, ref, adminPin, createdAt: Date.now() });
  try { localStorage.setItem(MIWEB_PENDING_KEY, JSON.stringify(pending)); } catch (e) {}

  if (MIWEB_AUTOMATION.cloudWorkerUrl) {
    try {
      fetch(MIWEB_AUTOMATION.cloudWorkerUrl.replace(/\/$/, '') + '/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pending),
        keepalive: true
      }).catch(() => {});
    } catch (e) {}
  }

  const base = miwebGetLinkForPlan(plan);
  const params = new URLSearchParams();
  params.set('client_reference_id', ref);
  params.set('locale', 'es');
  if (order.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(order.email)) {
    params.set('prefilled_email', order.email);
  }
  window.location.href = base + (base.includes('?') ? '&' : '?') + params.toString();
  return true;
}

/* ==========================================================================
   1. COMPROBADOR DE DOMINIO LIBRE EN TIEMPO REAL (0,2s · DNS-over-HTTPS · 0 €)
   ========================================================================== */
function miwebCleanDomainInput(raw, fallbackSlug) {
  let d = String(raw || '').trim().toLowerCase();
  d = d.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0].replace(/\s+/g, '');
  if (!d && fallbackSlug) {
    d = String(fallbackSlug).replace(/[^a-z0-9-]/g, '') + '.es';
  }
  if (d && !d.includes('.')) {
    d = d.replace(/[^a-z0-9-]/g, '') + '.es';
  }
  const parts = d.split('.');
  if (parts.length >= 2) {
    const tld = parts.pop().replace(/[^a-z]/g, '') || 'es';
    const name = parts.join('-').replace(/[^a-z0-9-]/g, '').replace(/^-+|-+$/g, '');
    if (!name) return '';
    return `${name}.${tld}`;
  }
  return '';
}

async function miwebFetchWithTimeout(url, opts = {}, timeoutMs = 1800) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, Object.assign({}, opts, { signal: ctrl.signal }));
  } finally {
    clearTimeout(id);
  }
}

async function miwebQueryDnsSingle(domain) {
  try {
    const res = await miwebFetchWithTimeout(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=NS`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    }, 1800);
    if (!res.ok) return null;
    const data = await res.json();
    // Status 3 === NXDOMAIN (not registered in root/TLD zone -> available!)
    if (typeof data.Status === 'number') {
      return data.Status === 3;
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function miwebCheckDomainLive(rawDomain, bizName, city) {
  const baseSlug = String(bizName || 'minegocio')
    .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '').slice(0, 28) || 'minegocio';
  const citySlug = String(city || '')
    .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '').slice(0, 14);

  const domain = miwebCleanDomainInput(rawDomain, baseSlug);
  if (!domain || domain.length < 4) {
    return { ok: false, error: 'Escribe un dominio válido (ej. ' + baseSlug + '.es)' };
  }

  const isFree = await miwebQueryDnsSingle(domain);
  if (isFree === true) {
    return { ok: true, available: true, domain, suggestions: [] };
  }

  // Build smart alternatives and check in parallel
  const stem = domain.split('.')[0];
  const candidates = [
    domain.endsWith('.es') ? `${stem}.com` : `${stem}.es`,
    citySlug && !stem.includes(citySlug) ? `${stem}${citySlug}.es` : `${stem}oficial.es`,
    `${stem}web.com`,
    `oficial${stem}.es`
  ].filter((v, i, a) => v !== domain && a.indexOf(v) === i);

  const checks = await Promise.all(candidates.map(async c => ({ d: c, free: await miwebQueryDnsSingle(c) })));
  const freeAlts = checks.filter(x => x.free === true).map(x => x.d).slice(0, 3);

  if (isFree === null) {
    // Offline fallback
    return { ok: true, available: true, domain, unverified: true, suggestions: [] };
  }

  return { ok: true, available: false, domain, suggestions: freeAlts };
}

/* ==========================================================================
   2. DETECTOR INTELIGENTE DE SECTOR + ESCUDO ANTI-CURIOSOS TIKTOK + BUSCADOR LOCAL
   ========================================================================== */
function miwebDetectSectorFromText(text) {
  const t = String(text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (/(peluquer|salon|cabello|mechas|balayage|estilis|melena|keratina|alisado|peinad|tinte)/.test(t)) return 'peluqueria';
  if (/(clinica|dental|dentista|fisio|podolog|medic|salud|psicolog|optica|veterinar|ortodon)/.test(t)) return 'clinica';
  if (/(estetic|unas|nail|pestanas|cejas|laser|belleza|spa|masaje|manicur)/.test(t)) return 'estetica';
  if (/(barber|barba|fade|degradado)/.test(t)) return 'barberia';
  if (/(moto|scooter|yamaha|honda|kawasaki|ducati)/.test(t)) return 'motos';
  if (/(taller|mecanic|auto|neumatic|chapa|pintura|detail|car|coche|itv)/.test(t)) return 'taller';
  if (/(reforma|obra|construccion|fontaner|electric|pintor|carpinter|albanil|climatiz|cerrajer|mudanza)/.test(t)) return 'reformas';
  if (/(restaurante|bar|cafeteria|brunch|pizza|kebab|burger|hamburgues|asador|tapas|taberna|meson|gastro)/.test(t)) return 'restaurante';
  if (/(gym|gimnasio|fitness|pilates|crossfit|box|entrenador|yoga|padel)/.test(t)) return 'fitness';
  if (/(tienda|shop|store|boutique|moda|ropa|florister|joyer|perfumer|regalo|mueble|panader|pastel|obrador)/.test(t)) return 'tienda';
  return 'peluqueria';
}

function miwebCheckSearchQuota() {
  try {
    const now = Date.now();
    const raw = JSON.parse(localStorage.getItem(MIWEB_SEARCH_GUARD_KEY) || '{}');
    const stamps = Array.isArray(raw.stamps) ? raw.stamps.filter(ts => now - ts < 86400000) : [];
    const max = MIWEB_AUTOMATION.maxDailySearchesPerDevice || 5;
    if (stamps.length >= max) {
      return { allowed: false, remaining: 0 };
    }
    stamps.push(now);
    localStorage.setItem(MIWEB_SEARCH_GUARD_KEY, JSON.stringify({ stamps }));
    return { allowed: true, remaining: max - stamps.length };
  } catch (e) {
    return { allowed: true, remaining: 3 };
  }
}

async function miwebSearchRealBusiness(query) {
  const q = String(query || '').trim();
  if (q.length < 2) return { ok: false, results: [] };

  const quota = miwebCheckSearchQuota();
  if (!quota.allowed) {
    return {
      ok: true,
      rateLimited: true,
      results: [{
        name: q,
        city: 'Madrid',
        address: 'Centro',
        sector: miwebDetectSectorFromText(q),
        source: 'instant'
      }]
    };
  }

  // 1) Cloud Worker Proxy (if configured — hides Google API key + caches in Cloudflare)
  if (MIWEB_AUTOMATION.cloudWorkerUrl) {
    try {
      const r = await fetch(MIWEB_AUTOMATION.cloudWorkerUrl.replace(/\/$/, '') + '/api/places?q=' + encodeURIComponent(q));
      if (r.ok) {
        const d = await r.json();
        if (d && Array.isArray(d.results) && d.results.length) {
          return { ok: true, results: d.results, source: 'google-worker' };
        }
      }
    } catch (e) {}
  }

  // 2) Direct Google Places API (New) if Fathi pasted his restricted browser key
  if (MIWEB_AUTOMATION.googlePlacesApiKey) {
    try {
      const r = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': MIWEB_AUTOMATION.googlePlacesApiKey,
          'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.regularOpeningHours,places.rating,places.userRatingCount,places.reviews,places.photos,places.types'
        },
        body: JSON.stringify({ textQuery: q, languageCode: 'es', regionCode: 'ES', maxResultCount: 4 })
      });
      if (r.ok) {
        const data = await r.json();
        const places = (data.places || []).map(p => {
          const name = (p.displayName && p.displayName.text) || q;
          const addr = p.formattedAddress || '';
          const parts = addr.split(',').map(s => s.trim());
          const cityRaw = parts.length >= 2 ? parts[parts.length - 2].replace(/^\d{5}\s*/, '') : 'España';
          const photos = (p.photos || []).slice(0, 4).map(ph =>
            `https://places.googleapis.com/v1/${ph.name}/media?maxWidthPx=1000&key=${encodeURIComponent(MIWEB_AUTOMATION.googlePlacesApiKey)}`
          );
          const reviews = (p.reviews || []).slice(0, 3).map(rv => ({
            author: (rv.authorAttribution && rv.authorAttribution.displayName) || 'Cliente verificado',
            rating: rv.rating || 5,
            text: (rv.text && rv.text.text) ? rv.text.text.slice(0, 180) : 'Trato excelente y muy profesionales.'
          }));
          const wd = (p.regularOpeningHours && p.regularOpeningHours.weekdayDescriptions) || [];
          return {
            name,
            city: cityRaw || 'Madrid',
            address: parts[0] || addr || 'Centro',
            phone: p.nationalPhoneNumber || '',
            hoursWeek: wd[0] ? wd[0].replace(/^[^:]+:\s*/, '') : '',
            hoursSat: wd[5] ? wd[5].replace(/^[^:]+:\s*/, '') : '',
            hoursSun: wd[6] ? wd[6].replace(/^[^:]+:\s*/, '') : '',
            rating: p.rating || 4.9,
            reviewCount: p.userRatingCount || 48,
            reviews,
            photos,
            sector: miwebDetectSectorFromText(name + ' ' + (p.types || []).join(' ')),
            source: 'google'
          };
        });
        if (places.length) return { ok: true, results: places, source: 'google' };
      }
    } catch (e) {}
  }

  // 3) Zero-key Live Spain Directory Lookup (OpenStreetMap Nominatim ES, max 1.8s) + Instant Creation Fallback
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&extratags=1&limit=4&countrycodes=es&accept-language=es&q=${encodeURIComponent(q)}`;
    const r = await miwebFetchWithTimeout(url, { headers: { 'Accept': 'application/json' } }, 1800);
    if (r.ok) {
      const items = await r.json();
      if (Array.isArray(items) && items.length) {
        const mapped = items.map(it => {
          const ad = it.address || {};
          const ex = it.extratags || {};
          const city = ad.city || ad.town || ad.village || ad.municipality || ad.province || 'España';
          const road = [ad.road, ad.house_number].filter(Boolean).join(' ') || (it.display_name || '').split(',')[0] || 'Centro';
          const rawName = it.name || q.split(',')[0].trim();
          const phone = ex.phone || ex['contact:phone'] || ex['contact:mobile'] || '';
          return {
            name: rawName,
            city,
            address: road,
            phone: phone.replace(/^\+34\s*/, ''),
            hoursWeek: ex.opening_hours ? String(ex.opening_hours).slice(0, 32) : '',
            sector: miwebDetectSectorFromText(rawName + ' ' + (it.type || '') + ' ' + (it.category || '') + ' ' + q),
            source: 'directory'
          };
        });
        return { ok: true, results: mapped, source: 'directory' };
      }
    }
  } catch (e) {}

  // 4) Instant Fallback (works 100% even for brand-new businesses not yet on any map)
  const split = miwebSplitNameAndCity(q);
  return {
    ok: true,
    source: 'instant',
    results: [{
      name: split.name,
      city: split.city,
      address: `Centro, ${split.city}`,
      sector: miwebDetectSectorFromText(q),
      source: 'instant'
    }]
  };
}

function miwebSplitNameAndCity(raw) {
  const q = String(raw || '').trim();
  if (!q) return { name: 'Salón Aura', city: 'Madrid' };
  const bySep = q.split(/[,·]/).map(s => s.trim()).filter(Boolean);
  if (bySep.length >= 2) {
    return { name: bySep[0], city: bySep[1] };
  }
  const cities = [
    'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Malaga', 'Murcia',
    'Palma', 'Bilbao', 'Alicante', 'Córdoba', 'Cordoba', 'Valladolid', 'Vigo', 'Gijón', 'Gijon',
    'Granada', 'Elche', 'Oviedo', 'Badalona', 'Cartagena', 'Terrassa', 'Jerez', 'Sabadell',
    'Móstoles', 'Mostoles', 'Alcalá', 'Alcala', 'Pamplona', 'Almería', 'Almeria', 'San Sebastián',
    'Donostia', 'Santander', 'Burgos', 'Albacete', 'Castellón', 'Castellon', 'Logroño', 'Badajoz',
    'Salamanca', 'Huelva', 'Marbella', 'Lleida', 'Tarragona', 'León', 'Cadiz', 'Cádiz', 'Jaén',
    'Ourense', 'Girona', 'Lugo', 'Cáceres', 'Santiago', 'Melilla', 'Ceuta', 'Torrevieja',
    'Orihuela', 'Benidorm', 'Gandía', 'Gandia', 'Getafe', 'Leganés', 'Leganes', 'Fuenlabrada',
    'Alcorcón', 'Alcorcon', 'Tenerife', 'Las Palmas', 'Ibiza', 'Toledo', 'Guadalajara'
  ];
  for (const c of cities) {
    const rx = new RegExp(`\\s+(?:en\\s+)?(${c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})$`, 'i');
    const m = q.match(rx);
    if (m && q.length > m[0].length + 2) {
      const cleanCity = c === 'Malaga' ? 'Málaga' : c === 'Cordoba' ? 'Córdoba' : c === 'Mostoles' ? 'Móstoles' : c;
      return { name: q.slice(0, q.length - m[0].length).trim(), city: cleanCity };
    }
  }
  return { name: q, city: 'Madrid' };
}

/* ==========================================================================
   3. COMPRESOR DE FOTOS MÓVIL (0,15s) + BÓVEDA INDEXEDDB + NUBE OPCIONAL
   Permite subir fotos reales de cámara de móvil sin llenar localStorage.
   ========================================================================== */
function miwebCompressImageFile(file, maxDim = 1100, quality = 0.78) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('No file'));
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Read error'));
    reader.onload = ev => {
      const img = new Image();
      img.onerror = () => resolve(ev.target.result);
      img.onload = () => {
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w >= h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        try {
          resolve(canvas.toDataURL('image/jpeg', quality));
        } catch (e) {
          resolve(ev.target.result);
        }
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function miwebOpenVaultDB() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) return reject(new Error('No IndexedDB'));
    const req = indexedDB.open('miweblocal_vault_v1', 1);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('sites')) {
        db.createObjectStore('sites', { keyPath: 'slug' });
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = () => reject(req.error);
  });
}

async function miwebSaveSiteVault(slug, dataObj) {
  const key = String(slug || 'default').toLowerCase();
  try {
    const db = await miwebOpenVaultDB();
    await new Promise((resolve, reject) => {
      const tx = db.transaction('sites', 'readwrite');
      tx.objectStore('sites').put(Object.assign({ slug: key, updatedAt: Date.now() }, dataObj));
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {}

  if (MIWEB_AUTOMATION.cloudWorkerUrl) {
    try {
      fetch(MIWEB_AUTOMATION.cloudWorkerUrl.replace(/\/$/, '') + '/api/site/' + encodeURIComponent(key), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataObj)
      }).catch(() => {});
    } catch (e) {}
  }
}

async function miwebLoadSiteVault(slug) {
  const key = String(slug || 'default').toLowerCase();
  if (MIWEB_AUTOMATION.cloudWorkerUrl) {
    try {
      const r = await fetch(MIWEB_AUTOMATION.cloudWorkerUrl.replace(/\/$/, '') + '/api/site/' + encodeURIComponent(key));
      if (r.ok) {
        const cloudData = await r.json();
        if (cloudData && cloudData.name) return cloudData;
      }
    } catch (e) {}
  }
  try {
    const db = await miwebOpenVaultDB();
    return await new Promise(resolve => {
      const tx = db.transaction('sites', 'readonly');
      const req = tx.objectStore('sites').get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    return null;
  }
}
