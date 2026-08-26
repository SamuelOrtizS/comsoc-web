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

## Gestión de Contenidos (src/content/)

El proyecto utiliza colecciones de contenido. Los archivos en `src/content/` deben seguir estrictamente los esquemas definidos en `src/content.config.ts`.

**Reglas Generales:**

- Los archivos llamados `ejemplo.json` o que comienzan con `_` son ignorados automáticamente por el sistema.
- Las imágenes pueden ser URLs externas o rutas relativas a `public/images/`.

**Tipos de Colecciones:**

1. **Convocatorias**: Incluye `titulo`, `area`, `fechaLimite` (YYYY-MM-DD), `descripcion`, `requisitos`, `responsabilidades`, `estado` (Publicada/Cerrada).
2. **Eventos**: Incluye `titulo`, `tipo`, `organizador`, `fechaInicio`, `fechaFin`, `horaInicio`, `horaFin`, `lugarNombre`, `lugarDireccion`, `descripcion`, `imagenPrincipal`, `galeria`, `estado` (Publicado/Pasado).
3. **Tienda**: Incluye `name`, `category`, `price` (ej. "$ 25.000 COP"), `description`, `image`, `available`.
4. **Junta Directiva**: Incluye `order`, `name`, `role`, `department`, `avatar` (emoji), `image`, `bio`, `email`, `phone`, redes sociales.
5. **Proyectos**: Incluye `titulo`, `categoria`, `descripcion`, `imagen`, `estado` (Activo/Completado/En Pausa), `tags`, `enlace`, `destacado`, `montoActual` y `montoMeta` (en USD y/o COP).
6. **Aliados**: Incluye `order`, `nombre`, `tipo`, `logo`, `descripcion`, `acerca`, `website`, `email`, `linkedin`, `instagram`.

## Mapa del Sitio

- **Home (/)**: Landing page con Hero, evento destacado, pilares tecnológicos, proyecciones destacados y sección de aliados.
- **Nosotros (/)**: Información sobre la organización.
- **Tienda (/)**: Catálogo de productos y merchandising.
- **Proyectos (/)**: Listado de proyectos (con vistas individuales `/proyectos/[id]`).
- **Eventos (/)**: Calendario de eventos (vista general y detalle `/eventos/[id]`).
- **Convocatorias (/)**: Listado de convocatorias abiertas.
- **Donaciones (/)**: Métodos de pago e información de soporte.
- **Unirse (/)**: Información para nuevos miembros.

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
