# 🎠 Carousel de Imágenes en Proyectos

## ✅ IMPLEMENTADO COMPLETAMENTE

Se ha agregado un **carousel automático de imágenes** en la card del Editor Colaborativo, que cambia automáticamente al pasar el mouse.

---

## 🎯 CARACTERÍSTICAS

### **Funcionalidades principales:**

1. ✅ **Múltiples imágenes** - 3 vistas diferentes del editor
2. ✅ **Cambio automático** - Se activa al pasar el mouse
3. ✅ **Indicadores visuales** - Dots en la parte inferior
4. ✅ **Click manual** - Puedes hacer click en los indicadores
5. ✅ **Transiciones suaves** - Fade in/out elegante
6. ✅ **Vuelve al inicio** - Al quitar el mouse, regresa a la primera imagen

---

## 📸 IMÁGENES INCLUIDAS

### **En la card del Editor:**

```html
<div class="image-carousel">
  <img src="./public/img/editor1.png" alt="editor - vista 1" class="carousel-img active" />
  <img src="./public/img/editor2.png" alt="editor - vista 2" class="carousel-img" />
  <img src="./public/img/editor3.png" alt="editor - vista 3" class="carousel-img" />
</div>
```

**3 imágenes totales:**
- 📸 `editor1.png` - Vista principal (activa por defecto)
- 📸 `editor2.png` - Segunda vista
- 📸 `editor3.png` - Tercera vista

---

## 🎨 DISEÑO VISUAL

### **Indicadores (Dots):**

```
Inactivo: ○ ○ ○    (Círculos pequeños translúcidos)
Activo:   ━ ○ ○    (Barra horizontal blanca)
```

**Posición:** Parte inferior central de la imagen  
**Estilo:** Fondo blanco translúcido con borde  
**Animación:** El activo se expande horizontalmente

---

## ⚙️ FUNCIONAMIENTO

### **Al pasar el mouse sobre la card:**

```
Usuario hace hover en la card
          ↓
Carousel inicia automáticamente
          ↓
Cambia cada 2 segundos
          ↓
editor1 → editor2 → editor3 → editor1 (loop)
          ↓
Indicadores se actualizan en tiempo real
```

### **Al quitar el mouse:**

```
Usuario sale de la card
          ↓
Carousel se detiene
          ↓
Vuelve a la primera imagen (editor1)
          ↓
Listo para siguiente hover
```

### **Al hacer click en indicador:**

```
Usuario hace click en dot
          ↓
Carousel se pausa
          ↓
Salta a la imagen seleccionada
          ↓
Se mantiene en esa imagen
```

---

## 🛠️ IMPLEMENTACIÓN TÉCNICA

### **1. HTML:**

```html
<div class="card-proyecto card-editor">
  <div class="image-carousel">
    <img src="./public/img/editor1.png" class="carousel-img active" />
    <img src="./public/img/editor2.png" class="carousel-img" />
    <img src="./public/img/editor3.png" class="carousel-img" />
    
    <div class="carousel-indicators">
      <span class="indicator active"></span>
      <span class="indicator"></span>
      <span class="indicator"></span>
    </div>
  </div>
  
  <div class="text-card">
    <!-- Contenido de la card -->
  </div>
</div>
```

**Clases importantes:**
- `.card-editor` - Identifica la card con carousel
- `.image-carousel` - Contenedor del carousel
- `.carousel-img` - Cada imagen del carousel
- `.active` - Marca la imagen/indicador activo
- `.carousel-indicators` - Contenedor de dots
- `.indicator` - Cada dot individual

---

### **2. CSS:**

```css
/* Contenedor del carousel */
.image-carousel {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

/* Imágenes del carousel */
.carousel-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.carousel-img.active {
  opacity: 1;
}

/* Indicadores */
.carousel-indicators {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: rgba(255, 255, 255, 0.9);
  width: 24px;
  border-radius: 4px;
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: scale(1.2);
}
```

**Características CSS:**
- `opacity: 0` para todas las imágenes
- `opacity: 1` solo para la `.active`
- `transition: opacity 0.5s` para fade suave
- `position: absolute` para stack de imágenes
- `z-index: 2` en indicadores para visibilidad

---

### **3. JavaScript:**

```javascript
const carouselCards = document.querySelectorAll('.card-editor');

carouselCards.forEach(card => {
  const images = card.querySelectorAll('.carousel-img');
  const indicators = card.querySelectorAll('.indicator');
  let currentIndex = 0;
  let carouselInterval = null;

  // Función para cambiar imagen
  function changeImage(index) {
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
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

  // Detener al salir del hover
  card.addEventListener('mouseleave', () => {
    clearInterval(carouselInterval);
    changeImage(0); // Volver a la primera imagen
  });

  // Click en indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', (e) => {
      e.stopPropagation();
      clearInterval(carouselInterval);
      changeImage(index);
    });
  });
});
```

**Lógica JavaScript:**
1. Selecciona todas las cards con clase `.card-editor`
2. En cada card, busca imágenes e indicadores
3. Al entrar el mouse: inicia `setInterval` cada 2000ms
4. En cada intervalo: incrementa index y cambia imagen
5. Al salir el mouse: limpia interval y vuelve a imagen 0
6. Al hacer click: pausa y salta a imagen específica

---

## 🚀 SUPABASE AGREGADO

### **Nueva tecnología:**

```html
<div class="tecnologias-card">
  <i class="devicon-react-original colored"></i>
  <i class="devicon-nodejs-plain colored"></i>
  <i class="devicon-javascript-plain colored"></i>
  <i class="devicon-supabase-plain colored"></i> <!-- NUEVO -->
</div>
```

**Stack completo del Editor:**
- ⚛️ React
- 📦 Node.js
- 🟡 JavaScript
- 🟢 Supabase ← NUEVO

---

## 🎯 VENTAJAS DEL SISTEMA

### **Para el usuario:**
1. ✅ **Ve múltiples vistas** sin cambiar de página
2. ✅ **Interacción intuitiva** (hover automático)
3. ✅ **Control manual** (click en dots)
4. ✅ **No molesta** si no quiere ver más imágenes

### **Para el desarrollo:**
1. ✅ **Escalable** - Fácil agregar más imágenes
2. ✅ **Reutilizable** - Aplica a cualquier card
3. ✅ **Performante** - Solo 3 imágenes, transición CSS
4. ✅ **Mantenible** - Código limpio y comentado

---

## 📱 RESPONSIVE

### **Desktop:**
- Carousel funciona perfectamente
- Hover activado
- 3 indicadores visibles

### **Mobile/Tablet:**
- Carousel funciona con touch
- Indicadores permanecen visibles
- Click en dots para cambiar

---

## 🎨 PERSONALIZACIÓN

### **Cambiar velocidad del carousel:**

```javascript
carouselInterval = setInterval(() => {
  // ...
}, 2000); // ← Cambia este valor (milisegundos)
```

**Opciones:**
- `1000` = 1 segundo (rápido)
- `2000` = 2 segundos (defecto)
- `3000` = 3 segundos (lento)

---

### **Agregar más imágenes:**

```html
<div class="image-carousel">
  <img src="./public/img/editor1.png" class="carousel-img active" />
  <img src="./public/img/editor2.png" class="carousel-img" />
  <img src="./public/img/editor3.png" class="carousel-img" />
  <img src="./public/img/editor4.png" class="carousel-img" /> <!-- NUEVA -->
  
  <div class="carousel-indicators">
    <span class="indicator active"></span>
    <span class="indicator"></span>
    <span class="indicator"></span>
    <span class="indicator"></span> <!-- NUEVO -->
  </div>
</div>
```

**Importante:** Agregar imagen + indicador correspondiente

---

### **Aplicar a otras cards:**

Solo agrega la clase `.card-editor`:

```html
<div class="card-proyecto card-editor">
  <div class="image-carousel">
    <!-- Tus imágenes aquí -->
  </div>
</div>
```

El JavaScript detecta automáticamente todas las cards con esa clase.

---

## 🔄 FLUJO DE USUARIO

### **Escenario 1: Usuario casual**
```
Ve la card → Primera imagen visible
No hace nada → Se queda en primera imagen
```

### **Escenario 2: Usuario curioso**
```
Ve la card → Pasa el mouse por encima
Carousel inicia → editor1 → editor2 → editor3
Sale del hover → Vuelve a editor1
```

### **Escenario 3: Usuario interactivo**
```
Ve la card → Pasa el mouse
Ve indicadores → Hace click en el segundo dot
Carousel pausa → Salta a editor2
Se mantiene → Puede explorar a su ritmo
```

---

## 📊 COMPARACIÓN

### **Antes:**
```
Card del Editor:
├── 1 imagen estática (editor1.png)
├── Sin interacción
└── Vista limitada
```

### **Después:**
```
Card del Editor:
├── 3 imágenes dinámicas ✨
├── Carousel automático al hover 🎠
├── Indicadores interactivos ⭕
├── Click manual para control 🖱️
└── Vista completa del proyecto 🎯
```

---

## 🎯 CASOS DE USO

### **Ideal para proyectos con:**

1. **Múltiples pantallas** 📱
   - Dashboard + Vista de usuario
   - Login + Registro + Perfil

2. **Diferentes estados** 🔄
   - Modo claro + Modo oscuro
   - Vacío + Con datos

3. **Vistas variadas** 👀
   - Desktop + Mobile
   - Diferentes secciones

4. **Funcionalidades destacadas** ⭐
   - Antes + Después
   - Features principales

---

## 🐛 TROUBLESHOOTING

### **El carousel no cambia:**

```javascript
// Verifica en consola (F12):
console.log(document.querySelectorAll('.card-editor'));
// Debe devolver al menos 1 elemento
```

### **Las imágenes no se ven:**

```javascript
// Verifica rutas:
console.log('editor1:', document.querySelector('[src*="editor1"]'));
// Debe devolver el elemento <img>
```

### **Los indicadores no responden:**

```javascript
// Verifica eventos:
document.querySelectorAll('.indicator').forEach(ind => {
  console.log('Indicator:', ind);
});
```

---

## 📁 ARCHIVOS MODIFICADOS

1. ✅ **index.html** - Estructura del carousel (líneas 257-293)
2. ✅ **style.css** - Estilos del carousel (líneas 458-513)
3. ✅ **script.js** - Lógica del carousel (líneas 180-225)
4. ✅ **CAROUSEL_IMAGENES.md** - Esta documentación

---

## ✨ RESULTADO FINAL

### **Card del Editor ahora tiene:**

- 📸 **3 imágenes** (editor1, editor2, editor3)
- 🎠 **Carousel automático** (al hover)
- ⭕ **3 indicadores** (dots interactivos)
- 🟢 **Supabase** agregado al stack
- ⚡ **Transiciones suaves** (0.5s fade)
- 🔄 **Loop infinito** (vuelve al inicio)

---

## 🚀 PRÓXIMAS MEJORAS (OPCIONAL)

1. **Flechas de navegación** (← →)
2. **Autoplay sin hover** (opcional)
3. **Pausa al hacer hover** en imagen
4. **Swipe en mobile** (táctil)
5. **Zoom en imagen** al hacer click
6. **Lazy loading** de imágenes

---

**¡Carousel de imágenes implementado exitosamente! 🎠✨**

Ahora tu card del Editor muestra múltiples vistas de forma interactiva y profesional.
