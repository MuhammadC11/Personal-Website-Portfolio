<template>
  <section ref="vantaRef">
    <h1 class="title">Hello, I'm Muhammad Chaudhry</h1>
    <h1 class="title">An Aspiring Software Engineer</h1>
  </section>
  <div></div>
</template>

<script>
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default {
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
};
</script>

<script setup>
// import * as THREE from "three";
// import FOG from "vanta/dist/vanta.fog.min";
// import { effect } from "vue";
// function reload() {
//   effect.resize();
// }
// window.onload = function () {
//   const effect = FOG({
//     el: "section",
//     THREE,
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.0,
//     minWidth: 200.0,
//     highlightColor: 0x8aacde,
//     midtoneColor: 0xd6672,
//     lowlightColor: 0xff,
//     baseColor: 0x0,
//     blurFactor: 0.53,
//     speed: 0.4,
//     zoom: 0.2,
//   });
// };
</script>

<style>
.title {
  color: white;
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
  mix-blend-mode: difference;
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

button:hover {
  background-color: rgba(237, 250, 227, 0.733);
  color: #000;
}

button:active {
  animation: click 0.15s ease-in-out;
}
.title {
  margin-top: 1rem;
}
</style>
