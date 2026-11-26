/* ==========================================================================
   TUCANCIÓNQR · CONFIGURACIÓN DE STRIPE, BLOQUEO PRE-PAGO Y MONEDAS (ES/MX/AR)
   --------------------------------------------------------------------------
   REGLA ESTRICTA DE NEGOCIO:
   - Antes de pagar: SOLO adelanto de 15 s + estribillo de muestra. QR, letra
     completa, descarga MP3 e impresión permanecen 100 % bloqueados.
   - Tras pagar en Stripe Live (redirección con {CHECKOUT_SESSION_ID}): se firma
     el enlace permanente de regalo para que el destinatario pueda escanear el QR
     desde cualquier móvil sin bloqueos.
   ========================================================================== */

const CANCION_CONFIG = {
  brandName: 'TuCanciónQR',
  domainDisplay: 'miweblocal.com',
  whatsapp: '34632768152',
  supportEmail: 'hola@miweblocal.com',
  previewSeconds: 15,

  // Cuenta Stripe Live verificada del proyecto (acct_1TOvtGGcKo8sPYaQ · EUR)
  stripePublishableKey: 'pk_live_51TOvtGGcKo8sPYaQukhMmk1bBmyZwxq85qvQuOLRjJ87PbOcxIRsCFfOX1LuWy0oNoJMQqorm80NnqYdZjclvwb200HF1GznMm',

  // Enlaces oficiales de Stripe Payment Links EN VIVO (acct_1TOvtGGcKo8sPYaQ · Pago único · Redirección a /gracias/?paid=1&session_id={CHECKOUT_SESSION_ID})
  stripeLinks: {
    EUR: {
      single: 'https://buy.stripe.com/eVq00j2KdgEjffub9McfK0b',       // 0,99 € · Oferta prueba · Canción Personalizada + Mini-Web QR (plink_1UfzzAGcKo8sPYaQHpmWgbic)
      singlePhoto: 'https://buy.stripe.com/14A00j0C53Rx4AQa5IcfK09',  // 20,80 € · Canción + QR + Foto Antigua Animada
      pack3: 'https://buy.stripe.com/6oUaEX5Wp0Flebq1zccfK08',        // 19,90 € · Pack Emoción x3 + Vídeo 9:16 + QR
      pack3Photo: 'https://buy.stripe.com/4gM00j2Kd5ZF4AQ3HkcfK0a'    // 27,80 € · Pack x3 + Vídeo + Foto Antigua Animada
    },
    USD: {
      single: 'https://buy.stripe.com/eVq00j2KdgEjffub9McfK0b',       // 0,99 € · Pasarela internacional Stripe (tarjetas MX/AR + Apple/Google Pay)
      singlePhoto: 'https://buy.stripe.com/14A00j0C53Rx4AQa5IcfK09',
      pack3: 'https://buy.stripe.com/6oUaEX5Wp0Flebq1zccfK08',
      pack3Photo: 'https://buy.stripe.com/4gM00j2Kd5ZF4AQ3HkcfK0a'
    }
  },

  // Opción dinámica: Cloudflare Worker (worker/stripe-checkout-worker.js)
  stripeCheckoutWorkerUrl: '',

  // Cloudflare Worker (worker/lyria-song-worker.js) para generar canciones Lyria 3.5 en vivo
  songWorkerUrl: '',

  currencies: {
    EUR: {
      code: 'EUR',
      label: 'España (€)',
      symbol: '€',
      single: '0,99 €',
      pack3: '19,90 €',
      upsellPhoto: '+7,90 €',
      singleNum: 0.99,
      pack3Num: 19.9,
      upsellNum: 7.9,
      anchorNote: 'Oferta de prueba por tiempo limitado · Menos que un café'
    },
    USD: {
      code: 'USD',
      label: 'México / Argentina ($)',
      symbol: '$',
      single: '$0.99 USD',
      pack3: '$19.90 USD',
      upsellPhoto: '+$7.90 USD',
      singleNum: 0.99,
      pack3Num: 19.9,
      upsellNum: 7.9,
      anchorNote: 'Oferta de prueba · Pago único con tarjeta internacional, Apple Pay o Google Pay'
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

function cancionComputeUnlockSig(compact) {
  const seed = `TCQ_PAID_V1|${compact.r || ''}|${compact.s || ''}|${compact.g || ''}|${compact.sid || ''}`;
  let h1 = 0x811c9dc5;
  let h2 = 0x9e3779b9;
  for (let i = 0; i < seed.length; i++) {
    const c = seed.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193) >>> 0;
    h2 = Math.imul(h2 ^ (c + i), 0x85ebca6b) >>> 0;
  }
  return h1.toString(36) + h2.toString(36);
}

function cancionIsValidStripeSessionId(sid) {
  return typeof sid === 'string' && /^cs_(live|test)_[A-Za-z0-9_]{16,}$/.test(sid.trim());
}

function cancionIsUnlocked(decoded) {
  try {
    if (window.location && window.location.hostname === '127.0.0.1') {
      const qs = new URLSearchParams(window.location.search);
      if (qs.get('render') === '1') return true;
    }
  } catch (e) {}
  if (!decoded || typeof decoded !== 'object') return false;
  if (!decoded.sid || !decoded.u || String(decoded.sid).length < 10) return false;
  return decoded.u === cancionComputeUnlockSig(decoded);
}

function cancionBuildShareUrl(order, isPreview, verifiedSessionId) {
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

  if (!isPreview && cancionIsValidStripeSessionId(verifiedSessionId)) {
    compact.sid = verifiedSessionId.trim().slice(-18);
    compact.u = cancionComputeUnlockSig(compact);
  }

  const encoded = cancionEncodePayload(compact);
  const origin = (window.location && window.location.origin && window.location.origin !== 'null')
    ? window.location.origin
    : 'https://' + CANCION_CONFIG.domainDisplay;
  const pathPrefix = window.location.pathname.includes('/cancion/') || window.location.pathname.includes('/gracias/')
    ? '../cancion/'
    : 'cancion/';
  const suffix = (!compact.u) ? '&preview=1' : '';
  const rel = `${pathPrefix}?d=${encoded}${suffix}`;
  const abs = `${origin}/cancion/?d=${encoded}${suffix}`;
  return { rel, abs, token: encoded, unlocked: Boolean(compact.u) };
}

function cancionSavePendingOrder(order) {
  const ref = order.ref || ('TCQ-' + Date.now().toString(36).toUpperCase().slice(-6));
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

function cancionSavePaidReceipt(ref, sessionId, unlockedShare) {
  try {
    const map = JSON.parse(localStorage.getItem('tucancionqr_paid_receipts') || '{}');
    map[ref] = { sessionId, share: unlockedShare, paidAt: Date.now() };
    localStorage.setItem('tucancionqr_paid_receipts', JSON.stringify(map));
  } catch (e) {}
}

function cancionLoadPaidReceipt(ref) {
  try {
    const map = JSON.parse(localStorage.getItem('tucancionqr_paid_receipts') || '{}');
    return ref && map[ref] ? map[ref] : null;
  } catch (e) {
    return null;
  }
}

function cancionResolveStripeLink(order) {
  const cur = order.currency === 'USD' ? 'USD' : 'EUR';
  const curLinks = CANCION_CONFIG.stripeLinks[cur] || {};
  const eurLinks = CANCION_CONFIG.stripeLinks.EUR || {};
  let link = '';
  if (order.plan === 'single') {
    link = order.upsellPhoto
      ? (curLinks.singlePhoto || eurLinks.singlePhoto || curLinks.single || eurLinks.single)
      : (curLinks.single || eurLinks.single);
  } else {
    link = order.upsellPhoto
      ? (curLinks.pack3Photo || eurLinks.pack3Photo || curLinks.pack3 || eurLinks.pack3)
      : (curLinks.pack3 || eurLinks.pack3);
  }
  return (link && /^https:\/\/(buy\.stripe\.com|checkout\.stripe\.com)\//.test(link)) ? link : '';
}

async function cancionStartCheckout(order) {
  const saved = cancionSavePendingOrder(order);
  const cur = order.currency === 'USD' ? 'USD' : 'EUR';
  const previewShare = cancionBuildShareUrl(saved, true);

  // 1) Worker dinámico de Stripe Checkout Sessions (si está activo)
  if (CANCION_CONFIG.stripeCheckoutWorkerUrl) {
    try {
      const r = await fetch(CANCION_CONFIG.stripeCheckoutWorkerUrl.replace(/\/$/, '') + '/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ref: saved.ref,
          plan: saved.plan,
          currency: cur,
          upsellPhoto: Boolean(saved.upsellPhoto),
          recipient: saved.recipient,
          sender: saved.sender,
          genre: saved.genre,
          email: saved.email || '',
          token: previewShare.token
        })
      });
      if (r.ok) {
        const d = await r.json();
        if (d && d.url && /^https:\/\/checkout\.stripe\.com\//.test(d.url)) {
          window.location.href = d.url;
          return { mode: 'stripe_session', ref: saved.ref };
        }
      }
    } catch (e) {}
  }

  // 2) Stripe Payment Link oficial (Pago único -> redirige tras cobrar a /gracias/?paid=1&session_id={CHECKOUT_SESSION_ID})
  const link = cancionResolveStripeLink(saved);
  if (link) {
    const params = new URLSearchParams();
    params.set('client_reference_id', saved.ref);
    params.set('locale', 'es');
    if (saved.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(saved.email)) {
      params.set('prefilled_email', saved.email);
    }
    window.location.href = link + (link.includes('?') ? '&' : '?') + params.toString();
    return { mode: 'stripe_link', ref: saved.ref };
  }

  // 3) BLOQUEO ESTRICTO: NUNCA entregar el producto ni redirigir a /gracias/ sin pago confirmado en Stripe
  return { mode: 'awaiting_stripe_link', ref: saved.ref };
}
