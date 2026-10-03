/**
 * OWNER ACTIVATION BANNER — Mi Web Local
 * Convierte cualquier demo interactiva en una máquina de cierre directo.
 * Muestra al propietario que la web está 100% lista para publicar y le da
 * el botón de contacto directo con Fathi por WhatsApp para activarla en 24h.
 */
(function() {
  if (window.__OWNER_BANNER_LOADED__) return;
  window.__OWNER_BANNER_LOADED__ = true;

  function initOwnerBanner() {
    // 1. Extraer nombre del negocio
    let businessName = '';
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && ogTitle.content) {
      businessName = ogTitle.content;
    } else if (document.title) {
      businessName = document.title;
    } else {
      const h1 = document.querySelector('h1');
      businessName = h1 ? h1.innerText : 'Tu Negocio';
    }

    // Limpieza de sufijos comunes (ej: "Tapa La Caña · Alicante" -> "Tapa La Caña")
    businessName = businessName
      .split(/[·|\-—–]/)[0]
      .replace(/^(Web de|Propuesta para|Ejemplo de)\s+/i, '')
      .trim();

    const contactPhone = '34632768152'; // Teléfono oficial de WhatsApp de Álvaro
    const waActivateText = encodeURIComponent(`¡Hola Álvaro! He estado viendo la propuesta web que me preparaste para ${businessName} y quiero activarla con mi dominio.`);
    const waQuestionsText = encodeURIComponent(`Hola Álvaro, tengo una duda sobre la propuesta web para ${businessName}.`);

    const waActivateUrl = `https://wa.me/${contactPhone}?text=${waActivateText}`;
    const waQuestionsUrl = `https://wa.me/${contactPhone}?text=${waQuestionsText}`;

    // 2. Inyectar estilos CSS
    const style = document.createElement('style');
    style.id = 'owner-banner-styles';
    style.innerHTML = `
      #owner-activation-banner {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999999;
        background: linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(10, 15, 29, 0.98) 100%);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(59, 130, 246, 0.3);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        padding: 8px 16px;
        box-sizing: border-box;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      #owner-activation-banner.minimized {
        transform: translateY(-100%);
      }

      .oab-container {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .oab-left {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
        min-width: 0;
      }

      .oab-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        color: #ffffff;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        padding: 4px 8px;
        border-radius: 6px;
        white-space: nowrap;
        box-shadow: 0 0 12px rgba(37, 99, 235, 0.4);
      }

      .oab-info {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }

      .oab-title {
        font-size: 13.5px;
        font-weight: 700;
        color: #f8fafc;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .oab-title span {
        color: #38bdf8;
      }

      .oab-sub {
        font-size: 11.5px;
        color: #94a3b8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .oab-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
      }

      .oab-btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: #ffffff !important;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none !important;
        padding: 7px 14px;
        border-radius: 8px;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        box-shadow: 0 2px 10px rgba(16, 185, 129, 0.35);
      }

      .oab-btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(16, 185, 129, 0.5);
      }

      .oab-btn-secondary {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #e2e8f0 !important;
        font-size: 12px;
        font-weight: 600;
        text-decoration: none !important;
        padding: 6px 12px;
        border-radius: 8px;
        transition: background 0.15s ease;
      }

      .oab-btn-secondary:hover {
        background: rgba(255, 255, 255, 0.15);
      }

      .oab-toggle-btn {
        background: none;
        border: none;
        color: #64748b;
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        transition: color 0.15s;
      }

      .oab-toggle-btn:hover {
        color: #cbd5e1;
      }

      #owner-floating-pill {
        position: fixed;
        top: 12px;
        right: 12px;
        z-index: 9999998;
        background: rgba(15, 23, 42, 0.9);
        border: 1px solid rgba(59, 130, 246, 0.4);
        border-radius: 30px;
        padding: 6px 14px;
        display: none;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
        cursor: pointer;
        color: #38bdf8;
        font-size: 12px;
        font-weight: 600;
        font-family: sans-serif;
      }

      @media (max-width: 768px) {
        #owner-activation-banner {
          position: relative !important;
          padding: 8px 12px;
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }
        .oab-container {
          gap: 8px;
        }
        .oab-badge {
          font-size: 10px;
          padding: 3px 6px;
        }
        .oab-sub {
          display: none;
        }
        .oab-btn-secondary {
          display: none;
        }
        .oab-btn-primary {
          padding: 6px 12px;
          font-size: 11.5px;
          white-space: nowrap;
        }
        .oab-title {
          font-size: 12px;
          font-weight: 700;
          color: #f8fafc;
          white-space: nowrap;
        }
      }
    `;
    document.head.appendChild(style);

    // 3. Crear HTML del Banner
    const isMobile = window.innerWidth <= 768;
    const titleHtml = isMobile 
      ? `<span>${escapeHtml(businessName)}</span> · Lista 24h`
      : `Web preparada para <span>${escapeHtml(businessName)}</span>`;

    const banner = document.createElement('div');
    banner.id = 'owner-activation-banner';
    banner.innerHTML = `
      <div class="oab-container">
        <div class="oab-left">
          <span class="oab-badge">⚡ Propuesta</span>
          <div class="oab-info">
            <div class="oab-title">${titleHtml}</div>
            <div class="oab-sub">Diseño responsive · Conexión a Google Maps · Lista para publicar en 24h</div>
          </div>
        </div>
        <div class="oab-actions">
          <a href="${waQuestionsUrl}" target="_blank" rel="noopener" class="oab-btn-secondary">
            💬 Dudas
          </a>
          <a href="${waActivateUrl}" target="_blank" rel="noopener" class="oab-btn-primary">
            <span>Activar esta Web</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button class="oab-toggle-btn" id="oab-close-btn" title="Ocultar barra">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    `;

    // 4. Crear píldora minimizada
    const pill = document.createElement('div');
    pill.id = 'owner-floating-pill';
    pill.innerHTML = `⚡ Ver Oferta de Activación para ${escapeHtml(businessName)}`;

    document.body.appendChild(banner);
    document.body.appendChild(pill);

    // Ajustar espacio en body para que el banner no tape el menú original en desktop
    const bannerHeight = banner.offsetHeight || 54;
    if (window.innerWidth > 768) {
      document.body.style.paddingTop = bannerHeight + 'px';
    }

    // Manejar minimizar / restaurar
    const closeBtn = document.getElementById('oab-close-btn');
    closeBtn.addEventListener('click', function() {
      banner.classList.add('minimized');
      document.body.style.paddingTop = '0px';
      pill.style.display = 'flex';
    });

    pill.addEventListener('click', function() {
      banner.classList.remove('minimized');
      document.body.style.paddingTop = bannerHeight + 'px';
      pill.style.display = 'none';
    });
  }

  function escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, function(m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOwnerBanner);
  } else {
    initOwnerBanner();
  }
})();
