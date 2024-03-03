<template>
  <section ref="vantaRef">
    <div
      class="title"
      :data-type="JSON.stringify(toRotate)"
      :data-period="period"
    >
      <span class="wrap"
        >Hey, I'm Muhammad Chaudhry <br />
        a {{ txt }}</span
      >
    </div>

    <button @click="scrollToAboutMe" id="about_button">About Me</button>
  </section>
</template>

<script>
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default {
  data() {
    return {
      toRotate: [
        "Software Engineer",
        "Computer Scientist",
        "Full-Stack Developer",
        "Problem Solver",
        "Leader",
        "Gamer",
        "Tech Enthusiast",
      ], // replace with your own text
      period: 2000,
      loopNum: 0,
      txt: "",
      isDeleting: false,
    };
  },
  mounted() {
    this.vantaEffect = FOG({
      el: this.$refs.vantaRef,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x8aacde,
      midtoneColor: 0xd6672,
      lowlightColor: 0xff,
      baseColor: 0x0,
      blurFactor: 0.53,
      speed: 0.4,
      zoom: 0.2,
      framerate: 60,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
  created() {
    this.tick();
  },
  methods: {
    scrollToAboutMe() {
      const aboutMeElement = document.querySelector("#about_me");
      aboutMeElement.scrollIntoView({ behavior: "smooth" });
    },
    tick() {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        this.tick();
      }, delta);
    },
  },
};
</script>

<style>
.title {
  color: white;
  font-family: "Quicksand", sans-serif;
  margin-top: 1rem;
}

.wrap::after {
  content: "|";
  opacity: 1;
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

section {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

section h1 {
  color: #fff;
  font-size: 5rem;
  /* mix-blend-mode: difference; */
}

button {
  border: none;
  outline: none;
  padding: 0.5em 1.1em;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
  background-color: rgba(176, 255, 160, 0.233);
  color: #fff;
  cursor: pointer;
  border-radius: 2.5px;
  user-select: none;
  transition: ease-in-out 0.15s all;
}
#about_button {
  position: relative;
  top: 30rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  background-color: #111927;
  color: #fff;
  cursor: pointer;
  transition: ease-in-out 0.15s all;
  border: 2px solid #fff;
  outline: none;
  user-select: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
}

#about_button:hover {
  background-color: rgba(237, 250, 227, 0.733);
  color: #000;
}

button:hover {
  background-color: rgba(237, 250, 227, 0.733);
  color: #000;
}

button:active {
  animation: click 0.15s ease-in-out;
}

@media screen and (max-width: 1920px) {
  .title {
    font-size: 4rem;
  }

  #about_button {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    top: 15rem;
  }
}
@media screen and (max-width: 1100px) {
  .title {
    font-size: 3rem;
  }
}
@media screen and (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
}
@media screen and (max-width: 425px) {
  .title {
    font-size: 2rem;
  }
}
@media screen and (max-width: 375px) {
  .title {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 320px) {
  .title {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 280px) {
  .title {
    font-size: 1rem;
  }
}
</style>
