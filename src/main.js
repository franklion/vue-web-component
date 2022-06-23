import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

export class CustomElement extends HTMLElement {
  connectedCallback() {
    const app = createApp(App)
    app.use(store)
    app.use(router)
    app.mount(this)
  }
}

customElements.define("sa-app", CustomElement)
