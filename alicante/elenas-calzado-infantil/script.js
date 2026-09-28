document.addEventListener('DOMContentLoaded', () => {
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
  filterMenu('respetuoso');
  cards.forEach(card => {
    card.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
  });

  // Consulta form to WhatsApp (+34 619 65 09 03)
  const form = document.getElementById('consultaForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const tipo = document.getElementById('tipo').value;
      const talla = document.getElementById('talla').value;
      const detalles = document.getElementById('detalles').value.trim();

      if (!nombre) {
        alert('Por favor, indica tu nombre.');
        return;
      }

      let msg = `Hola Elena'S Calzado Infantil, buenas tardes 👟👋\n\nQuisiera consultar disponibilidad de calzado:\n\n`;
      msg += `👤 Nombre: ${nombre}\n`;
      msg += `👞 Tipo: ${tipo}\n`;
      msg += `📏 Talla: ${talla}\n`;
      if (detalles) {
        msg += `📝 Detalle/Modelo: ${detalles}\n`;
      }
      msg += `\n¿Tenéis disponible en la tienda? ¡Muchas gracias!`;

      const waUrl = `https://wa.me/34619650903?text=${encodeURIComponent(msg)}`;
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
