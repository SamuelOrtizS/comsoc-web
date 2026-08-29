# 📘 Guía de Administración de Contenidos - IEEE ComSoc Web

Esta guía explica cómo modificar, agregar y gestionar la información del sitio web de **IEEE ComSoc Student Chapter**. Todos los contenidos dinámicos se gestionan a través de archivos **JSON** ubicados en el directorio `src/content/`.

---

## 📁 Estructura del Directorio de Contenidos

```text
src/content/
├── aliados/          # Empresas, ramas y patrocinadores
├── convocatorias/    # Oportunidades de voluntariado y roles
├── eventos/          # Talleres, simposios y actividades
├── juntaDirectiva/   # Miembros de la mesa directiva
├── proyectos/        # Proyectos técnicos y de investigación
├── recursos/         # Kits de marca, plantillas y materiales descargables
├── tienda/           # Artículos y merchandising
├── estadisticas.json # Cifras y métricas mostradas en la página de inicio
└── donaciones.json   # Métodos de pago / donación mostrados en /donaciones
```

> **Nota sobre archivos de ejemplo:**  
> Cada carpeta cuenta con un archivo `ejemplo.json` (o subcarpeta `ejemplo/` en eventos) que sirve como plantilla. El compilador de la página **ignora automáticamente** cualquier archivo nombrado `ejemplo.json` o que comience con `_`.

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

- **Campos obligatorios:** `titulo`, `area`, `fechaLimite` (formato `YYYY-MM-DD`), `descripcion`, `requisitos` (lista), `responsabilidades` (lista), `estado` (`"Publicada"` o `"Cerrada"`).
- **Campos opcionales:** `formUrl` (enlace al formulario de Google/Microsoft).

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
  "imagenPrincipal": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  "galeria": [
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  ],
  "estado": "Publicado"
}
```

- **Campos obligatorios:** `titulo`, `tipo`, `organizador`, `fechaInicio`, `horaInicio`, `horaFin`, `lugarNombre`, `descripcion`, `imagenPrincipal`, `estado` (`"Publicado"` o `"Pasado"`).
- **Campos opcionales:** `fechaFin`, `lugarDireccion`, `galeria` (lista de URLs de imágenes).

---

## 3. Tienda / Merchandising (`src/content/tienda/`)

Crea un archivo `.json` por producto (ejemplo: `taza-comsoc.json`). Los precios se expresan en **Pesos Colombianos (COP)**:

```json
{
  "name": "Taza Térmica ComSoc",
  "category": "Accesorios",
  "price": "$ 25.000 COP",
  "description": "Taza de acero inoxidable con logo grabado láser.",
  "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
  "available": true
}
```

- **Campos:** `name`, `category`, `price` (texto con formato `$ XX.XXX COP`), `description`, `image` (URL de imagen), `available` (`true` o `false`).

---

## 4. Junta Directiva (`src/content/juntaDirectiva/`)

Crea un archivo `.json` por miembro (ejemplo: `presidente.json`):

```json
{
  "order": 1,
  "name": "Juan Pérez",
  "role": "Presidente del Capítulo",
  "department": "Junta Directiva",
  "avatar": "👨‍💼",
  "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  "bio": "Estudiante de 9no ciclo con especialización en telecomunicaciones.",
  "email": "juan.perez@ieee.org",
  "phone": "+51 987 654 321",
  "linkedin": "https://linkedin.com/in/juanperez",
  "instagram": "https://instagram.com/juanperez",
  "github": "https://github.com/juanperez",
  "website": "https://juanperez.dev"
}
```

- **Campos principales:** `order` (número para ordenar apariciones: 1, 2, 3...), `name`, `role`, `department`.
- **Redes y multimedia opcionales:** `avatar` (emoji), `image` (URL de foto), `bio`, `email`, `phone`, `linkedin`, `instagram`, `github`, `facebook`, `website`.

---

## 5. Proyectos (`src/content/proyectos/`)

Crea un archivo `.json` por proyecto (ejemplo: `satelite-cubesat.json`). Los proyectos manejan financiamiento tanto en **Dólares (USD)** como en **Pesos Colombianos (COP)**:

```json
{
  "titulo": "Estación Terrena para Recepción Satelital",
  "categoria": "Satelital & RF",
  "descripcion": "Diseño de antena Yagi automatizada y decodificación SDR para satélites meteorológicos NOAA.",
  "imagen": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "estado": "Activo",
  "tags": ["RF", "SDR", "Satélites", "Python"],
  "enlace": "https://github.com/comsoc/estacion-terrena",
  "destacado": true,
  "montoActual": 600,
  "montoMeta": 1500,
  "montoActualCOP": 2400000,
  "montoMetaCOP": 6000000
}
```

- **Campos obligatorios:** `titulo`, `categoria`, `descripcion`, `imagen`, `estado` (`"Activo"`, `"Completado"` o `"En Pausa"`).
- **Campos opcionales:** `tags` (array de strings), `enlace` (URL de GitHub/Demo), `destacado` (`true`/`false`), `montoActual` (número en USD), `montoMeta` (número meta en USD), `montoActualCOP` (número en COP), `montoMetaCOP` (número meta en COP). Si no se indican montos en COP, el sistema los calcula automáticamente con la tasa de referencia.

---

## 6. Aliados y Patrocinadores (`src/content/aliados/`)

Crea un archivo `.json` por entidad aliada (ejemplo: `huawei.json`):

```json
{
  "order": 1,
  "nombre": "Huawei ICT Academy",
  "tipo": "Partner Académico",
  "logo": "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=300&q=80",
  "descripcion": "Convenio para certificaciones gratuitas en 5G y Cloud.",
  "acerca": "Capacitaciones y acceso a plataformas de laboratorio.",
  "website": "https://www.huawei.com",
  "email": "contacto@huawei.com",
  "linkedin": "https://linkedin.com/company/huawei"
}
```

---

## 7. Estadísticas del Inicio (`src/content/estadisticas.json`)

Edita el archivo `src/content/estadisticas.json` directamente. Contiene una lista de 4 indicadores:

```json
[
  {
    "valor": "+30",
    "etiqueta": "Miembros Activos",
    "color": "text-text-primary"
  },
  {
    "valor": "35+",
    "etiqueta": "Workshops & Charlas",
    "color": "text-[#22d3ee]"
  },
  {
    "valor": "12+",
    "etiqueta": "Proyectos de Redes",
    "color": "text-[#a855f7]"
  },
  {
    "valor": "100%",
    "etiqueta": "Pasión Tecnológica",
    "color": "text-accent-emerald"
  }
]
```

---

## 8. Métodos de Donación (`src/content/donaciones.json`)

Los métodos de pago (transferencia bancaria a Nu, billetera digital a Nequi / Bre-B e internacional con PayPal) se configuran en el archivo `src/content/donaciones.json`:

```json
[
  {
    "type": "Transferencia Bancaria",
    "name": "Nu",
    "badge": "Transferencias & Llaves",
    "details": [
      { "label": "Banco / Entidad", "value": "Nu" },
      { "label": "Tipo de Cuenta", "value": "Cuenta de Ahorros" },
      { "label": "Número de Cuenta", "value": "XXXXXXXXXXXX" },
      { "label": "Titular", "value": "IEEE ComSoc Student Chapter" }
    ]
  },
  {
    "type": "Billetera Digital",
    "name": "Nequi / Bre-B",
    "badge": "Pagos Inmediatos",
    "details": [
      { "label": "Plataforma", "value": "Nequi / Bre-B" },
      { "label": "Número Celular / Llave", "value": "+57 300 000 0000" },
      { "label": "Titular", "value": "Tesorero IEEE ComSoc" },
      { "label": "Nota requerida", "value": "Indicar nombre y/o proyecto" }
    ]
  },
  {
    "type": "Donación Internacional",
    "name": "PayPal",
    "badge": "Internacional",
    "details": [
      { "label": "Plataforma", "value": "PayPal" },
      { "label": "Enlace PayPal", "value": "https://paypal.me/comsocchapter" },
      { "label": "Correo PayPal", "value": "donaciones.comsoc@ieee.org" },
      { "label": "Monedas aceptadas", "value": "USD, EUR y divisas globales" }
    ]
  }
]
```

---

## 9. Recursos (`src/content/recursos/`)

Página pública: **`/nosotros/recursos`** (`src/pages/nosotros/recursos/index.astro`). Muestra kits de marca, plantillas y materiales descargables en tarjetas (`src/components/ResourceCard.astro`) con contador de recursos/categorías y estado vacío cuando no hay contenido.

Cada recurso es un archivo `.json` independiente (ejemplo: `branding-kit.json`, `educacion.json`). El `id` de la colección es el nombre del archivo sin extensión.

```json
{
  "titulo": "Kit de Marca IEEE ComSoc Univalle",
  "descripcion": "Descarga los recursos oficiales de identidad visual para asegurar la consistencia de la marca en todos nuestros materiales.",
  "categoria": "Branding",
  "imagen": "/images/branding-kit.jpg",
  "links": [
    {
      "label": "Logotipos Oficiales (ZIP)",
      "url": "https://example.com/logo.zip",
      "tipo": "Download"
    },
    {
      "label": "Guía de Estilo",
      "url": "https://example.com/style-guide.pdf",
      "tipo": "Download"
    },
    {
      "label": "Plantilla de Presentación",
      "url": "https://canva.com/design/...",
      "tipo": "Canva"
    }
  ]
}
```

- **Campos obligatorios:** `titulo` (string), `descripcion` (string), `categoria` (string — ej. `"Branding"`, `"Educación"`, `"Plantillas"`; se usa para agrupar y contar categorías en la cabecera), `links` (array no vacío).
- **Campos opcionales:** `imagen` (string — URL externa `https://...` o ruta local `/images/...`; si se omite la tarjeta muestra una franja degradada y el badge de categoría dentro del cuerpo).
- **Objeto `links[]`:**
  - `label` (string, obligatorio) — texto del botón, ej. `"Logotipos Oficiales (ZIP)"`.
  - `url` (string, obligatorio) — enlace absoluto. Los enlaces se abren con `target="_blank"` + `rel="noopener noreferrer"`.
  - `tipo` (string, opcional) — controla icono y badge. Valores usados actualmente:
    - `"Download"` (por defecto) → icono de descarga.
    - `"Canva"` → icono de plantilla + badge `Canva` en el botón.
    - Cualquier otro valor (ej. `"External"`) → se renderiza con estilo Download sin badge.

**Esquema (fuente de verdad `src/content.config.ts:125`):**

```ts
z.object({
  titulo: z.string(),
  descripcion: z.string(),
  categoria: z.string(),
  imagen: z.string().optional(),
  links: z.array(z.object({
    label: z.string(),
    url: z.string(),
    tipo: z.string().optional(),
  })),
})
```

**Cómo agregar un recurso nuevo:**

1. Crea `src/content/recursos/mi-recurso.json` con la estructura anterior.
2. Si usas imagen local, coloca el archivo en `public/images/` y referencia como `/images/mi-recurso.jpg`.
3. Verifica `npm run build` — un JSON que no cumpla el esquema rompe el build.
4. La página `/nosotros/recursos` se regenera automáticamente: agrupa por `categoria` y renderiza un `ResourceCard` por entrada. Los archivos `ejemplo.json` o `_* .json` se ignoran.

> **Nota:** La página no tiene ruta dinámica `[id]`; todos los recursos se listan en una sola vista de grilla (`1 col → 2 cols → 3 cols`). Para recursos con un solo `link`, se muestra un único botón; para varios, se apilan verticalmente.

---

## 💡 Recomendaciones para Imágenes

- Puedes usar imágenes alojadas en internet (Unsplash, Cloudinary, Imgur) mediante URLs directas `https://...`.
- O puedes colocar archivos de imagen locales en la carpeta `public/images/` y referenciarlas como `/images/mi-foto.png`.
