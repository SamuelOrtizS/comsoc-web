# Proyecto: ComSoc Web

## Descripción General

Este proyecto es el sitio web oficial de la sección estudiantil de ComSoc (Sociedad de Comunicaciones) de IEEE en la Universidad del Valle. Está construido con **Astro**, **Tailwind CSS** y **TypeScript**.

El sitio cumple varias funciones principales:

- Mostrar y gestionar **Convocatorias** actuales.
- Mostrar y detallar **Eventos**.
- Proporcionar una **Tienda** virtual de productos.
- Presentar a la **Junta Directiva**.
- Mostrar **Proyectos** y **Aliados** estratégicos.

## Arquitectura Técnica

- **Framework**: Astro (Generación de Sitios Estáticos).
- **Estilos**: Tailwind CSS (v4.0.0) con una estética de "tecnología espacial" (fondo oscuro, acentos en Cian, Púrpura y azul).
- **Gestión de Contenido**: Astro Content Collections (definido en `src/content.config.ts`). Los datos se almacenan en archivos JSON dentro de `src/content/`.
- **Lenguaje**: TypeScript para asegurar la integridad de los datos.
- **Herramientas de Construcción**: Vite (integrado en Astro).
- **Experiencia de Usuario (UX)**: Incluye elementos interactivos como `CustomCursor`, efectos de `TouchRipple` y componentes de visualización dinámica (ej. `CountdownTimer`).

## 🛠 Guía para Agentes (Contexto de Automatización)

Para agentes que realizan tareas de mantenimiento, contenido o desarrollo, sigan estas directrices:

### 1. Flujo de Trabajo de Contenido
- **Validación**: Antes de cualquier commit, es imperativo que los archivos JSON en `src/content/` coincidan con los esquemas de `src/content.config.ts`.
- **Patrón de Archivos**: 
  - Use `ejemplo.json` para plantillas de nuevos contenidos.
  - Los archivos que comienzan con `_` o se llaman `ejemplo.json` son ignorados por Astro.
- **Imágenes**: Pueden ser URLs externas o rutas relativas a `public/images/`.

### 2. Patrones de Desarrollo
- **Componentes**: Todos los componentes `.astro` deben usar Tailwind CSS para el estilizado.
- **Tipado**: Al crear nuevos componentes, defina interfaces TypeScript para las `Props`.
- **Internacionalización**: El sitio está en **Español**. Todo el contenido nuevo debe seguir este idioma.

### 3. Localización de Recursos
- **Estilos Globales**: `src/styles/global.css` (Contiene el sistema de diseño).
- **Utilidades de Moneda**: `src/utils/currency.ts` (No reinventar la lógica de conversión).
- **Layout Base**: `src/layouts/BaseLayout.astro` (Wrapper principal para SEO y estructura).
- **Configuración de Colecciones**: `src/content.config.ts` (Fuente de verdad para esquemas).

## Gestión de Contenidos (src/content/)

El proyecto utiliza colecciones de contenido. Los archivos en `src/content/` deben seguir estrictamente los esquemas definidos en `src/content.config.ts`.

**Reglas Generales:**

- Los archivos llamados `ejemplo.json` o que comienzan con `_` son ignorados automáticamente por el sistema.
- Las imágenes pueden ser URLs externas o rutas relativas a `public/images/`.

**Tipos de Colecciones (Esquemas detallados en `src/content.config.ts`):**

1. **Convocatorias**: `titulo`, `area`, `fechaLimite` (YYYY-MM-DD), `descripcion`, `requisitos` (Array), `responsabilidades` (Array), `estado` (Publicada/Cerrada), `formUrl` (Opcional).
2. **Eventos**: `titulo`, `tipo`, `organizador`, `fechaInicio`, `fechaFin` (Opcional), `horaInicio`, `horaFin`, `lugarNombre`, `lugarDireccion` (Opcional), `descripcion`, `imagenPrincipal`, `galeria` (Array opcional), `estado` (Publicado/Pasado).
3. **Tienda**: `name`, `category`, `price`, `description`, `image`, `available` (Boolean), `resources` (Array de objetos con title, link, icon, color), `specifications` (Array de objetos con key, value).
4. **Junta Directiva**: `order`, `name`, `role`, `department`, `avatar` (Emoji), `image` (Opcional), `bio`, `email`, `phone`, redes sociales (linkedin, instagram, etc.).
5. **Proyectos**: `titulo`, `categoria`, `descripcion`, `imagen`, `estado` (Activo/Completado/En Pausa), `tags` (Array), `enlace` (Opcional), `destacado` (Boolean), `montoActual` (Number), `montoMeta` (Number), `recursos` (Array), `resumenTecnico` (String).
6. **Aliados**: `order`, `nombre`, `tipo`, `logo` (Opcional), `descripcion`, `acerca` (Opcional), `website`, `email`, `linkedin`, `instagram`.

## Mapa del Sitio

- **Home (/)**: Landing page con Hero, evento destacado, pilares tecnológicos, proyecciones destacados y sección de aliados.
- **Nosotros (/)**: Información sobre la organización.
- **Tienda (/)**: Catálogo de productos y merchandising.
- **Proyectos (/)**: Listado de proyectos (con vistas individuales `/proyectos/[id]`).
- **Eventos (/)**: Calendario de eventos (vista general y detalle `/eventos/[id]`).
- **Convocatorias (/)**: Listado de convocatorias abiertas.
- **Donaciones (/)**: Métodos de pago e información de soporte.
- **Unirse (/)**: Información para nuevos miembros.

## Mejoras Sugeridas y Recomendaciones Futuras

### 🚀 SEO y Accesibilidad (A11y)

Para asegurar que el sitio sea visible para buscadores y utilizable por personas con discapacidad, se recomienda implementar lo siguiente:

- **Meta Tags**: Asegurar que cada página de destino (`index.astro`, `[id].astro`, etc.) tenga meta etiquetas `<title>` y `<meta name="description">` únicas, alimentadas por los metadatos del contenido o de la colección.
- **Estructura Semántica**: Usar etiquetas HTML5 semánticas (e.g., `<header>`, `<main>`, `<nav>`, `<footer>`) en todos los layouts principales (`BaseLayout.astro`).
- **Atributos ARIA**: Añadir atributos ARIA donde sea necesario, especialmente para elementos interactivos o menús colapsables (como el `MobileMenu.astro`).

### ⚙️ Buenas Prácticas de Desarrollo y Mantenimiento

- **Tipado en Componentes**: Aunque se usa TypeScript, es crucial tipar todas las props pasadas a los componentes Astro (`ConvocatoriaCard`, `EventCard`, etc.) para garantizar la seguridad en tiempo de compilación.
- **Gestión de Estado Global**: Si la aplicación crece y requiere compartir estado entre páginas (ej. un usuario logueado o filtros complejos), se debe considerar implementar un patrón de gestión de estado ligero, como el uso de *client-side state management* con bibliotecas Astro compatibles o Context API si es necesario.
- **Testing**: Implementar un enfoque de testing:
  - **Unit Tests**: Para utilidades complejas (ej. `src/utils/currency.ts`).
  - **Component Tests**: Usando herramientas como Vitest y testing-library para validar el comportamiento de componentes Astro clave (`Header`, `EventCard`) en diferentes estados.

### ♻️ Optimización del Ciclo de Vida del Contenido

- **Validación Automática**: Integrar un paso de pre-commit hook (ej. usando Husky) que ejecute validadores de esquema JSON para todas las colecciones (`src/content/*/*.json`) antes de permitir el commit, previniendo la rotura del *build* por datos malformados.

## Construcción y Ejecución

| Comando | Descripción |
| ---------- | ------------- |
| `npm run dev` | Inicia el servidor de desarrollo local de Astro.
| `npm run build` | Genera la versión de producción del sitio.
| `npm run preview` | Previsualiza la versión de producción localmente.
| `npm install` | Instala todas las dependencias del proyecto.

## Convenciones de Desarrollo

- **Validación de Contenido**: Al añadir o modificar archivos en `src/content/`, es obligatorio cumplir con los esquemas definidos en `src/content.config.ts`.
- **Componentes Reutilizables**: El proyecto utiliza componentes como `Header`, `Footer`, `HeroSection`, `CountdownTimer`, y tarjetas de contenido (`EventCard`, `ConvocatoriaCard`).
- **Diseño de Interfaz (UI)**: Se utiliza una estética basada en capas "glassmorphism", gradientes de brillo y fuentes específicas (Nunito Sans, Space Grotesk).
- **Estilos**: Implementación mediante clases de Tailwind CSS.
- **Tipado**: Uso de TypeScript para asegurar la integridad de las funciones y componentes.
- **Utilidades de Moneda (currency.ts)**: Gestión de conversión y formato de monedas (USD y COP), con lógica de caché y una tasa de respaldo (4100).
- **Rutas**: Definidas en `src/pages/`.
- **Estadísticas**: Los datos de la página principal se modifican en `src/content/estadisticas.json`.
- **Donaciones**: Los métodos de pago se configuran en `src/content/donaciones.json`.

## Mapa del Sitio

- **Home (/)**: Landing page con Hero, evento destacado, pilares tecnológicos, proyecciones destacados y sección de aliados.
- **Nosotros (/)**: Información sobre la organización.
- **Tienda (/)**: Catálogo de productos y merchandising.
- **Proyectos (/)**: Listado de proyectos (con vistas individuales `/proyectos/[id]`).
- **Eventos (/)**: Calendario de eventos (vista general y detalle `/eventos/[id]`).
- **Convocatorias (/)**: Listado de convocatorias abiertas.
- **Donaciones (/)**: Métodos de pago e información de soporte.
- **Unirse (/)**: Información para nuevos miembros.

## Mejoras Sugeridas y Recomendaciones Futuras

### 🚀 SEO y Accesibilidad (A11y)

Para asegurar que el sitio sea visible para buscadores y utilizable por personas con discapacidad, se recomienda implementar lo siguiente:

- **Meta Tags**: Asegurar que cada página de destino (`index.astro`, `[id].astro`, etc.) tenga meta etiquetas `<title>` y `<meta name="description">` únicas, alimentadas por los metadatos del contenido o de la colección.
- **Estructura Semántica**: Usar etiquetas HTML5 semánticas (e.g., `<header>`, `<main>`, `<nav>`, `<footer>`) en todos los layouts principales (`BaseLayout.astro`).
- **Atributos ARIA**: Añadir atributos ARIA donde sea necesario, especialmente para elementos interactivos o menús colapsables (como el `MobileMenu.astro`).

### ⚙️ Buenas Prácticas de Desarrollo y Mantenimiento

- **Tipado en Componentes**: Aunque se usa TypeScript, es crucial tipar todas las props pasadas a los componentes Astro (`ConvocatoriaCard`, `EventCard`, etc.) para garantizar la seguridad en tiempo de compilación.

- **Gestión de Estado Global**: Si la aplicación crece y requiere compartir estado entre páginas (ej. un usuario logueado o filtros complejos), se debe considerar implementar un patrón de gestión de estado ligero, como el uso de *client-side state management* con bibliotecas Astro compatibles o Context API si es necesario.
- **Testing**: Implementar un enfoque de testing:
  - **Unit Tests**: Para utilidades complejas (ej. `src/utils/currency.ts`).
  - **Component Tests**: Usando herramientas como Vitest y testing-library para validar el comportamiento de componentes Astro clave (`Header`, `EventCard`) en diferentes estados.

### ♻️ Optimización del Ciclo de Vida del Contenido

- **Validación Automática**: Integrar un paso de pre-commit hook (ej. usando Husky) que ejecute validadores de esquema JSON para todas las colecciones (`src/content/*/*.json`) antes de permitir el commit, previniendo la rotura del *build* por datos malformados.

## Construcción y Ejecución

| Comando | Descripción |
| ---------- | ------------- |
| `npm run dev` | Inicia el servidor de desarrollo local de Astro. |
| `npm run build` | Genera la versión de producción del sitio. |
| `npm run preview` | Previsualiza la versión de producción localmente. |
| `npm install` | Instala todas las dependencias del proyecto. |

## Convenciones de Desarrollo

- **Validación de Contenido**: Al añadir o modificar archivos en `src/content/`, es obligatorio cumplir con los esquemas definidos en `src/content.config.ts`.
- **Componentes Reutilizables**: El proyecto utiliza componentes como `Header`, `Footer`, `HeroSection`, `CountdownTimer`, y tarjetas de contenido (`EventCard`, `ConvocatoriaCard`).
- **Diseño de Interfaz (UI)**: Se utiliza una estética basada en capas "glassmorphism", gradientes de brillo y fuentes específicas (Nunito Sans, Space Grotesk).
- **Estilos**: Implementación mediante clases de Tailwind CSS.
- **Tipado**: Uso de TypeScript para asegurar la integridad de las funciones y componentes.
- **Utilidades de Moneda (currency.ts)**: Gestión de conversión y formato de monedas (USD y COP), con lógica de caché y una tasa de respaldo (4100).
- **Rutas**: Definidas en `src/pages/`.
- **Estadísticas**: Los datos de la página principal se modifican en `src/content/estadisticas.json`.
- **Donaciones**: Los métodos de pago se configuran en `src/content/donaciones.json`.
