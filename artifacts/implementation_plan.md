# Implementation Plan — IEEE ComSoc Student Chapter Website

**Framework**: Astro (Static Site Generation, 100% AOT)
**Deployment Target**: GitHub Pages
**Styling**: Tailwind CSS v4 (CSS-first config, utility classes, dark theme)

---

## Prerequisites

You need **one** tool installed on your machine:

- **Node.js v18+** — Download LTS from [nodejs.org](https://nodejs.org/). This includes `npm` and `npx`.

Everything else (Astro, dev server, build tooling) is managed by `npm` inside the project.

---

## Project Structure

After initialization with `create-astro`, the project will look like this:

```
h:\ComSoc Web\
├── astro.config.mjs          # Astro config (static output, GitHub Pages base)
├── src/
│   ├── content.config.ts      # Content collection schemas (Zod)
│   ├── content/
│   │   ├── convocatorias/     # One .json file per open call
│   │   │   ├── coord-academico.json
│   │   │   └── voluntario-marketing.json
│   │   └── eventos/           # One subfolder per event (JSON + images)
│   │       ├── taller-iot/
│   │       │   ├── evento.json
│   │       │   ├── banner.webp
│   │       │   └── foto1.webp
│   │       └── hackathon-2026/
│   │           ├── evento.json
│   │           └── banner.webp
│   ├── layouts/
│   │   └── BaseLayout.astro   # Global HTML shell (head, header, footer)
│   ├── components/
│   │   ├── Header.astro       # Responsive navbar
│   │   ├── Footer.astro       # Footer with social links
│   │   ├── HeroSection.astro  # Homepage hero
│   │   ├── EventCard.astro    # Reusable event card
│   │   ├── ConvocatoriaCard.astro
│   │   ├── CountdownTimer.astro  # Client-side countdown island
│   │   └── MobileMenu.astro   # Mobile nav drawer
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── nosotros.astro     # About Us
│   │   ├── convocatorias/
│   │   │   ├── index.astro    # Listing page
│   │   │   └── [id].astro     # Dynamic detail page per convocatoria
│   │   ├── eventos/
│   │   │   ├── index.astro    # All events listing (upcoming + past)
│   │   │   └── [id].astro     # Dynamic detail page per event
│   │   ├── portafolio.astro   # Past projects showcase
│   │   └── tienda.astro       # Merch store
│   └── styles/
│       └── global.css         # Tailwind v4 import + custom theme tokens
├── public/
│   ├── favicon.svg
│   ├── preview.png            # OG image
│   ├── images/                # Global static images (logos, team photos)
│   └── fonts/                 # Custom local font files
│       ├── Formata-Regular.woff2
│       └── Formata-Medium.woff2
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deploy to Pages
├── package.json
└── tsconfig.json
```

---

## Proposed Changes

### 1. Project Initialization & Configuration

#### [NEW] Astro project scaffolding
We will run `npx create-astro@latest` to initialize the project. This generates `package.json`, `tsconfig.json`, and the `src/` skeleton.

#### [NEW] [astro.config.mjs](file:///h:/ComSoc%20Web/astro.config.mjs)
Configures Astro for static output, GitHub Pages, and Tailwind CSS v4:
```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://<username>.github.io',
  base: '/<repo-name>/',   // only if not a user/org site
  output: 'static',        // default — full AOT compilation
  vite: {
    plugins: [tailwindcss()],
  },
});
```

> [!NOTE]
> Tailwind CSS v4 uses the `@tailwindcss/vite` plugin instead of PostCSS. No `tailwind.config.js` is needed — all configuration lives in CSS.

---

### 2. Content Collections & Schemas

#### [NEW] [content.config.ts](file:///h:/ComSoc%20Web/src/content.config.ts)
Defines two collections with Zod validation. Data is loaded at build time and fully type-safe.

**Convocatorias** collection (`type: 'data'`):

| Field | Type | Description |
|:------|:-----|:------------|
| `id` | `string` | Unique slug (`coord-academico`) |
| `titulo` | `string` | Role title |
| `area` | `string` | Department (e.g. "Académico") |
| `fechaLimite` | `string` | Deadline (`2026-09-15`) |
| `descripcion` | `string` | Brief overview |
| `requisitos` | `string[]` | Requirements list |
| `responsabilidades` | `string[]` | Responsibilities list |
| `estado` | `enum` | `Publicada` or `Cerrada` |
| `formUrl` | `string?` | Optional external form link |

**Eventos** collection (`type: 'content_layer'` with custom glob loader):

| Field | Type | Description |
|:------|:-----|:------------|
| `id` | `string` | Unique slug (`taller-iot`) |
| `titulo` | `string` | Event title |
| `tipo` | `string` | Category: "Workshop", "Hackathon", "Conferencia" |
| `organizador` | `string` | Hosting chapter/group |
| `fechaInicio` | `string` | Start date (`2026-10-01`) |
| `fechaFin` | `string?` | Optional end date |
| `horaInicio` | `string` | Start time (`09:00`) |
| `horaFin` | `string` | End time (`17:00`) |
| `lugarNombre` | `string` | Venue name |
| `lugarDireccion` | `string` | Venue address |
| `descripcion` | `string` | Full event description |
| `imagenPrincipal` | `string` | Banner image filename |
| `galeria` | `string[]?` | Optional gallery image filenames |
| `estado` | `enum` | `Publicado` or `Pasado` |

#### [NEW] Sample content files
- `src/content/convocatorias/coord-academico.json` — example open call
- `src/content/convocatorias/voluntario-marketing.json` — example open call
- `src/content/eventos/taller-iot/evento.json` — example event with banner image
- `src/content/eventos/hackathon-2026/evento.json` — example past event

---

### 3. Layouts & Components

#### [NEW] [BaseLayout.astro](file:///h:/ComSoc%20Web/src/layouts/BaseLayout.astro)
The global HTML wrapper. Accepts `title` and `description` props for SEO. Includes:
- `<head>` with Google Fonts (Space Grotesk, Share Tech Mono, Inter), global CSS, OG tags
- `<Header />` component
- `<slot />` for page content
- `<Footer />` component

#### [NEW] [Header.astro](file:///h:/ComSoc%20Web/src/components/Header.astro)
- Sticky top navbar with glassmorphism backdrop blur
- IEEE ComSoc logo on the left
- Desktop nav links: Inicio, Nosotros, Convocatorias, Portafolio, Tienda
- Mobile hamburger menu triggering `<MobileMenu />`

#### [NEW] [Footer.astro](file:///h:/ComSoc%20Web/src/components/Footer.astro)
- Chapter description paragraph
- Social icons (LinkedIn, Instagram, WhatsApp)
- Copyright `© 2026 IEEE ComSoc UPC`

#### [NEW] [HeroSection.astro](file:///h:/ComSoc%20Web/src/components/HeroSection.astro)
- Full-viewport hero with gradient background and animated particle dots
- Large heading "IEEE COMSOC" with glowing text
- Subtitle "UPC STUDENT CHAPTER"
- CTA buttons: "Explorar Eventos", "Unirse"

#### [NEW] [EventCard.astro](file:///h:/ComSoc%20Web/src/components/EventCard.astro)
Reusable glassmorphic card displaying event thumbnail, title, date, type badge, and a link to the detail page.

#### [NEW] [ConvocatoriaCard.astro](file:///h:/ComSoc%20Web/src/components/ConvocatoriaCard.astro)
Card showing open call title, area badge, deadline, and a "Postular" button.

#### [NEW] [CountdownTimer.astro](file:///h:/ComSoc%20Web/src/components/CountdownTimer.astro)
A **client-side island** (`client:load`) that receives a target date and renders a live days/hours/minutes/seconds countdown. This is the only component that ships JS to the browser.

#### [NEW] [MobileMenu.astro](file:///h:/ComSoc%20Web/src/components/MobileMenu.astro)
Slide-in drawer for mobile navigation with smooth transitions.

---

### 4. Pages

#### [NEW] [index.astro](file:///h:/ComSoc%20Web/src/pages/index.astro) — Homepage
Sections:
1. **Hero** — Chapter branding + CTA
2. **Stats** — Animated counters (Members, Events/year, Projects)
3. **Ecosystem** — 4 feature cards (IoT/Telecom skills, Industry connections, Research, Leadership)
4. **Featured Event** — Spotlight on the nearest upcoming event + countdown timer
5. **Past Projects** — 2-3 highlighted projects with images

#### [NEW] [nosotros.astro](file:///h:/ComSoc%20Web/src/pages/nosotros.astro) — About Us
- Mission & Vision statements
- What is IEEE ComSoc (global context)
- Benefits of membership (certifications, networking, sponsorship)
- Team/volunteer grid with photos and roles

#### [NEW] [convocatorias/index.astro](file:///h:/ComSoc%20Web/src/pages/convocatorias/index.astro) — Listings
- Loads all convocatorias from the collection via `getCollection('convocatorias')`
- Filters to show only `estado: 'Publicada'`
- Client-side search input for filtering by title/area
- Grid of `<ConvocatoriaCard />` components

#### [NEW] [convocatorias/[id].astro](file:///h:/ComSoc%20Web/src/pages/convocatorias/%5Bid%5D.astro) — Detail
- Uses `getStaticPaths()` to generate one page per convocatoria at build time
- Shows full description, requirements list, responsibilities list, deadline
- "Postular" button linking to `formUrl` or embedding a simple form

#### [NEW] [eventos/index.astro](file:///h:/ComSoc%20Web/src/pages/eventos/index.astro) — Events Listing
- Loads all events via `getCollection('eventos')`
- Splits into "Próximos Eventos" (upcoming) and "Eventos Pasados" sections
- Horizontal scroll carousel for each section with `<EventCard />` components

#### [NEW] [eventos/[id].astro](file:///h:/ComSoc%20Web/src/pages/eventos/%5Bid%5D.astro) — Event Detail
- Uses `getStaticPaths()` for AOT generation
- Hero banner image
- Full event info: date, time, location, description
- Image gallery grid
- Share on WhatsApp/LinkedIn buttons

#### [NEW] [portafolio.astro](file:///h:/ComSoc%20Web/src/pages/portafolio.astro) — Portfolio
- Showcase of past projects with images and descriptions
- Bento-grid layout with glassmorphic cards

#### [NEW] [tienda.astro](file:///h:/ComSoc%20Web/src/pages/tienda.astro) — Store
- Product cards (shirts, stickers, merch)
- Pickup notice ("Recoger en UPC Monterrico")
- WhatsApp link for ordering

---

### 5. Design System (Tailwind CSS v4)

#### [NEW] [global.css](file:///h:/ComSoc%20Web/src/styles/global.css)
Tailwind v4 uses a **CSS-first configuration**. The entire design system is defined in this single CSS file:

```css
@import "tailwindcss";

/* Custom Font - Formata */
@font-face {
  font-family: 'Formata';
  src: url('/fonts/Formata-Regular.woff2') format('woff2'),
       url('/fonts/Formata-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Formata';
  src: url('/fonts/Formata-Medium.woff2') format('woff2'),
       url('/fonts/Formata-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@theme {
  /* Color Palette — dark tech/cyberpunk */
  --color-bg-primary: #050816;
  --color-bg-secondary: #0a0f24;
  --color-accent-blue: #155dfc;
  --color-accent-cyan: #22d3ee;
  --color-accent-purple: #a855f7;
  --color-text-primary: #ffffff;
  --color-text-secondary: #94a3b8;
  --color-glass-bg: rgba(255, 255, 255, 0.05);
  --color-glass-border: rgba(255, 255, 255, 0.1);

  /* Typography */
  --font-heading: 'Formata', sans-serif;
  --font-body: 'Nunito Sans', sans-serif;
  --font-mono: 'Share Tech Mono', monospace;
}
```

This generates utility classes like `bg-bg-primary`, `text-accent-blue`, `font-heading`, etc., usable directly in `.astro` component markup.

**Color Palette** (dark tech/cyberpunk):
| Tailwind Class | Value | Usage |
|:---------------|:------|:------|
| `bg-bg-primary` | `#050816` | Page background |
| `bg-bg-secondary` | `#0a0f24` | Card backgrounds |
| `text-accent-blue` / `bg-accent-blue` | `#155dfc` | Primary CTA, links |
| `text-accent-cyan` | `#22d3ee` | Highlights, countdown |
| `text-accent-purple` / `bg-accent-purple` | `#a855f7` | Badges, decorative |
| `text-text-primary` | `#ffffff` | Headings |
| `text-text-secondary` | `#94a3b8` | Body, muted text |
| `bg-glass-bg` | `rgba(255,255,255,0.05)` | Glassmorphic panels |
| `border-glass-border` | `rgba(255,255,255,0.1)` | Glass borders |

**Typography**:
- Headings/Titles: `font-heading` → Formata (Regular/Medium)
- Body: `font-body` → Nunito Sans, weight 300-600
- Monospace accents: `font-mono` → Share Tech Mono

**Key Design Patterns** (all via Tailwind utility classes):
- Glassmorphic cards: `bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl`
- Gradient text: `bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent`
- Hover transitions: `transition-all duration-300 ease-in-out hover:scale-105`
- Glow buttons: `bg-accent-blue shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/50`
- Responsive grids: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Section depth: `bg-gradient-to-b from-bg-primary to-bg-secondary`

> [!TIP]
> Because Tailwind v4 purges unused CSS at build time, the final shipped CSS will only contain the classes actually used in your `.astro` files — resulting in a tiny CSS bundle.

---

### 6. GitHub Pages Deployment

#### [NEW] [.github/workflows/deploy.yml](file:///h:/ComSoc%20Web/.github/workflows/deploy.yml)
Automated CI/CD pipeline using the official Astro GitHub Action:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install, build, and upload
        uses: withastro/action@v6

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**GitHub Settings Required** (one-time manual setup):
1. Go to repo **Settings → Pages**
2. Set **Source** to **GitHub Actions**

---

## Open Questions

> [!IMPORTANT]
> **Repository name**: What will the GitHub repo be called? This determines whether you need a `base` path in `astro.config.mjs`.
> - If the repo is `<username>.github.io`, no `base` needed — the site is at the root.
> - If the repo is something like `comsoc-web`, the site will be at `https://<username>.github.io/comsoc-web/` and we set `base: '/comsoc-web/'`.

> [!NOTE]
> **Form handling for Convocatorias**: Since the site is fully static, application forms need an external service. The recommended approach is to specify a `formUrl` in each convocatoria's JSON that links to a Google Form or Typeform. We can also integrate Formspree or Netlify Forms if preferred.

> [!NOTE]
> **Chapter branding**: Should we keep "IEEE ComSoc UPC" as the chapter name, or do you have a different university/branch name?

---

## Verification Plan

### Automated
```bash
# Build the static site (AOT compilation)
npm run build

# Preview the built output locally
npm run preview
```
- Astro's build will **fail with clear errors** if any JSON content file violates the Zod schema (missing fields, wrong types).
- All pages are generated at build time — if a page fails to render, the build stops.

### Manual
1. Run `npm run dev` and navigate through all pages
2. Verify responsive design at mobile (375px), tablet (768px), and desktop (1440px) breakpoints
3. Test mobile hamburger menu open/close
4. Verify countdown timer ticks correctly for upcoming events
5. Confirm that adding a new `.json` file to `convocatorias/` or a new subfolder to `eventos/` generates new pages after `npm run build`
6. Push to GitHub and verify the Actions workflow deploys successfully
