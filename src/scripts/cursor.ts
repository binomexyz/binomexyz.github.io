// Cursor contextual: una etiqueta ("ver caso") que sigue al puntero sobre elementos con data-cursor.
// Decorativo (aria-hidden) y solo con puntero fino; el cursor nativo nunca se oculta.
const el = document.querySelector<HTMLElement>('[data-cursor-el]');
const fino = matchMedia('(hover: hover) and (pointer: fine)').matches;

if (el && fino) {
  const etiqueta = el.querySelector('span') as HTMLElement;
  const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let x = -100, y = -100, cx = -100, cy = -100, raf = 0;

  const pintar = () => {
    cx += (x - cx) * (reducido ? 1 : 0.22);
    cy += (y - cy) * (reducido ? 1 : 0.22);
    el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.5 ? requestAnimationFrame(pintar) : 0;
  };
  addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY;
    const objetivo = (e.target as Element | null)?.closest<HTMLElement>('[data-cursor]');
    if (objetivo) {
      etiqueta.textContent = objetivo.dataset.cursor ?? '';
      el.classList.add('activo');
    } else el.classList.remove('activo');
    if (!raf) raf = requestAnimationFrame(pintar);
  }, { passive: true });
  document.addEventListener('pointerleave', () => el.classList.remove('activo'));
}
