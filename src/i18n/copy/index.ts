import type { Locale } from '../config';
import { es, type Copy } from './es';
import { fr } from './fr';
import { en } from './en';

const todos: Record<Locale, Copy> = { es, fr, en };
export const getCopy = (locale: Locale): Copy => todos[locale];
export type { Copy };
