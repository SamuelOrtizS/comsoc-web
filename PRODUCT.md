# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, Tailwind CSS v4, TypeScript.

## Users

- **Students/Prospective Members**: Looking to join the team through `convocatorias` or participate in technical activities.
- **Researchers/Academics**: Interested in the technical innovation and research showcased in `proyectos`.
- **Community Supporters/Members**: Looking to stay informed about `eventos` or provide support via the `tienda` and `donaciones`.

## Product Purpose

The digital hub for the IEEE Communications Society (ComSoc) Universidad del Valle Student Branch Chapter. It aims to connect the community, showcase academic research, promote technical events, and facilitate membership and recruitment.

## Positioning

A central, high-fidelity technical engagement platform that bridges the gap between academic research (IoT, 5G/6G, Quantum) and student community involvement.

## Operating Context

- **Academic/Technical Environment**: Users expect a professional, tech-forward, and informative experience.
- **Event-Driven**: The site's rhythm is dictated by the lifecycle of workshops, hackathons, and symposia.
- **Content-First**: Information is managed through Astro Content Collections via JSON files.

## Capabilities and Constraints

- **Capabilities**: Showcase research projects, manage event registrations/info, list volunteer opportunities, and display a product catalog for merchandise.
- **Constraints**:
  - The `tienda` (Shop) acts as a **Product Catalog Only** (not a full e-commerce backend).
  - The primary success metric is **Event Engagement** (registering for/learning about events).
  - The site must be highly accessible and mobile-friendly.

## Brand Commitments

- **Name**: IEEE ComSoc Univalle (Capítulo Estudiantil IEEE Communications Society Universidad del Valle).
- **Voice/Tone**: Balance entre prestigio institucional/académico y dinamismo estudiantil comunitario; riguroso pero accesible. El contenido y la interfaz están estrictamente en **Español (es-ES)**.
- **Brand Standards**: Alineación con las Guías Oficiales de Identidad Visual de IEEE y IEEE ComSoc implementadas en `src/styles/global.css`:
  - **Identidad Primaria & Master Brand**:
    - IEEE Master Brand Blue: `#00629b` (Pantone 3015 C) → Token: `--color-ieee-blue` / `accent-blue`
    - ComSoc Process Cyan: `#00aeef` (Process Cyan C) → Token: `--color-ieee-comsoc-cyan` / `accent-cyan`
    - IEEE Process Cyan: `#00b5e2` → Token: `--color-ieee-cyan`
    - ComSoc Dark Blue: `#005f98` (Pantone 308 C) → Token: `--color-ieee-comsoc-dark-blue`
    - IEEE Navy: `#002855` (Pantone 295 C) → Token: `--color-ieee-navy`
    - Neutros Master Brand: White (`#ffffff`), Black (`#000000`), Black 80% (`#414141`), Cool Gray 9 C (`#75787b`).
  - **Paleta Brillante Oficial IEEE (Acentos y Señales)**:
    - Orange Bright: `#ffa300` (Pantone 137 C) → `accent-amber`
    - Yellow Bright: `#ffd100` (Pantone 109 C) → `accent-yellow`
    - Green Bright: `#78be20` (Pantone 368 C) → `accent-emerald-lighter`
    - Dark Green Bright: `#00843d` (Pantone 348 C) → `accent-emerald`
    - Red Bright: `#ba0c2f` (Pantone 200 C) → `accent-red`
    - Purple Bright: `#981d97` (Pantone 254 C) → `accent-purple`
    - Teal Bright: `#009ca6` (Pantone 320 C) → `accent-teal`
  - **Paleta Oscura Oficial IEEE (Sombras y Profundidad)**:
    - Orange Dark: `#e87722` (Pantone 158 C)
    - Yellow Dark: `#ffc72c` (Pantone 123 C)
    - Green Dark: `#658d1b` (Pantone 370 C)
    - Dark Green Dark: `#006341` (Pantone 3425 C)
    - Red Dark (Rose): `#861f41` (Pantone 208 C) → `accent-rose`
    - Purple Dark: `#772583` (Pantone 2612 C)
    - Teal Dark: `#007377` (Pantone 322 C)
  - **Lienzos Dark Matter & Fondos**:
    - Primary Background: `#050816` (Lighter: `#0c1333`, Darker: `#03050e`)
    - Secondary Background: `#0a0f24` (Lighter: `#121b40`, Darker: `#070a17`)
    - Deep Slate (`#0f172a`), Dark Emerald (`#0a1f1a`), Deep Purple (`#0d0720`)
  - **Tipografía Institucional**: Formata (titulares/display), Nunito Sans (cuerpo y lectura), Share Tech Mono (etiquetas/código).
- **Visual Identity**: Estética orbital/dark-matter de alta fidelidad tecnológica (glassmorphism con backdrop-blur, señal lumínica con cian ComSoc, microinteracciones y profundidad basada en capas tonales, sin modo claro forzado).

## Evidence on Hand

- **Real Content**: Active data for projects (`enlace-dwdm`, `ia-deteccion-anomalias`), events (`hackathon-2026`), and board members.
- **Assets**: Custom cursor and touch ripple components for high-fidelity UX.

## Product Principles

- **Tech-Forward Clarity**: Use advanced visual language (glassmorphism, motion) to reflect the cutting-edge nature of the field (5G, IoT, Quantum), but never at the expense of information density or readability.
- **Community-Centric Engagement**: Design workflows that make it frictionless for students to move from "observer" to "participant" (via events and convocatorias).
- **Academic Authority**: Maintain a professional and structured presentation of research and projects to uphold the IEEE standard.

## Accessibility & Inclusion

The website should be as accessible and mobile-friendly as possible to accommodate all students and community members.
