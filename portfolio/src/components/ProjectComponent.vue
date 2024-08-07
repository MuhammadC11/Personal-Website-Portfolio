<template>
  <div class="container">
    <section class="project_section">
      <div
        class="project-card"
        v-for="project in projects"
        :key="project.id"
        data-aos="zoom-in"
      >
        <div class="project-card__side project-card__side--front">
          <div
            class="project-card__picture"
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
            <div class="project-card__description_box">
              <div>
                <h1 class="project-card__title">{{ project.title }}</h1>
              </div>
              <p class="project-card__description">
                {{ project.description }}
              </p>
            </div>

            <a :href="project.link" target="_blank" class="btn btn--white"
              >Check it out!</a
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
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "PillPal",
          description:
            "PillPal is an app dedicated to users who have trouble understanding their medications and need to keep track of their prescriptions. Users can upload a photo from their camera roll or take a picture of their prescription and PillPal will provide them with information about their medication.",
          link: "https://devpost.com/software/pillpal-airu2d",
          technologies: [
            "NodeJS",
            "MongoDB",
            "React Native",
            "Express.js",
            "Google Cloud API's",
            "OpenAI API",
          ],
          image_url: "/pillpal.png",
          route: "/pillpal",
        },
        {
          id: 2,
          title: "Lowballd",
          description:
            "Lowballd is a fullstack social media platform for sharing and selling outfits of the day. We used NodeJS, MongoDB, Vue and Auth0 for the application.",
          link: "https://lowballd.netlify.app/",
          technologies: ["NodeJS", "MongoDB", "Vue", "Auth0"],
          image_url: "/lowballd.png",
          route: "/lowballd",
        },
        {
          id: 2,
          title: "Swim Workouts",
          description:
            "We created this project during HackPrinceton Spring of 2023. We used Vue.js, Node.js, and Firebase to create a web application that generates swim workouts for users based on the user's input.",
          link: "https://swimworkoutgenerator.netlify.app/",
          technologies: ["Vue.js", "Node.js", "Firebase"],
          image_url: "/swg.png",
          route: "/swg",
        },
        {
          id: 3,
          title: "Anchor",
          description:
            "Worked together in a team of 4 to create an extension geared towards productivity during a 36 hour hackathon. We utilized OpenAI's API to send requests based on user input to help students with their tasks.",
          link: "https://devpost.com/software/anchor-n81947",
          technologies: ["JavaScript", "HTML/CSS", "OpenAI API"],
          image_url: "/anchor.jpg",
          route: "/anchor",
        },
        {
          id: 4,
          title: "Weather App",
          description:
            "Utilized a weather API to create a weather app that displays the current weather in any city. This was a project I created to learn more about APIs and how to use them.",
          link: "https://mcweather.netlify.app/",
          technologies: ["JavaScript", "HTML/CSS", "HTTP Requests"],
          image_url: "/weather.png",
          route: "/weather",
        },
      ],
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
    });
  },
};
</script>

<style>
body {
  background-color: #111927;
}
.project_section {
  background-image: radial-gradient(
      at 47% 33%,
      hsl(224.93, 97%, 46%) 0,
      transparent 59%
    ),
    radial-gradient(at 82% 65%, hsl(218, 39%, 11%) 0, transparent 55%);

  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  font-family: "Quicksand", sans-serif;
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
  transition: all 0.5s ease;
  position: absolute;
  top: 0rem;
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
  height: 30rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
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

  text-align: center;
  justify-content: center;
  color: #fff;
  position: absolute;
  top: 25rem;
  right: 2rem;
  width: 75%;
}

.project-card__heading-span {
  margin: auto;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  border-radius: 0.5rem;
}

.project-card__heading-span--1 {
  /* background-image: linear-gradient(
      to right bottom,
      rgba(10, 80, 141, 0.89),
      rgba(23, 71, 113, 0.896)
    ); */
}

.project-card__details {
  padding-top: 7rem;
}

.project-card__details ul {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  margin: auto;
  padding-left: 0rem;
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
  width: 100%;
  text-align: center;
}

.project-card__description_box {
  padding: 1rem;
  margin-bottom: 3rem;
  border-radius: 3px;
}

.project-card__title {
  font-size: 3rem;
}

.project-card__description {
  font-size: 1.5rem;
  color: #fff;
  line-height: 2.5rem;
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

@media screen and (max-width: 1920px) {
  .project_section {
    margin-bottom: 5rem;
  }
  .project-card__side {
    height: 45rem;
    top: 4rem;
  }
  .project-card {
    width: 30rem;
  }

  .project-card__side {
  }
  .project-card__picture {
    height: 25rem;
  }

  .project-card__heading {
    font-size: 2.5rem;
    top: 22rem;
  }

  .project-card__details {
    padding-top: 7rem;
  }
  .project-card__details ul {
    width: 90%;
  }
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
</style>
