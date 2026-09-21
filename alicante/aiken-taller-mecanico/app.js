/**
 * AIKEN TALLER MECÁNICO - INTERACTIVE APP SCRIPT
 * Diagnóstico de averías, asistente de cita previa y automatización de orden WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Set default minimum date for appointment (tomorrow or next business day)
  const prefDateInput = document.getElementById('prefDate');
  if (prefDateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // If weekend, push to Monday
    if (tomorrow.getDay() === 6) tomorrow.setDate(tomorrow.getDate() + 2);
    if (tomorrow.getDay() === 0) tomorrow.setDate(tomorrow.getDate() + 1);

    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    prefDateInput.min = `${yyyy}-${mm}-${dd}`;
    prefDateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  /* -------------------------------------------------------------------------- */
  /* Mobile Drawer Navigation                                                   */
  /* -------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  /* -------------------------------------------------------------------------- */
  /* Step Wizard Navigation Logic                                               */
  /* -------------------------------------------------------------------------- */
  let currentStep = 1;

  const stepItems = document.querySelectorAll('.step-item');
  const stepPanes = document.querySelectorAll('.step-pane');

  const btnToStep2 = document.getElementById('btnToStep2');
  const btnBackToStep1 = document.getElementById('btnBackToStep1');
  const btnToStep3 = document.getElementById('btnToStep3');
  const btnBackToStep2 = document.getElementById('btnBackToStep2');
  const btnConfirmOrder = document.getElementById('btnConfirmOrder');

  function showStep(stepNumber) {
    currentStep = stepNumber;
    stepPanes.forEach(pane => pane.classList.remove('active'));
    stepItems.forEach(item => {
      const itemStep = parseInt(item.getAttribute('data-step'), 10);
      if (itemStep <= stepNumber) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    const activePane = document.getElementById(`stepPane${stepNumber}`);
    if (activePane) {
      activePane.classList.add('active');
    }

    if (stepNumber === 3) {
      updateOrderSummary();
    }
  }

  if (btnToStep2) {
    btnToStep2.addEventListener('click', () => {
      showStep(2);
    });
  }

  if (btnBackToStep1) {
    btnBackToStep1.addEventListener('click', () => {
      showStep(1);
    });
  }

  if (btnToStep3) {
    btnToStep3.addEventListener('click', () => {
      const carMake = document.getElementById('carMake').value.trim();
      const carModel = document.getElementById('carModel').value.trim();
      if (!carMake || !carModel) {
        alert('Por favor indica al menos la marca y el modelo del vehículo para que el taller pueda valorar la avería.');
        return;
      }
      showStep(3);
    });
  }

  if (btnBackToStep2) {
    btnBackToStep2.addEventListener('click', () => {
      showStep(2);
    });
  }

  /* -------------------------------------------------------------------------- */
  /* Order Summary & WhatsApp Generation                                       */
  /* -------------------------------------------------------------------------- */
  function getSelectedService() {
    const checkedRadio = document.querySelector('input[name="service_type"]:checked');
    return checkedRadio ? checkedRadio.value : 'Mantenimiento General';
  }

  function updateOrderSummary() {
    const service = getSelectedService();
    const make = document.getElementById('carMake').value.trim() || 'No especificada';
    const model = document.getElementById('carModel').value.trim() || 'No especificado';
    const year = document.getElementById('carYear').value.trim() || 'Desconocido';
    const km = document.getElementById('carKm').value.trim() ? `${document.getElementById('carKm').value.trim()} km` : 'No indicado';
    const desc = document.getElementById('issueDescription').value.trim() || 'Sin descripción adicional';
    const prefDate = document.getElementById('prefDate').value || 'Próximo día disponible';
    const prefTime = document.getElementById('prefTime').value;

    const previewBody = document.getElementById('previewBody');
    if (previewBody) {
      previewBody.innerHTML = `
        <div class="preview-item"><strong>Servicio:</strong> <span>${service}</span></div>
        <div class="preview-item"><strong>Vehículo:</strong> <span>${make} ${model} (${year} - ${km})</span></div>
        <div class="preview-item"><strong>Fecha preferente:</strong> <span>${prefDate} (${prefTime})</span></div>
        <div class="preview-item"><strong>Notas avería:</strong> <span>${desc}</span></div>
      `;
    }
  }

  // Handle Order Confirmation
  const confirmationModal = document.getElementById('confirmationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalWhatsAppLink = document.getElementById('modalWhatsAppLink');
  const modalTextPreview = document.getElementById('modalTextPreview');

  if (btnConfirmOrder) {
    btnConfirmOrder.addEventListener('click', () => {
      const clientName = document.getElementById('clientName').value.trim();
      const clientPhone = document.getElementById('clientPhone').value.trim();

      if (!clientName || !clientPhone) {
        alert('Por favor indica tu nombre y teléfono para que podamos identificarte y confirmar la cita.');
        return;
      }

      const service = getSelectedService();
      const make = document.getElementById('carMake').value.trim();
      const model = document.getElementById('carModel').value.trim();
      const year = document.getElementById('carYear').value.trim() || 'N/A';
      const km = document.getElementById('carKm').value.trim() || 'N/A';
      const desc = document.getElementById('issueDescription').value.trim() || 'Sin observaciones previas';
      const prefDate = document.getElementById('prefDate').value;
      const prefTime = document.getElementById('prefTime').value;

      // Construct formatted text for WhatsApp
      const rawMessage = 
`*SOLICITUD DE CITA / PRESUPUESTO - AIKEN TALLER*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Cliente:* ${clientName}
📞 *Teléfono:* ${clientPhone}
🚗 *Vehículo:* ${make} ${model} (Año: ${year} | Km: ${km})
🔧 *Servicio:* ${service}
📅 *Fecha preferente:* ${prefDate}
⏰ *Franja horaria:* ${prefTime}
📝 *Síntomas / Avería:*
"${desc}"
━━━━━━━━━━━━━━━━━━━━━━
_Enviado desde el asistente web de Aiken Taller Mecánico_`;

      const encodedMessage = encodeURIComponent(rawMessage);
      const whatsappUrl = `https://wa.me/34666116625?text=${encodedMessage}`;

      // Populate modal
      if (modalTextPreview) {
        modalTextPreview.textContent = rawMessage;
      }
      if (modalWhatsAppLink) {
        modalWhatsAppLink.href = whatsappUrl;
      }

      // Open modal
      confirmationModal.classList.add('open');
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      confirmationModal.classList.remove('open');
    });
  }

  // Close modal when clicking outside
  if (confirmationModal) {
    confirmationModal.addEventListener('click', (e) => {
      if (e.target === confirmationModal) {
        confirmationModal.classList.remove('open');
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /* Mileage Maintenance Calculator                                             */
  /* -------------------------------------------------------------------------- */
  const kmData = {
    "15": {
      title: "Mantenimiento Básico (15.000 - 30.000 km / 1 Año)",
      items: [
        "Sustitución de aceite de motor sintético homologado según norma de fábrica.",
        "Cambio de filtro de aceite y arandela de vaciado.",
        "Comprobación de niveles de refrigerante, líquido de frenos y limpiaparabrisas.",
        "Inspección de desgaste y presión de neumáticos (incluida rueda de repuesto).",
        "Control visual de pastillas de freno delanteras y traseras.",
        "Revisión de alumbrado exterior, reglaje de ópticas y escobillas."
      ],
      priceHint: "Desde 75€ (según viscosidad y litros)",
      rec: "Ideal para mantener la garantía de fábrica y circular con tranquilidad todo el año."
    },
    "60": {
      title: "Revisión Intermedia (60.000 km / 2-3 Años)",
      items: [
        "Todo lo incluido en el mantenimiento básico (aceite y filtro).",
        "Sustitución de filtro de aire de admisión de motor.",
        "Sustitución de filtro de habitáculo / polen (carbón activo antialérgenos).",
        "Cambio de líquido de frenos DOT4 por absorción de humedad e higrometría.",
        "Sustitución de bujías en motores de gasolina o revisión de calentadores diésel.",
        "Comprobación de holguras de silentblocks, rótulas de dirección y guardapolvos."
      ],
      priceHint: "Desde 140€",
      rec: "Previene la pérdida de potencia y el consumo excesivo de combustible."
    },
    "90": {
      title: "Revisión Profunda (90.000 - 120.000 km / 4-5 Años)",
      items: [
        "Inspección o sustitución preventiva de kit de distribución y rodillos según ficha técnica.",
        "Sustitución de bomba de agua y líquido refrigerante orgánico de larga duración.",
        "Sustitución de correa auxiliar de accesorios y tensor dinámico.",
        "Cambio de filtro de combustible (gasoil o gasolina).",
        "Diagnosis electrónica completa de inyectores y filtro de partículas DPF.",
        "Inspección de eficacia de amortiguadores y discos de freno."
      ],
      priceHint: "Presupuesto personalizado según motorización",
      rec: "La operación más crítica para la vida útil del motor. Evita roturas catastróficas."
    },
    "150": {
      title: "Mantenimiento Alto Kilometraje (+150.000 km)",
      items: [
        "Revisión de embrague, volante bimasa y recorrido de bombín hidráulico.",
        "Comprobación de catalizador, recirculación de gases EGR y carbonilla en admisión.",
        "Limpieza y comprobación de circuito de refrigeración y termostato.",
        "Reemplazo de amortiguadores y copelas de suspensión.",
        "Comprobación de alternador, estado de la batería y motor de arranque.",
        "Diagnosis completa de compresión y posibles pérdidas de aceite por retenes."
      ],
      priceHint: "Diagnosis inicial gratuita con la reparación",
      rec: "Mantiene tu coche seguro, suave y fiable para seguir sumando miles de kilómetros."
    }
  };

  const kmTabBtns = document.querySelectorAll('.km-tab-btn');
  const kmContentPanel = document.getElementById('kmContentPanel');

  function renderKmContent(kmKey) {
    const data = kmData[kmKey];
    if (!data || !kmContentPanel) return;

    kmContentPanel.innerHTML = `
      <div class="km-grid">
        <div>
          <h3 class="pane-title">${data.title}</h3>
          <p class="pane-desc">${data.rec}</p>
          <ul class="km-list">
            ${data.items.map(item => `
              <li class="km-item">
                <span class="km-item-bullet">✓</span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="km-action-box">
          <div>
            <div class="text-xs text-muted font-bold uppercase">Estimación orientativa</div>
            <div class="font-bold mt-2" style="font-size: 1.3rem; color: var(--color-amber);">${data.priceHint}</div>
            <p class="text-xs text-muted mt-2">Piezas con garantía oficial europea de 1 año.</p>
          </div>
          <div class="mt-4">
            <a href="#asistente-presupuesto" class="btn btn-primary btn-block">
              Pedir Cita para Esta Revisión
            </a>
          </div>
        </div>
      </div>
    `;
  }

  if (kmTabBtns.length > 0 && kmContentPanel) {
    // Initial render
    renderKmContent("15");

    kmTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        kmTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const kmKey = btn.getAttribute('data-km');
        renderKmContent(kmKey);
      });
    });
  }
});
