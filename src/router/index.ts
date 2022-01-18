import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Overview",
    component: () => import("../views/Overview.vue"),
  },
  {
    path: "/signin",
    name: "Sign In",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/past",
    name: "Past Year",
    component: () => import("../views/Past.vue"),
  },
  {
    path: "/current",
    name: "Current Stats",
    component: () => import("../views/Current.vue"),
  },
  {
    path: "/future",
    name: "Future Predictions",
    component: () => import("../views/Future.vue"),
  },
  {
    path: "/goals",
    name: "Goals",
    component: () => import("../views/Goals.vue"),
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: () => import("../views/Upcoming.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Else",
    component: () => import("../views/Overview.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
