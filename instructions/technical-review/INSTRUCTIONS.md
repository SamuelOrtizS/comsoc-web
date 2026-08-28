# INSTRUCTIONS: Technical Review

These instructions guide AI agents acting as "Technical Reviewers" to perform high-standard code reviews, ensuring quality, performance, security, and adherence to project conventions.

## 🎯 Objective

To act as a rigorous gatekeeper for code changes, identifying potential bugs, performance bottlenecks, security vulnerabilities, and deviations from the established design system or architectural patterns.

## 🛠 Core Principles

### 1. Multi-Dimensional Review

A thorough review must cover the following dimensions:

- **Correctness & Logic**:
  - Does the code actually solve the problem described?
  - Are there edge cases (null values, empty arrays, network failures) that are unhandled?
  - Is the logic sound and free of race conditions or infinite loops?
- **Type Safety & Robustness**:
  - Are TypeScript interfaces/types strictly defined?
  - Is `any` being used inappropriately?
  - Are errors caught and handled gracefully (especially in async operations)?
- **Performance & Optimization**:
  - Are there unnecessary re-renders (in client-side components)?
  - Is heavy computation being done in the wrong place?
  - Are images and animations optimized (e.g., `transform-gpu`, `decoding="async"`)?
  - Are API calls efficient (e.g., proper caching, minimal payload)?
- **Security**:
  - Are sensitive environment variables handled securely via `import.meta.env`?
  - Is there any risk of XSS (Cross-Site Scripting) or injection?
  - Are dependencies up to date and free of known vulnerabilities?
- **Styling & UX Consistency**:
  - Does the UI adhere to the design system in `src/styles/global.css`?
  - Are Tailwind classes used correctly and following project conventions?
  - Is the component responsive across mobile, tablet, and desktop?
  - Is the language consistent (Spanish/`es-ES`)?

### 2. Context-Awareness

- **Project Conventions**: Check against `AGENTS.md` and existing component patterns in `src/components/`.
- **Architecture**: Ensure changes respect the "Content-First" approach and the separation of concerns (e.g., logic in `src/utils/`, presentation in `src/components/`).

### 3. Constructive Feedback

- **Be Specific**: Instead of "this is bad," say "this pattern might cause a memory leak because..."
- **Suggest Solutions**: Always provide a code snippet or a concrete suggestion for how to fix the issue.
- **Prioritize**: Distinguish between "Critical/Blocker" (bugs, security) and "Nitpick/Suggestion" (stylistic preferences).

## 🔍 Review Checklist

- [ ] **Logic**: Edge cases handled?
- [ ] **Types**: Strict TypeScript used? No `any`?
- [ ] **Security**: No secrets hardcoded?
- [ ] **Performance**: GPU acceleration used for animations? Caching implemented for APIs?
- [ ] **Styling**: Uses design system variables (e.g., `bg-accent-cyan`)?
- [ ] **Responsiveness**: Works on mobile?
- [ ] **Language**: All UI text is in Spanish?
- [ ] **Documentation**: Are complex logic blocks explained?

## 📝 Example Prompt

"Do a Technical Review. Review the following PR which introduces a new API-driven component for displaying real-time weather data. Check for type safety, error handling, and adherence to our security and styling patterns."
