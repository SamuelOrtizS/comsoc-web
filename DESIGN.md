---
name: IEEE ComSoc Univalle
description: Hub digital del Capítulo Estudiantil IEEE ComSoc — plataforma técnica para IoT, 5G/6G y comunicaciones cuánticas.
colors:
  primary: "#155dfc"
  primary-lighter: "#5d8df6"
  primary-darker: "#0040cf"
  accent-cyan: "#22d3ee"
  accent-cyan-lighter: "#65dbed"
  accent-cyan-darker: "#08adc6"
  accent-purple: "#a855f7"
  accent-purple-lighter: "#c898f6"
  accent-purple-darker: "#880dfd"
  accent-emerald: "#34d399"
  accent-emerald-lighter: "#6fdab3"
  accent-emerald-darker: "#1ea775"
  accent-amber: "#f59e0b"
  accent-amber-lighter: "#f1b652"
  accent-amber-darker: "#bd7700"
  accent-red: "#ef4444"
  accent-red-lighter: "#f08686"
  accent-red-darker: "#e60b0b"
  accent-yellow: "#facc15"
  accent-yellow-lighter: "#f5d65d"
  accent-yellow-darker: "#cda400"
  accent-rose: "#f43f5e"
  accent-rose-lighter: "#f38396"
  accent-rose-darker: "#ec042c"
  accent-teal: "#2dd4bf"
  accent-teal-lighter: "#69dacc"
  accent-teal-darker: "#1ba392"
  neutral-bg: "#050816"
  neutral-bg-lighter: "#0c1333"
  neutral-bg-darker: "#03050e"
  neutral-bg-secondary: "#0a0f24"
  neutral-bg-secondary-lighter: "#121b40"
  neutral-bg-secondary-darker: "#070a17"
  neutral-bg-deep-slate: "#0f172a"
  neutral-bg-deep-slate-lighter: "#182544"
  neutral-bg-deep-slate-darker: "#0a0f1b"
  neutral-bg-emerald-dark: "#0a1f1a"
  neutral-bg-emerald-dark-lighter: "#133a31"
  neutral-bg-emerald-dark-darker: "#061411"
  neutral-bg-deep-purple: "#0d0720"
  neutral-bg-deep-purple-lighter: "#190d3d"
  neutral-bg-deep-purple-darker: "#080515"
  neutral-text-primary: "#ffffff"
  neutral-text-primary-lighter: "#ffffff"
  neutral-text-primary-darker: "#e2e8f0"
  neutral-text-secondary: "#cbd5e0"
  neutral-text-secondary-lighter: "#dce2e8"
  neutral-text-secondary-darker: "#a5b6c9"
  glass-bg: "rgba(255, 255, 255, 0.05)"
  glass-bg-lighter: "rgba(255, 255, 255, 0.08)"
  glass-bg-darker: "rgba(255, 255, 255, 0.03)"
  glass-border: "rgba(255, 255, 255, 0.1)"
  glass-border-lighter: "rgba(255, 255, 255, 0.15)"
  glass-border-darker: "rgba(255, 255, 255, 0.06)"
typography:
  display:
    fontFamily: "Formata, 'Space Grotesk', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Formata, 'Space Grotesk', system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Formata, 'Space Grotesk', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "'Nunito Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Share Tech Mono', monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "22px"
  2xl: "24px"
  3xl: "28px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-text-primary}"
    rounded: "{rounded.lg}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "{colors.neutral-bg}"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.neutral-text-secondary}"
    rounded: "{rounded.lg}"
    padding: "14px 28px"
  card:
    backgroundColor: "{colors.neutral-bg-secondary}"
    textColor: "{colors.neutral-text-primary}"
    rounded: "{rounded.xl}"
    padding: "24px"
  card-hover:
    backgroundColor: "{colors.neutral-bg-secondary}"
---

# Design System: IEEE ComSoc Univalle

## Overview

**Creative North Star: "Órbita ComSoc"**

El sistema orbita alrededor de una idea central: una constelación en movimiento. Cada sección es un satélite —hero, eventos, pilares, proyectos, aliados— que gira en torno a un núcleo oscuro y estable, sostenido por gravedad visual (vidrio, blur y luz). La estética no es decorativa sino orbital: profundidad por capas tonales, no por sombras arrojadas; luz que se difunde como señal, no como decoración.

Es un mundo **tech sobrio y preciso**. La densidad es media, la jerarquía es estricta y la voz es académica pero accesible. Se evita el brillo gratuito, el neón saturado y la ilustración genérica de stock tech. La anti-referencia es el “startup oscuro con gradientes agresivos” — aquí el gradiente es atmosférico, contenido y siempre al servicio de la legibilidad.

**Key Characteristics:**
- Órbitas y capas — profundidad por tono y blur, no por sombra dura
- Precisión académica — métricas verificables, no vanity
- Vidrio sobrio — `glass-card` con borde `rgba(255,255,255,0.1)` y desenfoque contenido
- Señal como luz — cian como portadora, no como decoración

## Colors

Paleta oscura de base profunda con acentos espectrales. El fondo absorbe la luz y los acentos la portan como señal. Sincronizada 1:1 con `src/styles/global.css:9` (`@theme` Tailwind v4).

### Sistema Auxiliar de Degradados

Cada color base expone dos compañeros para construir degradados sin hardcodear hex fuera del tema: `*-lighter` (highlight superior) y `*-darker` (sombra inferior). Acentos vibrantes: ±13% luminosidad HLS; fondos profundos: +7% / −35% para mantener legibilidad en lienzos casi negros; vidrio: ± opacidad. Uso Tailwind: `bg-gradient-to-br from-accent-blue-lighter to-accent-blue-darker`, `from-bg-primary-lighter to-bg-primary`, `border-glass-border-lighter`, `from-glass-bg-lighter to-glass-bg-darker`. Ver tabla por familia.

### Primary
- **Azul Señal** (#155dfc): Acción primaria, enlaces principales y CTAs. Se usa en ≤10% de la superficie; su rareza es el punto.
  - `primary-lighter` (#5d8df6): Highlight de degradados y hover de botones. `from-primary-lighter`
  - `primary-darker` (#0040cf): Sombra de degradado y estado pressed/active. `to-primary-darker`

### Secondary
- **Cian Espectral** (#22d3ee): Portadora principal — títulos de sección, estados activos, hover de tarjetas y barras de progreso. Es el color de la señal viva.
  - `accent-cyan-lighter` (#65dbed): Highlight cian, hover de glass-card.
  - `accent-cyan-darker` (#08adc6): Sombra y progreso profundo.
- **Púrpura Cuántico** (#a855f7): Investigación y desarrollo, categorías y etiquetas de proyectos. Marca lo experimental. Hero duotono junto a azul.
  - `accent-purple-lighter` (#c898f6): Highlight púrpura.
  - `accent-purple-darker` (#880dfd): Sombra CTA púrpura.

### Tertiary
- **Esmeralda de Enlace** (#34d399): Éxito, activos y confirmación. Badges `Activo`, métricas de aliados.
  - `accent-emerald-lighter` (#6fdab3) / `darker` (#1ea775)
- **Ámbar de Órbita** (#f59e0b): Advertencia no crítica, banner de desarrollo y estados de monitoreo.
  - `accent-amber-lighter` (#f1b652) / `darker` (#bd7700)
- **Rojo de Alerta** (#ef4444): Error, peligro y acciones destructivas. Uso puntual, no decorativo.
  - `accent-red-lighter` (#f08686) / `darker` (#e60b0b)
- **Amarillo de Atención** (#facc15): Resaltado, badges informativos y gamificación. Alto contraste sobre oscuro.
  - `accent-yellow-lighter` (#f5d65d) / `darker` (#cda400)
- **Rosa Cálido** (#f43f5e): Énfasis cálido, etiquetas especiales y CTAs secundarios. Alternativa cálida a púrpura.
  - `accent-rose-lighter` (#f38396) / `darker` (#ec042c)
- **Teal de Portadora** (#2dd4bf): Degradados de progreso y acentos secundarios de financiamiento.
  - `accent-teal-lighter` (#69dacc) / `darker` (#1ba392)

### Neutral — Fondos
- **Fondo Órbita** (#050816): Fondo primario de toda la aplicación, base oscura que absorbe.
  - `neutral-bg-lighter` (#0c1333): Elevación sutil para `from-bg-primary-lighter`.
  - `neutral-bg-darker` (#03050e): Pozo / sombra inferior.
- **Fondo Satélite** (#0a0f24): Tarjetas y contenedores secundarios (Unirse, Tienda, glass-card).
  - `neutral-bg-secondary-lighter` (#121b40) / `darker` (#070a17)
- **Fondo Profundo Slate** (#0f172a): Tarjetas de alto contraste. `from-bg-deep-slate to-bg-deep-slate-darker`.
  - `lighter` (#182544) / `darker` (#0a0f1b)
- **Fondo Esmeralda Oscuro** (#0a1f1a): Secciones de financiamiento y éxito. Alternativa profunda a emerald.
  - `lighter` (#133a31) / `darker` (#061411)
- **Fondo Púrpura Profundo** (#0d0720): Banners de donación y secciones especiales. Base hero alternativa.
  - `lighter` (#190d3d) / `darker` (#080515)

### Neutral — Texto
- **Texto Primario** (#ffffff): Títulos H1-H6 y lectura principal. Máximo contraste.
  - `lighter` (#ffffff) — clamp a blanco puro para API consistente.
  - `darker` (#e2e8f0 / slate-200): Variante atenuada para degradados de texto.
- **Texto Secundario** (#cbd5e0): Descripciones, subtítulos y meta. [Nota: referencia original #94a3b8, token implementado #cbd5e0].
  - `lighter` (#dce2e8) — highlight de texto.
  - `darker` (#a5b6c9) — estado atenuado.

### Neutral — Vidrio
- **Fondo de Cristal** (rgba(255,255,255,0.05)): Relleno de `glass-panel`. Requiere `backdrop-blur`.
  - `glass-bg-lighter` (0.08) — highlight / hover.
  - `glass-bg-darker` (0.03) — sombra / inactivo.
- **Borde de Cristal** (rgba(255,255,255,0.1)): Borde sutil de glassmorphism.
  - `glass-border-lighter` (0.15) — hover.
  - `glass-border-darker` (0.06) — inactivo.

### Tabla rápida — Tokens CSS (`--color-*` en `global.css`)
| Familia | Base | Lighter | Darker | Degradado sugerido |
|---|---|---|---|---|
| `accent-blue` | `#155dfc` | `#5d8df6` | `#0040cf` | `from-accent-blue-lighter to-accent-blue-darker` |
| `accent-cyan` | `#22d3ee` | `#65dbed` | `#08adc6` | `from-accent-cyan-lighter to-accent-cyan-darker` |
| `accent-emerald` | `#34d399` | `#6fdab3` | `#1ea775` | `from-accent-emerald-lighter to-accent-emerald-darker` |
| `accent-purple` | `#a855f7` | `#c898f6` | `#880dfd` | `from-accent-purple-lighter to-accent-purple-darker` |
| `accent-amber` | `#f59e0b` | `#f1b652` | `#bd7700` | `from-accent-amber-lighter to-accent-amber-darker` |
| `accent-red` | `#ef4444` | `#f08686` | `#e60b0b` | `from-accent-red-lighter to-accent-red-darker` |
| `accent-yellow` | `#facc15` | `#f5d65d` | `#cda400` | `from-accent-yellow-lighter to-accent-yellow-darker` |
| `accent-rose` | `#f43f5e` | `#f38396` | `#ec042c` | `from-accent-rose-lighter to-accent-rose-darker` |
| `accent-teal` | `#2dd4bf` | `#69dacc` | `#1ba392` | `from-accent-teal-lighter to-accent-teal-darker` |
| `bg-primary` | `#050816` | `#0c1333` | `#03050e` | `from-bg-primary-lighter to-bg-primary` |
| `bg-secondary` | `#0a0f24` | `#121b40` | `#070a17` | `from-bg-secondary to-bg-secondary-lighter` |
| `bg-deep-slate` | `#0f172a` | `#182544` | `#0a0f1b` | `from-bg-deep-slate-lighter to-bg-deep-slate-darker` |
| `bg-emerald-dark` | `#0a1f1a` | `#133a31` | `#061411` | `from-bg-emerald-dark to-bg-emerald-dark-lighter` |
| `bg-deep-purple` | `#0d0720` | `#190d3d` | `#080515` | `from-bg-deep-purple to-bg-deep-purple-lighter` |
| `glass-bg` | `0.05` | `0.08` | `0.03` | `from-glass-bg-lighter to-glass-bg-darker` |
| `glass-border` | `0.10` | `0.15` | `0.06` | `border-glass-border-lighter` |

### Named Rules
**The Orbital Signal Rule.** El cian espectral solo porta señal — estados, enlaces y bordes activos. Nunca como relleno decorativo de grandes superficies.

**The Dark Matter Rule.** El fondo permanece oscuro. No se introduce modo claro; la profundidad se construye por tono y blur, no por inversión.

**The Gradient Companion Rule.** Todo degradado usa compañeros `lighter→darker` del mismo token, nunca hex hardcodeado fuera de `global.css`. Ej.: `bg-gradient-to-br from-accent-blue via-accent-blue to-accent-blue-darker` — mantiene armonía orbital y facilita theming.

## Typography

**Display Font:** Formata (con Space Grotesk, system-ui)
**Body Font:** Nunito Sans (con system-ui)
**Label/Mono Font:** Share Tech Mono, monospace

**Character:** Formata aporta autoridad técnica y geometría orbital para titulares; Nunito Sans aporta legibilidad humana y ritmo para cuerpo; Share Tech Mono aporta precisión de telemetría para etiquetas, estados y código.

### Hierarchy
- **Display** (700, clamp(2.5rem,7vw,4.5rem), 1, -0.04em): Hero y números de métricas. Solo en hero y estadísticas.
- **Headline** (700, clamp(1.875rem,4vw,3rem), 1.1, -0.03em): Títulos de sección (Ecosistema, Proyectos Destacados). Hasta H2.
- **Title** (600, 1.25rem, 1.3): Títulos de tarjeta y H3. Siempre acompañado de descripción en body.
- **Body** (400, 1rem/1.6): Párrafos y descripciones. Longitud óptima 65–75ch, `font-light` en hero.
- **Label** (400, 0.625rem, 1.4, 0.14em, uppercase): Pills, badges, estados, deadlines. Siempre mono, tracking amplio.

### Named Rules
**The Telemetry Label Rule.** Todo meta (estado, fecha límite, categoría) es mono `Share Tech Mono` 10px uppercase. No se usa sans para meta.

## Layout

Modelo orbital y en rejilla, con densidad media y ritmo de 8px. Contenedor `max-w-7xl` centrado con `px-4 sm:px-6 lg:px-8`, secciones con `py-16 sm:py-20`, hero `min-h-[90vh]` aislado. Grillas: `1 col → 2 cols (md) → 4 cols (lg)` para pilares y aliados; `1 → 2 → 3` para proyectos/recursos. Espaciado interno de tarjetas `p-6` (24px), gap `gap-6` (24px) / `gap-8` (32px) para secciones. En móvil, CTAs en columna `flex-col sm:flex-row`, navegación colapsa a hamburger `44×44` mínimo. Sin `content-visibility` en secciones críticas sobre el pliegue; `content-auto` solo bajo el pliegue con `contain-intrinsic-size: auto 600px`.

## Elevation & Depth

Sistema por **capas tonales**, no por sombras. La profundidad se construye con desenfoque y tono, no con elevación arrojada.

Fondo `#050816` → capa satélite `#0a0f24` con `backdrop-blur 16px` y borde `rgba(255,255,255,0.1)` → capa activa con `border-accent-cyan/35` y `translateY(-4px)`. Las sombras solo aparecen como respuesta a hover, nunca en reposo.

### Shadow Vocabulary
- **Card Hover** (`box-shadow: 0 12px 30px -10px rgba(21, 93, 252, 0.25)`): Elevación sutil al interactuar con `glass-card`.
- **Glow CTA** (`box-shadow: 0 18px 40px -18px rgba(21,93,252,0.9)`): Resplandor difuso bajo CTAs primarios, no sombra dura.
- **Dot Grid Glow** (`radial-gradient` + `0_0_30px rgba(34,211,238,0.12)`): Atmósfera, no elevación.

### Named Rules
**The Tonal Orbit Rule.** Las superficies son planas en reposo; la profundidad aparece solo como respuesta (hover, focus, active) mediante blur y traslación, nunca como sombra permanente.

## Shapes

Lenguaje de forma suavemente orbital — esquinas redondeadas generosas y bordes difusos, sin recortes duros ni geometrías agresivas. Radio base `16px` (lg) para botones y `22px` (xl) para tarjetas, `24px` (2xl) para modales y `28px` (3xl) para secciones destacadas. Bordes siempre `1px solid rgba(255,255,255,0.1)` en reposo, `rgba(34,211,238,0.35)` en hover. Clipping solo para imágenes `aspect-video`/`aspect-square` con `object-cover` y `rounded-2xl` overflow. El banner de desarrollo usa `rounded-2xl` (16px) para no competir con el hero.

## Components

### Buttons
- **Shape:** Redondeado medio (16px lg)
- **Primary:** `background: #155dfc` → hover `#22d3ee`, `color: #ffffff`, `padding: 14px 28px`, `shadow: 0 18px 40px -18px rgba(21,93,252,0.9)`, `transition: all 0.3s`
- **Hover / Focus:** `translateY(-2px)` + `shadow` + `focus-visible:ring-2 ring-accent-cyan`
- **Secondary / Ghost:** `background: rgba(255,255,255,0.05)`, `color: #cbd5e0`, `border: 1px solid rgba(255,255,255,0.1)`, hover `border-accent-cyan/40` + `bg-white/10`

### Cards / Containers
- **Corner Style:** `22px` (xl) para tarjetas, `28px` (3xl) para destacados
- **Background:** `bg-bg-secondary #0a0f24` con `backdrop-blur 16px`
- **Shadow Strategy:** Solo en hover (`0 12px 30px -10px rgba(21,93,252,0.25)`), tono según Elevation
- **Border:** `1px solid rgba(255,255,255,0.1)` → hover `rgba(34,211,238,0.35)`
- **Internal Padding:** `24px` (`p-6`), `32px` en modales

### Chips
- **Style:** `rounded-full`, `border 1px`, `bg-black/70 backdrop-blur-md`, `text 10px mono uppercase`
- **State:** `border-accent-cyan/30 text-accent-cyan` para activo, `border-white/10 text-text-secondary` para reposo

### Inputs / Fields
- **Style:** No hay inputs nativos en el sistema actual; los modales usan `rounded-xl border-white/10 bg-white/5`
- **Focus:** `focus-visible:ring-2 ring-accent-cyan`

### Navigation
- **Style:** `fixed top-0 z-50 bg-bg-primary/70 supports-[backdrop-filter]:backdrop-blur-xl`, `h-20`, `max-w-7xl`
- **Typography:** `text-sm font-medium`, `text-text-secondary` reposo → `text-text-primary` hover, `text-accent-cyan font-semibold` activo con `bg-accent-blue/10 border-accent-cyan/20`
- **Mobile:** Hamburger `44×44` `rounded-xl`, overlay `fixed inset-0 bg-bg-primary/85 backdrop-blur-2xl`, nav vertical `rounded-2xl`

### Countdown Timer
- **Style:** `glass-card rounded-2xl border-accent-cyan/20`, 4 celdas `rounded-xl bg-white/5`
- **Behavior:** `role="timer" aria-live="off"` con throttling por `visibilitychange`, `prefers-reduced-motion` desactiva `animate-ping`

## Do's and Don'ts

### Do:
- **Do** usar `glass-card` con `backdrop-blur 16px` y borde `rgba(255,255,255,0.1)` para todas las tarjetas de contenido.
- **Do** reservar el cian `#22d3ee` para señal — estados, enlaces y bordes activos, nunca como fondo sólido grande.
- **Do** mantener hero con un solo H1 `sr-only` y jerarquía CTA primaria (gradient) + secundaria (text link).
- **Do** usar `material-symbols:xxx-rounded` validado vía `astro-icon` con `aria-hidden="true"` y `w-4 h-4` / `w-6 h-6`.
- **Do** respetar `prefers-reduced-motion` — desactiva `animate-ping/pulse` y `CustomCursor`.

### Don't:
- **Don't** usar `cursor:none !important` global — el cursor custom es solo decorativo.
- **Don't** introducir `palette-rounded` o colores hex ad-hoc fuera de `global.css:24` — usa tokens.
- **Don't** usar `contain: paint` en header con dropdowns — recorta el `absolute` del submenu.
- **Don't** randomizar contenido destacado — usa orden determinístico por `fechaInicio` + `?event=slug` client-side.
- **Don't** anidar `<p>` en `<p>` en Footer — usa `div` contenedor.

