document.addEventListener('DOMContentLoaded', () => {
  // Tabs filtering
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.menu-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.tab;
      cards.forEach(card => {
        if (target === 'all' || card.dataset.cat === target) {
          card.removeAttribute('data-vis');
        } else {
          card.setAttribute('data-vis', '0');
        }
      });
    });
  });

  // Default date to tomorrow
  const fechaInput = document.getElementById('fecha');
  if (fechaInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    fechaInput.value = tomorrow.toISOString().split('T')[0];
    fechaInput.min = new Date().toISOString().split('T')[0];
  }

  // Reservation form to WhatsApp
  const form = document.getElementById('reservaForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
      const personas = document.getElementById('personas').value;
      const tipoMesa = document.getElementById('tipo_mesa').value;
      const notas = document.getElementById('notas').value.trim();

      let msg = `¡Hola Mesón El Huertano! 👋 Quisiera solicitar una reserva de mesa:\n\n`;
      msg += `👤 *Nombre:* ${nombre}\n`;
      msg += `📅 *Fecha:* ${fecha}\n`;
      msg += `⏰ *Hora:* ${hora}\n`;
      msg += `👥 *Comensales:* ${personas}\n`;
      msg += `🎉 *Motivo:* ${tipoMesa}\n`;
      if (notas) {
        msg += `📝 *Observaciones:* ${notas}\n`;
      }
      msg += `\n¿Tenéis mesa disponible? Muchas gracias.`;

      // Phone for Meson El Huertano (+34 965 71 79 43)
      const phone = '34965717943';
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }
});
