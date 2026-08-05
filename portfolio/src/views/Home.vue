<template>
  <div class="view">
    <!-- Keep exactly one root element. App.vue wraps views in
         <Transition mode="out-in">, which cannot track a fragment root, and a
         root-level comment counts as a second root node in dev builds. -->
    <Hero />
    <About />
    <Skills />
    <Experience />
    <FeaturedProjects />
    <Contact />
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import Experience from "../components/Experience.vue";
import FeaturedProjects from "../components/FeaturedProjects.vue";
import Contact from "../components/Contact.vue";
import { useReveal } from "../composables/useReveal";

useReveal();
</script>
