<template>
  <div class="navbar_container">
    <div class="home_button">
      <router-link to="/" aria-label="link to the homepage">
        <button class="button1">Muhammad Chaudhry</button>
      </router-link>
    </div>
    <div class="resume_button">
      <router-link to="/resume" aria-label="link to resume">
        <button class="button1">Résumé</button>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap";

.button1 {
  font-size: 18px;
  color: #ffffff;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

.button1:focus,
.button1:hover {
  color: #fff;
}

.button1:focus:after,
.button1:hover:after {
  width: 100%;
  left: 0%;
}

.button1:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
.navbar_container {
  text-align: center;
  align-items: left;
  display: flex;
  width: 100%;
  background-color: #ffffff00;
  position: fixed;
  z-index: 8;
}
.about_button {
  display: flex;
  align-self: right;
}
.button {
  background-color: #e1e5ed00;

  border-radius: 15px;

  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;

  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);

  touch-action: manipulation;
  width: fit-content;
  will-change: transform;
}

.button:disabled {
  pointer-events: none;
}

.button:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>
