import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/overview",
    name: "Base",
  },
  {
    path: "/overview",
    name: "Overview",
    component: () => import("../views/Overview.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/signin",
    name: "Sign In",
    component: () => import("../views/SignIn.vue"),
    meta: {
      authRequired: false,
    },
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: () => import("../views/SignUp.vue"),
    meta: {
      authRequired: false,
    },
  },
  {
    path: "/past",
    name: "Past Year",
    component: () => import("../views/Past.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/current",
    name: "Current Stats",
    component: () => import("../views/Current.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/goals",
    name: "Goals",
    component: () => import("../views/Goals.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: () => import("../views/Upcoming.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/assets",
    name: "All Assets",
    component: () => import("../views/Assets.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/assets/proposals/:assetId",
    name: "View Proposals",
    component: () => import("../views/Proposals.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/add",
    name: "Add Asset",
    component: () => import("../views/AddAsset.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/projects",
    name: "All Projects",
    component: () => import("../views/Projects.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/projects/view/:projectId",
    name: "View Projects",
    component: () => import("../views/ProjectView.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "Else",
    component: () => import("../views/404.vue"),
    meta: {
      authRequired: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //A Logged-in user can't go to login pages again
  const go = to.name;
  if (
    (go === "Sign In" || go === "Sign Up") &&
    localStorage.getItem("accessToken")
  ) {
    router.push({
      name: "Overview",
    });
  } else if (to.meta.authRequired) {
    if (!localStorage.getItem("accessToken")) {
      //user not logged in, send them to login page
      router.push({
        name: "Sign In",
        query: {
          go,
        },
      });
    }
  }

  return next();
});

export default router;
