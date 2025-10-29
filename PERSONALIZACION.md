# 🎨 Guía de Personalización del Portafolio

## 📋 Índice Rápido
1. [Cambiar Colores](#1-cambiar-colores)
2. [Modificar Fuentes](#2-modificar-fuentes)
3. [Ajustar Animaciones](#3-ajustar-animaciones)
4. [Personalizar Contenido](#4-personalizar-contenido)
5. [Agregar Secciones](#5-agregar-nuevas-secciones)
6. [Optimizar para Producción](#6-optimizar-para-producción)

---

## 1. 🎨 CAMBIAR COLORES

### Colores Principales (en `global.css` y `style.css`)

```css
/* FONDO OSCURO */
background-color: #0a0a0a;  /* Cambia este valor */

/* FONDO CLARO (modo light) */
background-color: #f5f5f5;  /* Cambia este valor */

/* GRADIENTE PRINCIPAL (morado-azul) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Cambia #667eea y #764ba2 por tus colores */

/* GRADIENTE SECUNDARIO (naranja) */
background: linear-gradient(to right, #ea963c, #f74f2a);
/* Para botones y acentos */
```

### 🔧 Dónde Cambiar:

#### **Logo del menú** (línea ~186-195 en style.css):
```css
.logo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* TUS COLORES AQUÍ */
}
```

#### **Líneas decorativas bajo títulos**:
```css
.titulo-experiencia::after,
.titulo-proyectos::after,
.skill h2::after {
  background: linear-gradient(90deg, #667eea, #764ba2);
  /* TUS COLORES AQUÍ */
}
```

#### **Botones de proyectos** (línea ~324-337):
```css
.ver-proyecto button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* TUS COLORES AQUÍ */
}
```

#### **Scrollbar** (línea ~625-628):
```css
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #667eea, #764ba2);
  /* TUS COLORES AQUÍ */
}
```

### 💡 Paletas Sugeridas:

#### **Opción 1: Verde Tech**
```css
#10b981 → #059669  /* Verde vibrante */
```

#### **Opción 2: Rojo Energético**
```css
#ef4444 → #dc2626  /* Rojo moderno */
```

#### **Opción 3: Azul Corporativo**
```css
#3b82f6 → #1d4ed8  /* Azul profesional */
```

#### **Opción 4: Cyan Futurista**
```css
#06b6d4 → #0891b2  /* Cyan tech */
```

---

## 2. 📝 MODIFICAR FUENTES

### Cambiar Google Fonts (en `index.html` línea ~10-12)

```html
<!-- Reemplaza Poppins e Inter por las que quieras -->
<link
  href="https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@300;400;600;700&display=swap"
  rel="stylesheet"
/>
```

### Fuentes Recomendadas:

#### **Para Títulos:**
- `Montserrat` - Moderna y elegante
- `Raleway` - Limpia y profesional
- `Playfair Display` - Elegante y sofisticada
- `Space Grotesk` - Tech y moderna

#### **Para Textos:**
- `Roboto` - Clásica y legible
- `Open Sans` - Versátil y clara
- `Lato` - Profesional
- `Work Sans` - Moderna

### Aplicar en CSS:

```css
/* En global.css línea ~12 */
body {
  font-family: 'TU_FUENTE', sans-serif;
}

/* Para títulos en global.css línea ~17 */
h1, h2, h3, h4, h5, h6 {
  font-family: 'TU_FUENTE_TITULOS', sans-serif;
}
```

---

## 3. ⚡ AJUSTAR ANIMACIONES

### Velocidad de Animaciones

#### **Fade-in de elementos** (línea ~549-553 en style.css):
```css
.fade-in-element {
  transition: opacity 0.8s ease, transform 0.8s ease;
  /* Cambia 0.8s por 0.5s (más rápido) o 1.2s (más lento) */
}
```

#### **Hover en Cards** (línea ~264 en style.css):
```css
.card-proyecto {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  /* Ajusta 0.5s según prefieras */
}
```

#### **Slider de tecnologías** (línea ~467 en style.css):
```css
.tecnologias img {
  animation: rotar 20s linear infinite;
  /* Cambia 20s: menos = más rápido, más = más lento */
}
```

### Desactivar Animaciones

Si quieres un portafolio más minimalista:

```css
/* Comentar o eliminar estas líneas */
.fade-in-element { /* ... */ }
.card-proyecto::before { /* ... */ }
animation: rotar 20s linear infinite; /* en slider */
```

---

## 4. 📝 PERSONALIZAR CONTENIDO

### Tu Información Personal

#### **index.html línea ~34-37** (Título principal):
```html
<h2>
  Soy TU_NOMBRE,
  <strong class="text-color">TU_TÍTULO_PROFESIONAL</strong>
  TU_NIVEL...
</h2>
```

#### **index.html línea ~39-44** (Descripción):
```html
<p>
  TU DESCRIPCIÓN PERSONAL Y PROFESIONAL AQUÍ.
  Destaca tus fortalezas y pasiones.
</p>
```

### Proyectos

Para cada proyecto, modifica en `index.html`:

```html
<div class="card-proyecto">
  <img src="./public/img/TU_IMAGEN.png" alt="proyecto" />
  <div class="text-card">
    <div class="ver-proyecto">
      <h3>NOMBRE DEL PROYECTO</h3>
      <button onclick="window.open('TU_URL_GITHUB', '_blank')">
        Ver proyecto
      </button>
    </div>
    <p>DESCRIPCIÓN DEL PROYECTO AQUÍ (2-3 líneas)</p>
    <div class="tecnologias-card">
      <!-- Iconos de DevIcon -->
      <i class="devicon-TECNOLOGIA-plain"></i>
    </div>
  </div>
</div>
```

### Redes Sociales

**index.html línea ~201-212** (Footer):
```html
<div class="red-social github" 
     onclick="window.open('TU_URL_GITHUB', '_blank')">
  <img src="./public/logos/github.png" alt="GitHub" />
</div>
```

### Contacto

**index.html línea ~214-217**:
```html
<div id="contacto">
  <h3>Contacto</h3>
  <p>📧 tu.email@ejemplo.com</p>
  <p>📱 tu número</p>
</div>
```

---

## 5. ➕ AGREGAR NUEVAS SECCIONES

### Ejemplo: Sección de Certificaciones

#### 1. Agregar HTML (antes del footer):
```html
<section id="certificaciones" class="certificaciones">
  <h2 class="titulo-certificaciones">Certificaciones</h2>
  <div class="contenedor-certificaciones">
    <div class="certificacion-card">
      <h3>Nombre del Certificado</h3>
      <p>Institución - Año</p>
    </div>
    <!-- Más cards -->
  </div>
</section>
```

#### 2. Agregar CSS:
```css
.certificaciones {
  padding: 50px 100px;
}

.titulo-certificaciones {
  font-family: 'Poppins', sans-serif;
  font-size: 42px;
  text-align: center;
  margin-bottom: 50px;
  color: #fff;
}

.contenedor-certificaciones {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.certificacion-card {
  background: rgba(18, 18, 30, 0.5);
  backdrop-filter: blur(20px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease;
}

.certificacion-card:hover {
  transform: translateY(-5px);
}
```

#### 3. Agregar al menú:
```html
<li><a href="#certificaciones">Certificaciones</a></li>
```

---

## 6. 🚀 OPTIMIZAR PARA PRODUCCIÓN

### Minificar CSS y JavaScript

#### **Opción 1: Online**
- CSS: https://cssminifier.com/
- JS: https://javascript-minifier.com/

#### **Opción 2: NPM**
```bash
npm install -g uglifycss uglify-js
uglifycss style.css > style.min.css
uglifyjs script.js > script.min.js
```

Luego actualiza las referencias en `index.html`:
```html
<link rel="stylesheet" href="./style.min.css" />
<script src="./script.min.js"></script>
```

### Optimizar Imágenes

#### **Herramientas recomendadas:**
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim** (Mac): https://imageoptim.com/

#### **Formatos recomendados:**
- Fotos: `.jpg` o `.webp`
- Logos/Iconos: `.png` o `.svg`
- Tamaño máximo: 300KB por imagen

### Meta Tags SEO

Agregar en `<head>` de `index.html`:

```html
<!-- SEO Básico -->
<meta name="description" content="Portafolio de TU_NOMBRE - Desarrollador Full-Stack" />
<meta name="keywords" content="desarrollador, web, javascript, java, portafolio" />
<meta name="author" content="TU_NOMBRE" />

<!-- Open Graph (para redes sociales) -->
<meta property="og:title" content="Portafolio - TU_NOMBRE" />
<meta property="og:description" content="Desarrollador Full-Stack especializado en..." />
<meta property="og:image" content="URL_DE_TU_IMAGEN" />
<meta property="og:url" content="URL_DE_TU_SITIO" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Portafolio - TU_NOMBRE" />
<meta name="twitter:description" content="Desarrollador Full-Stack..." />
<meta name="twitter:image" content="URL_DE_TU_IMAGEN" />
```

---

## 📊 TIPS ADICIONALES

### 🎯 Performance
- Usar `loading="lazy"` en imágenes
- Minimizar JavaScript personalizado
- Usar CDN para librerías externas

### ♿ Accesibilidad
- Agregar `alt` descriptivo en imágenes
- Usar etiquetas semánticas (`<nav>`, `<section>`, etc.)
- Contraste de colores adecuado (mínimo 4.5:1)

### 📱 Mobile First
- Testear en dispositivos reales
- Usar Chrome DevTools para simular móviles
- Verificar touch targets (mínimo 44x44px)

### 🔍 SEO
- Título único por página
- Heading hierarchy (h1 → h2 → h3)
- URLs limpias y descriptivas

---

## 🆘 SOLUCIÓN DE PROBLEMAS COMUNES

### Las fuentes no se cargan
✅ Verifica la conexión a Internet
✅ Revisa la URL de Google Fonts
✅ Comprueba que el CSS tiene las fuentes correctas

### Las animaciones no funcionan
✅ Abre la consola del navegador (F12)
✅ Verifica que script.js está cargando
✅ Comprueba que no hay errores JavaScript

### El modo oscuro no persiste
✅ Verifica que localStorage está habilitado
✅ No uses modo incógnito para probar
✅ Revisa el código de toggleTheme()

### Las imágenes no aparecen
✅ Verifica las rutas de las imágenes
✅ Asegúrate que están en la carpeta `public/`
✅ Comprueba los nombres de archivo (case-sensitive)

---

## 📚 RECURSOS ÚTILES

- **Google Fonts**: https://fonts.google.com/
- **DevIcon**: https://devicon.dev/
- **Color Hunt**: https://colorhunt.co/
- **Coolors**: https://coolors.co/
- **CSS Gradient**: https://cssgradient.io/
- **Can I Use**: https://caniuse.com/

---

**¡Personaliza tu portafolio y hazlo único! 🎨✨**
