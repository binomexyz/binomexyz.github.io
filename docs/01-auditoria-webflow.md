# 01 · Auditoría de la web en Webflow (binome.xyz)

## Defectos detectados y cómo se resuelven en el código
| Defecto en Webflow | Solución en Astro |
|---|---|
| Titular recortado en cabecera | Alturas de línea y padding fluidos; sin `overflow` en títulos |
| Email solapado con cambio de fondo | Tono por sección (`data-tone`) con contraste validado |
| Menú móvil con fuga del overlay | `<dialog>` nativo a `100dvh`, foco atrapado, Esc cierra |
| Acordeón que oculta argumentos | Lista abierta (contenido siempre visible para usuarios y rastreadores) |
| Icono lavanda repetido en servicios | 4 servicios con tonos distintos (coral, lavanda, amarillo, verde) |
| Eyebrows sobre los títulos | Eliminados |
| Contraste coral sobre crema 2,97:1 | Roles `accent-text` (5,43:1), `accent-display` (3,96:1, solo texto grande) |

## Mantener
Paleta, tipografías (Funnel Display, DM Sans, DM Serif Text cursiva), tono de voz, estructura de páginas y URLs.
