# AI Agent Instructions for IEEE ComSoc Univalle Website

This document provides context and guidelines for AI agents working on this codebase.

## 🚀 Quick Start

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (with custom theme in `src/styles/global.css`)
- **Content**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) (JSON-based)
- **Language**: Spanish (`es-ES`)

## 🛠 Core Architecture

### 1. Component Patterns

Components are located in `src/components/` and use `.astro` files.

- **Naming**: Use `PascalCase` (e.g., `EventCard.astro`).
- **Styling**: Always use Tailwind CSS classes. Use the design system variables defined in `src/styles/global.css` (e.g., `bg-bg-primary`, `text-accent-cyan`).
- **Interactivity**: High-fidelity effects like `CustomCursor.astro` and `TouchRipple.astro` are used for UX.

### 2. Content-Driven Development

The website is "Content-First". Most pages are generated from data in `src/content/`.

- **Schemas**: Strictly defined in `src/content.config.ts`. **Always** check this file before adding or modifying content.
- **Collections**:
  - `convocatorias`: Job/volunteer openings.
  - `eventos`: Event data (supports nested folders).
  - `tienda`: Store products.
  - `proyectos`: Technical showcases.
  - `juntaDirectiva`: Board members.
  - `aliados`: Partners/Sponsors.
- **Data Format**: Primarily JSON.
- **Note**: `ejemplo.json` files are placeholders and should be ignored in production.

### 3. Routing & Layouts

- **Base Layout**: `src/layouts/BaseLayout.astro` is the primary wrapper. It handles SEO, GA, and global UI elements.
- **Dynamic Routes**: Uses `[id].astro` files in `src/pages/` to render content collection entries.
- **Error Pages**: Custom handlers for 403, 404, and 500 are in `src/pages/`.

### 4. Utilities & Styles

- **Monetary Handling**: Use `src/utils/currency.ts` for all currency formatting (`formatUSD`, `formatCOP`). It handles real-time USD/COP conversion.
- **Global Styles**: `src/styles/global.css` contains the central design system (colors, fonts, Tailwind theme).

## 📝 Coding Conventions

- **Language**: Content and UI text must be in **Spanish**.
- **Performance**: Use `transform-gpu` for animations and `decoding="async"` for images.
- **Image Handling**: Images are stored in `public/images/`.
- **Environment Variables**: Use `import.meta.env` for sensitive data like API keys.

## 🔍 Useful Documentation

- [Project Codebase Guide](docs/CODEBASE.md)
- [Admin Guide](docs/GUIA_ADMINISTRACION.md)
- [Developer Notes](notas/)

## 🤖 Agentic Workflow

This project uses a specialized structure to manage AI agent behavior, specialized instructions, and reusable skills.

### 1. Custom Agents (`.agents/`)

Contains specialized agent configurations. These define specific personas and behaviors for complex tasks.

- **Example**: `.agents/technical-reviewer/` contains logic for code and architecture reviews.

### 2. Specialized Instructions (`instructions/`)

Modular instruction sets that can be referenced by agents to perform domain-specific tasks without cluttering the main agent definition.

- **Content Management**: `instructions/content-management/`
- **Technical Review**: `instructions/technical-review/`

### 3. Reusable Skills (`skills/`)

Domain-specific knowledge modules that agents can invoke to automate common patterns or enforce technical standards.

- **API Integration**: `skills/api-integration/`
- **Frontend UI**: `skills/frontend-ui/`
