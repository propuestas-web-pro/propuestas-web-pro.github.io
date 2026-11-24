/**
 * Cloudflare Worker de Producción — Generación Automática de Canciones con Gemini Lyria 3.5
 * Coste oficial por canción completa de estudio (44.1 kHz stereo MP3): ~0,08 USD (Paid Tier).
 *
 * Variables de entorno requeridas en Cloudflare Workers:
 *   - GEMINI_API_KEY: Tu clave de Google AI Studio (Paid tier para lyria-3.5)
 *   - ALLOWED_ORIGIN: https://miweblocal.com (o tu dominio .com dedicado)
 */

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "*";
    const cors = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    try {
      const body = await request.json();
      const recipient = String(body.recipient || "Mamá").slice(0, 48);
      const sender = String(body.sender || "Tu familia").slice(0, 40);
      const occasion = String(body.occasion || "cumpleaños").slice(0, 32);
      const genre = String(body.genre || "Pop Acústico cálido").slice(0, 48);
      const memory = String(body.memory || "").slice(0, 140);
      const fullSong = Boolean(body.fullSong);

      const prompt = [
        `Canción emotiva y profesional en español natural, estilo ${genre}.`,
        `Ocasión: ${occasion}. Dedicada a: ${recipient}. De parte de: ${sender}.`,
        memory ? `Incluir este detalle real en la letra: ${memory}.` : "",
        `Mencionar el nombre "${recipient}" con claridad en el estribillo desde los primeros segundos. Producción limpia de estudio, voz natural humana y emoción genuina.`,
      ]
        .filter(Boolean)
        .join("\n");

      const model = fullSong ? "lyria-3.5" : "lyria-3-clip-preview";

      const resp = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": env.GEMINI_API_KEY,
        },
        body: JSON.stringify({ model, input: prompt }),
      });

      const data = await resp.json();
      if (!resp.ok) {
        return new Response(JSON.stringify({ ok: false, error: data }), {
          status: resp.status,
          headers: { ...cors, "Content-Type": "application/json" },
        });
      }

      // Extraer audio base64 y letra del esquema steps[] de Interactions API
      let audioBase64 = "";
      let mimeType = "audio/mpeg";
      let lyrics = "";
      for (const step of data.steps || []) {
        if (step.type !== "model_output") continue;
        for (const item of step.content || []) {
          if (item.type === "audio" && item.data) {
            audioBase64 = item.data;
            mimeType = item.mime_type || mimeType;
          } else if (item.type === "text" && item.text) {
            lyrics += (lyrics ? "\n" : "") + item.text;
          }
        }
      }

      return new Response(
        JSON.stringify({ ok: Boolean(audioBase64), model, mimeType, audioBase64, lyrics }),
        { headers: { ...cors, "Content-Type": "application/json" } }
      );
    } catch (err) {
      return new Response(JSON.stringify({ ok: false, error: String(err) }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
  },
};
