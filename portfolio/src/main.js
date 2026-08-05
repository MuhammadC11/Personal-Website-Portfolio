import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";

const routes = [
  { path: "/", name: "home", component: Home, meta: { title: "Software Engineer" } },
  {
    path: "/projects",
    name: "projects",
    component: () => import("./views/Projects.vue"),
    meta: { title: "Projects" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("./views/NotFound.vue"),
    meta: { title: "Page not found" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
});

const BASE_TITLE = "Muhammad Chaudhry";

router.afterEach((to) => {
  document.title = to.meta?.title ? `${BASE_TITLE} — ${to.meta.title}` : BASE_TITLE;
});

createApp(App).use(router).mount("#app");
