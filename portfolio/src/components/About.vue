<template>
  <section class="section" id="about">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">About me</p>
        <h2 class="section-title">A bit about me</h2>
      </div>

      <div class="about">
        <div class="about__media reveal">
          <div class="about__frame">
            <!-- Files in public/ must be referenced by absolute URL; importing
                 them with a relative path breaks the production build. -->
            <img
              src="/portrait.webp"
              alt="Portrait of Muhammad Chaudhry"
              width="420"
              height="420"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="about__edu">
            <p class="about__edu-label">Education</p>
            <p class="about__edu-degree">{{ education.degree }}</p>
            <p class="about__edu-school">{{ education.school }}</p>
            <p class="about__edu-meta">
              {{ education.year }} · {{ education.honors }}
            </p>
          </div>
        </div>

        <div class="about__body">
          <p class="about__lead reveal">
            I studied Computer Science at Binghamton, and right now I'm an AI Data
            Engineering Intern at SailPoint.
          </p>

          <p class="about__text reveal" style="--reveal-delay: 80ms">
            My favorite problems are the ones where the data is a mess and someone still
            needs a straight answer. At SailPoint that means building the pipelines and
            the assistant on top of them, so leadership can ask what our AI agents cost
            and get a number they can <em>go verify themselves</em>. I spend a lot of
            time on that last part. A dashboard that's quietly off by a few percent is
            worse than no dashboard at all.
          </p>

          <p class="about__text reveal" style="--reveal-delay: 160ms">
            Before that I worked on an accounting platform that a few thousand
            businesses run their books on. I rewrote the profit logic after we found it
            had been wrong across 15,000 old entries, which was a long week and a good
            lesson. Most of my side projects started the same way: I wanted something
            that didn't exist yet. PillPal came from watching relatives squint at
            prescription labels they couldn't read.
          </p>

          <p class="about__text reveal" style="--reveal-delay: 200ms">
            Outside of work you'll find me at the gym, playing Valorant, or taking my
            time with story games like God of War and The Last of Us. I watch a lot of
            K-dramas and anime. I also built my own PC recently and still open the case
            for no real reason.
          </p>

          <ul class="about__course reveal" style="--reveal-delay: 240ms">
            <li v-for="course in education.coursework" :key="course" class="chip">
              {{ course }}
            </li>
          </ul>

          <div class="about__cta reveal" style="--reveal-delay: 300ms">
            <router-link to="/projects" class="btn btn--primary">
              See what I've built
            </router-link>
            <a
              class="btn btn--ghost"
              :href="profile.resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download résumé
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education, profile } from "../data/site";
</script>

<style scoped>
.about {
  display: grid;
  grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: start;
}

.about__media {
  position: sticky;
  top: calc(var(--nav-h) + 2rem);
}

.about__frame {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  background: linear-gradient(135deg, rgba(91, 156, 255, 0.16), rgba(168, 121, 255, 0.1));
  box-shadow: var(--shadow-lg);
}

.about__frame img {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
}

.about__frame:hover img {
  transform: scale(1.04);
}

.about__edu {
  margin-top: 1.25rem;
  padding: 1.15rem 1.25rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);
}

.about__edu-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.about__edu-degree {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
}

.about__edu-school {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.45;
}

.about__edu-meta {
  margin-top: 0.4rem;
  font-size: 0.82rem;
  color: var(--text-dim);
}

.about__lead {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.4vw, 1.55rem);
  font-weight: 500;
  line-height: 1.45;
  margin-bottom: 1.35rem;
}

.about__text {
  color: var(--text-muted);
  font-size: 1.03rem;
  margin-bottom: 1.15rem;
}

.about__text em {
  color: var(--text);
  font-style: normal;
  font-weight: 600;
}

.about__course {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.75rem;
}

.about__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
}

@media (max-width: 900px) {
  .about {
    grid-template-columns: 1fr;
  }

  .about__media {
    position: static;
    display: grid;
    grid-template-columns: minmax(0, 200px) minmax(0, 1fr);
    gap: 1.25rem;
    align-items: center;
  }

  .about__edu {
    margin-top: 0;
  }
}

@media (max-width: 560px) {
  .about__media {
    grid-template-columns: 1fr;
  }
}
</style>
