/**
 * BARBERSHOP CLUB 13 - ALICANTE
 * Interactive Booking Wizard & WhatsApp Automation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Footer Year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Date picker initialization (Tuesday to Saturday)
  const bookDateInput = document.getElementById('bookDate');
  if (bookDateInput) {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(nextDay.getDate() + 1);

    // If Sunday (0) or Monday (1), jump to Tuesday (2)
    if (nextDay.getDay() === 0) nextDay.setDate(nextDay.getDate() + 2);
    if (nextDay.getDay() === 1) nextDay.setDate(nextDay.getDate() + 1);

    const yyyy = nextDay.getFullYear();
    const mm = String(nextDay.getMonth() + 1).padStart(2, '0');
    const dd = String(nextDay.getDate()).padStart(2, '0');
    bookDateInput.min = `${yyyy}-${mm}-${dd}`;
    bookDateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Mobile Drawer
  const navToggle = document.getElementById('navToggle');
  const drawer = document.getElementById('drawer');
  const drawerClose = document.getElementById('drawerClose');
  const dLinks = document.querySelectorAll('.d-link');

  function openDrawer() {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (navToggle && drawer) {
    navToggle.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    dLinks.forEach(l => l.addEventListener('click', closeDrawer));
  }

  /* -------------------------------------------------------------------------- */
  /* Stepper Logic                                                              */
  /* -------------------------------------------------------------------------- */
  const stepBadge1 = document.getElementById('stepBadge1');
  const stepBadge2 = document.getElementById('stepBadge2');
  const stepBadge3 = document.getElementById('stepBadge3');

  const paneStep1 = document.getElementById('paneStep1');
  const paneStep2 = document.getElementById('paneStep2');
  const paneStep3 = document.getElementById('paneStep3');

  const btnGoToStep2 = document.getElementById('btnGoToStep2');
  const btnBackToStep1 = document.getElementById('btnBackToStep1');
  const btnGoToStep3 = document.getElementById('btnGoToStep3');
  const btnBackToStep2 = document.getElementById('btnBackToStep2');
  const btnSubmitBooking = document.getElementById('btnSubmitBooking');

  function goToStep(step) {
    paneStep1.classList.remove('active');
    paneStep2.classList.remove('active');
    paneStep3.classList.remove('active');

    stepBadge1.classList.remove('active');
    stepBadge2.classList.remove('active');
    stepBadge3.classList.remove('active');

    if (step === 1) {
      paneStep1.classList.add('active');
      stepBadge1.classList.add('active');
    } else if (step === 2) {
      paneStep2.classList.add('active');
      stepBadge1.classList.add('active');
      stepBadge2.classList.add('active');
    } else if (step === 3) {
      paneStep3.classList.add('active');
      stepBadge1.classList.add('active');
      stepBadge2.classList.add('active');
      stepBadge3.classList.add('active');
      updateTicketSummary();
    }
  }

  if (btnGoToStep2) btnGoToStep2.addEventListener('click', () => goToStep(2));
  if (btnBackToStep1) btnBackToStep1.addEventListener('click', () => goToStep(1));
  if (btnGoToStep3) btnGoToStep3.addEventListener('click', () => goToStep(3));
  if (btnBackToStep2) btnBackToStep2.addEventListener('click', () => goToStep(2));

  /* -------------------------------------------------------------------------- */
  /* Summary & Confirmation                                                     */
  /* -------------------------------------------------------------------------- */
  function getServiceInfo() {
    const radio = document.querySelector('input[name="selected_service"]:checked');
    if (!radio) return { name: 'Corte de Pelo', price: '18€', duration: '35 min' };
    return {
      name: radio.value,
      price: radio.getAttribute('data-price') || '18€',
      duration: radio.getAttribute('data-duration') || '35 min'
    };
  }

  function getBarberInfo() {
    const radio = document.querySelector('input[name="selected_barber"]:checked');
    return radio ? radio.value : 'Primer Disponible';
  }

  function updateTicketSummary() {
    const service = getServiceInfo();
    const barber = getBarberInfo();
    const date = bookDateInput ? bookDateInput.value : 'Próxima fecha';
    const time = document.getElementById('bookTime').value;

    const ticketBody = document.getElementById('ticketBody');
    if (ticketBody) {
      ticketBody.innerHTML = `
        <div class="ticket-line"><strong>Servicio:</strong> <span>${service.name} (${service.price})</span></div>
        <div class="ticket-line"><strong>Barbero:</strong> <span>${barber}</span></div>
        <div class="ticket-line"><strong>Día y Hora:</strong> <span>${date} — ${time}</span></div>
        <div class="ticket-line"><strong>Duración:</strong> <span>${service.duration}</span></div>
      `;
    }
  }

  // Modal and WhatsApp Submission
  const modalOverlay = document.getElementById('modalOverlay');
  const btnModalClose = document.getElementById('btnModalClose');
  const btnWhatsAppSubmit = document.getElementById('btnWhatsAppSubmit');
  const ticketOutput = document.getElementById('ticketOutput');

  if (btnSubmitBooking) {
    btnSubmitBooking.addEventListener('click', () => {
      const clientName = document.getElementById('clientName').value.trim();
      const clientPhone = document.getElementById('clientPhone').value.trim();

      if (!clientName || !clientPhone) {
        alert('Por favor, introduce tu nombre y número de teléfono para confirmar tu turno.');
        return;
      }

      const service = getServiceInfo();
      const barber = getBarberInfo();
      const date = bookDateInput.value;
      const time = document.getElementById('bookTime').value;

      const formattedMessage = 
`*RESERVA DE CITA - BARBERSHOP CLUB 13*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Cliente:* ${clientName}
📞 *Teléfono:* ${clientPhone}
✂️ *Servicio:* ${service.name} (${service.price})
💈 *Barbero:* ${barber}
📅 *Fecha:* ${date}
⏰ *Turno:* ${time}
⏱️ *Duración estimada:* ${service.duration}
━━━━━━━━━━━━━━━━━━━━━━
_Reserva generada desde la web oficial de Barbershop Club 13 (C. Susana Llaneras 39, Alicante)_`;

      const encoded = encodeURIComponent(formattedMessage);
      const waUrl = `https://wa.me/34681286409?text=${encoded}`;

      if (ticketOutput) {
        ticketOutput.textContent = formattedMessage;
      }
      if (btnWhatsAppSubmit) {
        btnWhatsAppSubmit.href = waUrl;
      }

      modalOverlay.classList.add('open');
    });
  }

  if (btnModalClose) {
    btnModalClose.addEventListener('click', () => modalOverlay.classList.remove('open'));
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('open');
    });
  }
});
