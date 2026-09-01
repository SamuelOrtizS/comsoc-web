import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const isDev = import.meta.env.DEV;

const convocatorias = defineCollection({
    loader: glob({ pattern: isDev ? ['**/*.json', '!**/_*.json'] : ['**/*.json', '!**/ejemplo.json', '!**/_*.json'], base: './src/content/convocatorias' }),
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
    loader: glob({ pattern: isDev ? ['**/evento.json', '!**/_*.json'] : ['**/evento.json', '!**/ejemplo/**/evento.json', '!**/ejemplo.json', '!**/_*.json'], base: './src/content/eventos' }),
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
        detalles: z.array(
            z.object({
                label: z.string(),
                value: z.string(),
            })
        ).optional(),
    }),
});


const tienda = defineCollection({
    loader: glob({ pattern: isDev ? ['**/*.json', '!**/_*.json'] : ['**/*.json', '!**/ejemplo.json', '!**/_*.json'], base: './src/content/tienda' }),
    schema: z.object({
        name: z.string(),
        category: z.string(),
        price: z.string(),
        description: z.string(),
        image: z.string(),
        available: z.boolean().default(true),
        resources: z.array(z.object({ // New field for Resources
            title: z.string(),
            link: z.string(),
            icon: z.string(), //Material symbols
            color: z.string(), // Hexadecimal color
        })).optional(),
        specifications: z.array(z.object({ // New field for Specifications
            key: z.string(),
            value: z.string(),
        })).optional(),
    }),
});

const juntaDirectiva = defineCollection({
    loader: glob({ pattern: isDev ? ['**/*.json', '!**/_*.json'] : ['**/*.json', '!**/ejemplo.json', '!**/_*.json'], base: './src/content/juntaDirectiva' }),
    schema: z.object({
        order: z.number().default(99),
        name: z.string(),
        role: z.string(),
        department: z.string(),
        avatar: z.string().default('👤'),
        image: z.string().optional(),
        bio: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        linkedin: z.string().optional(),
        instagram: z.string().optional(),
        facebook: z.string().optional(),
        github: z.string().optional(),
        website: z.string().optional(),
    }),
});

const proyectos = defineCollection({
    loader: glob({ pattern: isDev ? ['**/*.json', '!**/_*.json'] : ['**/*.json', '!**/ejemplo.json', '!**/_*.json'], base: './src/content/proyectos' }),
    schema: z.object({
        titulo: z.string(),
        categoria: z.string(),
        descripcion: z.string(),
        imagen: z.string(),
        estado: z.enum(['Activo', 'Completado', 'En Pausa']).default('Activo'),
        tags: z.array(z.string()).optional(),
        enlace: z.string().optional(),
        destacado: z.boolean().default(false),
        montoActual: z.number().optional(),
        montoMeta: z.number().optional(),
        recursos: z.array(z.object({
            title: z.string(),
            link: z.string(),
            icon: z.string().optional(), // Optional icon/emoji for visual flair
        })).optional(),
        resumenTecnico: z.string().optional(), // For detailed technical insights (plain text)
    }),
});

const aliados = defineCollection({
    loader: glob({ pattern: isDev ? ['**/*.json', '!**/_*.json'] : ['**/*.json', '!**/ejemplo.json', '!**/_*.json'], base: './src/content/aliados' }),
    schema: z.object({
        order: z.number().default(99),
        nombre: z.string(),
        tipo: z.string(),
        logo: z.string(),
        logoX: z.string().default('80'),
        logoY: z.string().default('80'),
        descripcion: z.string(),
        acerca: z.string().optional(),
        website: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        linkedin: z.string().optional(),
        instagram: z.string().optional(),
    }),
});


const recursos = defineCollection({
    loader: glob({ pattern: isDev ? ['**/*.json', '!**/_*.json'] : ['**/*.json', '!**/ejemplo.json', '!**/_*.json'], base: './src/content/recursos' }),
    schema: z.object({
        titulo: z.string(),
        descripcion: z.string(),
        categoria: z.string(),
        imagen: z.string().optional(),
        links: z.array(z.object({
            label: z.string(),
            url: z.string(),
            tipo: z.string().optional(), // e.g., 'Download', 'Canva', 'External'
        })),
    }),
});

export const collections = {
    convocatorias,
    eventos,
    tienda,
    juntaDirectiva,
    proyectos,
    aliados,
    recursos,
};
