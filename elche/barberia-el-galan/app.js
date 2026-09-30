/**
 * El Galán Barbershop - Logic & Interactive Engine
 * Designed for frictionless UX, smooth animations and direct conversion.
 */

const app = {
  state: {
    service: {
      name: 'Skin Fade / Degradado de Alta Precisión',
      price: 20,
      duration: 45
    },
    barber: 'Cualquiera disponible (Más rápido)',
    date: null,
    time: '17:30',
    client: {
      name: '',
      phone: '',
      notes: ''
    },
    currentStep: 1
  },

  init() {
    this.setupNavigation();
    this.setupServicesFilter();
    this.generateCalendarDays();
    this.updateSummary();
  },

  // 1. Navigation handling
  setupNavigation() {
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        document.body.classList.toggle('mobile-nav-active');
      });
    }

    // Close mobile nav on click
    navMenu?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('mobile-nav-active');
      });
    });
  },

  // 2. Services Filter Tabs
  setupServicesFilter() {
    const filterContainer = document.getElementById('services-filter');
    const grid = document.getElementById('services-grid');
    if (!filterContainer || !grid) return;

    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;

      filterContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const cards = grid.querySelectorAll('.service-card');

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  },

  // 3. Quick Select from Menu Catalog
  selectServiceAndGo(name, price, duration) {
    this.state.service = { name, price, duration };
    this.showToast(`Has seleccionado: ${name}`);

    // Update Step 1 active card
    const list = document.getElementById('booking-services-selection');
    if (list) {
      list.querySelectorAll('.selectable-card').forEach(card => {
        const title = card.querySelector('h4')?.textContent;
        if (title && (title.includes(name) || name.includes(title))) {
          card.classList.add('selected');
        } else {
          card.classList.remove('selected');
        }
      });
    }

    this.updateSummary();
    this.goToStep(2);

    // Smooth scroll to booking
    const bookingSec = document.getElementById('reservas');
    if (bookingSec) {
      bookingSec.scrollIntoView({ behavior: 'smooth' });
    }
  },

  // 4. Booking Step Navigation
  goToStep(stepNumber) {
    this.state.currentStep = stepNumber;

    // Update progress indicator
    for (let i = 1; i <= 4; i++) {
      const indicator = document.getElementById(`step-indicator-${i}`);
      const content = document.getElementById(`step-${i}`);

      if (indicator && content) {
        if (i === stepNumber) {
          indicator.className = 'step-item active';
          content.classList.add('active');
        } else if (i < stepNumber) {
          indicator.className = 'step-item completed';
          content.classList.remove('active');
        } else {
          indicator.className = 'step-item';
          content.classList.remove('active');
        }
      }
    }

    this.updateSummary();
  },

  // Step 1: Set service
  setBookingService(name, price, duration, el) {
    this.state.service = { name, price, duration };
    if (el && el.parentElement) {
      el.parentElement.querySelectorAll('.selectable-card').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
    }
    this.showToast(`Servicio: ${name} (${price}€)`);
    this.updateSummary();
  },

  // Step 2: Set barber
  setBarber(name, el) {
    this.state.barber = name;
    if (el && el.parentElement) {
      el.parentElement.querySelectorAll('.selectable-card').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
    }
    this.showToast(`Profesional: ${name}`);
    this.updateSummary();
  },

  // Step 3: Calendar Days and Time Slots
  generateCalendarDays() {
    const daysContainer = document.getElementById('days-container');
    if (!daysContainer) return;

    daysContainer.innerHTML = '';
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    const today = new Date();
    let daysAdded = 0;
    let offset = 0;

    while (daysAdded < 8) {
      const d = new Date();
      d.setDate(today.getDate() + offset);
      offset++;

      const dayOfWeek = d.getDay(); // 0 is Sunday
      if (dayOfWeek === 0) continue; // Closed on Sundays

      const dayName = dayNames[dayOfWeek];
      const dayNum = d.getDate();
      const monthName = monthNames[d.getMonth()];
      const dateString = `${dayName} ${dayNum} ${monthName}`;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `day-btn ${daysAdded === 0 ? 'selected' : ''}`;
      btn.innerHTML = `
        <span class="day-name">${dayName}</span>
        <span class="day-number">${dayNum}</span>
        <span style="font-size: 0.65rem; color: inherit; opacity: 0.8;">${monthName}</span>
      `;

      if (daysAdded === 0) {
        this.state.date = dateString;
        this.renderTimeSlots(dayOfWeek);
      }

      btn.addEventListener('click', () => {
        daysContainer.querySelectorAll('.day-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.state.date = dateString;
        this.renderTimeSlots(dayOfWeek);
        this.updateSummary();
      });

      daysContainer.appendChild(btn);
      daysAdded++;
    }
  },

  renderTimeSlots(dayOfWeek) {
    const slotsContainer = document.getElementById('time-slots-container');
    const label = document.getElementById('selected-day-label');
    if (!slotsContainer) return;

    slotsContainer.innerHTML = '';

    // Schedule:
    // Mon-Fri: 09:30-13:30 and 16:00-20:30
    // Sat: 09:00-14:00
    let slots = [];
    if (dayOfWeek === 6) {
      // Saturday
      slots = ['09:00', '09:45', '10:30', '11:15', '12:00', '12:45', '13:30'];
      if (label) label.textContent = 'Horario de Sábado (09:00 - 14:00)';
    } else {
      // Weekdays
      slots = [
        '09:30', '10:15', '11:00', '11:45', '12:30',
        '16:00', '16:45', '17:30', '18:15', '19:00', '19:45'
      ];
      if (label) label.textContent = 'Turnos Mañana y Tarde';
    }

    slots.forEach((time, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `time-slot-btn ${idx === 3 || (slots.length > 5 && time === '17:30') ? 'selected' : ''}`;
      btn.textContent = time;

      if (btn.classList.contains('selected')) {
        this.state.time = time;
      }

      btn.addEventListener('click', () => {
        slotsContainer.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.state.time = time;
        this.showToast(`Hora elegida: ${time}`);
        this.updateSummary();
      });

      slotsContainer.appendChild(btn);
    });
  },

  // 5. Update summary fields
  updateSummary() {
    const sService = document.getElementById('summary-service');
    const sBarber = document.getElementById('summary-barber');
    const sDatetime = document.getElementById('summary-datetime');
    const sPrice = document.getElementById('summary-price');

    if (sService) sService.textContent = `${this.state.service.name} (${this.state.service.duration} min)`;
    if (sBarber) sBarber.textContent = this.state.barber;
    if (sDatetime) sDatetime.textContent = `${this.state.date || 'Hoy'} a las ${this.state.time || '17:30'}`;
    if (sPrice) sPrice.textContent = `${this.state.service.price},00 €`;
  },

  // 6. Submit Booking & Open WhatsApp
  submitBooking(e) {
    e.preventDefault();
    const name = document.getElementById('client-name')?.value.trim();
    const phone = document.getElementById('client-phone')?.value.trim();
    const notes = document.getElementById('client-notes')?.value.trim();

    if (!name || !phone) {
      alert('Por favor, indica tu nombre y teléfono de contacto.');
      return;
    }

    this.state.client = { name, phone, notes };

    // Format WhatsApp message to owner (658 74 36 09)
    const msg = 
`💈 *NUEVA CITA - BARBERÍA EL GALÁN* 💈
----------------------------------
✂️ *Servicio:* ${this.state.service.name} (${this.state.service.price}€)
⏱️ *Duración:* ${this.state.service.duration} min
💈 *Especialista:* ${this.state.barber}
📅 *Fecha y Hora:* ${this.state.date} a las ${this.state.time}
📍 *Lugar:* Carrer Bisbe Winibal, 12, Elche

👤 *Cliente:* ${name}
📞 *Teléfono:* ${phone}
${notes ? `📝 *Nota:* ${notes}` : ''}
----------------------------------
_Mensaje generado desde la web oficial de El Galán Barbershop_`;

    const encodedMsg = encodeURIComponent(msg);
    const waUrl = `https://wa.me/34658743609?text=${encodedMsg}`;

    // Update modal
    const modalText = document.getElementById('modal-details-text');
    const modalLink = document.getElementById('modal-whatsapp-link');

    if (modalText) {
      modalText.innerHTML = `
        <strong>${name}</strong>, tu turno para <strong>${this.state.service.name}</strong> 
        el día <strong>${this.state.date} a las ${this.state.time}</strong> está listo.<br><br>
        Haz clic en el botón inferior para abrir WhatsApp y enviar los detalles directamente a la barbería.
      `;
    }

    if (modalLink) {
      modalLink.href = waUrl;
    }

    this.openModal();
  },

  openModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.classList.add('open');
  },

  closeModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.classList.remove('open');
  },

  // 7. FAQ Accordion Toggle
  toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      const a = i.querySelector('.faq-answer');
      if (a) a.style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  },

  // 8. Toast Helper
  showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
