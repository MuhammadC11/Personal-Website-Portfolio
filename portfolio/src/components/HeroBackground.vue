<template>
  <div ref="root" class="bg" aria-hidden="true">
    <span class="aurora aurora--a"></span>
    <span class="aurora aurora--b"></span>
    <span class="aurora aurora--c"></span>

    <canvas ref="canvas" class="bg__canvas"></canvas>

    <span class="bg__grid"></span>
    <span class="bg__spot"></span>
    <span class="bg__vignette"></span>
    <span class="bg__fade"></span>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const root = ref(null);
const canvas = ref(null);

const LINK_DIST = 132;
const POINTER_DIST = 190;
const DENSITY = 15000; // one particle per this many CSS pixels of area
const MAX_PARTICLES = 110;
const COLORS = ["91, 156, 255", "56, 224, 200", "168, 121, 255"];

let ctx = null;
let frame = null;
let observer = null;
let particles = [];
let width = 0;
let height = 0;
let rect = { left: 0, top: 0 };
let running = false;
let reducedMotion = false;

// Pointer is tracked in page coordinates and converted with a cached rect so
// the animation loop never forces a layout read.
const pointer = { x: 0, y: 0, inside: false };

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function cacheRect() {
  if (!root.value) return;
  const box = root.value.getBoundingClientRect();
  rect = { left: box.left, top: box.top };
}

function seed() {
  const count = Math.min(MAX_PARTICLES, Math.round((width * height) / DENSITY));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: rand(-0.16, 0.16),
    vy: rand(-0.16, 0.16),
    r: rand(0.8, 2.1),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    // Each particle breathes on its own offset so the field never pulses in sync.
    phase: Math.random() * Math.PI * 2,
  }));
}

function resize() {
  if (!canvas.value || !root.value) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = root.value.clientWidth;
  height = root.value.clientHeight;

  canvas.value.width = Math.round(width * dpr);
  canvas.value.height = Math.round(height * dpr);
  canvas.value.style.width = `${width}px`;
  canvas.value.style.height = `${height}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  cacheRect();
  seed();

  if (reducedMotion) draw(0);
}

function draw(time) {
  ctx.clearRect(0, 0, width, height);

  const px = pointer.x - rect.left;
  const py = pointer.y - rect.top;

  for (const p of particles) {
    if (!reducedMotion) {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap instead of bouncing — bouncing makes particles pile up on edges.
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      if (pointer.inside) {
        const dx = p.x - px;
        const dy = p.y - py;
        const dist = Math.hypot(dx, dy);
        if (dist < POINTER_DIST && dist > 0.5) {
          const push = (1 - dist / POINTER_DIST) * 0.55;
          p.x += (dx / dist) * push;
          p.y += (dy / dist) * push;
        }
      }
    }

    const twinkle = reducedMotion
      ? 0.7
      : 0.55 + Math.sin(time / 1400 + p.phase) * 0.3;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.color}, ${twinkle})`;
    ctx.fill();
  }

  ctx.lineWidth = 1;

  for (let i = 0; i < particles.length; i += 1) {
    const a = particles[i];

    for (let j = i + 1; j < particles.length; j += 1) {
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distSq = dx * dx + dy * dy;
      if (distSq > LINK_DIST * LINK_DIST) continue;

      const alpha = (1 - Math.sqrt(distSq) / LINK_DIST) * 0.32;
      ctx.strokeStyle = `rgba(${a.color}, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    if (!pointer.inside) continue;

    const dx = a.x - px;
    const dy = a.y - py;
    const distSq = dx * dx + dy * dy;
    if (distSq > POINTER_DIST * POINTER_DIST) continue;

    const alpha = (1 - Math.sqrt(distSq) / POINTER_DIST) * 0.5;
    ctx.strokeStyle = `rgba(${a.color}, ${alpha})`;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(px, py);
    ctx.stroke();
  }
}

function loop(time) {
  draw(time);
  frame = requestAnimationFrame(loop);
}

function start() {
  if (running || reducedMotion) return;
  running = true;
  frame = requestAnimationFrame(loop);
}

function stop() {
  running = false;
  if (frame) cancelAnimationFrame(frame);
  frame = null;
}

function onPointerMove(event) {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.inside = true;

  if (!root.value) return;
  root.value.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  root.value.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

function onPointerLeave() {
  pointer.inside = false;
}

function onVisibility() {
  if (document.hidden) stop();
  else start();
}

onMounted(() => {
  ctx = canvas.value.getContext("2d");
  reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  resize();

  window.addEventListener("resize", resize);
  window.addEventListener("scroll", cacheRect, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.addEventListener("pointerleave", onPointerLeave);
  document.addEventListener("visibilitychange", onVisibility);

  // Stop burning frames once the hero is scrolled past.
  observer = new IntersectionObserver(
    ([entry]) => (entry.isIntersecting ? start() : stop()),
    { threshold: 0 }
  );
  observer.observe(root.value);
});

onBeforeUnmount(() => {
  stop();
  observer?.disconnect();
  window.removeEventListener("resize", resize);
  window.removeEventListener("scroll", cacheRect);
  window.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("pointerleave", onPointerLeave);
  document.removeEventListener("visibilitychange", onVisibility);
});
</script>

<style scoped>
.bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background:
    radial-gradient(ellipse 120% 80% at 50% -10%, #0e1730 0%, transparent 60%),
    var(--bg);
}

.bg > * {
  position: absolute;
}

/* ---------- Aurora ---------- */

.aurora {
  border-radius: 46% 54% 58% 42% / 52% 44% 56% 48%;
  filter: blur(70px);
  mix-blend-mode: screen;
  will-change: transform;
}

.aurora--a {
  width: 58vw;
  height: 46vw;
  min-width: 420px;
  min-height: 340px;
  top: -18%;
  left: -10%;
  background: conic-gradient(
    from 210deg,
    rgba(74, 142, 255, 0.85),
    rgba(56, 224, 200, 0.35),
    rgba(74, 142, 255, 0.12) 72%,
    rgba(74, 142, 255, 0.85)
  );
  animation: swirl-a 28s var(--ease) infinite alternate;
}

.aurora--b {
  width: 52vw;
  height: 44vw;
  min-width: 380px;
  min-height: 320px;
  top: 2%;
  right: -12%;
  background: conic-gradient(
    from 40deg,
    rgba(158, 106, 255, 0.8),
    rgba(91, 156, 255, 0.4),
    rgba(158, 106, 255, 0.1) 68%,
    rgba(158, 106, 255, 0.8)
  );
  animation: swirl-b 34s var(--ease) infinite alternate;
}

.aurora--c {
  width: 46vw;
  height: 34vw;
  min-width: 320px;
  min-height: 240px;
  bottom: -8%;
  left: 20%;
  background: conic-gradient(
    from 120deg,
    rgba(56, 224, 200, 0.42),
    rgba(168, 121, 255, 0.3),
    rgba(56, 224, 200, 0.05) 72%,
    rgba(56, 224, 200, 0.42)
  );
  animation: swirl-c 40s var(--ease) infinite alternate;
}

@keyframes swirl-a {
  from {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
  to {
    transform: translate3d(8vw, 8vh, 0) rotate(140deg) scale(1.18);
  }
}

@keyframes swirl-b {
  from {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1.1);
  }
  to {
    transform: translate3d(-9vw, 12vh, 0) rotate(-160deg) scale(0.88);
  }
}

@keyframes swirl-c {
  from {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(0.95);
  }
  to {
    transform: translate3d(7vw, -10vh, 0) rotate(180deg) scale(1.22);
  }
}

/* ---------- Particle field ---------- */

.bg__canvas {
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
}

/* ---------- Overlays ---------- */

.bg__grid {
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 68px 68px;
  mask-image: radial-gradient(ellipse 85% 65% at 50% 38%, #000 15%, transparent 76%);
  -webkit-mask-image: radial-gradient(
    ellipse 85% 65% at 50% 38%,
    #000 15%,
    transparent 76%
  );
  animation: grid-drift 24s linear infinite;
}

@keyframes grid-drift {
  to {
    background-position: 68px 68px;
  }
}

/* Warms the area around the cursor so the page feels lit by the pointer. */
.bg__spot {
  inset: 0;
  background: radial-gradient(
    420px circle at var(--mx, 50%) var(--my, 40%),
    rgba(120, 175, 255, 0.13),
    transparent 70%
  );
  transition: opacity 0.4s var(--ease);
}

/* Darkens the corners so the headline keeps its contrast against the aurora. */
.bg__vignette {
  inset: 0;
  background: radial-gradient(
    ellipse 100% 80% at 50% 45%,
    transparent 45%,
    rgba(4, 7, 14, 0.45)
  );
}

.bg__fade {
  inset: auto 0 0 0;
  height: 26%;
  background: linear-gradient(to bottom, transparent, var(--bg) 88%);
}

@media (max-width: 640px) {
  .aurora {
    filter: blur(55px);
  }

  .bg__spot {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .aurora,
  .bg__grid {
    animation: none;
  }
}
</style>
