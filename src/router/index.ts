import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/overview",
    alias: "/",
    name: "Overview",
    component: () => import("../views/Overview.vue"),
  },
  {
    path: "/signin",
    name: "Sign In",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: () => import("../views/SignUp.vue"),
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
    path: "/assets",
    name: "All Assets",
    component: () => import("../views/Assets.vue"),
  },
  {
    path: "/assets/proposals/:assetId",
    name: "View Proposals",
    component: () => import("../views/Proposals.vue"),
  },
  {
    path: "/add",
    name: "Add Asset",
    component: () => import("../views/AddAsset.vue"),
  },
  {
    path: "/projects",
    name: "All Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/projects/view/:projectId",
    name: "View Projects",
    component: () => import("../views/ProjectView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Else",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
