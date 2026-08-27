# # IEEE Communications Society Universidad del Valle Student Branch Chapter Web Project

## ✨ Welcome to ComSoc!

This project serves as the digital hub for IEEE Communications Society Universidad del Valle Student Branch Chapter. Our goal is to create an engaging, modern, and informative platform that connects community members, showcases academic achievements, promotes events, and facilitates collaboration within our network. Whether you are a student, researcher, or industry professional, this site is designed to be your central point of information.

---

## 📚 About the Project

The ComSoc Web is a comprehensive web application built with Astro, utilizing modern web technologies like TypeScript and Tailwind CSS for a beautiful and responsive user experience across all devices. It features dedicated sections for:
*   **Events:** Keeping you updated on upcoming symposia, hackathons, and workshops.
*   **Convocatorias:** Listing academic calls and opportunities.
*   **Proyectos:** Showcasing research projects and innovations.
*   **Tienda (Shop):** A place to buy merchandise and support the community.

The architecture is designed for scalability and ease of content management, ensuring that as our community grows, the platform can grow with it.

---

## 🧑‍💻 For Developers: Getting Started

This section provides technical instructions for setting up, building, and running the development environment locally.

### Prerequisites
Before you begin, ensure you have the following installed on your system:
*   Node.js (LTS version recommended)
*   npm or yarn/pnpm package manager

### 🚀 Local Development Workflow (The AI Agent Approach)

**Our primary and most efficient coding workflow involves using specialized local AI Agents.** These agents allow developers to research, generate code snippets, fix bugs, and implement new features autonomously.

To get started with development:
1.  **Initialize the Project:** Follow standard setup procedures (e.g., `npm install` and `npm run dev`).
2.  **Use Agent Tools:** When facing a task, utilize our integrated AI coding agents. They are designed to understand context, propose solutions, and make necessary code modifications across various files in the workspace, significantly accelerating development time.

### 🛠️ Building and Running the Project

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run the Development Server (Local Preview):**
    This command compiles the project and starts a local server where you can view changes in real-time.
    ```bash
    npm run dev
    ```
3.  **Building for Production:**
    When the site is ready to go live, run the build command to generate optimized static files:
    ```bash
    npm run build
    ```
    The resulting optimized files will be located in the `dist/` directory (or specified output folder).

---

## 🌐 For Non-Technical Users & Stakeholders

This website is designed for *you*! No technical knowledge is required to use it. Simply navigate through the sections:

*   **Home:** Your main gateway to everything ComSoc.
*   **Events:** Discover upcoming dates and times.
*   **Convocatorias:** See academic opportunities available.
*   **Proyectos:** Explore groundbreaking work from our members.

If you have content, design ideas, or need assistance with the site's functionality, please contact the core development team!

---

## 📄 Project Structure Overview

This project follows a standard Astro structure:
*   `src/pages/`: Contains the main page layouts (e.g., `index.astro`, `about.astro`).
*   `src/components/`: Reusable UI elements used across multiple pages (e.g., `Header.astro`, `CardComponent.astro`).
*   `src/content/`: Stores structured data (JSON) for content management, such as event listings or project details.
*   `astro.config.mjs`: The main configuration file for the Astro build tool.

***
*Last updated: 2026-08-27*