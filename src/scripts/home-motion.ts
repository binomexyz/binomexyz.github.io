// Movimiento de la home (solo con html.js-motion, es decir, sin prefers-reduced-motion):
// paralaje del puntero y del scroll en las piezas flotantes, garabatos que se dibujan, casos que se enderezan al entrar.
// Sin esto, todo queda visible y estático.
const root = document.documentElement;

if (root.classList.contains('js-motion')) {
  Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
    .then(([{ gsap }, { ScrollTrigger }]) => iniciar(gsap, ScrollTrigger))
    .catch(() => {});
}

function iniciar(gsap: typeof import('gsap').gsap, ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  const ease = 'expo.out';
  const hero = document.querySelector<HTMLElement>('.hero2');

  if (hero) {
    // Entrada de las piezas: caen y se asientan con un pequeño desorden
    gsap.from('[data-flota]', { opacity: 0, scale: 0.7, y: 40, duration: 1.2, ease, stagger: 0.09, delay: 0.25 });
    // Garabatos: se dibujan
    gsap.to('.hero2 .garabato path', { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', stagger: 0.25, delay: 0.7 });

    // Paralaje del scroll: cada pieza sube a distinta velocidad
    gsap.utils.toArray<HTMLElement>('[data-flota]').forEach((el, i) => {
      gsap.to(el, { yPercent: -18 - (i % 3) * 14, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    });

    // Paralaje del puntero (ratón): variables CSS suavizadas; las lee .flota a
    if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const alvo = { x: 0, y: 0 }, act = { x: 0, y: 0 };
      addEventListener('pointermove', (e) => {
        alvo.x = (e.clientX / innerWidth) * 2 - 1;
        alvo.y = (e.clientY / innerHeight) * 2 - 1;
      }, { passive: true });
      let visible = true;
      new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(hero);
      gsap.ticker.add(() => {
        if (!visible) return;
        act.x += (alvo.x - act.x) * 0.06;
        act.y += (alvo.y - act.y) * 0.06;
        hero.style.setProperty('--mx', act.x.toFixed(4));
        hero.style.setProperty('--my', act.y.toFixed(4));
      });
    }
  }

  // Casos: llegan inclinados y se enderezan (scrub), alternando el sentido
  gsap.utils.toArray<HTMLElement>('[data-caso]').forEach((el, i) => {
    gsap.fromTo(
      el,
      { rotation: i % 2 ? 4.5 : -4.5, yPercent: 14, scale: 0.92 },
      { rotation: 0, yPercent: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 96%', end: 'top 45%', scrub: true } },
    );
  });

  // Palabra de contorno del bloque oscuro: deriva despacio
  const palabra = document.querySelector<HTMLElement>('[data-oscuro-palabra]');
  if (palabra) {
    gsap.fromTo(palabra, { xPercent: -50, yPercent: -42 }, { xPercent: -50, yPercent: -58, ease: 'none', scrollTrigger: { trigger: '.oscuro', start: 'top bottom', end: 'bottom top', scrub: true } });
  }
}

export {};
