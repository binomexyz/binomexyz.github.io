// Escena del hero (home): la «ō» de Binōme como dos masas orgánicas (coral y lavanda: los dos socios) que se unen al hacer scroll,
// con el macron sobre ella. Un solo fragment shader WebGL propio (sin librerías), unos pocos KB.
//
// Protecciones (el contenido nunca depende de esto):
// - Solo corre si html.js-motion (es decir, sin prefers-reduced-motion). Si no, queda el SVG estático.
// - Se inicia tras el primer pintado (no compite con el LCP) y se pausa fuera de pantalla o con la pestaña oculta.
// - Sin Save-Data, sin WebGL o con compilación fallida: se queda el SVG estático.
// - Resolución adaptativa: si los fotogramas van lentos, baja la resolución y, si sigue lento, deja de animar.
const cont = document.querySelector<HTMLElement>('[data-escena]');
const permitido =
  cont &&
  document.documentElement.classList.contains('js-motion') &&
  !(navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;

if (permitido) {
  const arrancar = () => iniciar(cont!);
  if ('requestIdleCallback' in window) (window as any).requestIdleCallback(arrancar, { timeout: 1500 });
  else setTimeout(arrancar, 300);
}

const VERT = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`;

// Colores de marca (tokens): coral-500, lavender-500, ink-900.
const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPtr;
uniform float uPtrAmt;
uniform float uL;
uniform float uRot;
uniform float uIntro;

const float PI = 3.14159265;
const vec3 CORAL = vec3(0.949, 0.400, 0.329);
const vec3 LAV = vec3(0.643, 0.608, 0.961);
const vec3 INK = vec3(0.039, 0.039, 0.039);

float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float smin(float a, float b, float k){ float h = max(k - abs(a - b), 0.0) / k; return min(a, b) - h * h * k * 0.25; }

// Distancia a un «brazo»: arco de circunferencia (radio R, semiángulo L, centrado en th) con grosor tk y extremos redondos.
float brazo(vec2 p, float th, float L, float R, float tk){
  float da = mod(atan(p.y, p.x) - th + PI, 2.0 * PI) - PI;
  float ang = th + clamp(da, -L, L);
  return length(p - R * vec2(cos(ang), sin(ang))) - tk;
}
float cajaRedonda(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }

void main(){
  float px = 2.0 / uRes.y;                                   // tamaño de píxel en unidades de escena
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / (0.5 * uRes.y);
  vec2 c = vec2(0.0, -0.08);                                 // centro de la ō (deja sitio al macron arriba)
  vec2 q = p - c;

  // Borde orgánico: deformación de baja frecuencia + atracción suave hacia el puntero.
  vec2 w = vec2(noise(q * 2.1 + uTime * 0.22), noise(q * 2.1 + 7.3 - uTime * 0.19)) - 0.5;
  vec2 d = q - uPtr;
  float g = exp(-dot(d, d) * 5.5) * uPtrAmt;
  q += w * 0.075 + d * g * 0.55;

  float tk = 0.150 + 0.018 * sin(atan(q.y, q.x) * 3.0 + uTime * 0.6);
  float L = uL;
  float dA = brazo(q, uRot, L, 0.62, tk);
  float dB = brazo(q, uRot + PI, L, 0.62, tk);
  float dist = smin(dA, dB, 0.13);

  float mixw = clamp(0.5 + (dB - dA) / 0.30, 0.0, 1.0);
  vec3 col = mix(LAV, CORAL, mixw);
  float inner = clamp(-dist / tk, 0.0, 1.0);                  // 0 en el borde, 1 en el eje del brazo
  col = mix(col * 0.93, col * 1.05 + 0.02, smoothstep(0.0, 1.0, inner));
  float aa = px * 1.4;
  float aRing = (1.0 - smoothstep(-aa, aa, dist)) * uIntro;

  // Macron: barra de tinta que se inclina siguiendo al puntero.
  vec2 bp = p - vec2(uPtr.x * 0.06, 0.865 - (1.0 - uIntro) * 0.35);
  float ang = -uPtr.x * 0.12;
  bp = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * bp;
  float dBar = cajaRedonda(bp, vec2(0.205, 0.040), 0.040);
  float aBar = (1.0 - smoothstep(-aa, aa, dBar)) * uIntro;

  vec3 rgb = col * aRing * (1.0 - aBar) + INK * aBar;
  float alpha = aRing * (1.0 - aBar) + aBar;
  float grano = (hash(gl_FragCoord.xy + floor(uTime * 24.0)) - 0.5) * 0.045;
  rgb += grano * alpha;
  gl_FragColor = vec4(rgb, alpha);
}`;

function compilar(gl: WebGLRenderingContext, tipo: number, src: string) {
  const s = gl.createShader(tipo)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
}

function iniciar(cont: HTMLElement) {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  const ctx = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: 'low-power' });
  if (!ctx) return;
  const gl: WebGLRenderingContext = ctx;
  const vs = compilar(gl, gl.VERTEX_SHADER, VERT);
  const fs = compilar(gl, gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return;
  const prog = gl.createProgram()!;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = (n: string) => gl.getUniformLocation(prog, n);
  const uRes = U('uRes'), uTime = U('uTime'), uPtr = U('uPtr'), uPtrAmt = U('uPtrAmt'), uL = U('uL'), uRot = U('uRot'), uIntro = U('uIntro');
  gl.clearColor(0, 0, 0, 0);
  cont.appendChild(canvas);

  let dpr = Math.min(window.devicePixelRatio || 1, matchMedia('(max-width: 800px)').matches ? 1.25 : 1.5);
  let w = 0, h = 0;
  const ajustar = () => {
    const r = cont.getBoundingClientRect();
    w = r.width; h = r.height;
    canvas.width = Math.max(1, Math.round(w * dpr));
    canvas.height = Math.max(1, Math.round(h * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  };
  ajustar();
  new ResizeObserver(ajustar).observe(cont);

  // Puntero (suavizado) en coordenadas de escena; el efecto decae si está lejos de la ō.
  const objetivo = { x: 0, y: 0, amt: 0 };
  const actual = { x: 0, y: 0, amt: 0 };
  addEventListener('pointermove', (e) => {
    const r = cont.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / (r.height / 2);
    const y = -(e.clientY - r.top - r.height / 2) / (r.height / 2) + 0.08;
    objetivo.x = Math.max(-1.6, Math.min(1.6, x));
    objetivo.y = Math.max(-1.2, Math.min(1.2, y));
    objetivo.amt = 1 - Math.min(1, Math.max(0, (Math.hypot(x, y) - 0.9) / 1.6));
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { objetivo.amt = 0; });

  const L0 = 1.0;      // semiángulo con los brazos separados
  const L1 = 1.62;     // semiángulo con los brazos unidos (cada uno ≈ media ō)
  let visible = true, oculto = document.hidden, t0 = performance.now(), ultimo = t0, lentos = 0, fotogramas = 0, activo = true, primera = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) loop(); }).observe(cont);
  document.addEventListener('visibilitychange', () => { oculto = document.hidden; if (!oculto) loop(); });
  const suave = (x: number) => x * x * (3 - 2 * x);

  let corriendo = false;
  function loop() {
    if (corriendo || !activo || !visible || oculto) return;
    corriendo = true;
    ultimo = performance.now();
    requestAnimationFrame(frame);
  }
  function frame(ahora: number) {
    if (!activo || !visible || oculto) { corriendo = false; return; }
    const dt = ahora - ultimo; ultimo = ahora;
    // Resolución adaptativa: 30 fotogramas lentos seguidos → baja a 1×; si persiste, parar la animación.
    if (!primera && dt > 40) lentos++; else lentos = Math.max(0, lentos - 1);
    if (lentos > 30) {
      if (dpr > 1) { dpr = 1; ajustar(); lentos = 0; }
      else { activo = false; }
    }
    const t = (ahora - t0) / 1000;
    const intro = suave(Math.min(1, t / 1.4));
    const r = cont.getBoundingClientRect();
    // Progreso de scroll: 0 con el hero arriba → 1 cuando la escena sale por arriba.
    const p = Math.min(1, Math.max(0, -r.top / (r.height * 1.1)));
    const L = (0.15 + (L0 - 0.15) * intro) + (L1 - L0) * suave(p);
    actual.x += (objetivo.x - actual.x) * 0.07;
    actual.y += (objetivo.y - actual.y) * 0.07;
    actual.amt += (objetivo.amt - actual.amt) * 0.05;
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, t);
    gl.uniform2f(uPtr, actual.x, actual.y);
    gl.uniform1f(uPtrAmt, actual.amt);
    gl.uniform1f(uL, L);
    gl.uniform1f(uRot, 0.55 + t * 0.10 + actual.x * 0.12 + p * 1.2);
    gl.uniform1f(uIntro, intro);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (primera) { primera = false; cont.classList.add('escena--viva'); }
    fotogramas++;
    requestAnimationFrame(frame);
  }
  loop();
}
