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
- `EDITAR/MOTOR_ESTUDIO/generar_3_videos.py` — Fábrica automática en 1 comando (**Motor V4 Cero-Anuncio · Bucle 15 s · Split-Screen**) que renderiza vídeos `1080×1920 @ 30 fps` + `info.json` (`title`, `caption` y `pinned_comment`).
- `EDITAR/MOTOR_ESTUDIO/stage_viral_v4.html` — Escenario visual `1080×1920` replicado de los 6 Shorts líderes reales (`639K` a `29M` vistas): Cold-Open `0:00` + WhatsApp oscuro QR + Cámara iOS POV + Split-Screen 50/50 con tu mini-web real `/cancion/`.

---

## 3. Reglas estadísticas de retención programadas en el motor V4 («Cero Anuncio · Bucle 15 s»)

En auditoría real EN VIVO sobre YouTube Shorts, los vídeos con pinta de agencia/folleto/precios en pantalla se quedan en **60–200 vistas**, mientras que los ganadores orgánicos del nicho (`PrayerSong` **10,58M** y **6,62M**, `Art Define Ignition` **897K en 15 s**, `HeartMoments` **710K con 4,15K subs = 171×**, `YCufz6Pnaio` **217K en 13 s**) siguen este patrón exacto:

| Acto / Regla | Evidencia en vivo (Shorts 217K – 29M) | Implementación en Motor V4 (`stage_viral_v4.html`) |
| :--- | :--- | :--- |
| **Acto 1 (`0.0–2.5 s`) · Cold-Open + música en `0:00`** | `PrayerSong` (`6,6M`) y `JAX` (`29M`) abren con cara real emocionada + caja blanca nativa TikTok + música ya sonando en `0:00`. | Plano `9:16` de madre emocionada llorando + píldora blanca nativa (*«Mi madre pensó que olvidé su cumple… hasta que escaneó este QR 😭❤️»*) + balada y nombre propio desde `t = 0.00 s`. |
| **Acto 2 (`2.5–5.6 s`) · Chat real de WhatsApp con QR** | `Art Define Ignition` (`897K`, `0:15`, `133×` subs) usa un chat real de WhatsApp enviando un QR para crear suspense inmediato. | Chat a pantalla completa de WhatsApp en modo oscuro con barra iOS, tarjeta QR en el mensaje y sonidos auténticos de mensaje. |
| **Acto 3 (`5.6–8.9 s`) · Cámara iOS POV escaneando QR** | `YCufz6Pnaio` (`217K`, `0:13`, `105×` subs) demuestra que ver la cámara nativa enfocar el QR físico y pulsar el banner evita el swipe. | Plano vertical `9:16` POV + esquinas amarillas de Cámara iOS bloqueando el QR + banner amarillo `miweblocal.com ↗` + pulso de dedo + sonido de enfoque. |
| **Acto 4 (`8.9–15.5 s`) · Split-Screen 50/50 + Cero Anuncio** | `PrayerSong` (`6,6M`) usa pantalla partida 50/50 + letra limpia blanca en la costura central y **CERO precio ni slide de venta dentro del vídeo**. | Arriba: madre llorando + notificación iOS (`«¿¿Hiciste una canción con MI nombre?? 😭»`); abajo: `iframe` real en vivo de `/cancion/` abriendo su canción; en la costura central: letra blanca sincronizada. El enlace y CTA van en `info.json` (`caption` + `pinned_comment`). |
| **Duración bucle `~15–16 s` y audio maestro** | Los vídeos de `13–15 s` disparan >100 % de retención media por repetición automática y comentarios de intención (*«¿Cómo se hace??»*). | Voz íntima emocional (`Gemini 3.8 Flash TTS · Aoede`) + balada acústica in crescendo + `-11.8 LUFS` + `-map_metadata -1`. |

---

## 4. Cómo generar vídeos cada mañana en 1 solo comando

### A) Generar los 3 vídeos diarios distintos («Genérame tres vídeos»)
```powershell
python "C:\Users\Fathi\Downloads\mi web\EDITAR\MOTOR_ESTUDIO\generar_3_videos.py" --todos
```
Genera 3 piezas virales distintas en bucle `~15–16 s` en `EDITAR/SALIDA_EDITADOS/` (cada una con su carpeta `<pack>/video.mp4` + `info.json` con `title`, `caption` y `pinned_comment`):
1. **Ángulo 1 (`v4_loop15_mama` · Cumpleaños Mamá · Pop Acústico):** optimizado para **Shares / DM y comentarios en Instagram y Facebook Reels**.
2. **Ángulo 2 (`v4_loop15_pareja` · Aniversario Pareja · Balada a Piano):** optimizado para **Guardados y bucle >100 % en Shorts/Reels**.
3. **Ángulo 3 (`v4_loop15_papa_mx_ar` · Serenata Papá MX/AR · Mariachi):** optimizado para **viralidad familiar en México, Argentina y España**.

### B) Generar un único vídeo demo o un ángulo concreto
```powershell
python "C:\Users\Fathi\Downloads\mi web\EDITAR\MOTOR_ESTUDIO\generar_3_videos.py" --angulo 1
```

### C) Personalizar nombre, ocasión o destino Drive (para tu portátil 24/7)
```powershell
python "C:\Users\Fathi\Downloads\mi web\EDITAR\MOTOR_ESTUDIO\generar_3_videos.py" --todos --export-drive "G:\Mi unidad\BANDEJAAAAAAAAAAAAAAAA\GRUPO_CANCION_QR"
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
