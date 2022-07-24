<template>
  <div id="app">
    <Layout />
    <router-view />
  </div>
</template>
<script>
import Layout from '@/components/Layout.vue'
export default {
  components: { Layout }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
