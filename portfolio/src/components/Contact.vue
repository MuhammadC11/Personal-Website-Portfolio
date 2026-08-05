<template>
  <section class="section contact" id="contact">
    <div class="container">
      <div class="contact__card reveal">
        <div class="contact__glow" aria-hidden="true"></div>

        <p class="eyebrow">Get in touch</p>
        <h2 class="contact__title">Say hello</h2>
        <p class="contact__text">
          I'm looking for full-time software, AI, and data engineering roles. If you
          have one, or you just want to talk about pipelines, AI tooling, or something
          you're stuck on, my inbox is open.
        </p>

        <div class="contact__actions">
          <a class="btn btn--primary" :href="`mailto:${profile.email}`">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ profile.email }}
          </a>
          <a
            class="btn btn--ghost"
            :href="profile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            class="btn btn--ghost"
            :href="profile.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from "../data/site";
</script>

<style scoped>
.contact__card {
  position: relative;
  overflow: hidden;
  padding: clamp(2.5rem, 6vw, 4.5rem);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: linear-gradient(
    135deg,
    rgba(91, 156, 255, 0.1),
    rgba(168, 121, 255, 0.07) 45%,
    rgba(255, 255, 255, 0.02)
  );
  text-align: center;
}

.contact__glow {
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(91, 156, 255, 0.28), transparent 65%);
  filter: blur(60px);
  pointer-events: none;
}

.contact__card > *:not(.contact__glow) {
  position: relative;
}

.contact__card .eyebrow {
  justify-content: center;
}

.contact__title {
  font-size: clamp(1.8rem, 4.5vw, 2.7rem);
}

.contact__text {
  max-width: 52ch;
  margin: 1.1rem auto 0;
  color: var(--text-muted);
}

.contact__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
  margin-top: 2.25rem;
}

@media (max-width: 560px) {
  .contact__actions .btn {
    width: 100%;
  }
}
</style>
