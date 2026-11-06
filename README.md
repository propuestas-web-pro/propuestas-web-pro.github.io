# MiWebLocal.com — Plataforma Oficial y Estudio TikTok 9:16

Plataforma web oficial de **MiWebLocal.com**: generador en 15 segundos de páginas web con herramientas operativas conectadas a WhatsApp para **+65 oficios locales de España** (más respaldo inteligente universal para cualquier oficio personalizado), pago único en Stripe (79 € / 197 € / 297 €, sin cuotas mensuales) y estudio integrado de vídeos virales 9:16 sin mostrar la cara (*faceless*).

## Estructura limpia del proyecto

Solo se conservan los archivos esenciales en producción de **MiWebLocal.com**:

- `index.html` — Portada oficial, buscador universal de +65 oficios, generador en vivo en 15 segundos, comparador animado *Problema vs. Solución* y pasarela Stripe.
- `videos-tiktok.html` — Estudio reproductor 9:16 *faceless* conectado a los +65 oficios y a cualquier oficio escrito al vuelo (5 escenas animadas, subtítulos dinámicos, locución limpia y modo grabación 9:16).
- `assets/oficios-catalog.js` — Catálogo maestro de 66 oficios españoles en 6 categorías, detector inteligente de oficios no listados, ilustraciones vectoriales 2D y generador de guiones TikTok.
- `assets/studio-engine.js` — Motor compilador de webs de clientes y 8 módulos interactivos de WhatsApp (`medidas_presupuesto`, `urgencia_o_llaves`, `motor_diagnostico`, `recepcion_taller_local`, `encargo_sin_cola`, `mesa_carta`, `agenda_citas`, `filtro_clientes`).
- `assets/stripe-config.js` — Configuración de planes de pago único en Stripe (`79 €`, `197 €`, `297 €`).
- `assets/real/` — Fotografías verificadas de oficios reales en España.
- `sitio/index.html` — Visor público de las webs generadas para cada negocio (`/sitio/?negocio=...`).
- `admin/index.html` — Panel de edición rápida para dueños de negocios.
- `gracias/index.html` — Página de confirmación post-compra y activación de dominio.
- `marca/` y `favicon.svg` — Identidad visual oficial de MiWebLocal.com (`#4F46E5`).
- `404.html`, `CNAME`, `.nojekyll` — Enrutamiento y dominio en producción (`miweblocal.com`).
- `ESTRATEGIA_VIDEOS_FACELESS_MIWEBLOCAL.md` y `tiktok_alejandroo_ia_report.md` — Documentación estratégica de vídeos virales.
- `EDITAR/` — Estudio automático de renderizado MP4 (`1080×1920 @ 30fps`, `-11.8 LUFS`):
  - `EDITAR/SALIDA_EDITADOS/MIWEBLOCAL_VIDEO_FINAL_V4_ESTUDIO.mp4` — Vídeo máster V4 generado (música Neo-Soul Rhodes, locución masterizada y efectos vectoriales).
  - `EDITAR/SALIDA_EDITADOS/MIWEBLOCAL_VIDEO_ANTERIOR_V3.mp4` — Versión V3 anterior.
  - `EDITAR/ENTRADA/`, `EDITAR/MOTOR_ESTUDIO/`, `EDITAR/PROMPTS_Y_PLANTILLAS/`, `EDITAR/VIDEOS_Y_REFERENCIAS/` y `EDITAR/CREAR_NUEVO_VIDEO.bat`.

## Proyectos externos separados

- La web independiente del cliente de motocicletas (**Orero / Motor Motocicletas**) está separada fuera de este repositorio en:
  `C:\Users\Fathi\Downloads\motorcycle-store-orero`

