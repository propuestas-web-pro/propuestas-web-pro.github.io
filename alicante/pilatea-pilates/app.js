/**
 * PILATEA PILATES & WELLNESS - ALICANTE
 * Interactive Schedule Quadrant & Trial Class Booking Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Footer Year
  const currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Trial date setup (Monday to Friday)
  const trialDateInput = document.getElementById('trialDate');
  if (trialDateInput) {
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
    trialDateInput.min = `${yyyy}-${mm}-${dd}`;
    trialDateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Mobile Drawer
  const menuBtn = document.getElementById('menuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const dItems = document.querySelectorAll('.d-item');

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
    drawerClose.addEventListener('click', closeDrawer);
    dItems.forEach(item => item.addEventListener('click', closeDrawer));
  }

  /* -------------------------------------------------------------------------- */
  /* Trial Class Wizard Stepper                                                 */
  /* -------------------------------------------------------------------------- */
  const sBadge1 = document.getElementById('sBadge1');
  const sBadge2 = document.getElementById('sBadge2');
  const sBadge3 = document.getElementById('sBadge3');

  const stepSheet1 = document.getElementById('stepSheet1');
  const stepSheet2 = document.getElementById('stepSheet2');
  const stepSheet3 = document.getElementById('stepSheet3');

  const btnNextToStep2 = document.getElementById('btnNextToStep2');
  const btnBackToStep1 = document.getElementById('btnBackToStep1');
  const btnNextToStep3 = document.getElementById('btnNextToStep3');
  const btnBackToStep2 = document.getElementById('btnBackToStep2');
  const btnSubmitTrial = document.getElementById('btnSubmitTrial');

  function goToStep(step) {
    stepSheet1.classList.remove('active');
    stepSheet2.classList.remove('active');
    stepSheet3.classList.remove('active');

    sBadge1.classList.remove('active');
    sBadge2.classList.remove('active');
    sBadge3.classList.remove('active');

    if (step === 1) {
      stepSheet1.classList.add('active');
      sBadge1.classList.add('active');
    } else if (step === 2) {
      stepSheet2.classList.add('active');
      sBadge1.classList.add('active');
      sBadge2.classList.add('active');
    } else if (step === 3) {
      stepSheet3.classList.add('active');
      sBadge1.classList.add('active');
      sBadge2.classList.add('active');
      sBadge3.classList.add('active');
      updateTrialTicket();
    }
  }

  if (btnNextToStep2) btnNextToStep2.addEventListener('click', () => goToStep(2));
  if (btnBackToStep1) btnBackToStep1.addEventListener('click', () => goToStep(1));
  if (btnNextToStep3) btnNextToStep3.addEventListener('click', () => goToStep(3));
  if (btnBackToStep2) btnBackToStep2.addEventListener('click', () => goToStep(2));

  /* -------------------------------------------------------------------------- */
  /* Ticket Summary & WhatsApp Automation                                       */
  /* -------------------------------------------------------------------------- */
  function getSelectedGoal() {
    const radio = document.querySelector('input[name="pilates_goal"]:checked');
    return radio ? radio.value : 'Espalda Sana & Corrección';
  }

  function updateTrialTicket() {
    const goal = getSelectedGoal();
    const exp = document.getElementById('expLevel').value;
    const date = trialDateInput ? trialDateInput.value : 'Próxima fecha';
    const shift = document.getElementById('trialShift').value;

    const trialTicketBody = document.getElementById('trialTicketBody');
    if (trialTicketBody) {
      trialTicketBody.innerHTML = `
        <div class="tt-entry"><strong>Objetivo:</strong> <span>${goal}</span></div>
        <div class="tt-entry"><strong>Experiencia:</strong> <span>${exp}</span></div>
        <div class="tt-entry"><strong>Día y Franja:</strong> <span>${date} — ${shift}</span></div>
      `;
    }
  }

  // Modal and Submission
  const trialModal = document.getElementById('trialModal');
  const btnCloseTrialModal = document.getElementById('btnCloseTrialModal');
  const btnOpenWhatsAppZen = document.getElementById('btnOpenWhatsAppZen');
  const modalTicketPreview = document.getElementById('modalTicketPreview');

  if (btnSubmitTrial) {
    btnSubmitTrial.addEventListener('click', () => {
      const clientName = document.getElementById('clientName').value.trim();
      const clientPhone = document.getElementById('clientPhone').value.trim();

      if (!clientName || !clientPhone) {
        alert('Por favor indica tu nombre y teléfono móvil para que Natalia o Dana puedan coordinar tu clase de prueba.');
        return;
      }

      const goal = getSelectedGoal();
      const exp = document.getElementById('expLevel').value;
      const date = trialDateInput.value;
      const shift = document.getElementById('trialShift').value;

      const trialMessage = 
`*SOLICITUD CLASE DE PRUEBA - PILATEA PILATES*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Alumna:* ${clientName}
📞 *Teléfono:* ${clientPhone}
🎯 *Objetivo:* ${goal}
🧘‍♀️ *Experiencia previa:* ${exp}
📅 *Fecha preferente:* ${date}
⏰ *Franja horaria:* ${shift}
━━━━━━━━━━━━━━━━━━━━━━
_Enviado desde la web oficial de Pilatea Pilates & Wellness (C/ Pintor Cabrera 9, Alicante)_`;

      const encoded = encodeURIComponent(trialMessage);
      const waUrl = `https://wa.me/34644744734?text=${encoded}`;

      if (modalTicketPreview) {
        modalTicketPreview.textContent = trialMessage;
      }
      if (btnOpenWhatsAppZen) {
        btnOpenWhatsAppZen.href = waUrl;
      }

      trialModal.classList.add('open');
    });
  }

  if (btnCloseTrialModal) {
    btnCloseTrialModal.addEventListener('click', () => trialModal.classList.remove('open'));
  }

  if (trialModal) {
    trialModal.addEventListener('click', (e) => {
      if (e.target === trialModal) trialModal.classList.remove('open');
    });
  }

  /* -------------------------------------------------------------------------- */
  /* Schedule Quadrant Data & Tabs                                              */
  /* -------------------------------------------------------------------------- */
  const scheduleData = {
    "lunes": [
      { time: "09:15 - 10:15", name: "Pilates Suelo & Espalda Sana", desc: "Descompresión lumbar, corrección de postura y control del centro abdominal.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "10:30 - 11:30", name: "Pilates Suelo con Implementos", desc: "Trabajo dinámico con aros mágicos y bandas elásticas para tonificación.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "14:15 - 15:15", name: "Pilates Express Mediodía", desc: "Sesión activa para resetear la postura tras la jornada laboral.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "18:00 - 19:00", name: "Pilates Embarazo & Suelo Pélvico", desc: "Cuidado postural, movilidad pélvica y respiración diafragmática.", spots: "Grupo específico" },
      { time: "19:15 - 20:15", name: "Pilates Nivel Intermedio", desc: "Fuerza profunda, fluidez de movimiento y control articular exigente.", spots: "Aforo: Máx. 6 alumnas" }
    ],
    "martes": [
      { time: "09:30 - 10:30", name: "Pilates Terapéutico y Columna", desc: "Alivio de contracturas y trabajo de estabilización escapular.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "11:00 - 12:00", name: "Iniciación y Fundamentos", desc: "Para quienes empiezan desde cero y quieren aprender las bases seguras.", spots: "Ideal principiantes" },
      { time: "17:30 - 18:30", name: "Pilates con Fitball y Rulos", desc: "Equilibrio, propiocepción y liberación miofascial de tensiones.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "19:00 - 20:00", name: "Pilates Espalda Sana y Core", desc: "Fortalecimiento del transverso abdominal y alivio ciático.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "20:15 - 21:15", name: "Pilates Flow y Respiración", desc: "Sesión relajante al final del día para estirar y liberar el estrés.", spots: "Aforo: Máx. 6 alumnas" }
    ],
    "miercoles": [
      { time: "09:15 - 10:15", name: "Pilates Suelo & Espalda Sana", desc: "Descompresión lumbar, corrección de postura y control del centro abdominal.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "10:30 - 11:30", name: "Pilates Suelo con Implementos", desc: "Trabajo dinámico con aros mágicos y bandas elásticas para tonificación.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "14:15 - 15:15", name: "Pilates Express Mediodía", desc: "Sesión activa para resetear la postura tras la jornada laboral.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "18:00 - 19:00", name: "Pilates Postparto & Core", desc: "Rehabilitación abdominal segura y tonificación progresiva.", spots: "Grupo específico" },
      { time: "19:15 - 20:15", name: "Pilates Nivel Intermedio", desc: "Fuerza profunda, fluidez de movimiento y control articular exigente.", spots: "Aforo: Máx. 6 alumnas" }
    ],
    "jueves": [
      { time: "09:30 - 10:30", name: "Pilates Terapéutico y Columna", desc: "Alivio de contracturas y trabajo de estabilización escapular.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "11:00 - 12:00", name: "Iniciación y Fundamentos", desc: "Para quienes empiezan desde cero y quieren aprender las bases seguras.", spots: "Ideal principiantes" },
      { time: "17:30 - 18:30", name: "Pilates con Fitball y Rulos", desc: "Equilibrio, propiocepción y liberación miofascial de tensiones.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "19:00 - 20:00", name: "Pilates Espalda Sana y Core", desc: "Fortalecimiento del transverso abdominal y alivio ciático.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "20:15 - 21:15", name: "Pilates Flow y Respiración", desc: "Sesión relajante al final del día para estirar y liberar el estrés.", spots: "Aforo: Máx. 6 alumnas" }
    ],
    "viernes": [
      { time: "09:30 - 10:30", name: "Pilates Espalda Sana y Estiramientos", desc: "Sesión profunda para soltar la carga muscular acumulada en la semana.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "11:00 - 12:00", name: "Pilates Dinámico con Bandas", desc: "Tonificación suave de piernas, glúteos y brazos con resistencia.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "14:15 - 15:15", name: "Pilates Mediodía Reset", desc: "Cierra la semana de trabajo con la espalda alineada y ligera.", spots: "Aforo: Máx. 6 alumnas" },
      { time: "17:30 - 18:30", name: "Clases de Prueba y Valoración", desc: "Sesiones de bienvenida individualizadas para nuevas alumnas.", spots: "Con cita previa" }
    ]
  };

  const dayTabs = document.querySelectorAll('.day-tab');
  const scheduleGrid = document.getElementById('scheduleGrid');

  function renderSchedule(day) {
    if (!scheduleGrid) return;
    const classes = scheduleData[day] || [];

    scheduleGrid.innerHTML = classes.map(c => `
      <div class="class-card">
        <div>
          <span class="c-time-badge">⏰ ${c.time}</span>
          <h4 class="c-name">${c.name}</h4>
          <p class="c-desc">${c.desc}</p>
        </div>
        <div class="c-spots">👥 ${c.spots}</div>
      </div>
    `).join('');
  }

  if (dayTabs.length > 0) {
    // Initial day
    renderSchedule('lunes');

    dayTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        dayTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const day = tab.getAttribute('data-day');
        renderSchedule(day);
      });
    });
  }
});
