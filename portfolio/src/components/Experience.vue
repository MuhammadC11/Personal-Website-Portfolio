<template>
  <section class="section experience" id="experience">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">Experience</p>
        <h2 class="section-title">Where I've worked</h2>
        <p class="section-sub">
          Three internships so far: AI and data at SailPoint, accounting software
          before that, and fintech before that.
        </p>
      </div>

      <ol class="timeline">
        <li
          v-for="(job, i) in experience"
          :key="job.id"
          class="timeline__item reveal"
          :style="{ '--reveal-delay': `${i * 90}ms` }"
        >
          <span class="timeline__marker" :class="{ 'is-current': job.current }">
            <span class="timeline__dot"></span>
          </span>

          <article class="job">
            <header class="job__head">
              <div>
                <h3 class="job__role">{{ job.role }}</h3>
                <p class="job__company">
                  {{ job.company }}
                  <span v-if="job.current" class="job__badge">Current</span>
                </p>
              </div>
              <p class="job__period">{{ job.period }}</p>
            </header>

            <p class="job__summary">{{ job.summary }}</p>

            <ul class="job__highlights">
              <li v-for="(point, j) in job.highlights" :key="j">{{ point }}</li>
            </ul>

            <ul class="job__stack">
              <li v-for="tech in job.stack" :key="tech" class="chip">{{ tech }}</li>
            </ul>
          </article>
        </li>
      </ol>

      <div class="leadership">
        <h3 class="leadership__title reveal">Leadership</h3>
        <div class="leadership__grid">
          <article
            v-for="(role, i) in leadership"
            :key="role.org"
            class="leadership__card reveal"
            :style="{ '--reveal-delay': `${i * 90}ms` }"
          >
            <p class="leadership__role">{{ role.role }}</p>
            <p class="leadership__org">{{ role.org }}</p>
            <p class="leadership__period">{{ role.period }}</p>
            <p class="leadership__detail">{{ role.detail }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experience, leadership } from "../data/site";
</script>

<style scoped>
.experience {
  background: radial-gradient(
    ellipse 70% 50% at 50% 0%,
    rgba(91, 156, 255, 0.09),
    transparent 70%
  );
}

.timeline {
  position: relative;
  display: grid;
  gap: 2.25rem;
  margin: 0;
  padding: 0;
  /* Ordered for semantics only — the timeline dots are the visual marker. */
  list-style: none;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 10px;
  bottom: 10px;
  width: 1px;
  background: linear-gradient(
    to bottom,
    var(--accent),
    rgba(168, 121, 255, 0.5),
    transparent
  );
}

.timeline__item {
  position: relative;
  padding-left: 2.75rem;
}

.timeline__marker {
  position: absolute;
  left: 0;
  top: 8px;
  display: grid;
  place-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--bg);
  border: 1px solid var(--border-strong);
}

.timeline__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-dim);
}

.timeline__marker.is-current {
  border-color: var(--accent-2);
}

.timeline__marker.is-current .timeline__dot {
  background: var(--accent-2);
  box-shadow: 0 0 10px var(--accent-2);
}

.job {
  padding: 1.6rem 1.75rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color 0.3s var(--ease), background-color 0.3s var(--ease),
    transform 0.3s var(--ease);
}

.job:hover {
  border-color: var(--border-strong);
  background: var(--surface-hover);
  transform: translateY(-2px);
}

.job__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem 1.5rem;
  margin-bottom: 0.85rem;
}

.job__role {
  font-size: 1.2rem;
}

.job__company {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.2rem;
  color: var(--accent);
  font-weight: 500;
  font-size: 0.98rem;
}

.job__badge {
  padding: 0.1rem 0.55rem;
  border-radius: 999px;
  background: rgba(56, 224, 200, 0.14);
  border: 1px solid rgba(56, 224, 200, 0.3);
  color: var(--accent-2);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.job__period {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-dim);
  white-space: nowrap;
}

.job__summary {
  color: var(--text);
  font-size: 0.99rem;
  margin-bottom: 1rem;
}

.job__highlights {
  display: grid;
  gap: 0.7rem;
  margin-bottom: 1.3rem;
}

.job__highlights li {
  position: relative;
  padding-left: 1.4rem;
  color: var(--text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

.job__highlights li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 6px;
  height: 6px;
  border-radius: 2px;
  background: var(--accent);
  opacity: 0.75;
}

.job__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.leadership {
  margin-top: 4rem;
}

.leadership__title {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 1.25rem;
}

.leadership__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.15rem;
}

.leadership__card {
  padding: 1.35rem 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color 0.3s var(--ease), transform 0.3s var(--ease);
}

.leadership__card:hover {
  border-color: var(--border-strong);
  transform: translateY(-3px);
}

.leadership__role {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.02rem;
}

.leadership__org {
  color: var(--accent);
  font-size: 0.9rem;
  margin-top: 0.15rem;
}

.leadership__period {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--text-dim);
  margin-top: 0.35rem;
}

.leadership__detail {
  margin-top: 0.75rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 560px) {
  .job {
    padding: 1.3rem 1.15rem;
  }

  .timeline__item {
    padding-left: 2rem;
  }
}
</style>
