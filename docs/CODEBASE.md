# Proyecto: ComSoc Web — IEEE ComSoc Univalle

## Descripción General

Sitio oficial del Capítulo Estudiantil IEEE Communications Society (ComSoc) Universidad del Valle. Construido con **Astro 7.2.9**, **Tailwind CSS v4**, **TypeScript** y optimizado para GitHub Pages (`https://comsoc.ieeeunivalle.link/`).

**Funciones principales:**
- Convocatorias de voluntariado (`/convocatorias`)
- Eventos y talleres con detalle (`/eventos`, `/eventos/[id]`)
- Proyectos de investigación con financiamiento USD→COP (`/proyectos`, `/proyectos/[id]`)
- Junta Directiva (`/nosotros` + modales)
- Tienda catálogo (`/tienda` con modal `product-modal`)
- Aliados y Red de Colaboración (home + modales)
- Recursos descargables (`/nosotros/recursos`)
- Donaciones y métodos de pago (`/donaciones`)

## Arquitectura Técnica

- **Framework:** Astro `output: static` (`astro.config.mjs:10`), `site: https://comsoc.ieeeunivalle.link/` (`astro.config.mjs:8`), `compressHTML: true`.
- **Estilos:** Tailwind CSS v4.0.0 vía `@tailwindcss/vite` (`astro.config.mjs:2`), tema centralizado en `src/styles/global.css:24` (`--color-accent-cyan #22d3ee`, `--color-bg-primary #050816`, etc.), `backdrop-blur` y `glass-card` (`global.css:196`).
- **Fuentes:** Gestionadas por `astro:assets` (`astro.config.mjs:32`, `src/layouts/BaseLayout.astro:44`): `Formata` local (`src/assets/fonts/Formata-*.woff2`) + Google `Nunito Sans` (400,600,700), `Share Tech Mono` (400), `Space Grotesk` (400,500,600,700) con `font-display: swap` y `preload` para Formata/Nunito.
- **Iconos:** `astro-icon` (`astro.config.mjs:14`) con `material-symbols:*`, `mdi:*`, `simple-icons:*` (`@iconify-json/material-symbols` etc.), mapeo central `src/utils/tiendaIconMap.json:1` y `src/utils/imageResolver.ts:33`.
- **Gestión de Contenido:** Astro Content Collections (`src/content.config.ts:1`) — 7 colecciones (`convocatorias`, `eventos`, `tienda`, `juntaDirectiva`, `proyectos`, `aliados`, `recursos`) validadas con `zod`.
- **Imágenes:** `astro:assets` + `sharp` (`package.json:27`), `src/utils/imageResolver.ts:4` (`import.meta.glob` eager) con alias para compatibilidad (`Samuel O.jpg` → `samuel-o.jpg`), `sizes` y `fetchpriority="high"` en LCP (`src/pages/index.astro:86`).
- **Moneda:** `src/utils/currency.ts:1` (`DEFAULT_USD_TO_COP_RATE 4100`, `getUsdToCopRate()` con `AbortSignal.timeout(3000)` y caché 1h, `formatUSD`/`formatCOP`).
- **Sitemap & SEO:** `@astrojs/sitemap` (`astro.config.mjs:14`) genera `sitemap-0.xml` + `sitemap-index.xml`, copiado a `sitemap.xml` vía integración `sitemap-xml` (`astro.config.mjs:14`), referenciado en `public/robots.txt:4` y `src/layouts/BaseLayout.astro:50` (OG canónico con `ogImageURL` absoluto).
- **Markdown para Agentes:** Negociación `Accept: text/markdown` vía `src/middleware.ts:13` (`turndown` + `x-markdown-tokens`, `Vary: Accept`) y `worker.js:1`/`functions/_middleware.js:1` para Cloudflare; generación estática `.md` en `dist/**/*.md` vía `src/utils/markdownIntegration.ts:1`. Cloudflare puede habilitar “Markdown for Agents” sin código.
- **Prefetch & Build:** `prefetch: { prefetchAll:false, defaultStrategy:'viewport' }` (`astro.config.mjs:25`), `vite.build.cssCodeSplit:true`, `build.inlineStylesheets:'auto'` (`astro.config.mjs:29`), `compressHTML:true`.
- **UX:** `CustomCursor.astro:28` (solo decorativo, sin `cursor:none`, `will-change` bajo demanda), `TouchRipple.astro:26` (solo `transform`), `CountdownTimer.astro:48` (con `visibilitychange` y `astro:before-swap` cleanup), `MobileMenu.astro:1`.

## 🛠 Guía para Agentes (Contexto de Automatización)

### 1. Flujo de Trabajo de Contenido
- **Validación:** Antes de commit, los JSON en `src/content/` deben coincidir con `src/content.config.ts:1`. Archivos `ejemplo.json` o `_*` son ignorados (`glob` patterns).
- **Imágenes:** URLs externas o `/images/...` en `public/images/` o `src/assets/images/` (optimizadas a WebP).

### 2. Patrones de Desarrollo
- **Componentes:** `.astro` con Tailwind, `PascalCase` (`EventCard.astro`), `Icon` de `astro-icon/components`.
- **Tipado:** Interfaces `Props` para cada componente.
- **Idioma:** Español (`es-ES`), `lang="es"` en `BaseLayout.astro:26`.
- **Performance:** `decoding="async"`, `loading="lazy"` + `sizes`, `fetchpriority="high"` para LCP, `transform-gpu` para animaciones.

### 3. Localización de Recursos
- **Estilos Globales:** `src/styles/global.css:1` (tokens + `.glass-card`, `.bg-dot-grid` con `0.04` opacidad y `prefers-reduced-motion`).
- **Utilidades:** `src/utils/currency.ts:1`, `src/utils/tiendaIconMap.json:1`, `src/utils/markdownIntegration.ts:1`.
- **Layout Base:** `src/layouts/BaseLayout.astro:1` (SEO, `Font` preload, `Header`, `Footer`, banner de desarrollo `development-banner` no bloqueante).
- **Configuración:** `src/content.config.ts:1`, `astro.config.mjs:1`, `public/robots.txt:1`, `public/_headers` (si Cloudflare Pages).

## Gestión de Contenidos (src/content/)

**Reglas Generales:** `ejemplo.json` o `_*` ignorados; imágenes pasadas directamente al componente `<Image>` de `astro:assets`; iconos vía `material-symbols:xxx-rounded` validados contra `@iconify-json/material-symbols`.

**Colecciones (esquemas en `src/content.config.ts:1`):**
1. **Convocatorias:** `titulo`, `area`, `fechaLimite` (YYYY-MM-DD), `descripcion`, `requisitos[]`, `responsabilidades[]`, `estado` (Publicada/Cerrada), `formUrl?`.
2. **Eventos:** `titulo`, `tipo`, `organizador`, `fechaInicio`, `fechaFin?`, `horaInicio`, `horaFin`, `lugarNombre`, `lugarDireccion?`, `descripcion`, `imagenPrincipal`, `galeria?`, `estado` (Publicado/Pasado), `detalles?` (`{label,value}[]`). Destacado determinístico por `fechaInicio` más próxima (`src/pages/index.astro:14`).
3. **Tienda:** `name`, `category`, `price`, `description`, `image`, `available` (boolean), `resources?` (`{title,link,icon,color}[]` con `icon: material-symbols:*`), `specifications?` (`{key,value}[]`).
4. **Junta Directiva:** `order`, `name`, `role`, `department`, `avatar` (emoji fallback → `Icon:person`), `image?` (`/images/...` 200×200), `bio?`, `email?`, `phone?`, `linkedin?`, `instagram?`, `facebook?`, `github?`, `website?`.
5. **Proyectos:** `titulo`, `categoria`, `descripcion`, `imagen`, `estado` (Activo/Completado/En Pausa), `tags?`, `enlace?`, `destacado` (boolean, orden alfabético en home), `montoActual?`, `montoMeta?` (USD, conversión a COP vía `currency.ts`), `recursos?` (`{title,link,icon?}[]`), `resumenTecnico?`.
6. **Aliados:** `order`, `nombre`, `tipo`, `logo?` (200×80), `descripcion`, `acerca?`, `website?`, `email?`, `phone?`, `linkedin?`, `instagram?`.
7. **Recursos:** `titulo`, `descripcion`, `categoria`, `imagen?`, `links[]` (`{label,url,tipo?}` donde `tipo: "Canva"` → `palette`, `"Download"` → `download-rounded` en `ResourceCard.astro:64`).

## Mapa del Sitio

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `src/pages/index.astro:71` | Hero (H1 sr-only + CTA jerárquico), evento destacado determinístico, pilares (cell-tower/sensors/cable/psychology), proyectos destacados, aliados (modal con `aria-expanded`), CTA Únete |
| `/nosotros` | `src/pages/nosotros.astro:1` | Misión/Visión (target/construction), beneficios (6 cards), galería (gallery-slider con `visibilitychange`), mesa directiva (modal person) |
| `/nosotros/recursos` | `src/pages/nosotros/recursos/index.astro:1` | Grilla `ResourceCard` por categoría, estado vacío con `folder-off` |
| `/tienda` | `src/pages/tienda.astro:1` | Catálogo 4 cols, modal `product-modal` con `iconSvg` dinámico desde `tiendaIconMap.json` |
| `/proyectos` | `src/pages/proyectos/index.astro:1` | Activos/Completados/En Pausa con `check-circle`/`verified`/`pause-circle`, financiamiento USD/COP |
| `/proyectos/[id]` | `src/pages/proyectos/[id].astro:1` | Hero `fetchpriority=high`, `estadoBadge` con Icon, `resumenTecnico`, `recursos` |
| `/eventos` | `src/pages/eventos/index.astro:1` | Próximos/Pasados, `EventCard` con `calendar-today`/`location-on` |
| `/eventos/[id]` | `src/pages/eventos/[id].astro:1` | Hero 1200×675, `CountdownTimer` con `role=timer` |
| `/convocatorias` | `src/pages/convocatorias/index.astro:1` | `ConvocatoriaCard` con `check`/`calendar-clock`/`open-in-new` |
| `/donaciones` | `src/pages/donaciones.astro:1` | Destinies con `science`/`school`/`groups`/`settings`, métodos de pago con copiado |
| `/unirse` | `src/pages/unirse.astro:1` | CTA Unirse, info `verified`/`mdi:whatsapp` |
| `/403`, `/404`, `/500`, `/error`, `/3301` | `src/components/ErrorPage.astro:1` | `code/tagline/title` con `Icon` custom (`shield`→403, `search-off`→404, `error`→500/generic, `bug-report`→3301) |

## Construcción y Ejecución

| Comando | Descripción |
|----------|-------------|
| `npm run dev` | Servidor local Astro (http://localhost:4321) |
| `npm run build` | Genera producción en `dist/` (valida Content Collections, genera sitemap.xml + .md) |
| `npm run preview` | Previsualiza `dist/` |
| `npm install` | Instala dependencias |

**Salida `dist/`:**
- `sitemap.xml` (copia de `sitemap-0.xml`, 20 URLs) + `sitemap-index.xml` + `robots.txt` con `Sitemap: https://.../sitemap.xml`
- `_astro/fonts/` (7 ficheros woff2/woff con fallback optimizado) + `_astro/*.webp/*.svg` (sharp)
- `**/*.html` + `**/*.md` (markdown estático)

## Convenciones de Desarrollo

- **Validación de Contenido:** Cumplir `src/content.config.ts`; `npm run build` rompe si no.
- **Componentes Reutilizables:** `Header` (`supports-[backdrop-filter]:backdrop-blur-xl`, `contain: layout` sin `paint` para dropdown), `Footer` (social 44×44px), `HeroSection`, `CountdownTimer`, `EventCard`, `ConvocatoriaCard`, `ErrorPage` (custom `icon: string`).
- **Diseño UI:** Glassmorphism (`glass-card` con `backdrop-blur 16px`, `contain:paint` solo en cards, no en header), gradientes, fuentes `Formata`/`Nunito Sans`/`Space Grotesk`/`Share Tech Mono` vía `astro:assets`.
- **Tipado:** TypeScript para Props y `CollectionEntry`.
- **Moneda:** `currency.ts` con `AbortSignal.timeout(3000)` y caché 1h.
- **Rutas:** `src/pages/` con `[id].astro` para colecciones.
- **Estadísticas:** `src/content/estadisticas.json:1` (16 Miembros, 3 Eventos 2025, 2 Proyectos Activos, 4 Aliados).
- **Donaciones:** `src/content/donaciones.json:1`.
- **Iconos:** Astro Icon (`material-symbols:*` validado, `mdi:*` para marcas, `simple-icons:*`); `src/icons/.gitkeep` evita warning `ENOENT`.
- **Accesibilidad:** `cursor:none` eliminado (solo decorativo con `prefers-reduced-motion`), H1 sr-only en home, `aria-expanded` en aliados, `role=timer` en countdown, `focus-visible:ring` en CTAs.
