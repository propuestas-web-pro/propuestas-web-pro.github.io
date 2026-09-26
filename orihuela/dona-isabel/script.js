// ===== Doña Isabel — Interactive Script =====
document.addEventListener('DOMContentLoaded', () => {

  // --- Menu Category Tabs ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const menuCards = document.querySelectorAll('.menu-item-card');

  function filterMenu(category) {
    menuCards.forEach(card => {
      if (card.dataset.category === category) {
        card.style.display = '';
        card.removeAttribute('data-visible');
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
          card.style.display = 'none';
          card.setAttribute('data-visible', 'false');
        }, 200);
      }
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterMenu(btn.dataset.tab);
    });
  });

  // Init: show arroces
  filterMenu('arroces');

  // Add transition to cards
  menuCards.forEach(card => {
    card.style.transition = 'opacity .25s ease, transform .25s ease';
  });

  // --- Booking Form → WhatsApp ---
  const form = document.getElementById('bookingForm');
  if (form) {
    // Set min date to today
    const dateInput = document.getElementById('bookDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
      dateInput.value = today;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const date = document.getElementById('bookDate').value;
      const time = document.getElementById('bookTime').value;
      const guests = document.getElementById('guests').value;
      const location = document.getElementById('locationPref').value;
      const preOrder = document.getElementById('preOrder').value;
      const notes = document.getElementById('notes').value.trim();

      if (!name || !date || !time) {
        alert('Por favor, rellena al menos tu nombre, fecha y hora.');
        return;
      }

      // Format date
      const [y, m, d] = date.split('-');
      const dateFormatted = `${d}/${m}/${y}`;

      let msg = `Hola Karina, buenas tardes 👋\n\n`;
      msg += `Quisiera reservar mesa en Doña Isabel:\n\n`;
      msg += `👤 Nombre: ${name}\n`;
      msg += `📅 Fecha: ${dateFormatted}\n`;
      msg += `🕐 Hora: ${time}\n`;
      msg += `👥 Comensales: ${guests}\n`;
      msg += `📍 Mesa: ${location}\n`;

      if (preOrder && preOrder !== 'Sin encargo previo (elegir en mesa)') {
        msg += `\n🥘 Pre-encargo: ${preOrder}\n`;
      }

      if (notes) {
        msg += `\n📝 Notas: ${notes}\n`;
      }

      msg += `\n¡Muchas gracias!`;

      const waUrl = `https://wa.me/34617700635?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    });
  }

  // --- Smooth Scroll for anchors ---
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Scroll Reveal Animation ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.feature-box, .review-card, .menu-item-card, .stat-item, .structure-col').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

  // CSS class for reveal
  const style = document.createElement('style');
  style.textContent = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);

  // --- Header bg on scroll ---
  const header = document.querySelector('.main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.borderBottomColor = window.scrollY > 40
        ? 'rgba(196,164,116,0.18)'
        : 'rgba(196,164,116,0.12)';
    }, { passive: true });
  }
});
