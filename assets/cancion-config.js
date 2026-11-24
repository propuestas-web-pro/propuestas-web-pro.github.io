/* ==========================================================================
   TUCANCIÓNQR · CONFIGURACIÓN DE STRIPE, MONEDAS (ES/MX/AR) Y WORKER IA
   --------------------------------------------------------------------------
   - Configura aquí tus enlaces de Stripe Payment Links para 12,90 € y 19,90 €
     (y sus equivalentes en USD si cobras por separado en México/Argentina).
   - Para generación 100 % automática de la canción real al vuelo con Lyria 3.5,
     despliega worker/lyria-song-worker.js en Cloudflare Workers y pega su URL
     en songWorkerUrl.
   ========================================================================== */

const CANCION_CONFIG = {
  brandName: 'TuCanciónQR',
  domainDisplay: 'miweblocal.com',
  whatsapp: '34632768152',
  supportEmail: 'hola@miweblocal.com',

  // Enlaces de Stripe Payment Links (rellena con tus Payment Links de 12,90 € y 19,90 €)
  // Mientras estén vacíos, el botón activa el pedido express por WhatsApp + enlace demo inmediato
  // para nunca redirigir por error a un importe distinto al mostrado.
  stripeLinks: {
    EUR: {
      single: '',    // Payment Link 12,90 € (Canción + Mini-Web + QR)
      pack3: '',     // Payment Link 19,90 € (Pack 3 estilos + Vídeo 9:16 + Web + QR)
      pack3Photo: '' // Payment Link 27,80 € (Pack 3 + Foto Antigua Animada)
    },
    USD: {
      single: '',    // Payment Link $12.90 USD (México / Argentina / Latam)
      pack3: '',     // Payment Link $19.90 USD
      pack3Photo: '' // Payment Link $27.80 USD
    }
  },

  // URL de Cloudflare Worker (ver worker/lyria-song-worker.js) para generar canciones Lyria 3.5 en vivo
  songWorkerUrl: '',

  currencies: {
    EUR: {
      code: 'EUR',
      label: 'España (€)',
      symbol: '€',
      single: '12,90 €',
      pack3: '19,90 €',
      upsellPhoto: '+7,90 €',
      singleNum: 12.9,
      pack3Num: 19.9,
      upsellNum: 7.9,
      anchorNote: 'Menos que un ramo de flores o una cena rápida'
    },
    USD: {
      code: 'USD',
      label: 'México / Argentina ($)',
      symbol: '$',
      single: '$12.90 USD',
      pack3: '$19.90 USD',
      upsellPhoto: '+$7.90 USD',
      singleNum: 12.9,
      pack3Num: 19.9,
      upsellNum: 7.9,
      anchorNote: 'Pago único con tarjeta, Apple Pay o Google Pay'
    }
  }
};

function cancionFormatPrice(num, currencyCode) {
  const code = currencyCode === 'USD' ? 'USD' : 'EUR';
  const fixed = Number(num || 0).toFixed(2);
  if (code === 'USD') return '$' + fixed + ' USD';
  return fixed.replace('.', ',') + ' €';
}

function cancionEncodePayload(obj) {
  try {
    const json = JSON.stringify(obj);
    const bytes = new TextEncoder().encode(json);
    let bin = '';
    bytes.forEach((b) => { bin += String.fromCharCode(b); });
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  } catch (e) {
    return '';
  }
}

function cancionDecodePayload(token) {
  if (!token) return null;
  try {
    let b64 = String(token).replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const json = new TextDecoder().decode(bytes);
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

function cancionBuildShareUrl(order, isPreview) {
  const compact = {
    r: String(order.recipient || 'Mamá Carmen').slice(0, 48),
    s: String(order.sender || 'Tu familia').slice(0, 40),
    o: String(order.occasion || 'cumpleanos'),
    g: String(order.genre || 'pop_acustico'),
    m: String(order.memory || '').slice(0, 140),
    t: String(order.title || '').slice(0, 64),
    a: String(order.audioId || 'mama'),
    p: order.plan || 'pack3'
  };
  const encoded = cancionEncodePayload(compact);
  const origin = (window.location && window.location.origin && window.location.origin !== 'null')
    ? window.location.origin
    : 'https://' + CANCION_CONFIG.domainDisplay;
  const pathPrefix = window.location.pathname.includes('/cancion/') || window.location.pathname.includes('/gracias/')
    ? '../cancion/'
    : 'cancion/';
  const rel = `${pathPrefix}?d=${encoded}${isPreview ? '&preview=1' : ''}`;
  const abs = `${origin}/cancion/?d=${encoded}${isPreview ? '&preview=1' : ''}`;
  return { rel, abs, token: encoded };
}

function cancionSavePendingOrder(order) {
  const ref = 'TCQ-' + Date.now().toString(36).toUpperCase().slice(-6);
  const full = Object.assign({}, order, { ref, createdAt: Date.now() });
  try {
    localStorage.setItem('tucancionqr_pending_order', JSON.stringify(full));
  } catch (e) {}
  return full;
}

function cancionLoadPendingOrder() {
  try {
    return JSON.parse(localStorage.getItem('tucancionqr_pending_order') || 'null');
  } catch (e) {
    return null;
  }
}

function cancionStartCheckout(order) {
  const saved = cancionSavePendingOrder(order);
  const cur = order.currency === 'USD' ? 'USD' : 'EUR';
  const links = CANCION_CONFIG.stripeLinks[cur] || CANCION_CONFIG.stripeLinks.EUR;
  let link = '';
  if (order.plan === 'single') {
    link = links.single;
  } else {
    link = order.upsellPhoto ? (links.pack3Photo || links.pack3) : links.pack3;
  }

  if (link && /^https:\/\/(buy\.stripe\.com|checkout\.stripe\.com)\//.test(link)) {
    const params = new URLSearchParams();
    params.set('client_reference_id', saved.ref);
    params.set('locale', 'es');
    window.location.href = link + (link.includes('?') ? '&' : '?') + params.toString();
    return { mode: 'stripe', ref: saved.ref };
  }

  // Fallback limpio cuando aún no se han pegado los Payment Links nuevos:
  // lleva a la página de entrega/activación inmediata con todos los datos listos.
  const share = cancionBuildShareUrl(saved, false);
  const thanksPath = window.location.pathname.includes('/cancion/')
    ? '../gracias/'
    : 'gracias/';
  window.location.href = `${thanksPath}?ref=${encodeURIComponent(saved.ref)}&plan=${encodeURIComponent(saved.plan)}&cur=${encodeURIComponent(cur)}&d=${encodeURIComponent(share.token)}`;
  return { mode: 'instant_activation', ref: saved.ref };
}
