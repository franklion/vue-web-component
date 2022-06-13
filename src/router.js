import { createRouter, createMemoryHistory } from "vue-router"
import Home from "./views/Home.ce.vue"

export default createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: () => import("./views/About.ce.vue")
    }
  ]
})
