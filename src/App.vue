<template>
  <div id="app">
    <HelloWorld msg="Wedding Inv Go"/>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Invitees'}">Invitees</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
