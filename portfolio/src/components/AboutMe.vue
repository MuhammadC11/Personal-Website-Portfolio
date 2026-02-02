<template>
  <section id="about_me">
    <h1 class="title">About Me</h1>
    <!-- add an image  -->
    <img src="../../public/portrait.jpg" alt="placeholder" class="image" />
    <p class="about_paragraph">
      I am a third year Computer Science student at SUNY Binghamton University.
      I am passionate about software development and problem-solving. I am
      currently looking for a full time software engineering role.
    </p>
  </section>
  <section id="activities">
    <!-- I want to list interests and then have a link for projects, something like "Here are some of the things I've been working on" -->
    <h1 class="title">Activities & Interests</h1>
    <p class="about_paragraph">
      In my free time, I enjoy playing video games, going to the gym, watching
      K-Dramas and anime, and exploring new technologies. I play a lot of
      Valorant and story games like God of War and The Last of Us. I am also
      passionate about PC building and tech reviews and recently built my own
      PC.
    </p>
    <p class="about_paragraph">
      If you want to look at some of the cool projects I've made then click on
      the button below
    </p>
    <router-link to="/projects">
      <button class="projects-button">View My Projects</button>
    </router-link>
  </section>
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

.about_paragraph {
  font-size: 1.5rem;
  font-family: "Quicksand", sans-serif;
  padding: 0 10rem 0 10rem;
  text-align: center;
  margin-bottom: 0;
  width: 70%;
  color: white;
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

.projects-button {
  display: block;
  margin: 2rem auto;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.projects-button:hover {
  background-color: #0056b3;
}
</style>
