// ============================================
// PORTAFOLIO - ANGEL RODRIGUEZ
// JavaScript con sistema de tema mejorado
// ============================================

// ============================================
// 1. SISTEMA DE MODO CLARO/OSCURO CON CSS VARIABLES
// ============================================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Cargar tema guardado o usar preferencia del sistema
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (!prefersDark) {
    htmlElement.setAttribute('data-theme', 'light');
  }
}

// Cambiar tema
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Event listener
if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// Cargar tema al iniciar
loadTheme();

// Detectar cambios en preferencia del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    htmlElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  }
});

// ============================================
// 2. NAVEGACIÓN SUAVE Y ACTIVA
// ============================================
const menuLinks = document.querySelectorAll('.lista li a');
const sections = document.querySelectorAll('main, div[id], section[id]');

// Navegación suave al hacer clic
menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Actualizar link activo
      menuLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Resaltar sección activa al hacer scroll - MEJORADO
let scrollTimeout;
window.addEventListener('scroll', () => {
  // Debounce para mejor performance
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    updateActiveSection();
  }, 50);
});

function updateActiveSection() {
  const scrollPosition = window.scrollY + 150; // Offset para activar antes
  let current = 'home'; // Default al inicio
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    // Verifica si la posici\u00f3n del scroll est\u00e1 dentro de esta secci\u00f3n
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      current = sectionId;
    }
  });
  
  // Si estamos al final de la p\u00e1gina, activa el \u00faltimo link
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
    current = 'contacto';
  }
  
  // Actualizar clases active
  menuLinks.forEach(link => {
    link.classList.remove('active');
    const linkHref = link.getAttribute('href');
    if (linkHref === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Llamar al cargar la p\u00e1gina
window.addEventListener('load', updateActiveSection);

// ============================================
// 3. ANIMACIONES DE ENTRADA (INTERSECTION OBSERVER)
// ============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('fade-in-visible');
      }, index * 100);
      fadeInObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplicar animaciones a diferentes elementos (imagen de perfil excluida para evitar movimientos)
const animatedElements = document.querySelectorAll('.card-proyecto, .contenedor-experiencia, .text-sobre-mi');
animatedElements.forEach(el => {
  el.classList.add('fade-in-element');
  fadeInObserver.observe(el);
});

// ============================================
// 4. EFECTO PARALLAX MEJORADO
// ============================================
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      parallaxEffect();
      ticking = false;
    });
    ticking = true;
  }
});

function parallaxEffect() {
  // Parallax completamente desactivado para evitar movimientos no deseados
  // Si quieres reactivarlo, descomenta y ajusta los valores según necesites
  
  /*
  const scrolled = window.pageYOffset;
  
  const imgPerfil = document.querySelector('.img-perfil');
  if (imgPerfil) {
    imgPerfil.style.transform = `translateY(${scrolled * 0.05}px)`;
  }
  
  const principalBefore = document.querySelector('.principal');
  if (principalBefore && scrolled < 800) {
    principalBefore.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
  */
}

// ============================================
// 5. CAROUSEL DE IMÁGENES EN PROYECTOS
// ============================================

const carouselCards = document.querySelectorAll('.card-editor');

carouselCards.forEach(card => {
  const images = card.querySelectorAll('.carousel-img');
  const indicators = card.querySelectorAll('.indicator');
  let currentIndex = 0;
  let carouselInterval = null;

  // Función para cambiar imagen
  function changeImage(index) {
    // Remover clase active de todas las imágenes e indicadores
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Agregar clase active a la imagen e indicador actual
    images[index].classList.add('active');
    indicators[index].classList.add('active');
    currentIndex = index;
  }

  // Auto-carousel al hacer hover
  card.addEventListener('mouseenter', () => {
    carouselInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      changeImage(currentIndex);
    }, 2000); // Cambia cada 2 segundos
  });

  // Detener carousel al salir del hover
  card.addEventListener('mouseleave', () => {
    clearInterval(carouselInterval);
    changeImage(0); // Volver a la primera imagen
  });

  // Click en indicadores para cambiar imagen manualmente
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', (e) => {
      e.stopPropagation();
      clearInterval(carouselInterval);
      changeImage(index);
    });
  });
});

// ============================================
// 6. SECCIÓN DE TECNOLOGÍAS - GRID ESTÁTICO
// ============================================
// El nuevo diseño usa grid estático sin animaciones de slider
// Las interacciones hover están definidas en CSS

// ============================================
// 6. ANIMACIONES DE HOVER MEJORADAS
// ============================================
// Efectos simplificados para diseño minimalista

// ============================================
// 7. CONTADOR ANIMADO PARA ESTADÍSTICAS
// ============================================
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// ============================================
// 8. CARDS DE PROYECTOS - ESTILO MINIMALISTA
// ============================================
// Efecto 3D complejo removido para diseño más limpio y profesional
// Las cards ahora usan solo hover simple definido en CSS

// ============================================
// 9. LOADING SUAVE AL CARGAR PÁGINA
// ============================================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
  
  console.log('%c🚀 Portafolio de Angel Rodriguez - Cargado correctamente ✅', 
    'color: #667eea; font-size: 16px; font-weight: bold;');
});

// ============================================
// 10. CURSOR PERSONALIZADO (OPCIONAL)
// ============================================
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Efecto en elementos interactivos
document.querySelectorAll('a, button, .card-proyecto').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});
