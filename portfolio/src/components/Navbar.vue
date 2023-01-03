<template>
  <!-- create a navbar with options for projects, and resume -->
  <div class="container">
    <router-link to="/" aria-label="link to the homepage">
      <button class="button-1" type="button" name="button" aria-label="home">
        <i class="fa fa-home"></i></button
    ></router-link>
    <!-- <router-link to="/births"
      ><button class="button-1" type="button" name="button" aria-label="births">
        Births
      </button>
    </router-link>
    <router-link to="/deaths"
      ><button class="button-1" type="button" name="button" aria-label="deaths">
        Deaths
      </button>
    </router-link> -->
  </div>
  <!-- create a section for each project -->
  <!-- create a section for resume -->
  <!-- create a section for contact -->
  <!-- create a footer with links to github, linkedin, and email -->
  <!-- create a section for about me -->
  <!-- create a section for skills -->
  <!-- create a section for education -->
  <!-- create a section for experience -->
  <!-- create a section for projects -->
</template>

<script setup></script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap";

.container {
  text-align: center;
  padding: 1rem;
  width: 100%;
  background-color: #e1c9d1;
}
.button-1 {
  appearance: none;
  background-color: #e1e5ed;
  border: 2px solid #2a324b;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
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
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 30%;
  will-change: transform;
}

.button-1:disabled {
  pointer-events: none;
}

.button-1:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-1:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>
