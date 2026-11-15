// Formulario de contacto (Formspree). Mejora progresiva: sin JS el formulario envía igualmente por POST.
const form = document.querySelector<HTMLFormElement>('form[data-formulario]');

if (form) {
  const estado = form.querySelector<HTMLElement>('[data-estado]')!;
  const boton = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const textoBoton = boton.textContent ?? '';
  const campos = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[name], textarea[name]')).filter(
    (c) => c.name !== '_gotcha',
  );

  const mensaje = (c: HTMLInputElement | HTMLTextAreaElement): string => {
    if (c.validity.valueMissing) return c.dataset.errorVacio ?? 'Este campo es obligatorio.';
    if (c.validity.typeMismatch || c.validity.patternMismatch) return c.dataset.errorFormato ?? 'Revisa el formato.';
    return '';
  };
  const pintarError = (c: HTMLInputElement | HTMLTextAreaElement) => {
    const msg = mensaje(c);
    const dest = form.querySelector<HTMLElement>(`#${c.id}-error`);
    if (dest) dest.textContent = msg;
    c.toggleAttribute('aria-invalid', !!msg);
    if (msg) c.setAttribute('aria-invalid', 'true');
    return !msg;
  };
  campos.forEach((c) => c.addEventListener('blur', () => c.value && pintarError(c)));
  campos.forEach((c) => c.addEventListener('input', () => c.getAttribute('aria-invalid') && pintarError(c)));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const invalidos = campos.filter((c) => !pintarError(c));
    if (invalidos.length) {
      estado.textContent = '';
      invalidos[0].focus();
      return;
    }
    boton.disabled = true;
    boton.textContent = form.dataset.enviando ?? 'Enviando…';
    estado.removeAttribute('data-tipo');
    estado.textContent = '';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      estado.dataset.tipo = 'ok';
      estado.textContent = form.dataset.ok ?? '¡Gracias! Hemos recibido tu mensaje.';
    } catch {
      estado.dataset.tipo = 'error';
      estado.textContent = form.dataset.error ?? 'No se ha podido enviar el mensaje.';
    } finally {
      boton.disabled = false;
      boton.textContent = textoBoton;
    }
  });
}
