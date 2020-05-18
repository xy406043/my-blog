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
      {
          path:"article-view",
          name:"article-view",
          component: ()  => import("../views/article/article-view.vue")
      },
      {
          path:"group",
          name:"group",
          component:() => import("../views/article/group.vue")
      },
      {
          path:"tags",
          name:"tags",
          component:() => import ("../views/article/tags.vue")
      },
      {
          path:"archive",
          name:"archive",
          component: () => import ("../views/article/archive.vue")
      },
      {
          path:"comment",
          name:"comment",
          component: () => import ("../views/single-page/comment.vue")
      }
    ],
  },
];
