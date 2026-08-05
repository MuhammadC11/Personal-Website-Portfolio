<template>
  <div class="nf">
    <div class="container nf__inner">
      <p class="nf__code">404</p>
      <h1 class="nf__title">This page doesn't exist</h1>
      <p class="nf__text">
        The link may be outdated, or the page moved. Let's get you back on track.
      </p>
      <div class="nf__actions">
        <router-link to="/" class="btn btn--primary">Back home</router-link>
        <router-link to="/projects" class="btn btn--ghost">See projects</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nf {
  display: grid;
  place-items: center;
  min-height: 100vh;
  min-height: 100svh;
  text-align: center;
  background: radial-gradient(
    ellipse 60% 50% at 50% 40%,
    rgba(91, 156, 255, 0.13),
    transparent 70%
  );
}

.nf__inner {
  padding-block: var(--nav-h);
}

.nf__code {
  font-family: var(--font-display);
  font-size: clamp(5rem, 18vw, 10rem);
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(120deg, var(--accent), var(--accent-3));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.nf__title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin-top: 0.5rem;
}

.nf__text {
  margin: 1rem auto 0;
  max-width: 44ch;
  color: var(--text-muted);
}

.nf__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
  margin-top: 2.25rem;
}
</style>
