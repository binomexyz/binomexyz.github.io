import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tono = z.enum(['coral', 'lavender', 'yellow', 'green', 'ink']);
const lang = z.enum(['es', 'fr', 'en']).default('es');

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    nombre: z.string(),
    orden: z.number(),
    lang,
    destacado: z.boolean().default(false),
    tono: tono.default('coral'),
    categorias: z.array(z.string()).min(1),
    resumen: z.string().max(220),
    cliente: z.string().optional(),
    sector: z.array(z.string()).optional(),
    ubicacion: z.string().optional(),
    web: z.url().optional(),
    anio: z.number().optional(),
    entregables: z.array(z.string()).optional(),
    contexto: z.array(z.string()).optional(),
    reto: z.string().optional(),
    propuesta: z.string().optional(),
    resultado: z.string().optional(),
    testimonio: z.object({ texto: z.string(), autor: z.string(), cargo: z.string().optional() }).optional(),
    /** true = faltan reto/propuesta/resultados reales. Se muestra el aviso interno solo en desarrollo. */
    borrador: z.boolean().default(false),
  }),
});

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().max(170),
    fecha: z.coerce.date(),
    actualizado: z.coerce.date().optional(),
    lang,
    categoria: z.enum(['diseno-ux-ui', 'web', 'branding', 'motion', 'ia', 'otros']),
    etiquetas: z.array(z.string()).default([]),
    autor: z.enum(['tom', 'betsabe']).default('tom'),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { proyectos, articulos };
