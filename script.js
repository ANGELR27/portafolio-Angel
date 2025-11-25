// ============================================
// PORTAFOLIO - ANGEL RODRIGUEZ
// Premium Experience Script
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);

  // ============================================
  // 1. THEME MANAGEMENT
  // ============================================
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      htmlElement.setAttribute('data-theme', savedTheme);
    } else if (!prefersDark) {
      htmlElement.setAttribute('data-theme', 'light');
    }
  }

  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Animate transition
    gsap.to('body', {
      opacity: 0.5,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      onRepeat: () => {
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      }
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  loadTheme();

  // ============================================
  // 2. HERO ANIMATIONS
  // ============================================
  const heroTimeline = gsap.timeline();

  heroTimeline
    .from('.hero-title .reveal-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out'
    })
    .from('.hero-description', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-cta-group a', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    .from('.glass-card-showcase', {
      x: 50,
      opacity: 0,
      rotation: 10,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=1');

  // ============================================
  // 3. CINEMATIC PARALLAX PROJECTS
  // ============================================
  const cinematicCards = document.querySelectorAll('.project-card-cinematic');

  cinematicCards.forEach(card => {
    const image = card.querySelector('img');

    // Parallax Effect
    gsap.to(image, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Reveal Animation
    gsap.from(card, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      }
    });
  });


  // ============================================
  // 4. SKILLS MAGNETIC & FLOATING EFFECT
  // ============================================
  const techCards = document.querySelectorAll('.tech-card');

  // Floating Animation (Randomized)
  techCards.forEach(card => {
    gsap.to(card, {
      y: 'random(-10, 10)',
      duration: 'random(2, 4)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 'random(0, 2)'
    });

    // Magnetic Effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        x: x * 0.3, // Magnetic strength
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto' // Prevent conflict with float
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        x: 0,
        y: 0, // This might conflict with float, but float uses relative values usually. 
        // Better to let float resume or reset to a base.
        // For simplicity, we just animate back to 0 offset.
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });

  // Staggered Reveal for Skills
  gsap.from('.tech-card', {
    scrollTrigger: {
      trigger: '.tecnologias-grid',
      start: 'top 85%',
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: {
      amount: 0.8,
      grid: 'auto',
      from: 'center'
    },
    ease: 'back.out(1.7)'
  });

  // ============================================
  // 5. CUSTOM CURSOR
  // ============================================
  const cursorDot = document.createElement('div');
  const cursorOutline = document.createElement('div');

  cursorDot.className = 'cursor-dot';
  cursorOutline.className = 'cursor-outline';

  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with delay (GSAP)
    gsap.to(cursorOutline, {
      x: posX,
      y: posY,
      duration: 0.15,
      ease: 'power2.out'
    });
  });

  // Hover States
  const interactables = document.querySelectorAll('a, button, .bento-item, .tech-card');

  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursorOutline, {
        scale: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        duration: 0.3
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(cursorOutline, {
        scale: 1,
        backgroundColor: 'transparent',
        duration: 0.3
      });
    });
  });

  // ============================================
  // 6. SMOOTH SCROLL (Native + Active Link)
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Active Link Highlighter
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section-wrapper');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(li => {
      li.classList.remove('active');
      if (li.getAttribute('href').includes(current)) {
        li.classList.add('active');
      }
    });
  });

  console.log('%c✨ Portfolio Enhanced with GSAP', 'color: #6366f1; font-weight: bold; font-size: 14px;');
});
