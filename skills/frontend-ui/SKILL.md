# SKILL: frontend-ui

## Description
Automates the creation of new Astro components and their integration into the IEEE ComSoc Univalle website, ensuring strict adherence to the design system, Tailwind CSS v4 conventions, and project-specific UX patterns.

## When to use
- When the user asks to "create a new component", "add a new UI element", or "design a section".
- When implementing new features that require visual elements (e.g., a new card type, a hero section, or a specialized modal).
- When updating existing UI to match the design system.

## Workflow

### 1. Analysis & Requirement Gathering
- **Identify the purpose**: Is it a reusable atomic component (e.g., a button), a molecule (e.g., a card), or an organism (e.g., a hero section)?
- **Check existing components**: Search `src/components/` to avoid duplication.
- **Determine Data Source**: Does it need to be content-driven (linked to a collection in `src/content/`) or purely presentational?
- **Identify Styling Needs**: Determine which color variables from `src/styles/global.css` are required.

### 2. Component Scaffolding
- **File Creation**: Create the `.astro` file in `src/components/` using `PascalCase`.
- **Props Definition**: Define a strict TypeScript `interface Props` for all component properties.
- **Styling Implementation**:
    - Use **Tailwind CSS v4** utility classes.
    - Use **Design System Variables**: Instead of arbitrary hex codes, use `bg-accent-cyan`, `text-text-primary`, `bg-bg-secondary`, etc.
    - Apply **Performance Optimizations**: Use `transform-gpu` for animations and `decoding="async"` for images.
    - Implement **Glassmorphism**: Use backdrop blurs and semi-transparent borders where appropriate.

### 3. Integration & Verification
- **Integration**:
    - If it's a page-level component, integrate it into the relevant `.astro` file in `src/pages/`.
    - Ensure it is wrapped in `BaseLayout.astro` if it's a new page.
- **Verification**:
    - **Type Safety**: Check for TypeScript errors using `get_errors`.
    - **Responsive Check**: Ensure the component uses responsive Tailwind classes (e.g., `md:flex-row`, `text-sm lg:text-base`).
    - **UX Consistency**: Verify that interactive elements use `TouchRipple.astro` (for mobile) or follow the `CustomCursor.astro` patterns.

## Quality Criteria
- [ ] **Naming**: File is `PascalCase.astro`.
- [ ] **Types**: All props are strictly typed with TypeScript.
- [ ] **Styling**: No hardcoded colors; uses `global.css` variables via Tailwind.
- [ ] **Performance**: GPU acceleration and async image decoding are used.
- [ ] **Language**: All UI text/content is in **Spanish**.
- [ ] **Responsiveness**: Component is tested/verified for mobile and desktop views.

## Example Prompt
"Create a new 'ServiceCard' component that shows a technical service, its icon, and a brief description. It should use a glassmorphism effect and be compatible with the current design system."
