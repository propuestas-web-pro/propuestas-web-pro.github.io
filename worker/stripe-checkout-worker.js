/**
 * Cloudflare Worker opcional — Sesiones Dinámicas de Stripe Checkout (12,90 € / 19,90 € / +7,90 €)
 * Permite cobrar con Stripe Live (Tarjeta, Apple Pay, Google Pay, Bizum) en EUR o USD sin crear
 * Payment Links manuales por cada combinación.
 *
 * Secretos en Cloudflare Workers:
 *   - STRIPE_SECRET_KEY: sk_live_... de tu cuenta Stripe (acct_1TOvtGGcKo8sPYaQ)
 *   - SITE_URL: https://miweblocal.com
 */

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "*";
    const cors = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: cors });
    }

    try {
      const b = await request.json();
      const cur = b.currency === "USD" ? "usd" : "eur";
      const isSingle = b.plan === "single";
      const baseCents = isSingle ? 1290 : 1990;
      const upsellCents = b.upsellPhoto ? 790 : 0;
      const recipient = String(b.recipient || "Regalo").slice(0, 48);
      const siteUrl = (env.SITE_URL || "https://miweblocal.com").replace(/\/$/, "");

      const params = new URLSearchParams();
      params.append("mode", "payment");
      params.append("locale", "es");
      params.append("client_reference_id", String(b.ref || "TCQ"));
      params.append("success_url", `${siteUrl}/gracias/?paid=1&ref=${encodeURIComponent(b.ref || "")}&plan=${encodeURIComponent(b.plan || "pack3")}&d=${encodeURIComponent(b.token || "")}`);
      params.append("cancel_url", `${siteUrl}/#precios`);
      if (b.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) {
        params.append("customer_email", b.email);
      }

      params.append("line_items[0][quantity]", "1");
      params.append("line_items[0][price_data][currency]", cur);
      params.append("line_items[0][price_data][unit_amount]", String(baseCents));
      params.append(
        "line_items[0][price_data][product_data][name]",
        isSingle ? `TuCanciónQR · Canción para ${recipient}` : `TuCanciónQR · Pack Emoción ×3 + Vídeo para ${recipient}`
      );

      if (upsellCents > 0) {
        params.append("line_items[1][quantity]", "1");
        params.append("line_items[1][price_data][currency]", cur);
        params.append("line_items[1][price_data][unit_amount]", String(upsellCents));
        params.append("line_items[1][price_data][product_data][name]", "Extra · Foto antigua restaurada y animada");
      }

      const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });
      const data = await r.json();
      return new Response(JSON.stringify({ ok: r.ok, url: data.url || "", error: data.error || null }), {
        status: r.status,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ ok: false, error: String(err) }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
  },
};
