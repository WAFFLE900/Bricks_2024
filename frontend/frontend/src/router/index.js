import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/calender",
    name: "calender",
    component: () => import("../views/Calender.vue"),
  },
  {
    path: "/tim",
    name: "tim",
    component: () => import("../views/Tim.vue"),
  },
  {
    path: "/karen",
    name: "karen",
    component: () => import("../views/Karen.vue"),
  },
  {
    path: "/sharon",
    name: "sharon",
    component: () => import("../views/Sharon.vue"),
  },
  {
    path: "/kerwin",
    name: "kerwin",
    component: () => import("../views/Kerwin.vue"),
  },
  {
    path: "/cards",
    name: "cards",
    component: () => import("../views/Cards.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

