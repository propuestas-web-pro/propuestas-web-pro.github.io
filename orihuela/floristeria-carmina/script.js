document.addEventListener('DOMContentLoaded', () => {
  // Order Form → WhatsApp
  const form = document.getElementById('orderForm');
  if (form) {
    const dateInput = document.getElementById('oDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('oName').value.trim();
      const type = document.getElementById('oType').value;
      const occasion = document.getElementById('oOccasion').value;
      const budget = document.getElementById('oBudget').value;
      const delivery = document.getElementById('oDelivery').value;
      const date = document.getElementById('oDate').value;
      const notes = document.getElementById('oNotes').value.trim();

      if (!name) { alert('Por favor, indica tu nombre.'); return; }

      let dateStr = '';
      if (date) {
        const [y, m, d] = date.split('-');
        dateStr = `${d}/${m}/${y}`;
      }

      let msg = `Hola María, buenas tardes 🌸\n\n`;
      msg += `Me gustaría hacer un encargo en Floristería Carmina:\n\n`;
      msg += `👤 Nombre: ${name}\n`;
      msg += `🌹 Tipo: ${type}\n`;
      msg += `🎁 Ocasión: ${occasion}\n`;
      msg += `💰 Presupuesto: ${budget}\n`;
      msg += `🚗 Entrega: ${delivery}\n`;
      if (dateStr) msg += `📅 Fecha: ${dateStr}\n`;
      if (notes) msg += `\n📝 Notas: ${notes}\n`;
      msg += `\n¡Muchas gracias!`;

      window.open(`https://wa.me/34601613370?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
      }
    });
  });

  // Scroll reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('rv'); obs.unobserve(en.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.feature-card,.catalog-card,.service-item,.review-card,.occasion-pill').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .45s ease, transform .45s ease';
    obs.observe(el);
  });
  const s = document.createElement('style');
  s.textContent = '.rv{opacity:1!important;transform:translateY(0)!important}';
  document.head.appendChild(s);
});
