<template>
  <div ref="rootRef" class="container">
    <h1>My First Custom Element - {{ bg }}</h1>
    <p>style path - {{ path }}</p>

    <button>SUP!</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"

export default {
  name: "MyFirstCustomElement.ce",
  props: {
    bg: {
      type: String
    },
    path: {
      type: String
    }
  },
  setup(props) {
    const rootRef = ref(null)

    const appendFile = () => {
      let file = document.createElement("link")
      file.rel = "stylesheet"
      file.href = props.path
      rootRef.value.appendChild(file)
    }

    onMounted(() => {
      appendFile()
    })

    return {
      rootRef
    }
  }
}
</script>

<style scoped>
.container {
  border: 1px solid;
}

h1 {
  color: pink;
}
</style>
