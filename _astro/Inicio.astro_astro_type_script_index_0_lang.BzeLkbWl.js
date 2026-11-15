var e=document.querySelector(`[data-escena]`);if(e&&document.documentElement.classList.contains(`js-motion`)&&!navigator.connection?.saveData){let t=()=>i(e);`requestIdleCallback`in window?window.requestIdleCallback(t,{timeout:1500}):setTimeout(t,300)}var t=`attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`,n=`
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
}`;function r(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:null}function i(e){let i=document.createElement(`canvas`);i.setAttribute(`aria-hidden`,`true`);let a=i.getContext(`webgl`,{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:`low-power`});if(!a)return;let o=a,s=r(o,o.VERTEX_SHADER,t),c=r(o,o.FRAGMENT_SHADER,n);if(!s||!c)return;let l=o.createProgram();if(o.attachShader(l,s),o.attachShader(l,c),o.linkProgram(l),!o.getProgramParameter(l,o.LINK_STATUS))return;o.useProgram(l);let u=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,u),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW);let d=o.getAttribLocation(l,`a`);o.enableVertexAttribArray(d),o.vertexAttribPointer(d,2,o.FLOAT,!1,0,0);let f=e=>o.getUniformLocation(l,e),p=f(`uRes`),m=f(`uTime`),h=f(`uPtr`),g=f(`uPtrAmt`),_=f(`uL`),v=f(`uRot`),y=f(`uIntro`);o.clearColor(0,0,0,0),e.appendChild(i);let b=Math.min(window.devicePixelRatio||1,matchMedia(`(max-width: 800px)`).matches?1.25:1.5),x=0,S=0,C=()=>{let t=e.getBoundingClientRect();x=t.width,S=t.height,i.width=Math.max(1,Math.round(x*b)),i.height=Math.max(1,Math.round(S*b)),o.viewport(0,0,i.width,i.height)};C(),new ResizeObserver(C).observe(e);let w={x:0,y:0,amt:0},T={x:0,y:0,amt:0};addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left-n.width/2)/(n.height/2),i=-(t.clientY-n.top-n.height/2)/(n.height/2)+.08;w.x=Math.max(-1.6,Math.min(1.6,r)),w.y=Math.max(-1.2,Math.min(1.2,i)),w.amt=1-Math.min(1,Math.max(0,(Math.hypot(r,i)-.9)/1.6))},{passive:!0}),document.documentElement.addEventListener(`pointerleave`,()=>{w.amt=0});let E=!0,D=document.hidden,O=performance.now(),k=O,A=0,j=0,M=!0,N=!0;new IntersectionObserver(([e])=>{E=e.isIntersecting,E&&I()}).observe(e),document.addEventListener(`visibilitychange`,()=>{D=document.hidden,D||I()});let P=e=>e*e*(3-2*e),F=!1;function I(){!F&&M&&E&&!D&&(F=!0,k=performance.now(),requestAnimationFrame(L))}function L(t){if(!M||!E||D){F=!1;return}let n=t-k;k=t,!N&&n>40?A++:A=Math.max(0,A-1),A>30&&(b>1?(b=1,C(),A=0):M=!1);let r=(t-O)/1e3,a=P(Math.min(1,r/1.4)),s=e.getBoundingClientRect(),c=Math.min(1,Math.max(0,-s.top/(s.height*1.1))),l=.15+.85*a+.6200000000000001*P(c);T.x+=(w.x-T.x)*.07,T.y+=(w.y-T.y)*.07,T.amt+=(w.amt-T.amt)*.05,o.clear(o.COLOR_BUFFER_BIT),o.uniform2f(p,i.width,i.height),o.uniform1f(m,r),o.uniform2f(h,T.x,T.y),o.uniform1f(g,T.amt),o.uniform1f(_,l),o.uniform1f(v,.55+r*.1+T.x*.12+c*1.2),o.uniform1f(y,a),o.drawArrays(o.TRIANGLES,0,3),N&&(N=!1,e.classList.add(`escena--viva`)),j++,requestAnimationFrame(L)}I()}