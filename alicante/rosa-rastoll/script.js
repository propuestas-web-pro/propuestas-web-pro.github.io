document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  if (form) {
    const d = document.getElementById('bDate');
    if (d) { d.setAttribute('min', new Date().toISOString().split('T')[0]); }
    form.addEventListener('submit', e => {
      e.preventDefault();
      const n = document.getElementById('bName').value.trim();
      const sv = document.getElementById('bService').value;
      const dt = document.getElementById('bDate').value;
      const tm = document.getElementById('bTime').value;
      const nt = document.getElementById('bNotes').value.trim();
      if (!n) { alert('Indica tu nombre'); return; }
      let ds = '';
      if (dt) { const [y,m,dd] = dt.split('-'); ds = `${dd}/${m}/${y}`; }
      let msg = `Hola, buenas tardes ✨\n\nMe gustaría pedir cita en Rosa Rastoll Estilistas:\n\n`;
      msg += `👤 Nombre: ${n}\n💇‍♀️ Servicio: ${sv}\n`;
      if (ds) msg += `📅 Fecha: ${ds}\n`;
      msg += `🕐 Horario: ${tm}\n`;
      if (nt) msg += `\n📝 Notas: ${nt}\n`;
      msg += `\n¡Gracias!`;
      window.open(`https://wa.me/34637204389?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(l => l.addEventListener('click', e => {
    const t = document.querySelector(l.getAttribute('href'));
    if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 68, behavior: 'smooth' }); }
  }));
  const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('rv'); obs.unobserve(e.target); } }), { threshold: .1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.feature-card,.service-card,.review-card,.color-card,.chip,.bi-item').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(16px)'; el.style.transition = 'opacity .4s ease, transform .4s ease'; obs.observe(el);
  });
  const s = document.createElement('style'); s.textContent = '.rv{opacity:1!important;transform:translateY(0)!important}'; document.head.appendChild(s);
});
