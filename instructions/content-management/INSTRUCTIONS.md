# INSTRUCTIONS: Content Management

These instructions guide AI agents in managing, creating, and updating JSON-based content for the IEEE ComSoc Univalle website.

## 🎯 Objective
To maintain data integrity, ensure strict adherence to defined schemas, and prevent the accidental inclusion of placeholder data in production.

## 🛠 Core Principles

### 1. Schema-First Approach
- **Always** verify the schema in `src/content.config.ts` before creating or modifying any JSON file in `src/content/`.
- Ensure all required fields are present and all optional fields follow their expected types.
- Use TypeScript types if available to validate the structure.

### 2. Collection-Specific Rules

#### `convocatorias` (Job/Volunteer Openings)
- Validate `estado` (e.g., `Publicada`, `Cerrada`).
- Ensure `fechaLimite` is in a valid date format.

#### `eventos` (Events)
- Support nested folder structures (e.g., `eventos/hackathon-2026/evento.json`).
- Verify `tipo` and `estado` (e.g., `Publicado`, `Pasado`).
- Ensure the `galeria` array contains valid image paths.

#### `tienda` (Store)
- Verify `price` is a number.
- Check `available` (boolean) and `category`.
- If `resources` is present, ensure paths to digital assets are correct.

#### `proyectos` (Projects)
- Validate `estado` (e.g., `Activo`, `Completado`, `En Pausa`).
- Ensure `montoMeta` is present if required for crowdfunding projects.

#### `juntaDirectiva` (Board)
- Always check the `order` field to maintain correct display sequence.

#### `aliados` (Partners)
- Ensure all partner logos/images exist in `public/images/`.

### 3. Data Hygiene & Safety

- **No Placeholders**: **NEVER** allow `ejemplo.json` files to be used in real content generation. These are for development/testing only.
- **Naming Convention**: Use `kebab-case` for JSON filenames (e.g., `mi-nuevo-evento.json`).
- **Language**: All text content (titles, descriptions, etc.) **MUST** be in **Spanish** (`es-ES`).
- **Path Integrity**: All image paths must be relative to the `public/` directory and start with `/images/`.

## 🔍 Verification Checklist
- [ ] Does the JSON structure match `src/content.config.ts`?
- [ ] Are there any `ejemplo.json` files being referenced?
- [ ] Is all content in Spanish?
- [ ] Are all image/resource paths valid?
- [ ] Are date fields correctly formatted?

## 📝 Example Prompt
"Update the 'hackathon-2026' event in the content collection to change its status to 'Pasado' and add a new image to the gallery."
