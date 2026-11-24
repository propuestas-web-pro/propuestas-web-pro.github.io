# TuCanciónQR — Plataforma de Canciones Personalizadas IA + Mini-Web QR y Fábrica Diaria de 3 Vídeos

Plataforma comercial de alto volumen pensada para **España, México y Argentina** (tráfico orgánico en **Instagram Reels, Facebook Reels y YouTube Shorts** + subida automática por API desde portátil 24/7).

## 1. Modelo de negocio elegido (basado en datos reales)
- **Producto:** Canción personalizada con el nombre y recuerdos de una persona + **Mini-Web interactiva privada** (sobre animado, reproductor y letra completa) + **Código QR imprimible** listo para regalar o enviar por WhatsApp.
- **Mercado objetivo:** España (~48,5 M), México (~130 M) y Argentina (~47 M) → **~225,5 M de personas** (~617.800 cumpleaños cada día + Día de la Madre/Padre, aniversarios, Quinceañeras, bodas, Reyes y abuelos).
- **Precios optimizados para tráfico social frío (pago único, 0 €/mes, sin registro ni NIF):**
  - **Canción + Mini-Web QR:** `12,90 €` (España) / `$12.90 USD` (México y Argentina).
  - **Pack Emoción ×3 estilos + Vídeo 9:16:** `19,90 €` / `$19.90 USD` *(plan más elegido)*.
  - **Upsell 1 clic en checkout:** `+7,90 €` / `+$7.90 USD` (restauración y animación de foto antigua).
- **Estilos musicales locales incluidos:** Pop Acústico, Balada a Piano, Mariachi Serenata (MX), Cumbia Festiva (AR/MX), Rumba Española (ES) y Bachata Suave.

---

## 2. Estructura del proyecto

- `index.html` — Portada mobile-first con wizard above-the-fold sin registro, vista previa interactiva en vivo con audio real y código QR escaneable, demos reproducibles, precios `EUR / USD` y modal de checkout sin fricción.
- `cancion/index.html` — Mini-web pública compartible (`/cancion/?d=...`) con sobre animado, reproductor de estudio, letra completa, botón de impresión de tarjeta QR y envío en 1 toque por WhatsApp.
- `gracias/index.html` — Página de entrega instantánea post-pago (enlace permanente, descarga MP3, tarjeta QR y respaldo WhatsApp).
- `assets/cancion-config.js` — Configuración de moneda (`EUR`/`USD`), Stripe Payment Links (`12,90 €` / `19,90 €`) y URL del worker de generación automática.
- `assets/cancion-catalog.js` — Ocasiones, estilos regionales ES/MX/AR, demos y generador de letras personalizadas.
- `assets/cancion/` — Fotografías editoriales (`hero-emocion.jpg`, `regalo-qr.jpg`, `familia-celebracion.jpg`).
- `assets/audio/` — Pistas reales de estudio generadas para demos web y gancho `t = 0.00 s` de los vídeos.
- `worker/lyria-song-worker.js` — Cloudflare Worker listo para desplegar con `GEMINI_API_KEY` usando la API oficial de **Gemini `lyria-3.5`** (`v1beta/interactions`, ~`$0.08` por canción completa de estudio).
- `EDITAR/REMOTION_ESTUDIO/crear_video_claude.py` — Fábrica oficial en 1 comando (**Claude Motion Skill · Remotion 4 · 0 % GPU · 0 % TTS**) basada en las skills virales de GitHub `haidrrrry/claude-remotion-skill` + `iart-ai/tiktok-video-skills`, que renderiza vídeos `1080×1920 @ 30 fps` (`H.264`, `crf=16`, `15,0 s`, `-map_metadata -1`, `+faststart`) + `info.json` (`title`, `caption`, `pinned_comment`).
- `EDITAR/REMOTION_ESTUDIO/src/ClaudeViralFilm.tsx` — Composición Remotion 4 editorial estilo Claude Design (`#FAF7F2` + `Fraunces` + 1 color héroe `#E11D48` + 5-Layer Stack + kit SFX en Node.js puro `scripts/gen-sfx.mjs` sincronizado 2 frames antes de cada impacto) para 5 perfiles (`mama`, `pareja`, `papa`, `amigo`, `hijo`).

---

## 3. Estándar de producción y retención (Claude Motion Skill · `15,0 s`, 0 % GPU, CERO locutor)

Sigue la estructura segundo a segundo de los vídeos virales hechos con Claude Code + Remotion Skills: gancho editorial limpio con 3 baldosas vectoriales (`0–2,5 s`), giro con tarjeta personalizada en vivo (`2,5–5,5 s`), anillo SVG animado `02:00` + onda viva (`5,5–9,0 s`), tarjeta física QR real escaneable (`9,0–12,3 s`) y cierre calmado estilo marca de diseño (`12,3–15,0 s`), todo con SFX sincronizados en Node.js puro y sin tocar la GPU.

---

## 4. Cómo generar vídeos cada mañana en 1 solo comando

### A) Generar 1 vídeo (rotación automática: Mamá → Pareja → Papá → Amigo → Hijo)
```powershell
python "C:\Users\Fathi\Downloads\mi web\EDITAR\REMOTION_ESTUDIO\crear_video_claude.py" --angulo next
```

### B) Generar 3 vídeos diarios, los 5 perfiles o un destinatario concreto
```powershell
python "C:\Users\Fathi\Downloads\mi web\EDITAR\REMOTION_ESTUDIO\crear_video_claude.py" --todos
python "C:\Users\Fathi\Downloads\mi web\EDITAR\REMOTION_ESTUDIO\crear_video_claude.py" --todos5
python "C:\Users\Fathi\Downloads\mi web\EDITAR\REMOTION_ESTUDIO\crear_video_claude.py" --angulo pareja
```

### C) Exportar directo a la bandeja de Drive (para tu portátil 24/7)
```powershell
python "C:\Users\Fathi\Downloads\mi web\EDITAR\REMOTION_ESTUDIO\crear_video_claude.py" --todos --export-drive "G:\Mi unidad\BANDEJAAAAAAAAAAAAAAAA\GRUPO_CANCION_QR"
```

### D) Previsualizar y ajustar en tiempo real con Remotion Studio (`http://localhost:3000`)
```powershell
cd "C:\Users\Fathi\Downloads\mi web\EDITAR\REMOTION_ESTUDIO"
npm run studio
```

---

## 5. Checklist de publicación por API (Portátil 24/7 — Nunca desde este PC)

1. **Arquitectura de hardware:** Este PC de sobremesa **solo crea vídeos y exporta packs (`video.mp4` + `info.json`) a Drive**. El portátil 24/7 con módem 4G se encarga en exclusiva de publicar y responder comentarios.
2. **Facebook Pages API:** Publicar siempre por el endpoint **`/video_reels`** (nunca por el antiguo `/videos`, que provoca alcance ~0).
3. **Instagram Graph API:** Publicar con `media_type=REELS` y subtítulos/música ya quemados en el `.mp4` (la API no añade audios nativos).
4. **YouTube Data API v3 (`videos.insert`):** Mantener `9:16` (`1080×1920`), `< 60 s` y `#Shorts` en título/descripción. Medir cada semana el KPI **`Viewed vs Swiped Away` (objetivo ≥ 70 %)**.

---

## 6. Pasos rápidos para activar pagos y canciones reales 100 % automáticas en producción

1. **Stripe Payment Links:** Crea en Stripe 2 enlaces de pago único (`12,90 €` y `19,90 €`, más `$12.90` y `$19.90` USD si quieres cobrar en dólares en MX/AR) con redirección post-pago a `https://miweblocal.com/gracias/` (o tu dominio nuevo) y pégalos en `assets/cancion-config.js`.
2. **Worker de generación real Lyria 3.5:** Sube `worker/lyria-song-worker.js` a Cloudflare Workers, añade tu secreto `GEMINI_API_KEY` y pega la URL en `CANCION_CONFIG.songWorkerUrl` dentro de `assets/cancion-config.js`.
3. **Dominio recomendado:** El proyecto funciona ya en `miweblocal.com` (`CNAME`), pero para máxima conversión en regalos emocionales se recomienda registrar un `.com` dedicado (ej. `tucancionqr.com`) y actualizar el archivo `CNAME`.
