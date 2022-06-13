import { defineCustomElement } from "vue"
import MyFirstCustomElement from "./elements/MyFirstCustomElement.ce.vue"

customElements.define("first-element", defineCustomElement(MyFirstCustomElement))
