---
name: IEEE ComSoc Univalle
description: Hub digital del Capítulo Estudiantil IEEE ComSoc — plataforma técnica para IoT, 5G/6G y comunicaciones cuánticas.
colors:
  primary: "#00629b"
  primary-lighter: "#00aeef"
  primary-darker: "#002855"
  accent-cyan: "#00aeef"
  accent-cyan-lighter: "#00b5e2"
  accent-cyan-darker: "#009ca6"
  accent-purple: "#981d97"
  accent-purple-lighter: "#bc5fbc"
  accent-purple-darker: "#772583"
  accent-emerald: "#00843d"
  accent-emerald-lighter: "#78be20"
  accent-emerald-darker: "#006341"
  accent-amber: "#ffa300"
  accent-amber-lighter: "#ffc72c"
  accent-amber-darker: "#e87722"
  accent-red: "#ba0c2f"
  accent-red-lighter: "#d94060"
  accent-red-darker: "#861f41"
  accent-yellow: "#ffd100"
  accent-yellow-lighter: "#ffe166"
  accent-yellow-darker: "#ffc72c"
  accent-rose: "#861f41"
  accent-rose-lighter: "#ba0c2f"
  accent-rose-darker: "#6b1530"
  accent-teal: "#009ca6"
  accent-teal-lighter: "#00b8c4"
  accent-teal-darker: "#007377"
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

Es un mundo **tech sobrio y preciso**, alineado con la guía oficial de marca **IEEE Brand Identity Guidelines** y **IEEE ComSoc Brand Guidelines**. La densidad es media, la jerarquía es estricta y la voz es académica pero accesible.

**Key Characteristics:**
- Órbitas y capas — profundidad por tono y blur, no por sombra dura
- Precisión y fidelidad de marca IEEE — colores oficiales Master Brand, ComSoc Cyan, Bright & Dark Palettes
- Vidrio sobrio — `glass-card` con borde `rgba(255,255,255,0.1)` y desenfoque contenido
- Señal como luz — cian como portadora, no como decoración

## Colors

Paleta oficial IEEE/ComSoc adaptada al sistema oscuro orbital. Sincronizada 1:1 con `src/styles/global.css` (`:root` con tokens `--ieee-*` y `@theme` con `--color-accent-*`).

### Paleta Canónica IEEE (`--color-ieee-*` en `@theme`)

#### Master Brand & Identidad ComSoc
| Token Base | Nombre / Especificación Oficial | Hex |
|---|---|---|
| `--color-ieee-blue` | IEEE Master Brand Blue (Pantone 3015 C) | `#00629B` |
| `--color-ieee-cyan` | IEEE Process Cyan C | `#00B5E2` |
| `--color-ieee-comsoc-cyan` | ComSoc Process Cyan C | `#00AEEF` |
| `--color-ieee-comsoc-dark-blue` | ComSoc Dark Blue (Pantone 308 C) | `#005F98` |
| `--color-ieee-black-80` | ComSoc Black 80% | `#414141` |
| `--color-ieee-white` | IEEE Pure White | `#FFFFFF` |
| `--color-ieee-black` | IEEE Pure Black | `#000000` |

#### IEEE Bright Palette
| Token Base | Nombre / Especificación Oficial | Hex |
|---|---|---|
| `--color-ieee-orange-bright` | IEEE Orange Bright (Pantone 137 C) | `#FFA300` |
| `--color-ieee-yellow-bright` | IEEE Yellow Bright (Pantone 109 C) | `#FFD100` |
| `--color-ieee-green-bright` | IEEE Green Bright (Pantone 368 C) | `#78BE20` |
| `--color-ieee-dark-green-bright` | IEEE Dark Green Bright (Pantone 348 C) | `#00843D` |
| `--color-ieee-red-bright` | IEEE Red Bright (Pantone 200 C) | `#BA0C2F` |
| `--color-ieee-purple-bright` | IEEE Purple Bright (Pantone 254 C) | `#981D97` |
| `--color-ieee-teal-bright` | IEEE Teal Bright (Pantone 320 C) | `#009CA6` |

#### IEEE Dark Palette
| Token Base | Nombre / Especificación Oficial | Hex |
|---|---|---|
| `--color-ieee-orange-dark` | IEEE Orange Dark (Pantone 158 C) | `#E87722` |
| `--color-ieee-yellow-dark` | IEEE Yellow Dark (Pantone 123 C) | `#FFC72C` |
| `--color-ieee-green-dark` | IEEE Green Dark (Pantone 370 C) | `#658D1B` |
| `--color-ieee-dark-green-dark` | IEEE Dark Green Dark (Pantone 3425 C) | `#006341` |
| `--color-ieee-red-dark` | IEEE Red Dark (Pantone 208 C) | `#861F41` |
| `--color-ieee-purple-dark` | IEEE Purple Dark (Pantone 2612 C) | `#772583` |
| `--color-ieee-teal-dark` | IEEE Teal Dark (Pantone 322 C) | `#007377` |
| `--color-ieee-navy` | IEEE Navy (Pantone 295 C) | `#002855` |
| `--color-ieee-gray-cool` | IEEE Cool Gray 9 C | `#75787B` |

### Primary
- **Azul IEEE Master Brand** (`var(--color-ieee-blue)` / `#00629B`): Acción primaria, identidad global IEEE, enlaces principales y CTAs.
  - `primary-lighter` (`var(--color-ieee-comsoc-cyan)` / `#00aeef`): Highlight de degradados y hover.
  - `primary-darker` (`var(--color-ieee-navy)` / `#002855`): Sombra de degradado y estado pressed/active.

### Secondary
- **Cian ComSoc** (`var(--color-ieee-comsoc-cyan)` / `#00aeef`): Portadora principal — títulos de sección, estados activos, hover de tarjetas y barras de progreso.
  - `accent-cyan-lighter` (`var(--color-ieee-cyan)` / `#00b5e2`): Highlight cian, hover de glass-card.
  - `accent-cyan-darker` (`var(--color-ieee-teal-bright)` / `#009ca6`): Sombra y progreso profundo.
- **Púrpura IEEE** (`var(--color-ieee-purple-bright)` / `#981d97`): Investigación y desarrollo, categorías y etiquetas de proyectos.
  - `accent-purple-lighter` (`#bc5fbc`): Highlight púrpura.
  - `accent-purple-darker` (`var(--color-ieee-purple-dark)` / `#772583`): Sombra CTA púrpura.

### Tertiary
- **Verde IEEE** (`var(--color-ieee-dark-green-bright)` / `#00843d`): Éxito, activos y confirmación. Badges `Activo`, métricas.
  - `accent-emerald-lighter` (`var(--color-ieee-green-bright)` / `#78be20`) / `darker` (`var(--color-ieee-dark-green-dark)` / `#006341`)
- **Naranja/Ámbar IEEE** (`var(--color-ieee-orange-bright)` / `#ffa300`): Advertencia no crítica, banner de desarrollo y monitoreo.
  - `accent-amber-lighter` (`var(--color-ieee-yellow-dark)` / `#ffc72c`) / `darker` (`var(--color-ieee-orange-dark)` / `#e87722`)
- **Rojo IEEE** (`var(--color-ieee-red-bright)` / `#ba0c2f`): Error, peligro y acciones destructivas.
  - `accent-red-lighter` (`#d94060`) / `darker` (`var(--color-ieee-red-dark)` / `#861f41`)
- **Amarillo IEEE** (`var(--color-ieee-yellow-bright)` / `#ffd100`): Resaltado, badges informativos y gamificación.
  - `accent-yellow-lighter` (`#ffe166`) / `darker` (`var(--color-ieee-yellow-dark)` / `#ffc72c`)
- **Rosa/Vino IEEE** (`var(--color-ieee-red-dark)` / `#861f41`): Énfasis cálido y alternativo.
  - `accent-rose-lighter` (`var(--color-ieee-red-bright)` / `#ba0c2f`) / `darker` (`#6b1530`)
- **Teal IEEE** (`var(--color-ieee-teal-bright)` / `#009ca6`): Degradados de progreso y detalles técnicos.
  - `accent-teal-lighter` (`#00b8c4`) / `darker` (`var(--color-ieee-teal-dark)` / `#007377`)

### Neutral — Fondos
- **Fondo Órbita** (#050816): Fondo primario de toda la aplicación, base oscura que absorbe.
  - `neutral-bg-lighter` (#0c1333) / `neutral-bg-darker` (#03050e)
- **Fondo Satélite** (#0a0f24): Tarjetas y contenedores secundarios (Unirse, Tienda, glass-card).
  - `neutral-bg-secondary-lighter` (#121b40) / `darker` (#070a17)
- **Fondo Profundo Slate** (#0f172a): Tarjetas de alto contraste.
  - `lighter` (#182544) / `darker` (#0a0f1b)
- **Fondo Esmeralda Oscuro** (#0a1f1a): Secciones de financiamiento y éxito.
  - `lighter` (#133a31) / `darker` (#061411)
- **Fondo Púrpura Profundo** (#0d0720): Banners de donación y secciones especiales.
  - `lighter` (#190d3d) / `darker` (#080515)

### Neutral — Texto
- **Texto Primario** (#ffffff): Títulos H1-H6 y lectura principal.
- **Texto Secundario** (#cbd5e0): Descripciones, subtítulos y meta.

### Neutral — Vidrio
- **Fondo de Cristal** (rgba(255,255,255,0.05)): Relleno de `glass-panel`. Requiere `backdrop-blur`.
- **Borde de Cristal** (rgba(255,255,255,0.1)): Borde sutil de glassmorphism.

### Tabla rápida — Tokens CSS (`--color-*` en `global.css`)

#### Acentos
| Familia | Base | Lighter | Darker | Token IEEE Referenciado |
|---|---|---|---|---|
| `accent-blue` | `#00629b` | `#00aeef` | `#002855` | `var(--color-ieee-blue)` |
| `accent-cyan` | `#00aeef` | `#00b5e2` | `#009ca6` | `var(--color-ieee-comsoc-cyan)` |
| `accent-emerald` | `#00843d` | `#78be20` | `#006341` | `var(--color-ieee-dark-green-bright)` |
| `accent-purple` | `#981d97` | `#bc5fbc` | `#772583` | `var(--color-ieee-purple-bright)` |
| `accent-amber` | `#ffa300` | `#ffc72c` | `#e87722` | `var(--color-ieee-orange-bright)` |
| `accent-red` | `#ba0c2f` | `#d94060` | `#861f41` | `var(--color-ieee-red-bright)` |
| `accent-yellow` | `#ffd100` | `#ffe166` | `#ffc72c` | `var(--color-ieee-yellow-bright)` |
| `accent-rose` | `#861f41` | `#ba0c2f` | `#6b1530` | `var(--color-ieee-red-dark)` |
| `accent-teal` | `#009ca6` | `#00b8c4` | `#007377` | `var(--color-ieee-teal-bright)` |

#### Fondos y Superficies
| Token | Base | Lighter | Darker | Uso Principal |
|---|---|---|---|---|
| `bg-primary` | `#050816` | `#0c1333` | `#03050e` | Lienzo principal orbital (`body`) |
| `bg-secondary` | `#0a0f24` | `#121b40` | `#070a17` | Tarjetas satélite y contenedores (`glass-card`) |
| `bg-deep-slate` | `#0f172a` | `#182544` | `#0a0f1b` | Tarjetas y paneles de alto contraste |
| `bg-emerald-dark` | `#0a1f1a` | `#133a31` | `#061411` | Secciones temáticas de éxito / proyectos |
| `bg-deep-purple` | `#0d0720` | `#190d3d` | `#080515` | Banners especiales de donación y tecnología |

#### Jerarquía de Texto
| Token | Base | Lighter | Darker | Token IEEE Referenciado |
|---|---|---|---|---|
| `text-primary` | `#ffffff` | `#ffffff` | `#e2e8f0` | `var(--ieee-white)` |
| `text-secondary` | `#cbd5e0` | `#dce2e8` | `#a5b6c9` | Directo (gris neutro azulado) |

#### Cristal / Glassmorphism
| Token | Base | Lighter | Darker | Uso |
|---|---|---|---|---|
| `glass-bg` | `rgba(255, 255, 255, 0.05)` | `rgba(255, 255, 255, 0.08)` | `rgba(255, 255, 255, 0.03)` | Relleno `glass-panel` con blur |
| `glass-border` | `rgba(255, 255, 255, 0.10)` | `rgba(255, 255, 255, 0.15)` | `rgba(255, 255, 255, 0.06)` | Borde de vidrio y separadores |

### Named Rules
**The Orbital Signal Rule.** El cian ComSoc solo porta señal — estados, enlaces y bordes activos. Nunca como relleno decorativo de grandes superficies.

**The Dark Matter Rule.** El fondo permanece oscuro. No se introduce modo claro; la profundidad se construye por tono y blur, no por inversión.

**The Gradient Companion Rule.** Todo degradado usa compañeros `lighter→darker` del mismo token, nunca hex hardcodeado fuera de `global.css`.

## Typography

**Display Font:** Formata (con Space Grotesk, system-ui)
**Body Font:** Nunito Sans (con system-ui)
**Label/Mono Font:** Share Tech Mono, monospace

### Hierarchy
- **Display** (700, clamp(2.5rem,7vw,4.5rem), 1, -0.04em): Hero y números de métricas.
- **Headline** (700, clamp(1.875rem,4vw,3rem), 1.1, -0.03em): Títulos de sección.
- **Title** (600, 1.25rem, 1.3): Títulos de tarjeta y H3.
- **Body** (400, 1rem/1.6): Párrafos y descripciones.
- **Label** (400, 0.625rem, 1.4, 0.14em, uppercase): Pills, badges, estados, deadlines.

## Layout

Modelo orbital y en rejilla, con densidad media y ritmo de 8px. Contenedor `max-w-7xl` centrado con `px-4 sm:px-6 lg:px-8`, secciones con `py-16 sm:py-20`, hero `min-h-[90vh]` aislado.

## Elevation & Depth

Sistema por **capas tonales**, no por sombras. La profundidad se construye con desenfoque y tono, no con elevación arrojada.

Fondo `#050816` → capa satélite `#0a0f24` con `backdrop-blur 16px` y borde `rgba(255,255,255,0.1)` → capa activa con `border-accent-cyan/35` y `translateY(-4px)`.

### Shadow Vocabulary
- **Card Hover** (`box-shadow: 0 12px 30px -10px rgba(0, 98, 155, 0.25)`): Elevación sutil al interactuar con `glass-card`.
- **Glow CTA** (`box-shadow: 0 18px 40px -18px rgba(0, 98, 155, 0.9)`): Resplandor difuso bajo CTAs primarios.
- **Dot Grid Glow** (`radial-gradient` + `0_0_30px rgba(0, 174, 239, 0.12)`): Atmósfera, no elevación.

## Shapes

Lenguaje de forma suavemente orbital — esquinas redondeadas generosas y bordes difusos. Radio base `16px` (lg) para botones y `22px` (xl) para tarjetas, `24px` (2xl) para modales y `28px` (3xl) para secciones destacadas.

## Components

### Buttons
- **Shape:** Redondeado medio (16px lg)
- **Primary:** `background: #00629b` (`var(--ieee-blue)`) → hover `#00aeef` (`var(--ieee-comsoc-cyan)`), `color: #ffffff`, `padding: 14px 28px`, `shadow: 0 18px 40px -18px rgba(0, 98, 155, 0.9)`, `transition: all 0.3s`
- **Hover / Focus:** `translateY(-2px)` + `shadow` + `focus-visible:ring-2 ring-accent-cyan`
- **Secondary / Ghost:** `background: rgba(255,255,255,0.05)`, `color: #cbd5e0`, `border: 1px solid rgba(255,255,255,0.1)`, hover `border-accent-cyan/40` + `bg-white/10`

### Cards / Containers
- **Corner Style:** `22px` (xl) para tarjetas, `28px` (3xl) para destacados
- **Background:** `bg-bg-secondary #0a0f24` con `backdrop-blur 16px`
- **Shadow Strategy:** Solo en hover (`0 12px 30px -10px rgba(0, 98, 155, 0.25)`)
- **Border:** `1px solid rgba(255,255,255,0.1)` → hover `rgba(0, 174, 239, 0.35)`
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

