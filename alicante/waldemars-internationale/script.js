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
      const zona = document.getElementById('zona').value;
      const notas = document.getElementById('notas').value.trim();

      let msg = `Hello Waldemar's Internationale / Hola! 👋 Quisiera solicitar una reserva / Table booking request:\n\n`;
      msg += `👤 *Name / Nombre:* ${nombre}\n`;
      msg += `📅 *Date / Fecha:* ${fecha}\n`;
      msg += `⏰ *Time / Hora:* ${hora}\n`;
      msg += `👥 *Guests / Comensales:* ${personas}\n`;
      msg += `📍 *Area / Zona:* ${zona}\n`;
      if (notas) {
        msg += `📝 *Notes / Observaciones:* ${notas}\n`;
      }
      msg += `\n¿Podríais confirmarme disponibilidad? Thank you!`;

      // Phone for Waldemar's (+34 965 32 92 49)
      const phone = '34965329249';
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }
});
