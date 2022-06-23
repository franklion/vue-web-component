import { createRouter, createWebHistory } from "vue-router"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/vue",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/vue/about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/vue/localstorage",
      component: () => import("./views/LocalStorage.vue")
    }
  ]
})
