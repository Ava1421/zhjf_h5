<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-size: 12px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #041530;
  background-color: #f6fafb;
}
img {
  width: 100%;
}
.red-text {
  color: #e03c2b;
}
.grey-text {
  color: #5c5c5c;
}
</style>
