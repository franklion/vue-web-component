<template>
  <div>
    <nav>
      <router-link to="/vue">Home</router-link> | <router-link to="/vue/about">About</router-link> |
      <router-link to="/vue/localstorage">LocalStorage</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  color: red !important; /* override h3 style in HelloWorld.vue */
}
</style>
