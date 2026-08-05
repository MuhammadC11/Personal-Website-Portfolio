<template>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <nav class="nav__inner container" aria-label="Primary">
      <router-link to="/" class="nav__brand" @click="closeMenu">
        <span class="nav__mark" aria-hidden="true">MC</span>
        <span class="nav__name">{{ profile.name }}</span>
      </router-link>

      <button
        class="nav__toggle"
        :aria-expanded="menuOpen"
        aria-controls="nav-links"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">{{ menuOpen ? "Close menu" : "Open menu" }}</span>
        <span class="nav__burger" :class="{ 'is-open': menuOpen }" aria-hidden="true">
          <i></i><i></i><i></i>
        </span>
      </button>

      <div id="nav-links" class="nav__links" :class="{ 'is-open': menuOpen }">
        <router-link to="/" class="nav__link" @click="closeMenu">Home</router-link>
        <router-link to="/projects" class="nav__link" @click="closeMenu">
          Projects
        </router-link>
        <a
          class="nav__link"
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          class="nav__link"
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          class="btn btn--primary nav__cta"
          :href="profile.resume"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMenu"
        >
          Résumé
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { profile } from "../data/site";

const scrolled = ref(false);
const menuOpen = ref(false);
const route = useRoute();

const closeMenu = () => (menuOpen.value = false);
const onScroll = () => (scrolled.value = window.scrollY > 12);

watch(() => route.fullPath, closeMenu);

// Prevent the page behind the mobile drawer from scrolling.
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

const onKeydown = (e) => {
  if (e.key === "Escape") closeMenu();
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 100;
  padding: 0.75rem 1.25rem;
  background: var(--accent);
  color: #04070e;
  font-weight: 600;
  border-radius: 0 0 var(--radius-sm) 0;
}

.skip-link:focus {
  left: 0;
}

.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  transition: background-color 0.3s var(--ease), border-color 0.3s var(--ease),
    backdrop-filter 0.3s var(--ease);
  border-bottom: 1px solid transparent;
}

.nav--scrolled {
  background: rgba(7, 11, 20, 0.72);
  backdrop-filter: blur(14px) saturate(150%);
  border-bottom-color: var(--border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: -0.01em;
}

.nav__mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  flex: none;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--accent), var(--accent-3));
  color: #04070e;
  font-size: 0.8rem;
  font-weight: 700;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav__link {
  position: relative;
  font-size: 0.93rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.25s var(--ease);
}

.nav__link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  height: 2px;
  width: 0;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-3));
  transition: width 0.3s var(--ease);
}

.nav__link:hover,
.nav__link:focus-visible {
  color: var(--text);
}

.nav__link:hover::after,
.nav__link.router-link-exact-active::after {
  width: 100%;
}

.nav__link.router-link-exact-active {
  color: var(--text);
}

.nav__cta {
  padding: 0.55rem 1.15rem;
  font-size: 0.88rem;
}

.nav__cta::after {
  display: none;
}

.nav__toggle {
  display: none;
  background: none;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
}

.nav__burger {
  display: grid;
  gap: 4px;
  width: 20px;
}

.nav__burger i {
  height: 2px;
  border-radius: 2px;
  background: var(--text);
  transition: transform 0.3s var(--ease), opacity 0.2s var(--ease);
}

.nav__burger.is-open i:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.nav__burger.is-open i:nth-child(2) {
  opacity: 0;
}

.nav__burger.is-open i:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (max-width: 820px) {
  .nav__name {
    display: none;
  }

  .nav__toggle {
    display: block;
    order: 3;
  }

  .nav__links {
    position: fixed;
    inset: var(--nav-h) 0 auto 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 1rem 1.5rem 2rem;
    background: rgba(9, 14, 26, 0.97);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
  }

  .nav__links.is-open {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }

  .nav__link {
    padding: 0.95rem 0;
    font-size: 1.05rem;
    border-bottom: 1px solid var(--border);
  }

  .nav__link::after {
    display: none;
  }

  .nav__cta {
    margin-top: 1.25rem;
    align-self: flex-start;
  }
}
</style>
