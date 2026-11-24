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
- `EDITAR/MOTOR_ESTUDIO/generar_3_videos.py` — Fábrica automática en 1 comando que renderiza vídeos `1080×1920 @ 30 fps` con reglas estadísticas de retención programadas.
- `EDITAR/MOTOR_ESTUDIO/stage_cancion.html` — Escenario visual vertical `1080×1920` (corte/movimiento cada `≤ 2,2 s`, móvil interactivo real, ecualizador en vivo, QR y subtítulos cinéticos en zona segura).

---

## 3. Reglas estadísticas de retención programadas en el motor V3 (Formato Nativo Viral)

Cero diapositivas corporativas y cero terminales de programador. Cada vídeo generado por `generar_3_videos.py` replica la estructura nativa de mayor retención en **Instagram Reels, Facebook Reels y YouTube Shorts**:

| Acto / Regla | Por qué retiene (evidencia de mercado) | Implementación en Motor V3 (`stage_viral_v3.html`) |
| :--- | :--- | :--- |
| **Acto 1 (`0–6 s`) · Drama real de WhatsApp** | El formato *WhatsApp/iMessage Story* dispara el instinto de curiosidad («cotilleo») y rompe el aspecto de anuncio en los primeros `1,3–3 s`. | Chat real de WhatsApp en modo oscuro sobre plano vertical `9:16` con movimiento de cámara en mano, burbujas en vivo y SFX auténticos de WhatsApp (`«Se me olvidó el cumple 15 min antes»`). |
| **Acto 2 (`6–13 s`) · Demo real del móvil** | Ver la web real funcionando en un iPhone (no dibujos) dispara la confianza y los guardados. | `iframe` real en vivo de `miweblocal.com` en formato iPhone escribiendo el nombre, eligiendo estilo y bajando hasta el código QR real. |
| **Acto 3 (`13–19 s`) · Escaneo POV del QR** | Puente físico→digital (formato Loveyuu/Songfinch): las esquinas amarillas de cámara iOS crean suspense inmediato. | Plano vertical `9:16` POV + interfaz nativa de Cámara iOS bloqueando el QR + banner amarillo `miweblocal.com ↗` + sonido de enfoque. |
| **Acto 4 (`19–29 s`) · Reacción + Notificaciones WA** | El contagio emocional (lágrimas reales) + prueba social en comentarios dispara los **Envíos por DM (Shares)** en IG y FB. | Plano `9:16` de madre emocionada llorando frente al móvil + notificaciones iOS reales de `Mamá ❤️` y `Hermano` pidiendo el enlace + CTA orgánico (`COMENTA «CANCIÓN»`). |
| **Audio y subtítulos nativos** | Subtítulos nativos suben `+12 %` watch time; voz natural sin deformar evita rechazo. | Voz 1.0x sin `atempo` (`Orus` en tono anécdota) + balada acústica emotiva in crescendo + subtítulos blancos/amarillos estilo CapCut en zona segura + `-11.8 LUFS` y `-map_metadata -1`. |

---

## 4. Cómo generar vídeos cada mañana en 1 solo comando

### A) Generar los 3 vídeos diarios distintos («Genérame tres vídeos»)
```powershell
python "C:\Users\Fathi\Downloads\mi web\EDITAR\MOTOR_ESTUDIO\generar_3_videos.py" --todos
```
Genera 3 piezas distintas en `EDITAR/SALIDA_EDITADOS/` (cada una con su carpeta `<pack>/video.mp4` + `info.json`):
1. **Ángulo 1 (`26–28 s` · Emoción / Cumpleaños Mamá · Pop Acústico):** optimizado para **Shares / DM en Instagram y Facebook Reels**.
2. **Ángulo 2 (`28–30 s` · Demo Móvil + Quinceañera / Pareja · Cumbia o Balada):** optimizado para **Guardados y comentarios con palabra clave (`CANCIÓN`)**.
3. **Ángulo 3 (`46–52 s` · Storytelling Regalo de Última Hora `12,90 €` · Mariachi/Serenata):** optimizado para **AVD máximo en YouTube Shorts y Facebook Reels**.

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
