<template>
  <section class="section featured" id="projects">
    <div class="container">
      <div class="featured__head reveal">
        <div class="section-head">
          <p class="eyebrow">Selected work</p>
          <h2 class="section-title">Things I've built</h2>
          <p class="section-sub">
            Three I keep coming back to: a hackathon winner, a recipe app I still use,
            and a marketplace for clothes.
          </p>
        </div>

        <router-link to="/projects" class="btn btn--ghost featured__all">
          All projects
          <svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">
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
      </div>

      <div class="featured__grid">
        <div
          v-for="(project, i) in featured"
          :key="project.id"
          class="reveal"
          :style="{ '--reveal-delay': `${i * 90}ms` }"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { projects } from "../data/site";

const featured = computed(() => projects.filter((p) => p.featured));
</script>

<style scoped>
.featured__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
}

.featured__head .section-head {
  margin-bottom: 0;
}

.featured__all {
  margin-bottom: 0.25rem;
}

.featured__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}
</style>
