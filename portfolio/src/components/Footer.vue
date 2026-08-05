<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">
        © {{ year }} {{ profile.name }} · Built with Vue &amp; Vite
      </p>

      <nav class="footer__links" aria-label="Footer">
        <a :href="`mailto:${profile.email}`">Email</a>
        <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a :href="profile.resume" target="_blank" rel="noopener noreferrer">Résumé</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { profile } from "../data/site";

const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-block: 2rem;
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer__copy {
  font-size: 0.86rem;
  color: var(--text-dim);
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer__links a {
  font-size: 0.88rem;
  color: var(--text-muted);
  transition: color 0.25s var(--ease);
}

.footer__links a:hover {
  color: var(--accent);
}
</style>
