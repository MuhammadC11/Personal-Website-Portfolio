<template>
  <section class="hero" id="top">
    <HeroBackground />

    <div class="container hero__inner">
      <p class="hero__status">
        <span class="hero__dot" aria-hidden="true"></span>
        {{ profile.availability }}
      </p>

      <h1 class="hero__title">
        <span class="hero__greeting">Hey, I'm</span>
        <span class="hero__name">{{ profile.name }}</span>
      </h1>

      <p class="hero__role">
        <span class="hero__role-prefix">{{ article }}</span>
        <!-- The animated text is hidden from assistive tech so screen readers
             aren't spammed with one update per character. -->
        <span class="hero__typed" aria-hidden="true">
          {{ typed }}<span class="hero__caret"></span>
        </span>
        <span class="sr-only">{{ profile.roles.join(", ") }}</span>
      </p>

      <p class="hero__tagline">{{ profile.tagline }}</p>

      <div class="hero__actions">
        <router-link to="/projects" class="btn btn--primary">
          View my work
          <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
            <path
              d="M4 10h11M11 5l5 5-5 5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
        <a class="btn btn--ghost" :href="`mailto:${profile.email}`">Get in touch</a>
      </div>
    </div>

    <a class="hero__scroll" href="#about" aria-label="Scroll to about section">
      <span class="hero__mouse" aria-hidden="true"><i></i></span>
    </a>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import HeroBackground from "./HeroBackground.vue";
import { profile } from "../data/site";

const typed = ref("");
const roleIndex = ref(0);

// "a Software Engineer" but "an AI Data Engineer".
const article = computed(() =>
  /^[aeiou]/i.test(profile.roles[roleIndex.value] ?? "") ? "an" : "a"
);

let timer = null;
let index = 0;
let deleting = false;

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 1800;

function tick() {
  roleIndex.value = index % profile.roles.length;
  const full = profile.roles[roleIndex.value];

  typed.value = deleting
    ? full.slice(0, typed.value.length - 1)
    : full.slice(0, typed.value.length + 1);

  let delay = deleting ? DELETE_MS : TYPE_MS;

  if (!deleting && typed.value === full) {
    delay = HOLD_MS;
    deleting = true;
  } else if (deleting && typed.value === "") {
    deleting = false;
    index += 1;
    delay = 350;
  }

  timer = setTimeout(tick, delay);
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    typed.value = profile.roles[0];
    return;
  }

  tick();
});

// The original version never cleared this, so the loop kept running (and kept
// mutating state) long after the component was gone.
onBeforeUnmount(() => clearTimeout(timer));
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: grid;
  align-items: center;
  overflow: hidden;
  padding-top: var(--nav-h);
}

/* ---------- Content ---------- */

.hero__inner {
  position: relative;
  z-index: 1;
  padding-block: 4rem 6rem;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.95rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  backdrop-filter: blur(8px);
  font-size: 0.83rem;
  color: var(--text-muted);
  margin-bottom: 1.75rem;
}

.hero__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-2);
  box-shadow: 0 0 0 0 rgba(56, 224, 200, 0.6);
  animation: pulse 2.4s infinite;
}

@keyframes pulse {
  70% {
    box-shadow: 0 0 0 9px rgba(56, 224, 200, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(56, 224, 200, 0);
  }
}

.hero__title {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.hero__greeting {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 0.01em;
}

.hero__name {
  font-size: clamp(2.6rem, 8.5vw, 5.5rem);
  font-weight: 700;
  background: linear-gradient(120deg, #ffffff 20%, #9fc3ff 60%, var(--accent-3));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__role {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.85rem;
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 4vw, 2.25rem);
  font-weight: 500;
  min-height: 1.6em;
}

.hero__role-prefix {
  color: var(--text-dim);
}

.hero__typed {
  color: var(--accent-2);
}

.hero__caret {
  display: inline-block;
  width: 3px;
  height: 1em;
  margin-left: 2px;
  vertical-align: -0.12em;
  background: var(--accent-2);
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.hero__tagline {
  margin-top: 1.5rem;
  max-width: 56ch;
  font-size: clamp(1rem, 1.6vw, 1.13rem);
  color: var(--text-muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2.5rem;
}

.hero__scroll {
  position: absolute;
  left: 50%;
  bottom: 2.2rem;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0.65;
  transition: opacity 0.25s var(--ease);
}

.hero__scroll:hover {
  opacity: 1;
}

.hero__mouse {
  display: block;
  width: 24px;
  height: 38px;
  border: 2px solid var(--text-muted);
  border-radius: 999px;
  position: relative;
}

.hero__mouse i {
  position: absolute;
  left: 50%;
  top: 7px;
  width: 3px;
  height: 7px;
  margin-left: -1.5px;
  border-radius: 2px;
  background: var(--text-muted);
  animation: scroll-hint 1.8s var(--ease) infinite;
}

@keyframes scroll-hint {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  35% {
    opacity: 1;
  }
  75% {
    opacity: 0;
    transform: translateY(12px);
  }
  100% {
    opacity: 0;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (max-width: 640px) {
  .hero__scroll {
    display: none;
  }

  .hero__actions .btn {
    flex: 1 1 auto;
  }
}
</style>
