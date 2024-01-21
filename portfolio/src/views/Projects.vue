<template>
  <section class="project_section">
    <div class="lowballd_container">
      <router-link to=""></router-link>
      <h1>Lowballd</h1>
      <p>
        Lowballd is a fullstack social media platform for sharing and selling
        outfits of the day. We used NodeJS, MOngoDB, Vue and Auth0 for the
        application.
      </p>
      <iframe
        src="https://www.lowballd.com"
        width="800"
        height="600"
        style="border: 0"
      ></iframe>
    </div>
    <div class="Swg_container">
      <h1>Swim Workout Generator</h1>
      <p>
        We created this project during HackPrinceton Spring of 2023. We used
        Vue.js, Node.js, and Firebase to create a web application that generates
        swim workouts for users based on the user's input.
      </p>
      <iframe
        src="https://swimworkoutgenerator.netlify.app/"
        width="800"
        height="600"
        style="border: 0"
      ></iframe>
    </div>
  </section>
</template>

<script setup></script>

<style>
.project_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
