// Falla (exit 1) si algún par de contraste declarado no cumple WCAG 2.2 AA.
import { evaluatePairs } from './lib/tokens.mjs';

const results = evaluatePairs();
let failed = 0;
for (const r of results) {
  const mark = r.ok ? '✔' : '✘';
  const aaa = r.ratio >= 7 ? ' AAA' : '';
  console.log(`${mark} ${r.ratio.toFixed(2).padStart(5)}:1 (mín ${r.min})${aaa}  ${r.use}  [${r.fgHex} / ${r.bgHex}]`);
  if (!r.ok) failed++;
}
if (failed) {
  console.error(`\n${failed} par(es) de contraste incumplen. Ajusta design-system/tokens.json.`);
  process.exit(1);
}
console.log(`\nContraste OK: ${results.length} pares verificados.`);
