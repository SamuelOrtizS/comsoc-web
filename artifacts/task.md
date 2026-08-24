# Task List — IEEE ComSoc Website (Astro + Tailwind v4)

## 1. Project Initialization & Configuration
- [x] Install Node.js v18+ (prerequisite)
- [x] Scaffold Astro project with `package.json`
- [x] Install Tailwind CSS v4 (`@tailwindcss/vite`)
- [x] Configure `astro.config.mjs` (static output, GitHub Pages base, Tailwind vite plugin)
- [x] Set up `tsconfig.json`

## 2. Design System (Tailwind v4)
- [x] Create `src/styles/global.css` with `@import "tailwindcss"` and `@theme {}` block
  - [x] Set up `@font-face` rules for local `Formata-Regular` and `Formata-Medium` font files
  - [x] Define color tokens (bg-primary, bg-secondary, accent-blue, accent-cyan, accent-purple, glass-bg, glass-border)
  - [x] Define font families (heading → Formata, body → Nunito Sans, mono → Share Tech Mono)
- [x] Import Google Fonts (Nunito Sans, Share Tech Mono) in BaseLayout
- [x] Add Formata font definitions and fallbacks in `src/styles/global.css`

## 3. Content Collections & Schemas
- [x] Create `src/content.config.ts` with Zod schemas
  - [x] `convocatorias` collection (`type: 'data'`) — id, titulo, area, fechaLimite, descripcion, requisitos, responsabilidades, estado, formUrl
  - [x] `eventos` collection — id, titulo, tipo, organizador, fechaInicio/Fin, horaInicio/Fin, lugar, descripcion, imagenPrincipal, galeria, estado

## 4. Sample Content
- [x] Create `src/content/convocatorias/coord-academico.json`
- [x] Create `src/content/convocatorias/voluntario-marketing.json`
- [x] Create `src/content/eventos/taller-iot/evento.json` + banner image
- [x] Create `src/content/eventos/hackathon-2026/evento.json` + banner image
- [x] Create `src/content/eventos/simposio-optico-2025/evento.json` + banner image

## 5. Layouts
- [x] Create `src/layouts/BaseLayout.astro` (head, header, slot, footer, global CSS import)

## 6. Components
- [x] Create `src/components/Header.astro` (sticky glassmorphic navbar, desktop links, mobile toggle)
- [x] Create `src/components/MobileMenu.astro` (slide-in drawer)
- [x] Create `src/components/Footer.astro` (social links, copyright)
- [x] Create `src/components/HeroSection.astro` (gradient background, animated elements, CTAs)
- [x] Create `src/components/EventCard.astro` (glassmorphic card with thumbnail, title, date, type badge)
- [x] Create `src/components/ConvocatoriaCard.astro` (area badge, deadline, postular button)
- [x] Create `src/components/CountdownTimer.astro` (client-side island with `client:load`)

## 7. Pages
- [x] Create `src/pages/index.astro` — Hero, Stats, Ecosystem, Featured Event + Countdown, Past Projects
- [x] Create `src/pages/nosotros.astro` — Mission, Vision, IEEE ComSoc info, Benefits, Team grid
- [x] Create `src/pages/convocatorias/index.astro` — Listing with search filter
- [x] Create `src/pages/convocatorias/[id].astro` — Detail page (getStaticPaths)
- [x] Create `src/pages/eventos/index.astro` — Upcoming + Past split with carousels
- [x] Create `src/pages/eventos/[id].astro` — Detail page (getStaticPaths), gallery, share buttons
- [x] Create `src/pages/portafolio.astro` — Bento-grid project showcase
- [x] Create `src/pages/tienda.astro` — Product cards, pickup notice, WhatsApp link

## 8. Static Assets
- [x] Add `public/favicon.svg`
- [x] Add `public/preview.png` (OG image)
- [x] Add `public/images/` (logos, event banners)

## 9. GitHub Pages Deployment
- [x] Create `.github/workflows/deploy.yml` (withastro/action@v6 + deploy-pages@v4)

## 10. Verification
- [x] Run `npm run build` — confirm AOT compilation succeeds (11 pages built cleanly in 2.72s)
- [x] Run `npm run dev` — dev server running on http://localhost:4321/
