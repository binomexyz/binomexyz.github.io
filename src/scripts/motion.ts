// Movimiento: GSAP se carga bajo demanda y solo si el visitante no ha pedido reducir el movimiento.
// Si algo falla, el contenido sigue visible (nunca queda oculto a la espera de una animación).
const root = document.documentElement;

if (root.classList.contains('js-motion')) {
  import('./motion-gsap')
    .then((m) => m.iniciar())
    .catch(() => root.classList.remove('js-motion'));
}

// Pista horizontal del hero: arrastrar con ratón (táctil y teclado usan el scroll nativo).
const pista = document.querySelector<HTMLElement>('.hero__pista');
if (pista) {
  let abajo = false, inicioX = 0, inicioScroll = 0, movido = 0;
  pista.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    abajo = true; movido = 0; inicioX = e.clientX; inicioScroll = pista.scrollLeft;
  });
  addEventListener('pointermove', (e) => {
    if (!abajo) return;
    const dx = e.clientX - inicioX;
    movido = Math.max(movido, Math.abs(dx));
    if (movido > 5) pista.classList.add('arrastrando');
    pista.scrollLeft = inicioScroll - dx;
  });
  addEventListener('pointerup', () => {
    abajo = false;
    setTimeout(() => pista.classList.remove('arrastrando'), 0);
  });
  // Tras arrastrar, no activar el enlace bajo el puntero
  pista.addEventListener('click', (e) => { if (movido > 5) e.preventDefault(); }, true);
}
