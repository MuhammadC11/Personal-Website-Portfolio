<template>
  <section id="about_me">
    <h1 class="title">About Me</h1>
    <p class="about_paragraph">
      I am a second year Computer Science student at CUNY Hunter College. I am
      passionate about software development and learning new technologies. I am
      currently looking for a software engineering internship for Summer 2022.
    </p>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style>
#about_me {
  background-color: black;
  color: white;
}

.title {
  text-align: center;
  font-size: 3rem;
  font-family: "Quicksand", sans-serif;
  margin-top: 0;
  padding-top: 2rem;
}

.about_paragraph {
  font-size: 1.5rem;
  font-family: "Quicksand", sans-serif;
  padding: 0 10rem 0 10rem;
  text-align: center;
  margin-bottom: 0;
}
</style>
