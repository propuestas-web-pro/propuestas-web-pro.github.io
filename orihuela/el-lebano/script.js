document.addEventListener('DOMContentLoaded', () => {
  // Menu tabs
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.menu-card');
  function filter(cat) {
    cards.forEach(c => {
      if (c.dataset.cat === cat) { c.style.display = ''; c.removeAttribute('data-vis'); requestAnimationFrame(() => { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; }); }
      else { c.style.opacity = '0'; c.style.transform = 'translateY(10px)'; setTimeout(() => { c.style.display = 'none'; c.setAttribute('data-vis', '0'); }, 180); }
    });
  }
  tabs.forEach(t => t.addEventListener('click', () => { tabs.forEach(b => b.classList.remove('active')); t.classList.add('active'); filter(t.dataset.tab); }));
  filter('mezze');
  cards.forEach(c => { c.style.transition = 'opacity .22s ease, transform .22s ease'; });

  // Order form
  const form = document.getElementById('orderForm');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const n = document.getElementById('oName').value.trim();
    const it = document.getElementById('oItems').value;
    const qty = document.getElementById('oQty').value;
    const mode = document.getElementById('oMode').value;
    const notes = document.getElementById('oNotes').value.trim();
    if (!n) { alert('Indica tu nombre'); return; }
    let m = `Hola Mario, buenas tardes 🥙\n\nQuisiera hacer un pedido en El Lebano:\n\n`;
    m += `👤 Nombre: ${n}\n🥘 Plato: ${it}\n📦 Cantidad: ${qty}\n🍽️ Tipo: ${mode}\n`;
    if (notes) m += `\n📝 Notas: ${notes}\n`;
    m += `\n¡Gracias!`;
    window.open(`https://wa.me/34604492493?text=${encodeURIComponent(m)}`, '_blank');
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(l => l.addEventListener('click', e => {
    const t = document.querySelector(l.getAttribute('href'));
    if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 68, behavior: 'smooth' }); }
  }));

  // Reveal
  const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('rv'); obs.unobserve(e.target); } }), { threshold: .1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.feature-card,.review-card,.chip').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(16px)'; el.style.transition = 'opacity .4s ease, transform .4s ease'; obs.observe(el);
  });
  const s = document.createElement('style'); s.textContent = '.rv{opacity:1!important;transform:translateY(0)!important}'; document.head.appendChild(s);
});
