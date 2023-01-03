import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    // { path: "/about", name: "about", component: About },
    // { path: "/contact", name: "contact", component: Contact },
  ],
});

createApp(App).use(router).mount("#app");
