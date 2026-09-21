/**
 * CLÍNICA FISIO ACTÚA - ALICANTE
 * Interactive Pain Triage Wizard & Appointment Booking Automation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Footer Year
  const currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Date picker initialization (Monday to Friday)
  const visitDateInput = document.getElementById('visitDate');
  if (visitDateInput) {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(nextDay.getDate() + 1);

    // If Saturday (6) jump to Monday (1)
    if (nextDay.getDay() === 6) nextDay.setDate(nextDay.getDate() + 2);
    // If Sunday (0) jump to Monday (1)
    if (nextDay.getDay() === 0) nextDay.setDate(nextDay.getDate() + 1);

    const yyyy = nextDay.getFullYear();
    const mm = String(nextDay.getMonth() + 1).padStart(2, '0');
    const dd = String(nextDay.getDate()).padStart(2, '0');
    visitDateInput.min = `${yyyy}-${mm}-${dd}`;
    visitDateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Mobile Drawer
  const menuBtn = document.getElementById('menuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const dNavs = document.querySelectorAll('.d-nav');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', openDrawer);
    drawerCloseBtn.addEventListener('click', closeDrawer);
    dNavs.forEach(n => n.addEventListener('click', closeDrawer));
  }

  /* -------------------------------------------------------------------------- */
  /* Triage Stepper Logic                                                       */
  /* -------------------------------------------------------------------------- */
  const tStep1 = document.getElementById('tStep1');
  const tStep2 = document.getElementById('tStep2');
  const tStep3 = document.getElementById('tStep3');

  const triagePane1 = document.getElementById('triagePane1');
  const triagePane2 = document.getElementById('triagePane2');
  const triagePane3 = document.getElementById('triagePane3');

  const btnNextToStep2 = document.getElementById('btnNextToStep2');
  const btnBackToStep1 = document.getElementById('btnBackToStep1');
  const btnNextToStep3 = document.getElementById('btnNextToStep3');
  const btnBackToStep2 = document.getElementById('btnBackToStep2');
  const btnSubmitTriage = document.getElementById('btnSubmitTriage');

  function goToStep(step) {
    triagePane1.classList.remove('active');
    triagePane2.classList.remove('active');
    triagePane3.classList.remove('active');

    tStep1.classList.remove('active');
    tStep2.classList.remove('active');
    tStep3.classList.remove('active');

    if (step === 1) {
      triagePane1.classList.add('active');
      tStep1.classList.add('active');
    } else if (step === 2) {
      triagePane2.classList.add('active');
      tStep1.classList.add('active');
      tStep2.classList.add('active');
    } else if (step === 3) {
      triagePane3.classList.add('active');
      tStep1.classList.add('active');
      tStep2.classList.add('active');
      tStep3.classList.add('active');
      updateClinicalSummary();
    }
  }

  if (btnNextToStep2) btnNextToStep2.addEventListener('click', () => goToStep(2));
  if (btnBackToStep1) btnBackToStep1.addEventListener('click', () => goToStep(1));
  if (btnNextToStep3) btnNextToStep3.addEventListener('click', () => goToStep(3));
  if (btnBackToStep2) btnBackToStep2.addEventListener('click', () => goToStep(2));

  /* -------------------------------------------------------------------------- */
  /* Clinical Summary & WhatsApp Generation                                     */
  /* -------------------------------------------------------------------------- */
  function getSelectedZone() {
    const radio = document.querySelector('input[name="body_zone"]:checked');
    return radio ? radio.value : 'Columna Vertebral';
  }

  function getSelectedTreatment() {
    const radio = document.querySelector('input[name="recommended_treatment"]:checked');
    return radio ? radio.value : 'Fisioterapia Manual';
  }

  function updateClinicalSummary() {
    const zone = getSelectedZone();
    const treatment = getSelectedTreatment();
    const date = visitDateInput ? visitDateInput.value : 'Próxima fecha';
    const time = document.getElementById('visitTime').value;
    const notes = document.getElementById('symptomNotes').value.trim() || 'Sin notas adicionales';

    const clinicalSummaryBody = document.getElementById('clinicalSummaryBody');
    if (clinicalSummaryBody) {
      clinicalSummaryBody.innerHTML = `
        <div class="cs-row"><strong>Zona dolor:</strong> <span>${zone}</span></div>
        <div class="cs-row"><strong>Tratamiento:</strong> <span>${treatment}</span></div>
        <div class="cs-row"><strong>Día y Franja:</strong> <span>${date} — ${time}</span></div>
        <div class="cs-row"><strong>Síntomas:</strong> <span>${notes}</span></div>
      `;
    }
  }

  // Modal and Submission
  const triageModal = document.getElementById('triageModal');
  const btnCloseTriageModal = document.getElementById('btnCloseTriageModal');
  const btnOpenWhatsAppClinic = document.getElementById('btnOpenWhatsAppClinic');
  const triagePreviewText = document.getElementById('triagePreviewText');

  if (btnSubmitTriage) {
    btnSubmitTriage.addEventListener('click', () => {
      const patientName = document.getElementById('patientName').value.trim();
      const patientPhone = document.getElementById('patientPhone').value.trim();

      if (!patientName || !patientPhone) {
        alert('Por favor indica tu nombre y teléfono móvil para que la clínica pueda coordinar y confirmar tu turno de tratamiento.');
        return;
      }

      const zone = getSelectedZone();
      const treatment = getSelectedTreatment();
      const date = visitDateInput.value;
      const time = document.getElementById('visitTime').value;
      const notes = document.getElementById('symptomNotes').value.trim() || 'Sin observaciones previas';

      const clinicalReport = 
`*SOLICITUD DE CITA / TRIAJE - CLÍNICA FISIO ACTÚA*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Paciente:* ${patientName}
📞 *Teléfono:* ${patientPhone}
📍 *Zona de dolor:* ${zone}
🩺 *Sesión solicitada:* ${treatment}
📅 *Fecha preferente:* ${date}
⏰ *Franja horaria:* ${time}
📝 *Evolución / Síntomas:*
"${notes}"
━━━━━━━━━━━━━━━━━━━━━━
_Enviado desde el asistente clínico de Clínica Fisio Actúa (C. Capitán Gral. Gutiérrez Mellado 6, Alicante)_`;

      const encoded = encodeURIComponent(clinicalReport);
      const waLink = `https://wa.me/34636838807?text=${encoded}`;

      if (triagePreviewText) {
        triagePreviewText.textContent = clinicalReport;
      }
      if (btnOpenWhatsAppClinic) {
        btnOpenWhatsAppClinic.href = waLink;
      }

      triageModal.classList.add('open');
    });
  }

  if (btnCloseTriageModal) {
    btnCloseTriageModal.addEventListener('click', () => triageModal.classList.remove('open'));
  }

  if (triageModal) {
    triageModal.addEventListener('click', (e) => {
      if (e.target === triageModal) triageModal.classList.remove('open');
    });
  }
});
