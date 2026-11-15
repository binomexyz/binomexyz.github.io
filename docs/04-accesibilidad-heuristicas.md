# 04 · Accesibilidad y usabilidad

## WCAG 2.2 AA (verificado con axe-core en `npm run test:a11y`)
Contraste validado en build; foco visible; saltar al contenido; `<dialog>` con trampa de foco; formulario con etiquetas,
errores asociados y honeypot; movimiento reducido; objetivos táctiles ≥ 44 px.

## Heurísticas de Nielsen
1. Visibilidad del estado: menú activo `aria-current`, estados del formulario con `aria-live`.
2. Lenguaje del usuario: copy en español llano.
3. Control y libertad: Esc cierra el menú; migas de pan.
4. Consistencia: tokens y componentes únicos.
5. Prevención de errores: validación nativa y mensajes claros.
6. Reconocer antes que recordar: navegación visible y persistente.
7. Eficiencia: CTA en cabecera y pie; contacto en un paso.
8. Diseño minimalista: sin eyebrows ni adornos.
9. Recuperación de errores: mensajes con salida (email directo).
10. Ayuda: FAQ y páginas legales accesibles.

## Otras teorías aplicadas
Gestalt (proximidad en filas de servicios), ley de Fitts (CTA grandes), ley de Hick (menú corto), jerarquía tipográfica fluida.
