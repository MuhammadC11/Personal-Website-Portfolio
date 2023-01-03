<template>
  <section id="container">
    <h1>Muhammad Chaudhry</h1>
    <button>tap</button>
  </section>
</template>

<style>
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
  backdrop-filter: blur(20px);
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
</style>

<script setup>
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
window.onload = function () {
  const effect = FOG({
    el: "section",
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0x9500ff,
    midtoneColor: 0xb3a4a4,
    lowlightColor: 0x1fff,
    baseColor: 0x252222,
    blurFactor: 0.55,
    speed: 1.2,
  });
};
</script>
