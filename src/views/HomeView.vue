<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Title msg="Este es otro titulo"></Title>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Title
  }
}
</script>
