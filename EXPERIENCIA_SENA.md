# 🎓 Experiencia SENA Agregada

## ✅ CAMBIOS REALIZADOS

Se agregó exitosamente la experiencia del SENA a la sección "Mi Experiencia" del portafolio.

---

## 📝 INFORMACIÓN AGREGADA

### **Institución:**
**SENA** (Servicio Nacional de Aprendizaje)

### **Programa:**
Tecnólogo en Análisis y Desarrollo de Software

### **Estado:**
No culminado - **Presente**

### **Periodo:**
Diciembre 2022 - Presente

### **Aprendizajes incluidos:**
- ✅ UML (Unified Modeling Language) - Diagramas de sistemas
- ✅ Ciclo de vida del software (SDLC)
- ✅ Control de versiones con Git y GitHub
- ✅ Desarrollo de API REST

### **Proyecto destacado:**
**Gestor de Citas Médicas** - Sistema desarrollado aplicando los conocimientos del programa

---

## 🎨 ESTRUCTURA VISUAL

```
┌─────────────────────────────┐
│ Mi Experiencia              │
└─────────────────────────────┘

┌─────────────────────────────┐
│ 🟧 Generation               │ ← Primera experiencia
│ Front-end Developer         │
│ 21 Jun 2024 - En curso      │
│ • Desarrollé interfaces...  │
└─────────────────────────────┘
            ↓ 50px espacio
┌─────────────────────────────┐
│ 🟧 SENA                     │ ← Segunda experiencia
│ Tecnólogo en ADSO           │
│ Diciembre 2022 - Presente   │
│ • Aprendí UML...            │
└─────────────────────────────┘
```

---

## 📁 ARCHIVOS MODIFICADOS

### **1. index.html**
```html
<!-- Nueva sección agregada -->
<div class="contenedor-experiencia">
  <div class="lugar-experiencia">
    <img src="./public/img/Logo-sena.png" alt="logo sena" />
    <h3>- Tecnólogo en Análisis y Desarrollo de Software</h3>
  </div>
  <p>Diciembre 2022 - Presente</p>
  <ul>
    <li>Aprendí a diseñar diagramas UML...</li>
    <li>Estudié el ciclo de vida del desarrollo...</li>
    <li>Control de versiones con Git...</li>
    <li>Desarrollo de API REST...</li>
    <li>Desarrollé un proyecto de gestor de citas médicas...</li>
  </ul>
</div>
```

### **2. style.css**
```css
/* Espacio entre experiencias */
.contenedor-experiencia + .contenedor-experiencia {
  margin-top: 50px;
}
```

### **3. Imagen requerida**
- ✅ Logo SENA: `./public/img/Logo-sena.png`

---

## 🎯 CARACTERÍSTICAS

### **Ambas experiencias tienen:**
- ✅ Sombra naranja decorativa detrás del logo
- ✅ Glassmorphism effect (fondo translúcido con blur)
- ✅ Border sutil
- ✅ Box-shadow para profundidad
- ✅ Mismo diseño consistente

### **Diferencias:**
- Logos diferentes (Generation vs SENA)
- Títulos diferentes
- Fechas diferentes
- Contenido diferente

---

## 📊 CONTENIDO DETALLADO

### **Generation (2024 - En curso):**
- Enfoque: Frontend Development
- Habilidades: HTML, CSS, JavaScript, UI/UX
- Proyectos: PokéAPI, E-commerce
- Metodología: Trabajo en equipo, Git/GitHub

### **SENA (2022 - Presente):**
- Enfoque: Análisis y Desarrollo de Software
- Habilidades: UML, SDLC, Git, API REST
- Proyecto: Gestor de Citas Médicas
- Estado: En curso (no culminado)

---

## 🎨 ESTILOS APLICADOS

### **Layout:**
```css
margin: 30px 300px;        /* Centrado horizontal */
border-radius: 24px;       /* Bordes redondeados */
padding: 32px;             /* Espacio interno */
```

### **Efectos:**
```css
background: rgba(18, 18, 30, 0.5);  /* Glassmorphism */
backdrop-filter: blur(20px);         /* Blur del fondo */
box-shadow: 0 8px 32px rgba(0,0,0,0.3); /* Sombra */
```

### **Sombra naranja decorativa:**
```css
width: 140px;
height: 140px;
background: linear-gradient(135deg, #ff6b35, #f7931e);
filter: blur(40px);
opacity: 0.4;
top: 40px;
left: 20px;
```

---

## 📱 RESPONSIVE

### **Desktop (>1200px):**
- Ambas cards centradas con márgenes amplios
- Sombra naranja visible

### **Tablet (768-1200px):**
```css
.contenedor-experiencia {
  margin: 30px 150px;
}
```

### **Mobile (<768px):**
```css
.contenedor-experiencia {
  margin: 20px 30px;
}

.contenedor-experiencia + .contenedor-experiencia {
  margin-top: 30px; /* Menos espacio en móvil */
}
```

---

## ✏️ PERSONALIZAR

### **Cambiar el espaciado entre experiencias:**
```css
.contenedor-experiencia + .contenedor-experiencia {
  margin-top: 50px; /* Ajusta este valor */
}
```

### **Cambiar el color de la sombra del SENA:**
Si quieres un color diferente para SENA:
```css
.contenedor-experiencia:nth-child(2)::before {
  background: linear-gradient(135deg, #blue1, #blue2);
}
```

### **Agregar más experiencias:**
Solo copia y pega la estructura:
```html
<div class="contenedor-experiencia">
  <div class="lugar-experiencia">
    <img src="./public/img/TU_LOGO.png" alt="logo" />
    <h3>- Tu Posición/Programa</h3>
  </div>
  <p>Fecha inicio - Fecha fin</p>
  <ul>
    <li>Tu experiencia 1</li>
    <li>Tu experiencia 2</li>
  </ul>
</div>
```

---

## 🔍 VERIFICACIÓN

### **Checklist:**
- ✅ Logo SENA agregado en `/public/img/Logo-sena.png`
- ✅ Título: "Tecnólogo en Análisis y Desarrollo de Software"
- ✅ Fecha: "Diciembre 2022 - Presente"
- ✅ UML mencionado
- ✅ Ciclo de vida del software incluido
- ✅ Control de versiones mencionado
- ✅ API REST incluido
- ✅ Proyecto gestor de citas médicas destacado
- ✅ Sombra naranja detrás del logo
- ✅ Espacio entre experiencias

---

## 💡 SUGERENCIAS FUTURAS

### **Agregar más detalles:**
- Tecnologías específicas usadas en el gestor de citas (Java, MySQL, etc.)
- Número de ficha o cohorte del SENA
- Certificaciones obtenidas durante el programa
- Instructores destacados (opcional)

### **Proyectos SENA:**
Considera agregar el gestor de citas médicas a la sección "Mis Proyectos":
```html
<div class="card-proyecto">
  <img src="./public/img/gestor-citas.png" alt="Gestor de Citas" />
  <div class="text-card">
    <h3>Gestor de Citas Médicas</h3>
    <p>Sistema desarrollado en SENA para gestionar citas...</p>
  </div>
</div>
```

---

## 📄 TEXTOS USADOS

### **Español profesional:**
- "Aprendí a diseñar diagramas UML" (en lugar de "aprendí UML")
- "Estudié el ciclo de vida" (en lugar de "vi el ciclo de vida")
- "Control de versiones" (término técnico correcto)
- "Desarrollé un proyecto" (logro destacado)

### **Estado:**
- "Presente" (en lugar de "en curso" para diferenciarlo de Generation)
- Indica claramente que no está culminado

---

**¡Tu experiencia del SENA ahora está visible en el portafolio! 🎓✨**
