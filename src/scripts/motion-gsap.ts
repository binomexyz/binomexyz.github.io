import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function iniciar() {
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('motion-listo');
  const ease = 'expo.out'; // exponencial de salida: entra rápido, se asienta despacio

  // 1) Entradas: una sola gramática para toda la web
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 1, ease,
        delay: Number(el.dataset.revealDelay ?? 0),
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      },
    );
  });

  // 2) Enunciado: las palabras se encienden al leer (scrub)
  document.querySelectorAll<HTMLElement>('[data-enunciado]').forEach((el) => {
    const texto = el.textContent ?? '';
    el.textContent = '';
    const palabras = texto.trim().split(/\s+/).map((w, i, arr) => {
      const s = document.createElement('span');
      s.className = 'palabra';
      s.textContent = w;
      el.append(s);
      if (i < arr.length - 1) el.append(' ');
      return s;
    });
    gsap.fromTo(
      palabras,
      { opacity: 0.5 } /* mínimo 0.5: el texto sigue cumpliendo contraste AA en todo momento */,
      { opacity: 1, ease: 'none', stagger: 0.12, scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 55%', scrub: true } },
    );
  });

  // 3) Wordmark del pie: las letras suben y la "ō" cae en último lugar (el "dos" de Binōme)
  const marca = document.querySelector<HTMLElement>('[data-wordmark]');
  if (marca) {
    const letras = marca.querySelectorAll<HTMLElement>('.marca__l');
    gsap.from(letras, {
      yPercent: 70, opacity: 0, duration: 1.2, ease, stagger: 0.08,
      scrollTrigger: { trigger: marca, start: 'top 95%', once: true },
    });
    const macron = marca.querySelector<HTMLElement>('.marca__l--macron');
    if (macron) {
      gsap.from(macron, {
        rotation: -14, transformOrigin: '50% 80%', duration: 1.4, ease: 'elastic.out(1, 0.6)', delay: 0.5,
        scrollTrigger: { trigger: marca, start: 'top 95%', once: true },
      });
    }
  }
}
