// ===== Typewriter Effect =====
(function () {
  const el = document.querySelector('.typewriter');
  if (!el) return;

  const text = el.dataset.text;
  let i = 0;
  let isDeleting = false;
  let isPaused = false;

  function tick() {
    if (isPaused) {
      setTimeout(tick, 2000);
      isPaused = false;
      isDeleting = true;
      return;
    }

    if (!isDeleting) {
      el.textContent = text.slice(0, i + 1);
      i++;
      if (i === text.length) {
        isPaused = true;
        setTimeout(tick, 2000);
        return;
      }
      setTimeout(tick, 80 + Math.random() * 40);
    } else {
      el.textContent = text.slice(0, i - 1);
      i--;
      if (i === 0) {
        isDeleting = false;
      }
      setTimeout(tick, 40);
    }
  }

  setTimeout(tick, 1000);
})();

// ===== Mobile Menu Toggle =====
(function () {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      nav.classList.remove('open');
    });
  });
})();

// ===== Navbar Hide/Show on Scroll =====
(function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll && currentScroll > 200) {
          navbar.classList.add('hidden');
        } else {
          navbar.classList.remove('hidden');
        }
        lastScroll = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// ===== Active Nav Link on Scroll =====
(function () {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;

  function updateActive() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
})();

// ===== Scroll Reveal Animation =====
(function () {
  const reveals = document.querySelectorAll(
    '.skill-card, .project-card, .timeline-content, .stat, .about-text, .contact-link, .cert-card'
  );

  if (!reveals.length) return;

  reveals.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
})();

// ===== Footer Year =====
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// ===== Smooth parallax terminal on mouse move =====
(function () {
  const terminal = document.querySelector('.terminal');
  if (!terminal) return;

  const hero = document.querySelector('.hero');
  if (!hero) return;

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    terminal.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 4}deg)`;
  });

  hero.addEventListener('mouseleave', () => {
    terminal.style.transform = 'rotateY(-5deg) rotateX(2deg)';
  });
})();

// ===== Inject Certificate URLs from Config =====
(function () {
  if (!window.CONFIG || !window.CONFIG.certs) return;

  document.querySelectorAll('.cert-card[data-cert]').forEach(card => {
    const key = card.dataset.cert;
    const url = window.CONFIG.certs[key];
    if (url) {
      card.href = url;
    }
  });

  const cvBtn = document.getElementById('cv-btn');
  if (cvBtn && window.CONFIG.certs.cv) {
    cvBtn.href = window.CONFIG.certs.cv;
  }
})();
