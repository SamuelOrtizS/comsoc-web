import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const convocatorias = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/convocatorias' }),
  schema: z.object({
    titulo: z.string(),
    area: z.string(),
    fechaLimite: z.string(),
    descripcion: z.string(),
    requisitos: z.array(z.string()),
    responsabilidades: z.array(z.string()),
    estado: z.enum(['Publicada', 'Cerrada']),
    formUrl: z.string().optional(),
  }),
});

const eventos = defineCollection({
  loader: glob({ pattern: '**/evento.json', base: './src/content/eventos' }),
  schema: z.object({
    titulo: z.string(),
    tipo: z.string(),
    organizador: z.string(),
    fechaInicio: z.string(),
    fechaFin: z.string().optional(),
    horaInicio: z.string(),
    horaFin: z.string(),
    lugarNombre: z.string(),
    lugarDireccion: z.string().optional(),
    descripcion: z.string(),
    imagenPrincipal: z.string(),
    galeria: z.array(z.string()).optional(),
    estado: z.enum(['Publicado', 'Pasado']),
  }),
});

const tienda = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/tienda' }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    price: z.string(),
    description: z.string(),
    image: z.string(),
    available: z.boolean().default(true),
  }),
});

const juntaDirectiva = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/juntaDirectiva' }),
  schema: z.object({
    order: z.number().default(99),
    name: z.string(),
    role: z.string(),
    department: z.string(),
    avatar: z.string().default('👤'),
    image: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    email: z.string().optional(),
  }),
});

export const collections = {
  convocatorias,
  eventos,
  tienda,
  juntaDirectiva,
};
