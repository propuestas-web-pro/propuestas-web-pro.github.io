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

  // Order form to WhatsApp
  const form = document.getElementById('pedidoForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const tipo = document.getElementById('tipo').value;
      const nombre = document.getElementById('nombre').value.trim();
      const hora = document.getElementById('hora').value;
      const detalles_cant = document.getElementById('detalles_cant').value.trim();
      const platos = document.getElementById('pizzas_pedido').value.trim();

      let msg = `¡Hola Pizzería Centro! 👋 Quisiera solicitar un pedido/reserva:\n\n`;
      msg += `📋 *Tipo:* ${tipo}\n`;
      msg += `👤 *Nombre:* ${nombre}\n`;
      msg += `⏰ *Hora:* ${hora}\n`;
      msg += `🍕 *Cantidad / Personas:* ${detalles_cant}\n`;
      if (platos) {
        msg += `🍽️ *Detalle de pizzas/platos:* ${platos}\n`;
      }
      msg += `\n¿Podríais confirmarme? Muchas gracias.`;

      // Phone for Pizzeria Centro (+34 965 71 17 95)
      const phone = '34965711795';
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }
});
