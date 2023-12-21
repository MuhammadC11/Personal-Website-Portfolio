import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Resume from "./views/Resume.vue";
import "aos/dist/aos.css";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/resume", name: "resume", component: Resume },
    // { path: "/contact", name: "contact", component: Contact },
  ],
});

createApp(App).use(router).mount("#app");
