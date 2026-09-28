document.addEventListener('DOMContentLoaded', () => {
  // Set default date for reservation
  const fechaInput = document.getElementById('fecha');
  if (fechaInput) {
    const today = new Date().toISOString().split('T')[0];
    fechaInput.min = today;
    fechaInput.value = today;
  }

  // Menu tabs filtering
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.menu-card');
  function filterMenu(category) {
    cards.forEach(card => {
      if (card.dataset.cat === category) {
        card.style.display = '';
        card.removeAttribute('data-vis');
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          card.style.display = 'none';
          card.setAttribute('data-vis', '0');
        }, 180);
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(btn => btn.classList.remove('active'));
      tab.classList.add('active');
      filterMenu(tab.dataset.tab);
    });
  });

  // Initial filter state
  filterMenu('tapas');
  cards.forEach(card => {
    card.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
  });

  // Reservation form to WhatsApp (+34 699 59 90 53)
  const form = document.getElementById('reservaForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
      const personas = document.getElementById('personas').value;
      const zona = document.getElementById('zona').value;
      const notas = document.getElementById('notas').value.trim();

      if (!nombre) {
        alert('Por favor, indica tu nombre para la reserva.');
        return;
      }

      let msg = `Hola Restaurante María Magdalena, buenas tardes 🍷🥘\n\nQuisiera reservar una mesa:\n\n`;
      msg += `👤 Nombre: ${nombre}\n`;
      msg += `📅 Fecha: ${fecha}\n`;
      msg += `⏰ Hora: ${hora}\n`;
      msg += `👥 Comensales: ${personas}\n`;
      msg += `📍 Zona: ${zona}\n`;
      if (notas) {
        msg += `📝 Observaciones: ${notas}\n`;
      }
      msg += `\n¿Tienen disponibilidad? ¡Muchas gracias!`;

      const waUrl = `https://wa.me/34699599053?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.feature-card, .review-card, .chip').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = '.reveal-in{opacity:1!important;transform:translateY(0)!important}';
  document.head.appendChild(style);
});
