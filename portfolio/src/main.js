import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Lowballd from "./views/Lowballd.vue";
import "aos/dist/aos.css";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/projects", name: "projects", component: Projects },
    { path: "/lowballd", name: "lowballd", component: Lowballd },
    // { path: "/contact", name: "contact", component: Contact },
  ],
});

createApp(App).use(router).mount("#app");
