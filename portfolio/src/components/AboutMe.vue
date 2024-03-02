<template>
  <section id="about_me">
    <h1 class="title">About Me</h1>
    <!-- add an image  -->
    <img src="../../public/portrait.jpg" alt="placeholder" class="image" />
    <p id="about_paragraph">
      I am a second year Computer Science student at CUNY Hunter College. I am
      passionate about software development and learning new technologies. I am
      currently looking for a software engineering internship for Summer 2023.
    </p>
  </section>
  <section id="activities"></section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style>
#about_me {
  color: white;
}

.title {
  text-align: center;
  font-size: 3rem;
  font-family: "Quicksand", sans-serif;
  margin-top: 0;
  padding-top: 2rem;
}

#about_paragraph {
  font-size: 1.5rem;
  font-family: "Quicksand", sans-serif;
  padding: 0 10rem 0 10rem;
  text-align: center;
  margin-bottom: 0;
  width: 70%;
}

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  height: 50%;
  border-radius: 50%;
  margin-bottom: 2rem;
}
</style>
