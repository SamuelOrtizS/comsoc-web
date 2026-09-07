# IEEE ComSoc Univalle — Website Project Guide

## 1. Project Overview

**IEEE ComSoc Univalle** is the official website for the IEEE Communications Society at Universidad del Valle's Student Branch Chapter. It serves as a digital hub connecting community members, showcasing events, research projects, academic opportunities, and merchandise.

### Key Technologies

- **Framework**: [Astro 7.x](https://astro.build/) (Static Site Generator)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via Vite plugin
- **Language**: TypeScript + Astro Components (`.astro`)
- **Content**: JSON-based Astro Content Collections
- **Icons**: [astro-icon](https://github.com/jonasgeiler/astro-icon) (Material Symbols, MDI, Simple Icons)
- **Deployment**: Static output (`dist/`)
- **Analytics**: Google Analytics 4 (G-7Q9FC7KE7Y)
- **SEO**: Auto-generated sitemap via `@astrojs/sitemap`

### High-Level Architecture

```txt
Content-First → Collections (JSON) → Dynamic Routes ([id].astro) → Pages
     ↓
   Components (Reusable UI)
     ↓
   BaseLayout (SEO, Fonts, GA, Global Styles)
```

---

## 2. Getting Started

### Prerequisites

- **Node.js ≥ 24.0.0** (required, per `engines` field)
- **npm** (or pnpm/yarn)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev        # Start local dev server at http://localhost:4321
npm run preview    # Preview production build locally
```

### Production Build

```bash
npm run build      # Generate optimized static files in dist/
```

### Environment Variables

- `EXCHANGERATE_API_KEY` — Optional. Used for live USD/COP exchange rate fetching in `src/utils/currency.ts`. Falls back to `4100` COP per USD if not set.

---

## 3. Project Structure

```txt
├── astro.config.mjs          # Astro config: site, integrations, fonts, redirects
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript config (strict, path aliases @/*)
├── src/
│   ├── pages/                # Route definitions (Astro pages)
│   │   ├── index.astro       # Homepage
│   │   ├── 403.astro / 404.astro / 500.astro  # Error pages
│   │   ├── 3301.astro        # Easter egg page
│   │   ├── convocatoria/     # Dynamic routes: [id].astro
│   │   ├── eventos/          # Dynamic routes: [id].astro
│   │   ├── proyectos/        # Dynamic routes: [id].astro
│   │   ├── nosotros/         # About pages
│   │   ├── donaciones.astro  # Donation page
│   │   ├── tienda.astro      # Shop page
│   │   ├── unirse.astro      # Join page
│   │   └── utils/            # Page-level utilities
│   ├── components/           # Reusable .astro components
│   │   ├── Header.astro      # Site header / navigation
│   │   ├── Footer.astro      # Site footer
│   │   ├── EventCard.astro   # Event listing card
│   │   ├── ProjectCard.astro # Project listing card
│   │   ├── ProductCard.astro # Shop product card
│   │   ├── ConvocatoriaCard.astro
│   │   ├── TeamCard.astro    # Board member card
│   │   ├── CustomCursor.astro # Custom cursor UX
│   │   └── ... (30+ components)
│   ├── layouts/
│   │   └── BaseLayout.astro  # Master layout: SEO, fonts, GA, global CSS
│   ├── content/              # JSON data files (Content Collections)
│   │   ├── convocatorias/    # Job/volunteer openings
│   │   ├── eventos/          # Event data (supports nested folders)
│   │   ├── tienda/           # Shop products
│   │   ├── proyectos/        # Technical projects
│   │   ├── juntaDirectiva/   # Board members
│   │   ├── aliados/          # Partners/sponsors
│   │   └── recursos/         # Resources
│   ├── content.config.ts     # Collection schemas (Zod) — CHECK BEFORE ADDING DATA
│   ├── styles/
│   │   └── global.css        # Tailwind @theme design tokens, colors, fonts
│   ├── utils/
│   │   ├── currency.ts       # USD/COP formatting & live rate fetching
│   │   ├── calendar.ts       # Calendar integration helpers
│   │   ├── imageImports.ts   # Dynamic image import resolver
│   │   └── modalImages.ts    # Modal image handling
│   ├── assets/               # Fonts, SVGs, static assets
│   └── icons/                # Custom SVG icons
├── public/                   # Public static files (favicon, images, robots.txt)
├── docs/                     # Project documentation
├── instructions/             # AI agent instructions
├── skills/                   # AI agent skills
└── .agents/                  # AI agent configurations
```

### Key Configuration Files

| File | Purpose |
| ------ | --------- |
| `astro.config.mjs` | Site URL, integrations, fonts, redirects, prefetch, HTML compression |
| `src/content.config.ts` | **Critical**: Defines all content collection schemas with Zod. Always reference this before adding/modifying content. |
| `src/styles/global.css` | Central design system: Tailwind `@theme` tokens, IEEE brand colors, glassmorphism utilities, custom cursor overrides |
| `tsconfig.json` | Path alias `@/*` → `src/*`, strict mode, ESNext target |

---

## 4. Development Workflow

### Coding Standards

- **Language**: All user-facing text in **Spanish** (`es-ES`).
- **Component Naming**: `PascalCase` for `.astro` files (e.g., `EventCard.astro`).
- **Styling**: Use Tailwind CSS classes exclusively. Reference design tokens from `src/styles/global.css` (e.g., `bg-bg-primary`, `text-accent-cyan`, `glass-card`).
- **Performance**:
  - Use `transform-gpu` for animations.
  - Use `decoding="async"` on all `<img>` tags.
  - Use `loading="lazy"` for below-the-fold images.
  - Use Astro's `<Image>` component for optimized local images.
- **Images**: Store in `public/images/`. Use `getImageModule()` from `src/utils/imageImports.ts` for dynamic imports.
- **SEO**: Set `title` and `description` props on `<BaseLayout>`. Use semantic HTML.

### Content Management

All dynamic content lives in `src/content/` as JSON files. The schema is enforced by Zod in `src/content.config.ts`.

**Adding new content:**

1. Ensure the JSON file matches the collection schema in `src/content.config.ts`.
2. For `eventos`, use `evento.json` as the filename (not arbitrary names).
3. Avoid `ejemplo.json` and `_*.json` files in production (excluded in non-dev builds).
4. Restart `npm run dev` to pick up new files.

**Collections Reference:**

| Collection | Folder | Key Fields |
| ------------ | -------- | ------------ |
| `convocatorias` | `convocatorias/` | `titulo`, `area`, `estado`, `fechaLimite`, `requisitos[]` |
| `eventos` | `eventos/` | `titulo`, `fechaInicio`, `estado`, `imagenPrincipal`, `galeria[]` |
| `tienda` | `tienda/` | `name`, `price`, `available`, `category` |
| `proyectos` | `proyectos/` | `titulo`, `categoria`, `estado`, `destacado`, `montoActual` |
| `juntaDirectiva` | `juntaDirectiva/` | `name`, `role`, `department`, `order` |
| `aliados` | `aliados/` | `nombre`, `tipo`, `logo`, `order` |
| `recursos` | `recursos/` | `titulo`, `categoria`, `links[]` |

### Build & Deployment

```bash
npm run build    # Outputs to dist/
```

The site is fully static. Deploy `dist/` to any static hosting (Netlify, Vercel, GitHub Pages, etc.).

### Redirects

Defined in `astro.config.mjs` under `redirects`. Examples:

- `/admin` → `/403`
- `/4o4`, `/4-o-4` → `/404`
- `/crash` → `/500`

---

## 5. Key Concepts

### Design System

The site uses a **dark-first** design with IEEE brand colors defined as Tailwind v4 `@theme` tokens in `src/styles/global.css`.

**Color Categories:**

- **Accent colors**: `accent-blue`, `accent-cyan`, `accent-emerald`, `accent-purple`, `accent-amber`, `accent-red`, `accent-yellow`, `accent-teal`, `accent-rose`
- **Backgrounds**: `bg-primary`, `bg-secondary`, `bg-deep-slate`, `bg-emerald-dark`, `bg-deep-purple`
- **Text**: `text-primary`, `text-secondary`
- **Glassmorphism**: `glass-panel`, `glass-card` utilities

### Typography

Managed via Astro Fonts (injected `@font-face`):

| Variable | Font | Use |
| ---------- | ------ | ----- |
| `--font-formata` | Formata (local) | Headings |
| `--font-nunito-sans` | Nunito Sans (Google) | Body text |
| `--font-share-tech-mono` | Share Tech Mono (Google) | Code/mono |
| `--font-space-grotesk` | Space Grotesk (Google) | Fallback |

### Currency Handling

Use `src/utils/currency.ts`:

```typescript
import { formatUSD, formatCOP, getUsdToCopRate } from '@/utils/currency';

formatUSD(29.99);   // "$29.99 USD"
formatCOP(29.99);   // "$122,790 COP" (uses live rate or 4100 fallback)
```

### Custom Cursor

`CustomCursor.astro` provides a custom cursor experience. The global CSS in `global.css` hides default cursors on interactive elements when the custom cursor is active.

### Content Visibility Optimization

Sections use `content-visibility: auto` with `contain-intrinsic-size` for performance on long pages.

---

## 6. Common Tasks

### Adding a New Event

1. Create `src/content/eventos/[name]/evento.json`
2. Follow the schema in `src/content.config.ts`:

```json
{
  "titulo": "Nombre del Evento",
  "tipo": "Taller",
  "organizador": "IEEE ComSoc",
  "fechaInicio": "2025-06-15",
  "fechaFin": "2025-06-15",
  "horaInicio": "14:00",
  "horaFin": "17:00",
  "lugarNombre": "Auditorio Principal",
  "lugarDireccion": "Calle 13 #100-00",
  "descripcion": "Descripción del evento...",
  "imagenPrincipal": "imagen-principal.jpg",
  "estado": "Publicado",
  "detalles": [
    { "label": "Costo", "value": "Gratis" }
  ]
}
```

1. Place the image in `public/images/eventos/[name]/`
2. The event will be available at `/eventos/[name]`

### Adding a New Project

1. Create `src/content/proyectos/[name].json`
2. Follow the schema:

```json
{
  "titulo": "Proyecto ESP32",
  "categoria": "IoT",
  "descripcion": "Descripción del proyecto...",
  "imagen": "imagen.jpg",
  "estado": "Activo",
  "destacado": true,
  "tags": ["ESP32", "IoT", "WiFi"],
  "enlace": "https://github.com/..."
}
```

1. Place the image in `public/images/proyectos/`
2. The project will be available at `/proyectos/[name]`

### Adding a Board Member

1. Create `src/content/juntaDirectiva/[order][role].json` (e.g., `1presidente.json`)
2. Follow the schema with `order` for sorting:

```json
{
  "order": 1,
  "name": "Juan Pérez",
  "role": "Presidente",
  "department": "Comité Central",
  "avatar": "👤",
  "image": "avatar.jpg",
  "bio": "Biografía...",
  "email": "juan@ieee.org",
  "linkedin": "https://linkedin.com/in/..."
}
```

### Adding a Shop Product

1. Create `src/content/tienda/[name].json`
2. Follow the schema:

```json
{
  "name": "Camiseta ComSoc",
  "category": "Ropa",
  "price": "25.00",
  "description": "Camiseta oficial...",
  "image": "producto.jpg",
  "available": true,
  "specifications": [
    { "key": "Material", "value": "Algodón" }
  ]
}
```

### Modifying the Design System

1. Edit `src/styles/global.css`
2. Add new colors under `@theme` block
3. New colors auto-generate `*-lighter` and `*-darker` variants
4. Use as Tailwind classes: `bg-accent-cyan`, `text-accent-purple-lighter`, etc.

### Adding a Redirect

Edit `astro.config.mjs` → `redirects` object:

```javascript
'/old-path': {
  status: 301,
  destination: '/new-path'
}
```

---

## 7. Troubleshooting

### Content Not Appearing

- Check that the JSON file matches the collection schema in `src/content.config.ts`.
- Ensure the filename follows the collection's glob pattern (e.g., `evento.json` for eventos).
- Verify the file is **not** named `ejemplo.json` or `_*.json` (excluded in production).
- Restart the dev server after adding new content files.

### Images Not Loading

- Verify the image path in the JSON matches the actual file in `public/images/`.
- For local images referenced in content, use `getImageModule()` in the page/component to resolve them.
- Remote images (starting with `http://` or `https://`) must be listed in `astro.config.mjs` under `image.domains`.

### Currency Not Updating

- Set the `EXCHANGERATE_API_KEY` environment variable for the free API tier.
- Without an API key, the site falls back to `4100` COP/USD.
- The rate is cached for 1 hour. Clear the cache by restarting the dev server.

### Tailwind Colors Not Working

- Ensure you're using the correct token prefix. Colors defined in `@theme` use `bg-accent-cyan`, not `bg-ieee-comsoc-cyan`.
- Check `src/styles/global.css` for the full list of available tokens.
- Restart the dev server after modifying `global.css`.

### Custom Cursor Not Showing

- The custom cursor is active by default on interactive elements.
- Check that `CustomCursor.astro` is included in the layout.
- Elements with `cursor-default`, `cursor-text`, etc. class overrides will show native cursors.

### Build Errors

- Run `npm run build` to see full error output.
- Check TypeScript errors: the project uses strict mode.
- Verify all JSON files are valid (use a JSON linter).

---

## 8. References

### Documentation

- [Astro Documentation](https://docs.astro.build/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Tailwind CSS v4](https://tailwindcss.com/docs/v4-beta)
- [astro-icon](https://github.com/jonasgeiler/astro-icon)
- [Google Fonts API](https://fonts.google.com/)

### Project Docs

- `docs/CODEBASE.md` — Detailed codebase guide
- `docs/GUIA_ADMINISTRACION.md` — Admin guide
- `DESIGN.md` — Design system documentation
- `PRODUCT.md` — Product requirements
- `AGENTS.md` — AI agent configuration

### Icon Libraries

- [Material Symbols](https://fonts.google.com/icons) (via `@iconify-json/material-symbols`)
- [Material Design Icons](https://materialdesignicons.com/) (via `@iconify-json/mdi`)
- [Simple Icons](https://simpleicons.org/) (via `@iconify-json/simple-icons`)

### Brand Guidelines

- IEEE Brand Colors defined in `src/styles/global.css` (Pantone references)
- IEEE ComSoc identity colors (Cyan #00aeef, Dark Blue #005f98)

---

*This guide is auto-generated from the project codebase. Last updated: 2025.*
