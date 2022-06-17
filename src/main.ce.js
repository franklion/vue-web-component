import { defineCustomElement } from "./defineCustomElementWithStyles"
import App from "./App.ce.vue"
import store from "./store"
import router from "./router"

customElements.define(
  "sa-app",
  defineCustomElement(App, {
    plugins: [store, router]
  })
)
