<template>
  <div class="page">
    <div class="page__bg" aria-hidden="true"></div>

    <div class="container">
      <header class="page__head reveal">
        <p class="eyebrow">Portfolio</p>
        <h1 class="page__title">Projects</h1>
        <p class="page__sub">
          Hackathon builds, class projects, and a few things I made because I wanted to
          use them. The code is up for all of them.
        </p>
      </header>

      <div class="page__grid">
        <div
          v-for="(project, i) in projects"
          :key="project.id"
          class="reveal"
          :style="{ '--reveal-delay': `${(i % 3) * 90}ms` }"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

      <div class="page__more reveal">
        <p>More experiments and coursework live on my GitHub.</p>
        <a
          class="btn btn--ghost"
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse all repositories
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import { projects, profile } from "../data/site";
import { useReveal } from "../composables/useReveal";

useReveal();
</script>

<style scoped>
.page {
  position: relative;
  padding-top: calc(var(--nav-h) + clamp(3rem, 7vw, 5.5rem));
  padding-bottom: clamp(4rem, 9vw, 7rem);
  min-height: 100vh;
}

.page__bg {
  position: absolute;
  inset: 0 0 auto 0;
  height: 520px;
  background: radial-gradient(
      ellipse 60% 100% at 20% 0%,
      rgba(91, 156, 255, 0.16),
      transparent 65%
    ),
    radial-gradient(ellipse 50% 90% at 85% 5%, rgba(168, 121, 255, 0.13), transparent 65%);
  pointer-events: none;
}

.container {
  position: relative;
}

.page__head {
  max-width: 62ch;
  margin-bottom: 3.5rem;
}

.page__title {
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-weight: 700;
}

.page__sub {
  margin-top: 1.1rem;
  color: var(--text-muted);
  font-size: 1.06rem;
}

.page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 1.5rem;
}

.page__more {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--border);
  text-align: center;
}

.page__more p {
  color: var(--text-muted);
}
</style>
