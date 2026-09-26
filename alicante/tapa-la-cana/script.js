/* ═══════════════════════════════════════════════
   Tapa La Caña — Interactive Script
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ──
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Hamburger menu ──
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── Menu tabs ──
  const tabs = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      panels.forEach(p => {
        p.classList.remove('active');
        if (p.id === `tab-${target}`) {
          p.classList.add('active');
        }
      });
    });
  });

  // ── Scroll reveal animations ──
  const revealElements = document.querySelectorAll(
    '.highlight-card, .menu-card, .review-card, .info-card, .about-text, .about-image'
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.06}s, transform 0.6s ease ${i * 0.06}s`;
    revealObserver.observe(el);
  });

  // ── WhatsApp float show/hide ──
  const whatsappFloat = document.getElementById('whatsappFloat');
  const heroSection = document.querySelector('.hero');

  if (whatsappFloat && heroSection) {
    const floatObserver = new IntersectionObserver(
      ([entry]) => {
        whatsappFloat.style.opacity = entry.isIntersecting ? '0' : '1';
        whatsappFloat.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
      },
      { threshold: 0.3 }
    );
    whatsappFloat.style.transition = 'opacity 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease';
    floatObserver.observe(heroSection);
  }

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinksAll.forEach(link => {
            link.style.color = link.getAttribute('href') === `#${id}`
              ? 'var(--color-text)'
              : '';
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(sec => sectionObserver.observe(sec));
});
