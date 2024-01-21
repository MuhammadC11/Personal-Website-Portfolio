<template>
  <section class="project_section">
    <div class="project-card" v-for="(project, index) in projects" :key="index">
      <div class="project-card__side project-card__side--front">
        <div
          class="project-card__picture project-card__picture--1"
          v-for="project in projects"
          :key="project.id"
          :style="{ backgroundImage: `url(${project.image_url})` }"
        >
          &nbsp;
        </div>

        <div class="project-card__details">
          <ul>
            <li
              v-for="(tech, techIndex) in project.technologies"
              :key="techIndex"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
        <h4 class="project-card__heading">
          <span
            class="project-card__heading-span project-card__heading-span--1"
            >{{ project.title }}</span
          >
        </h4>
      </div>
      <div
        class="project-card__side project-card__side--back project-card__side--back-1"
      >
        <div class="project-card__cta">
          <div class="project-card__price-box">
            <div class="project-card__price-value">
              <h1>{{ project.title }}</h1>
            </div>
          </div>
          <!-- <p class="project-card__price-only">
            {{ project.description }}
          </p> -->
          <router-link to="/lowballd" class="btn btn--white"
            >Check it out!</router-link
          >
        </div>
      </div>
    </div>
  </section>

  <!-- <iframe
        src="https://www.lowballd.com"
        width="800"
        height="600"
        style="border: 0"
      ></iframe> -->
</template>

<script setup>
const projects = [
  {
    title: "Lowballd",
    description:
      "Lowballd is a fullstack social media platform for sharing and selling outfits of the day. We used NodeJS, MongoDB, Vue and Auth0 for the application.",
    link: "https://www.lowballd.com",
    technologies: ["NodeJS", "MongoDB", "Vue", "Auth0"],
    image_url: "/lowballd.png",
  },
  {
    title: "Swim Workout Generator",
    description:
      "We created this project during HackPrinceton Spring of 2023. We used Vue.js, Node.js, and Firebase to create a web application that generates swim workouts for users based on the user's input.",
    link: "https://swimworkoutgenerator.netlify.app/",
    technologies: ["Vue.js", "Node.js", "Firebase"],
    image_url: "/swg.png",
  },
];
</script>

<style>
.project_section {
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #00106c;
  height: 100vh;
  width: 100vw;
}

.project-card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 40rem;
  width: 30rem;
  margin: 0 auto 8rem auto;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
}

.project-card__side {
  height: 52rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
}

.project-card__side--front {
  background-color: #20286c;
}

.project-card__side--back {
  transform: rotateY(180deg);
}

.project-card__side--back-1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(10, 80, 141, 0.8),
    rgba(23, 71, 113, 0.8)
  );
  background-size: cover;
  background-position: center;
}

.project-card:hover .project-card__side--front {
  transform: rotateY(-180deg);
}

.project-card:hover .project-card__side--back {
  transform: rotateY(0);
}

.project-card__picture {
  background-size: cover;
  height: 23rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.project-card__picture--1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  );
}

.project-card__heading {
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 15rem;
  right: 2rem;
  width: 75%;
}

.project-card__heading-span {
  padding: 0.5rem 1.5rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

.project-card__heading-span--1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(10, 80, 141, 0.8),
    rgba(23, 71, 113, 0.8)
  );
}

.project-card__details {
  padding: 5rem;
}

.project-card__details ul {
  list-style: none;
  width: 80%;
  margin: 0 auto;
}

.project-card__details ul li {
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
}

.project-card__cta {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;
}

.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;
  font-size: 1.6rem;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}

.btn--white {
  background-color: #000000;
  color: #ffffff;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn--white::after {
  background-color: #000000;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn-animated {
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes click {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@media only screen and (max-width: 56.25em) {
  .project-card {
    width: 40rem;
  }
}

@media only screen and (max-width: 37.5em) {
  .project-card {
    width: 100%;
  }
}

@media only screen and (max-width: 56.25em) {
  .project-card__heading {
    font-size: 2rem;
  }
}
</style>
