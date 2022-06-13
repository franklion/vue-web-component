<template>
  <div>
    <h1>Local Storage</h1>
    <p>will set key "test-abc", value "def" to localStorage</p>
  </div>
</template>

<script>
export default {
  name: "LocalStorage",
  components: {},
  setup() {
    localStorage.setItem("test-abc", "def")
  }
}
</script>
