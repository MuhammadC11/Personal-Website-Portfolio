<template>
  <article class="card">
    <div class="card__media">
      <img
        :src="project.image"
        :alt="`Screenshot of ${project.title}`"
        loading="lazy"
        decoding="async"
      />
      <span v-if="project.award" class="card__award">
        <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
          <path
            d="M12 2l2.6 5.6L20.5 8.5l-4.3 4.2 1 6-5.2-2.8-5.2 2.8 1-6L3.5 8.5l5.9-.9z"
            fill="currentColor"
          />
        </svg>
        {{ project.award }}
      </span>
    </div>

    <div class="card__body">
      <header class="card__head">
        <h3 class="card__title">{{ project.title }}</h3>
        <span class="card__year">{{ project.year }}</span>
      </header>

      <p class="card__desc">{{ project.description }}</p>

      <ul class="card__tech">
        <li v-for="tech in project.tech" :key="tech" class="chip">{{ tech }}</li>
      </ul>

      <div class="card__links">
        <a
          v-if="project.links.live"
          :href="project.links.live"
          target="_blank"
          rel="noopener noreferrer"
          class="card__link card__link--primary"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
            <path
              d="M14 3h7v7M21 3l-9 9M19 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Live demo
          <span class="sr-only">— {{ project.title }}</span>
        </a>

        <a
          v-if="project.links.code"
          :href="project.links.code"
          target="_blank"
          rel="noopener noreferrer"
          class="card__link"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
            <path
              d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Source
          <span class="sr-only">— {{ project.title }}</span>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  /* Fills the stretched grid cell so cards in a row end at the same height. */
  height: 100%;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.015));
  overflow: hidden;
  transition: transform 0.35s var(--ease), border-color 0.35s var(--ease),
    box-shadow 0.35s var(--ease);
}

.card:hover {
  transform: translateY(-6px);
  border-color: rgba(91, 156, 255, 0.4);
  box-shadow: var(--shadow-lg);
}

.card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #0a1020;
  border-bottom: 1px solid var(--border);
}

.card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.55s var(--ease);
}

.card:hover .card__media img {
  transform: scale(1.05);
}

.card__award {
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.32rem 0.7rem;
  border-radius: 999px;
  background: rgba(8, 12, 22, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 200, 90, 0.4);
  color: #ffd479;
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.2;
}

.card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.4rem 1.5rem 1.5rem;
}

.card__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.7rem;
}

.card__title {
  font-size: 1.35rem;
}

.card__year {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--text-dim);
}

.card__desc {
  color: var(--text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

.card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1.15rem 0 1.35rem;
}

/* Pushes the link row to the bottom so cards in a row stay aligned. */
.card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;
}

.card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: color 0.25s var(--ease), border-color 0.25s var(--ease),
    background-color 0.25s var(--ease);
}

.card__link:hover {
  color: var(--text);
  border-color: var(--border-strong);
  background: var(--surface-hover);
}

.card__link--primary {
  border-color: rgba(91, 156, 255, 0.35);
  background: var(--accent-soft);
  color: #b9d3ff;
}

.card__link--primary:hover {
  border-color: var(--accent);
  color: #fff;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
</style>
