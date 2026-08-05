import { onMounted, onBeforeUnmount } from "vue";

/**
 * Adds `.is-visible` to every `.reveal` element once it scrolls into view.
 * Elements are unobserved after firing so the animation only plays once.
 */
export function useReveal(options = {}) {
  const { root = null, threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = options;
  let observer = null;

  onMounted(() => {
    const targets = (root?.value ?? document).querySelectorAll(".reveal");

    // Without IntersectionObserver, or when the user prefers reduced motion,
    // show everything immediately rather than leaving it invisible.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((el) => observer.observe(el));
  });

  onBeforeUnmount(() => observer?.disconnect());
}
