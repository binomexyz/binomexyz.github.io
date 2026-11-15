// Menú a pantalla completa sobre <dialog> modal nativo: foco atrapado, Esc cierra y devuelve el foco al botón.
const dialog = document.querySelector<HTMLDialogElement>('#menu');
const abrir = document.querySelector<HTMLButtonElement>('[data-menu-abrir]');

if (dialog && abrir && typeof dialog.showModal === 'function') {
  const cerrar = () => dialog.close();
  abrir.addEventListener('click', () => {
    dialog.showModal();
    abrir.setAttribute('aria-expanded', 'true');
  });
  dialog.querySelectorAll('[data-menu-cerrar]').forEach((b) => b.addEventListener('click', cerrar));
  dialog.addEventListener('close', () => abrir.setAttribute('aria-expanded', 'false'));
  // Clic fuera del contenido (sobre el propio <dialog>) también cierra
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) cerrar();
  });
  // Enlace a la página actual: cerrar en vez de recargar
  dialog.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((a) =>
    a.addEventListener('click', () => {
      if (new URL(a.href, location.href).pathname === location.pathname) cerrar();
    }),
  );
  // Volver con el botón "atrás" (bfcache): nunca reaparecer con el menú abierto
  addEventListener('pageshow', (e) => {
    if ((e as PageTransitionEvent).persisted && dialog.open) dialog.close();
  });
}
