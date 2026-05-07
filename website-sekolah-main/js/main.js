// =========================================================
// SMK Telkom Purwokerto — Main JavaScript
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ──────────────────────────────
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('back-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar?.classList.add('scrolled');
      backTop?.classList.add('show');
    } else {
      navbar?.classList.remove('scrolled');
      backTop?.classList.remove('show');
    }
  });

  // ── Mobile nav toggle ─────────────────────────────────
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');

  navToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity   = navLinks.classList.contains('open') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });

  // ── Close nav on link click (mobile) ─────────────────
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // ── Fade-up on scroll ────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => observer.observe(el));

  // ── Counter animation ─────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseInt(el.dataset.count);
      const dur    = 2000;
      const step   = target / (dur / 16);
      let current  = 0;
      const timer  = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current).toLocaleString('id-ID');
      }, 16);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => countObserver.observe(c));

  // ── Active nav link on scroll ────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinkEls.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });

  // ── Back to top ──────────────────────────────────────
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ── Current year in footer ───────────────────────────
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ── Galeri lightbox simple ───────────────────────────
  document.querySelectorAll('.galeri-item').forEach(item => {
    item.addEventListener('click', () => {
      const label = item.dataset.label || 'Galeri Foto';
      showToast('🖼️ ' + label);
    });
  });

  // ── Toast notification ───────────────────────────────
  function showToast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    Object.assign(t.style, {
      position: 'fixed', bottom: '80px', left: '50%',
      transform: 'translateX(-50%)',
      background: '#0B1F3A', color: 'white',
      padding: '10px 20px', borderRadius: '8px',
      fontSize: '.875rem', fontWeight: '600',
      boxShadow: '0 8px 24px rgba(0,0,0,.2)',
      zIndex: 9999, transition: 'opacity .3s',
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    });
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2500);
  }

  // ── Duplicate mitra track for infinite scroll ────────
  const mitraList = document.querySelector('.mitra-list');
  if (mitraList) {
    mitraList.innerHTML += mitraList.innerHTML;
  }

  // ── Duplicate announcement for marquee ───────────────
  const annTrack = document.querySelector('.announcement-track');
  if (annTrack) {
    annTrack.innerHTML += annTrack.innerHTML;
  }

  console.log('%cSMK Telkom Purwokerto 🎓', 'font-size:16px; font-weight:bold; color:#E31E24;');
  console.log('%cWebsite resmi SMK Telkom Purwokerto', 'color:#1A2340;');
});
