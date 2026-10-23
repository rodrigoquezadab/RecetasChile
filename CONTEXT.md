# 🇨🇱 Contexto del Proyecto • Sabores de Chile

Este documento sirve como **fuente única de verdad (Single Source of Truth)** para registrar la visión, arquitectura técnica, decisiones de diseño, historial de cambios e intenciones futuras del proyecto **Sabores de Chile**.

---

## 🎯 1. Visión y Propósito del Proyecto

**Sabores de Chile** es una aplicación web interactiva, moderna y de alto impacto visual orientada a preservar y difundir el patrimonio gastronómico tradicional de Chile.

### Pilares Fundamentales:
1. **Patrimonio y Rigor Cultural**: Cada receta incluye historia criolla, orígenes indígenas/coloniales, «El Secreto de la Abuela» y sugerencias de maridaje con vinos o bebestibles tradicionales.
2. **Autenticidad Visual**: Imágenes 100% reales de preparaciones tradicionales curadas de fuentes abiertas (Wikimedia Commons / Creative Commons), sin fotos de stock genéricas ni IA ficticia.
3. **Utilidad Real en Cocina**:
   - Escalador dinámico de porciones matemáticas (1 a 24 comensales) con recálculo automático de ingredientes y costos en CLP.
   - Lista interactiva de ingredientes con casillas de verificación (checklist).
   - **Modo Cocina (Kitchen Mode)**: Interfaz de pantalla completa con tipografía gigante, paso a paso guiado, drawer de ingredientes y temporizador con feedback auditivo.
4. **Accesibilidad y Rendimiento**: Carga instantánea, sin dependencias pesadas, navegación por teclado, soporte completo de modo oscuro/claro y diseño responsive impecable.

---

## 🛠️ 2. Stack Tecnológico y Arquitectura

- **Estructura**: HTML5 Semántico (`index.html`).
- **Estilos**: Vanilla CSS3 (`css/styles.css`) con variables CSS (`:root`), Grid, Flexbox y animaciones nativas.
- **Lógica**: Vanilla JavaScript modular ES6+ (`js/app.js`, `js/data.js`).
- **Servidor local de desarrollo**: Node.js nativo ligero (`serve.js`), sin dependencias `npm` obligatorias.
- **Control de Versiones**: Git & GitHub (`main`).

### Estructura de Directorios:
```text
RecetasChile/
├── assets/                  # Iconografía, recursos multimedia locales
├── css/
│   └── styles.css           # Sistema de diseño, tokens, componentes y media queries
├── js/
│   ├── app.js               # Lógica de estado, eventos, renderizado y UI
│   └── data.js              # Base de datos estructurada de recetas chilenas
├── index.html               # Markup principal de la aplicación
├── serve.js                 # Servidor HTTP local en Node.js
├── README.md                # Guía de usuario y presentación pública
├── CONTEXT.md               # Registro de contexto, arquitectura y decisiones (este archivo)
└── .gitignore
```

---

## 🎨 3. Sistema de Diseño e Identidad Visual

- **Paleta de Colores Inspirada en la Tierra y Cultura Chilena**:
  - `Terracota Greda Pomaire`: `#C8502A` / `#E28743` (Color primario de acento y calidez).
  - `Lapislázuli Chileno`: `#1D3557` / `#457B9D` (Zonas y contrastes costeros/andinos).
  - `Oro Trigo / Tostado`: `#E09E2B` (Alertas de dificultad y badges dorados).
  - `Verde Valle Central`: `#2A9D8F` (Precios económicos y badges positivos).
  - `Fondo Carbón / Greda Oscura (Dark Mode)`: `#120F0D` / `#1A1614`.
- **Tipografías Google Fonts**:
  - `Cinzel`: Títulos ceremoniales y herencia cultural.
  - `Playfair Display`: Títulos de recetas y encabezados de alta cocina.
  - `Plus Jakarta Sans`: Textos de lectura, instrucciones y métricas de alta legibilidad.

---

## 📝 4. Historial de Cambios y Decisiones Técnicas (Changelog)

### [2026-10-22] • Incorporación de Tradición «Comida China Chilena» y Búsqueda por Categoría
- **Requerimiento**: Integrar recetas emblemáticas de la cocina china-chilena de barrio: Arrollado Primavera, Salsa Tamarindo, Wantán con Carne Frito (Guantán) y Carne Mongoliana.
- **Implementación**:
  1. **Base de Datos (`js/data.js`)**: Separación minuciosa de ingredientes (cantidades, unidades, notas) para rellenos, masas caseras y fondos; técnicas paso a paso con tiempos exactos y consejos.
  2. **Nueva Categoría**: Creación de la categoría `🥢 Comida China` (`id: "china"`) en `CATEGORIAS_PLATILLO` y enlaces directos en `index.html`.
  3. **Fotografía Gastronómica**: Generación e integración de imágenes de alta fidelidad para cada una de las 4 recetas en `assets/recipes/`.
  4. **Buscador Predictivo y Normalización**: Implementación de función `normalizeText()` para búsqueda insensible a acentos/tildes (`guantan` vs `guantán`) y coincidencia directa por nombre de categoría en el buscador y dropdown predictivo.
  5. **Métricas**: Actualización del recetario a un total de 47 recetas tradicionales maestras.

### [2026-08-30] • Corrección de UX en Modo Cocina (Posicionamiento y Pull-to-Refresh)
- **Problema**: En teléfonos, al entrar al Modo Cocina o avanzar con «Siguiente Paso», el contenedor mostraba el final del texto o una posición desplazada, forzando al usuario a subir manualmente, lo cual disparaba accidentalmente el refresco de página (*pull-to-refresh*).
- **Causa**:
  1. `.kitchen-step-main` tenía `justify-content: center` junto con `overflow-y: auto`, provocando que en pantallas verticales el contenido se desplazara hacia abajo o recortara el inicio.
  2. No se reseteaba la posición `scrollTop = 0` al renderizar nuevos pasos en `renderKitchenStep()`.
  3. Faltaba contención de desplazamiento vertical en navegadores táctiles.
- **Solución implementada**:
  - Se cambió `justify-content: center` a `justify-content: flex-start` en `.kitchen-step-main`.
  - Se añadió `overscroll-behavior-y: contain` y `overscroll-behavior: contain` a los contenedores del Modo Cocina.
  - Se agregó `DOM.kitchenStepMain.scrollTop = 0` al abrir el modo cocina y en cada transición de paso.

### [2026-08-30] • Corrección de Scroll en Ficha Modal de Receta para Móviles
- **Problema**: Al abrir una receta en el teléfono, el banner del héroe (`.modal-hero`) y la barra de estadísticas (`.modal-stats-bar`) quedaban fijos en pantalla ocupando más de dos tercios de la pantalla útil, impidiendo leer cómodamente la receta.
- **Causa**: En el breakpoint `max-width: 600px`, `.recipe-modal-card` tenía `display: flex; flex-direction: column; height: 94vh;`, con `flex-shrink: 0` en el banner y la barra, y solo el cuerpo inferior tenía scroll interno.
- **Solución implementada**:
  - Se configuró `.recipe-modal-card` como el contenedor general de desplazamiento (`overflow-y: auto`, `overscroll-behavior-y: contain`).
  - Se eliminó el `flex-shrink: 0` de `.modal-hero` y `.modal-stats-bar`, y se dejó `.modal-body-layout` en `overflow-y: visible`.
  - Ahora al hacer scroll hacia abajo, la foto y las estadísticas suben naturalmente y desaparecen de la vista, dando el 100% de la pantalla al texto de la receta.
  - Se añadió reseteo de `scrollTop = 0` al abrir cualquier receta para iniciar siempre desde la cabecera.

### [Hitos Anteriores]
- Creación de la arquitectura base del recetario interactivo.
- Base de datos completa con recetas de Zona Norte, Centro, Sur, Patagonia y Rapa Nui.
- Escalador interactivo de comensales y costeo dinámico en pesos chilenos.
- Buscador predictivo en tiempo real con soporte de teclado.
- Sistema de favoritos persistente en `localStorage`.
- Modo Cocina con temporizador integrado y síntesis de audio/campana.

---

## 🔮 5. Intenciones Futuras y Roadmap de Mejoras

1. **Soporte PWA (Progressive Web App)**:
   - Implementar `manifest.json` y un Service Worker para permitir el uso y consulta de recetas 100% offline (ideal para cocinar sin señal de internet).
2. **Exportación y Compartir**:
   - Botón para enviar la lista de ingredientes calculada directamente por WhatsApp o copiarla como texto de compras.
3. **Ampliación del Patrimonio Culinario**:
   - Incorporar más recetas ancestrales de pueblos originarios (Kawésqar, Yagán, Chango, Diaguita) y dulces conventuales de la colonia.
4. **Temporizadores Múltiples**:
   - Soporte para ejecutar más de un temporizador en paralelo para recetas complejas que requieren cocción simultánea de acompañamiento y fondo.
