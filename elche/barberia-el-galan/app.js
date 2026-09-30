/**
 * El Galán Barbershop - Awwwards Motion & Interaction Architecture
 * Powered by GSAP, ScrollTrigger, Touch Slider & Haptic Operative Engine.
 */

const app = {
  state: {
    service: {
      name: 'Skin Fade / Degradado',
      price: 20,
      duration: 45
    },
    barber: 'Primer hueco libre (Más rápido)',
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
    this.setupGSAP();
    this.setupBeforeAfterSlider();
    this.setupServicesFilter();
    this.generateCalendarDays();
    this.updateSummaryCard();
  },

  // 1. GSAP Motion Choreography
  setupGSAP() {
    if (typeof gsap === 'undefined') return;

    // Register ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero Entry Animation (Staggered Heavy Fade-Up)
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo('.eyebrow-tag', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
    )
    .fromTo('.hero-h1', 
      { opacity: 0, y: 40, scale: 0.98 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1 }, 
      '-=0.5'
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      '-=0.6'
    )
    .fromTo('.hero-actions', 
      { opacity: 0, y: 25 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      '-=0.6'
    )
    .fromTo('.hero-credentials-bar', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      '-=0.5'
    );

    // Parallax background on scroll
    const heroBg = document.getElementById('hero-bg-img');
    if (heroBg && typeof ScrollTrigger !== 'undefined') {
      gsap.to(heroBg, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // Staggered Scroll Reveal for Bezel Shells
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.utils.toArray('.bezel-shell').forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
  },

  // 2. Interactive Before & After Transformation Slider
  setupBeforeAfterSlider() {
    const frame = document.getElementById('before-after-frame');
    const beforeLayer = document.getElementById('before-layer');
    const handle = document.getElementById('slider-handle');
    if (!frame || !beforeLayer || !handle) return;

    let isDragging = false;

    const setPosition = (clientX) => {
      const rect = frame.getBoundingClientRect();
      let percent = ((clientX - rect.left) / rect.width) * 100;
      if (percent < 5) percent = 5;
      if (percent > 95) percent = 95;

      beforeLayer.style.width = `${percent}%`;
      handle.style.left = `${percent}%`;
    };

    // Pointer events for desktop mouse and mobile touch
    frame.addEventListener('pointerdown', (e) => {
      isDragging = true;
      frame.setPointerCapture(e.pointerId);
      setPosition(e.clientX);
    });

    frame.addEventListener('pointermove', (e) => {
      if (isDragging) {
        setPosition(e.clientX);
      }
    });

    frame.addEventListener('pointerup', (e) => {
      isDragging = false;
      try { frame.releasePointerCapture(e.pointerId); } catch (_) {}
    });

    frame.addEventListener('pointercancel', () => {
      isDragging = false;
    });
  },

  // 3. Mobile Takeover Menu Toggle
  toggleMenu() {
    document.body.classList.toggle('menu-active');
  },

  // 4. Services Filter Tabs
  setupServicesFilter() {
    const tabsContainer = document.getElementById('services-tabs');
    const catalog = document.getElementById('services-catalog');
    if (!tabsContainer || !catalog) return;

    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-pill');
      if (!btn) return;

      tabsContainer.querySelectorAll('.tab-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.cat;
      const items = catalog.querySelectorAll('.service-item-shell');

      items.forEach(item => {
        if (cat === 'all' || item.dataset.cat === cat) {
          item.style.display = 'block';
          gsap.fromTo(item, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
        } else {
          item.style.display = 'none';
        }
      });
    });
  },

  // 5. Select Service from Catalog and Jump
  selectAndJump(name, price, duration) {
    this.state.service = { name, price, duration };
    this.showToast(`Elegido: ${name}`);

    // Update Step 1 active card
    document.querySelectorAll('.service-options-list .bezel-selectable').forEach(card => {
      const title = card.querySelector('strong')?.textContent;
      if (title && (title.includes(name) || name.includes(title))) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });

    this.updateSummaryCard();
    this.setStep(2);

    const bookingEl = document.getElementById('reservas');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  },

  // 6. 4-Step Interactive Engine
  setStep(stepNum) {
    this.state.currentStep = stepNum;

    for (let i = 1; i <= 4; i++) {
      const indicator = document.getElementById(`indicator-${i}`);
      const pane = document.getElementById(`pane-${i}`);

      if (indicator && pane) {
        if (i === stepNum) {
          indicator.className = 'indicator-step active';
          pane.classList.add('active');
        } else if (i < stepNum) {
          indicator.className = 'indicator-step completed';
          pane.classList.remove('active');
        } else {
          indicator.className = 'indicator-step';
          pane.classList.remove('active');
        }
      }
    }

    this.updateSummaryCard();
  },

  pickService(name, price, duration, el) {
    this.state.service = { name, price, duration };
    if (el && el.parentElement) {
      el.parentElement.querySelectorAll('.bezel-selectable').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
    }
    this.showToast(`${name} (${price}€)`);
    this.updateSummaryCard();
  },

  pickBarber(name, el) {
    this.state.barber = name;
    if (el && el.parentElement) {
      el.parentElement.querySelectorAll('.bezel-selectable').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
    }
    this.showToast(`Barbero: ${name}`);
    this.updateSummaryCard();
  },

  generateCalendarDays() {
    const strip = document.getElementById('days-strip');
    if (!strip) return;

    strip.innerHTML = '';
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    const today = new Date();
    let daysAdded = 0;
    let offset = 0;

    while (daysAdded < 8) {
      const d = new Date();
      d.setDate(today.getDate() + offset);
      offset++;

      const dayOfWeek = d.getDay();
      if (dayOfWeek === 0) continue; // Sunday closed

      const dayName = dayNames[dayOfWeek];
      const dayNum = d.getDate();
      const monthName = monthNames[d.getMonth()];
      const dateString = `${dayName} ${dayNum} ${monthName}`;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `day-chip-btn ${daysAdded === 0 ? 'selected' : ''}`;
      btn.innerHTML = `
        <span style="font-size: 0.7rem; text-transform: uppercase;">${dayName}</span>
        <span style="font-size: 1.25rem; font-weight: 800; margin: 2px 0;">${dayNum}</span>
        <span style="font-size: 0.65rem; opacity: 0.8;">${monthName}</span>
      `;

      if (daysAdded === 0) {
        this.state.date = dateString;
        this.renderTimeSlots(dayOfWeek);
      }

      btn.addEventListener('click', () => {
        strip.querySelectorAll('.day-chip-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.state.date = dateString;
        this.renderTimeSlots(dayOfWeek);
        this.updateSummaryCard();
      });

      strip.appendChild(btn);
      daysAdded++;
    }
  },

  renderTimeSlots(dayOfWeek) {
    const container = document.getElementById('slots-flow');
    const label = document.getElementById('label-turnos');
    if (!container) return;

    container.innerHTML = '';

    let slots = [];
    if (dayOfWeek === 6) {
      // Saturday
      slots = ['09:00', '09:45', '10:30', '11:15', '12:00', '12:45', '13:30'];
      if (label) label.textContent = 'Sábado (09:00 - 14:00)';
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
      btn.className = `time-pill-btn ${idx === 3 || (slots.length > 5 && time === '17:30') ? 'selected' : ''}`;
      btn.textContent = time;

      if (btn.classList.contains('selected')) {
        this.state.time = time;
      }

      btn.addEventListener('click', () => {
        container.querySelectorAll('.time-pill-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.state.time = time;
        this.showToast(`Hora: ${time}`);
        this.updateSummaryCard();
      });

      container.appendChild(btn);
    });
  },

  updateSummaryCard() {
    const sService = document.getElementById('card-service');
    const sBarber = document.getElementById('card-barber');
    const sDatetime = document.getElementById('card-datetime');
    const sPrice = document.getElementById('card-price');

    if (sService) sService.textContent = `${this.state.service.name} (${this.state.service.duration} min)`;
    if (sBarber) sBarber.textContent = this.state.barber;
    if (sDatetime) sDatetime.textContent = `${this.state.date || 'Hoy'} a las ${this.state.time || '17:30'}`;
    if (sPrice) sPrice.textContent = `${this.state.service.price},00 €`;
  },

  handleBookingSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('client-name')?.value.trim();
    const phone = document.getElementById('client-phone')?.value.trim();
    const notes = document.getElementById('client-notes')?.value.trim();

    if (!name || !phone) {
      alert('Por favor, indica tu nombre y teléfono.');
      return;
    }

    this.state.client = { name, phone, notes };

    // Format WhatsApp message for owner (+34 658 74 36 09)
    const msg = 
`💈 *NUEVA CITA - BARBERÍA EL GALÁN* 💈
----------------------------------
✂️ *Servicio:* ${this.state.service.name} (${this.state.service.price}€)
⏱️ *Duración:* ${this.state.service.duration} min
💈 *Especialista:* ${this.state.barber}
📅 *Fecha:* ${this.state.date} a las ${this.state.time}
📍 *Lugar:* Carrer Bisbe Winibal, 12, Elche

👤 *Cliente:* ${name}
📞 *Teléfono:* ${phone}
${notes ? `📝 *Nota:* ${notes}` : ''}
----------------------------------
_Mensaje generado desde la web oficial de El Galán Barbershop_`;

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/34658743609?text=${encoded}`;

    const desc = document.getElementById('modal-desc');
    const btn = document.getElementById('modal-wa-button');

    if (desc) {
      desc.innerHTML = `
        <strong>${name}</strong>, tu cita para <strong>${this.state.service.name}</strong> 
        el día <strong>${this.state.date} a las ${this.state.time}</strong> está configurada.<br><br>
        Toca el botón para enviar los datos directamente a la barbería por WhatsApp.
      `;
    }

    if (btn) btn.href = waUrl;

    const modal = document.getElementById('booking-modal');
    if (modal) modal.classList.add('open');
  },

  closeModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) modal.classList.remove('open');
  },

  // 7. FAQ Accordion
  toggleFaq(btn) {
    const item = btn.closest('.faq-card-item');
    const drawer = item.querySelector('.faq-content-drawer');
    const isOpen = item.classList.contains('active');

    document.querySelectorAll('.faq-card-item').forEach(i => {
      i.classList.remove('active');
      const d = i.querySelector('.faq-content-drawer');
      if (d) d.style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('active');
      drawer.style.maxHeight = drawer.scrollHeight + 'px';
    }
  },

  // 8. Toast
  showToast(text) {
    const toast = document.getElementById('toast-pill');
    const tText = document.getElementById('toast-text');
    if (!toast || !tText) return;

    tText.textContent = text;
    toast.classList.add('active');

    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      toast.classList.remove('active');
    }, 2200);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
