# 📘 Guía de Administración de Contenidos - IEEE ComSoc Web

Esta guía explica cómo modificar, agregar y gestionar la información del sitio web de **IEEE ComSoc Student Chapter**. Todos los contenidos dinámicos se gestionan a través de archivos **JSON** ubicados en `src/content/` y validados contra `src/content.config.ts:1`.

---

## 📁 Estructura del Directorio de Contenidos

```text
src/content/
├── aliados/          # Empresas, ramas y patrocinadores
├── convocatorias/    # Oportunidades de voluntariado y roles
├── eventos/          # Talleres, simposios y actividades (subcarpeta/evento.json)
├── juntaDirectiva/   # Miembros de la mesa directiva
├── proyectos/        # Proyectos técnicos y de investigación
├── recursos/         # Kits de marca, plantillas y materiales descargables
├── tienda/           # Artículos y merchandising
├── estadisticas.json # Cifras y métricas mostradas en la página de inicio
└── donaciones.json   # Métodos de pago / donación mostrados en /donaciones
```

> **Nota sobre archivos de ejemplo:**  
> Cada carpeta cuenta con un archivo `ejemplo.json` (o subcarpeta `ejemplo/` en eventos) que sirve como plantilla. El compilador **ignora automáticamente** cualquier archivo nombrado `ejemplo.json`, `_* .json` o que comience con `_` (`src/content.config.ts:5`).

**Imágenes:** Puedes usar URLs externas `https://...` o rutas locales `/images/mi-foto.jpg` colocadas en `public/images/` o `src/assets/images/` (resueltas vía `src/utils/imageResolver.ts:33`). Para `juntaDirectiva` se recomienda 400×400px; para eventos/proyectos 800×450px (optimizado a WebP).

**Iconos:** Los campos `icon` ahora usan **Google Symbols** vía `astro-icon` (`material-symbols:shield-rounded`, `material-symbols:rocket-launch-rounded`, etc.), no emojis. Ver `src/utils/tiendaIconMap.json:1` para mapeo usado en tienda.

---

## 1. Convocatorias (`src/content/convocatorias/`)

Para crear una convocatoria, añade un archivo `.json` (ejemplo: `marketing-lead.json`):

```json
{
  "titulo": "Coordinador de Comunicaciones",
  "area": "Marketing y Prensa",
  "fechaLimite": "2026-10-31",
  "descripcion": "Lidera la creación de contenido audiovisual y difusión en redes.",
  "requisitos": [
    "Manejo de herramientas de diseño (Canva, Figma o Photoshop).",
    "Buena redacción y comunicación interpersonal."
  ],
  "responsabilidades": [
    "Diseñar afiches para eventos.",
    "Gestionar publicaciones semanales."
  ],
  "estado": "Publicada",
  "formUrl": "https://forms.gle/ejemploDeFormulario"
}
```

- **Campos obligatorios:** `titulo`, `area`, `fechaLimite` (`YYYY-MM-DD`), `descripcion`, `requisitos` (lista), `responsabilidades` (lista), `estado` (`"Publicada"` o `"Cerrada"`).
- **Campos opcionales:** `formUrl` (enlace al formulario).

---

## 2. Eventos (`src/content/eventos/`)

Cada evento se ubica en su propia subcarpeta con el nombre del slug y un archivo `evento.json` (ejemplo: `src/content/eventos/taller-5g/evento.json`):

```json
{
  "titulo": "Workshop de Redes Celulares 5G & OpenRAN",
  "tipo": "Workshop",
  "organizador": "IEEE ComSoc & Capítulo Técnico",
  "fechaInicio": "2026-09-20",
  "fechaFin": "2026-09-21",
  "horaInicio": "16:00",
  "horaFin": "19:00",
  "lugarNombre": "Auditorio Central de Ingeniería",
  "lugarDireccion": "Av. Universitaria 1801, Pabellón V",
  "descripcion": "Aprende los fundamentos de la arquitectura de redes 5G de forma práctica.",
  "imagenPrincipal": "/images/event-iot.svg",
  "galeria": [
    "/images/galeria/foto1.jpg"
  ],
  "estado": "Publicado",
  "detalles": [
    { "label": "Capacidad", "value": "40 personas" }
  ]
}
```

- **Obligatorios:** `titulo`, `tipo`, `organizador`, `fechaInicio`, `horaInicio`, `horaFin`, `lugarNombre`, `descripcion`, `imagenPrincipal`, `estado` (`"Publicado"` o `"Pasado"`).
- **Opcionales:** `fechaFin`, `lugarDireccion`, `galeria` (lista de rutas `/images/...` o URLs), `detalles` (array `{label,value}`).

La portada del home elige el evento destacado de forma **determinística**: el `Publicado` más próximo por `fechaInicio` (`src/pages/index.astro:14`). Usa `?event=slug` para forzar uno en la URL.

---

## 3. Tienda / Merchandising (`src/content/tienda/`)

Crea un archivo `.json` por producto (ejemplo: `taza-comsoc.json`):

```json
{
  "name": "Taza Térmica ComSoc",
  "category": "Accesorios",
  "price": "$ 38.000 COP",
  "description": "Taza de acero inoxidable con logo grabado láser.",
  "image": "/images/event-iot.svg",
  "available": true,
  "resources": [
    { "title": "Garantía de 1 Año", "link": "/políticas/garantia", "icon": "material-symbols:shield-rounded", "color": "#3b82f6" }
  ],
  "specifications": [
    { "key": "Capacidad", "value": "500ml" }
  ]
}
```

- **Campos:** `name`, `category`, `price` (texto `$ XX.XXX COP`), `description`, `image` (URL o `/images/...`), `available` (`true`/`false`).
- **Opcionales:** `resources` (array `{title, link, icon, color}` — `icon` debe ser `material-symbols:xxx-rounded`, ver `src/utils/tiendaIconMap.json:1`), `specifications` (array `{key,value}`).

El modal de detalles convierte `icon` a SVG de Google Symbols vía `src/pages/tienda.astro:212`.

---

## 4. Junta Directiva (`src/content/juntaDirectiva/`)

Crea un archivo `.json` por miembro (ejemplo: `presidente.json`):

```json
{
  "order": 1,
  "name": "Juan Pérez",
  "role": "Presidente del Capítulo",
  "department": "Junta Directiva",
  "avatar": "👤",
  "image": "/images/samuel-o.jpg",
  "bio": "Estudiante de 9no ciclo con especialización en telecomunicaciones.",
  "email": "juan.perez@ieee.org",
  "phone": "+51 987 654 321",
  "linkedin": "https://linkedin.com/in/juanperez",
  "instagram": "https://instagram.com/juanperez",
  "github": "https://github.com/juanperez",
  "website": "https://juanperez.dev"
}
```

- **Principales:** `order` (1,2,3...), `name`, `role`, `department`.
- **Opcionales:** `avatar` (emoji fallback, se muestra `Icon:person` si no hay `image`), `image` (`/images/...` 400×400px, se optimiza a WebP), `bio`, `email`, `phone`, `linkedin`, `instagram`, `github`, `facebook`, `website`.

Imágenes locales se resuelven con alias para compatibilidad (`src/utils/imageResolver.ts:20`: `Samuel O.jpg` → `samuel-o.jpg`).

---

## 5. Proyectos (`src/content/proyectos/`)

Crea un archivo `.json` por proyecto (ejemplo: `satelite-cubesat.json`):

```json
{
  "titulo": "Estación Terrena para Recepción Satelital",
  "categoria": "Satelital & RF",
  "descripcion": "Diseño de antena Yagi automatizada y decodificación SDR para satélites NOAA.",
  "imagen": "/images/event-hackathon.svg",
  "estado": "Activo",
  "tags": ["RF", "SDR", "Satélites", "Python"],
  "enlace": "https://github.com/comsoc/estacion-terrena",
  "destacado": true,
  "montoActual": 600,
  "montoMeta": 1500,
  "recursos": [
    { "title": "Repositorio", "link": "https://github.com/...", "icon": "material-symbols:link-rounded" }
  ],
  "resumenTecnico": "Detalles de modulación y presupuesto de enlace..."
}
```

- **Obligatorios:** `titulo`, `categoria`, `descripcion`, `imagen`, `estado` (`"Activo"`, `"Completado"` o `"En Pausa"`).
- **Opcionales:** `tags`, `enlace`, `destacado` (boolean, prioriza en home), `montoActual`/`montoMeta` (USD, se convierte a COP vía `src/utils/currency.ts:47` con tasa `4100` por defecto y `fetch` con `AbortSignal.timeout(3000)`), `recursos` (array `{title,link,icon?}`), `resumenTecnico`.

El home muestra 2 proyectos destacados ordenados alfabéticamente por `titulo` (`src/pages/index.astro:28`).

---

## 6. Aliados y Patrocinadores (`src/content/aliados/`)

Crea un archivo `.json` por entidad (ejemplo: `huawei.json`):

```json
{
  "order": 1,
  "nombre": "Huawei ICT Academy",
  "tipo": "Partner Académico",
  "logo": "/images/logo-comsoc.svg",
  "descripcion": "Convenio para certificaciones gratuitas en 5G y Cloud.",
  "acerca": "Capacitaciones y acceso a plataformas de laboratorio.",
  "website": "https://www.huawei.com",
  "email": "contacto@huawei.com",
  "linkedin": "https://linkedin.com/company/huawei"
}
```

Campos: `order`, `nombre`, `tipo`, `descripcion` (obligatorios); `logo` (`/images/...` 200×80px), `acerca`, `website`, `email`, `phone`, `linkedin`, `instagram` (opcionales).

---

## 7. Estadísticas del Inicio (`src/content/estadisticas.json`)

Edita el archivo directamente. Actualmente 4 indicadores verificables (no vanity):

```json
[
  { "valor": "16", "etiqueta": "Miembros Activos", "color": "text-text-primary" },
  { "valor": "3", "etiqueta": "Eventos 2025", "color": "text-accent-cyan" },
  { "valor": "2", "etiqueta": "Proyectos Activos", "color": "text-accent-purple" },
  { "valor": "4", "etiqueta": "Aliados Estratégicos", "color": "text-accent-emerald" }
]
```

Se renderizan en `src/pages/index.astro:110`.

---

## 8. Métodos de Donación (`src/content/donaciones.json`)

Configura transferencias (Nu), billeteras (Nequi/Bre-B) y PayPal internacional. Cada método tiene `type`, `name`, `badge` y `details[]` (`label`+`value`). Se renderizan en `/donaciones` con copiado al portapapeles.

---

## 9. Recursos (`src/content/recursos/`)

Página: `/nosotros/recursos` (`src/pages/nosotros/recursos/index.astro`). Muestra kits de marca y plantillas en `ResourceCard.astro`.

Cada recurso es un `.json` independiente:

```json
{
  "titulo": "Kit de Marca IEEE ComSoc Univalle",
  "descripcion": "Descarga los recursos oficiales de identidad visual...",
  "categoria": "Branding",
  "imagen": "/images/branding-kit.jpg",
  "links": [
    { "label": "Logotipos Oficiales (ZIP)", "url": "https://example.com/logo.zip", "tipo": "Download" },
    { "label": "Plantilla de Presentación", "url": "https://canva.com/design/...", "tipo": "Canva" }
  ]
}
```

- **Obligatorios:** `titulo`, `descripcion`, `categoria`, `links` (array no vacío).
- **Opcionales:** `imagen` (`/images/...` o URL).
- **`links[].tipo`:** `"Download"` (icono `download-rounded`) o `"Canva"` (icono `palette` + badge). Otro valor → estilo Download.

Esquema fuente: `src/content.config.ts:125`.

---

## 10. SEO, Sitemap y Markdown para Agentes

- **Sitemap:** Se genera automáticamente en `dist/sitemap.xml` (copia de `sitemap-0.xml`) y `sitemap-index.xml` vía `@astrojs/sitemap` + integración `sitemap-xml` en `astro.config.mjs:14`. Listado en `public/robots.txt:4` como `Sitemap: https://comsoc.ieeeunivalle.link/sitemap.xml`. Se actualiza en cada `npm run build`.
- **Markdown para Agentes:** Soporte `Accept: text/markdown` vía `src/middleware.ts:13` (usa `turndown` + `x-markdown-tokens`) y `worker.js:1`/`functions/_middleware.js:1` para Cloudflare. Archivos estáticos `.md` se generan en `dist/**/*.md` vía `src/utils/markdownIntegration.ts:1`. Cloudflare puede habilitar “Markdown for Agents” sin código adicional.

---

## 💡 Recomendaciones para Imágenes e Iconos

- **Imágenes:** Usa `/images/...` locales (se optimizan a WebP 800×450px para eventos/proyectos, 200×200px para avatares) o URLs externas. Evita duplicados con espacios (`Samuel O.jpg` → `samuel-o.jpg`).
- **Iconos:** Usa `material-symbols:xxx-rounded` (ej. `shield-rounded`, `local-shipping-rounded`, `water-drop-rounded`, `palette`, `auto-awesome-rounded`, `lightbulb-rounded`, `checkroom-rounded`). Verifica existencia en `@iconify-json/material-symbols` (`src/utils/tiendaIconMap.json:1`). Para marcas usa `mdi:instagram`, `simple-icons:github`.
- **Fuentes:** Gestionadas por `astro:assets` (`astro.config.mjs:32`): `Formata` local + `Nunito Sans`, `Share Tech Mono`, `Space Grotesk` de Google. No añadas `<link>` manualmente.

---

## ✅ Verificación

```bash
npm run build   # valida esquemas y genera sitemap + .md
npm run preview # previsualiza producción
```

Un JSON que no cumpla el esquema rompe el build — revisa `src/content.config.ts` como fuente de verdad.
