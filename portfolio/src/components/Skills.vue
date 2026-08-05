<template>
  <section class="section skills" id="skills">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">Toolkit</p>
        <h2 class="section-title">What I work with</h2>
      </div>

      <div class="skills__grid">
        <div
          v-for="(group, i) in skillGroups"
          :key="group.label"
          class="skills__card reveal"
          :style="{ '--reveal-delay': `${i * 80}ms` }"
        >
          <h3 class="skills__label">{{ group.label }}</h3>
          <ul class="skills__list">
            <li v-for="item in group.items" :key="item" class="chip">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillGroups } from "../data/site";
</script>

<style scoped>
.skills {
  padding-top: 0;
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.15rem;
}

.skills__card {
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color 0.3s var(--ease), transform 0.3s var(--ease);
}

.skills__card:hover {
  border-color: var(--border-strong);
  transform: translateY(-3px);
}

.skills__label {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 1rem;
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}
</style>
