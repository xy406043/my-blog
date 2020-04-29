export default [
  {
    path: "/",
    name: "_home",
    redirect: "boot",
    component: () => import("../views/Main"),
    children: [
      {
        path: "/boot",
        name: "boot",
        component: () => import("../views/single-page/Boot.vue"),
      },
      {
        path: "home",
        name: "home",
        component: () => import("../views/Home.vue"),
      },
    ],
  },
];
